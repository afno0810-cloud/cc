/* ================================================================
   Argus, built from the photos of the real boat (not an AI scan), so
   every part sits where it is on the boat:

   - two white hulls with rounded ends, a flat deck and a hatch each,
   - an aluminium frame: two cross beams on plates, two rails along,
   - the black electronics case, closed, with a flat lid, the orange
     seal, two latches, a handle and the stereo camera at the front,
   - the two Seapath GNSS antennas on wooden blocks at the stern,
   - four ducted thrusters under the hull ends,
   - the emergency stop and cable loops at the bow, the arrow, and the
     sponsor names on the starboard hull.

   Model axes: bow = +x, up = +y, starboard = +z. Metres while building,
   then scaled so the boat is 1 unit long (the site scales it up).

   Usage: node scripts/argus/build.mjs   → public/media/models/argus.glb
                                            and argus-lite.glb
   ================================================================ */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import * as THREE from "three"
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js"
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js"
import { Document, NodeIO } from "@gltf-transform/core"
import { ALL_EXTENSIONS } from "@gltf-transform/extensions"
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

// ---------- the hull shape ----------
// plan: a long shape with round ends; side: flat deck, the bottom curves up towards the ends
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
        const a = Math.max(hullHalfWidth(x), 0.002)
        const yt = hullTop(x)
        const yb = hullBottom(x)
        const yc = (yt + yb) / 2
        const h = (yt - yb) / 2
        for (let j = 0; j < M; j++) {
            const th = (2 * Math.PI * j) / M
            const c = Math.cos(th)
            const s = Math.sin(th)
            const n = s > 0 ? 7 : 2.6 // boxy deck, round bottom
            const z = a * Math.sign(c) * Math.abs(c) ** (2 / n)
            const y = yc + h * Math.sign(s) * Math.abs(s) ** (2 / n)
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
    // close the two tips
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
    // the winding must give outward normals: check a point on the starboard side
    const n = g.attributes.normal
    const mid = Math.floor(N / 2) * M
    if (n.getZ(mid) < 0) {
        const ix = g.index.array
        for (let t = 0; t < ix.length; t += 3) [ix[t + 1], ix[t + 2]] = [ix[t + 2], ix[t + 1]]
        g.computeVertexNormals()
    }
    return g
}

// a 30 × 30 mm aluminium profile with a slot in each face, along +z, centred
function profileGeometry(length, slots) {
    const h = PROF / 2
    const sw = 0.004 // half slot width
    const sd = 0.004 // slot depth
    const s = new THREE.Shape()
    const pts = []
    // go round the square, cutting a slot in the middle of each side
    const side = (x0, y0, x1, y1, nx, ny) => {
        const mx = (x0 + x1) / 2
        const my = (y0 + y1) / 2
        const dx = Math.sign(x1 - x0)
        const dy = Math.sign(y1 - y0)
        pts.push([x0, y0])
        if (slots) {
            pts.push([mx - dx * sw, my - dy * sw])
            pts.push([mx - dx * sw - nx * sd, my - dy * sw - ny * sd])
            pts.push([mx + dx * sw - nx * sd, my + dy * sw - ny * sd])
            pts.push([mx + dx * sw, my + dy * sw])
        }
    }
    side(-h, -h, h, -h, 0, -1)
    side(h, -h, h, h, 1, 0)
    side(h, h, -h, h, 0, 1)
    side(-h, h, -h, -h, -1, 0)
    s.moveTo(...pts[0])
    for (const p of pts.slice(1)) s.lineTo(...p)
    s.closePath()
    const g = new THREE.ExtrudeGeometry(s, { depth: length, bevelEnabled: false, steps: 1 })
    g.translate(0, 0, -length / 2)
    return g
}

