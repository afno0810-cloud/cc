import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js"
import { withAir } from "./air.js"
import { waveHeight, waveSlope } from "./waves.js"
import { landHeight, shoreAt } from "./terrain.js"

/* ================================================================
   Things in the harbour, all made with Higgsfield (image → 3D):
   Munkholmen, the old wharves, Nidaros cathedral, a lighthouse, a
   pontoon, boats at anchor, a coastal ship on its way out the fjord,
   and navigation buoys (red to port, green to starboard, a yellow and
   black cardinal mark). The boats and buoys ride the same waves as Argus.
   ================================================================ */

const polar = (deg, r) => [Math.cos((deg * Math.PI) / 180) * r, Math.sin((deg * Math.PI) / 180) * r]

// size = the model's longest side in scene units (1 unit = 0.3 m)
const LAYOUT = [
    { file: "munkholmen", at: polar(147, 4600), size: 780, sink: 0.12, face: 0.9 },
    { file: "lighthouse", at: polar(109, 980), size: 44, sink: 0.02, rock: 26 },
    { file: "pontoon", at: [-96, 46], size: 44, float: true, sink: 0.35, yaw: 0.35, lift: -0.2 },
    { file: "snekke", at: [-104, 62], size: 19, float: true, sink: 0.3, yaw: 2.0 },
    { file: "yacht", at: [-150, 118], size: 40, float: true, sink: 0.2, yaw: 0.9, tall: true },
    { file: "yacht", at: [-205, 64], size: 36, float: true, sink: 0.2, yaw: 2.4, tall: true },
    { file: "snekke", at: [-120, -44], size: 18, float: true, sink: 0.3, yaw: -0.6 },
    { file: "buoy-red", at: [-70, 52], size: 10, float: true, sink: 0.3, buoy: "port" },
    { file: "buoy-green", at: [-58, 88], size: 10, float: true, sink: 0.3, buoy: "stbd" },
    { file: "buoy-red", at: [-128, 84], size: 10, float: true, sink: 0.3, buoy: "port" },
    { file: "buoy-green", at: [-112, 126], size: 10, float: true, sink: 0.3, buoy: "stbd" },
    { file: "buoy-cardinal", at: [58, -40], size: 11, float: true, sink: 0.3, buoy: "cardinal" },
    { file: "buoy-red", at: [120, 70], size: 10, float: true, sink: 0.3, buoy: "port" },
    { file: "buoy-green", at: [150, 30], size: 10, float: true, sink: 0.3, buoy: "stbd" },
    { file: "wharves", at: "wharves", size: 150, sink: 0.04, faceOrigin: true },
    { file: "nidaros", at: "nidaros", size: 360, sink: 0.02, face: 1.2, land: true },
    { file: "ship", at: [0, 0], size: 420, sink: 0.14, ship: true },
]

