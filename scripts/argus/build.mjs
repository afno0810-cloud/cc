/* ================================================================
   Argus, built from the photos of the real boat (not an AI scan), so
   every part sits where it is on the boat:

   - two white hulls with rounded ends, a flat deck and a framed hatch,
   - an aluminium frame of slotted profiles on plates, with brackets,
   - the black electronics case, closed: flat ribbed lid, orange seal,
     latches, handle, hinge, purge valve, cable glands,
   - the stereo camera under the front of the case,
   - the two Seapath GNSS antennas on wooden blocks at the stern,
   - four ducted thrusters on sprung posts under the hull ends,
   - the emergency stop, cable loops and cables, the arrow, and the
     sponsor names on the starboard hull.

   Surfaces: gelcoat, pebbled plastic and brushed aluminium textures
   (scripts/argus/textures.py), and the shadow in every corner baked into
   the vertices (ambient occlusion, ray traced here).

   Model axes: bow = +x, up = +y, starboard = +z. Metres while building,
   then scaled so the boat is 1 unit long (the site scales it up).

   Usage: python3 scripts/argus/textures.py && node scripts/argus/build.mjs
          → public/media/models/argus.glb and argus-lite.glb
   ================================================================ */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import * as THREE from "three"
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js"
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js"
import { MeshBVH } from "three-mesh-bvh"
import { Document, NodeIO } from "@gltf-transform/core"
import { ALL_EXTENSIONS, KHRMaterialsClearcoat, KHRTextureTransform } from "@gltf-transform/extensions"
import { weld, prune, reorder, quantize, meshopt } from "@gltf-transform/functions"
import { MeshoptEncoder } from "meshoptimizer"

const here = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.resolve(here, "../../public/media/models")

// ---------- sizes (metres) ----------
const HULL_L = 1.25
const HULL_W = 0.26
const HULL_D = 0.24
const HULL_Z = 0.36 // centre line of each hull from the middle
const BEAM_X = 0.33 // the two cross beams
const RAIL_Z = 0.11 // the two rails along the boat
const PROF = 0.03 // aluminium profile, 30 × 30 mm
const PLATE = 0.006
const BEAM_Y = PLATE + PROF / 2
const RAIL_Y = PLATE + PROF + PROF / 2
const CASE = { x: 0.3, y: 0.2, z: 0.46, bottom: PLATE + PROF * 2 }
const SEAM = CASE.bottom + CASE.y * 0.62
const WATER_Y = -0.15

// ---------- the hull shape ----------
function hullHalfWidth(x) {
    const R = HULL_W / 2
    const s = Math.abs(x) - (HULL_L / 2 - R)
    return s <= 0 ? HULL_W / 2 : (HULL_W / 2) * Math.sqrt(Math.max(0, 1 - (s / R) ** 2))
}
function hullTop(x) {
    const R = 0.06
    const s = Math.abs(x) - (HULL_L / 2 - R)
    return s <= 0 ? 0 : -(R - Math.sqrt(Math.max(0, R * R - s * s)))
}
const TIP_Y = -0.1
function hullBottom(x) {
    const R = 0.26
    const s = Math.abs(x) - (HULL_L / 2 - R)
    if (s <= 0) return -HULL_D
    return -HULL_D + (HULL_D + TIP_Y) * (1 - Math.sqrt(Math.max(0, 1 - (s / R) ** 2)))
}
// a point on the hull surface: station x, angle th (0 = starboard side, up = +pi/2)
function hullPoint(x, th) {
    const a = Math.max(hullHalfWidth(x), 0.002)
    const yt = hullTop(x)
    const yb = hullBottom(x)
    const yc = (yt + yb) / 2
    const h = (yt - yb) / 2
    const c = Math.cos(th)
    const s = Math.sin(th)
    const n = s > 0 ? 7 : 2.6 // boxy deck, round bottom
    return [a * Math.sign(c) * Math.abs(c) ** (2 / n), yc + h * Math.sign(s) * Math.abs(s) ** (2 / n)]
}

function hullGeometry(N, M) {
    const pos = []
    const uv = []
    const idx = []
    const xs = []
    for (let i = 0; i < N; i++) {
        const k = (1 - Math.cos((Math.PI * i) / (N - 1))) / 2 // denser at the ends
        xs.push((-HULL_L / 2) * 0.998 + HULL_L * 0.998 * k)
    }
    for (const x of xs) {
        for (let j = 0; j < M; j++) {
            const [z, y] = hullPoint(x, (2 * Math.PI * j) / M)
            pos.push(x, y, z)
            uv.push((x + HULL_L / 2) / HULL_L, j / M)
        }
    }
    for (let i = 0; i < N - 1; i++) {
        for (let j = 0; j < M; j++) {
            const a = i * M + j
            const b = i * M + ((j + 1) % M)
            const c = (i + 1) * M + ((j + 1) % M)
            const d = (i + 1) * M + j
            idx.push(a, d, c, a, c, b)
        }
    }
    for (const [i, x] of [
        [0, -HULL_L / 2],
        [N - 1, HULL_L / 2],
    ]) {
        const tip = pos.length / 3
        pos.push(x, (hullTop(x) + hullBottom(x)) / 2, 0)
        uv.push(i === 0 ? 0 : 1, 0.5)
        for (let j = 0; j < M; j++) {
            const a = i * M + j
            const b = i * M + ((j + 1) % M)
            if (i === 0) idx.push(tip, a, b)
            else idx.push(tip, b, a)
        }
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3))
    g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2))
    g.setIndex(idx)
    g.computeVertexNormals()
    const n = g.attributes.normal
    const mid = Math.floor(N / 2) * M
    if (n.getZ(mid) < 0) {
        const ix = g.index.array
        for (let t = 0; t < ix.length; t += 3) [ix[t + 1], ix[t + 2]] = [ix[t + 2], ix[t + 1]]
        g.computeVertexNormals()
    }
    return g
}

