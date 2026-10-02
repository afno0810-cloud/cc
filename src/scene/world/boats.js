import * as THREE from "three"
import { withAir } from "./air.js"
import { waveHeight } from "./waves.js"
import { shoreAt } from "./terrain.js"
import { mat, paint, glass, steel, setNight, mesh, box, rbox, cyl, strut, tube, strake, rail, railBox, cabin, porthole, lifering, fender, outboard, radar, aerial, sailGeo, sailMat, person, bake } from "./boatkit.js"

/* ================================================================
   More boats about the harbour, built here from simple parts (a hull
   lofted from cross sections, painted in bands, with a deck, cabins
   with wrap-round glass, rails on posts, rubbing strakes, fenders and
   people, all from boatkit.js): a RIB that goes fast round the east
   harbour, three sailing dinghies on a triangle in the north, kayaks
   paddling along the west side, a tug on a slow round in the south, a
   fishing boat in the north, a small ferry going back and forth in the
   east, a speedboat, a rowing boat, a sailing yacht, a jet ski, boats
   on their moorings in the west and a fish farm out in the fjord. They
   float with the other boats (props.adopt), are solid (boxes in
   props.colliders, so they show on the LiDAR too), and leave a wake of
   foam behind them. Their routes keep clear of the Njord courses.
   The small things: navigation lights at dusk (red to port, green to
   starboard, white on top), lit wheelhouse windows, radars turning,
   smoke from the funnels, flags on the sterns, sails that fill on the
   lee side, paddles and oars in the hands that hold them, a collar of
   foam round every buoy and post, and sails far out in the fjord.

   Axes of a boat: bow along +x, starboard +z, up +y (1 unit = 0.3 m).
   ================================================================ */

// a hull from cross sections; L long, B wide, D deep below the water, F high above it;
// the deck lies drop under the gunwale (a bulwark), and lower still in a well (a cockpit): [u0, u1, depth]
export function hullParts({ L, B, D, F, sheer = 0.25, sternW = 0.82, pointed = false, flare = 0.05, bands, drop = 0.12, well = null }) {
    const S = 40
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
        const ys = [s, s * 0.75, s * 0.5, s * 0.25, 0, ...bands.map((q) => q[0]).filter((y) => y > 0.01 && y < s - 0.01)].sort((p, q) => q - p)
        const side = ys.map((y) => [w * (1 + flare * 4 * (y / s) * (1 - y / s)), y])
        side.push([w * 0.96, -d * 0.18], [w * 0.86, -d * 0.42], [w * 0.62, -d * 0.7], [w * 0.3, -d * 0.92], [0, -d])
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
            idx.push(a, b, c, b, d, c)
        }
    // the transom: a fan over the stern section
    const t0 = pos.length / 3
    const cy = rows[0].reduce((s, p) => s + p[1], 0) / R
    pos.push(-L / 2, cy, 0)
    for (let j = 0; j < R; j++) idx.push(t0, (j + 1) % R, j)
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
    // the deck, under the gunwale
    const deckY = (u) => sec(u).s - drop - (well && u >= well[0] && u <= well[1] ? well[2] : 0)
    const dp = []
    const di = []
    for (let i = 0; i <= S; i++) {
        const r = rows[i]
        const y = deckY(i / S)
        dp.push(r[0][0], y, r[0][2] * 0.97, r[R - 1][0], y, r[R - 1][2] * 0.97)
        if (i < S) di.push(i * 2, i * 2 + 2, i * 2 + 1, i * 2 + 1, i * 2 + 2, i * 2 + 3)
    }
    const deck = new THREE.BufferGeometry()
    deck.setAttribute("position", new THREE.Float32BufferAttribute(dp, 3))
    deck.setIndex(di)
    deck.computeVertexNormals()
    return { hull: g, deck, sec: (u) => sec(u), deckY }
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
    f.userData.live = true
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
function navLights(parent, L, B, h, top, topX = L * 0.1) {
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
    w.position.set(topX, top, 0)
    parent.add(w)
    out.push(w)
    return out
}
// a steering wheel facing aft, its centre at (x, y, z)
function wheel(parent, x, y, z, rad = 0.45, m = mat(0x1d1f23, 0.5)) {
    const w = mesh(new THREE.TorusGeometry(rad, rad * 0.12, 6, 20), m, x, y, z, parent)
    w.rotation.set(0, Math.PI / 2, 0)
    w.rotateX(0.35)
    strut(parent, [x, y, z], [x + 0.35, y - 0.15, z], 0.07, m)
    return w
}
// the people that move their arms (a paddle, the oars) keep their arms apart from the rest
function mover(p) {
    for (const m of p.arms) m.userData.live = true
    bake(p)
    p.userData.live = true
    return p
}
// hands on what they hold: a and b are points in the frames ma and mb (both in the boat's frame)
const _hp = new THREE.Vector3()
const _hq = new THREE.Vector3()
const _inv = new THREE.Matrix4()
function grip(p, ma, a, mb, b, bend) {
    p.updateMatrix()
    _inv.copy(p.matrix).invert()
    _hp.set(a[0], a[1], a[2]).applyMatrix4(ma).applyMatrix4(_inv)
    _hq.set(b[0], b[1], b[2]).applyMatrix4(mb).applyMatrix4(_inv)
    const l = _hp.z < _hq.z ? _hp : _hq
    const r = l === _hp ? _hq : _hp
    p.reach([l.x, l.y, l.z], [r.x, r.y, r.z], bend)
}
const PADDLE_BEND = [-0.3, -1, 0.8]
const OAR_BEND = [-0.2, -1, 0.9]
function paddleHands(b) {
    b.paddle.updateMatrix()
    grip(b.paddler, b.paddle.matrix, [0, 0, -1.05], b.paddle.matrix, [0, 0, 1.05], PADDLE_BEND)
}
function oarHands(b) {
    const [o1, o2] = b.oars
    o1.pivot.updateMatrix()
    o2.pivot.updateMatrix()
    grip(b.rower, o1.pivot.matrix, [0, 0, -o1.sd * 1.15], o2.pivot.matrix, [0, 0, -o2.sd * 1.15], OAR_BEND)
}

