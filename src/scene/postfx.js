import * as THREE from "three"
import { waveHeight } from "./world/waves.js"
import { withAir } from "./world/air.js"
import { cardinalMesh, otterMesh } from "./missions.js"
import { hullParts } from "./world/boats.js"

/* ================================================================
   Something happening at every post, not just a buoy: a scene over or
   round each one that shows what its card is about.
   - Argus: a hologram of the boat turning over the buoy.
   - Marinor: the logo mark, turning.  Njord: flags round the buoy.
   - On the course: a small Otter going round a cardinal mark.
   - RoboBoat: a globe with the way from Trondheim to Florida.
   - Partners: the sponsors' logos going round.  Join: the seven
     groups as lights going round.  Proteus: a hull being drawn.
   - The timeline: the year high over each post, in a beam of light.
   - The build: a lamp shining on each photo, dust in the light.
   - How Argus finds its way: a LiDAR sweep, satellites, a cost map
     on the water, the state machine, a path being planned, and four
     propellers with their signals.
   And light rising round the posts not yet visited. Far-off posts
   are left out of the picture.
   ================================================================ */

const U = { uTime: { value: 0 }, uGain: { value: 1 } }
const holoMats = new Map()
function holo(color, k = 1) {
    const key = color + "|" + k
    if (holoMats.has(key)) return holoMats.get(key)
    const m = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        uniforms: { uCol: { value: new THREE.Color(color) }, uK: { value: k }, ...U },
        vertexShader: /* glsl */ `varying vec3 vN; varying vec3 vV; varying float vY;
            void main(){
                vec4 wp = modelMatrix * vec4(position, 1.0);
                vY = wp.y;
                vN = normalize(mat3(modelMatrix) * normal);
                vV = normalize(cameraPosition - wp.xyz);
                gl_Position = projectionMatrix * viewMatrix * wp;
            }`,
        fragmentShader: /* glsl */ `uniform vec3 uCol; uniform float uTime; uniform float uGain; uniform float uK; varying vec3 vN; varying vec3 vV; varying float vY;
            void main(){
                float f = pow(1.0 - abs(dot(normalize(vN), vV)), 2.0);
                float scan = 0.6 + 0.4 * sin(vY * 10.0 - uTime * 4.0);
                float flick = 0.92 + 0.08 * sin(uTime * 23.0 + vY);
                gl_FragColor = vec4(uCol * (0.3 + f * 1.8) * scan * flick * uGain * uK, 1.0);
            }`,
    })
    holoMats.set(key, m)
    return m
}
const lineMat = (color, opacity = 0.9) => new THREE.LineBasicMaterial({ color, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending })
function textSprite(text, { color = "#e8eef8", size = 1.4, font = "600 44px system-ui, sans-serif", bg = "rgba(10,13,20,0.72)", border = null } = {}) {
    const c = document.createElement("canvas")
    const g = c.getContext("2d")
    g.font = font
    const w = Math.ceil(g.measureText(text).width) + 48
    c.width = w
    c.height = 80
    g.font = font
    if (bg) {
        g.fillStyle = bg
        g.beginPath()
        g.roundRect(2, 4, w - 4, 72, 36)
        g.fill()
        if (border) {
            g.strokeStyle = border
            g.lineWidth = 3
            g.stroke()
        }
    }
    g.fillStyle = color
    g.textAlign = "center"
    g.textBaseline = "middle"
    g.fillText(text, w / 2, 42)
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false, fog: false }))
    s.scale.set(size * (w / 80), size, 1)
    return s
}
// a soft beam of light, brightest at the bottom
function beam(color, h, r) {
    const m = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        uniforms: { uCol: { value: new THREE.Color(color) }, uA: { value: 1 }, ...U },
        vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: /* glsl */ `uniform vec3 uCol; uniform float uA; uniform float uTime; uniform float uGain; varying vec2 vUv;
            void main(){ float a = pow(1.0 - vUv.y, 1.8) * (0.8 + 0.2 * sin(uTime * 2.0 - vUv.y * 9.0)); gl_FragColor = vec4(uCol * a * uA * uGain * 0.35, 1.0); }`,
    })
    const o = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.35, r, h, 20, 1, true), m)
    o.position.y = h / 2
    return o
}
// light rising round a post (moved in the shader)
function motes(color, n = 26, r = 6, h = 14) {
    const pos = new Float32Array(n * 3)
    const seed = new Float32Array(n)
    for (let i = 0; i < n; i++) seed[i] = Math.random()
    const g = new THREE.BufferGeometry()
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3))
    g.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1))
    const m = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: { uCol: { value: new THREE.Color(color) }, uA: { value: 1 }, uR: { value: r }, uH: { value: h }, ...U },
        vertexShader: /* glsl */ `attribute float aSeed; uniform float uTime; uniform float uR; uniform float uH; varying float vA;
            void main(){
                float k = fract(aSeed * 7.13 + uTime * (0.05 + aSeed * 0.05));
                float a = aSeed * 40.0 + uTime * (0.3 + aSeed * 0.4);
                float rr = uR * (0.4 + 0.6 * fract(aSeed * 3.7));
                vec3 p = vec3(cos(a) * rr, k * uH, sin(a) * rr);
                vA = sin(k * 3.14159);
                vec4 mv = modelViewMatrix * vec4(p, 1.0);
                gl_PointSize = (2.0 + 2.0 * fract(aSeed * 13.0)) * 120.0 / -mv.z;
                gl_Position = projectionMatrix * mv;
            }`,
        fragmentShader: /* glsl */ `uniform vec3 uCol; uniform float uA; uniform float uGain; varying float vA;
            void main(){ vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(uCol * a * vA * uA * uGain, 1.0); }`,
    })
    const p = new THREE.Points(g, m)
    p.frustumCulled = false
    return p
}
// a grid of cells on the water, drawn into a canvas each time it changes
function waterGrid(size, cells, draw) {
    const PX = 128
    const c = document.createElement("canvas")
    c.width = c.height = PX
    const g = c.getContext("2d")
    const tex = new THREE.CanvasTexture(c)
    tex.magFilter = THREE.NearestFilter
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(size, size), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }))
    mesh.rotation.x = -Math.PI / 2
    mesh.position.y = 0.25
    const cell = PX / cells
    return {
        mesh,
        paint(t) {
            g.clearRect(0, 0, PX, PX)
            for (let j = 0; j < cells; j++) for (let i = 0; i < cells; i++) draw(g, i, j, cell, t)
            tex.needsUpdate = true
        },
    }
}