// a 30 × 30 mm aluminium profile with a slot in each face and chamfered corners, along +z
function profileGeometry(length, slots) {
    const h = PROF / 2
    const ch = 0.0018
    const sw = 0.0041
    const sd = 0.0045
    const pts = []
    const side = (x0, y0, x1, y1, nx, ny) => {
        const dx = Math.sign(x1 - x0)
        const dy = Math.sign(y1 - y0)
        const mx = (x0 + x1) / 2
        const my = (y0 + y1) / 2
        pts.push([x0 + dx * ch, y0 + dy * ch])
        if (slots) {
            pts.push([mx - dx * sw, my - dy * sw])
            pts.push([mx - dx * sw - nx * 0.0012, my - dy * sw - ny * 0.0012])
            pts.push([mx - dx * (sw - 0.0008) - nx * 0.0012, my - dy * (sw - 0.0008) - ny * 0.0012])
            pts.push([mx - dx * (sw + 0.0016) - nx * sd, my - dy * (sw + 0.0016) - ny * sd])
            pts.push([mx + dx * (sw + 0.0016) - nx * sd, my + dy * (sw + 0.0016) - ny * sd])
            pts.push([mx + dx * (sw - 0.0008) - nx * 0.0012, my + dy * (sw - 0.0008) - ny * 0.0012])
            pts.push([mx + dx * sw - nx * 0.0012, my + dy * sw - ny * 0.0012])
            pts.push([mx + dx * sw, my + dy * sw])
        }
        pts.push([x1 - dx * ch, y1 - dy * ch])
    }
    side(-h, -h, h, -h, 0, -1)
    side(h, -h, h, h, 1, 0)
    side(h, h, -h, h, 0, 1)
    side(-h, h, -h, -h, -1, 0)
    const s = new THREE.Shape()
    s.moveTo(...pts[0])
    for (const p of pts.slice(1)) s.lineTo(...p)
    s.closePath()
    // the centre bore
    const bore = new THREE.Path()
    bore.absarc(0, 0, 0.0034, 0, Math.PI * 2, true)
    s.holes.push(bore)
    const g = new THREE.ExtrudeGeometry(s, { depth: length, bevelEnabled: false, steps: 1, curveSegments: 10 })
    g.translate(0, 0, -length / 2)
    return g
}

function roundedRectShape(w, h, r) {
    const s = new THREE.Shape()
    roundedRectPath(s, w, h, r)
    return s
}
function roundedRectPath(s, w, h, r, reverse = false) {
    const x = -w / 2
    const y = -h / 2
    const P = [
        ["m", x + r, y],
        ["l", x + w - r, y],
        ["q", x + w, y, x + w, y + r],
        ["l", x + w, y + h - r],
        ["q", x + w, y + h, x + w - r, y + h],
        ["l", x + r, y + h],
        ["q", x, y + h, x, y + h - r],
        ["l", x, y + r],
        ["q", x, y, x + r, y],
    ]
    if (!reverse) {
        for (const p of P) {
            if (p[0] === "m") s.moveTo(p[1], p[2])
            else if (p[0] === "l") s.lineTo(p[1], p[2])
            else s.quadraticCurveTo(p[1], p[2], p[3], p[4])
        }
    } else {
        // the same outline the other way round (for holes)
        const pts = new THREE.Shape()
        roundedRectPath(pts, w, h, r)
        const list = pts.getPoints(8).reverse()
        s.moveTo(list[0].x, list[0].y)
        for (const p of list.slice(1)) s.lineTo(p.x, p.y)
    }
    return s
}

// ---------- materials (sRGB colours; THREE.Color keeps them linear) ----------
const MATS = {
    hull: { color: "#ffffff", rough: 1, map: "hull_albedo.jpg", normal: "hull_normal.jpg", orm: "hull_orm.jpg", clearcoat: [0.55, 0.18] },
    hatch: { color: "#f6f6f3", rough: 0.36, clearcoat: [0.3, 0.25] },
    hatchFrame: { color: "#e9e9e5", rough: 0.5 },
    alu: { color: "#d2d6db", rough: 1, metal: 1, orm: "alu_orm.jpg" },
    steel: { color: "#c3c8ce", rough: 0.22, metal: 1 },
    case: { color: "#ffffff", rough: 0.62, map: "case_albedo.jpg", normal: "case_normal.jpg" },
    caseDetail: { color: "#232327", rough: 0.5, normal: "case_normal.jpg" },
    seal: { color: "#ff5a1a", rough: 0.55 },
    rubber: { color: "#121214", rough: 0.7 },
    plastic: { color: "#1a1a1d", rough: 0.42 },
    cable: { color: "#0c0c0e", rough: 0.55 },
    wood: { color: "#93613a", rough: 0.85 },
    antenna: { color: "#f3f3f0", rough: 0.3, clearcoat: [0.4, 0.2] },
    antennaGrey: { color: "#9ea3a8", rough: 0.4 },
    yellow: { color: "#f2bd00", rough: 0.42 },
    red: { color: "#c9151b", rough: 0.3, clearcoat: [0.5, 0.1] },
    lens: { color: "#0a1220", rough: 0.04, metal: 0.3 },
    zedFront: { color: "#3b3f45", rough: 0.35, metal: 0.8 },
    mark: { color: "#0c0c0d", rough: 0.6 },
    sponsors: { color: "#ffffff", rough: 0.45, map: "sponsors.png", alpha: true },
}

