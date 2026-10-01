/* ================================================================
   Argus, built from photos of the real boat (not an AI scan), so every
   part sits where it is on the boat:

   - two deep white hulls: flat tops, straight sides, round ends, the
     bottom edges rounded, wrapped in painted cloth (creases and all),
     a big hatch with a twist lock on each, cable loops at the ends,
   - the frame: two cross beams of slotted aluminium profile, each on long
     flat bars bolted to the hulls, two rails on top of them, grey duct tape
     where they cross,
   - the black hard case on the rails, long side along the boat: ribbed
     lid, latches and a handle on the side, hinges on the other side, the
     stereo camera in a black bracket on the bow end, cables and coloured
     wires out of the stern end,
   - on the lid the LiDAR (finned aluminium, black window) on a square
     plate on a green board, with a small white dome beside it,
   - at the stern of each hull a Seapath GNSS antenna: white dome with a
     black rim on a red post on a green block,
   - four thrusters under the hull ends: steel post, square motor mount and
     an eight-sided guard round the propeller,
   - the arrow on the bow, and the sponsor names on the starboard hull.

   Surfaces: painted cloth, pebbled plastic and brushed aluminium
   textures (scripts/argus/textures.py), and the shadow in every corner
   baked into the vertices (ray traced here).

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
const HULL_W = 0.32
const HULL_D = 0.42
const HULL_Z = 0.37 // centre line of each hull from the middle
const BEAM_X = 0.36 // the two cross beams
const BEAM_HALF = 0.57 // they reach a little past the outer sides of the hulls
const RAIL_Z = 0.12 // the two rails along the boat, on top of the beams
const RAIL_HALF = 0.44
const PROF = 0.03 // aluminium profile, 30 × 30 mm
const BAR = 0.004 // the flat bars under the beams
const BEAM_Y = BAR + PROF / 2
const RAIL_Y = BAR + PROF + PROF / 2
const CASE = { x: 0.42, y: 0.19, z: 0.34, cx: 0.01, bottom: BAR + PROF * 2 + 0.004 }
const SEAM = CASE.bottom + CASE.y * 0.66
const TOP = CASE.bottom + CASE.y
export const WATER_Y = -0.22

// ---------- the hull shape ----------
// plan: straight sides with round ends; side: flat top, flat bottom that lifts a little and rounds into the ends
function hullHalfWidth(x) {
    const R = HULL_W / 2
    const s = Math.abs(x) - (HULL_L / 2 - R)
    return s <= 0 ? HULL_W / 2 : (HULL_W / 2) * Math.sqrt(Math.max(0, 1 - (s / R) ** 2))
}
function hullTop(x) {
    const R = 0.025
    const s = Math.abs(x) - (HULL_L / 2 - R)
    return s <= 0 ? 0 : -(R - Math.sqrt(Math.max(0, R * R - s * s)))
}
function hullBottom(x) {
    const ax = Math.abs(x)
    // a gentle rocker towards the ends, and a round where the bottom meets the end
    const rocker = 0.035 * Math.max(0, (ax - 0.3) / (HULL_L / 2 - 0.3)) ** 2
    const R = 0.09
    const s = ax - (HULL_L / 2 - R)
    const round = s <= 0 ? 0 : R - Math.sqrt(Math.max(0, R * R - s * s))
    return -HULL_D + rocker + round
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
    // nearly square: a small round at the deck edge, a bigger one at the bottom
    const n = s > 0 ? 12 : 4.2
    const m = s > 0 ? 9 : 3.6
    return [a * Math.sign(c) * Math.abs(c) ** (2 / n), yc + h * Math.sign(s) * Math.abs(s) ** (2 / m)]
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
    // cloth seams and lumps: a little unevenness, as on the hand-made hulls
    const lump = (x, th) => 0.0009 * Math.sin(x * 23 + th * 3) * Math.sin(th * 7 + x * 5) + 0.0005 * Math.sin(x * 61 + th * 11)
    for (const x of xs) {
        for (let j = 0; j < M; j++) {
            const th = (2 * Math.PI * j) / M
            let [z, y] = hullPoint(x, th)
            const side = Math.abs(Math.cos(th)) > 0.3 ? 1 : 0.3
            const k = 1 + (lump(x, th) * side) / Math.max(0.05, Math.hypot(z, y + HULL_D / 2))
            z *= k
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
    if (reverse) {
        const pts = new THREE.Shape()
        roundedRectPath(pts, w, h, r)
        const list = pts.getPoints(8).reverse()
        s.moveTo(list[0].x, list[0].y)
        for (const p of list.slice(1)) s.lineTo(p.x, p.y)
        return s
    }
    s.moveTo(x + r, y)
    s.lineTo(x + w - r, y)
    s.quadraticCurveTo(x + w, y, x + w, y + r)
    s.lineTo(x + w, y + h - r)
    s.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
    s.lineTo(x + r, y + h)
    s.quadraticCurveTo(x, y + h, x, y + h - r)
    s.lineTo(x, y + r)
    s.quadraticCurveTo(x, y, x + r, y)
    return s
}

// ---------- materials (sRGB colours; THREE.Color keeps them linear) ----------
const MATS = {
    hull: { color: "#ffffff", rough: 1, map: "hull_albedo.jpg", normal: "hull_normal.jpg", orm: "hull_orm.jpg" },
    hatch: { color: "#f7f7f4", rough: 0.34, clearcoat: [0.35, 0.25] },
    hatchFrame: { color: "#ececea", rough: 0.45 },
    alu: { color: "#d4d8dd", rough: 1, metal: 1, orm: "alu_orm.jpg" },
    steel: { color: "#c3c8ce", rough: 0.22, metal: 1 },
    case: { color: "#ffffff", rough: 0.6, map: "case_albedo.jpg", normal: "case_normal.jpg" },
    caseDetail: { color: "#202024", rough: 0.5, normal: "case_normal.jpg" },
    orange: { color: "#ff5a1a", rough: 0.55 },
    rubber: { color: "#121214", rough: 0.7 },
    plastic: { color: "#19191c", rough: 0.42 },
    cable: { color: "#0c0c0e", rough: 0.55 },
    tape: { color: "#9a9ea3", rough: 0.55, metal: 0.25 },
    blackTape: { color: "#0b0b0c", rough: 0.6 },
    antenna: { color: "#f3f3f0", rough: 0.3, clearcoat: [0.4, 0.2] },
    red: { color: "#d0161c", rough: 0.35 },
    green: { color: "#1d6b3a", rough: 0.5 },
    pcb: { color: "#2a7a3f", rough: 0.45 },
    lidarAlu: { color: "#dfe2e6", rough: 0.32, metal: 1 },
    lidarBlack: { color: "#060708", rough: 0.08, metal: 0.2 },
    lens: { color: "#0a1220", rough: 0.04, metal: 0.3 },
    zedFront: { color: "#3b3f45", rough: 0.35, metal: 0.8 },
    dome: { color: "#f4f4f2", rough: 0.25 },
    wireRed: { color: "#c8241c", rough: 0.5 },
    wireBlue: { color: "#2052c8", rough: 0.5 },
    wireYellow: { color: "#e6b81c", rough: 0.5 },
    mark: { color: "#0c0c0d", rough: 0.6 },
    sponsors: { color: "#ffffff", rough: 0.45, map: "sponsors.png", alpha: true },
}

// where the parts are, for the labels on the site (metres, before centring)
const MARKS = {}

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
    const screw = (p, r = 0.0042, up = [0, 1, 0]) => {
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
    // a lump of grey tape round a joint: a slightly crumpled box
    const tape = (p, size, rotY = 0) => {
        const g = new THREE.BoxGeometry(size[0], size[1], size[2], 4, 3, 4)
        const a = g.attributes.position
        for (let i = 0; i < a.count; i++) {
            const x = a.getX(i)
            const y = a.getY(i)
            const z = a.getZ(i)
            const n = 1 + 0.08 * Math.sin(x * 900 + z * 400) * Math.sin(y * 700)
            a.setXYZ(i, x * n, y * n, z * n)
        }
        g.computeVertexNormals()
        add("tape", g, { p, r: [0, rotY, 0] })
    }

    // ---------------- hulls ----------------
    const hull = hullGeometry(lite ? 70 : 130, lite ? 40 : 72)
    // the big hatch: a frame with screws, the lid and a twist lock with a bar
    const frameShape = roundedRectShape(0.4, 0.27, 0.05)
    frameShape.holes.push(roundedRectPath(new THREE.Path(), 0.35, 0.22, 0.035, true))
    const hatchFrame = new THREE.ExtrudeGeometry(frameShape, { depth: 0.005, bevelEnabled: true, bevelThickness: 0.002, bevelSize: 0.002, bevelSegments: 2, curveSegments: seg(8) })
    hatchFrame.rotateX(-Math.PI / 2)
    const hatchLid = new THREE.ExtrudeGeometry(roundedRectShape(0.348, 0.218, 0.032), { depth: 0.008, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.004, bevelSegments: 3, curveSegments: seg(8) })
    hatchLid.rotateX(-Math.PI / 2)
    const lock = new THREE.CylinderGeometry(0.03, 0.032, 0.006, seg(24))
    const lockBar = new RoundedBoxGeometry(0.05, 0.009, 0.012, 2, 0.004)
    // the flat bars the beams stand on
    const bar = new RoundedBoxGeometry(0.05, BAR, 0.42, 2, 0.0015)
    for (const zs of [-1, 1]) {
        const z = HULL_Z * zs
        add("hull", hull, { p: [0, 0, z] })
        const hx = 0.0
        add("hatchFrame", hatchFrame, { p: [hx, 0.0005, z] })
        add("hatch", hatchLid, { p: [hx, 0.003, z] })
        add("hatch", lock, { p: [hx, 0.018, z] })
        add("hatch", lockBar, { p: [hx, 0.023, z], r: [0, 0.6, 0] })
        screw([hx, 0.024, z], 0.003)
        for (const xs of [-1, 1]) {
            add("alu", bar, { p: [BEAM_X * xs, BAR / 2, z], uv: 3 })
            for (const dz of [-0.17, -0.08, 0.08, 0.17]) screw([BEAM_X * xs + (dz > 0 ? 0.013 : -0.013) * xs, BAR, z + dz], 0.0042)
        }
        // cable loops near both ends, with a lump of grey tape at each foot
        for (const xs of [-1, 1]) {
            const cx = xs * (HULL_L / 2 - 0.08)
            const curve = new THREE.CatmullRomCurve3(
                [
                    [cx - 0.045, -0.002, z],
                    [cx - 0.042, 0.05, z],
                    [cx, 0.075, z],
                    [cx + 0.042, 0.05, z],
                    [cx + 0.045, -0.002, z],
                ].map((p) => new THREE.Vector3(...p))
            )
            add("cable", new THREE.TubeGeometry(curve, seg(28), 0.0055, seg(8), false))
            for (const dx of [-0.045, 0.045]) tape([cx + dx, 0.004, z], [0.026, 0.01, 0.022])
        }
        // a strip of black tape near the stern
        add("blackTape", new THREE.BoxGeometry(0.05, 0.001, 0.03), { p: [-HULL_L / 2 + 0.17, 0.0007, z - zs * 0.08], r: [0, 0.1, 0] })
    }
    MARKS.hull = [0.28, -0.05, -HULL_Z - HULL_W / 2]

    // ---------------- the frame ----------------
    const beam = profileGeometry(BEAM_HALF * 2, !lite)
    for (const xs of [-1, 1]) add("alu", beam, { p: [BEAM_X * xs, BEAM_Y, 0], uv: [40, 2] })
    const rail = profileGeometry(RAIL_HALF * 2, !lite)
    for (const zs of [-1, 1]) add("alu", rail, { p: [0, RAIL_Y, RAIL_Z * zs], r: [0, Math.PI / 2, 0], uv: [40, 2] })
    const cap = new RoundedBoxGeometry(PROF + 0.002, PROF + 0.002, 0.004, 2, 0.0012)
    for (const xs of [-1, 1]) for (const zs of [-1, 1]) add("plastic", cap, { p: [BEAM_X * xs, BEAM_Y, BEAM_HALF * zs] })
    for (const zs of [-1, 1]) for (const xs of [-1, 1]) add("plastic", cap, { p: [RAIL_HALF * xs, RAIL_Y, RAIL_Z * zs], r: [0, Math.PI / 2, 0] })
    // grey tape round the crossings, as on the boat
    for (const xs of [-1, 1]) for (const zs of [-1, 1]) tape([BEAM_X * xs, BEAM_Y + PROF * 0.5, RAIL_Z * zs], [0.055, 0.05, 0.06], 0.3 * xs * zs)

    // ---------------- the case: long side along the boat ----------------
    const cx0 = CASE.cx
    const lowH = SEAM - CASE.bottom
    const lidH = TOP - SEAM
    const cuv = (w, h) => [w / 0.06, h / 0.06]
    add("case", new RoundedBoxGeometry(CASE.x, lowH, CASE.z, seg(4), 0.02), { p: [cx0, CASE.bottom + lowH / 2, 0], uv: cuv(CASE.x, lowH) })
    add("case", new RoundedBoxGeometry(CASE.x + 0.006, lidH, CASE.z + 0.006, seg(4), 0.022), { p: [cx0, SEAM + lidH / 2, 0], uv: cuv(CASE.x, lidH) })
    add("caseDetail", new RoundedBoxGeometry(CASE.x + 0.012, 0.012, CASE.z + 0.012, 2, 0.005), { p: [cx0, SEAM + 0.006, 0], uv: 6 })
    add("orange", new THREE.BoxGeometry(CASE.x + 0.002, 0.003, CASE.z + 0.002), { p: [cx0, SEAM - 0.001, 0] })
    // the lid: a raised frame round the edge and two ribs along it
    const lidFrame = roundedRectShape(CASE.x - 0.02, CASE.z - 0.02, 0.022)
    lidFrame.holes.push(roundedRectPath(new THREE.Path(), CASE.x - 0.055, CASE.z - 0.055, 0.012, true))
    const lf = new THREE.ExtrudeGeometry(lidFrame, { depth: 0.006, bevelEnabled: true, bevelThickness: 0.002, bevelSize: 0.002, bevelSegments: 1, curveSegments: seg(6) })
    lf.rotateX(-Math.PI / 2)
    add("case", lf, { p: [cx0, TOP - 0.001, 0], uv: 12 })
    for (const zs of [-1, 1]) add("case", new RoundedBoxGeometry(CASE.x - 0.07, 0.004, 0.024, 2, 0.0015), { p: [cx0, TOP + 0.002, 0.07 * zs], uv: 6 })
    // ribs down the long sides and the ends, like the real case
    for (const zs of [-1, 1]) {
        for (const dx of [-0.17, -0.06, 0.06, 0.17]) add("case", new RoundedBoxGeometry(0.014, lowH - 0.03, 0.008, 2, 0.003), { p: [cx0 + dx, CASE.bottom + lowH / 2 + 0.01, zs * (CASE.z / 2 + 0.002)], uv: 6 })
    }
    // the "front" of the case faces port: two latches and the handle; hinges on the starboard side
    const front = -CASE.z / 2
    for (const dx of [-0.12, 0.12]) {
        add("caseDetail", new RoundedBoxGeometry(0.06, 0.03, 0.014, 2, 0.003), { p: [cx0 + dx, SEAM - 0.022, front - 0.004], uv: 6 })
        add("caseDetail", new RoundedBoxGeometry(0.052, 0.07, 0.016, 3, 0.005), { p: [cx0 + dx, SEAM + 0.004, front - 0.011], r: [0.08, 0, 0], uv: 6 })
    }
    const grip = new THREE.CapsuleGeometry(0.011, 0.11, seg(4), seg(12))
    grip.rotateZ(Math.PI / 2)
    add("caseDetail", grip, { p: [cx0, SEAM + 0.015, front - 0.034], uv: 6 })
    for (const dx of [-0.07, 0.07]) add("caseDetail", new RoundedBoxGeometry(0.02, 0.03, 0.036, 2, 0.006), { p: [cx0 + dx, SEAM + 0.015, front - 0.016], uv: 6 })
    // a round orange sticker on the side (the purge valve label)
    add("orange", new THREE.TorusGeometry(0.013, 0.0022, 4, seg(20), Math.PI * 1.6), { p: [cx0 - 0.03, CASE.bottom + 0.045, front - 0.003] })
    for (let k = -2; k <= 2; k++) add("caseDetail", new THREE.CylinderGeometry(0.008, 0.008, 0.06, seg(12)), { p: [cx0 + k * 0.08, SEAM + 0.004, -front + 0.008], r: [0, 0, Math.PI / 2], uv: 6 })
    // feet on the rails
    for (const xs of [-1, 1]) for (const zs of [-1, 1]) add("plastic", new RoundedBoxGeometry(0.034, 0.006, 0.036, 2, 0.002), { p: [cx0 + 0.15 * xs, CASE.bottom - 0.002, RAIL_Z * zs] })
    MARKS.case = [cx0, SEAM, front - 0.02]
    MARKS.pixhawk = [cx0 + 0.05, TOP + 0.01, -0.05]
    MARKS.link = [cx0 - 0.05, TOP + 0.01, 0.08]

    // ---------------- stereo camera in a black bracket on the bow end ----------------
    const bowFace = cx0 + CASE.x / 2
    const camY = CASE.bottom + 0.055
    const bracket = roundedRectShape(0.21, 0.058, 0.014)
    bracket.holes.push(roundedRectPath(new THREE.Path(), 0.18, 0.034, 0.01, true))
    const bg = new THREE.ExtrudeGeometry(bracket, { depth: 0.012, bevelEnabled: true, bevelThickness: 0.002, bevelSize: 0.002, bevelSegments: 1, curveSegments: seg(6) })
    add("plastic", bg, { p: [bowFace + 0.004, camY, 0], r: [0, Math.PI / 2, 0] })
    for (const zs of [-1, 1]) screw([bowFace + 0.017, camY, zs * 0.096], 0.003, [1, 0, 0])
    add("plastic", new RoundedBoxGeometry(0.03, 0.03, 0.176, 3, 0.013), { p: [bowFace + 0.018, camY, 0] })
    add("zedFront", new RoundedBoxGeometry(0.004, 0.023, 0.165, 2, 0.01), { p: [bowFace + 0.033, camY, 0] })
    for (const zs of [-1, 1]) {
        add("lens", new THREE.CylinderGeometry(0.0085, 0.0085, 0.003, seg(24)), { p: [bowFace + 0.0355, camY, 0.06 * zs], r: [0, 0, Math.PI / 2] })
        add("plastic", new THREE.TorusGeometry(0.0098, 0.0016, seg(6), seg(24)), { p: [bowFace + 0.0355, camY, 0.06 * zs], r: [0, Math.PI / 2, 0] })
    }
    MARKS.camera = [bowFace + 0.035, camY, 0]

    // ---------------- the LiDAR on the lid, towards the stern ----------------
    const lx = cx0 - 0.075
    const lz = 0.025
    const ly = TOP + 0.006
    add("pcb", new RoundedBoxGeometry(0.135, 0.004, 0.125, 2, 0.002), { p: [lx, ly, lz] })
    add("lidarAlu", new RoundedBoxGeometry(0.112, 0.012, 0.112, 3, 0.012), { p: [lx, ly + 0.008, lz] })
    for (const [sx, sz] of [
        [-0.043, -0.043],
        [0.043, -0.043],
        [-0.043, 0.043],
        [0.043, 0.043],
    ])
        screw([lx + sx, ly + 0.014, lz + sz], 0.004)
    const base = ly + 0.014
    // the lower finned ring
    add("lidarAlu", new THREE.CylinderGeometry(0.041, 0.043, 0.024, seg(40)), { p: [lx, base + 0.012, lz] })
    const finCount = lite ? 16 : 28
    for (let i = 0; i < finCount; i++) {
        const a = (i / finCount) * Math.PI * 2
        add("lidarAlu", new THREE.BoxGeometry(0.009, 0.022, 0.0016), { p: [lx + Math.cos(a) * 0.044, base + 0.012, lz + Math.sin(a) * 0.044], r: [0, -a, 0] })
    }
    // the black window
    add("lidarBlack", new THREE.CylinderGeometry(0.0415, 0.0415, 0.03, seg(40)), { p: [lx, base + 0.039, lz] })
    // the upper cap with radial fins, and the little lens in the middle
    add("lidarAlu", new THREE.CylinderGeometry(0.042, 0.042, 0.012, seg(40)), { p: [lx, base + 0.06, lz] })
    for (let i = 0; i < finCount; i++) {
        const a = (i / finCount) * Math.PI * 2 + 0.1
        add("lidarAlu", new THREE.BoxGeometry(0.036, 0.014, 0.0016), { p: [lx + Math.cos(a) * 0.026, base + 0.073, lz + Math.sin(a) * 0.026], r: [0, -a, 0] })
    }
    add("lens", new THREE.SphereGeometry(0.008, seg(16), seg(8), 0, Math.PI * 2, 0, Math.PI / 2), { p: [lx, base + 0.074, lz] })
    // the connector and its cable to the stern end of the case
    add("plastic", new THREE.CylinderGeometry(0.007, 0.007, 0.022, seg(12)), { p: [lx - 0.05, base + 0.012, lz + 0.01], r: [0, 0, Math.PI / 2] })
    add("red", new THREE.CylinderGeometry(0.0072, 0.0072, 0.004, seg(12)), { p: [lx - 0.062, base + 0.012, lz + 0.01], r: [0, 0, Math.PI / 2] })
    cable([
        [lx - 0.064, base + 0.012, lz + 0.01],
        [lx - 0.09, base + 0.02, lz + 0.04],
        [cx0 - CASE.x / 2 - 0.004, TOP + 0.006, 0.09],
        [cx0 - CASE.x / 2 - 0.022, TOP - 0.05, 0.1],
        [cx0 - CASE.x / 2 - 0.016, CASE.bottom + 0.06, 0.08],
    ], 0.0045)
    // the small white dome beside it
    add("dome", new THREE.SphereGeometry(0.017, seg(20), seg(10), 0, Math.PI * 2, 0, Math.PI / 2), { p: [lx + 0.055, ly + 0.004, lz + 0.055] })
    add("plastic", new THREE.CylinderGeometry(0.018, 0.018, 0.004, seg(20)), { p: [lx + 0.055, ly + 0.003, lz + 0.055] })
    MARKS.lidar = [lx, base + 0.04, lz]

    // ---------------- the stern end of the case: cables and coloured wires ----------------
    const sternFace = cx0 - CASE.x / 2
    const gland = new THREE.CylinderGeometry(0.0075, 0.0085, 0.016, seg(10))
    const nut = new THREE.CylinderGeometry(0.011, 0.011, 0.005, 6)
    const glands = [
        [CASE.bottom + 0.05, -0.12],
        [CASE.bottom + 0.05, -0.06],
        [CASE.bottom + 0.05, 0.0],
        [CASE.bottom + 0.05, 0.06],
        [CASE.bottom + 0.05, 0.12],
        [CASE.bottom + 0.09, -0.09],
        [CASE.bottom + 0.09, 0.09],
    ]
    for (const [y, z] of glands) {
        add("plastic", gland, { p: [sternFace - 0.008, y, z], r: [0, 0, Math.PI / 2] })
        add("plastic", nut, { p: [sternFace - 0.0025, y, z], r: [0, 0, Math.PI / 2] })
    }
    // a few thick black cables hanging out and down to the rails
    for (const [i, [y, z]] of glands.slice(0, 5).entries()) {
        cable(
            [
                [sternFace - 0.016, y, z],
                [sternFace - 0.04 - i * 0.004, y - 0.01, z * 1.1],
                [sternFace - 0.06 - (i % 2) * 0.02, RAIL_Y + 0.02, z * 1.3 + 0.01],
                [sternFace - 0.1, RAIL_Y + 0.01, z * 1.6],
            ],
            0.0055
        )
    }
    // loose coloured wires from the lower glands
    const wire = (mat, pts) => cable(pts, 0.0016, mat)
    const wires = ["wireRed", "wireBlue", "wireYellow", "wireRed", "wireBlue"]
    for (let i = 0; i < (lite ? 3 : 8); i++) {
        const z = -0.04 + i * 0.012
        const y = CASE.bottom + 0.09
        wire(wires[i % wires.length], [
            [sternFace - 0.006, y + (i % 3) * 0.004, z],
            [sternFace - 0.03 - (i % 4) * 0.006, y - 0.015 + Math.sin(i) * 0.01, z + Math.cos(i * 1.7) * 0.02],
            [sternFace - 0.045 - (i % 3) * 0.01, y - 0.05 - (i % 2) * 0.01, z + Math.sin(i * 2.3) * 0.03],
            [sternFace - 0.03, CASE.bottom + 0.012, z * 0.8],
        ])
    }

    // ---------------- Seapath 130: GNSS antennas at the stern of each hull ----------------
    const puck = new THREE.LatheGeometry(
        [
            [0, 0],
            [0.08, 0],
            [0.084, 0.006],
            [0.085, 0.014],
            [0.081, 0.023],
            [0.068, 0.034],
            [0.045, 0.041],
            [0.02, 0.0445],
            [0, 0.045],
        ].map(([x, y]) => new THREE.Vector2(x, y)),
        seg(56)
    )
    const rim = new THREE.TorusGeometry(0.083, 0.0045, seg(8), seg(56))
    rim.rotateX(Math.PI / 2)
    const ax = -HULL_L / 2 + 0.105
    for (const zs of [-1, 1]) {
        const z = HULL_Z * zs + zs * 0.01
        // green block on the deck, red post, the dome with its black rubber rim
        add("green", new RoundedBoxGeometry(0.07, 0.012, 0.034, 2, 0.003), { p: [ax, 0.006, z] })
        for (const dx of [-0.026, 0.026]) screw([ax + dx, 0.012, z], 0.0035)
        add("red", new THREE.CylinderGeometry(0.014, 0.016, 0.04, seg(18)), { p: [ax, 0.032, z] })
        add("red", new THREE.CylinderGeometry(0.022, 0.016, 0.008, seg(18)), { p: [ax, 0.054, z] })
        add("antenna", puck, { p: [ax, 0.058, z] })
        add("rubber", rim, { p: [ax, 0.061, z] })
        // the brass-coloured connector under the dome and the black cable to the case
        add("steel", new THREE.CylinderGeometry(0.006, 0.006, 0.018, seg(10)), { p: [ax + 0.03, 0.052, z - zs * 0.01], r: [0, 0, Math.PI / 2] })
        cable([
            [ax + 0.04, 0.052, z - zs * 0.01],
            [ax + 0.09, 0.03, z - zs * 0.04],
            [-BEAM_X - 0.03, 0.012, z - zs * 0.1],
            [-BEAM_X - 0.025, BEAM_Y + 0.02, z - zs * 0.17],
            [-BEAM_X + 0.0, RAIL_Y + 0.03, zs * 0.2],
            [sternFace - 0.03, CASE.bottom + 0.06, zs * 0.11],
            [sternFace - 0.012, CASE.bottom + 0.05, zs * 0.12],
        ], 0.0042)
    }
    MARKS.gnss = [ax, 0.08, HULL_Z]

    // ---------------- four thrusters under the hull ends ----------------
    // an eight-sided guard round the propeller
    const guard = (() => {
        const outer = []
        const inner = []
        for (let i = 0; i < 8; i++) {
            const a = (i / 8) * Math.PI * 2 + Math.PI / 8
            outer.push(new THREE.Vector2(Math.cos(a) * 0.068, Math.sin(a) * 0.068))
            inner.push(new THREE.Vector2(Math.cos(a) * 0.056, Math.sin(a) * 0.056))
        }
        const s = new THREE.Shape(outer)
        s.holes.push(new THREE.Path(inner.reverse()))
        const g = new THREE.ExtrudeGeometry(s, { depth: 0.07, bevelEnabled: true, bevelThickness: 0.002, bevelSize: 0.002, bevelSegments: 1 })
        g.translate(0, 0, -0.035)
        return g
    })()
    const grill = new THREE.TorusGeometry(0.045, 0.002, 4, seg(24))
    const motor = new THREE.LatheGeometry(
        [
            [0, -0.05],
            [0.008, -0.048],
            [0.017, -0.036],
            [0.022, -0.02],
            [0.022, 0.014],
            [0.018, 0.026],
            [0.011, 0.034],
            [0, 0.036],
        ].map(([x, y]) => new THREE.Vector2(x, y)),
        seg(20)
    )
    motor.rotateX(Math.PI / 2)
    const bladeGeo = (() => {
        const g = new THREE.BoxGeometry(0.032, 0.0025, 0.017, 6, 1, 2)
        const p = g.attributes.position
        for (let i = 0; i < p.count; i++) {
            const x = p.getX(i) + 0.016
            const tw = 0.9 - x * 14
            const y = p.getY(i)
            const z = p.getZ(i) * (1 - x * 10)
            p.setXYZ(i, x + 0.016, y * Math.cos(tw) - z * Math.sin(tw), y * Math.sin(tw) + z * Math.cos(tw))
        }
        g.computeVertexNormals()
        return g
    })()
    for (const xs of [-1, 1]) {
        for (const zs of [-1, 1]) {
            const x = 0.46 * xs
            const z = HULL_Z * zs
            const yb = hullBottom(x)
            const postL = 0.06
            add("steel", new THREE.CylinderGeometry(0.016, 0.016, 0.008, seg(16)), { p: [x, yb + 0.002, z] })
            add("steel", new THREE.CylinderGeometry(0.012, 0.012, postL, seg(16)), { p: [x, yb - postL / 2, z] })
            // the square motor mount, then the thruster turned 45 degrees (vectored)
            const yaw = (Math.PI / 4) * xs * zs
            const my = yb - postL - 0.025
            add("plastic", new RoundedBoxGeometry(0.06, 0.05, 0.06, 2, 0.006), { p: [x, my, z], r: [0, yaw, 0] })
            const cy = my - 0.025 - 0.07
            const t = { p: [x, cy, z], r: [0, yaw + Math.PI / 2, 0] }
            add("rubber", guard, t)
            add("plastic", motor, t)
            for (const k of [-0.03, 0.03]) add("rubber", grill.clone().translate(0, 0, k), t)
            for (let b = 0; b < 4; b++) {
                const a = (b / 4) * Math.PI * 2
                add("rubber", new THREE.BoxGeometry(0.0025, 0.105, 0.004).rotateZ(a + Math.PI / 4).translate(0, 0, 0.034), t)
            }
            for (let b = 0; b < 3; b++) add("rubber", bladeGeo.clone().rotateZ((b / 3) * Math.PI * 2).rotateY(Math.PI / 2).translate(0, 0, -0.005), t)
            // the strut joining the mount to the guard
            add("plastic", new RoundedBoxGeometry(0.014, 0.05, 0.03, 2, 0.003), { p: [x, my - 0.04, z], r: [0, yaw, 0] })
            // the motor cable goes straight up into the hull beside the post
            cable(
                [
                    [x + 0.022 * xs, my + 0.012, z],
                    [x + 0.03 * xs, my + 0.04, z + 0.004],
                    [x + 0.026 * xs, yb + 0.01, z + 0.006],
                ],
                0.0035
            )
        }
    }
    MARKS.props = [-0.46, hullBottom(0.46) - 0.18, HULL_Z]

    // ---------------- the arrow on the bow, sponsor names on the starboard hull ----------------
    const arrow = new THREE.Shape()
    arrow.moveTo(-0.05, -0.008)
    arrow.lineTo(0.01, -0.008)
    arrow.lineTo(0.01, -0.022)
    arrow.lineTo(0.05, 0)
    arrow.lineTo(0.01, 0.022)
    arrow.lineTo(0.01, 0.008)
    arrow.lineTo(-0.05, 0.008)
    arrow.closePath()
    const ag = new THREE.ShapeGeometry(arrow)
    ag.rotateX(-Math.PI / 2)
    add("blackTape", ag, { p: [HULL_L / 2 - 0.2, 0.0012, HULL_Z - 0.03], r: [0, -0.5, 0] })
    const dec = new THREE.PlaneGeometry(0.74, 0.092, 24, 1)
    const duv = dec.attributes.uv
    for (let i = 0; i < duv.count; i++) duv.setY(i, 1 - duv.getY(i))
    add("sponsors", dec, { p: [-0.02, -0.1, HULL_Z + HULL_W / 2 + 0.003] })

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
    // for the site: where the waterline and the parts are once the model is centred and 1 unit long
    if (!lite) {
        const c = box.getCenter(new THREE.Vector3())
        console.log("waterline lift (model units):", ((c.y - WATER_Y) * k).toFixed(4))
        for (const [name, p] of Object.entries(MARKS)) console.log("  " + name + ": [" + [(p[0] - c.x) * k, (p[1] - c.y) * k, (p[2] - c.z) * k].map((v) => v.toFixed(3)).join(", ") + "]")
    }

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