function roundedRectShape(w, h, r) {
    const s = new THREE.Shape()
    const x = -w / 2
    const y = -h / 2
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

// ---------- materials (sRGB colours; glTF wants them linear) ----------
const MATS = {
    hull: { color: "#e8e6e1", rough: 0.48 },
    hatch: { color: "#f5f5f2", rough: 0.32 },
    alu: { color: "#c5c9cf", rough: 0.3, metal: 1 },
    steel: { color: "#b8bdc4", rough: 0.22, metal: 1 },
    case: { color: "#18181b", rough: 0.55 },
    caseDetail: { color: "#2a2a2e", rough: 0.45 },
    seal: { color: "#ff5a1a", rough: 0.5 },
    rubber: { color: "#0f0f11", rough: 0.72 },
    wood: { color: "#8c5a33", rough: 0.85 },
    antenna: { color: "#f2f2ee", rough: 0.28 },
    yellow: { color: "#f2bd00", rough: 0.42 },
    red: { color: "#c9151b", rough: 0.32 },
    lens: { color: "#0b1322", rough: 0.06, metal: 0.4 },
    mark: { color: "#0c0c0d", rough: 0.6 },
    sponsors: { color: "#ffffff", rough: 0.45, map: "sponsors.png" },
}

function build(lite) {
    const parts = Object.fromEntries(Object.keys(MATS).map((k) => [k, []]))
    const seg = (n) => Math.max(8, Math.round(lite ? n * 0.55 : n))
    const m4 = new THREE.Matrix4()
    const add = (mat, g, { p = [0, 0, 0], r = [0, 0, 0], s = [1, 1, 1] } = {}) => {
        const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(r[0], r[1], r[2], "YXZ"))
        m4.compose(new THREE.Vector3(...p), q, new THREE.Vector3(...s))
        const gg = (g.index ? g.toNonIndexed() : g.clone()).applyMatrix4(m4)
        if (!gg.attributes.uv) gg.setAttribute("uv", new THREE.Float32BufferAttribute(new Float32Array(gg.attributes.position.count * 2), 2))
        if (!gg.attributes.normal) gg.computeVertexNormals()
        for (const k of Object.keys(gg.attributes)) if (!["position", "normal", "uv"].includes(k)) gg.deleteAttribute(k)
        parts[mat].push(gg)
    }

    // hulls, hatches, plates
    const hull = hullGeometry(lite ? 48 : 84, lite ? 28 : 44)
    const hatch = new THREE.ExtrudeGeometry(roundedRectShape(0.34, 0.19, 0.035), { depth: 0.008, bevelEnabled: true, bevelThickness: 0.003, bevelSize: 0.003, bevelSegments: 2, curveSegments: seg(6) })
    hatch.rotateX(-Math.PI / 2)
    const knob = new THREE.TorusGeometry(0.016, 0.004, seg(8), seg(20))
    knob.rotateX(Math.PI / 2)
    const plate = new THREE.BoxGeometry(0.06, PLATE, 0.13)
    for (const zs of [-1, 1]) {
        const z = HULL_Z * zs
        add("hull", hull, { p: [0, 0, z] })
        add("hatch", hatch, { p: [-0.03, 0.001, z] })
        add("hatch", knob, { p: [-0.16, 0.016, z] })
        for (const xs of [-1, 1]) add("alu", plate, { p: [BEAM_X * xs, PLATE / 2, z] })
    }

    // the frame
    const beam = profileGeometry(1.04, !lite)
    for (const xs of [-1, 1]) add("alu", beam, { p: [BEAM_X * xs, BEAM_Y, 0] })
    const rail = profileGeometry(0.8, !lite)
    for (const zs of [-1, 1]) add("alu", rail, { p: [0, RAIL_Y, RAIL_Z * zs], r: [0, Math.PI / 2, 0] })
    // end caps on the cross beams
    const cap = new THREE.BoxGeometry(PROF + 0.002, PROF + 0.002, 0.004)
    for (const xs of [-1, 1]) for (const zs of [-1, 1]) add("rubber", cap, { p: [BEAM_X * xs, BEAM_Y, 0.52 * zs] })

    // the electronics case: closed, with a flat lid
    const lowH = SEAM - CASE.bottom
    const lidH = CASE.bottom + CASE.y - SEAM
    add("case", new RoundedBoxGeometry(CASE.x, lowH, CASE.z, seg(3), 0.016), { p: [0, CASE.bottom + lowH / 2, 0] })
    add("case", new RoundedBoxGeometry(CASE.x + 0.006, lidH, CASE.z + 0.006, seg(3), 0.016), { p: [0, SEAM + lidH / 2, 0] })
    add("seal", new THREE.BoxGeometry(CASE.x + 0.002, 0.005, CASE.z + 0.002), { p: [0, SEAM, 0] })
    // two shallow ribs on the lid, as on the real case (no bump)
    for (const zs of [-1, 1]) add("case", new RoundedBoxGeometry(CASE.x - 0.06, 0.004, 0.03, 2, 0.0015), { p: [0, CASE.bottom + CASE.y + 0.002, 0.13 * zs] })
    // latches and handle on the front (bow side)
    const front = CASE.x / 2
    for (const zs of [-1, 1]) add("caseDetail", new RoundedBoxGeometry(0.018, 0.062, 0.052, 2, 0.004), { p: [front + 0.006, SEAM - 0.006, 0.14 * zs] })
    add("caseDetail", new RoundedBoxGeometry(0.02, 0.022, 0.13, 2, 0.008), { p: [front + 0.016, SEAM + 0.012, 0] })
    for (const zs of [-1, 1]) add("caseDetail", new THREE.BoxGeometry(0.016, 0.03, 0.016), { p: [front + 0.007, SEAM + 0.012, 0.075 * zs] })
    // feet: the case sits on the rails with four small blocks
    for (const xs of [-1, 1]) for (const zs of [-1, 1]) add("caseDetail", new THREE.BoxGeometry(0.03, 0.006, 0.03), { p: [0.1 * xs, CASE.bottom + 0.003, RAIL_Z * zs] })

    // stereo camera under the front of the case, looking forward
    const camY = CASE.bottom + 0.035
    add("caseDetail", new RoundedBoxGeometry(0.032, 0.03, 0.175, 2, 0.012), { p: [front + 0.018, camY, 0] })
    for (const zs of [-1, 1]) {
        add("lens", new THREE.CylinderGeometry(0.0095, 0.0095, 0.004, seg(20)), { p: [front + 0.035, camY, 0.06 * zs], r: [0, 0, Math.PI / 2] })
    }

    // Seapath 130: the two GNSS antennas on wooden blocks at the stern of each hull
    const puck = new THREE.LatheGeometry(
        [
            [0, 0],
            [0.074, 0],
            [0.077, 0.012],
            [0.075, 0.026],
            [0.062, 0.036],
            [0.032, 0.041],
            [0, 0.0425],
        ].map(([x, y]) => new THREE.Vector2(x, y)),
        seg(36)
    )
    const ax = -HULL_L / 2 + 0.1
    for (const zs of [-1, 1]) {
        const z = HULL_Z * zs
        add("wood", new THREE.BoxGeometry(0.07, 0.05, 0.06), { p: [ax, 0.025, z] })
        add("rubber", new THREE.CylinderGeometry(0.06, 0.062, 0.01, seg(28)), { p: [ax, 0.055, z] })
        add("antenna", puck, { p: [ax, 0.06, z] })
    }

    // four ducted thrusters under the ends of the hulls, turned 45° (vectored)
    // the housing round the propeller has eight flat sides, as on the real thrusters
    const duct = new THREE.LatheGeometry(
        [
            [0.046, -0.036],
            [0.058, -0.034],
            [0.062, -0.012],
            [0.062, 0.022],
            [0.056, 0.036],
            [0.048, 0.036],
            [0.046, -0.036],
        ].map(([x, y]) => new THREE.Vector2(x, y)),
        8
    )
    const hub = new THREE.LatheGeometry(
        [
            [0, -0.04],
            [0.012, -0.03],
            [0.014, 0.02],
            [0.008, 0.034],
            [0, 0.036],
        ].map(([x, y]) => new THREE.Vector2(x, y)),
        seg(16)
    )
    const blade = new THREE.BoxGeometry(0.034, 0.004, 0.014)
    const strut = new THREE.BoxGeometry(0.004, 0.03, 0.06)
    for (const xs of [-1, 1]) {
        for (const zs of [-1, 1]) {
            const x = 0.44 * xs
            const z = HULL_Z * zs
            const yb = hullBottom(x)
            const rodL = 0.05
            add("steel", new THREE.CylinderGeometry(0.008, 0.008, rodL + 0.01, seg(12)), { p: [x, yb - rodL / 2 + 0.005, z] })
            add("rubber", new RoundedBoxGeometry(0.05, 0.026, 0.034, 2, 0.006), { p: [x, yb - rodL, z] })
            const cy = yb - rodL - 0.013 - 0.06
            // the duct axis lies flat, turned 45° out from the bow line
            const yaw = (Math.PI / 4) * xs * zs
            const t = { p: [x, cy, z], r: [0, yaw, Math.PI / 2] }
            add("rubber", duct, t)
            add("rubber", hub, t)
            for (let b = 0; b < 3; b++) {
                const a = (b / 3) * Math.PI * 2
                const bg = blade.clone().translate(0.029, 0, 0).rotateZ(0.5).rotateY(a)
                add("rubber", bg, t)
            }
            // the mount from the block down to the duct
            add("rubber", strut, { p: [x, yb - rodL - 0.02, z], r: [0, yaw, 0] })
        }
    }

    // emergency stop on the port bow, cable loops at both bows, the arrow
    const ex = HULL_L / 2 - 0.16
    add("yellow", new RoundedBoxGeometry(0.075, 0.05, 0.07, 2, 0.008), { p: [ex, 0.025, -HULL_Z] })
    add("mark", new THREE.CylinderGeometry(0.016, 0.016, 0.01, seg(16)), { p: [ex, 0.055, -HULL_Z] })
    add("red", new THREE.CylinderGeometry(0.01, 0.012, 0.012, seg(16)), { p: [ex, 0.064, -HULL_Z] })
    add("red", new THREE.SphereGeometry(0.022, seg(20), seg(10), 0, Math.PI * 2, 0, Math.PI / 2), { p: [ex, 0.07, -HULL_Z], s: [1, 0.45, 1] })
    const loop = (cx, z, w, h) => {
        const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(cx - w, 0, z),
            new THREE.Vector3(cx - w * 0.85, h * 0.75, z),
            new THREE.Vector3(cx, h, z),
            new THREE.Vector3(cx + w * 0.85, h * 0.75, z),
            new THREE.Vector3(cx + w, 0, z),
        ])
        add("rubber", new THREE.TubeGeometry(curve, seg(24), 0.0045, seg(8), false))
    }
    loop(HULL_L / 2 - 0.08, HULL_Z + 0.04, 0.03, 0.055)
    loop(ex + 0.06, -HULL_Z + 0.03, 0.028, 0.05)
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

    // sponsor names on the outside of the starboard hull
    const dec = new THREE.PlaneGeometry(0.72, 0.09)
    const duv = dec.attributes.uv
    for (let i = 0; i < duv.count; i++) duv.setY(i, 1 - duv.getY(i))
    add("sponsors", dec, { p: [-0.02, -0.075, HULL_Z + HULL_W / 2 + 0.0016] })

    return parts
}