function build(lite) {
    const parts = Object.fromEntries(Object.keys(MATS).map((k) => [k, []]))
    const seg = (n) => Math.max(6, Math.round(lite ? n * 0.55 : n))
    const m4 = new THREE.Matrix4()
    const add = (mat, g, { p = [0, 0, 0], r = [0, 0, 0], s = [1, 1, 1], uv = 1 } = {}) => {
        const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(r[0], r[1], r[2], "YXZ"))
        m4.compose(new THREE.Vector3(...p), q, new THREE.Vector3(...s))
        const gg = (g.index ? g.toNonIndexed() : g.clone()).applyMatrix4(m4)
        if (!gg.attributes.uv) gg.setAttribute("uv", new THREE.Float32BufferAttribute(new Float32Array(gg.attributes.position.count * 2), 2))
        if (uv !== 1) {
            const a = gg.attributes.uv
            for (let i = 0; i < a.count; i++) a.setXY(i, a.getX(i) * (Array.isArray(uv) ? uv[0] : uv), a.getY(i) * (Array.isArray(uv) ? uv[1] : uv))
        }
        if (!gg.attributes.normal) gg.computeVertexNormals()
        for (const k of Object.keys(gg.attributes)) if (!["position", "normal", "uv"].includes(k)) gg.deleteAttribute(k)
        parts[mat].push(gg)
    }
    const screw = (p, up = [0, 1, 0], r = 0.0042) => {
        // a pan head with a cross, standing on the surface along "up"
        const head = new THREE.CylinderGeometry(r, r * 1.05, r * 0.7, seg(10))
        head.translate(0, r * 0.35, 0)
        const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(...up).normalize())
        const e = new THREE.Euler().setFromQuaternion(q, "YXZ")
        add("steel", head, { p, r: [e.x, e.y, e.z] })
    }
    const cable = (points, r = 0.0038, mat = "cable") => {
        const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)), false, "centripetal")
        add(mat, new THREE.TubeGeometry(curve, seg(Math.max(16, points.length * 10)), r, seg(8), false))
    }

    // ---------------- hulls ----------------
    const hull = hullGeometry(lite ? 64 : 120, lite ? 32 : 60)
    // hatch: a frame with screws, and the lid with a twist lock
    const frameShape = roundedRectShape(0.37, 0.22, 0.045)
    frameShape.holes.push(roundedRectPath(new THREE.Path(), 0.322, 0.172, 0.03, true))
    const hatchFrame = new THREE.ExtrudeGeometry(frameShape, { depth: 0.005, bevelEnabled: true, bevelThickness: 0.002, bevelSize: 0.002, bevelSegments: 2, curveSegments: seg(8) })
    hatchFrame.rotateX(-Math.PI / 2)
    const hatchLid = new THREE.ExtrudeGeometry(roundedRectShape(0.318, 0.168, 0.028), { depth: 0.008, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.004, bevelSegments: 3, curveSegments: seg(8) })
    hatchLid.rotateX(-Math.PI / 2)
    const lock = new THREE.CylinderGeometry(0.024, 0.026, 0.006, seg(24))
    const lockBar = new RoundedBoxGeometry(0.036, 0.008, 0.009, 2, 0.003)
    const plate = new RoundedBoxGeometry(0.06, PLATE, 0.13, 2, 0.0015)
    for (const zs of [-1, 1]) {
        const z = HULL_Z * zs
        add("hull", hull, { p: [0, 0, z] })
        const hx = -0.03
        add("hatchFrame", hatchFrame, { p: [hx, 0.0005, z] })
        add("hatch", hatchLid, { p: [hx, 0.003, z] })
        add("hatch", lock, { p: [hx - 0.1, 0.018, z] })
        add("hatch", lockBar, { p: [hx - 0.1, 0.023, z], r: [0, 0.5, 0] })
        for (const [sx, sz] of [
            [-0.16, -0.085],
            [0, -0.085],
            [0.16, -0.085],
            [-0.16, 0.085],
            [0, 0.085],
            [0.16, 0.085],
        ])
            screw([hx + sx, 0.007, z + sz], [0, 1, 0], 0.0032)
        for (const xs of [-1, 1]) {
            add("alu", plate, { p: [BEAM_X * xs, PLATE / 2, z], uv: 3 })
            for (const [sx, sz] of [
                [-0.018, -0.05],
                [0.018, -0.05],
                [-0.018, 0.05],
                [0.018, 0.05],
            ])
                screw([BEAM_X * xs + sx, PLATE, z + sz], [0, 1, 0], 0.0036)
        }
    }

    // ---------------- the frame ----------------
    const beam = profileGeometry(1.04, !lite)
    for (const xs of [-1, 1]) add("alu", beam, { p: [BEAM_X * xs, BEAM_Y, 0], uv: [40, 2] })
    const rail = profileGeometry(0.8, !lite)
    for (const zs of [-1, 1]) add("alu", rail, { p: [0, RAIL_Y, RAIL_Z * zs], r: [0, Math.PI / 2, 0], uv: [40, 2] })
    const cap = new RoundedBoxGeometry(PROF + 0.002, PROF + 0.002, 0.004, 2, 0.0012)
    for (const xs of [-1, 1]) for (const zs of [-1, 1]) add("plastic", cap, { p: [BEAM_X * xs, BEAM_Y, 0.52 * zs] })
    for (const zs of [-1, 1]) for (const xs of [-1, 1]) add("plastic", cap, { p: [0.4 * xs, RAIL_Y, RAIL_Z * zs], r: [0, Math.PI / 2, 0] })
    // angle brackets where the rails sit on the beams
    const leg = new THREE.BoxGeometry(0.028, 0.003, 0.028)
    for (const xs of [-1, 1]) {
        for (const zs of [-1, 1]) {
            const bx = BEAM_X * xs
            const bz = RAIL_Z * zs
            add("alu", new THREE.BoxGeometry(0.028, 0.028, 0.003), { p: [bx - xs * 0.0165, RAIL_Y, bz + zs * 0.0165 + zs * 0.0001], uv: 3 })
            add("alu", leg, { p: [bx, BEAM_Y + PROF / 2 + 0.0015, bz + zs * 0.0315], uv: 3 })
            screw([bx, BEAM_Y + PROF / 2 + 0.003, bz + zs * 0.033], [0, 1, 0], 0.0038)
        }
        // where the beams sit on the hull plates: bolts through the slot
        for (const zs of [-1, 1]) screw([BEAM_X * xs, BEAM_Y + PROF / 2, HULL_Z * zs], [0, 1, 0], 0.0045)
    }

    // ---------------- the electronics case ----------------
    const lowH = SEAM - CASE.bottom
    const lidH = CASE.bottom + CASE.y - SEAM
    const cuv = (w, h) => [w / 0.06, h / 0.06]
    add("case", new RoundedBoxGeometry(CASE.x, lowH, CASE.z, seg(4), 0.018), { p: [0, CASE.bottom + lowH / 2, 0], uv: cuv(CASE.z, lowH) })
    add("case", new RoundedBoxGeometry(CASE.x + 0.006, lidH, CASE.z + 0.006, seg(4), 0.018), { p: [0, SEAM + lidH / 2, 0], uv: cuv(CASE.z, lidH) })
    // the lip where lid and base meet, and the orange seal just visible in the gap
    add("caseDetail", new RoundedBoxGeometry(CASE.x + 0.012, 0.01, CASE.z + 0.012, 2, 0.004), { p: [0, SEAM + 0.007, 0], uv: 6 })
    add("seal", new THREE.BoxGeometry(CASE.x + 0.002, 0.004, CASE.z + 0.002), { p: [0, SEAM, 0] })
    // the lid: a raised frame round the edge and two flat ribs inside it (no bump)
    const top = CASE.bottom + CASE.y
    const lidFrame = roundedRectShape(CASE.z - 0.02, CASE.x - 0.02, 0.02)
    lidFrame.holes.push(roundedRectPath(new THREE.Path(), CASE.z - 0.05, CASE.x - 0.05, 0.012, true))
    const lf = new THREE.ExtrudeGeometry(lidFrame, { depth: 0.004, bevelEnabled: true, bevelThickness: 0.0015, bevelSize: 0.0015, bevelSegments: 1, curveSegments: seg(6) })
    lf.rotateX(-Math.PI / 2)
    lf.rotateY(Math.PI / 2)
    add("case", lf, { p: [0, top - 0.0005, 0], uv: 12 })
    for (const zs of [-1, 1]) add("case", new RoundedBoxGeometry(CASE.x - 0.07, 0.003, 0.026, 2, 0.0012), { p: [0, top + 0.001, 0.095 * zs], uv: 6 })
    // vertical ribs on the front and back of the base
    for (const xs of [-1, 1]) for (const zs of [-1, 1]) add("case", new RoundedBoxGeometry(0.006, lowH - 0.02, 0.012, 2, 0.002), { p: [xs * (CASE.x / 2 + 0.002), CASE.bottom + lowH / 2, 0.2 * zs], uv: 6 })
    // latches on the front (bow side): a base and a lever
    const front = CASE.x / 2
    for (const zs of [-1, 1]) {
        add("caseDetail", new RoundedBoxGeometry(0.012, 0.028, 0.06, 2, 0.003), { p: [front + 0.004, SEAM - 0.02, 0.135 * zs], uv: 6 })
        add("caseDetail", new RoundedBoxGeometry(0.014, 0.062, 0.05, 3, 0.005), { p: [front + 0.01, SEAM + 0.002, 0.135 * zs], r: [0, 0, -0.08], uv: 6 })
        add("plastic", new THREE.BoxGeometry(0.004, 0.012, 0.03), { p: [front + 0.018, SEAM + 0.022, 0.135 * zs] })
    }
    // front handle on two mounts
    const grip = new THREE.CapsuleGeometry(0.0095, 0.1, seg(4), seg(12))
    grip.rotateX(Math.PI / 2)
    add("caseDetail", grip, { p: [front + 0.03, SEAM + 0.012, 0], uv: 6 })
    for (const zs of [-1, 1]) add("caseDetail", new RoundedBoxGeometry(0.03, 0.026, 0.016, 2, 0.005), { p: [front + 0.014, SEAM + 0.012, 0.067 * zs], uv: 6 })
    // purge valve
    add("plastic", new THREE.CylinderGeometry(0.012, 0.013, 0.007, seg(16)), { p: [front + 0.0035, SEAM - 0.045, 0.06], r: [0, 0, Math.PI / 2] })
    // hinge along the back
    for (let k = -2; k <= 2; k++) add("caseDetail", new THREE.CylinderGeometry(0.008, 0.008, 0.07, seg(12)), { p: [-front - 0.008, SEAM + 0.004, k * 0.085], r: [Math.PI / 2, 0, 0], uv: 6 })
    // cable glands on the back of the base
    const gland = new THREE.CylinderGeometry(0.0075, 0.0085, 0.016, seg(10))
    const nut = new THREE.CylinderGeometry(0.011, 0.011, 0.005, 6)
    const glandZ = [-0.15, -0.09, 0.09, 0.15]
    for (const z of glandZ) {
        add("plastic", gland, { p: [-front - 0.008, CASE.bottom + 0.05, z], r: [0, 0, Math.PI / 2] })
        add("plastic", nut, { p: [-front - 0.0025, CASE.bottom + 0.05, z], r: [0, 0, Math.PI / 2] })
    }
    // feet on the rails
    for (const xs of [-1, 1]) for (const zs of [-1, 1]) add("plastic", new RoundedBoxGeometry(0.036, 0.007, 0.034, 2, 0.002), { p: [0.1 * xs, CASE.bottom + 0.0035, RAIL_Z * zs] })

    // ---------------- stereo camera under the front of the case ----------------
    const camY = CASE.bottom + 0.035
    const camX = front + 0.02
    add("plastic", new RoundedBoxGeometry(0.032, 0.031, 0.176, 3, 0.014), { p: [camX, camY, 0] })
    add("zedFront", new RoundedBoxGeometry(0.004, 0.024, 0.165, 2, 0.01), { p: [camX + 0.016, camY, 0] })
    add("plastic", new THREE.BoxGeometry(0.03, 0.01, 0.03), { p: [camX - 0.012, camY + 0.02, 0] })
    for (const zs of [-1, 1]) {
        add("lens", new THREE.CylinderGeometry(0.0085, 0.0085, 0.003, seg(24)), { p: [camX + 0.0185, camY, 0.06 * zs], r: [0, 0, Math.PI / 2] })
        add("plastic", new THREE.TorusGeometry(0.0098, 0.0016, seg(6), seg(24)), { p: [camX + 0.0185, camY, 0.06 * zs], r: [0, Math.PI / 2, 0] })
    }

    // ---------------- Seapath 130: GNSS antennas on wooden blocks at the stern ----------------
    const puck = new THREE.LatheGeometry(
        [
            [0, 0],
            [0.072, 0],
            [0.075, 0.004],
            [0.076, 0.011],
            [0.073, 0.013], // a groove round the side
            [0.075, 0.015],
            [0.074, 0.026],
            [0.064, 0.035],
            [0.044, 0.04],
            [0.02, 0.0425],
            [0, 0.043],
        ].map(([x, y]) => new THREE.Vector2(x, y)),
        seg(48)
    )
    const ax = -HULL_L / 2 + 0.1
    for (const zs of [-1, 1]) {
        const z = HULL_Z * zs
        add("wood", new RoundedBoxGeometry(0.072, 0.05, 0.062, 2, 0.003), { p: [ax, 0.025, z] })
        add("alu", new THREE.CylinderGeometry(0.052, 0.052, 0.004, seg(24)), { p: [ax, 0.052, z], uv: 3 })
        add("antennaGrey", new THREE.CylinderGeometry(0.06, 0.063, 0.008, seg(32)), { p: [ax, 0.058, z] })
        add("antenna", puck, { p: [ax, 0.062, z] })
        for (const [sx, sz] of [
            [-0.027, -0.023],
            [0.027, -0.023],
            [-0.027, 0.023],
            [0.027, 0.023],
        ])
            screw([ax + sx, 0.05, z + sz], [0, 1, 0], 0.0032)
        // the antenna cable: down the block, along the deck to the beam, along the beam to the case
        const bx = -BEAM_X
        cable([
            [ax + 0.036, 0.03, z],
            [ax + 0.06, 0.006, z - zs * 0.02],
            [bx - 0.06, 0.0045, z - zs * 0.06],
            [bx - 0.02, 0.012, z - zs * 0.09],
            [bx - 0.018, BEAM_Y + 0.019, z - zs * 0.15],
            [bx - 0.018, BEAM_Y + 0.019, zs * 0.2],
            [-front - 0.03, CASE.bottom + 0.04, glandZ[zs < 0 ? 0 : 3] + zs * 0.0],
            [-front - 0.012, CASE.bottom + 0.05, glandZ[zs < 0 ? 0 : 3]],
        ])
    }

    // ---------------- four ducted thrusters on sprung posts ----------------
    const duct = new THREE.LatheGeometry(
        [
            [0.046, -0.036],
            [0.054, -0.038],
            [0.061, -0.03],
            [0.062, 0.022],
            [0.056, 0.036],
            [0.048, 0.036],
            [0.046, -0.036],
        ].map(([x, y]) => new THREE.Vector2(x, y)),
        8
    )
    const motor = new THREE.LatheGeometry(
        [
            [0, -0.045],
            [0.008, -0.044],
            [0.016, -0.034],
            [0.02, -0.02],
            [0.02, 0.012],
            [0.017, 0.022],
            [0.012, 0.03],
            [0, 0.032],
        ].map(([x, y]) => new THREE.Vector2(x, y)),
        seg(20)
    )
    const groove = new THREE.TorusGeometry(0.0202, 0.0012, 4, seg(20))
    groove.rotateX(Math.PI / 2)
    // a twisted propeller blade along +x
    const bladeGeo = (() => {
        const g = new THREE.BoxGeometry(0.03, 0.0025, 0.016, 6, 1, 2)
        const p = g.attributes.position
        for (let i = 0; i < p.count; i++) {
            const x = p.getX(i) + 0.015
            const tw = 0.9 - x * 14 // twist, less towards the tip
            const y = p.getY(i)
            const z = p.getZ(i) * (1 - x * 10) // narrower at the tip
            p.setXYZ(i, x + 0.014, y * Math.cos(tw) - z * Math.sin(tw), y * Math.sin(tw) + z * Math.cos(tw))
        }
        g.computeVertexNormals()
        return g
    })()
    const stator = new THREE.BoxGeometry(0.028, 0.003, 0.008)
    const spring = (() => {
        const pts = []
        const turns = 6
        for (let i = 0; i <= turns * 16; i++) {
            const a = (i / 16) * Math.PI * 2
            pts.push(new THREE.Vector3(Math.cos(a) * 0.014, (i / (turns * 16)) * 0.046, Math.sin(a) * 0.014))
        }
        return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), seg(turns * 24), 0.0022, 5, false)
    })()
    for (const xs of [-1, 1]) {
        for (const zs of [-1, 1]) {
            const x = 0.44 * xs
            const z = HULL_Z * zs
            const yb = hullBottom(x)
            const rodL = 0.05
            add("plastic", new THREE.CylinderGeometry(0.02, 0.022, 0.006, seg(16)), { p: [x, yb + 0.001, z] })
            add("steel", new THREE.CylinderGeometry(0.0065, 0.0065, rodL + 0.01, seg(12)), { p: [x, yb - rodL / 2 + 0.005, z] })
            add("steel", spring, { p: [x, yb - rodL + 0.002, z] })
            add("plastic", new RoundedBoxGeometry(0.05, 0.022, 0.036, 2, 0.006), { p: [x, yb - rodL - 0.004, z] })
            const cy = yb - rodL - 0.015 - 0.06
            const yaw = (Math.PI / 4) * xs * zs
            const t = { p: [x, cy, z], r: [0, yaw, Math.PI / 2] }
            add("rubber", duct, t)
            add("plastic", motor, t)
            for (const k of [-0.012, 0.0, 0.012]) add("plastic", groove.clone().translate(0, k, 0), t)
            for (let b = 0; b < 3; b++) {
                const a = (b / 3) * Math.PI * 2
                add("rubber", bladeGeo.clone().rotateY(a).translate(0, -0.03, 0), t)
                add("rubber", stator.clone().translate(0.034, 0.016, 0).rotateY(a + 0.6), t)
            }
            // the bracket from the block down to the duct, and the motor cable up the post
            add("plastic", new RoundedBoxGeometry(0.006, 0.05, 0.04, 2, 0.002), { p: [x, yb - rodL - 0.035, z], r: [0, yaw, 0] })
            const zo = z + zs * (HULL_W / 2 + 0.004)
            cable(
                [
                    [x, yb - rodL - 0.01, z + zs * 0.018],
                    [x - xs * 0.03, yb - 0.01, z + zs * 0.07],
                    [x - xs * 0.06, -0.12, zo],
                    [x - xs * 0.08, -0.03, zo + zs * 0.003],
                    [x - xs * 0.095, 0.006, z + zs * 0.105],
                    [BEAM_X * xs + xs * 0.03, 0.006, z - zs * 0.02],
                    [BEAM_X * xs + xs * 0.022, BEAM_Y + 0.02, z - zs * 0.12],
                    [BEAM_X * xs + xs * 0.022, BEAM_Y + 0.02, zs * 0.17],
                    [xs * (front - 0.02), CASE.bottom + 0.014, zs * 0.17],
                ],
                0.0032
            )
        }
    }

    // ---------------- emergency stop on the port bow, cable loops, the arrow ----------------
    const ex = HULL_L / 2 - 0.16
    add("yellow", new RoundedBoxGeometry(0.075, 0.05, 0.07, 3, 0.008), { p: [ex, 0.025, -HULL_Z] })
    add("yellow", new THREE.CylinderGeometry(0.026, 0.028, 0.006, seg(24)), { p: [ex, 0.053, -HULL_Z] })
    add("mark", new THREE.CylinderGeometry(0.016, 0.017, 0.008, seg(16)), { p: [ex, 0.06, -HULL_Z] })
    const mush = new THREE.LatheGeometry(
        [
            [0, 0],
            [0.012, 0],
            [0.013, 0.004],
            [0.022, 0.006],
            [0.0235, 0.01],
            [0.022, 0.014],
            [0.014, 0.019],
            [0, 0.0205],
        ].map(([x, y]) => new THREE.Vector2(x, y)),
        seg(28)
    )
    add("red", mush, { p: [ex, 0.064, -HULL_Z] })
    add("mark", new THREE.BoxGeometry(0.002, 0.016, 0.04), { p: [ex + 0.0385, 0.028, -HULL_Z] })
    const loop = (cx, z, w, h) =>
        cable(
            [
                [cx - w, -0.002, z],
                [cx - w * 0.9, h * 0.7, z],
                [cx, h, z],
                [cx + w * 0.9, h * 0.7, z],
                [cx + w, -0.002, z],
            ],
            0.0045
        )
    loop(HULL_L / 2 - 0.08, HULL_Z + 0.04, 0.03, 0.055)
    loop(ex + 0.06, -HULL_Z + 0.03, 0.028, 0.05)
    // the e-stop cable to the case
    cable([
        [ex - 0.038, 0.02, -HULL_Z + 0.02],
        [ex - 0.07, 0.005, -HULL_Z + 0.06],
        [BEAM_X + 0.03, 0.006, -HULL_Z + 0.1],
        [BEAM_X + 0.02, BEAM_Y + 0.02, -0.2],
        [front + 0.015, CASE.bottom + 0.012, -0.19],
    ])
    const arrow = new THREE.Shape()
    arrow.moveTo(-0.045, -0.007)
    arrow.lineTo(0.01, -0.007)
    arrow.lineTo(0.01, -0.02)
    arrow.lineTo(0.045, 0)
    arrow.lineTo(0.01, 0.02)
    arrow.lineTo(0.01, 0.007)
    arrow.lineTo(-0.045, 0.007)
    arrow.closePath()
    const ag = new THREE.ShapeGeometry(arrow)
    ag.rotateX(-Math.PI / 2)
    add("mark", ag, { p: [HULL_L / 2 - 0.2, 0.0012, HULL_Z - 0.02] })

    // ---------------- sponsor names on the outside of the starboard hull ----------------
    const dec = new THREE.PlaneGeometry(0.72, 0.09, 24, 1)
    const duv = dec.attributes.uv
    for (let i = 0; i < duv.count; i++) duv.setY(i, 1 - duv.getY(i))
    add("sponsors", dec, { p: [-0.02, -0.075, HULL_Z + HULL_W / 2 + 0.0016] })

    return parts
}

