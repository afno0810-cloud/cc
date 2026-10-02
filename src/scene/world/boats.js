import * as THREE from "three"
import { withAir } from "./air.js"
import { waveHeight } from "./waves.js"
import { shoreAt } from "./terrain.js"

/* ================================================================
   More boats about the harbour, built here from simple parts (a hull
   lofted from cross sections, painted in bands, with a deck, cabins,
   rails and people): a RIB that goes fast round the east harbour, three
   sailing dinghies on a triangle in the north, kayaks paddling along
   the west side, a tug on a slow round in the south, a fishing boat in
   the north, a small ferry going back and forth in the east, a
   speedboat, a rowing boat, a sailing yacht, a jet ski, boats on their
   moorings in the west and a fish farm out in the fjord. They float
   with the other boats (props.adopt), are solid (boxes in
   props.colliders, so they show on the LiDAR too), and leave a wake of
   foam behind them. Their routes keep clear of the Njord courses.
   The small things: navigation lights at dusk (red to port, green to
   starboard, white on top), smoke from the funnels, flags on the
   sterns, a collar of foam round every buoy and post, and sails far
   out in the fjord.

   Axes of a boat: bow along +x, starboard +z, up +y (1 unit = 0.3 m).
   ================================================================ */

const C = (hex) => new THREE.Color(hex)

// a hull from cross sections; L long, B wide, D deep below the water, F high above it
export function hullParts({ L, B, D, F, sheer = 0.25, sternW = 0.82, pointed = false, flare = 0.05, bands }) {
    const S = 30
    const pos = []
    const idx = []
    const rows = []
    const sec = (u) => {
        let w
        if (pointed) w = Math.pow(Math.sin(Math.PI * Math.min(0.995, Math.max(0.005, u))), 0.62)
        else w = u < 0.55 ? THREE.MathUtils.lerp(sternW, 1, THREE.MathUtils.smoothstep(u, 0, 0.55)) : Math.sqrt(Math.max(0.0004, 1 - Math.pow((u - 0.55) / 0.45, 2)))
        w *= B / 2
        let d = D
        if (u > 0.68) d *= 1 - 0.85 * Math.pow((u - 0.68) / 0.32, 1.5)
        if (pointed && u < 0.32) d *= 1 - 0.85 * Math.pow((0.32 - u) / 0.32, 1.5)
        else if (!pointed && u < 0.08) d *= 0.86 + 1.75 * u
        const s = F * (1 + sheer * u * u + (pointed ? sheer * (1 - u) * (1 - u) : 0))
        return { w, d, s }
    }
    for (let i = 0; i <= S; i++) {
        const u = i / S
        const x = -L / 2 + u * L
        const { w, d, s } = sec(u)
        // the topsides, with a point on every paint line so the bands stay straight
        const ys = [s, s * 0.5, 0, ...bands.map((q) => q[0]).filter((y) => y > 0.01 && y < s - 0.01)].sort((p, q) => q - p)
        const side = ys.map((y) => [w * (1 + flare * 4 * (y / s) * (1 - y / s)), y])
        side.push([w * 0.9, -d * 0.35], [w * 0.5, -d * 0.82], [0, -d])
        const ring = []
        for (const [z, y] of side) ring.push([x, y, z])
        for (let j = side.length - 2; j >= 0; j--) ring.push([x, side[j][1], -side[j][0]])
        rows.push(ring)
    }
    const R = rows[0].length
    for (const r of rows) for (const p of r) pos.push(...p)
    for (let i = 0; i < S; i++)
        for (let j = 0; j < R - 1; j++) {
            const a = i * R + j
            const b = a + 1
            const c = a + R
            const d = c + 1
            idx.push(a, c, b, b, c, d)
        }
    // the transom: a fan over the stern section
    const t0 = pos.length / 3
    const cy = rows[0].reduce((s, p) => s + p[1], 0) / R
    pos.push(-L / 2, cy, 0)
    for (let j = 0; j < R; j++) idx.push(t0, j, (j + 1) % R)
    let g = new THREE.BufferGeometry()
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3))
    g.setIndex(idx)
    g.computeVertexNormals()
    // painted in bands by height: a colour per triangle keeps the lines sharp
    g = g.toNonIndexed()
    const P = g.attributes.position
    const col = new Float32Array(P.count * 3)
    const c = new THREE.Color()
    for (let t = 0; t < P.count; t += 3) {
        const y = (P.getY(t) + P.getY(t + 1) + P.getY(t + 2)) / 3
        let band = bands[bands.length - 1][1]
        for (const [top, hex] of bands)
            if (y < top) {
                band = hex
                break
            }
        c.set(band)
        for (let k = 0; k < 3; k++) col.set([c.r, c.g, c.b], (t + k) * 3)
    }
    g.setAttribute("color", new THREE.BufferAttribute(col, 3))
    // the deck, a little under the gunwale
    const dp = []
    const di = []
    for (let i = 0; i <= S; i++) {
        const r = rows[i]
        const s = r[0][1] - 0.12
        dp.push(r[0][0], s, r[0][2] * 0.97, r[R - 1][0], s, r[R - 1][2] * 0.97)
        if (i < S) di.push(i * 2, i * 2 + 1, i * 2 + 2, i * 2 + 1, i * 2 + 3, i * 2 + 2)
    }
    const deck = new THREE.BufferGeometry()
    deck.setAttribute("position", new THREE.Float32BufferAttribute(dp, 3))
    deck.setIndex(di)
    deck.computeVertexNormals()
    return { hull: g, deck, sec: (u) => sec(u) }
}

