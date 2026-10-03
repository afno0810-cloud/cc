import * as THREE from "three"
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js"
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js"
import { withAir } from "./air.js"

/* ================================================================
   The parts the harbour boats are built from: materials, rounded
   boxes, cabins with wrap-round glass and pillars, rails on posts,
   rubbing strakes, fenders, life rings, outboards, radar, cambered
   sails, and people (a jacket, a life jacket with its collar, a head
   with hair or a hat, arms that reach for a wheel, a paddle or the
   oars, legs that sit or stand).
   bake() merges what never moves into one mesh per material, so a
   boat with a hundred parts is a few draw calls.
   Axes: bow along +x, starboard +z, up +y (1 unit = 0.3 m).
   ================================================================ */

const mats = new Map()
export function mat(hex, roughness = 0.6, metalness = 0, extra = {}) {
    const key = hex + "|" + roughness + "|" + metalness + "|" + JSON.stringify(extra)
    if (!mats.has(key)) mats.set(key, withAir(new THREE.MeshStandardMaterial({ color: hex, roughness, metalness, ...extra })))
    return mats.get(key)
}
// gelcoat: glossy, with a clear coat that catches the sky
let paintMat = null
export const paint = () =>
    paintMat || (paintMat = withAir(new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: 0.34, metalness: 0, clearcoat: 0.6, clearcoatRoughness: 0.18, side: THREE.DoubleSide })))
// dark glass that mirrors the sky; the lit kind glows warm after dusk
let glassMat = null
let litMat = null
export const glass = () => glassMat || (glassMat = withAir(new THREE.MeshStandardMaterial({ color: 0x0c141c, roughness: 0.05, metalness: 0.9, envMapIntensity: 1.25 })))
export const litGlass = () =>
    litMat || (litMat = withAir(new THREE.MeshStandardMaterial({ color: 0x0c141c, roughness: 0.05, metalness: 0.9, envMapIntensity: 1.25, emissive: 0xff9a40, emissiveIntensity: 0 })))
export function setNight(lit) {
    litGlass().emissiveIntensity = lit * 0.55
}
export const steel = () => mat(0xd6dbe0, 0.22, 0.9)

export function mesh(geo, m, x = 0, y = 0, z = 0, parent) {
    const o = new THREE.Mesh(geo, m)
    o.position.set(x, y, z)
    if (parent) parent.add(o)
    return o
}
export function box(parent, w, h, d, hex, x, y, z, r = 0.6) {
    return mesh(new THREE.BoxGeometry(w, h, d), typeof hex === "object" ? hex : mat(hex, r), x, y, z, parent)
}
export function rbox(parent, w, h, d, hex, x, y, z, { r = 0.6, rad = 0.12 } = {}) {
    const rr = Math.min(rad, w / 2 - 0.001, h / 2 - 0.001, d / 2 - 0.001)
    return mesh(new RoundedBoxGeometry(w, h, d, 2, rr), typeof hex === "object" ? hex : mat(hex, r), x, y, z, parent)
}
export function cyl(parent, rt, rb, h, hex, x, y, z, seg = 12, r = 0.6) {
    return mesh(new THREE.CylinderGeometry(rt, rb, h, seg), typeof hex === "object" ? hex : mat(hex, r), x, y, z, parent)
}
// a rod from a to b (stays, posts, pipes)
const Y = new THREE.Vector3(0, 1, 0)
export function strut(parent, a, b, rad, m, seg = 6) {
    const A = new THREE.Vector3(...a)
    const B = new THREE.Vector3(...b)
    const d = B.clone().sub(A)
    const o = mesh(new THREE.CylinderGeometry(rad, rad, d.length(), seg), typeof m === "object" ? m : mat(m, 0.5), 0, 0, 0, parent)
    o.position.copy(A).add(B).multiplyScalar(0.5)
    o.quaternion.setFromUnitVectors(Y, d.normalize())
    return o
}
export function tube(parent, pts, rad, m, { closed = false, seg = 80, radial = 8 } = {}) {
    const curve = new THREE.CatmullRomCurve3(
        pts.map((p) => new THREE.Vector3(...p)),
        closed,
        "centripetal"
    )
    return mesh(new THREE.TubeGeometry(curve, seg, rad, radial, closed), typeof m === "object" ? m : mat(m, 0.5), 0, 0, 0, parent)
}