// ---------- ambient occlusion: how much of the sky each vertex sees ----------
function bakeOcclusion(parts, rays) {
    const all = []
    for (const list of Object.values(parts)) for (const g of list) all.push(g)
    const merged = mergeGeometries(all.map((g) => new THREE.BufferGeometry().setAttribute("position", g.attributes.position)))
    const bvh = new MeshBVH(merged)
    const ray = new THREE.Ray()
    const n = new THREE.Vector3()
    const t1 = new THREE.Vector3()
    const t2 = new THREE.Vector3()
    const d = new THREE.Vector3()
    const MAXD = 0.3
    // fixed, well spread directions on a hemisphere (cosine weighted)
    const dirs = []
    for (let i = 0; i < rays; i++) {
        const u = (i + 0.5) / rays
        const phi = i * 2.399963
        const r = Math.sqrt(u)
        dirs.push([Math.cos(phi) * r, Math.sqrt(1 - u), Math.sin(phi) * r])
    }
    for (const [name, list] of Object.entries(parts)) {
        for (const g of list) {
            const p = g.attributes.position
            const no = g.attributes.normal
            const col = new Float32Array(p.count * 3)
            for (let i = 0; i < p.count; i++) {
                n.fromBufferAttribute(no, i).normalize()
                t1.set(Math.abs(n.y) < 0.9 ? 0 : 1, Math.abs(n.y) < 0.9 ? 1 : 0, 0).cross(n).normalize()
                t2.crossVectors(n, t1)
                ray.origin.fromBufferAttribute(p, i).addScaledVector(n, 0.0015)
                let occ = 0
                // a different turn of the pattern per point (from its position, so copies of a vertex agree)
                const rot = Math.abs(Math.sin(ray.origin.x * 917.3 + ray.origin.y * 461.7 + ray.origin.z * 283.1) * 43758.5453) % 1
                const cr = Math.cos(rot * 6.283)
                const sr = Math.sin(rot * 6.283)
                for (const [a, b, c] of dirs) {
                    const aa = a * cr - c * sr
                    const cc = a * sr + c * cr
                    d.copy(t1).multiplyScalar(aa).addScaledVector(n, b).addScaledVector(t2, cc).normalize()
                    ray.direction.copy(d)
                    const hit = bvh.raycastFirst(ray, THREE.DoubleSide, 0, MAXD)
                    if (hit) occ += 1 - (hit.distance / MAXD) * 0.6
                }
                let ao = 1 - (occ / rays) * 0.95
                const y = p.getY(i)
                // under the waterline the hull is a little greener and darker (the sea has been at it)
                let r = 1
                let gg = 1
                let bb = 1
                if (name === "hull") {
                    const wet = THREE.MathUtils.smoothstep(WATER_Y + 0.02, WATER_Y - 0.01, y)
                    const band = Math.exp(-(((y - WATER_Y) / 0.012) ** 2))
                    r = 1 - 0.1 * wet - 0.12 * band
                    gg = 1 - 0.05 * wet - 0.1 * band
                    bb = 1 - 0.12 * wet - 0.14 * band
                }
                ao = Math.max(0.18, ao)
                col[i * 3] = ao * r
                col[i * 3 + 1] = ao * gg
                col[i * 3 + 2] = ao * bb
            }
            g.setAttribute("color", new THREE.BufferAttribute(col, 3))
        }
    }
}

