import * as THREE from "three"
import { COLORS } from "./sea.js"

/* ================================================================
   The globe: the continents as a point cloud (Natural Earth 110m, from
   the world-atlas package), a thin atmosphere, and the route from
   Trondheim (Njord) to Sarasota (RoboBoat) drawn as an arc.
   It hangs in the night sky over the harbour; a "globe" stage flies the
   camera up to it.
   ================================================================ */

export const GLOBE_CENTER = new THREE.Vector3(0, 72, -170)
export const GLOBE_R = 36
export const PLACES = {
    trondheim: { lat: 63.43, lon: 10.4 },
    sarasota: { lat: 27.34, lon: -82.53 },
}

const D2R = Math.PI / 180
// lon 0 faces +z, north is +y
export function toVec(lat, lon, r = 1, out = new THREE.Vector3()) {
    const la = lat * D2R
    const lo = lon * D2R
    return out.set(Math.cos(la) * Math.sin(lo) * r, Math.sin(la) * r, Math.cos(la) * Math.cos(lo) * r)
}

async function landMask() {
    const [{ feature }, landMod] = await Promise.all([import("topojson-client"), import("world-atlas/land-110m.json")])
    const topo = landMod.default || landMod
    const land = feature(topo, topo.objects.land)
    const W = 1024
    const H = 512
    const c = document.createElement("canvas")
    c.width = W
    c.height = H
    const g = c.getContext("2d", { willReadFrequently: true })
    g.fillStyle = "#fff"
    const polys = []
    for (const f of land.features) {
        const geom = f.geometry
        if (geom.type === "Polygon") polys.push(geom.coordinates)
        else if (geom.type === "MultiPolygon") polys.push(...geom.coordinates)
    }
    // rings that cross the date line: unwrap the longitudes and draw them three times
    for (const poly of polys) {
        for (const shift of [-360, 0, 360]) {
            g.beginPath()
            for (const ring of poly) {
                let prev = null
                let off = 0
                ring.forEach(([lon, lat], i) => {
                    if (prev !== null) {
                        const d = lon + off - prev
                        if (d > 180) off -= 360
                        else if (d < -180) off += 360
                    }
                    const L = lon + off
                    prev = L
                    const x = ((L + shift + 180) / 360) * W
                    const y = ((90 - lat) / 180) * H
                    if (i === 0) g.moveTo(x, y)
                    else g.lineTo(x, y)
                })
                g.closePath()
            }
            g.fill("evenodd")
        }
    }
    const data = g.getImageData(0, 0, W, H).data
    return (lat, lon) => {
        const x = Math.min(W - 1, Math.max(0, Math.floor(((lon + 180) / 360) * W)))
        const y = Math.min(H - 1, Math.max(0, Math.floor(((90 - lat) / 180) * H)))
        return data[(y * W + x) * 4] > 127
    }
}