// ---- the boats ----
function rib() {
    const L = 20
    const B = 7.2
    const g = new THREE.Group()
    const { hull, deck, sec, deckY } = hullParts({ L, B, D: 1.0, F: 1.3, sheer: 0.35, sternW: 0.88, bands: [[0.02, "#2b2e33"], [99, "#3a3e45"]] })
    mesh(hull, paint(), 0, 0, 0, g)
    mesh(deck, mat(0x55595f, 0.85), 0, 0, 0, g)
    // the tube round the boat, from the stern on one side round the bow to the stern on the other,
    // with a grey rubbing band along its outside and cones at its ends
    const ring = (off, dy) => {
        const side = []
        for (let i = 0; i <= 24; i++) {
            const u = 0.04 + (i / 24) * 0.95
            const { w, s } = sec(u)
            side.push([-L / 2 + u * L, s + 0.35 + dy, w + 0.25 + off])
        }
        return [...side.slice().reverse().map(([x, y, z]) => [x, y, -z]), ...side.slice(1)]
    }
    tube(g, ring(0, 0), 0.85, mat(0xe8742a, 0.5), { seg: 140, radial: 14 })
    tube(g, ring(0.62, -0.32), 0.2, mat(0x2a2d33, 0.7), { seg: 140, radial: 6 })
    for (const sd of [-1, 1]) {
        const { w, s } = sec(0.04)
        mesh(new THREE.SphereGeometry(0.86, 16, 10), mat(0xe8742a, 0.5), -L / 2 + 0.04 * L, s + 0.35, sd * (w + 0.25), g).scale.set(1.35, 1, 1)
    }
    const dk = deckY(0.5)
    // the console with its screen and wheel, the T-top over it, a seat behind and a cushion in the bow
    rbox(g, 2.4, 3.4, 2.6, 0xe9eaee, 0.9, dk + 1.7, 0, { rad: 0.3, r: 0.4 })
    const screen = box(g, 0.08, 1.1, 2.3, mat(0x9fc0d2, 0.05, 0.2, { transparent: true, opacity: 0.5 }), 2.05, dk + 3.85, 0)
    screen.rotation.z = 0.4
    box(g, 0.1, 0.6, 1.0, glass(), -0.33, dk + 3.0, -0.55).rotation.z = -0.25
    wheel(g, -0.42, dk + 3.05, 0.3)
    for (const [x0, x1] of [
        [-0.1, -0.5],
        [1.9, 1.7],
    ])
        for (const sd of [-1, 1]) strut(g, [x0, dk, sd * 1.3], [x1, dk + 6.6, sd * 1.55], 0.08, steel())
    rbox(g, 4.4, 0.22, 3.8, 0x2a2d33, 0.6, dk + 6.75, 0, { rad: 0.1 })
    aerial(g, -1.2, dk + 6.85, 1.5, 3)
    aerial(g, -1.2, dk + 6.85, -1.5, 2.2)
    rbox(g, 1.4, 1.5, 1.9, 0x2a2d33, -2.9, dk + 0.75, 0, { rad: 0.25 })
    rbox(g, 1.5, 0.35, 2.0, 0x3a3d42, -2.9, dk + 1.65, 0, { rad: 0.15 })
    rbox(g, 3.0, 0.55, 3.6, 0x2a2d33, 5.6, dk + 0.3, 0, { rad: 0.2 })
    outboard(g, -L / 2 + 0.2, sec(0).s + 0.1, 0, { hex: 0xf2f2f0, size: 1.15 })
    // the driver stands at the wheel, a friend sits in the bow
    person(g, 0xe8742a, -1.35, dk, 0.3, { pose: "stand", hands: [[0.9, 3.15, -0.33], [0.92, 3.2, 0.33], [-0.4, -1, 0.6]] })
    const mate = person(g, 0xf2c230, 5.4, dk + 0.55, -0.2, { hat: "beanie" })
    mate.rotation.y = Math.PI
    const lights = navLights(g, L, B + 2, 2.6, dk + 7.2, 0.6)
    return { group: g, L, B: B + 2.2, lights, sec }
}

function dinghy(sail) {
    const L = 13
    const B = 4.6
    const g = new THREE.Group()
    const { hull, deck, sec, deckY } = hullParts({ L, B, D: 0.55, F: 1.0, sheer: 0.2, sternW: 0.8, bands: [[0.03, "#f4f4f2"], [0.22, "#1d4f8f"], [99, "#f4f4f2"]], well: [0.06, 0.66, 0.45] })
    mesh(hull, paint(), 0, 0, 0, g)
    mesh(deck, mat(0xe9e7e2, 0.7), 0, 0, 0, g)
    strake(g, sec, L, mat(0x8a8f96, 0.45, 0.3), 0.1, { drop: 0.04 })
    // the centreboard case, the rudder and its tiller
    rbox(g, 2.8, 0.6, 0.36, 0xe9e7e2, 0.9, deckY(0.55) + 0.3, 0, { rad: 0.1 })
    box(g, 0.14, 2.6, 1.1, 0xe9e7e2, -L / 2 - 0.25, -0.1, 0, 0.5)
    strut(g, [-L / 2 - 0.2, 1.15, 0], [-L / 2 + 2.6, 1.3, 0], 0.07, mat(0x9a7650, 0.6))
    // the rig: the mast and its stays stand still, the boom and the jib swing
    const rig = new THREE.Group()
    rig.position.set(1.6, 1.0, 0)
    g.add(rig)
    cyl(rig, 0.07, 0.13, 20, 0xc8ccd2, 0, 10, 0, 8, 0.3)
    const top = [1.6, 19.4, 0]
    for (const sd of [-1, 1]) strut(g, top, [1.0, sec(0.6).s, sd * sec(0.6).w * 0.95], 0.025, 0x9aa0a8, 4)
    strut(g, [1.6, 15.2, 0], [L / 2 - 0.5, sec(0.97).s, 0], 0.025, 0x9aa0a8, 4)
    const boom = new THREE.Group()
    boom.position.y = 2.2
    boom.userData.live = true
    rig.add(boom)
    cyl(boom, 0.09, 0.09, 7.4, 0xc8ccd2, -3.7, 0, 0, 8, 0.35).rotation.z = Math.PI / 2
    const sm = sailMat(sail)
    const main = mesh(sailGeo([0, 0.1], [0, 17.6], [-7.2, 0.1], { roach: 0.9, camber: 0.08 }), sm, 0, 0, 0, boom)
    const jg = new THREE.Group()
    jg.position.set(L / 2 - 0.6 - 1.6, 0.4, 0)
    jg.userData.live = true
    rig.add(jg)
    const jib = mesh(sailGeo([0, 0], [-jg.position.x + 0.15, 13.6], [-jg.position.x - 1.4, 0.8], { camber: 0.1 }), sm, 0, 0, 0, jg)
    const sailor = person(g, 0xe8742a, -2.8, 1.0, 1.6, { lean: -0.5, hat: "cap" })
    bake(sailor)
    sailor.userData.live = true
    return { group: g, L, B, boom, jib: jg, sails: [main, jib], sailor, hike: true, sec }
}