// a soft round light (navigation lights)
let glowTex = null
function glow(color, size) {
    if (!glowTex) {
        const c = document.createElement("canvas")
        c.width = c.height = 64
        const g = c.getContext("2d")
        const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32)
        grd.addColorStop(0, "rgba(255,255,255,1)")
        grd.addColorStop(0.25, "rgba(255,255,255,0.45)")
        grd.addColorStop(1, "rgba(255,255,255,0)")
        g.fillStyle = grd
        g.fillRect(0, 0, 64, 64)
        glowTex = new THREE.CanvasTexture(c)
    }
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }))
    s.scale.setScalar(size)
    return s
}
// a flag at the stern (it flutters in the update)
let flagTex = null
function flag(parent, x, y, z, size = 1) {
    if (!flagTex) {
        const c = document.createElement("canvas")
        c.width = 88
        c.height = 64
        const g = c.getContext("2d")
        g.fillStyle = "#ba0c2f"
        g.fillRect(0, 0, 88, 64)
        g.fillStyle = "#ffffff"
        g.fillRect(24, 0, 16, 64)
        g.fillRect(0, 24, 88, 16)
        g.fillStyle = "#00205b"
        g.fillRect(28, 0, 8, 64)
        g.fillRect(0, 28, 88, 8)
        flagTex = new THREE.CanvasTexture(c)
        flagTex.colorSpace = THREE.SRGBColorSpace
    }
    const pole = new THREE.Group()
    pole.position.set(x, y, z)
    parent.add(pole)
    cyl(pole, 0.05, 0.05, 2.6 * size, 0xd8d8d8, 0, 1.3 * size, 0, 6)
    const geo = new THREE.PlaneGeometry(1.8 * size, 1.3 * size, 6, 1)
    geo.translate(-0.9 * size, 0, 0)
    const f = new THREE.Mesh(geo, withAir(new THREE.MeshStandardMaterial({ map: flagTex, roughness: 0.8, side: THREE.DoubleSide })))
    f.position.y = 2.0 * size
    pole.add(f)
    return { mesh: f, base: geo.attributes.position.array.slice(), size }
}
// smoke from a funnel, drifting off with the wind (moved in the shader)
function smoke(parent, x, y, z, n = 26) {
    const pos = new Float32Array(n * 3)
    const seed = new Float32Array(n)
    for (let i = 0; i < n; i++) seed[i] = i / n + Math.random() * 0.02
    const g = new THREE.BufferGeometry()
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3))
    g.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1))
    const m = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: smokeU,
        vertexShader: /* glsl */ `attribute float aSeed; uniform float uTime; varying float vA;
            void main(){
                float k = fract(aSeed + uTime * 0.12);
                vec3 p = vec3(-k * 9.0 + sin(aSeed * 40.0 + uTime) * 0.6, k * 10.0, sin(aSeed * 17.0) * k * 2.0);
                vA = (1.0 - k) * smoothstep(0.0, 0.08, k);
                vec4 mv = modelViewMatrix * vec4(p, 1.0);
                gl_PointSize = (3.0 + k * 14.0) * 90.0 / -mv.z;
                gl_Position = projectionMatrix * mv;
            }`,
        fragmentShader: /* glsl */ `uniform vec3 uCol; varying float vA;
            void main(){ vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.1, length(d)); gl_FragColor = vec4(uCol, a * vA * 0.35); }`,
    })
    const pts = new THREE.Points(g, m)
    pts.position.set(x, y, z)
    pts.frustumCulled = false
    parent.add(pts)
    return pts
}
const smokeU = { uTime: { value: 0 }, uCol: { value: new THREE.Color(0.55, 0.56, 0.58) } }
// red to port, green to starboard, white on the mast
function navLights(parent, L, B, h, top) {
    const out = []
    for (const [col, z] of [
        [0xff3a2a, -B / 2],
        [0x3aff6a, B / 2],
    ]) {
        const s = glow(col, 2.2)
        s.position.set(L * 0.2, h, z)
        parent.add(s)
        out.push(s)
    }
    const w = glow(0xfff4dd, 2.6)
    w.position.set(L * 0.1, top, 0)
    parent.add(w)
    out.push(w)
    return out
}

const mats = new Map()
function mat(hex, roughness = 0.6, metalness = 0, extra = {}) {
    const key = hex + "|" + roughness + "|" + metalness + "|" + JSON.stringify(extra)
    if (!mats.has(key)) mats.set(key, withAir(new THREE.MeshStandardMaterial({ color: hex, roughness, metalness, ...extra })))
    return mats.get(key)
}
let paintMat = null
const paint = () => paintMat || (paintMat = withAir(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5, metalness: 0 })))

function mesh(geo, m, x = 0, y = 0, z = 0, parent) {
    const o = new THREE.Mesh(geo, m)
    o.position.set(x, y, z)
    if (parent) parent.add(o)
    return o
}
function box(parent, w, h, d, hex, x, y, z, r = 0.6) {
    return mesh(new THREE.BoxGeometry(w, h, d), mat(hex, r), x, y, z, parent)
}
function cyl(parent, rt, rb, h, hex, x, y, z, seg = 12, r = 0.6) {
    return mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat(hex, r), x, y, z, parent)
}
// a window band round a cabin: dark glass a little proud of the walls
function windows(parent, w, h, d, x, y, z) {
    box(parent, w + 0.06, h, d + 0.06, 0x1b2733, x, y, z, 0.15)
}

