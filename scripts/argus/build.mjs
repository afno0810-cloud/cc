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
     lid, latches and a handle on the starboard side, hinges on the port
     side, the stereo camera in a black bracket on the bow end, cables and
     coloured wires out of the stern end,
   - the lid is its own node ("lid", turning about the hinge line along x),
     and the case is hollow: inside the lid the electronics are screwed on
     (finned heat sinks, the 5G router, the red flight controller, an orange
     relay board), with the orange gasket round its rim; in the box the
     battery, the computer boards and the wiring,
   - the emergency stop, a yellow box with a red mushroom button, on the
     port hull ahead of the bow beam,
   - on the lid the LiDAR (finned aluminium, black window) on a square
     plate on a green board, with a small white dome beside it,
   - at the stern of each hull a Seapath GNSS antenna: white dome with a
     black rim on a red post on a green block,
   - four thrusters under the hull ends: steel post, square motor mount and
     an eight-sided guard round the propeller,
   - the arrow on the bow, and the sponsor stickers on the starboard hull
     (DNV, Kongsberg, telenor; scripts/argus/decals.py).

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
    case: { color: "#ffffff", rough: 1, map: "case_albedo.jpg", normal: "case_normal.jpg", orm: "case_orm.jpg" },
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
    sponsors: { color: "#ffffff", rough: 0.38, map: "sponsors.png", alpha: true },
    yellow: { color: "#f2c000", rough: 0.42 },
    estopRed: { color: "#c80d16", rough: 0.22, clearcoat: [0.6, 0.12] },
    sink: { color: "#c9ced4", rough: 0.36, metal: 1 },
    pcbOrange: { color: "#e2601a", rough: 0.5 },
    relay: { color: "#1f4ed0", rough: 0.32 },
    battery: { color: "#2459c8", rough: 0.4, clearcoat: [0.4, 0.3] },
    wireWhite: { color: "#e8e8e4", rough: 0.5 },
    wireBlack: { color: "#151517", rough: 0.5 },
    label: { color: "#f2f2ee", rough: 0.6 },
}

// the lid turns about this line (along x) when it opens, towards port
export const HINGE = { y: 0, z: 0 }

// where the parts are, for the labels on the site (metres, before centring)
const MARKS = {}