export async function createGlobe({ lowPower }) {
    const isLand = await landMask()
    const group = new THREE.Group() // at the centre, turned so a place faces the camera
    const spin = new THREE.Group() // the earth itself
    group.position.copy(GLOBE_CENTER)
    group.add(spin)

    // --- points on a Fibonacci sphere, dense on land, sparse on the sea ---
    const N = lowPower ? 26000 : 60000
    const pos = []
    const kind = []
    const rnd = []
    const v = new THREE.Vector3()
    const golden = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < N; i++) {
        const y = 1 - (2 * (i + 0.5)) / N
        const lat = Math.asin(y) / D2R
        let lon = ((i * golden) / D2R) % 360
        if (lon > 180) lon -= 360
        const land = isLand(lat, lon)
        if (!land && i % 9 !== 0) continue
        toVec(lat, lon, GLOBE_R * (land ? 1.004 : 1.0), v)
        pos.push(v.x, v.y, v.z)
        kind.push(land ? 1 : 0)
        rnd.push(Math.random())
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3))
    geo.setAttribute("aLand", new THREE.Float32BufferAttribute(kind, 1))
    geo.setAttribute("aRnd", new THREE.Float32BufferAttribute(rnd, 1))
    const U = {
        uOpacity: { value: 0 },
        uTime: { value: 0 },
        uPx: { value: 1 },
        uProj: { value: 800 },
        uHome: { value: toVec(PLACES.trondheim.lat, PLACES.trondheim.lon, GLOBE_R) },
        uIce: { value: COLORS.ice },
        uSteel: { value: COLORS.steel },
        uLav: { value: COLORS.lavender },
    }
    const pts = new THREE.Points(
        geo,
        new THREE.ShaderMaterial({
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            uniforms: U,
            vertexShader: /* glsl */ `
                attribute float aLand; attribute float aRnd;
                uniform float uTime; uniform float uPx; uniform float uProj; uniform vec3 uHome;
                uniform vec3 uIce; uniform vec3 uSteel; uniform vec3 uLav;
                varying vec3 vCol; varying float vA;
                void main() {
                    vec4 mv = modelViewMatrix * vec4(position, 1.0);
                    // points on the far side fade out
                    vec3 n = normalize(mat3(modelViewMatrix) * position);
                    float facing = clamp(dot(n, normalize(-mv.xyz)) * 1.6 + 0.2, 0.0, 1.0);
                    float near = 1.0 - smoothstep(2.0, 11.0, distance(position, uHome));
                    float tw = 0.8 + 0.2 * sin(uTime * 2.0 + aRnd * 30.0);
                    vCol = mix(uSteel * 1.2, mix(uIce, vec3(1.0), 0.3), aLand);
                    vCol = mix(vCol, uLav * 1.6, near * aLand);
                    vA = facing * (aLand * (0.55 + near * 0.8) * tw + (1.0 - aLand) * 0.22);
                    gl_PointSize = max(1.0, uPx * (aLand > 0.5 ? 0.3 : 0.24) * uProj / -mv.z);
                    gl_Position = projectionMatrix * mv;
                }
            `,
            fragmentShader: /* glsl */ `
                uniform float uOpacity; varying vec3 vCol; varying float vA;
                void main() {
                    float d = length(gl_PointCoord - 0.5);
                    if (d > 0.5) discard;
                    gl_FragColor = vec4(vCol * vA * uOpacity * (1.0 - d * 1.8), 1.0);
                }
            `,
        })
    )
    pts.frustumCulled = false
    spin.add(pts)

    // a dark core so the far side does not shine through
    const core = new THREE.Mesh(
        new THREE.SphereGeometry(GLOBE_R * 0.985, 64, 32),
        new THREE.MeshBasicMaterial({ color: new THREE.Color("#04070b"), transparent: true, opacity: 0, fog: false })
    )
    spin.add(core)

    // atmosphere: a soft rim of light
    const atmo = new THREE.Mesh(
        new THREE.SphereGeometry(GLOBE_R * 1.16, 64, 32),
        new THREE.ShaderMaterial({
            transparent: true,
            depthWrite: false,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending,
            uniforms: { uOpacity: U.uOpacity, uCol: { value: new THREE.Color("#7fa3d9") } },
            vertexShader: /* glsl */ `
                varying vec3 vN; varying vec3 vV;
                void main() { vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }
            `,
            fragmentShader: /* glsl */ `
                uniform float uOpacity; uniform vec3 uCol; varying vec3 vN; varying vec3 vV;
                void main() { float k = pow(clamp(0.78 + dot(vN, vV), 0.0, 1.0), 4.0); gl_FragColor = vec4(uCol * k * 1.6 * uOpacity, 1.0); }
            `,
        })
    )
    group.add(atmo)

    // --- the route: a great-circle arc, lifted off the surface ---
    const A = toVec(PLACES.trondheim.lat, PLACES.trondheim.lon, 1)
    const B = toVec(PLACES.sarasota.lat, PLACES.sarasota.lon, 1)
    const ARC_N = 700
    const ap = []
    const at = []
    const qa = new THREE.Quaternion()
    const angle = A.angleTo(B)
    const axis = new THREE.Vector3().crossVectors(A, B).normalize()
    for (let i = 0; i < ARC_N; i++) {
        const t = i / (ARC_N - 1)
        qa.setFromAxisAngle(axis, angle * t)
        v.copy(A).applyQuaternion(qa).multiplyScalar(GLOBE_R * (1.01 + 0.2 * Math.sin(Math.PI * t)))
        ap.push(v.x, v.y, v.z)
        at.push(t)
    }
    const arcGeo = new THREE.BufferGeometry()
    arcGeo.setAttribute("position", new THREE.Float32BufferAttribute(ap, 3))
    arcGeo.setAttribute("aT", new THREE.Float32BufferAttribute(at, 1))
    const arcU = { uTo: { value: 0 }, uTime: U.uTime, uOpacity: U.uOpacity, uPx: U.uPx, uProj: U.uProj, uYel: { value: COLORS.cardinal } }
    const arc = new THREE.Points(
        arcGeo,
        new THREE.ShaderMaterial({
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            uniforms: arcU,
            vertexShader: /* glsl */ `
                attribute float aT; uniform float uTo; uniform float uTime; uniform float uPx; uniform float uProj;
                varying float vA; varying float vHead;
                void main() {
                    vec4 mv = modelViewMatrix * vec4(position, 1.0);
                    float on = step(aT, uTo);
                    vHead = exp(-pow((aT - uTo) * 60.0, 2.0)) * step(0.001, uTo);
                    float dash = 0.55 + 0.45 * sin(aT * 220.0 - uTime * 5.0);
                    vA = on * dash + vHead * 1.1;
                    gl_PointSize = max(1.0, uPx * (0.42 + vHead * 0.5) * uProj / -mv.z);
                    gl_Position = projectionMatrix * mv;
                }
            `,
            fragmentShader: /* glsl */ `
                uniform float uOpacity; uniform vec3 uYel; varying float vA; varying float vHead;
                void main() {
                    float d = length(gl_PointCoord - 0.5);
                    if (d > 0.5) discard;
                    vec3 c = mix(uYel * 1.3, vec3(1.0), vHead * 0.6);
                    gl_FragColor = vec4(c * vA * uOpacity * (1.0 - d * 1.8), 1.0);
                }
            `,
        })
    )
    arc.frustumCulled = false
    spin.add(arc)

    // --- the two places: a ring on the ground and a short beam up ---
    const pins = []
    for (const [key, place] of Object.entries(PLACES)) {
        const p = toVec(place.lat, place.lon, GLOBE_R)
        const n = p.clone().normalize()
        const ringGeo = new THREE.RingGeometry(0.9, 1.25, 40)
        const ring = new THREE.Mesh(
            ringGeo,
            new THREE.MeshBasicMaterial({ color: COLORS.cardinal, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending, fog: false })
        )
        ring.position.copy(p).addScaledVector(n, 0.15)
        ring.lookAt(p.clone().multiplyScalar(2))
        const beamGeo = new THREE.CylinderGeometry(0.08, 0.08, 6, 8, 1, true)
        beamGeo.translate(0, 3, 0)
        const beam = new THREE.Mesh(
            beamGeo,
            new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.3, 0.5), transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, fog: false })
        )
        beam.position.copy(p)
        beam.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), n)
        spin.add(ring, beam)
        pins.push({ key, ring, beam, top: p.clone().addScaledVector(n, 6.5) })
    }

    // draw after the harbour (hills and water), the dark core first so the far side stays hidden
    core.renderOrder = 6
    pts.renderOrder = 7
    arc.renderOrder = 7
    pins.forEach((p) => (p.ring.renderOrder = p.beam.renderOrder = 7))
    atmo.renderOrder = 8

    const tmpV = new THREE.Vector3()
    return {
        group,
        spin,
        pins,
        arcMid: (() => {
            qa.setFromAxisAngle(axis, angle * 0.5)
            return A.clone().applyQuaternion(qa).multiplyScalar(GLOBE_R * 1.24)
        })(),
        setOpacity(o) {
            group.visible = o > 0.01
            U.uOpacity.value = o
            core.material.opacity = o * 0.92
        },
        // turn the earth so a lat/lon faces the camera (with a little tilt for depth)
        face(lat, lon) {
            spin.rotation.set(0, 0, 0)
            group.rotation.set(lat * D2R * 0.85, -lon * D2R, 0, "XYZ")
        },
        update(t, arcTo, pulse) {
            U.uTime.value = t
            arcU.uTo.value = arcTo
            pins.forEach((p, i) => {
                const k = i === 0 ? 1 : Math.min(1, arcTo * 1.05 > 0.98 ? 1 : 0)
                const s = 1 + ((t * 0.8 + i * 0.5) % 1) * 1.6
                p.ring.scale.setScalar(s)
                p.ring.material.opacity = U.uOpacity.value * k * (1 - ((t * 0.8 + i * 0.5) % 1)) * (0.8 + pulse * 0.4)
                p.beam.material.opacity = U.uOpacity.value * k * 0.7
            })
        },
        worldOf(local, out = tmpV) {
            return out.copy(local).applyMatrix4(spin.matrixWorld)
        },
        setPx(px, proj) {
            U.uPx.value = px
            U.uProj.value = proj
        },
    }
}