export function createProps({ lowPower = false, base = "/media/models/world/" } = {}) {
    const group = new THREE.Group()
    const floaters = [] // { obj, x, z, lift, k }
    const obstacles = [] // for the drive mode: things you bump into { x, z, r }
    const buoys = [] // for the drive mode: { obj, x, z, r, kind }
    const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder)
    const cache = new Map()
    const load = (file) => {
        if (!cache.has(file)) {
            // a host page can hand over the model bytes itself (the one-file preview does)
            const host = typeof window.__glbSource === "function" ? window.__glbSource("world/" + file) : null
            cache.set(
                file,
                host
                    ? host.then(
                          (buf) =>
                              new Promise((res, rej) => {
                                  const cib = window.createImageBitmap
                                  try {
                                      window.createImageBitmap = undefined
                                  } catch (e) {
                                      /* read-only: keep the default */
                                  }
                                  loader.parse(buf, "", res, rej)
                                  window.createImageBitmap = cib
                              })
                      )
                    : loader.loadAsync(base + file + ".glb")
            )
        }
        return cache.get(file)
    }
    let ship = null
    const lamps = [] // night lights on things: { sprite, base }

    // a rock for the lighthouse to stand on
    function rock(x, z, r) {
        const geo = new THREE.IcosahedronGeometry(1, 4)
        const p = geo.attributes.position
        const v = new THREE.Vector3()
        for (let i = 0; i < p.count; i++) {
            v.fromBufferAttribute(p, i)
            const n = Math.sin(v.x * 5.1 + v.z * 3.3) * 0.12 + Math.sin(v.y * 7.7 + v.x * 2.1) * 0.08 + Math.sin(v.z * 13.0) * 0.04
            v.multiplyScalar(1 + n)
            v.y *= 0.42
            p.setXYZ(i, v.x, v.y, v.z)
        }
        geo.computeVertexNormals()
        const m = new THREE.Mesh(geo, withAir(new THREE.MeshStandardMaterial({ color: new THREE.Color(0.14, 0.125, 0.11), roughness: 0.95, flatShading: true })))
        m.scale.set(r, r, r * 0.85)
        m.position.set(x, -r * 0.08, z)
        group.add(m)
        return r * 0.42 * 0.85
    }

    function glowSprite(color, size) {
        const c = document.createElement("canvas")
        c.width = c.height = 64
        const g = c.getContext("2d")
        const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32)
        grd.addColorStop(0, "rgba(255,255,255,1)")
        grd.addColorStop(0.2, "rgba(255,255,255,0.5)")
        grd.addColorStop(1, "rgba(255,255,255,0)")
        g.fillStyle = grd
        g.fillRect(0, 0, 64, 64)
        const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), color, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }))
        s.scale.setScalar(size)
        return s
    }

    const ready = Promise.all(
        LAYOUT.filter((l) => !(lowPower && l.tall && l.file === "yacht" && l.at[0] < -180)).map(async (l) => {
            let gltf
            try {
                gltf = await load(l.file)
            } catch (e) {
                return
            }
            const obj = gltf.scene.clone(true)
            obj.traverse((o) => {
                if (!o.isMesh) return
                // the generated materials come out fully metallic: these are painted, wooden and stone things
                const m = o.material.clone()
                m.metalness = 0
                m.roughness = 0.82
                m.envMapIntensity = 1
                if (m.map) m.map.anisotropy = 4
                o.material = withAir(m)
            })
            // centre it, stand it on its base, and scale it
            const box = new THREE.Box3().setFromObject(obj)
            const size = box.getSize(new THREE.Vector3())
            const c = box.getCenter(new THREE.Vector3())
            obj.position.set(-c.x, -box.min.y, -c.z)
            const k = l.size / Math.max(size.x, size.y, size.z)
            const holder = new THREE.Group()
            const inner = new THREE.Group()
            inner.add(obj)
            inner.scale.setScalar(k)
            inner.position.y = -size.y * k * (l.sink || 0)
            holder.add(inner)

            let x = 0
            let z = 0
            let y = 0
            if (l.at === "wharves") {
                // on piles in the water, in the city, facing the harbour
                const deg = 247
                ;[x, z] = polar(deg, shoreAt(deg)[0] * 0.9)
            } else if (l.at === "nidaros") {
                const deg = 283
                ;[x, z] = polar(deg, shoreAt(deg)[0] + 1200)
                y = landHeight(x, z)
            } else {
                ;[x, z] = l.at
            }
            if (l.rock) y = rock(x, z, l.rock) - 1
            holder.position.set(x, y, z)
            if (l.faceOrigin) holder.rotation.y = Math.atan2(-x, -z)
            else if (l.face !== undefined) holder.rotation.y = l.face
            else if (l.yaw !== undefined) holder.rotation.y = l.yaw
            group.add(holder)

            if (l.float) floaters.push({ obj: holder, x, z, lift: l.lift || 0, yaw: holder.rotation.y, k: l.size < 12 ? 1.4 : 0.6 })
            if (!l.buoy && !l.ship && !l.land && l.at !== "wharves") obstacles.push({ x, z, r: l.rock ? l.rock * 1.1 : l.file === "munkholmen" ? l.size * 0.42 : l.size * (l.file === "pontoon" ? 0.32 : 0.36) })
            if (l.buoy) {
                buoys.push({ obj: holder, x, z, r: 2.4, kind: l.buoy, vx: 0, vz: 0, ox: x, oz: z })
                const light = glowSprite(l.buoy === "port" ? 0xff4030 : l.buoy === "stbd" ? 0x40ff70 : 0xffffff, 5)
                light.position.set(0, l.size * 0.93, 0)
                holder.add(light)
                lamps.push({ sprite: light, blink: l.buoy === "cardinal" ? 1.0 : 3.0, phase: Math.random() * 3 })
            }
            if (l.file === "lighthouse") {
                const lamp = glowSprite(0xfff2d0, 40)
                lamp.position.set(0, l.size * 0.86, 0)
                holder.add(lamp)
                lamps.push({ sprite: lamp, blink: 0, phase: 0 })
                beam.position.set(x, y + l.size * 0.86, z)
            }
            if (l.ship) {
                ship = { obj: holder, u: 0.35 }
                const port = glowSprite(0xff3020, 16)
                const stbd = glowSprite(0x30ff60, 16)
                const mast = glowSprite(0xffffff, 18)
                port.position.set(-l.size * 0.035, l.size * 0.12, l.size * 0.22)
                stbd.position.set(l.size * 0.035, l.size * 0.12, l.size * 0.22)
                mast.position.set(0, l.size * 0.22, l.size * 0.1)
                holder.add(port, stbd, mast)
                lamps.push({ sprite: port, blink: 0 }, { sprite: stbd, blink: 0 }, { sprite: mast, blink: 0 })
            }
        })
    )

    // the lighthouse beam: two long cones of light that turn at night
    const beam = (() => {
        const g = new THREE.Group()
        const geo = new THREE.ConeGeometry(60, 1400, 24, 1, true)
        geo.translate(0, -700, 0)
        geo.rotateZ(Math.PI / 2)
        const mat = new THREE.ShaderMaterial({
            transparent: true,
            depthWrite: false,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending,
            uniforms: { uO: { value: 0 } },
            vertexShader: /* glsl */ `varying float vX; void main(){ vX = position.x; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
            fragmentShader: /* glsl */ `uniform float uO; varying float vX; void main(){ float a = clamp(1.0 - vX / 1400.0, 0.0, 1.0); gl_FragColor = vec4(vec3(1.0, 0.93, 0.78) * a * a * 0.05 * uO, 1.0); }`,
        })
        const a = new THREE.Mesh(geo, mat)
        const b = new THREE.Mesh(geo, mat)
        b.rotation.y = Math.PI
        g.add(a, b)
        g.userData.mat = mat
        return g
    })()
    group.add(beam)

    // the ship's way out the fjord
    const SHIP_A = new THREE.Vector3(...[polar(40, 5200)[0], 0, polar(40, 5200)[1]])
    const SHIP_B = new THREE.Vector3(...[polar(128, 7400)[0], 0, polar(128, 7400)[1]])

    const tmp = new THREE.Vector3()
    return {
        group,
        ready,
        buoys,
        floaters,
        obstacles,
        update(t, dt, night) {
            for (const f of floaters) {
                const h = waveHeight(f.x, f.z, t, 1)
                const [sx, sz] = waveSlope(f.x, f.z, t, 1)
                f.obj.position.set(f.x, h * 0.85 + f.lift, f.z)
                f.obj.rotation.set(sz * f.k, f.yaw, -sx * f.k)
            }
            // buoys pushed by the boat drift back to where they are moored
            for (const b of buoys) {
                b.vx += (b.ox - b.x) * dt * 0.6
                b.vz += (b.oz - b.z) * dt * 0.6
                b.vx *= Math.exp(-dt * 1.5)
                b.vz *= Math.exp(-dt * 1.5)
                b.x += b.vx * dt
                b.z += b.vz * dt
                const f = floaters.find((q) => q.obj === b.obj)
                if (f) {
                    f.x = b.x
                    f.z = b.z
                }
            }
            if (ship) {
                // about 7 knots: it takes a quarter of an hour to cross
                ship.u = (ship.u + dt * 0.0011) % 1
                tmp.lerpVectors(SHIP_A, SHIP_B, ship.u)
                ship.obj.position.set(tmp.x, waveHeight(tmp.x, tmp.z, t, 0.3), tmp.z)
                ship.obj.rotation.y = Math.atan2(SHIP_B.x - SHIP_A.x, SHIP_B.z - SHIP_A.z)
            }
            for (const l of lamps) {
                const on = l.blink ? (Math.sin(t * l.blink + (l.phase || 0)) > 0.6 ? 1 : 0) : 1
                l.sprite.material.opacity = night * on
                l.sprite.visible = night > 0.02
            }
            beam.rotation.y = t * 0.6
            beam.userData.mat.uniforms.uO.value = night
            beam.visible = night > 0.02
        },
    }
}