// ---- along the hull (sec(u) gives the half beam w and the sheer height s at u, 0 = stern, 1 = bow) ----
const along = (L, u) => -L / 2 + u * L
// the rubbing strake: from the stern on one side, round the bow, to the stern on the other
export function strake(parent, sec, L, m, rad = 0.18, { drop = 0.25, u0 = 0.015, u1 = 0.985 } = {}) {
    const side = []
    for (let i = 0; i <= 24; i++) {
        const u = u0 + ((u1 - u0) * i) / 24
        const { w, s } = sec(u)
        side.push([along(L, u), s - drop, w + rad * 0.4])
    }
    const nose = sec(1)
    const pts = [...side, [along(L, 1) + rad * 0.3, nose.s - drop, 0], ...side.slice().reverse().map(([x, y, z]) => [x, y, -z])]
    return tube(parent, pts, rad, m, { seg: 120, radial: 6 })
}
// a rail on posts: along both sides from u0 to u1, joined round the bow (the pulpit) if bow is set
export function rail(parent, sec, L, { u0 = 0.1, u1 = 0.95, h = 1.9, inset = 0.35, posts = 6, bow = true, m = steel(), r = 0.07 } = {}) {
    const side = []
    for (let i = 0; i <= 16; i++) {
        const u = u0 + ((u1 - u0) * i) / 16
        const { w, s } = sec(u)
        side.push([along(L, u), s + h, Math.max(0.2, w - inset)])
    }
    const port = side.map(([x, y, z]) => [x, y, -z])
    if (bow) tube(parent, [...port.slice().reverse(), ...side], r, m, { seg: 90, radial: 6 })
    else for (const s of [side, port]) tube(parent, s, r, m, { seg: 40, radial: 6 })
    for (let i = 0; i < posts; i++) {
        const u = u0 + ((u1 - u0) * i) / Math.max(1, posts - 1)
        const { w, s } = sec(u)
        const z = Math.max(0.2, w - inset)
        for (const sd of [-1, 1]) strut(parent, [along(L, u), s - 0.1, sd * z], [along(L, u), s + h, sd * z], r * 0.75, m, 5)
    }
}
// a rail round a rectangle (the edge of a cabin roof or a deck); open leaves the front side (x1) out
export function railBox(parent, x0, x1, z, y, h, { m = steel(), r = 0.07, posts = 4, open = false } = {}) {
    const pts = [
        [x0, y + h, -z],
        [x1, y + h, -z],
        [x1, y + h, z],
        [x0, y + h, z],
    ]
    for (let i = 0; i < 4; i++) {
        if (open && i === 1) continue
        const a = pts[i]
        const b = pts[(i + 1) % 4]
        strut(parent, a, b, r, m, 5)
    }
    for (const sd of [-1, 1])
        for (let i = 0; i < posts; i++) {
            const x = x0 + ((x1 - x0) * i) / Math.max(1, posts - 1)
            strut(parent, [x, y, sd * z], [x, y + h, sd * z], r * 0.75, m, 5)
        }
}