function srgbToLinear(hex) {
    const c = new THREE.Color(hex)
    return [c.r, c.g, c.b] // THREE.Color stores linear values when colour management is on
}

async function write(lite, file) {
    const parts = build(lite)
    // measure, then scale so the boat is 1 unit long
    const box = new THREE.Box3()
    for (const list of Object.values(parts)) for (const g of list) {
        g.computeBoundingBox()
        box.union(g.boundingBox)
    }
    const size = box.getSize(new THREE.Vector3())
    const k = 1 / size.x

    const doc = new Document()
    const buffer = doc.createBuffer()
    const scene = doc.createScene("Argus")
    const root = doc.createNode("Argus").setScale([k, k, k])
    scene.addChild(root)
    for (const [name, list] of Object.entries(parts)) {
        if (!list.length) continue
        const g = mergeGeometries(list, false)
        const def = MATS[name]
        const mat = doc
            .createMaterial(name)
            .setBaseColorFactor([...srgbToLinear(def.color), 1])
            .setRoughnessFactor(def.rough)
            .setMetallicFactor(def.metal || 0)
        if (def.map) {
            const tex = doc.createTexture(name).setImage(fs.readFileSync(path.join(here, def.map))).setMimeType("image/png")
            mat.setBaseColorTexture(tex).setAlphaMode("MASK").setAlphaCutoff(0.5)
        }
        const prim = doc
            .createPrimitive()
            .setMaterial(mat)
            .setAttribute("POSITION", doc.createAccessor().setType("VEC3").setArray(new Float32Array(g.attributes.position.array)).setBuffer(buffer))
            .setAttribute("NORMAL", doc.createAccessor().setType("VEC3").setArray(new Float32Array(g.attributes.normal.array)).setBuffer(buffer))
            .setAttribute("TEXCOORD_0", doc.createAccessor().setType("VEC2").setArray(new Float32Array(g.attributes.uv.array)).setBuffer(buffer))
        const mesh = doc.createMesh(name).addPrimitive(prim)
        root.addChild(doc.createNode(name).setMesh(mesh))
    }
    await MeshoptEncoder.ready
    await doc.transform(weld(), prune(), reorder({ encoder: MeshoptEncoder }), quantize(), meshopt({ encoder: MeshoptEncoder, level: "medium" }))
    const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ "meshopt.encoder": MeshoptEncoder })
    await io.write(file, doc)
    const tris = doc
        .getRoot()
        .listMeshes()
        .reduce((n, m) => n + m.listPrimitives().reduce((a, p) => a + (p.getIndices() ? p.getIndices().getCount() / 3 : 0), 0), 0)
    console.log(path.basename(file), (fs.statSync(file).size / 1024).toFixed(0) + " KB", Math.round(tris) + " triangles", "size m:", size.toArray().map((v) => v.toFixed(3)).join(" × "), "centre y:", box.getCenter(new THREE.Vector3()).y.toFixed(3))
}

await write(false, path.join(outDir, "argus.glb"))
await write(true, path.join(outDir, "argus-lite.glb"))