function build(lite) {
    const parts = Object.fromEntries(Object.keys(MATS).map((k) => [k, []]))
    const lidParts = Object.fromEntries(Object.keys(MATS).map((k) => [k, []]))
    let bucket = parts // what is being built goes on the boat, or on the lid
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
        bucket[mat].push(gg)
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

    // ---------------- the case: long side along the boat, hollow, the lid on hinges ----------------
    const cx0 = CASE.cx
    const lowH = SEAM - CASE.bottom
    const lidH = TOP - SEAM
    const cuv = (w, h) => [w / 0.06, h / 0.06]
    const W = 0.006 // wall
    // a wall all round: a rounded-rect ring, extruded upwards from y0 to y1
    const walls = (w, d, r, y0, y1, t = W) => {
        const sh = roundedRectShape(w, d, r)
        sh.holes.push(roundedRectPath(new THREE.Path(), w - 2 * t, d - 2 * t, Math.max(0.004, r - t), true))
        const g = new THREE.ExtrudeGeometry(sh, { depth: y1 - y0, bevelEnabled: false, curveSegments: seg(6) })
        g.rotateX(-Math.PI / 2)
        g.translate(0, y0, 0)
        return g
    }
    // a flat ring facing up (or down)
    const ring = (w, d, r, wi, di, ri, down = false) => {
        const sh = roundedRectShape(w, d, r)
        sh.holes.push(roundedRectPath(new THREE.Path(), wi, di, ri, true))
        const g = new THREE.ShapeGeometry(sh, seg(6))
        g.rotateX(down ? Math.PI / 2 : -Math.PI / 2)
        return g
    }
    // the box: a rounded bottom and the walls up to the seam; inside, the same black plastic
    add("case", new RoundedBoxGeometry(CASE.x, 0.04, CASE.z, seg(4), 0.02), { p: [cx0, CASE.bottom + 0.02, 0], uv: cuv(CASE.x, 0.04) })
    add("case", walls(CASE.x, CASE.z, 0.02, CASE.bottom + 0.02, SEAM), { p: [cx0, 0, 0], uv: 16 })
    add("case", ring(CASE.x, CASE.z, 0.02, CASE.x - 2 * W, CASE.z - 2 * W, 0.014), { p: [cx0, SEAM, 0], uv: 16 })
    add("caseDetail", walls(CASE.x + 0.012, CASE.z + 0.012, 0.024, SEAM - 0.013, SEAM - 0.001, 0.009), { p: [cx0, 0, 0], uv: 16 })
    // ribs down the long sides, like the real case
    for (const zs of [-1, 1]) {
        for (const dx of [-0.17, -0.06, 0.06, 0.17]) add("case", new RoundedBoxGeometry(0.014, lowH - 0.03, 0.008, 2, 0.003), { p: [cx0 + dx, CASE.bottom + lowH / 2 + 0.01, zs * (CASE.z / 2 + 0.002)], uv: 6 })
    }

    // the lid: walls down to the seam, a rounded top; the orange gasket round its rim
    bucket = lidParts
    const LX = CASE.x + 0.006
    const LZ = CASE.z + 0.006
    add("case", new RoundedBoxGeometry(LX, 0.03, LZ, seg(4), 0.015), { p: [cx0, TOP - 0.015, 0], uv: cuv(LX, 0.03) })
    add("case", walls(LX, LZ, 0.022, SEAM, TOP - 0.015), { p: [cx0, 0, 0], uv: 16 })
    add("orange", ring(LX - 0.001, LZ - 0.001, 0.021, LX - 0.034, LZ - 0.034, 0.008, true), { p: [cx0, SEAM - 0.0008, 0] })
    add("caseDetail", walls(LX + 0.006, LZ + 0.006, 0.025, SEAM + 0.001, SEAM + 0.008, 0.006), { p: [cx0, 0, 0], uv: 16 })
    // a raised frame round the edge of the top and two ribs along it
    const lidFrame = roundedRectShape(CASE.x - 0.02, CASE.z - 0.02, 0.022)
    lidFrame.holes.push(roundedRectPath(new THREE.Path(), CASE.x - 0.055, CASE.z - 0.055, 0.012, true))
    const lf = new THREE.ExtrudeGeometry(lidFrame, { depth: 0.006, bevelEnabled: true, bevelThickness: 0.002, bevelSize: 0.002, bevelSegments: 1, curveSegments: seg(6) })
    lf.rotateX(-Math.PI / 2)
    add("case", lf, { p: [cx0, TOP - 0.001, 0], uv: 12 })
    for (const zs of [-1, 1]) add("case", new RoundedBoxGeometry(CASE.x - 0.07, 0.004, 0.024, 2, 0.0015), { p: [cx0, TOP + 0.002, 0.07 * zs], uv: 6 })
    bucket = parts

    // the front faces starboard: two latches and the handle; the hinges on the port side
    const front = CASE.z / 2
    for (const dx of [-0.12, 0.12]) {
        add("caseDetail", new RoundedBoxGeometry(0.06, 0.03, 0.014, 2, 0.003), { p: [cx0 + dx, SEAM - 0.022, front + 0.004], uv: 6 })
        add("caseDetail", new RoundedBoxGeometry(0.052, 0.07, 0.016, 3, 0.005), { p: [cx0 + dx, SEAM + 0.004, front + 0.011], r: [-0.08, 0, 0], uv: 6 })
    }
    const grip = new THREE.CapsuleGeometry(0.011, 0.11, seg(4), seg(12))
    grip.rotateZ(Math.PI / 2)
    add("caseDetail", grip, { p: [cx0, SEAM - 0.03, front + 0.034], uv: 6 })
    for (const dx of [-0.07, 0.07]) add("caseDetail", new RoundedBoxGeometry(0.02, 0.03, 0.036, 2, 0.006), { p: [cx0 + dx, SEAM - 0.03, front + 0.016], uv: 6 })
    // a round orange sticker on the side (the purge valve label)
    add("orange", new THREE.TorusGeometry(0.013, 0.0022, 4, seg(20), Math.PI * 1.6), { p: [cx0 - 0.03, CASE.bottom + 0.045, front + 0.003] })
    // the hinges, and the line the lid turns about
    HINGE.y = SEAM + 0.002
    HINGE.z = -front - 0.012
    for (let k = -2; k <= 2; k++) add("caseDetail", new THREE.CylinderGeometry(0.008, 0.008, 0.06, seg(12)), { p: [cx0 + k * 0.08, HINGE.y, HINGE.z], r: [0, 0, Math.PI / 2], uv: 6 })
    // feet on the rails
    for (const xs of [-1, 1]) for (const zs of [-1, 1]) add("plastic", new RoundedBoxGeometry(0.034, 0.006, 0.036, 2, 0.002), { p: [cx0 + 0.15 * xs, CASE.bottom - 0.002, RAIL_Z * zs] })
    MARKS.case = [cx0, SEAM, front + 0.02]

    // ---------------- inside the box: battery, computer boards, wiring ----------------
    const FLOOR = CASE.bottom + 0.04
    // the battery, in blue shrink wrap, along the front
    add("battery", new RoundedBoxGeometry(0.17, 0.036, 0.062, 3, 0.008), { p: [cx0 - 0.03, FLOOR + 0.018, 0.09] })
    add("label", new THREE.BoxGeometry(0.06, 0.0008, 0.03), { p: [cx0 - 0.05, FLOOR + 0.0365, 0.09] })
    MARKS.power = [cx0 - 0.03, FLOOR + 0.03, 0.09]
    // the computer: two boards on standoffs, heat sink on top
    const cbx = cx0 + 0.1
    const cbz = -0.01
    for (const [i, y] of [FLOOR + 0.012, FLOOR + 0.034].entries()) {
        add("pcb", new RoundedBoxGeometry(0.09, 0.0018, 0.065, 2, 0.002), { p: [cbx, y, cbz] })
        for (const sx of [-1, 1]) for (const sz of [-1, 1]) add("steel", new THREE.CylinderGeometry(0.0025, 0.0025, 0.012, seg(6)), { p: [cbx + sx * 0.04, y - 0.006, cbz + sz * 0.028] })
        // connectors along one edge
        add("plastic", new THREE.BoxGeometry(0.05, 0.008, 0.008), { p: [cbx - 0.005, y + 0.005, cbz + 0.026 - i * 0.05] })
        add("label", new THREE.BoxGeometry(0.016, 0.007, 0.012), { p: [cbx + 0.03, y + 0.0045, cbz - 0.02] })
    }
    add("sink", new THREE.BoxGeometry(0.045, 0.004, 0.04), { p: [cbx - 0.01, FLOOR + 0.038, cbz] })
    for (let i = 0; i < (lite ? 5 : 9); i++) add("sink", new THREE.BoxGeometry(0.045, 0.01, 0.0012), { p: [cbx - 0.01, FLOOR + 0.045, cbz - 0.018 + i * 0.0045] })
    MARKS.computer = [cbx, FLOOR + 0.04, cbz]
    // yellow power connectors and a couple of red ones
    for (const [x, z, m] of [
        [cx0 + 0.06, 0.1, "yellow"],
        [cx0 + 0.075, 0.08, "yellow"],
        [cx0 - 0.13, 0.03, "yellow"],
        [cx0 - 0.1, -0.08, "red"],
        [cx0 + 0.02, -0.1, "red"],
    ])
        add(m, new RoundedBoxGeometry(0.018, 0.009, 0.009, 2, 0.002), { p: [x, FLOOR + 0.006, z], r: [0, x * 9, 0] })
    // wiring: red, black, yellow and white, in loose loops from part to part
    const loose = (mat, pts, r = 0.0018) => cable(pts, r, mat)
    const wireCols = ["wireRed", "wireBlack", "wireYellow", "wireWhite", "wireRed", "wireBlack"]
    for (let i = 0; i < (lite ? 7 : 16); i++) {
        const a = [cx0 - 0.16 + ((i * 37) % 30) / 100, FLOOR + 0.004, -0.13 + ((i * 53) % 26) / 100]
        const b = [cx0 - 0.15 + ((i * 71) % 31) / 100, FLOOR + 0.006, -0.12 + ((i * 29) % 24) / 100]
        const h = 0.02 + ((i * 13) % 5) * 0.008
        loose(wireCols[i % wireCols.length], [a, [a[0] * 0.7 + b[0] * 0.3, FLOOR + h, a[2] * 0.6 + b[2] * 0.4], [a[0] * 0.3 + b[0] * 0.7, FLOOR + h * 0.8, a[2] * 0.3 + b[2] * 0.7], b])
    }
    // the wires come in from the glands at the stern end
    for (let i = 0; i < (lite ? 3 : 6); i++) {
        const z = -0.11 + i * 0.045
        loose(i % 2 ? "wireBlack" : "wireRed", [[cx0 - CASE.x / 2 + W + 0.002, CASE.bottom + 0.05, z], [cx0 - 0.15, FLOOR + 0.03, z * 0.8], [cx0 - 0.1, FLOOR + 0.01, z * 0.5 + 0.02]], 0.0024)
    }

    // ---------------- inside the lid: the electronics screwed to it (hanging down when closed) ----------------
    bucket = lidParts
    const CEIL = TOP - 0.03
    const hang = (mat, g, x, z, h, opts = {}) => add(mat, g, { ...opts, p: [x, CEIL - h / 2, z] })
    // a finned heat sink: a base plate and fins pointing down
    const heatSink = (x, z, w, d, h, fins) => {
        hang("sink", new THREE.BoxGeometry(w, 0.006, d), x, z, 0.006)
        for (let i = 0; i < fins; i++) hang("sink", new THREE.BoxGeometry(0.0016, h, d * 0.94), x - w / 2 + (w / (fins - 1)) * i, z, 0.012 + h)
    }
    heatSink(cx0 - 0.135, 0.1, 0.07, 0.055, 0.016, lite ? 7 : 12)
    heatSink(cx0 - 0.13, -0.07, 0.085, 0.07, 0.02, lite ? 8 : 15)
    // a small green board beside the first
    hang("pcb", new RoundedBoxGeometry(0.045, 0.002, 0.028, 2, 0.001), cx0 - 0.075, 0.12, 0.004)
    // red and black terminal blocks
    for (let i = 0; i < 4; i++) hang(i % 2 ? "plastic" : "red", new RoundedBoxGeometry(0.012, 0.012, 0.03, 2, 0.002), cx0 - 0.08 + i * 0.014, 0.04, 0.012)
    // a black round fan
    hang("plastic", new THREE.CylinderGeometry(0.028, 0.028, 0.012, seg(28)), cx0 - 0.04, -0.075, 0.012)
    hang("caseDetail", new THREE.CylinderGeometry(0.009, 0.009, 0.013, seg(16)), cx0 - 0.04, -0.075, 0.013)
    // the 5G router: a black box with a white label and its sockets
    const rx = cx0 + 0.03
    const rz = -0.005
    hang("plastic", new RoundedBoxGeometry(0.1, 0.03, 0.07, 3, 0.006), rx, rz, 0.03)
    hang("label", new THREE.BoxGeometry(0.05, 0.0008, 0.012), rx - 0.01, rz + 0.01, 0.0312)
    for (let i = 0; i < 4; i++) hang("steel", new THREE.CylinderGeometry(0.0035, 0.0035, 0.01, seg(8)), rx + 0.052, rz - 0.024 + i * 0.016, 0.02, { r: [0, 0, Math.PI / 2] })
    MARKS.link = [rx, CEIL - 0.03, rz]
    // the flight controller: the red unit with black plugs along its end
    const fx = cx0 + 0.09
    const fz = -0.025
    hang("red", new RoundedBoxGeometry(0.036, 0.018, 0.075, 3, 0.005), fx, fz, 0.018)
    for (let i = 0; i < 5; i++) hang("plastic", new THREE.BoxGeometry(0.01, 0.008, 0.008), fx - 0.012 + (i % 2) * 0.024, fz - 0.03 + i * 0.014, 0.024)
    MARKS.pixhawk = [fx, CEIL - 0.02, fz]
    // the orange relay board with its four blue relays
    hang("pcbOrange", new RoundedBoxGeometry(0.075, 0.002, 0.05, 2, 0.002), cx0 + 0.145, 0.08, 0.004)
    for (let i = 0; i < 4; i++) hang("relay", new RoundedBoxGeometry(0.015, 0.016, 0.019, 2, 0.002), cx0 + 0.118 + i * 0.018, 0.085, 0.02)
    // wires across the lid: white USB leads and red and black power
    for (const [mat, pts] of [
        ["wireWhite", [[cx0 - 0.1, 0.1], [cx0 - 0.02, 0.07], [cx0 + 0.05, 0.05], [cx0 + 0.12, 0.06]]],
        ["wireWhite", [[cx0 - 0.11, -0.04], [cx0 - 0.04, -0.02], [cx0 + 0.07, 0.03], [cx0 + 0.13, 0.04]]],
        ["wireRed", [[cx0 - 0.08, 0.04], [cx0 - 0.02, 0.0], [cx0 + 0.08, -0.06], [cx0 + 0.15, -0.1]]],
        ["wireBlack", [[cx0 - 0.07, 0.04], [cx0 - 0.0, -0.03], [cx0 + 0.05, -0.08], [cx0 + 0.14, -0.12]]],
        ["wireRed", [[cx0 - 0.15, 0.12], [cx0 - 0.1, 0.13], [cx0 - 0.05, 0.12]]],
        ["wireBlack", [[cx0 + 0.11, 0.07], [cx0 + 0.09, 0.02], [cx0 + 0.09, -0.06]]],
    ])
        loose(mat, pts.map(([x, z], i) => [x, CEIL - 0.004 - (i % 2) * 0.006, z]), 0.0019)
    bucket = parts

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
    bucket = lidParts
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
    // the connector and its cable over the stern edge of the lid, close to the hinge (so it bends, not stretches, when the lid opens)
    add("plastic", new THREE.CylinderGeometry(0.007, 0.007, 0.022, seg(12)), { p: [lx - 0.05, base + 0.012, lz + 0.01], r: [0, 0, Math.PI / 2] })
    add("red", new THREE.CylinderGeometry(0.0072, 0.0072, 0.004, seg(12)), { p: [lx - 0.062, base + 0.012, lz + 0.01], r: [0, 0, Math.PI / 2] })
    const sternTop = cx0 - CASE.x / 2
    cable([
        [lx - 0.064, base + 0.012, lz + 0.01],
        [lx - 0.085, base + 0.008, lz - 0.05],
        [sternTop - 0.002, TOP + 0.004, -0.14],
        [sternTop - 0.012, SEAM + 0.025, -0.162],
        [sternTop - 0.013, SEAM, -0.168],
    ], 0.0045)
    // the small white dome beside it
    add("dome", new THREE.SphereGeometry(0.017, seg(20), seg(10), 0, Math.PI * 2, 0, Math.PI / 2), { p: [lx + 0.055, ly + 0.004, lz + 0.055] })
    add("plastic", new THREE.CylinderGeometry(0.018, 0.018, 0.004, seg(20)), { p: [lx + 0.055, ly + 0.003, lz + 0.055] })
    MARKS.lidar = [lx, base + 0.04, lz]
    // four black whip antennas for the 5G router, in a row across the stern end of the lid, behind the LiDAR,
    // leaning back a little (requests: "kan du legge til disse antenne til argus båten", from a photo of the boat,
    // and "antene skal være bakpå den svarte boksen ikke på midten"):
    // a nut on the lid, a swivel knuckle, then the rubber whip, thicker at the foot and rounded at the tip.
    // The row sits on the starboard side of the LiDAR cable, which runs over the stern edge towards port.
    const wx = cx0 - CASE.x / 2 + 0.032
    for (const [i, az] of [-0.018, 0.036, 0.09, 0.144].entries()) {
        add("steel", new THREE.CylinderGeometry(0.0095, 0.0095, 0.005, 6), { p: [wx, TOP + 0.0055, az] })
        add("plastic", new THREE.CylinderGeometry(0.0085, 0.009, 0.014, seg(14)), { p: [wx, TOP + 0.015, az] })
        add("plastic", new THREE.SphereGeometry(0.0092, seg(14), seg(8)), { p: [wx, TOP + 0.024, az] })
        const L = 0.15
        const whip = new THREE.CylinderGeometry(0.0072, 0.0088, L, seg(14), 1, true)
        whip.translate(0, L / 2, 0)
        const tip = new THREE.SphereGeometry(0.0072, seg(14), seg(6), 0, Math.PI * 2, 0, Math.PI / 2)
        tip.translate(0, L, 0)
        // a slight fan: each one leans back towards the stern, the outer ones a touch outwards
        const lean = [0.2, 0.16, 0.15, 0.19][i]
        const splay = [0.06, 0.02, -0.03, -0.08][i]
        for (const g of [whip, tip]) add("rubber", g, { p: [wx, TOP + 0.024, az], r: [splay, 0, lean] })
    }
    MARKS.antennas = [wx, TOP + 0.09, 0.063]
    bucket = parts
    cable([
        [sternTop - 0.013, SEAM, -0.168],
        [sternTop - 0.016, CASE.bottom + 0.11, -0.15],
        [sternTop - 0.014, CASE.bottom + 0.09, -0.1],
    ], 0.0045)

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
    // the stickers follow the side of the hull, just off it
    const DW = 0.86
    const DH = 0.1075
    const dec = new THREE.PlaneGeometry(DW, DH, 64, 8)
    const duv = dec.attributes.uv
    for (let i = 0; i < duv.count; i++) duv.setY(i, 1 - duv.getY(i))
    const dp = dec.attributes.position
    for (let i = 0; i < dp.count; i++) {
        const x = -0.455 + DW / 2 + dp.getX(i)
        const y = -0.03 - DH / 2 + dp.getY(i)
        // the hull's side at this height: the same superellipse the hull is made of
        const yt = hullTop(x)
        const yb = hullBottom(x)
        const yc = (yt + yb) / 2
        const h = (yt - yb) / 2
        const sn = Math.min(1, Math.max(0, (y - yc) / h)) ** 4.5
        const z = hullHalfWidth(x) * Math.sqrt(Math.max(0, 1 - sn * sn)) ** (1 / 6)
        dp.setXYZ(i, x, y, HULL_Z + z + 0.0022)
    }
    dec.computeVertexNormals()
    add("sponsors", dec)

    // ---------------- the emergency stop: on the port hull, just ahead of the bow beam ----------------
    const ex = BEAM_X + 0.075
    const ez = -HULL_Z + 0.015
    add("plastic", new RoundedBoxGeometry(0.08, 0.004, 0.08, 2, 0.002), { p: [ex, 0.002, ez] })
    add("yellow", new RoundedBoxGeometry(0.068, 0.064, 0.068, 3, 0.006), { p: [ex, 0.036, ez] })
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) screw([ex + sx * 0.026, 0.068, ez + sz * 0.026], 0.0026)
    add("yellow", new THREE.CylinderGeometry(0.02, 0.022, 0.01, seg(28)), { p: [ex, 0.073, ez] })
    const mush = new THREE.LatheGeometry(
        [
            [0, 0],
            [0.011, 0],
            [0.011, 0.006],
            [0.02, 0.007],
            [0.0222, 0.0105],
            [0.0212, 0.0155],
            [0.016, 0.0195],
            [0.008, 0.0215],
            [0, 0.022],
        ].map(([x, y]) => new THREE.Vector2(x, y)),
        seg(36)
    )
    add("estopRed", mush, { p: [ex, 0.078, ez] })
    // its cable: out of a gland on the inboard side, along the deck to the bow beam and up to the case
    add("plastic", new THREE.CylinderGeometry(0.006, 0.007, 0.012, seg(10)), { p: [ex, 0.02, ez + 0.039], r: [Math.PI / 2, 0, 0] })
    cable([
        [ex, 0.02, ez + 0.046],
        [ex - 0.012, 0.01, ez + 0.075],
        [BEAM_X + 0.028, 0.006, ez + 0.11],
        [BEAM_X + 0.022, BEAM_Y + 0.02, -0.21],
        [BEAM_X + 0.0, RAIL_Y + 0.024, -0.16],
        [CASE.cx + 0.16, CASE.bottom + 0.03, -CASE.z / 2 - 0.012],
    ], 0.0038)
    add("plastic", new THREE.CylinderGeometry(0.0065, 0.0075, 0.014, seg(10)), { p: [CASE.cx + 0.16, CASE.bottom + 0.03, -CASE.z / 2 - 0.005], r: [Math.PI / 2, 0, 0] })
    MARKS.estop = [ex, 0.09, ez]

    return { parts, lidParts }
}