// ---- a cabin: walls raked fore and aft, rounded edges, a band of glass all round with pillars, a roof ----
export function cabin(parent, { x = 0, y = 0, len, h, w, rakeF = 0.3, rakeA = 0.05, hex = 0xf4f4f2, roof = null, win = null, lit = false, pillars = 3, bev = 0.14 }) {
    const g = new THREE.Group()
    g.position.set(x, y, 0)
    parent.add(g)
    const xf = (yy) => len / 2 - rakeF * yy
    const xa = (yy) => -len / 2 + rakeA * yy
    const s = new THREE.Shape()
    s.moveTo(xa(0), 0)
    s.lineTo(xf(0), 0)
    s.lineTo(xf(h), h)
    s.lineTo(xa(h), h)
    s.closePath()
    const walls = new THREE.ExtrudeGeometry(s, { depth: w - 2 * bev, bevelEnabled: true, bevelThickness: bev, bevelSize: bev, bevelSegments: 2, curveSegments: 1 })
    walls.translate(0, 0, -(w - 2 * bev) / 2)
    const wm = typeof hex === "object" ? hex : mat(hex, 0.45)
    mesh(walls, wm, 0, 0, 0, g)
    if (win) {
        const [y0, y1] = win
        const o = bev + 0.04
        const gs = new THREE.Shape()
        gs.moveTo(xa(y0) - o, y0)
        gs.lineTo(xf(y0) + o, y0)
        gs.lineTo(xf(y1) + o, y1)
        gs.lineTo(xa(y1) - o, y1)
        gs.closePath()
        const gw = w + 0.08
        const gg = new THREE.ExtrudeGeometry(gs, { depth: gw, bevelEnabled: false, curveSegments: 1 })
        gg.translate(0, 0, -gw / 2)
        mesh(gg, lit ? litGlass() : glass(), 0, 0, 0, g)
        // pillars between the side windows, and at the corners of the screen
        const ph = y1 - y0
        const ym = (y0 + y1) / 2
        for (let i = 1; i <= pillars; i++) {
            const px = THREE.MathUtils.lerp(xa(ym), xf(ym), i / (pillars + 1))
            box(g, 0.24, ph, w + 0.16, wm, px, ym, 0)
        }
        const slope = Math.atan(rakeF)
        for (const zz of [-1, 0, 1]) {
            const p = box(g, 0.2, ph / Math.cos(slope) + 0.05, zz === 0 ? 0.18 : 0.34, wm, xf(ym) + o + 0.02, ym, zz * (w / 2 - 0.12))
            p.rotation.z = slope
        }
    }
    if (roof != null) {
        const top = h + bev
        const rl = xf(h) - xa(h) + 0.9
        rbox(g, rl, 0.28, w + 0.5, roof, (xf(h) + xa(h)) / 2 + 0.25, top + 0.12, 0, { rad: 0.12 })
    }
    return g
}
// a round port light on a hull side or a wall, facing out along z
export function porthole(parent, x, y, z, rad = 0.38) {
    const o = mesh(new THREE.CylinderGeometry(rad, rad, 0.12, 14), glass(), x, y, z, parent)
    o.rotation.x = Math.PI / 2
    const r = mesh(new THREE.TorusGeometry(rad + 0.04, 0.07, 5, 16), steel(), x, y, z + Math.sign(z) * 0.05, parent)
    return [o, r]
}
// an orange life ring with its four white bands, facing out along z
export function lifering(parent, x, y, z, rad = 0.62) {
    const g = new THREE.Group()
    g.position.set(x, y, z)
    parent.add(g)
    mesh(new THREE.TorusGeometry(rad, rad * 0.27, 8, 20), mat(0xf05a1e, 0.6), 0, 0, 0, g)
    for (let i = 0; i < 4; i++) {
        const b = mesh(new THREE.TorusGeometry(rad, rad * 0.285, 8, 3, 0.36), mat(0xf2f2ee, 0.6), 0, 0, 0, g)
        b.rotation.z = (i * Math.PI) / 2 + 0.6
    }
    return g
}
// a fender hanging on its line over the side
export function fender(parent, x, y, z, hex = 0xf2f2ee) {
    const sd = Math.sign(z) || 1
    mesh(new THREE.CapsuleGeometry(0.32, 1.0, 4, 10), mat(hex, 0.4), x, y - 1.4, z + sd * 0.25, parent)
    strut(parent, [x, y, z], [x, y - 0.6, z + sd * 0.25], 0.025, 0xe8e2d0)
}
// an outboard on the transom (x = the transom), the cowling above, the leg down into the water
export function outboard(parent, x, y, z = 0, { hex = 0xf2f2f0, size = 1 } = {}) {
    const g = new THREE.Group()
    g.position.set(x, y, z)
    g.scale.setScalar(size)
    parent.add(g)
    rbox(g, 1.5, 1.7, 1.1, mat(hex, 0.35), -0.75, 1.0, 0, { rad: 0.35 })
    box(g, 1.52, 0.18, 1.12, 0x1d1f23, -0.75, 0.25, 0, 0.5)
    box(g, 0.5, 2.6, 0.34, 0x24272b, -0.55, -1.1, 0, 0.5)
    box(g, 1.1, 0.07, 0.8, 0x24272b, -0.45, -2.0, 0, 0.5)
    box(g, 0.3, 0.9, 0.3, 0x24272b, -0.05, 0.4, 0, 0.5)
    return g
}
// a radar: a pedestal and the bar that turns (returned, to spin it)
export function radar(parent, x, y, z, len = 3) {
    cyl(parent, 0.28, 0.36, 0.7, 0xe8e8e6, x, y + 0.35, z, 10, 0.4)
    const bar = new THREE.Group()
    bar.position.set(x, y + 0.85, z)
    bar.userData.live = true
    parent.add(bar)
    rbox(bar, 0.36, 0.3, len, 0xf2f2f0, 0, 0, 0, { rad: 0.12, r: 0.4 })
    return bar
}
// a whip aerial
export function aerial(parent, x, y, z, h = 4) {
    cyl(parent, 0.03, 0.06, h, 0xf2f2ee, x, y + h / 2, z, 5, 0.4)
}