function kayak(hex, vest) {
    const L = 16
    const B = 2.2
    const g = new THREE.Group()
    const { hull, deck, sec } = hullParts({ L, B, D: 0.45, F: 0.65, sheer: 0.35, pointed: true, flare: 0.02, bands: [[0.02, hex], [99, hex]] })
    mesh(hull, paint(), 0, 0, 0, g)
    mesh(deck, mat(hex, 0.4), 0, 0.1, 0, g)
    const coam = mesh(new THREE.TorusGeometry(0.85, 0.11, 6, 22), mat(0x1d1f23, 0.6), 0, 0.85, 0, g)
    coam.rotation.x = Math.PI / 2
    coam.scale.set(1.5, 1, 1)
    // hatches and the deck lines fore and aft
    for (const u of [0.22, 0.8]) {
        const { s } = sec(u)
        mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.1, 14), mat(0x1d1f23, 0.6), -L / 2 + u * L, s + 0.02, 0, g).scale.set(1.5, 1, 1)
    }
    for (const [u0, u1] of [
        [0.6, 0.72],
        [0.28, 0.38],
    ]) {
        const a = sec(u0)
        const b = sec(u1)
        for (const sd of [-1, 1]) strut(g, [-L / 2 + u0 * L, a.s + 0.04, sd * a.w * 0.8], [-L / 2 + u1 * L, b.s + 0.04, -sd * b.w * 0.8], 0.03, 0x1d1f23, 4)
    }
    // the paddler and the paddle, rocking from side to side (the hands go with it)
    const paddler = mover(person(g, vest, 0, 0.3, 0, { legs: false, hat: Math.random() < 0.5 ? "cap" : "hair" }))
    const pad = new THREE.Group()
    pad.position.set(1.4, 2.0, 0)
    pad.userData.live = true
    g.add(pad)
    cyl(pad, 0.06, 0.06, 7.4, 0x2a2d33, 0, 0, 0, 6).rotation.x = Math.PI / 2
    for (const s of [-1, 1]) mesh(new THREE.SphereGeometry(1, 12, 8), mat(0xf2c230, 0.45), 0, 0, s * 3.4, pad).scale.set(0.07, 0.32, 0.78)
    const b = { group: g, L, B, paddle: pad, paddler, sec }
    paddleHands(b)
    return b
}

function tug() {
    const L = 42
    const B = 15
    const g = new THREE.Group()
    const { hull, deck, sec, deckY } = hullParts({ L, B, D: 3.2, F: 4.4, sheer: 0.3, sternW: 0.92, bands: [[0.0, "#8a2318"], [0.5, "#f1efe8"], [99, "#17191c"]], drop: 1.3 })
    mesh(hull, paint(), 0, 0, 0, g)
    mesh(deck, mat(0x6d5a48, 0.85), 0, 0, 0, g)
    // a heavy rubber belt along the sides, a white cap rail on the bulwark, and the push fender round the bow
    strake(g, sec, L, mat(0x141414, 0.9), 0.5, { drop: 1.4 })
    strake(g, sec, L, mat(0xe8e6df, 0.5), 0.22, { drop: -0.05 })
    strake(g, sec, L, mat(0x141414, 0.9), 1.15, { drop: 0.9, u0: 0.86, u1: 0.995 })
    // tyres along the sides
    for (let i = 0; i < 6; i++) {
        const u = 0.15 + i * 0.12
        const { w, s } = sec(u)
        for (const sd of [-1, 1]) {
            const t = mesh(new THREE.TorusGeometry(0.75, 0.32, 8, 16), mat(0x141414, 0.9), -L / 2 + u * L, s - 2.2, sd * (w + 0.55), g)
            t.rotation.y = Math.PI / 2
        }
    }
    const dk = deckY(0.5)
    // the deckhouse with its port lights, and the wheelhouse on top with glass all round
    cabin(g, { x: 1, y: dk, len: 14, h: 4.2, w: 10, rakeF: 0.04, rakeA: 0.02, hex: 0xf1efe8, roof: 0xd9d7d0 })
    for (const x of [-3.5, -0.5, 2.5, 5.5]) for (const sd of [-1, 1]) porthole(g, x, dk + 2.5, sd * 5.02)
    const wy = dk + 4.6
    cabin(g, { x: 2.6, y: wy, len: 9.4, h: 3.8, w: 8.8, rakeF: -0.16, rakeA: 0.06, hex: 0xf1efe8, roof: 0x8a2318, win: [1.5, 3.25], lit: true, pillars: 2 })
    const roofY = wy + 4.2
    railBox(g, -5, 7.4, 4.9, dk + 4.4, 1.6, { posts: 5, open: true })
    lifering(g, 2.6, wy + 0.9, 4.48)
    lifering(g, 2.6, wy + 0.9, -4.48)
    // the funnel, raked aft, black on top with a red band
    const fun = new THREE.Group()
    fun.position.set(-4.6, wy, 0)
    fun.rotation.z = 0.12
    g.add(fun)
    cyl(fun, 1.0, 1.25, 5.6, 0xf1efe8, 0, 2.8, 0, 16, 0.45).scale.z = 0.72
    cyl(fun, 1.02, 1.05, 1.4, 0x17191c, 0, 5.0, 0, 16, 0.5).scale.z = 0.72
    cyl(fun, 1.06, 1.1, 0.7, 0xb9271b, 0, 3.9, 0, 16, 0.5).scale.z = 0.72
    // the mast with its yard and lights, the radar, a searchlight, aerials
    cyl(g, 0.14, 0.18, 7.5, 0xf1efe8, 3.9, roofY + 3.75, 0, 8, 0.4)
    box(g, 0.22, 0.22, 3.6, 0xf1efe8, 3.9, roofY + 5.4, 0)
    const scan = radar(g, 1.2, roofY, 0, 3.4)
    cyl(g, 0.3, 0.26, 0.55, 0x2a2d33, 6.0, roofY + 0.4, 2.6, 12, 0.4).rotation.z = Math.PI / 2
    aerial(g, -0.8, roofY, -3.2, 4.5)
    aerial(g, -0.8, roofY, 3.2, 3.4)
    // life rafts on the deckhouse roof
    for (const sd of [-1, 1]) {
        const raft = mesh(new THREE.CapsuleGeometry(0.6, 1.6, 4, 10), mat(0xf2f2ee, 0.45), -2.5, dk + 4.7, sd * 4.0, g)
        raft.rotation.z = Math.PI / 2
    }
    // the towing hook and the winch aft
    for (const sd of [-1, 1]) cyl(g, 0.4, 0.45, 2.0, 0x17191c, -15, dk + 1.0, sd * 1.4, 10)
    box(g, 0.5, 0.5, 3.6, 0x17191c, -15, dk + 1.9, 0)
    const drum = cyl(g, 1.0, 1.0, 4.2, 0x8a2318, -10.5, dk + 1.2, 0, 16, 0.6)
    drum.rotation.x = Math.PI / 2
    for (const sd of [-1, 1]) cyl(g, 1.5, 1.5, 0.18, 0x17191c, -10.5, dk + 1.2, sd * 2.1, 16).rotation.x = Math.PI / 2
    person(g, 0xe8742a, -13, dk - 0.1, 3.6, { pose: "stand", hat: "beanie" })
    const lights = navLights(g, L, B, wy + 2.8, roofY + 7.6, 3.9)
    const flags = [flag(g, -L / 2 + 1.2, sec(0.03).s, 0, 1.6)]
    smoke(g, -5.3, wy + 5.8, 0)
    return { group: g, L, B, lights, flags, spin: [scan], sec }
}