// a person sitting (about 0.9 m above the seat), in a life jacket
function person(parent, vest, x, y, z, { lean = 0 } = {}) {
    const g = new THREE.Group()
    g.position.set(x, y, z)
    g.rotation.x = lean
    cyl(g, 0.5, 0.6, 1.9, vest, 0, 0.95, 0, 10, 0.8)
    mesh(new THREE.SphereGeometry(0.42, 12, 10), mat(0xd9a77e, 0.7), 0, 2.3, 0, g)
    mesh(new THREE.SphereGeometry(0.45, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat(0x2a2d33, 0.6), 0, 2.4, 0, g)
    parent.add(g)
    return g
}

// ---- the boats ----
function rib() {
    const L = 20
    const B = 7.2
    const g = new THREE.Group()
    const { hull, deck, sec } = hullParts({ L, B, D: 1.0, F: 1.3, sheer: 0.35, sternW: 0.88, bands: [[0.02, "#2b2e33"], [99, "#3a3e45"]] })
    mesh(hull, paint(), 0, 0, 0, g)
    mesh(deck, mat(0x55595f, 0.8), 0, 0, 0, g)
    // the tube round the boat, from the stern on one side round the bow to the stern on the other
    const pts = []
    for (let i = 0; i <= 24; i++) {
        const u = i / 24
        const { w, s } = sec(0.04 + u * 0.95)
        pts.push(new THREE.Vector3(-L / 2 + (0.04 + u * 0.95) * L, s + 0.35, w + 0.25))
    }
    const back = pts
        .slice()
        .reverse()
        .map((p) => new THREE.Vector3(p.x, p.y, -p.z))
    const tube = new THREE.CatmullRomCurve3([...back, ...pts.slice(1)].reverse())
    mesh(new THREE.TubeGeometry(tube, 96, 0.85, 12, false), mat(0xe8742a, 0.55), 0, 0, 0, g)
    // the console with its screen, and the outboard
    box(g, 2.6, 2.1, 2.6, 0xe9eaee, 0.6, 2.1, 0)
    box(g, 0.12, 1.1, 2.4, 0x8fb4c8, 1.95, 3.6, 0, 0.1).rotation.z = 0.35
    box(g, 1.3, 1.0, 2.2, 0x2a2d33, -2.4, 1.6, 0)
    box(g, 1.1, 1.8, 0.9, 0x1d1f23, -L / 2 - 0.5, 1.5, 0)
    box(g, 0.5, 2.4, 0.4, 0x1d1f23, -L / 2 - 0.5, 0.1, 0)
    person(g, 0xe8742a, -0.9, 1.3, 0.6)
    person(g, 0xf2c230, -2.6, 1.6, -0.9)
    const lights = navLights(g, L, B + 2, 2.6, 5.2)
    return { group: g, L, B: B + 2.2, lights }
}

function dinghy(sail) {
    const L = 13
    const B = 4.6
    const g = new THREE.Group()
    const { hull, deck } = hullParts({ L, B, D: 0.55, F: 1.0, sheer: 0.2, sternW: 0.8, bands: [[0.03, "#f4f4f2"], [0.22, "#1d4f8f"], [99, "#f4f4f2"]] })
    mesh(hull, paint(), 0, 0, 0, g)
    mesh(deck, mat(0xe9e7e2, 0.7), 0, 0, 0, g)
    // the rig turns as one: mast, boom and sails
    const rig = new THREE.Group()
    rig.position.set(1.6, 1.0, 0)
    g.add(rig)
    cyl(rig, 0.1, 0.14, 20, 0xc8ccd2, 0, 10, 0, 8, 0.35)
    const boom = new THREE.Group()
    boom.position.y = 2.2
    rig.add(boom)
    cyl(boom, 0.09, 0.09, 7.4, 0xc8ccd2, -3.7, 0, 0, 8, 0.35).rotation.z = Math.PI / 2
    const main = new THREE.Shape()
    main.moveTo(0, 0)
    main.lineTo(-7.2, 0)
    main.quadraticCurveTo(-3.6, 9, 0, 17.4)
    main.lineTo(0, 0)
    const sailMat = mat(sail, 0.85, 0, { side: THREE.DoubleSide })
    mesh(new THREE.ShapeGeometry(main, 12), sailMat, 0, 0.05, 0, boom)
    const jib = new THREE.Shape()
    jib.moveTo(0, 0)
    jib.lineTo(4.4, 0)
    jib.lineTo(0, 13)
    jib.lineTo(0, 0)
    const jg = new THREE.Group()
    jg.position.set(0, 1.3, 0)
    rig.add(jg)
    mesh(new THREE.ShapeGeometry(jib, 4), sailMat, 0, 0, 0, jg)
    const sailor = person(g, 0xe8742a, -2.8, 1.0, 1.6, { lean: -0.5 })
    return { group: g, L, B, boom, jib: jg, sailor }
}

function kayak(hex, vest) {
    const L = 16
    const B = 2.2
    const g = new THREE.Group()
    const { hull, deck } = hullParts({ L, B, D: 0.45, F: 0.65, sheer: 0.35, pointed: true, flare: 0.02, bands: [[0.02, hex], [99, hex]] })
    mesh(hull, paint(), 0, 0, 0, g)
    mesh(deck, mat(hex, 0.45), 0, 0.1, 0, g)
    mesh(new THREE.TorusGeometry(0.85, 0.12, 6, 18), mat(0x1d1f23, 0.6), 0, 0.85, 0, g).rotation.x = Math.PI / 2
    person(g, vest, 0, 0.3, 0)
    // the paddle, rocking from side to side
    const pad = new THREE.Group()
    pad.position.set(0.5, 1.8, 0)
    g.add(pad)
    cyl(pad, 0.07, 0.07, 7.4, 0x2a2d33, 0, 0, 0, 6).rotation.x = Math.PI / 2
    for (const s of [-1, 1]) box(pad, 0.7, 0.08, 1.5, 0xf2c230, 0, 0, s * 3.5, 0.5)
    return { group: g, L, B, paddle: pad }
}

function tug() {
    const L = 42
    const B = 15
    const g = new THREE.Group()
    const { hull, deck, sec } = hullParts({ L, B, D: 3.2, F: 4.4, sheer: 0.3, sternW: 0.92, bands: [[0.0, "#8a2318"], [0.5, "#f1efe8"], [99, "#17191c"]] })
    mesh(hull, paint(), 0, 0, 0, g)
    mesh(deck, mat(0x6d5a48, 0.85), 0, 0, 0, g)
    // tyres along the sides, and a big fender on the bow
    for (let i = 0; i < 6; i++) {
        const u = 0.15 + i * 0.12
        const { w, s } = sec(u)
        for (const sd of [-1, 1]) {
            const t = mesh(new THREE.TorusGeometry(0.75, 0.32, 8, 16), mat(0x141414, 0.9), -L / 2 + u * L, s - 1.2, sd * (w + 0.3), g)
            t.rotation.y = Math.PI / 2
        }
    }
    cyl(g, 1.2, 1.2, 6, 0x141414, L / 2 - 0.4, 3.4, 0, 14, 0.9).rotation.x = Math.PI / 2
    // the wheelhouse, its windows, the funnel and the mast
    box(g, 12, 4.2, 9.5, 0xf1efe8, 1, 6.4, 0)
    box(g, 9, 3.4, 8.2, 0xf1efe8, 2.2, 10.2, 0)
    windows(g, 9, 1.2, 8.2, 2.2, 10.7, 0)
    box(g, 9.6, 0.3, 8.8, 0x8a2318, 2.2, 12.05, 0)
    cyl(g, 1.1, 1.3, 5, 0x17191c, -4.5, 10.6, 0, 14)
    cyl(g, 1.12, 1.12, 1.2, 0xb9271b, -4.5, 12.2, 0, 14)
    cyl(g, 0.12, 0.12, 7, 0xd8d8d8, 3.8, 15.6, 0, 6)
    box(g, 0.2, 0.2, 3.4, 0xd8d8d8, 3.8, 17.4, 0)
    const lights = navLights(g, L, B, 7.6, 17.8)
    const flags = [flag(g, -L / 2 + 1.2, 4.4, 0, 1.6)]
    smoke(g, -4.5, 13.3, 0)
    return { group: g, L, B, lights, flags }
}

function fishing() {
    const L = 34
    const B = 11
    const g = new THREE.Group()
    const { hull, deck } = hullParts({ L, B, D: 2.4, F: 3.6, sheer: 0.4, sternW: 0.85, bands: [[0.0, "#7d1e16"], [0.6, "#f4f4f2"], [1.4, "#1d4f8f"], [99, "#f4f4f2"]] })
    mesh(hull, paint(), 0, 0, 0, g)
    mesh(deck, mat(0x8a8f96, 0.8), 0, 0, 0, g)
    // the wheelhouse aft, as on a Norwegian fishing boat, and the mast and boom forward
    box(g, 7.5, 5.6, 7.4, 0xf4f4f2, -9.5, 6.4, 0)
    windows(g, 7.5, 1.4, 7.4, -9.5, 7.6, 0)
    box(g, 8.2, 0.35, 8, 0x1d4f8f, -9.5, 9.35, 0)
    cyl(g, 0.16, 0.2, 13, 0xe8e8e8, 5.5, 9.8, 0, 8)
    cyl(g, 0.12, 0.12, 9, 0xe8e8e8, 2, 6.6, 0, 6).rotation.z = 1.15
    cyl(g, 1.0, 1.0, 3.2, 0x2f5f3a, -2.5, 4.4, 0, 14).rotation.x = Math.PI / 2
    box(g, 2.4, 1.2, 2.4, 0xf2c230, 8, 4.1, 2.2)
    person(g, 0xf2c230, 0.5, 3.4, -2.2)
    const lights = navLights(g, L, B, 6.2, 16.4)
    const flags = [flag(g, -L / 2 + 1, 3.6, 0, 1.4)]
    smoke(g, -11, 9.6, 2.4, 16)
    return { group: g, L, B, lights, flags }
}

function ferry() {
    const L = 52
    const B = 15
    const g = new THREE.Group()
    const { hull, deck } = hullParts({ L, B, D: 2.6, F: 4.2, sheer: 0.2, sternW: 0.9, bands: [[0.0, "#1b2433"], [0.7, "#f4f4f2"], [1.5, "#1b2433"], [99, "#f4f4f2"]] })
    mesh(hull, paint(), 0, 0, 0, g)
    mesh(deck, mat(0x9a9ea5, 0.8), 0, 0, 0, g)
    // a long cabin with a band of windows, the bridge on top
    box(g, 32, 4.6, 12.4, 0xf4f4f2, -1, 6.4, 0)
    windows(g, 30, 1.8, 12.4, -1, 6.9, 0)
    box(g, 33, 0.35, 13.2, 0xd9dde2, -1, 8.85, 0)
    box(g, 9, 3.2, 10, 0xf4f4f2, 9, 10.6, 0)
    windows(g, 9, 1.3, 10, 9, 11.1, 0)
    box(g, 9.6, 0.3, 10.6, 0x1b2433, 9, 12.35, 0)
    cyl(g, 0.12, 0.12, 6, 0xd8d8d8, 6, 15, 0, 6)
    const lights = navLights(g, L, B, 9.2, 18.2)
    const flags = [flag(g, -L / 2 + 1, 4.2, 0, 1.6)]
    return { group: g, L, B, lights, flags }
}

function speedboat() {
    const L = 24
    const B = 8.4
    const g = new THREE.Group()
    const { hull, deck } = hullParts({ L, B, D: 1.4, F: 2.0, sheer: 0.3, sternW: 0.9, bands: [[0.0, "#1b2433"], [0.5, "#f4f4f2"], [0.95, "#1d4f8f"], [99, "#f4f4f2"]] })
    mesh(hull, paint(), 0, 0, 0, g)
    mesh(deck, mat(0x9a7650, 0.8), 0, 0, 0, g)
    // a low cabin forward with its screen, seats aft, a bathing platform
    box(g, 8, 1.5, 6, 0xf4f4f2, 3.5, 2.6, 0)
    windows(g, 6, 0.6, 6, 3.5, 2.9, 0)
    box(g, 0.12, 1.4, 6.2, 0x8fb4c8, -0.7, 3.4, 0, 0.1).rotation.z = 0.6
    box(g, 4.2, 0.9, 6.4, 0xe8e4dc, -5, 2.2, 0)
    box(g, 1.6, 0.25, 7, 0x9a7650, -L / 2 - 0.6, 0.7, 0)
    for (const sd of [-1, 1]) cyl(g, 0.05, 0.05, 8, 0xd8d8d8, 6.5, 2.9, sd * 2.6, 6, 0.3).rotation.z = Math.PI / 2
    person(g, 0x2f6fb0, -1.8, 2.0, 1.4)
    person(g, 0xe8742a, -4.6, 2.2, -1.6)
    const lights = navLights(g, L, B, 2.7, 4.8)
    const flags = [flag(g, -L / 2 - 0.3, 2.0, 0, 1)]
    return { group: g, L, B, lights, flags }
}

function rowboat() {
    const L = 15
    const B = 4.4
    const g = new THREE.Group()
    const { hull, deck } = hullParts({ L, B, D: 0.6, F: 1.3, sheer: 0.6, pointed: true, flare: 0.12, bands: [[0.02, "#3d2a1a"], [1.05, "#8a5a34"], [99, "#a3312a"]] })
    mesh(hull, paint(), 0, 0, 0, g)
    mesh(deck, mat(0x6b4a2c, 0.9), 0, -0.6, 0, g)
    box(g, 0.9, 0.18, B * 0.9, 0x7a5432, 0, 0.9, 0)
    // the rower faces aft
    const rower = person(g, 0x9fb7cf, 0, 0.9, 0)
    rower.rotation.y = Math.PI
    const oars = []
    for (const sd of [-1, 1]) {
        const pivot = new THREE.Group()
        pivot.position.set(0.6, 1.4, sd * (B / 2))
        g.add(pivot)
        const shaft = cyl(pivot, 0.07, 0.07, 9, 0xc8a878, 0, 0, sd * 2.8, 6, 0.7)
        shaft.rotation.x = Math.PI / 2
        box(pivot, 0.12, 0.7, 1.6, 0xc8a878, 0, 0, sd * 7.1, 0.7)
        oars.push({ pivot, sd })
    }
    return { group: g, L, B, oars }
}

function cruiser(withSails = true) {
    const L = 34
    const B = 11
    const g = new THREE.Group()
    const { hull, deck } = hullParts({ L, B, D: 1.8, F: 2.4, sheer: 0.25, sternW: 0.8, bands: [[0.0, "#1b2433"], [0.3, "#f4f4f2"], [0.6, "#7c469c"], [99, "#f4f4f2"]] })
    mesh(hull, paint(), 0, 0, 0, g)
    mesh(deck, mat(0x9a7650, 0.8), 0, 0, 0, g)
    box(g, 12, 1.5, 6.6, 0xf4f4f2, 1, 3.0, 0)
    windows(g, 10, 0.5, 6.6, 1, 3.1, 0)
    box(g, 0.5, 4, 0.5, 0x1d1f23, 1.6, -1.6, 0) // the keel under it
    const rig = new THREE.Group()
    rig.position.set(4, 2.3, 0)
    g.add(rig)
    cyl(rig, 0.18, 0.24, 40, 0xc8ccd2, 0, 20, 0, 8, 0.35)
    const boom = new THREE.Group()
    boom.position.y = 3.2
    rig.add(boom)
    cyl(boom, 0.14, 0.14, 14, 0xc8ccd2, -7, 0, 0, 8, 0.35).rotation.z = Math.PI / 2
    let jg = null
    if (withSails) {
        const sailMat = mat("#f4f1e8", 0.85, 0, { side: THREE.DoubleSide })
        const main = new THREE.Shape()
        main.moveTo(0, 0)
        main.lineTo(-13.6, 0)
        main.quadraticCurveTo(-6.5, 18, 0, 34)
        main.lineTo(0, 0)
        mesh(new THREE.ShapeGeometry(main, 14), sailMat, 0, 0.1, 0, boom)
        const jib = new THREE.Shape()
        jib.moveTo(0, 0)
        jib.lineTo(10.5, 0)
        jib.lineTo(0, 31)
        jib.lineTo(0, 0)
        jg = new THREE.Group()
        jg.position.set(0, 2.2, 0)
        rig.add(jg)
        mesh(new THREE.ShapeGeometry(jib, 4), sailMat, 0, 0, 0, jg)
    } else {
        // the sail furled on the boom, under its cover
        cyl(boom, 0.5, 0.5, 12, 0x1d4f8f, -7, 0.5, 0, 10, 0.8).rotation.z = Math.PI / 2
    }
    const sailor = person(g, 0xe8742a, -10, 1.8, 2.4, { lean: -0.2 })
    if (withSails) person(g, 0x2f6fb0, -12.5, 1.8, -1.6)
    const lights = navLights(g, L, B, 2.9, 42.6)
    const flags = [flag(g, -L / 2 + 0.6, 2.4, 0, 1.2)]
    return { group: g, L, B, boom: withSails ? boom : null, jib: jg, sailor, lights, flags }
}

function jetski() {
    const L = 9
    const B = 3.6
    const g = new THREE.Group()
    const { hull, deck } = hullParts({ L, B, D: 0.5, F: 1.0, sheer: 0.45, sternW: 0.85, bands: [[0.02, "#1d1f23"], [0.55, "#f2c230"], [99, "#1d1f23"]] })
    mesh(hull, paint(), 0, 0, 0, g)
    mesh(deck, mat(0xf2c230, 0.45), 0, 0, 0, g)
    box(g, 3.6, 0.6, 1.3, 0x1d1f23, -0.8, 1.2, 0, 0.8)
    cyl(g, 0.06, 0.06, 2.0, 0x2a2d33, 1.4, 1.9, 0, 6).rotation.x = Math.PI / 2
    person(g, 0xe8742a, -0.6, 1.2, 0, { lean: 0.25 })
    return { group: g, L, B }
}

// a fish farm out in the fjord: rings with their rails, and the feed barge
function fishFarm() {
    const g = new THREE.Group()
    const black = mat(0x16171a, 0.6)
    for (const [x, z] of [
        [0, 0],
        [56, 8],
        [112, 0],
        [28, 54],
        [84, 58],
    ]) {
        const r = new THREE.Group()
        r.position.set(x, 0, z)
        g.add(r)
        for (const [rad, y] of [
            [22, 0.3],
            [23.6, 0.3],
            [22.8, 1.6],
        ]) {
            const t = mesh(new THREE.TorusGeometry(rad, y > 1 ? 0.12 : 0.55, 8, 72), black, 0, y, 0, r)
            t.rotation.x = Math.PI / 2
        }
        for (let i = 0; i < 24; i++) {
            const a = (i / 24) * Math.PI * 2
            cyl(r, 0.08, 0.08, 1.4, 0x16171a, Math.cos(a) * 22.8, 0.95, Math.sin(a) * 22.8, 5)
        }
        // the net hanging under the rings (seen through the water close by)
        mesh(new THREE.CylinderGeometry(22, 20, 10, 32, 1, true), mat(0x22302a, 0.9, 0, { transparent: true, opacity: 0.35, side: THREE.DoubleSide }), 0, -5, 0, r)
    }
    // the feed barge
    const barge = new THREE.Group()
    barge.position.set(56, 0, 120)
    g.add(barge)
    box(barge, 40, 5, 16, 0x2b3a4a, 0, 0.5, 0, 0.7)
    box(barge, 14, 7, 12, 0xf1efe8, -8, 6.5, 0)
    windows(barge, 14, 1.4, 12, -8, 8, 0)
    box(barge, 15, 0.4, 13, 0x1d4f8f, -8, 10.2, 0)
    for (let i = 0; i < 3; i++) cyl(barge, 2.6, 2.6, 9, 0xd9dde2, 6 + i * 6, 7.5, 0, 16, 0.5)
    cyl(barge, 0.1, 0.1, 8, 0xd8d8d8, -12, 14, 0, 6)
    // the feeding pipes to the rings
    for (const [x, z] of [
        [0, 0],
        [56, 8],
        [112, 0],
    ]) {
        const from = new THREE.Vector3(56, 0.4, 112)
        const to = new THREE.Vector3(x, 0.4, z + 22)
        const len = from.distanceTo(to)
        const pipe = cyl(g, 0.3, 0.3, len, 0x16171a, (from.x + to.x) / 2, 0.4, (from.z + to.z) / 2, 6)
        pipe.rotation.z = Math.PI / 2
        pipe.rotation.y = Math.atan2(-(to.z - from.z), to.x - from.x)
    }
    return g
}

// ---- the wake: a ribbon of foam laid down where the boat has been ----
const WAKE_N = 30
function makeWake(width, spread) {
    const pos = new Float32Array(WAKE_N * 2 * 3)
    const uv = new Float32Array(WAKE_N * 2 * 2)
    const al = new Float32Array(WAKE_N * 2)
    const idx = []
    for (let i = 0; i < WAKE_N; i++) {
        uv.set([i / (WAKE_N - 1), 0, i / (WAKE_N - 1), 1], i * 4)
        if (i < WAKE_N - 1) idx.push(i * 2, i * 2 + 1, i * 2 + 2, i * 2 + 1, i * 2 + 3, i * 2 + 2)
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3))
    geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2))
    geo.setAttribute("aA", new THREE.BufferAttribute(al, 1))
    geo.setIndex(idx)
    const mesh = new THREE.Mesh(geo, wakeMat)
    mesh.frustumCulled = false
    mesh.renderOrder = 1
    return { mesh, pos, al, pts: [], width, spread, last: null }
}
const wakeMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { uLight: { value: 1 }, uTime: { value: 0 } },
    vertexShader: /* glsl */ `attribute float aA; varying float vA; varying vec2 vUv;
        void main(){ vA = aA; vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `uniform float uLight; uniform float uTime; varying float vA; varying vec2 vUv;
        void main(){
            float a = abs(vUv.y * 2.0 - 1.0);
            float edge = smoothstep(0.45, 0.95, a) * (1.0 - smoothstep(0.95, 1.0, a));
            float mid = 1.0 - smoothstep(0.0, 0.4, a);
            float n = 0.55 + 0.45 * sin(vUv.x * 61.0 + vUv.y * 17.0 + uTime * 2.3) * sin(vUv.x * 23.0 - vUv.y * 9.0 - uTime * 1.1);
            float k = vA * (edge * 0.95 + mid * 0.55 * (1.0 - vUv.x)) * n;
            gl_FragColor = vec4(vec3(0.93, 0.96, 0.98) * uLight, clamp(k, 0.0, 1.0) * 0.75);
        }`,
})

export function createBoats({ props, lowPower = false }) {
    const group = new THREE.Group()
    const boats = []

    // a route: a closed curve gone round at a speed, or a line gone back and forth
    function addBoat(built, { path, speed, closed = true, u = 0, k = 0.8, lift = 0, wake = [2, 0.5], pause = 0 }) {
        const curve = new THREE.CatmullRomCurve3(
            path.map(([x, z]) => new THREE.Vector3(x, 0, z)),
            closed,
            "centripetal"
        )
        const len = curve.getLength()
        const inner = new THREE.Group()
        inner.add(built.group)
        const holder = new THREE.Group()
        holder.add(inner)
        const p0 = curve.getPointAt(u)
        const item = props.adopt(holder, { x: p0.x, z: p0.z, k, lift })
        const box = { x: p0.x, z: p0.z, hx: built.L / 2, hz: built.B / 2, rot: 0 }
        props.colliders.push(box)
        const w = makeWake(wake[0], wake[1])
        group.add(w.mesh)
        const b = { ...built, curve, len, speed, closed, u, dir: 1, wait: 0, pause, item, inner, box, wake: w, yaw: 0, v: speed, roll: 0 }
        boats.push(b)
        return b
    }

    // the RIB: fast, round the east harbour (outside the timeline posts)
    const ribPath = []
    for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2
        ribPath.push([510 + Math.cos(a) * 192 + Math.sin(a * 2) * 14, -60 + Math.sin(a) * 78])
    }
    addBoat(rib(), { path: ribPath, speed: 16, k: 0.9, wake: [2.4, 1.2] })

    // three dinghies on a triangle in the north, one after another
    const tri = [
        [230, 372],
        [300, 360],
        [385, 385],
        [355, 450],
        [312, 505],
        [262, 450],
    ]
    const sails = lowPower ? ["#f4f1e8"] : ["#f4f1e8", "#d6baec", "#f4f1e8"]
    sails.forEach((col, i) => addBoat(dinghy(col), { path: tri, speed: 4.4, u: i * 0.07, k: 1.1, wake: [1.0, 0.3] }))

    // kayaks along the west side
    const kay = [
        [-330, 205],
        [-262, 236],
        [-246, 300],
        [-288, 345],
        [-338, 300],
    ]
    const kayaks = lowPower
        ? [["#d8322a", 0xf2c230]]
        : [
              ["#d8322a", 0xf2c230],
              ["#f2c230", 0xe8742a],
              ["#e8742a", 0x2f6fb0],
          ]
    kayaks.forEach(([hex, vest], i) => addBoat(kayak(hex, vest), { path: kay, speed: 2.6, u: i * 0.065, k: 1.3, wake: [0.6, 0.18] }))

    // the tug, slowly round in the south (beyond where the Otter goes)
    const tugPath = []
    for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2
        tugPath.push([100 + Math.cos(a) * 330, -500 + Math.sin(a) * 34])
    }
    addBoat(tug(), { path: tugPath, speed: 4, u: 0.3, k: 0.35, wake: [4.5, 0.9] })

    if (!lowPower) {
        // a fishing boat on a long round in the north
        addBoat(fishing(), {
            path: [
                [-320, 560],
                [80, 610],
                [460, 570],
                [120, 525],
            ],
            speed: 5,
            k: 0.45,
            wake: [3.4, 0.8],
        })
        // the ferry: back and forth in the east, a stop at each end
        addBoat(ferry(), {
            path: [
                [770, -320],
                [775, 0],
                [770, 320],
            ],
            closed: false,
            speed: 6,
            pause: 6,
            k: 0.3,
            wake: [4.8, 1.0],
        })
    }

    // a speedboat round the south-west, a rowing boat among the moored boats, a sailing yacht in the north-east, a jet ski in the south-east
    const sw = []
    for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2
        sw.push([-430 + Math.cos(a) * 95, -330 + Math.sin(a * 2) * 55])
    }
    addBoat(speedboat(), { path: sw, speed: 14, k: 0.7, wake: [2.6, 1.1] })
    addBoat(rowboat(), {
        path: [
            [-115, -95],
            [-92, -74],
            [-66, -92],
            [-88, -118],
        ],
        speed: 1.8,
        k: 1.2,
        wake: [0.7, 0.2],
    })
    if (!lowPower) {
        addBoat(cruiser(true), {
            path: [
                [575, 165],
                [700, 175],
                [725, 300],
                [600, 340],
            ],
            speed: 5,
            k: 0.6,
            wake: [2.4, 0.5],
        })
        const js = []
        for (let i = 0; i < 14; i++) {
            const a = (i / 14) * Math.PI * 2
            js.push([590 + Math.cos(a) * 110, -300 + Math.sin(a) * 38 + Math.sin(a * 5) * 12])
        }
        addBoat(jetski(), { path: js, speed: 17, k: 1.2, wake: [1.0, 0.9] })
    }

    // boats on their moorings in the west, swinging slowly round them
    const moored = []
    const mooringBuoy = new THREE.SphereGeometry(0.8, 12, 8)
    const MOOR = [
        [-400, 70, 0.2, () => cruiser(false)],
        [-372, 108, 0.4, () => speedboat()],
        [-410, 140, 0.1, () => cruiser(false)],
        [-440, 96, 0.3, () => rowboat()],
        [-382, 170, 0.5, () => speedboat()],
    ]
    for (const [x, z, ph, make] of lowPower ? MOOR.slice(0, 3) : MOOR) {
        const built = make()
        const holder = new THREE.Group()
        holder.add(built.group)
        const item = props.adopt(holder, { x, z, k: 0.6 })
        const box = { x, z, hx: built.L / 2, hz: built.B / 2, rot: 0 }
        props.colliders.push(box)
        const ball = new THREE.Mesh(mooringBuoy, mat(0xe8742a, 0.5))
        group.add(ball)
        moored.push({ item, box, L: built.L, x, z, ph, ball, yaw0: 1.2 + ph, lights: built.lights, flags: built.flags })
    }
    const farm = fishFarm()
    farm.position.set(-760, 0, 560)
    group.add(farm)

    // a collar of foam where each buoy and post meets the water
    const COLLARS = 180
    const collarMat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: { uLight: wakeMat.uniforms.uLight, uTime: wakeMat.uniforms.uTime },
        vertexShader: /* glsl */ `varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); }`,
        fragmentShader: /* glsl */ `uniform float uLight; uniform float uTime; varying vec2 vP;
            void main(){
                float r = length(vP);
                float ring = smoothstep(0.55, 0.8, r) * (1.0 - smoothstep(0.8, 1.0, r));
                float n = 0.6 + 0.4 * sin(atan(vP.y, vP.x) * 9.0 + uTime * 1.7) * sin(r * 20.0 - uTime * 2.0);
                gl_FragColor = vec4(vec3(0.93, 0.96, 0.98) * uLight, ring * n * 0.55);
            }`,
    })
    const collars = new THREE.InstancedMesh(new THREE.CircleGeometry(1, 40), collarMat, COLLARS)
    collars.frustumCulled = false
    collars.renderOrder = 1
    group.add(collars)
    const cM = new THREE.Matrix4()
    const cQ = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0))
    const cS = new THREE.Vector3()
    const cP = new THREE.Vector3()

    // white sails far out in the fjord, going slowly along it
    const far = []
    const sailGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(-6, 0, 0), new THREE.Vector3(0, 14, 0)])
    sailGeo.computeVertexNormals()
    for (let i = 0; i < (lowPower ? 5 : 11); i++) {
        const deg = 20 + i * 31 + Math.random() * 12
        const shore = shoreAt(deg)[0]
        if (shore < 900) continue
        const g = new THREE.Group()
        mesh(new THREE.BoxGeometry(9, 1.6, 3), mat(0xf1efe8, 0.6), 0, 0.4, 0, g)
        mesh(sailGeo, mat(0xf6f3ea, 0.8, 0, { side: THREE.DoubleSide }), 2, 1.2, 0, g)
        group.add(g)
        far.push({ g, deg, r: shore * (0.72 + Math.random() * 0.1), w: (Math.random() < 0.5 ? -1 : 1) * (0.004 + Math.random() * 0.004) })
    }

    const tan = new THREE.Vector3()
    const pt = new THREE.Vector3()
    // the wind comes from the north (+z), for the sails
    const wind = new THREE.Vector2(0, -1)

    return {
        group,
        list: boats,
        update(t, dt, night, show = true) {
            wakeMat.uniforms.uLight.value = 1 - night * 0.8
            wakeMat.uniforms.uTime.value = t
            // they are for the helm: the pages behind keep their harbour as it was
            if (group.visible !== show) {
                group.visible = show
                for (const b of [...boats, ...moored]) {
                    b.item.obj.visible = show
                    // out of the way of the drive mode's collisions while hidden
                    if (!show) b.box.x = b.box.z = 1e6
                }
            }
            if (!show) return
            smokeU.uTime.value = t
            const lit = THREE.MathUtils.smoothstep(night, 0.15, 0.6)
            for (const b of [...boats, ...moored]) {
                if (b.lights) for (const l of b.lights) {
                    l.visible = lit > 0.01
                    l.material.opacity = lit * (0.85 + 0.15 * Math.sin(t * 3 + (b.x || 0)))
                }
                if (b.flags)
                    for (const f of b.flags) {
                        const P = f.mesh.geometry.attributes.position
                        for (let k = 0; k < P.count; k++) {
                            const x = f.base[k * 3]
                            P.setZ(k, Math.sin(x * 2.6 / f.size + t * 7 + (b.x || 0)) * 0.12 * x)
                        }
                        P.needsUpdate = true
                    }
            }
            // the foam collars
            const bl = props.buoys
            let nc = 0
            for (let i = 0; i < bl.length && nc < COLLARS; i++) {
                const q = bl[i]
                if (q.obj && q.obj.visible === false) continue
                const r = (q.r || 1.5) * 1.55 + 0.6
                cP.set(q.x, waveHeight(q.x, q.z, t, 1) * 0.85 + 0.05, q.z)
                cS.setScalar(r * (1 + 0.06 * Math.sin(t * 2 + i)))
                cM.compose(cP, cQ, cS)
                collars.setMatrixAt(nc++, cM)
            }
            collars.count = nc
            collars.instanceMatrix.needsUpdate = true
            // the far sails
            for (const f of far) {
                f.deg += f.w * dt * 6
                const a = (f.deg * Math.PI) / 180
                const x = Math.cos(a) * f.r
                const z = Math.sin(a) * f.r
                f.g.position.set(x, waveHeight(x, z, t, 0.4) * 0.5, z)
                f.g.rotation.set(0, -a + (f.w > 0 ? -Math.PI / 2 : Math.PI / 2), 0.1 * Math.sign(f.w))
            }
            for (const m of moored) {
                // the bow to the buoy, the stern swinging with the wind
                const yaw = m.yaw0 + Math.sin(t * 0.05 + m.ph * 9) * 0.4
                const off = m.L / 2 + 3
                const cx = m.x - Math.cos(yaw) * off
                const cz = m.z + Math.sin(yaw) * off
                m.item.x = m.box.x = cx
                m.item.z = m.box.z = cz
                m.item.yaw = m.box.rot = yaw
                m.ball.position.set(m.x, waveHeight(m.x, m.z, t, 1) * 0.85 + 0.2, m.z)
            }
            for (const b of boats) {
                // along the route
                if (b.wait > 0) b.wait -= dt
                else {
                    b.u += (b.dir * b.speed * dt) / b.len
                    if (b.closed) b.u = ((b.u % 1) + 1) % 1
                    else if (b.u > 1 || b.u < 0) {
                        b.u = THREE.MathUtils.clamp(b.u, 0, 1)
                        b.dir *= -1
                        b.wait = b.pause
                    }
                }
                b.curve.getPointAt(b.u, pt)
                b.curve.getTangentAt(b.u, tan).multiplyScalar(b.dir)
                const want = Math.atan2(-tan.z, tan.x)
                // turn smoothly (a ferry turns round at the ends)
                const d = Math.atan2(Math.sin(want - b.yaw), Math.cos(want - b.yaw))
                const turn = d * (1 - Math.exp(-dt * (b.wait > 0 ? 0.6 : 3)))
                b.yaw += turn
                const moving = b.wait > 0 ? 0 : 1
                b.item.x = b.box.x = pt.x
                b.item.z = b.box.z = pt.z
                b.item.yaw = b.box.rot = b.yaw
                // a fast boat lifts its bow and leans into turns; a sailing boat heels away from the wind
                const rate = turn / Math.max(dt, 1e-3)
                let pitch = 0
                let roll = THREE.MathUtils.clamp(-rate * b.speed * 0.02, -0.25, 0.25) * moving
                if (b.speed > 10) pitch = 0.07 + Math.sin(t * 7.3 + b.u * 40) * 0.015
                if (b.boom) {
                    const stb = new THREE.Vector2(Math.sin(b.yaw), Math.cos(b.yaw))
                    const lee = stb.dot(wind) > 0 ? 1 : -1
                    roll = 0.2 * lee
                    b.boom.rotation.y = THREE.MathUtils.lerp(b.boom.rotation.y, 0.55 * lee, 1 - Math.exp(-dt * 2))
                    b.jib.rotation.y = b.boom.rotation.y * 0.8
                    b.sailor.position.z = -1.6 * lee
                    b.sailor.rotation.x = -0.5 * lee
                }
                if (b.paddle) b.paddle.rotation.x = Math.sin(t * 2.4 + b.u * 50) * 0.6
                if (b.oars)
                    for (const o of b.oars) {
                        const ph = t * 1.9
                        o.pivot.rotation.y = Math.sin(ph) * 0.5 * o.sd
                        o.pivot.rotation.x = (Math.cos(ph) > 0 ? -0.18 : 0.12) * o.sd
                    }
                b.roll += (roll - b.roll) * (1 - Math.exp(-dt * 2))
                b.inner.rotation.set(b.roll, 0, pitch)
                // the wake: a new point every so often, the old ones spread and fade
                const w = b.wake
                if (moving && (!w.last || Math.hypot(pt.x - w.last.x, pt.z - w.last.z) > 1.4)) {
                    const sx = Math.sin(b.yaw)
                    const sz = Math.cos(b.yaw)
                    const back = b.L * 0.45
                    w.pts.unshift({ x: pt.x - Math.cos(b.yaw) * back, z: pt.z + Math.sin(b.yaw) * back, sx, sz, t })
                    if (w.pts.length > WAKE_N) w.pts.length = WAKE_N
                    w.last = { x: pt.x, z: pt.z }
                }
                for (let i = 0; i < WAKE_N; i++) {
                    const p = w.pts[Math.min(i, w.pts.length - 1)]
                    if (!p) {
                        w.al[i * 2] = w.al[i * 2 + 1] = 0
                        continue
                    }
                    const age = t - p.t
                    const half = w.width + age * w.spread
                    const y = waveHeight(p.x, p.z, t, 1) * 0.85 + 0.08
                    w.pos.set([p.x + p.sx * half, y, p.z + p.sz * half, p.x - p.sx * half, y, p.z - p.sz * half], i * 6)
                    const a = i < w.pts.length ? (1 - i / WAKE_N) * Math.exp(-age * 0.12) * Math.min(1, b.speed / 6) : 0
                    w.al[i * 2] = w.al[i * 2 + 1] = a
                }
                w.mesh.geometry.attributes.position.needsUpdate = true
                w.mesh.geometry.attributes.aA.needsUpdate = true
            }
        },
    }
}