// ---- a sail: a grid between the luff and the leech, with a belly (camber) along z ----
// tack, head and clew are [x, y]; roach bows the leech out; the belly is deepest a third of the way back
export function sailGeo(tack, head, clew, { roach = 0, camber = 0.09, rows = 12, cols = 8 } = {}) {
    const T = new THREE.Vector2(...tack)
    const H = new THREE.Vector2(...head)
    const Cl = new THREE.Vector2(...clew)
    const leechDir = H.clone().sub(Cl)
    let n = new THREE.Vector2(-leechDir.y, leechDir.x).normalize()
    if (n.dot(Cl.clone().sub(T)) < 0) n.negate()
    const pos = []
    const uv = []
    for (let j = 0; j <= rows; j++) {
        const v = j / rows
        const a = T.clone().lerp(H, v)
        const b = Cl.clone().lerp(H, v).addScaledVector(n, roach * Math.sin(Math.PI * v) * (1 - v * 0.3))
        const chord = a.distanceTo(b)
        for (let i = 0; i <= cols; i++) {
            const u = i / cols
            const p = a.clone().lerp(b, u)
            const z = camber * chord * Math.sin(Math.PI * Math.pow(u, 0.75))
            pos.push(p.x, p.y, z)
            uv.push(u, v)
        }
    }
    const idx = []
    for (let j = 0; j < rows; j++)
        for (let i = 0; i < cols; i++) {
            const a = j * (cols + 1) + i
            const b = a + 1
            const c = a + cols + 1
            const d = c + 1
            idx.push(a, b, c, b, d, c)
        }
    const g = new THREE.BufferGeometry()
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3))
    g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2))
    g.setIndex(idx)
    g.computeVertexNormals()
    return g
}
export const sailMat = (hex = 0xf4f1e8) => mat(hex, 0.85, 0, { side: THREE.DoubleSide })

// ---- people ----
const SKIN = [0xe6b996, 0xd2a07a, 0xb07a52, 0x8a5a3c, 0xf0cdb0]
const HAIR = [0x2a1e16, 0x4a3020, 0x9a7444, 0x161616, 0x6a4a30, 0xc8a46a]
const JACKET = [0x1f2a38, 0x3a3f44, 0x6e2a2a, 0x2f4a3a, 0xd9d3c6, 0x2c3c5a]
const PANTS = [0x1d2430, 0x2a2d33, 0x3b3f46, 0x4a3c2c, 0x223040]
const pick = (a) => a[Math.floor(Math.random() * a.length)]

const UPPER = 0.95
const FORE = 0.9
let limbGeo = null
function limbGeos() {
    if (!limbGeo)
        limbGeo = {
            upper: new THREE.CapsuleGeometry(0.15, UPPER, 3, 8),
            fore: new THREE.CapsuleGeometry(0.13, FORE, 3, 8),
            hand: new THREE.SphereGeometry(0.14, 8, 6),
            thigh: new THREE.CapsuleGeometry(0.23, 1.45, 3, 8),
            shin: new THREE.CapsuleGeometry(0.18, 1.5, 3, 8),
        }
    return limbGeo
}
const _a = new THREE.Vector3()
const _b = new THREE.Vector3()
const _d = new THREE.Vector3()
const _e = new THREE.Vector3()
// put a bone of a fixed length between two joints
function place(o, A, B) {
    o.position.copy(A).add(B).multiplyScalar(0.5)
    _d.copy(B).sub(A).normalize()
    o.quaternion.setFromUnitVectors(Y, _d)
}
// two bones from S reaching for H, the elbow (or knee) pushed towards bend
function reach2(up, lo, hand, S, H, l1, l2, bend) {
    _d.copy(H).sub(S)
    let len = _d.length()
    _d.normalize()
    len = Math.min(len, (l1 + l2) * 0.995)
    const a = (l1 * l1 - l2 * l2 + len * len) / (2 * len)
    const h = Math.sqrt(Math.max(0, l1 * l1 - a * a))
    _e.copy(bend).addScaledVector(_d, -bend.dot(_d)).normalize()
    const E = _a.copy(S).addScaledVector(_d, a).addScaledVector(_e, h)
    const W = _b.copy(S).addScaledVector(_d, len)
    place(up, S, E)
    place(lo, E, W)
    if (hand) hand.position.copy(W)
}