function fishing() {
    const L = 34
    const B = 11
    const g = new THREE.Group()
    const { hull, deck, sec, deckY } = hullParts({ L, B, D: 2.4, F: 3.6, sheer: 0.4, sternW: 0.85, bands: [[0.0, "#7d1e16"], [0.6, "#f4f4f2"], [1.4, "#1d4f8f"], [99, "#f4f4f2"]], drop: 1.1 })
    mesh(hull, paint(), 0, 0, 0, g)
    mesh(deck, mat(0x8a8f96, 0.8), 0, 0, 0, g)
    strake(g, sec, L, mat(0x1d4f8f, 0.5), 0.2, { drop: -0.05 })
    strake(g, sec, L, mat(0x141414, 0.9), 0.3, { drop: 1.3 })
    const dk = deckY(0.3)
    // the wheelhouse aft, as on a Norwegian fishing boat, its windows leaning out
    cabin(g, { x: -9.5, y: dk, len: 7.6, h: 5.4, w: 7.4, rakeF: -0.1, rakeA: 0.04, hex: 0xf4f4f2, roof: 0x1d4f8f, win: [3.3, 4.95], lit: true, pillars: 2 })
    const roofY = dk + 5.8
    for (const sd of [-1, 1]) porthole(g, -9.5, dk + 1.6, sd * 3.72, 0.32)
    lifering(g, -7.6, dk + 2.2, 3.72)
    mesh(new THREE.SphereGeometry(0.85, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat(0xf2f2ee, 0.4), -11, roofY, 1.6, g)
    const scan = radar(g, -9, roofY, -1.2, 2.6)
    aerial(g, -12.2, roofY, -2.6, 5)
    aerial(g, -12.2, roofY, 2.6, 3.6)
    // the mast forward with its crane boom, a net drum aft, fish boxes on deck
    cyl(g, 0.16, 0.22, 13, 0xe8e8e8, 5.5, dk + 6.5, 0, 8)
    strut(g, [5.5, dk + 3.0, 0], [-1.5, dk + 7.6, 0], 0.13, 0xe8e8e8)
    strut(g, [5.5, dk + 11.5, 0], [-1.5, dk + 7.6, 0], 0.03, 0x9aa0a8, 4)
    strut(g, [-1.5, dk + 7.6, 0], [-1.5, dk + 3.0, 0], 0.03, 0x9aa0a8, 4)
    box(g, 0.2, 0.2, 2.8, 0xe8e8e8, 5.5, dk + 9.5, 0)
    const drum = cyl(g, 1.25, 1.25, 4.0, 0x2f5f3a, -15, dk + 1.6, 0, 16, 0.85)
    drum.rotation.x = Math.PI / 2
    for (const sd of [-1, 1]) {
        cyl(g, 1.7, 1.7, 0.16, 0xb02a22, -15, dk + 1.6, sd * 2.05, 18, 0.6).rotation.x = Math.PI / 2
        box(g, 0.4, 1.8, 0.3, 0x2a2d33, -15, dk + 0.7, sd * 2.3)
    }
    for (const [x, y, z, hex] of [
        [8, 0.5, 2.4, 0x2f6fb0],
        [8, 1.5, 2.4, 0xe8742a],
        [9.9, 0.5, 2.4, 0x2f6fb0],
        [8.9, 0.5, 0.6, 0xe8742a],
    ])
        rbox(g, 1.8, 0.95, 1.6, hex, x, dk + y, z, { rad: 0.08 })
    rail(g, sec, L, { u0: 0.55, u1: 0.97, h: 1.5, inset: 0.3, posts: 5 })
    // the fisher on deck, in yellow oilskins and a sou'wester
    person(g, 0xf2c230, 0.5, dk, -2.2, { pose: "stand", hat: "sou", hatHex: 0xf2c230, jacket: 0xf2c230, pants: 0xe0b020 })
    const lights = navLights(g, L, B, dk + 3.0, dk + 13.2, 5.5)
    const flags = [flag(g, -L / 2 + 1, sec(0.03).s, 0, 1.4)]
    smoke(g, -11, roofY + 0.2, 2.4, 16)
    return { group: g, L, B, lights, flags, spin: [scan], sec }
}

function ferry() {
    const L = 52
    const B = 15
    const g = new THREE.Group()
    const { hull, deck, sec, deckY } = hullParts({ L, B, D: 2.6, F: 4.2, sheer: 0.2, sternW: 0.9, bands: [[0.0, "#1b2433"], [0.7, "#f4f4f2"], [1.5, "#1b2433"], [99, "#f4f4f2"]], drop: 0.9 })
    mesh(hull, paint(), 0, 0, 0, g)
    mesh(deck, mat(0x9a9ea5, 0.8), 0, 0, 0, g)
    strake(g, sec, L, mat(0x141414, 0.9), 0.45, { drop: 0.5 })
    const dk = deckY(0.5)
    // the saloon with a long band of windows, the upper deck on its roof with a rail round it, the bridge forward
    cabin(g, { x: -1, y: dk, len: 33, h: 4.8, w: 12.6, rakeF: 0.22, rakeA: 0.08, hex: 0xf4f4f2, win: [1.6, 3.7], lit: true, pillars: 11 })
    const up = dk + 4.8 + 0.3
    rbox(g, 34.5, 0.36, 13.6, 0xd9dde2, -1.2, up - 0.1, 0, { rad: 0.14 })
    railBox(g, -17.5, 14.6, 6.5, up, 1.9, { posts: 9 })
    cabin(g, { x: 9, y: up, len: 9, h: 3.4, w: 10.4, rakeF: 0.32, rakeA: 0.05, hex: 0xf4f4f2, roof: 0x1b2433, win: [1.15, 2.8], lit: true, pillars: 2 })
    const roofY = up + 3.8
    cyl(g, 0.14, 0.18, 5.5, 0xf4f4f2, 7, roofY + 2.75, 0, 8)
    box(g, 0.22, 0.22, 3.2, 0xf4f4f2, 7, roofY + 4.2, 0)
    const scan = radar(g, 9.5, roofY, 0, 3.6)
    aerial(g, 11.5, roofY, 3.5, 3.5)
    aerial(g, 11.5, roofY, -3.5, 3.5)
    // the exhausts, the life rafts and life rings, bollards on the foredeck
    for (const sd of [-1, 1]) cyl(g, 0.4, 0.4, 3.6, 0x1b2433, -8, up + 1.8, sd * 1.4, 10)
    for (let i = 0; i < 3; i++)
        for (const sd of [-1, 1]) {
            const raft = mesh(new THREE.CapsuleGeometry(0.6, 1.5, 4, 10), mat(0xf2f2ee, 0.45), -15 + i * 2.6, up + 0.75, sd * 5.4, g)
            raft.rotation.x = Math.PI / 2
        }
    for (const x of [-12, 2]) for (const sd of [-1, 1]) lifering(g, x, up + 1.0, sd * 6.55)
    for (const x of [19.5, -23]) for (const sd of [-1, 1]) cyl(g, 0.35, 0.4, 0.9, 0x1b2433, x, deckY((x + L / 2) / L) + 0.45, sd * 3.5, 10)
    // a few people out on the upper deck
    for (const [x, z, ry, vest] of [
        [-12, -4.6, -0.6, 0x2c3c5a],
        [-10.2, 4.2, 0.4, 0x6e2a2a],
        [-14.5, 3.1, 2.4, 0xd9d3c6],
    ]) {
        const p = person(g, vest, x, up + 0.05, z, { pose: "stand" })
        p.rotation.y = ry
    }
    const lights = navLights(g, L, B, dk + 5.2, roofY + 5.6, 7)
    const flags = [flag(g, -L / 2 + 1, sec(0.02).s, 0, 1.6)]
    return { group: g, L, B, lights, flags, spin: [scan], sec }
}

function speedboat() {
    const L = 24
    const B = 8.4
    const g = new THREE.Group()
    const { hull, deck, sec, deckY } = hullParts({ L, B, D: 1.4, F: 2.2, sheer: 0.35, sternW: 0.9, bands: [[0.0, "#1b2433"], [0.5, "#f4f4f2"], [0.95, "#1d4f8f"], [99, "#f4f4f2"]], well: [0.06, 0.58, 1.3] })
    mesh(hull, paint(), 0, 0, 0, g)
    mesh(deck, mat(0x9a7650, 0.8), 0, 0, 0, g)
    strake(g, sec, L, steel(), 0.11, { drop: 0.02 })
    const dk = deckY(0.3)
    const W = 0xf2efe8
    // a low foredeck with a sun pad, the windscreen curving round the cockpit
    rbox(g, 4.0, 0.4, 3.8, W, 6.0, deckY(0.75) + 0.25, 0, { rad: 0.18, r: 0.8 })
    const dash = deckY(0.62) - dk + 0.15
    const ws = new THREE.Group()
    ws.position.set(0.4, dk + dash, 0)
    ws.scale.set(0.5, 1, 1)
    g.add(ws)
    const scr = mesh(new THREE.CylinderGeometry(3.55, 3.8, 1.3, 28, 1, true, Math.PI / 2 - 1.15, 2.3), mat(0x2a3a48, 0.05, 0.5, { transparent: true, opacity: 0.55, side: THREE.DoubleSide }), 0, 0.65, 0, ws)
    mesh(new THREE.CylinderGeometry(3.8, 3.85, dash, 28, 1, true, Math.PI / 2 - 1.15, 2.3), mat(0xf4f4f2, 0.4, 0, { side: THREE.DoubleSide }), 0, -dash / 2, 0, ws)
    const top = mesh(new THREE.TorusGeometry(3.55, 0.06, 5, 28, 2.3), steel(), 0, 1.3, 0, ws)
    top.rotation.set(-Math.PI / 2, 0, -1.15)
    // the helm, two seats behind the screen, a bench round the stern, a bathing platform with its ladder
    rbox(g, 1.2, 1.9, 1.8, 0xf4f4f2, 0.6, dk + 0.95, 1.5, { rad: 0.2 })
    wheel(g, -0.45, dk + 2.0, 1.5, 0.4)
    for (const sd of [-1, 1]) {
        rbox(g, 1.6, 0.6, 1.6, W, -1.6, dk + 0.9, sd * 1.5, { rad: 0.22, r: 0.8 })
        rbox(g, 0.45, 1.4, 1.6, W, -2.45, dk + 1.6, sd * 1.5, { rad: 0.2, r: 0.8 })
    }
    rbox(g, 1.6, 0.8, 6.4, W, -9.6, dk + 0.5, 0, { rad: 0.25, r: 0.8 })
    rbox(g, 0.5, 1.2, 6.4, W, -10.5, dk + 1.2, 0, { rad: 0.2, r: 0.8 })
    for (const sd of [-1, 1]) rbox(g, 3.8, 0.8, 1.4, W, -7.0, dk + 0.5, sd * 2.6, { rad: 0.25, r: 0.8 })
    box(g, 1.6, 0.25, 7, 0x9a7650, -L / 2 - 0.6, 0.7, 0, 0.8)
    for (const z of [2.3, 2.9]) strut(g, [-L / 2 - 0.9, 0.7, z], [-L / 2 - 0.9, -1.4, z], 0.05, steel())
    for (const y of [0.0, -0.8]) strut(g, [-L / 2 - 0.9, y, 2.3], [-L / 2 - 0.9, y, 2.9], 0.04, steel())
    rail(g, sec, L, { u0: 0.64, u1: 0.97, h: 1.4, inset: 0.4, posts: 4 })
    // the driver at the wheel, a friend on the bench
    person(g, 0x2f6fb0, -1.6, dk + 1.2, 1.5, { hands: [[1.1, 0.95, -0.33], [1.1, 0.95, 0.33], [-0.5, -1, 0.7]] })
    person(g, 0xe8742a, -9.0, dk + 0.9, -1.6)
    const lights = navLights(g, L, B, 2.7, dk + 3.2, 0.4)
    const flags = [flag(g, -L / 2 - 0.3, sec(0).s, 0, 1)]
    return { group: g, L, B, lights, flags, sec }
}

function rowboat() {
    const L = 15
    const B = 4.4
    const g = new THREE.Group()
    // clinker built: the planks show as bands up the side
    const { hull, deck, sec } = hullParts({
        L,
        B,
        D: 0.6,
        F: 1.3,
        sheer: 0.6,
        pointed: true,
        flare: 0.12,
        bands: [
            [0.02, "#3d2a1a"],
            [0.38, "#7e5230"],
            [0.72, "#8a5a34"],
            [1.05, "#7a4f2e"],
            [1.4, "#8a5a34"],
            [99, "#a3312a"],
        ],
    })
    mesh(hull, paint(), 0, 0, 0, g)
    mesh(deck, mat(0x6b4a2c, 0.9), 0, -0.6, 0, g)
    strake(g, sec, L, mat(0x5a3a22, 0.7), 0.12, { drop: 0.0 })
    // the thwarts, and a pair of tholes for each oar
    const wood = mat(0x7a5432, 0.8)
    box(g, 1.0, 0.18, B * 0.86, wood, 0.6, 0.9, 0)
    box(g, 2.2, 0.18, B * 0.7, wood, -4.4, 0.9, 0)
    box(g, 1.2, 0.18, B * 0.5, wood, 4.8, 1.0, 0)
    // the rower faces aft
    const rower = mover(person(g, 0x9fb7cf, 0.6, 0.99, 0, { hat: Math.random() < 0.5 ? "beanie" : "hair" }))
    rower.rotation.y = Math.PI
    const oars = []
    for (const sd of [-1, 1]) {
        const { w, s } = sec(0.45)
        const pivot = new THREE.Group()
        pivot.position.set(-0.6, s + 0.2, sd * w)
        pivot.userData.live = true
        g.add(pivot)
        for (const dx of [-0.25, 0.25]) cyl(g, 0.05, 0.05, 0.5, 0x3d2a1a, -0.6 + dx, s + 0.25, sd * w, 5)
        const shaft = cyl(pivot, 0.07, 0.07, 9, 0xc8a878, 0, 0, sd * 3.0, 6, 0.7)
        shaft.rotation.x = Math.PI / 2
        cyl(pivot, 0.09, 0.09, 0.8, 0xa88858, 0, 0, -sd * 1.1, 6, 0.7).rotation.x = Math.PI / 2
        box(pivot, 0.1, 0.7, 1.6, 0xc8a878, 0, 0, sd * 7.1, 0.7)
        oars.push({ pivot, sd })
    }
    const b = { group: g, L, B, oars, rower, sec }
    oarHands(b)
    return b
}

function cruiser(withSails = true) {
    const L = 34
    const B = 11
    const g = new THREE.Group()
    const { hull, deck, sec, deckY } = hullParts({ L, B, D: 1.8, F: 2.4, sheer: 0.25, sternW: 0.8, bands: [[0.0, "#1b2433"], [0.3, "#f4f4f2"], [0.6, "#7c469c"], [99, "#f4f4f2"]], well: [0.05, 0.3, 1.2] })
    mesh(hull, paint(), 0, 0, 0, g)
    mesh(deck, mat(0x9a7650, 0.8), 0, 0, 0, g)
    strake(g, sec, L, mat(0xf4f4f2, 0.4), 0.12, { drop: 0.0 })
    box(g, 0.5, 4, 0.5, 0x1d1f23, 1.6, -1.6, 0) // the keel under it
    const dk = deckY(0.5)
    const ck = deckY(0.17)
    const cw = sec(0.17).w
    // the coachroof with its long windows, the sprayhood over the companionway
    cabin(g, { x: 2.8, y: dk, len: 13, h: 1.7, w: 6.6, rakeF: 0.95, rakeA: 0.25, hex: 0xf4f4f2, win: [0.6, 1.2], pillars: 3 })
    cabin(g, { x: -4.9, y: dk, len: 2.6, h: 2.8, w: 5.4, rakeF: 0.55, rakeA: -0.3, hex: 0x2a3a52, win: [1.9, 2.5], pillars: 1, bev: 0.2 })
    // the cockpit: benches along the sides, the wheel on its pedestal, a seat for the helmsman
    const teak = mat(0x9a7650, 0.8)
    for (const sd of [-1, 1]) rbox(g, 8.6, 1.3, 1.5, 0xf4f4f2, -10.4, ck + 0.65, sd * (cw - 1.0), { rad: 0.15 })
    for (const sd of [-1, 1]) box(g, 8.4, 0.08, 1.4, teak, -10.4, ck + 1.34, sd * (cw - 1.0))
    rbox(g, 1.4, 1.3, 3.4, 0xf4f4f2, -15.1, ck + 0.65, 0, { rad: 0.15 })
    cyl(g, 0.18, 0.24, 2.0, 0xd6dbe0, -12.7, ck + 1.0, 0, 8, 0.3)
    wheel(g, -13.0, ck + 2.6, 0, 1.25, steel())
    // stanchions and wires all round, the pulpit at the bow and the pushpit across the stern
    rail(g, sec, L, { u0: 0.04, u1: 0.97, h: 2.0, inset: 0.4, posts: 9 })
    {
        const { w, s } = sec(0.04)
        strut(g, [-L / 2 + 0.04 * L, s + 2.0, -(w - 0.4)], [-L / 2 + 0.04 * L, s + 2.0, w - 0.4], 0.07, steel())
    }
    // the rig: mast, spreaders, shrouds, forestay and backstay; the boom swings
    const rig = new THREE.Group()
    rig.position.set(4, 2.3, 0)
    g.add(rig)
    cyl(rig, 0.16, 0.24, 40, 0xc8ccd2, 0, 20, 0, 8, 0.3)
    box(rig, 0.18, 0.18, 4.6, 0xc8ccd2, 0, 21, 0)
    const top = [4, 42, 0]
    for (const sd of [-1, 1]) {
        strut(g, top, [4, 23.3, sd * 2.3], 0.03, 0x9aa0a8, 4)
        strut(g, [4, 23.3, sd * 2.3], [3.4, sec(0.6).s, sd * (sec(0.6).w - 0.2)], 0.03, 0x9aa0a8, 4)
    }
    const tack = [L / 2 - 1.0, sec(0.97).s + 0.2, 0]
    strut(g, [4, 40.5, 0], tack, 0.035, 0x9aa0a8, 4)
    strut(g, top, [-L / 2 + 0.6, sec(0.02).s + 0.2, 0], 0.03, 0x9aa0a8, 4)
    const boom = new THREE.Group()
    boom.position.y = 3.2
    boom.userData.live = true
    rig.add(boom)
    cyl(boom, 0.14, 0.14, 14, 0xc8ccd2, -7, 0, 0, 8, 0.35).rotation.z = Math.PI / 2
    let jg = null
    let sails = null
    if (withSails) {
        const sm = sailMat(0xf4f1e8)
        const main = mesh(sailGeo([0, 0.2], [0, 33.5], [-13.6, 0.2], { roach: 1.6, camber: 0.08 }), sm, 0, 0, 0, boom)
        jg = new THREE.Group()
        jg.position.set(tack[0] - 4, tack[1] - 2.3, 0)
        jg.userData.live = true
        rig.add(jg)
        const jib = mesh(sailGeo([0, 0], [-jg.position.x + 0.3, 38.5 - jg.position.y], [-jg.position.x - 3.0, 1.2], { camber: 0.1 }), sm, 0, 0, 0, jg)
        sails = [main, jib]
    } else {
        // the sail furled on the boom under its cover, the genoa rolled round the forestay
        cyl(boom, 0.5, 0.5, 12, 0x1d4f8f, -7, 0.5, 0, 10, 0.8).rotation.z = Math.PI / 2
        const d = new THREE.Vector3(4 - tack[0], 40.5 - tack[1], 0)
        const roll = mesh(new THREE.CylinderGeometry(0.12, 0.42, d.length() * 0.92, 8), mat(0xe8e4dc, 0.8), 0, 0, 0, g)
        roll.position.set(tack[0] + d.x * 0.48, tack[1] + d.y * 0.48, 0)
        roll.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize())
    }
    // the helmsman behind the wheel, the crew up on the side deck
    person(g, 0xe8742a, -14.8, ck + 1.3, 0, { hat: "cap", hands: [[1.55, 2.1, -0.8], [1.55, 2.1, 0.8], [-0.6, -1, 0.7]] })
    const crew = withSails ? person(g, 0x2f6fb0, -9.5, ck + 1.38, -(cw - 1.0), { lean: 0.1 }) : null
    if (crew) {
        bake(crew)
        crew.userData.live = true
    }
    const lights = navLights(g, L, B, 2.9, 42.6, 4)
    const flags = [flag(g, -L / 2 + 0.6, 2.4, 0, 1.2)]
    return { group: g, L, B, boom: withSails ? boom : null, jib: jg, sails, sailor: crew, side: cw - 1.0, lights, flags, sec }
}

