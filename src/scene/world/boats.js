import * as THREE from "three"
import { withAir } from "./air.js"
import { waveHeight } from "./waves.js"

/* ================================================================
   More boats about the harbour, built here from simple parts (a hull
   lofted from cross sections, painted in bands, with a deck, cabins,
   rails and people): a RIB that goes fast round the east harbour, three
   sailing dinghies on a triangle in the north, kayaks paddling along
   the west side, a tug on a slow round in the south, a fishing boat in
   the north and a small ferry going back and forth in the east. They
   float with the other boats (props.adopt), are solid (boxes in
   props.colliders, so they show on the LiDAR too), and leave a wake of
   foam behind them. Their routes keep clear of the Njord courses.

   Axes of a boat: bow along +x, starboard +z, up +y (1 unit = 0.3 m).
   ================================================================ */

const C = (hex) => new THREE.Color(hex)

// a hull from cross sections; L long, B wide, D deep below the water, F high above it
function hullParts({ L, B, D, F, sheer = 0.25, sternW = 0.82, pointed = false, flare = 0.05, bands }) {
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
    return { group: g, L, B: B + 2.2 }
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
    return { group: g, L, B }
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
    return { group: g, L, B }
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
    return { group: g, L, B }
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
                for (const b of boats) {
                    b.item.obj.visible = show
                    // out of the way of the drive mode's collisions while hidden
                    if (!show) b.box.x = b.box.z = 1e6
                }
            }
            if (!show) return
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
