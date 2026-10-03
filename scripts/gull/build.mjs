/* ================================================================
   The gull for the harbour, from a Higgsfield text-to-3D model
   (scripts/gull/gull-higgsfield.glb: a gull gliding, wings spread, no
   texture). Here it is made into a herring gull:
   - the legs that hang under it are taken off (gulls tuck them in),
   - the wings are drawn out to a gull's long, narrow span,
   - it is painted in vertex colours: white head, body and underside,
     grey back and upper wings, black wing tips, a yellow bill.
   Axes: head = +x, wings along ±z, up = +y; the wings flap in the
   shader (src/scene/world/birds.js) by turning about the body's axis.

   Usage: node scripts/gull/build.mjs → public/media/models/world/gull.glb
   ================================================================ */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import * as THREE from "three"
import { Document, NodeIO } from "@gltf-transform/core"
import { ALL_EXTENSIONS } from "@gltf-transform/extensions"
import { weld, prune, meshopt } from "@gltf-transform/functions"
import { MeshoptEncoder } from "meshoptimizer"

const here = path.dirname(fileURLToPath(import.meta.url))
const out = path.resolve(here, "../../public/media/models/world/gull.glb")

const io = new NodeIO().registerExtensions(ALL_EXTENSIONS)
const src = await io.read(path.join(here, "gull-higgsfield.glb"))
const prim = src.getRoot().listMeshes()[0].listPrimitives()[0]
const P = prim.getAttribute("POSITION")
const ix = prim.getIndices()

const ROOT = 0.07 // where the wings leave the body (half the body's width)
const STRETCH = 1.45 // a gull's wings are long and narrow

// 1) positions; drop the triangles of the hanging legs
const v = []
const pos = []
for (let i = 0; i < P.getCount(); i++) {
    P.getElement(i, v)
    pos.push(v[0], v[1], v[2])
}
const leg = (i) => pos[i * 3 + 1] < -0.042 && pos[i * 3] < 0.02 && Math.abs(pos[i * 3 + 2]) < 0.07
const tris = []
for (let t = 0; t < ix.getCount(); t += 3) {
    const a = ix.getScalar(t)
    const b = ix.getScalar(t + 1)
    const c = ix.getScalar(t + 2)
    if (leg(a) && leg(b) && leg(c)) continue
    tris.push(a, b, c)
}
// 2) draw out the wings
for (let i = 0; i < pos.length; i += 3) {
    const z = pos[i + 2]
    const s = Math.abs(z)
    if (s > ROOT) pos[i + 2] = Math.sign(z) * (ROOT + (s - ROOT) * STRETCH)
}
const g = new THREE.BufferGeometry()
g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3))
g.setIndex(tris)
g.computeVertexNormals()

// 3) paint it
const span = (0.5 - ROOT) * STRETCH + ROOT
let xmax = -1
for (let i = 0; i < pos.length; i += 3) xmax = Math.max(xmax, pos[i])
const C = {
    white: new THREE.Color("#f1f1ee"),
    grey: new THREE.Color("#8d97a0"),
    black: new THREE.Color("#18181a"),
    bill: new THREE.Color("#e9b934"),
    spot: new THREE.Color("#c8402c"),
}
const n = g.attributes.normal
const col = new Float32Array(pos.length)
const c = new THREE.Color()
const smooth = (a, b, x) => {
    const t = Math.min(1, Math.max(0, (x - a) / (b - a)))
    return t * t * (3 - 2 * t)
}
for (let i = 0; i < pos.length / 3; i++) {
    const x = pos[i * 3]
    const y = pos[i * 3 + 1]
    const z = pos[i * 3 + 2]
    const s = Math.abs(z) / span
    const up = n.getY(i)
    c.copy(C.white)
    // grey mantle: the upper side of the wings and the back between them
    const wingTop = smooth(0.06, 0.12, Math.abs(z)) * smooth(-0.1, 0.25, up)
    const back = smooth(0.02, 0.06, y) * smooth(-0.22, -0.12, x) * (1 - smooth(0.1, 0.18, x)) * smooth(0.2, 0.6, up)
    c.lerp(C.grey, Math.max(wingTop, back))
    // black tips, above and below
    c.lerp(C.black, smooth(0.78, 0.84, s))
    // the bill, with the red spot on the lower side
    const bill = smooth(xmax - 0.065, xmax - 0.05, x)
    c.lerp(C.bill, bill)
    c.lerp(C.spot, bill * smooth(xmax - 0.03, xmax - 0.02, x) * smooth(0.0, -0.4, up) * 0.8)
    col[i * 3] = c.r
    col[i * 3 + 1] = c.g
    col[i * 3 + 2] = c.b
}
g.setAttribute("color", new THREE.BufferAttribute(col, 3))

// 4) write it (plain float positions: the shader reads the span straight from them)
const doc = new Document()
const buffer = doc.createBuffer()
const mat = doc.createMaterial("gull").setRoughnessFactor(0.8).setMetallicFactor(0)
const p2 = doc
    .createPrimitive()
    .setMaterial(mat)
    .setIndices(doc.createAccessor().setType("SCALAR").setArray(new Uint16Array(g.index.array)).setBuffer(buffer))
    .setAttribute("POSITION", doc.createAccessor().setType("VEC3").setArray(new Float32Array(g.attributes.position.array)).setBuffer(buffer))
    .setAttribute("NORMAL", doc.createAccessor().setType("VEC3").setArray(new Float32Array(g.attributes.normal.array)).setBuffer(buffer))
    .setAttribute("COLOR_0", doc.createAccessor().setType("VEC3").setArray(col).setBuffer(buffer))
const scene = doc.createScene("gull")
scene.addChild(doc.createNode("gull").setMesh(doc.createMesh("gull").addPrimitive(p2)))
await MeshoptEncoder.ready
await doc.transform(weld(), prune(), meshopt({ encoder: MeshoptEncoder, level: "high" }))
await new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ "meshopt.encoder": MeshoptEncoder }).write(out, doc)
console.log("gull.glb", (fs.statSync(out).size / 1024).toFixed(0) + " KB", tris.length / 3 + " triangles", "span ±" + span.toFixed(3), "length", xmax.toFixed(3))