function jetski() {
    const L = 9
    const B = 3.6
    const g = new THREE.Group()
    const { hull, deck, sec } = hullParts({ L, B, D: 0.5, F: 1.2, sheer: 0.5, sternW: 0.85, bands: [[0.02, "#1d1f23"], [0.7, "#f2c230"], [99, "#f4f4f2"]], drop: 0.05 })
    mesh(hull, paint(), 0, 0, 0, g)
    mesh(deck, mat(0x2a2d33, 0.85), 0, 0, 0, g)
    // the upper body as wide as the hull, the hood sloping down to the bow, the long seat, the handlebar
    const yel = mat(0xf2c230, 0.3)
    rbox(g, 4.6, 0.9, 2.9, yel, 0.9, 1.45, 0, { rad: 0.42 })
    const hood = rbox(g, 2.6, 1.0, 2.5, 0xf4f4f2, 2.2, 2.0, 0, { rad: 0.45, r: 0.35 })
    hood.rotation.z = -0.28
    box(g, 0.06, 0.55, 1.4, mat(0x2a3a48, 0.05, 0.5, { transparent: true, opacity: 0.6 }), 1.25, 2.75, 0).rotation.z = 0.5
    rbox(g, 3.8, 0.62, 1.25, 0x1d1f23, -1.1, 2.15, 0, { rad: 0.28, r: 0.85 })
    rbox(g, 1.4, 0.3, 3.0, 0x1d1f23, -3.2, 1.25, 0, { rad: 0.12, r: 0.85 })
    cyl(g, 0.12, 0.14, 1.3, 0x2a2d33, 1.5, 2.75, 0, 8)
    strut(g, [1.4, 3.35, -1.0], [1.4, 3.35, 1.0], 0.07, 0x2a2d33)
    for (const sd of [-1, 1]) cyl(g, 0.11, 0.11, 0.45, 0x16171a, 1.4, 3.35, sd * 0.85, 8).rotation.x = Math.PI / 2
    person(g, 0xe8742a, 0.0, 2.4, 0, { hands: [[1.4, 0.95, -0.85], [1.4, 0.95, 0.85], [-0.4, -0.3, 1]] })
    return { group: g, L, B, sec }
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
            cyl(r, 0.08, 0.08, 1.4, black, Math.cos(a) * 22.8, 0.95, Math.sin(a) * 22.8, 5)
        }
        // the net hanging under the rings (seen through the water close by)
        mesh(new THREE.CylinderGeometry(22, 20, 10, 32, 1, true), mat(0x22302a, 0.9, 0, { transparent: true, opacity: 0.35, side: THREE.DoubleSide }), 0, -5, 0, r)
    }
    // the feed barge
    const barge = new THREE.Group()
    barge.position.set(56, 0, 120)
    g.add(barge)
    rbox(barge, 40, 5, 16, 0x2b3a4a, 0, 0.5, 0, { rad: 0.6, r: 0.7 })
    railBox(barge, -19.5, 19.5, 7.6, 3.0, 1.9, { posts: 10 })
    cabin(barge, { x: -8, y: 3.0, len: 14, h: 7, w: 12, rakeF: 0.06, rakeA: 0.02, hex: 0xf1efe8, roof: 0x1d4f8f, win: [4.2, 6.0], lit: true, pillars: 3 })
    for (let i = 0; i < 3; i++) {
        cyl(barge, 2.6, 2.6, 9, 0xd9dde2, 6 + i * 6, 7.5, 0, 18, 0.45)
        mesh(new THREE.ConeGeometry(2.6, 1.4, 18), mat(0xd9dde2, 0.45), 6 + i * 6, 12.7, 0, barge)
    }
    cyl(barge, 0.1, 0.1, 8, 0xd8d8d8, -12, 14, 0, 6)
    const scan = radar(barge, -5, 10.5, 0, 3)
    for (const sd of [-1, 1]) lifering(barge, -2, 4.6, sd * 6.1)
    // the feeding pipes to the rings
    for (const [x, z] of [
        [0, 0],
        [56, 8],
        [112, 0],
    ]) {
        const from = new THREE.Vector3(56, 0.4, 112)
        const to = new THREE.Vector3(x, 0.4, z + 22)
        strut(g, [from.x, from.y, from.z], [to.x, to.y, to.z], 0.3, black)
    }
    bake(g)
    return { group: g, spin: [scan] }
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
        bake(built.group)
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
        // fenders out, as at a mooring
        if (!built.oars)
            for (const u of [0.3, 0.56])
                for (const sd of [-1, 1]) {
                    const { w, s } = built.sec(u)
                    fender(built.group, -built.L / 2 + u * built.L, s - 0.1, sd * (w + 0.05), u > 0.5 ? 0x1d4f8f : 0xf2f2ee)
                }
        bake(built.group)
        const holder = new THREE.Group()
        holder.add(built.group)
        const item = props.adopt(holder, { x, z, k: 0.6 })
        const box = { x, z, hx: built.L / 2, hz: built.B / 2, rot: 0 }
        props.colliders.push(box)
        const ball = new THREE.Mesh(mooringBuoy, mat(0xe8742a, 0.5))
        group.add(ball)
        moored.push({ item, box, L: built.L, x, z, ph, ball, yaw0: 1.2 + ph, lights: built.lights, flags: built.flags, spin: built.spin })
    }
    const farm = fishFarm()
    farm.group.position.set(-760, 0, 560)
    group.add(farm.group)

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
            setNight(lit)
            for (const s of farm.spin) s.rotation.y += dt * 2.2
            for (const b of [...boats, ...moored]) {
                if (b.spin) for (const s of b.spin) s.rotation.y += dt * 2.2
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
                    // the sails fill on the lee side (through flat when the boat goes about)
                    for (const s of b.sails) s.scale.z += (lee - s.scale.z) * (1 - Math.exp(-dt * 1.5))
                    // the crew sit up to windward; in a dinghy they hike out
                    if (b.sailor) {
                        b.sailor.position.z = -(b.hike ? 1.6 : b.side) * lee
                        b.sailor.rotation.x = (b.hike ? -0.5 : -0.15) * lee
                    }
                }
                if (b.paddle) {
                    const ph = t * 2.4 + b.u * 50
                    b.paddle.rotation.set(Math.sin(ph) * 0.6, Math.cos(ph) * 0.3, 0)
                    paddleHands(b)
                }
                if (b.oars)
                    for (const o of b.oars) {
                        const ph = t * 1.9
                        o.pivot.rotation.y = Math.sin(ph) * 0.5 * o.sd
                        o.pivot.rotation.x = (Math.cos(ph) > 0 ? -0.18 : 0.12) * o.sd
                    }
                if (b.oars) oarHands(b)
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