export function createPostFx({ places, getArgusModel, lowPower = false }) {
    const root = new THREE.Group()
    const decos = []
    const loader = new THREE.TextureLoader()

    function deco(id, build) {
        const p = places.list.find((q) => q.id === id)
        if (!p) return
        const g = new THREE.Group()
        root.add(g)
        const d = { p, g, tick: null, far: 0 }
        // the info buoys' scenes stand over the buoy: their sign goes up over them
        if (p.group === "pages") p.signY = 13.5
        build(g, d)
        decos.push(d)
    }
    const tickers = (d, fn) => (d.tick = fn)

    // ---- the info buoys ----
    deco("argus", (g, d) => {
        const holder = new THREE.Group()
        holder.position.y = 7.4
        g.add(holder)
        const base = new THREE.Mesh(new THREE.TorusGeometry(3.8, 0.1, 6, 64), holo("#7ff0ff", 1.6))
        base.rotation.x = Math.PI / 2
        base.position.y = 5.6
        g.add(base)
        let built = false
        tickers(d, (t) => {
            if (!built) {
                const m = getArgusModel()
                if (m) {
                    built = true
                    const c = m.clone(true)
                    c.traverse((o) => {
                        if (o.isMesh) o.material = holo("#7ff0ff", 1.3)
                        if (o.isPoints || o.isSprite) o.visible = false
                    })
                    c.scale.setScalar(5.4)
                    holder.add(c)
                }
            }
            holder.rotation.y = t * 0.5
            holder.position.y = 7.4 + Math.sin(t * 1.3) * 0.3
            base.scale.setScalar(1 + 0.05 * Math.sin(t * 3))
        })
    })
    deco("marinor", (g, d) => {
        // the logo mark: a ring, a cross, and two quarters filled
        const m = holo("#c39cf0", 1.8)
        const e = new THREE.Group()
        e.position.y = 8.4
        e.scale.setScalar(1.35)
        g.add(e)
        e.add(new THREE.Mesh(new THREE.TorusGeometry(2.3, 0.16, 8, 64), m))
        const bar = new THREE.BoxGeometry(5.8, 0.2, 0.2)
        e.add(new THREE.Mesh(bar, m))
        const v = new THREE.Mesh(bar, m)
        v.rotation.z = Math.PI / 2
        e.add(v)
        for (const [a0, a1] of [
            [0, Math.PI / 2],
            [Math.PI, Math.PI / 2],
        ]) {
            const q = new THREE.Mesh(new THREE.CircleGeometry(2.3, 24, a0, a1), m)
            e.add(q)
        }
        tickers(d, (t) => {
            e.rotation.y = t * 0.6
            e.position.y = 8.4 + Math.sin(t * 1.1) * 0.25
        })
    })
    deco("njord", (g, d) => {
        // flags on floats round the buoy
        const cols = ["#f2c230", "#c39cf0", "#f4f4f2", "#7cc4ff", "#ff8a6c", "#9fe3b5"]
        const flags = []
        cols.forEach((col, i) => {
            const a = (i / cols.length) * Math.PI * 2
            const f = new THREE.Group()
            f.position.set(Math.cos(a) * 8.5, 0, Math.sin(a) * 8.5)
            g.add(f)
            f.add(new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.6, 0.6, 10), withAir(new THREE.MeshStandardMaterial({ color: 0xe9eaee, roughness: 0.5 }))))
            const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 6, 6), withAir(new THREE.MeshStandardMaterial({ color: 0xc8ccd2, roughness: 0.4, metalness: 0.5 })))
            pole.position.y = 3
            f.add(pole)
            const geo = new THREE.PlaneGeometry(2.4, 1.3, 8, 2)
            geo.translate(1.2, 0, 0)
            const flag = new THREE.Mesh(geo, withAir(new THREE.MeshStandardMaterial({ color: col, roughness: 0.8, side: THREE.DoubleSide })))
            flag.position.y = 5.3
            f.add(flag)
            flags.push({ flag, base: geo.attributes.position.array.slice(), ph: i })
        })
        tickers(d, (t) => {
            for (const { flag, base, ph } of flags) {
                const P = flag.geometry.attributes.position
                for (let k = 0; k < P.count; k++) {
                    const x = base[k * 3]
                    P.setZ(k, Math.sin(x * 2.4 - t * 6 + ph) * 0.18 * x)
                    P.setY(k, base[k * 3 + 1] - x * 0.05)
                }
                P.needsUpdate = true
                flag.parent.rotation.y = 0.6 + Math.sin(t * 0.4 + ph) * 0.15
            }
        })
    })
    deco("course", (g, d) => {
        const mark = cardinalMesh("N")
        mark.scale.setScalar(0.55)
        mark.position.set(-7, 0, 5)
        g.add(mark)
        const { group: otter, light } = otterMesh()
        otter.scale.setScalar(0.6)
        g.add(otter)
        tickers(d, (t) => {
            const a = t * 0.35
            otter.position.set(Math.cos(a) * 11, 0.1, Math.sin(a) * 11)
            otter.rotation.y = -a - Math.PI / 2
            light.material.color.setRGB(1, 0.69, 0.19).multiplyScalar(Math.sin(t * 6) > 0.2 ? 2 : 0.2)
            mark.rotation.z = Math.sin(t * 1.1) * 0.05
        })
    })
    deco("roboboat", (g, d) => {
        // a globe of lines, and the way from Trondheim to Sarasota on it
        const R = 3.2
        const globe = new THREE.Group()
        globe.position.y = 8.6
        g.add(globe)
        const wire = new THREE.LineSegments(new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(R, 2)), lineMat(0x9fd4ff, 0.7))
        globe.add(wire)
        globe.add(new THREE.Mesh(new THREE.SphereGeometry(R * 0.98, 32, 16), holo("#3a8fe0", 1.1)))
        const ll = (lat, lon) => {
            const a = (lat * Math.PI) / 180
            const b = (lon * Math.PI) / 180
            return new THREE.Vector3(Math.cos(a) * Math.cos(b), Math.sin(a), -Math.cos(a) * Math.sin(b))
        }
        const A = ll(63.43, 10.4)
        const B = ll(27.34, -82.53)
        const pts = []
        for (let i = 0; i <= 48; i++) {
            const f = i / 48
            const v = A.clone().lerp(B, f).normalize()
            pts.push(v.multiplyScalar(R * (1 + 0.22 * Math.sin(f * Math.PI))))
        }
        const arc = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), lineMat(0xf2c230, 1))
        globe.add(arc)
        const dots = [A, B].map((v) => {
            const s = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), new THREE.MeshBasicMaterial({ color: 0xf2c230 }))
            s.position.copy(v).multiplyScalar(R * 1.01)
            globe.add(s)
            return s
        })
        const pulse = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), new THREE.MeshBasicMaterial({ color: 0xffffff }))
        globe.add(pulse)
        tickers(d, (t) => {
            globe.rotation.y = t * 0.25
            const k = (t * 0.35) % 1
            pulse.position.copy(pts[Math.floor(k * 48)])
            dots.forEach((s, i) => s.scale.setScalar(1 + 0.4 * Math.sin(t * 5 + i * 3)))
        })
    })
    deco("partners", (g, d) => {
        const p = d.p
        const ring = new THREE.Group()
        ring.position.y = 7.2
        g.add(ring)
        const n = p.logos.length
        p.logos.forEach(([src], i) => {
            const card = new THREE.Group()
            const a = (i / n) * Math.PI * 2
            card.position.set(Math.cos(a) * 6, 0, Math.sin(a) * 6)
            card.rotation.y = -a + Math.PI / 2
            ring.add(card)
            card.add(new THREE.Mesh(new THREE.PlaneGeometry(3.2, 1.6), new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide })))
            loader.load(src, (tex) => {
                tex.colorSpace = THREE.SRGBColorSpace
                const asp = tex.image.width / tex.image.height
                const w = Math.min(2.9, 1.3 * asp)
                const logo = new THREE.Mesh(new THREE.PlaneGeometry(w, w / asp), new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide }))
                logo.position.z = 0.02
                card.add(logo)
            })
        })
        tickers(d, (t) => {
            ring.rotation.y = t * 0.25
            ring.position.y = 7.2 + Math.sin(t * 0.9) * 0.3
        })
    })
    deco("join", (g, d) => {
        const names = ["Perception", "Autonomy", "Control", "GUI", "Hardware", "Economy", "PR"]
        const cols = ["#7cc4ff", "#9fe3b5", "#f2c230", "#c39cf0", "#ff8a6c", "#7ff0ff", "#d6baec"]
        const orbs = names.map((name, i) => {
            const o = new THREE.Group()
            g.add(o)
            o.add(new THREE.Mesh(new THREE.SphereGeometry(0.45, 16, 12), new THREE.MeshBasicMaterial({ color: cols[i] })))
            o.add(new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 12), holo(cols[i], 0.8)))
            const label = textSprite(name, { size: 0.9, color: cols[i] })
            label.position.y = 1.4
            o.add(label)
            return o
        })
        tickers(d, (t) => {
            orbs.forEach((o, i) => {
                const a = t * 0.3 + (i / orbs.length) * Math.PI * 2
                o.position.set(Math.cos(a) * 6.5, 6.8 + Math.sin(t * 1.4 + i) * 0.8, Math.sin(a) * 6.5)
            })
        })
    })
    deco("proteus", (g, d) => {
        // a hull drawn in light, line by line, again and again
        const { hull } = hullParts({ L: 14, B: 5, D: 1.0, F: 1.6, sheer: 0.3, sternW: 0.85, bands: [[99, "#ffffff"]] })
        const edges = new THREE.EdgesGeometry(hull, 8)
        const m = new THREE.ShaderMaterial({
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            uniforms: { uP: { value: 0 }, ...U },
            vertexShader: /* glsl */ `varying float vX; void main(){ vX = position.x; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
            fragmentShader: /* glsl */ `uniform float uP; uniform float uGain; varying float vX;
                void main(){ float k = (vX + 7.0) / 14.0; float on = step(k, uP); float edge = smoothstep(0.06, 0.0, abs(k - uP)); gl_FragColor = vec4(vec3(0.82, 0.68, 1.0) * (on * 1.6 + edge * 3.0) * uGain, 1.0); }`,
        })
        const lines = new THREE.LineSegments(edges, m)
        lines.position.y = 7.6
        lines.scale.setScalar(1.3)
        g.add(lines)
        tickers(d, (t) => {
            m.uniforms.uP.value = (t * 0.22) % 1.3
            lines.rotation.y = t * 0.3
        })
    })

    // ---- the timeline: the year in a beam of light ----
    for (const p of places.list.filter((q) => q.group === "timeline")) {
        deco(p.id, (g, d) => {
            const b = beam("#f2c230", 34, 2.2)
            g.add(b)
            const label = textSprite(p.badge === "→" ? "The long run" : p.badge, { size: 3.4, color: "#f2c230", font: "800 58px system-ui, sans-serif", bg: "rgba(10,13,20,0.55)", border: "rgba(242,194,48,0.8)" })
            label.position.y = 19
            g.add(label)
            const ring = new THREE.Mesh(new THREE.TorusGeometry(3.5, 0.06, 6, 48), holo("#f2c230", 1.2))
            ring.rotation.x = Math.PI / 2
            g.add(ring)
            tickers(d, (t) => {
                const k = places.isVisited(p.id) ? 0.45 : 1
                b.material.uniforms.uA.value = k
                label.position.y = 19 + Math.sin(t * 0.9 + p.x) * 0.4
                ring.position.y = 0.4 + ((t * 0.5 + p.x * 0.01) % 1) * 14
                ring.scale.setScalar(1 + ((t * 0.5 + p.x * 0.01) % 1) * 0.6)
            })
        })
    }

    // ---- the build: a lamp over each photo ----
    for (const p of places.list.filter((q) => q.group === "build")) {
        deco(p.id, (g, d) => {
            const cone = new THREE.Mesh(
                new THREE.ConeGeometry(4.6, 8, 24, 1, true),
                new THREE.ShaderMaterial({
                    transparent: true,
                    depthWrite: false,
                    blending: THREE.AdditiveBlending,
                    side: THREE.DoubleSide,
                    uniforms: { ...U },
                    vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
                    fragmentShader: /* glsl */ `uniform float uGain; varying vec2 vUv; void main(){ float a = pow(vUv.y, 1.5) * 0.18; gl_FragColor = vec4(vec3(1.0, 0.92, 0.75) * a * uGain, 1.0); }`,
                })
            )
            cone.position.y = 8.4
            g.add(cone)
            const lamp = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.5, 0.6, 12), new THREE.MeshBasicMaterial({ color: 0xfff1c8 }))
            lamp.position.y = 12.5
            g.add(lamp)
            const dust = motes("#fff1c8", 18, 3, 6)
            dust.position.y = 4.2
            g.add(dust)
            tickers(d, (t) => {
                if (p.easel) cone.rotation.y = lamp.rotation.y = p.easel.rotation.y
            })
        })
    }

    // ---- how Argus finds its way ----
    deco("a1", (g, d) => {
        // a LiDAR sweep: a fan of light going round, lighting up what it passes
        const fan = new THREE.Mesh(
            new THREE.CircleGeometry(16, 24, 0, 0.4),
            new THREE.MeshBasicMaterial({ color: 0x7ff0c8, transparent: true, opacity: 0.4, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide })
        )
        fan.rotation.x = -Math.PI / 2
        fan.position.y = 1.6
        g.add(fan)
        const targets = [0.7, 2.6, 4.4].map((a) => {
            const b = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(2.2, 2.2, 2.2)), lineMat(0x7ff0c8, 0.2))
            b.position.set(Math.cos(a) * 11, 1.1, -Math.sin(a) * 11)
            b.userData.a = a
            g.add(b)
            return b
        })
        tickers(d, (t) => {
            const a = (t * 2.2) % (Math.PI * 2)
            fan.rotation.z = a
            for (const b of targets) {
                const da = ((b.userData.a - a + Math.PI * 4) % (Math.PI * 2))
                b.material.opacity = 0.15 + 0.85 * Math.max(0, 1 - da / 1.6)
            }
        })
    })
    deco("a2", (g, d) => {
        // satellites going round high up, their signals coming down
        const sats = [0, 2.1, 4.2].map((ph) => {
            const s = new THREE.Group()
            s.scale.setScalar(1.6)
            s.add(new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 0.9), new THREE.MeshBasicMaterial({ color: 0xd8dde4 })))
            for (const sd of [-1, 1]) {
                const w = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.7, 2.2), new THREE.MeshBasicMaterial({ color: 0x2f5fa8 }))
                w.position.z = sd * 1.6
                s.add(w)
            }
            const ray = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1, 6), holo("#7cc4ff", 1.6))
            g.add(s, ray)
            return { s, ray, ph }
        })
        tickers(d, (t) => {
            for (const q of sats) {
                const a = t * 0.18 + q.ph
                q.s.position.set(Math.cos(a) * 10, 18 + Math.sin(a * 2) * 1.5, Math.sin(a) * 10)
                q.s.rotation.y = -a
                // the signal from the satellite to the buoy's top
                const top = new THREE.Vector3(0, 5, 0)
                const mid = top.clone().add(q.s.position).multiplyScalar(0.5)
                q.ray.position.copy(mid)
                q.ray.scale.set(1, q.s.position.distanceTo(top), 1)
                q.ray.lookAt(q.s.position.clone().add(g.position))
                q.ray.rotateX(Math.PI / 2)
                q.ray.material.uniforms.uK.value = 0.8 + 0.8 * Math.max(0, Math.sin(t * 3 + q.ph))
            }
        })
    })
    deco("a3", (g, d) => {
        // a cost map: dearer close to a rock, blocked on it
        const rock = new THREE.Mesh(new THREE.IcosahedronGeometry(2.2, 1), withAir(new THREE.MeshStandardMaterial({ color: 0x3a3631, roughness: 0.95, flatShading: true })))
        rock.position.set(6, -0.2, -5)
        rock.scale.y = 0.6
        g.add(rock)
        const grid = waterGrid(30, 15, (c, i, j, cell, t) => {
            const x = (i + 0.5) / 15 * 30 - 15
            const z = (j + 0.5) / 15 * 30 - 15
            const dist = Math.hypot(x - 6, z + 5)
            const r = Math.hypot(x, z) / 15
            const fade = Math.max(0, 1 - r * r)
            if (dist < 3.6) c.fillStyle = `rgba(255,70,60,${0.8 * fade})`
            else if (dist < 10) {
                const k = 1 - (dist - 3.6) / 6.4
                c.fillStyle = `rgba(${Math.round(160 + 95 * k)},${Math.round(120 + 40 * (1 - k))},${Math.round(240 - 180 * k)},${(0.15 + 0.55 * k * (0.8 + 0.2 * Math.sin(t * 3))) * fade})`
            } else c.fillStyle = `rgba(110,200,255,${0.14 * fade})`
            c.fillRect(i * cell + 1, j * cell + 1, cell - 2, cell - 2)
        })
        g.add(grid.mesh)
        let last = -1
        tickers(d, (t) => {
            const f = Math.floor(t * 6)
            if (f !== last) {
                last = f
                grid.paint(t)
            }
        })
    })
    deco("a4", (g, d) => {
        // the state machine: three states, the one in force lit
        const names = ["Following the course", "Going around another boat", "Docking"]
        const nodes = names.map((n, i) => {
            const a = (i / 3) * Math.PI * 2 + Math.PI / 2
            const o = new THREE.Group()
            o.position.set(Math.cos(a) * 4.2, 10 + Math.sin(a) * 2.2, 0)
            g.add(o)
            const ball = new THREE.Mesh(new THREE.SphereGeometry(0.8, 18, 12), holo("#7ff0c8", 1))
            o.add(ball)
            const label = textSprite(n, { size: 0.8, color: "#e8fdf6" })
            label.position.y = 1.5
            o.add(label)
            return { o, ball }
        })
        const pts = nodes.map((n) => n.o.position)
        const tri = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts), lineMat(0x7ff0c8, 0.5))
        g.add(tri)
        const turn = new THREE.Group()
        g.add(turn)
        turn.add(tri)
        nodes.forEach((n) => turn.add(n.o))
        tickers(d, (t) => {
            const on = Math.floor(t / 2.2) % 3
            nodes.forEach((n, i) => {
                n.ball.scale.setScalar(i === on ? 1.35 + 0.1 * Math.sin(t * 6) : 0.8)
                n.ball.material = holo(i === on ? "#f2c230" : "#7ff0c8", i === on ? 1.6 : 0.8)
            })
            turn.rotation.y = Math.sin(t * 0.3) * 0.6
        })
    })
    deco("a5", (g, d) => {
        // a path being planned round a block, again and again
        const block = new THREE.Mesh(new THREE.BoxGeometry(6, 2, 6), withAir(new THREE.MeshStandardMaterial({ color: 0x24272b, roughness: 0.7 })))
        block.position.set(0, 0.3, 2)
        g.add(block)
        const route = [
            [-12, -10],
            [-8, -6],
            [-6, -2],
            [-6, 4],
            [-4, 8],
            [2, 9],
            [8, 8],
            [12, 12],
        ]
        const grid = waterGrid(30, 15, (c, i, j, cell, t) => {
            const x = (i + 0.5) / 15 * 30 - 15
            const z = (j + 0.5) / 15 * 30 - 15
            const r = Math.hypot(x, z) / 15
            c.fillStyle = `rgba(110,200,255,${0.16 * Math.max(0, 1 - r * r)})`
            c.fillRect(i * cell + 1, j * cell + 1, cell - 2, cell - 2)
        })
        grid.paint(0)
        g.add(grid.mesh)
        const dots = route.map(() => {
            const s = new THREE.Mesh(new THREE.SphereGeometry(0.45, 10, 8), new THREE.MeshBasicMaterial({ color: 0x7ff0ff }))
            g.add(s)
            return s
        })
        route.forEach(([x, z], i) => dots[i].position.set(x, 0.6, z))
        tickers(d, (t) => {
            const k = (t * 0.6) % (route.length + 3)
            dots.forEach((s, i) => {
                s.visible = i < k
                s.scale.setScalar(i < k ? 1 + 0.3 * Math.max(0, 1 - (k - i)) : 1)
            })
        })
    })
    deco("a6", (g, d) => {
        // four propellers and their signals
        const props = [0, 1, 2, 3].map((i) => {
            const a = (i / 4) * Math.PI * 2 + Math.PI / 4
            const o = new THREE.Group()
            o.position.set(Math.cos(a) * 4.5, 7, Math.sin(a) * 4.5)
            o.scale.setScalar(1.5)
            g.add(o)
            for (let b = 0; b < 3; b++) {
                const blade = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.06, 0.35), holo("#c39cf0", 1.4))
                blade.rotation.y = (b / 3) * Math.PI * 2
                blade.position.set(Math.cos(blade.rotation.y) * 0.9, 0, -Math.sin(blade.rotation.y) * 0.9)
                o.add(blade)
            }
            const bar = new THREE.Mesh(new THREE.BoxGeometry(0.35, 1, 0.35), holo("#f2c230", 1.4))
            bar.position.set(Math.cos(a) * 4, 4, Math.sin(a) * 4)
            g.add(bar)
            return { o, bar, ph: i * 1.7, sp: 5 + i * 1.3 }
        })
        tickers(d, (t) => {
            for (const q of props) {
                const pwm = 0.5 + 0.5 * Math.sin(t * 0.8 + q.ph)
                q.o.rotation.y += 0.016 * q.sp * (0.4 + pwm * 2)
                q.bar.scale.y = 0.4 + pwm * 3
                q.bar.position.y = 1.8 + q.bar.scale.y / 2
            }
        })
    })

    // ---- light rising round the posts not yet seen ----
    for (const p of places.list) {
        const m = motes(p.gr.color, lowPower ? 10 : 20, 7, 12)
        m.userData.place = p
        root.add(m)
        decos.push({ p, g: m, tick: null, motes: true })
    }

    return {
        group: root,
        update(t, dt, { gain = 1, show = true, from }) {
            U.uTime.value = t
            U.uGain.value = gain
            root.visible = show
            if (!show) return
            for (const d of decos) {
                const p = d.p
                const dist = Math.hypot(p.item.x - from.x, p.item.z - from.z)
                const near = dist < (d.motes ? 160 : 300)
                d.g.visible = near && !(d.motes && places.isVisited(p.id))
                if (!d.g.visible) continue
                d.g.position.set(p.item.x, waveHeight(p.item.x, p.item.z, t, 1) * 0.85, p.item.z)
                if (d.tick) d.tick(t, dt)
            }
        },
    }
}