// a person, sitting (y = the seat) or standing (y = the deck); faces +x
// hat: "cap" | "beanie" | "hair" | "helmet" | "sou" (a sou'wester); hands: [[x,y,z],[x,y,z]] to reach for
export function person(parent, vest, x, y, z, opts = {}) {
    const { lean = 0, pose = "sit", hat = pick(["cap", "beanie", "hair", "hair"]), jacket = pick(JACKET), pants = pick(PANTS), legs = true, hands = null, hatHex = null } = opts
    const G = limbGeos()
    const g = new THREE.Group()
    g.position.set(x, y, z)
    g.rotation.x = lean
    const skin = mat(pick(SKIN), 0.62)
    const cloth = mat(jacket, 0.85)
    const vestM = mat(vest, 0.7)
    const pantM = mat(pants, 0.9)
    const H0 = pose === "stand" ? 3.0 : 0.45
    // the body
    mesh(new THREE.SphereGeometry(0.5, 12, 8), pantM, 0, H0 + 0.05, 0, g).scale.set(0.95, 0.6, 1.2)
    mesh(new THREE.CapsuleGeometry(0.5, 0.85, 4, 12), cloth, 0, H0 + 0.95, 0, g).scale.set(0.8, 1, 1.25)
    mesh(new THREE.CylinderGeometry(0.6, 0.66, 1.1, 14), vestM, 0.02, H0 + 1.3, 0, g).scale.set(0.9, 1, 1.15)
    mesh(new THREE.CylinderGeometry(0.665, 0.665, 0.1, 14), mat(0xdfe3e6, 0.3, 0.5), 0.02, H0 + 1.12, 0, g).scale.set(0.9, 1, 1.15)
    const collar = mesh(new THREE.TorusGeometry(0.33, 0.15, 6, 14), vestM, 0, H0 + 1.88, 0, g)
    collar.rotation.x = Math.PI / 2
    cyl(g, 0.17, 0.19, 0.4, skin, 0, H0 + 2.0, 0, 8)
    const head = mesh(new THREE.SphereGeometry(0.37, 14, 12), skin, 0.02, H0 + 2.42, 0, g)
    head.scale.set(1, 1.12, 0.94)
    mesh(new THREE.SphereGeometry(0.08, 6, 5), skin, 0.38, H0 + 2.38, 0, g)
    const hh = hatHex != null ? hatHex : hat === "hair" ? pick(HAIR) : pick([0x1d2430, 0xb8322a, 0xe8e2d6, 0x2f6fb0, 0x2a2d33, 0xf2c230])
    const hm = mat(hh, hat === "hair" ? 0.8 : 0.75)
    const dome = (r, sy = 1) => mesh(new THREE.SphereGeometry(r, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), hm, 0.0, H0 + 2.5, 0, g).scale.set(1, sy, 0.98)
    if (hat === "cap") {
        dome(0.4, 0.75)
        mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.05, 12, 1, false, 0, Math.PI), hm, 0.2, H0 + 2.52, 0, g).scale.set(1.15, 1, 0.8)
    } else if (hat === "beanie") {
        dome(0.41, 1.15)
        const band = mesh(new THREE.TorusGeometry(0.39, 0.08, 6, 16), hm, 0, H0 + 2.53, 0, g)
        band.rotation.x = Math.PI / 2
    } else if (hat === "helmet") {
        dome(0.44, 0.95)
    } else if (hat === "sou") {
        dome(0.42, 0.9)
        mesh(new THREE.CylinderGeometry(0.62, 0.7, 0.05, 16), hm, -0.08, H0 + 2.5, 0, g).rotation.z = 0.12
    } else {
        dome(0.4, 0.9)
        mesh(new THREE.SphereGeometry(0.36, 10, 8), hm, -0.12, H0 + 2.36, 0, g).scale.set(0.8, 1.05, 1.02)
    }
    // the legs
    if (legs)
        for (const sd of [-1, 1]) {
            const hip = new THREE.Vector3(0.05, H0, sd * 0.3)
            const th = mesh(G.thigh, pantM, 0, 0, 0, g)
            const sh = mesh(G.shin, pantM, 0, 0, 0, g)
            const foot = pose === "stand" ? new THREE.Vector3(0.02, 0.3, sd * 0.32) : new THREE.Vector3(1.55, H0 - 1.25, sd * 0.38)
            reach2(th, sh, null, hip, foot, 1.45, 1.5, pose === "stand" ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(1, 1, 0))
            rbox(g, 0.75, 0.32, 0.38, 0x1d1f23, foot.x + 0.2, foot.y - 0.1, foot.z, { rad: 0.1, r: 0.8 })
        }
    // the arms
    const arms = []
    for (const sd of [-1, 1]) {
        const up = mesh(G.upper, cloth, 0, 0, 0, g)
        const lo = mesh(G.fore, cloth, 0, 0, 0, g)
        const hand = mesh(G.hand, skin, 0, 0, 0, g)
        arms.push({ up, lo, hand, S: new THREE.Vector3(0, H0 + 1.68, sd * 0.64), sd })
    }
    const H = new THREE.Vector3()
    const bend = new THREE.Vector3()
    g.reach = (L, R, b = [-1, -0.4, 0.7]) => {
        for (const a of arms) {
            const p = a.sd < 0 ? L : R
            H.set(p[0], p[1], p[2])
            bend.set(b[0], b[1], b[2] * a.sd)
            reach2(a.up, a.lo, a.hand, a.S, H, UPPER, FORE, bend)
        }
    }
    if (hands) g.reach(hands[0], hands[1], hands[2] || undefined)
    else if (pose === "stand") g.reach([0.3, H0 + 0.05, -0.78], [0.3, H0 + 0.05, 0.78], [-1, 0, 0.3])
    else g.reach([1.15, H0 + 0.4, -0.5], [1.15, H0 + 0.4, 0.5], [-1, -0.5, 0.6])
    g.H0 = H0
    g.arms = arms.flatMap((a) => [a.up, a.lo, a.hand])
    parent.add(g)
    return g
}