async function write(lite, file) {
    const t0 = Date.now()
    const parts = build(lite)
    bakeOcclusion(parts, lite ? 14 : 28)
    const box = new THREE.Box3()
    for (const list of Object.values(parts))
        for (const g of list) {
            g.computeBoundingBox()
            box.union(g.boundingBox)
        }
    const size = box.getSize(new THREE.Vector3())
    const k = 1 / size.x

    const doc = new Document()
    const buffer = doc.createBuffer()
    const clear = doc.createExtension(KHRMaterialsClearcoat)
    const tt = doc.createExtension(KHRTextureTransform)
    const scene = doc.createScene("Argus")
    const root = doc.createNode("Argus").setScale([k, k, k])
    scene.addChild(root)
    const textures = new Map()
    const tex = (name) => {
        if (!textures.has(name)) textures.set(name, doc.createTexture(name).setImage(fs.readFileSync(path.join(here, name))).setMimeType(name.endsWith(".png") ? "image/png" : "image/jpeg"))
        return textures.get(name)
    }
    for (const [name, list] of Object.entries(parts)) {
        if (!list.length) continue
        const g = mergeGeometries(list, false)
        const def = MATS[name]
        // tiled textures: keep the uvs in 0…1 (so they pack small) and repeat in the material instead
        const uva = g.attributes.uv
        let rep = 1
        for (let i = 0; i < uva.array.length; i++) rep = Math.max(rep, Math.abs(uva.array[i]))
        rep = Math.ceil(rep)
        if (rep > 1) for (let i = 0; i < uva.array.length; i++) uva.array[i] /= rep
        const c = new THREE.Color(def.color)
        const mat = doc
            .createMaterial(name)
            .setBaseColorFactor([c.r, c.g, c.b, 1])
            .setRoughnessFactor(def.rough)
            .setMetallicFactor(def.metal || 0)
        if (def.map) mat.setBaseColorTexture(tex(def.map))
        if (def.normal) mat.setNormalTexture(tex(def.normal)).setNormalScale(name === "hull" ? 0.6 : 0.8)
        if (def.orm) mat.setMetallicRoughnessTexture(tex(def.orm))
        if (def.alpha) mat.setAlphaMode("MASK").setAlphaCutoff(0.5)
        if (rep > 1) {
            for (const info of [mat.getBaseColorTextureInfo(), mat.getNormalTextureInfo(), mat.getMetallicRoughnessTextureInfo()]) {
                if (info && (info === mat.getBaseColorTextureInfo() ? def.map : info === mat.getNormalTextureInfo() ? def.normal : def.orm)) info.setExtension("KHR_texture_transform", tt.createTransform().setScale([rep, rep]))
            }
        }
        if (def.clearcoat) mat.setExtension("KHR_materials_clearcoat", clear.createClearcoat().setClearcoatFactor(def.clearcoat[0]).setClearcoatRoughnessFactor(def.clearcoat[1]))
        const prim = doc
            .createPrimitive()
            .setMaterial(mat)
            .setAttribute("POSITION", doc.createAccessor().setType("VEC3").setArray(new Float32Array(g.attributes.position.array)).setBuffer(buffer))
            .setAttribute("NORMAL", doc.createAccessor().setType("VEC3").setArray(new Float32Array(g.attributes.normal.array)).setBuffer(buffer))
            .setAttribute("TEXCOORD_0", doc.createAccessor().setType("VEC2").setArray(new Float32Array(g.attributes.uv.array)).setBuffer(buffer))
            .setAttribute("COLOR_0", doc.createAccessor().setType("VEC3").setArray(new Float32Array(g.attributes.color.array)).setBuffer(buffer))
        root.addChild(doc.createNode(name).setMesh(doc.createMesh(name).addPrimitive(prim)))
    }
    await MeshoptEncoder.ready
    await doc.transform(weld(), prune(), reorder({ encoder: MeshoptEncoder }), quantize({ quantizeColor: 8, quantizeNormal: 8 }), meshopt({ encoder: MeshoptEncoder, level: "high" }))
    const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ "meshopt.encoder": MeshoptEncoder })
    await io.write(file, doc)
    const tris = doc
        .getRoot()
        .listMeshes()
        .reduce((n, m) => n + m.listPrimitives().reduce((a, p) => a + (p.getIndices() ? p.getIndices().getCount() / 3 : 0), 0), 0)
    console.log(path.basename(file), (fs.statSync(file).size / 1024).toFixed(0) + " KB", Math.round(tris) + " triangles", "size m:", size.toArray().map((v) => v.toFixed(3)).join(" × "), "centre y:", box.getCenter(new THREE.Vector3()).y.toFixed(3), ((Date.now() - t0) / 1000).toFixed(1) + " s")
}

await write(false, path.join(outDir, "argus.glb"))
await write(true, path.join(outDir, "argus-lite.glb"))