// marks that sit on the lid (they turn with it)
const LID_MARKS = ["lidar", "link", "pixhawk", "antennas"]

// ---------- ambient occlusion: how much of the sky each vertex sees ----------
function bakeOcclusion(parts, rays) {
    const all = []
    // stickers lie on the hull: they don't shade it
    for (const [name, list] of Object.entries(parts)) if (name !== "sponsors") for (const g of list) all.push(g)
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
    const { parts, lidParts } = build(lite)
    // the shadow in the corners is baked with the lid open, so the inside is lit right when you look in
    const OPEN = -1.85
    const toHinge = new THREE.Matrix4().makeTranslation(0, -HINGE.y, -HINGE.z)
    const fromHinge = new THREE.Matrix4().makeTranslation(0, HINGE.y, HINGE.z)
    const open = new THREE.Matrix4().multiplyMatrices(fromHinge, new THREE.Matrix4().makeRotationX(OPEN)).multiply(toHinge)
    const close = open.clone().invert()
    for (const list of Object.values(lidParts)) for (const g of list) g.applyMatrix4(open)
    const all = Object.fromEntries(Object.keys(parts).map((k) => [k, [...parts[k], ...lidParts[k]]]))
    bakeOcclusion(all, lite ? 14 : 28)
    for (const list of Object.values(lidParts)) for (const g of list) g.applyMatrix4(close)
    const box = new THREE.Box3()
    for (const set of [parts, lidParts])
        for (const list of Object.values(set))
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
        // the light model takes the half-size copies of the surface textures
        const lit = lite && name.endsWith(".jpg") && fs.existsSync(path.join(here, name.replace(".jpg", "-lite.jpg"))) ? name.replace(".jpg", "-lite.jpg") : name
        if (!textures.has(lit)) textures.set(lit, doc.createTexture(lit).setImage(fs.readFileSync(path.join(here, lit))).setMimeType(lit.endsWith(".png") ? "image/png" : "image/jpeg"))
        return textures.get(lit)
    }
    // the lid: its own node on the hinge line, its geometry relative to it
    const lid = doc.createNode("lid").setTranslation([0, HINGE.y, HINGE.z])
    root.addChild(lid)
    for (const list of Object.values(lidParts)) for (const g of list) g.applyMatrix4(toHinge)
    // empty nodes where the labelled parts are (inside the case they are only seen with the lid open)
    for (const [name, p] of Object.entries(MARKS)) {
        const onLid = LID_MARKS.includes(name)
        const n = doc.createNode("mark-" + name).setTranslation(onLid ? [p[0], p[1] - HINGE.y, p[2] - HINGE.z] : p)
        ;(onLid ? lid : root).addChild(n)
    }
    for (const [name, list, parent] of [...Object.entries(parts).map(([n, l]) => [n, l, root]), ...Object.entries(lidParts).map(([n, l]) => [n, l, lid])]) {
        if (!list.length) continue
        const g = mergeGeometries(list, false)
        const def = MATS[name]
        // tiled textures: keep the uvs in 0…1 (so they pack small) and repeat in the material instead
        const uva = g.attributes.uv
        // shift by whole tiles so nothing is below 0 (the pattern stays the same)
        let minU = 0
        let minV = 0
        for (let i = 0; i < uva.count; i++) {
            minU = Math.min(minU, uva.getX(i))
            minV = Math.min(minV, uva.getY(i))
        }
        if (minU < 0 || minV < 0) for (let i = 0; i < uva.count; i++) uva.setXY(i, uva.getX(i) - Math.floor(minU), uva.getY(i) - Math.floor(minV))
        let rep = 1
        for (let i = 0; i < uva.array.length; i++) rep = Math.max(rep, Math.abs(uva.array[i]))
        rep = Math.ceil(rep)
        if (rep > 1) for (let i = 0; i < uva.array.length; i++) uva.array[i] /= rep
        const c = new THREE.Color(def.color)
        // (the lid has its own copies: its texture repeat can differ)
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
        parent.addChild(doc.createNode(name).setMesh(doc.createMesh(name).addPrimitive(prim)))
    }
    await MeshoptEncoder.ready
    await doc.transform(weld(), prune({ keepLeaves: true }), reorder({ encoder: MeshoptEncoder }), quantize({ quantizeColor: 8, quantizeNormal: 8 }), meshopt({ encoder: MeshoptEncoder, level: "high" }))
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