// ---- merge what never moves: one mesh per material ----
export function bake(root) {
    root.updateMatrixWorld(true)
    const inv = new THREE.Matrix4().copy(root.matrixWorld).invert()
    const by = new Map()
    const drop = []
    const m4 = new THREE.Matrix4()
    root.traverse((o) => {
        if (!o.isMesh || o.isInstancedMesh || o.userData.live) return
        for (let p = o.parent; p && p !== root; p = p.parent) if (p.userData.live) return
        let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone()
        for (const k of Object.keys(g.attributes)) if (k !== "position" && k !== "normal" && k !== "color") g.deleteAttribute(k)
        m4.multiplyMatrices(inv, o.matrixWorld)
        g.applyMatrix4(m4)
        // a mirrored part would turn inside out
        if (m4.determinant() < 0) {
            const P = g.attributes.position
            const N = g.attributes.normal
            for (let i = 0; i < P.count; i += 3) {
                for (const A of [P, N, g.attributes.color].filter(Boolean)) {
                    const t = [A.getX(i + 1), A.getY(i + 1), A.getZ(i + 1)]
                    A.setXYZ(i + 1, A.getX(i + 2), A.getY(i + 2), A.getZ(i + 2))
                    A.setXYZ(i + 2, ...t)
                }
            }
        }
        const k = o.material.uuid
        if (!by.has(k)) by.set(k, { m: o.material, list: [] })
        by.get(k).list.push(g)
        drop.push(o)
    })
    for (const o of drop) o.parent.remove(o)
    for (const { m, list } of by.values()) {
        const merged = mergeGeometries(list, false)
        if (merged) root.add(new THREE.Mesh(merged, m))
        for (const g of list) g.dispose()
    }
    return root
}
