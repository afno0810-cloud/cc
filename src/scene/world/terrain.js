import * as THREE from "three"
import { withAir } from "./air.js"

/* ================================================================
   The land around the harbour, made in code: Trondheim to the south
   (behind the boat on the home page), the open fjord to the north with
   the hills of Fosen far across, and the sun going down in the west.

   1 unit = 0.3 m, the same scale as Argus (about 6 units long).
   Angles are measured like Math.atan2(z, x), in degrees.
   ================================================================ */

// how far away the shore is (S) and how high the land gets (H), around the harbour
const SHORE = [
    [0, 3200, 260],
    [30, 6200, 520],
    [60, 14000, 1150],
    [90, 19000, 1500],
    [120, 16500, 1350],
    [150, 12000, 1250],
    [180, 9500, 1100],
    [210, 5600, 950],
    [240, 2300, 1350],
    [270, 1350, 1450],
    [300, 1450, 1050],
    [330, 2300, 420],
    [360, 3200, 260],
]
// Trondheim itself: low and flat along the shore, from here to here (degrees)
export const CITY = { from: 228, to: 322 }

function catmull(p0, p1, p2, p3, t) {
    const t2 = t * t
    const t3 = t2 * t
    return 0.5 * (2 * p1 + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3)
}
function shoreAt(deg) {
    deg = ((deg % 360) + 360) % 360
    let i = 0
    while (i < SHORE.length - 2 && SHORE[i + 1][0] <= deg) i++
    const a = SHORE[(i - 1 + SHORE.length - 1) % (SHORE.length - 1)]
    const b = SHORE[i]
    const c = SHORE[i + 1]
    const d = SHORE[(i + 2) % (SHORE.length - 1)]
    const t = (deg - b[0]) / (c[0] - b[0])
    return [catmull(a[1], b[1], c[1], d[1], t), catmull(a[2], b[2], c[2], d[2], t)]
}

// ---- noise ----
function hash2(x, y) {
    const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453
    return s - Math.floor(s)
}
function vnoise(x, y) {
    const xi = Math.floor(x)
    const yi = Math.floor(y)
    const xf = x - xi
    const yf = y - yi
    const u = xf * xf * (3 - 2 * xf)
    const v = yf * yf * (3 - 2 * yf)
    const a = hash2(xi, yi)
    const b = hash2(xi + 1, yi)
    const c = hash2(xi, yi + 1)
    const d = hash2(xi + 1, yi + 1)
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v
}
function fbm(x, y, oct = 6) {
    let s = 0
    let a = 0.5
    for (let i = 0; i < oct; i++) {
        s += a * vnoise(x, y)
        x = x * 2.02 + 17.3
        y = y * 2.02 - 9.1
        a *= 0.5
    }
    return s
}
function ridged(x, y, oct = 6) {
    let s = 0
    let a = 0.55
    for (let i = 0; i < oct; i++) {
        const n = 1 - Math.abs(vnoise(x, y) * 2 - 1)
        s += a * n * n
        x = x * 2.07 + 5.1
        y = y * 2.07 + 11.7
        a *= 0.5
    }
    return s
}
const smooth = (e0, e1, x) => {
    const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)))
    return t * t * (3 - 2 * t)
}

/* height of the land at x,z (negative = under water) */
export function landHeight(x, z) {
    const r = Math.hypot(x, z)
    const deg = (Math.atan2(z, x) * 180) / Math.PI
    let [S, Hm] = shoreAt(deg)
    // a ragged shoreline
    S *= 0.93 + fbm(x / 2600, z / 2600, 4) * 0.16
    const over = r - S
    if (over < 0) return Math.max(-60, over * 0.08) - 2
    const city = inCity(deg)
    const rise = smooth(0, S * 0.28 + 700, over)
    const hills = Hm * rise * (0.35 + 0.95 * ridged(x / 5200, z / 5200, 6)) * (0.7 + 0.5 * fbm(x / 9000, z / 9000, 3))
    const lip = (6 + fbm(x / 90, z / 90, 3) * 10) * (1 - city * 0.6)
    if (city > 0) {
        // the city: a low terrace by the water (quays are a few metres high), then the hills behind it
        const flat = 4 + over * 0.01 + fbm(x / 800, z / 800, 3) * 8
        const behind = smooth(1100, 2600, over)
        return lip + (flat + (hills - flat) * behind) * city + hills * (1 - city)
    }
    return lip + hills
}
function inCity(deg) {
    deg = ((deg % 360) + 360) % 360
    return smooth(CITY.from, CITY.from + 10, deg) * (1 - smooth(CITY.to - 10, CITY.to, deg))
}

export function createTerrain({ lowPower = false } = {}) {
    const sectors = lowPower ? 360 : 720
    const rings = lowPower ? 90 : 150
    const r0 = 700
    const r1 = 44000
    const growth = Math.pow(r1 / r0, 1 / (rings - 1))
    const pos = new Float32Array(sectors * rings * 3)
    const col = new Float32Array(sectors * rings * 3)
    const hs = new Float32Array(sectors * rings)
    for (let i = 0; i < rings; i++) {
        const r = r0 * Math.pow(growth, i)
        for (let j = 0; j < sectors; j++) {
            const a = (j / sectors) * Math.PI * 2
            const x = Math.cos(a) * r
            const z = Math.sin(a) * r
            const h = landHeight(x, z)
            const k = i * sectors + j
            pos[k * 3] = x
            pos[k * 3 + 1] = h
            pos[k * 3 + 2] = z
            hs[k] = h
        }
    }
    const idx = []
    for (let i = 0; i < rings - 1; i++) {
        for (let j = 0; j < sectors; j++) {
            const j1 = (j + 1) % sectors
            const a = i * sectors + j
            const b = i * sectors + j1
            const c = (i + 1) * sectors + j
            const d = (i + 1) * sectors + j1
            // skip quads that are all deep under water
            if (hs[a] < -1.5 && hs[b] < -1.5 && hs[c] < -1.5 && hs[d] < -1.5) continue
            idx.push(a, c, b, b, c, d)
        }
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3))
    geo.setIndex(idx)
    geo.computeVertexNormals()

    // colour from height, steepness and a bit of noise (linear albedo)
    const nrm = geo.attributes.normal.array
    const C = {
        rock: new THREE.Color(0.12, 0.115, 0.105),
        wetRock: new THREE.Color(0.05, 0.048, 0.045),
        weed: new THREE.Color(0.06, 0.05, 0.025),
        spruce: new THREE.Color(0.022, 0.046, 0.022),
        birch: new THREE.Color(0.07, 0.105, 0.034),
        field: new THREE.Color(0.13, 0.15, 0.05),
        bare: new THREE.Color(0.1, 0.095, 0.085),
        snow: new THREE.Color(0.62, 0.65, 0.7),
        town: new THREE.Color(0.11, 0.1, 0.095),
    }
    const c = new THREE.Color()
    for (let k = 0; k < hs.length; k++) {
        const x = pos[k * 3]
        const z = pos[k * 3 + 2]
        const h = hs[k]
        const up = nrm[k * 3 + 1]
        const n1 = fbm(x / 400, z / 400, 3)
        const deg = (Math.atan2(z, x) * 180) / Math.PI
        c.copy(C.spruce).lerp(C.birch, smooth(0.35, 0.75, n1))
        // fields and meadows on gentle slopes, low down
        if (up > 0.96 && h < 300) c.lerp(C.field, smooth(0.45, 0.7, fbm(x / 700, z / 700, 3)) * 0.8)
        // bare rock where it is steep, and high up
        c.lerp(C.rock, smooth(0.82, 0.62, up))
        c.lerp(C.bare, smooth(900, 1300, h) * 0.8)
        c.lerp(C.snow, smooth(1350, 1650, h + n1 * 180) * 0.9)
        // the shore: wet rock and seaweed at the waterline
        c.lerp(C.wetRock, smooth(14, 4, h))
        if (h < 6) c.lerp(C.weed, 0.4)
        // the city
        const city = inCity(deg) * smooth(1400, 900, Math.hypot(x, z) - shoreAt(deg)[0] * 0.95) * smooth(90, 40, h)
        c.lerp(C.town, city * 0.6)
        col[k * 3] = c.r
        col[k * 3 + 1] = c.g
        col[k * 3 + 2] = c.b
    }
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3))
    const mat = withAir(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.96, metalness: 0 }), { terrain: true })
    const land = new THREE.Mesh(geo, mat)
    land.frustumCulled = false

    const group = new THREE.Group()
    group.add(land)
    group.add(createTown({ lowPower }))
    group.add(createQuay())
    group.add(createWharfRow({ lowPower }))
    return group
}

/* ---- Trondheim: houses and blocks along the southern shore ---- */
function houseGeometry() {
    // a unit box with a pitched roof on top; aRoof = 1 on the roof
    const box = new THREE.BoxGeometry(1, 1, 1).toNonIndexed()
    box.translate(0, 0.5, 0)
    const roofShape = new THREE.BufferGeometry()
    const v = [
        // two slopes
        -0.5, 1, -0.5, -0.5, 1, 0.5, 0, 1.35, 0.5, -0.5, 1, -0.5, 0, 1.35, 0.5, 0, 1.35, -0.5,
        0.5, 1, 0.5, 0.5, 1, -0.5, 0, 1.35, -0.5, 0.5, 1, 0.5, 0, 1.35, -0.5, 0, 1.35, 0.5,
        // gables
        -0.5, 1, 0.5, 0.5, 1, 0.5, 0, 1.35, 0.5, 0.5, 1, -0.5, -0.5, 1, -0.5, 0, 1.35, -0.5,
    ]
    roofShape.setAttribute("position", new THREE.Float32BufferAttribute(v, 3))
    roofShape.computeVertexNormals()
    const merged = mergeNonIndexed([box, roofShape], [0, 1])
    return merged
}
function mergeNonIndexed(geos, roofFlags) {
    let n = 0
    for (const g of geos) n += g.attributes.position.count
    const pos = new Float32Array(n * 3)
    const nor = new Float32Array(n * 3)
    const roof = new Float32Array(n)
    let o = 0
    geos.forEach((g, i) => {
        const c = g.attributes.position.count
        pos.set(g.attributes.position.array, o * 3)
        nor.set(g.attributes.normal.array, o * 3)
        roof.fill(roofFlags[i], o, o + c)
        o += c
    })
    // the top face of the box is under the roof: count it as roof
    const g = new THREE.BufferGeometry()
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3))
    g.setAttribute("normal", new THREE.BufferAttribute(nor, 3))
    g.setAttribute("aRoof", new THREE.BufferAttribute(roof, 1))
    return g
}

function createTown({ lowPower }) {
    const count = lowPower ? 700 : 1600
    const geo = houseGeometry()
    const mat = withAir(new THREE.MeshStandardMaterial({ roughness: 0.85, metalness: 0 }), { windows: true })
    const mesh = new THREE.InstancedMesh(geo, mat, count)
    // painted wooden houses and light stone blocks, as in Trondheim (sRGB)
    const facades = ["#e9e4d8", "#d9d2c2", "#c9b38a", "#b8442e", "#8f2f25", "#d6a640", "#e2c76e", "#8fa0a8", "#6f7f76", "#efe9dd", "#c6c0b4", "#a35a3a"].map((h) => new THREE.Color(h))
    const m = new THREE.Matrix4()
    const q = new THREE.Quaternion()
    const s = new THREE.Vector3()
    const p = new THREE.Vector3()
    let placed = 0
    let tries = 0
    let seed = 3
    const rnd = () => {
        seed = (seed * 16807) % 2147483647
        return seed / 2147483647
    }
    while (placed < count && tries < count * 20) {
        tries++
        const deg = CITY.from + 8 + rnd() * (CITY.to - CITY.from - 16)
        const S = shoreAt(deg)[0]
        const over = 90 + Math.pow(rnd(), 2.1) * 1500
        const a = (deg * Math.PI) / 180
        const x = Math.cos(a) * (S + over)
        const z = Math.sin(a) * (S + over)
        const h = landHeight(x, z)
        if (h < 4) continue
        const central = over < 1100
        // blocks near the water, houses further up
        const w = central ? 22 + rnd() * 30 : 14 + rnd() * 12
        const d = central ? 22 + rnd() * 30 : 12 + rnd() * 10
        const ht = central ? 18 + Math.pow(rnd(), 2.5) * 60 : 12 + rnd() * 10
        // streets roughly follow the shore
        q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -a + (rnd() < 0.5 ? 0 : Math.PI / 2) + (rnd() - 0.5) * 0.3)
        s.set(w, ht, d)
        p.set(x, h - 2, z)
        m.compose(p, q, s)
        mesh.setMatrixAt(placed, m)
        mesh.setColorAt(placed, facades[Math.floor(rnd() * facades.length)])
        placed++
    }
    mesh.count = placed
    mesh.frustumCulled = false
    return mesh
}

/* Things the boat cannot drive through, besides the land itself:
   oriented boxes { x, z, hx, hz, rot } (half sizes along the box's own x and z;
   rot turns it like rotation.y does). Filled when the terrain is made. */
export const COLLIDERS = []

/* where the water meets the land along a direction, found by stepping out */
function shoreRadius(deg) {
    const a = (deg * Math.PI) / 180
    const c = Math.cos(a)
    const sn = Math.sin(a)
    let r = shoreAt(deg)[0] * 0.8
    while (r < 30000 && landHeight(c * r, sn * r) < 0) r += 4
    return r
}

/* ---- the old wharves: a long row of painted wooden warehouses on piles ----
   Gable ends face the water, as along Bryggen in Trondheim: oxblood red,
   ochre, yellow, white, green and grey-blue, with dark roofs, windows in
   rows, and many of them lit at night. */
const WHARF_COLOURS = ["#7d2a22", "#a2382a", "#c98d2c", "#dcb24a", "#c96a2c", "#ece6d6", "#f2efe8", "#4d6b4f", "#6f8494", "#e3cf86", "#9c3c2c", "#d7c9a6"]
const ROOF_COLOURS = ["#2a2a2c", "#33302e", "#4a2a24", "#2e3236"]

function createWharfRow({ lowPower }) {
    const pos = []
    const nor = []
    const col = []
    const roof = []
    const fac = []
    let seed = 11
    const rnd = () => {
        seed = (seed * 16807) % 2147483647
        return seed / 2147483647
    }
    const c3 = new THREE.Color()
    // one quad (two triangles) with a normal, a colour, roof flag and facade coordinates
    const quad = (a, b, c, d, n, colr, isRoof, fa, fb, fc, fd) => {
        for (const [p, f] of [
            [a, fa],
            [b, fb],
            [c, fc],
            [a, fa],
            [c, fc],
            [d, fd],
        ]) {
            pos.push(p.x, p.y, p.z)
            nor.push(n.x, n.y, n.z)
            col.push(colr.r, colr.g, colr.b)
            roof.push(isRoof)
            fac.push(f[0], f[1])
        }
    }
    const tri = (a, b, c, n, colr, fa, fb, fc) => {
        for (const [p, f] of [
            [a, fa],
            [b, fb],
            [c, fc],
        ]) {
            pos.push(p.x, p.y, p.z)
            nor.push(n.x, n.y, n.z)
            col.push(colr.r, colr.g, colr.b)
            roof.push(0)
            fac.push(f[0], f[1])
        }
    }
    const V = (x, y, z) => new THREE.Vector3(x, y, z)
    const m = new THREE.Matrix4()
    const nm = new THREE.Matrix3()

    // a house in its own frame: x across the front, y up, +z towards the water (the gable)
    function house(w, d, h, floorY, colour, roofColour) {
        const start = pos.length / 3
        const x0 = -w / 2
        const x1 = w / 2
        const z0 = -d / 2
        const z1 = d / 2
        const y0 = floorY
        const y1 = floorY + h
        const ridge = y1 + w * 0.62
        const over = 1.6 // the roof reaches a little past the walls
        const cc = c3.set(colour).clone()
        const rc = new THREE.Color(roofColour)
        // walls: front gable (+z), back (-z), two long sides
        quad(V(x0, y0, z1), V(x1, y0, z1), V(x1, y1, z1), V(x0, y1, z1), V(0, 0, 1), cc, 0, [0, 0], [w, 0], [w, h], [0, h])
        tri(V(x0, y1, z1), V(x1, y1, z1), V(0, ridge, z1), V(0, 0, 1), cc, [0, h], [w, h], [w / 2, ridge - y0])
        quad(V(x1, y0, z0), V(x0, y0, z0), V(x0, y1, z0), V(x1, y1, z0), V(0, 0, -1), cc, 0, [0, 0], [w, 0], [w, h], [0, h])
        tri(V(x1, y1, z0), V(x0, y1, z0), V(0, ridge, z0), V(0, 0, -1), cc, [0, h], [w, h], [w / 2, ridge - y0])
        quad(V(x1, y0, z1), V(x1, y0, z0), V(x1, y1, z0), V(x1, y1, z1), V(1, 0, 0), cc, 0, [0, 0], [d, 0], [d, h], [0, h])
        quad(V(x0, y0, z0), V(x0, y0, z1), V(x0, y1, z1), V(x0, y1, z0), V(-1, 0, 0), cc, 0, [0, 0], [d, 0], [d, h], [0, h])
        // the roof: two slopes, reaching past the walls
        const sl = new THREE.Vector3(w / 2, ridge - y1, 0).normalize()
        const nR = V(sl.y, sl.x, 0)
        const nL = V(-sl.y, sl.x, 0)
        const eave = y1 - over * ((ridge - y1) / (w / 2)) // same slope as the gable
        quad(V(0, ridge, z1 + over), V(x1 + over, eave, z1 + over), V(x1 + over, eave, z0 - over), V(0, ridge, z0 - over), nR, rc, 1, [0, 0], [0, 0], [0, 0], [0, 0])
        quad(V(x0 - over, eave, z1 + over), V(0, ridge, z1 + over), V(0, ridge, z0 - over), V(x0 - over, eave, z0 - over), nL, rc, 1, [0, 0], [0, 0], [0, 0], [0, 0])
        // the floor under the house, seen from the water
        quad(V(x0, y0, z0), V(x1, y0, z0), V(x1, y0, z1), V(x0, y0, z1), V(0, -1, 0), c3.setRGB(0.03, 0.025, 0.02).clone(), 0, [0, 0], [0, 0], [0, 0], [0, 0])
        // piles under the front half, standing in the water
        const pile = new THREE.Color(0.035, 0.028, 0.022)
        for (let px = x0 + 1.5; px <= x1 - 1.4; px += 5.2) {
            for (let pz = z1 - 1.5; pz > z1 - d * 0.55; pz -= 7) {
                const s2 = 0.75
                const yb = -4
                quad(V(px - s2, yb, pz + s2), V(px + s2, yb, pz + s2), V(px + s2, y0, pz + s2), V(px - s2, y0, pz + s2), V(0, 0, 1), pile, 0, [0, 0], [0, 0], [0, 0], [0, 0])
                quad(V(px + s2, yb, pz - s2), V(px - s2, yb, pz - s2), V(px - s2, y0, pz - s2), V(px + s2, y0, pz - s2), V(0, 0, -1), pile, 0, [0, 0], [0, 0], [0, 0], [0, 0])
                quad(V(px + s2, yb, pz + s2), V(px + s2, yb, pz - s2), V(px + s2, y0, pz - s2), V(px + s2, y0, pz + s2), V(1, 0, 0), pile, 0, [0, 0], [0, 0], [0, 0], [0, 0])
                quad(V(px - s2, yb, pz - s2), V(px - s2, yb, pz + s2), V(px - s2, y0, pz + s2), V(px - s2, y0, pz - s2), V(-1, 0, 0), pile, 0, [0, 0], [0, 0], [0, 0], [0, 0])
            }
        }
        return start
    }
    // place a house: move what was just added into the world
    function place(start, x, z, yaw) {
        m.makeRotationY(yaw).setPosition(x, 0, z)
        nm.getNormalMatrix(m)
        const v = new THREE.Vector3()
        for (let i = start; i < pos.length / 3; i++) {
            v.set(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]).applyMatrix4(m)
            pos[i * 3] = v.x
            pos[i * 3 + 1] = v.y
            pos[i * 3 + 2] = v.z
            v.set(nor[i * 3], nor[i * 3 + 1], nor[i * 3 + 2]).applyMatrix3(nm).normalize()
            nor[i * 3] = v.x
            nor[i * 3 + 1] = v.y
            nor[i * 3 + 2] = v.z
        }
    }

    // two stretches of waterfront, either side of the quay with the cranes
    const stretches = lowPower ? [[229, 249]] : [[229, 249], [303, 318]]
    for (const [from, to] of stretches) {
        let deg = from
        while (deg < to) {
            const w = 20 + rnd() * 10
            const d = 46 + rnd() * 26
            const h = 26 + Math.floor(rnd() * 3) * 7 + rnd() * 3
            const r = shoreRadius(deg)
            // the gable stands a little out over the water, some houses further out than others
            const front = r - 10 - rnd() * 8
            const cz = front + d / 2 // the house reaches back onto the land
            const a = (deg * Math.PI) / 180
            const x = Math.cos(a) * cz
            const z = Math.sin(a) * cz
            const yaw = Math.atan2(-x, -z) + (rnd() - 0.5) * 0.06
            const colour = WHARF_COLOURS[Math.floor(rnd() * WHARF_COLOURS.length)]
            const start = house(w, d, h, 6.5, colour, ROOF_COLOURS[Math.floor(rnd() * ROOF_COLOURS.length)])
            place(start, x, z, yaw)
            COLLIDERS.push({ x, z, hx: w / 2 + 0.5, hz: d / 2 + 0.5, rot: yaw })
            // the next house, with a narrow gap now and then
            deg += ((w + (rnd() < 0.25 ? 3 + rnd() * 5 : 0.4)) / cz) * (180 / Math.PI)
        }
    }

    const g = new THREE.BufferGeometry()
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3))
    g.setAttribute("normal", new THREE.Float32BufferAttribute(nor, 3))
    g.setAttribute("color", new THREE.Float32BufferAttribute(col, 3))
    g.setAttribute("aRoof", new THREE.Float32BufferAttribute(roof, 1))
    g.setAttribute("aFac", new THREE.Float32BufferAttribute(fac, 2))
    const mat = withAir(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.82, metalness: 0 }), { windows: "facade" })
    const mesh = new THREE.Mesh(g, mat)
    mesh.frustumCulled = false
    return mesh
}

/* the harbour quay with cranes and silos, like the one Argus launches from */
function createQuay() {
    const g = new THREE.Group()
    const concrete = withAir(new THREE.MeshStandardMaterial({ color: new THREE.Color(0.28, 0.27, 0.25), roughness: 0.9 }))
    const steelBlue = withAir(new THREE.MeshStandardMaterial({ color: new THREE.Color(0.08, 0.14, 0.22), roughness: 0.6, metalness: 0.3 }))
    const red = withAir(new THREE.MeshStandardMaterial({ color: new THREE.Color(0.35, 0.05, 0.03), roughness: 0.6, metalness: 0.3 }))
    const silo = withAir(new THREE.MeshStandardMaterial({ color: new THREE.Color(0.45, 0.44, 0.41), roughness: 0.85 }))

    // a long quay wall along the shore behind the boat
    for (let deg = 250; deg <= 300; deg += 1.2) {
        const S = shoreAt(deg)[0] * 0.95
        const a = (deg * Math.PI) / 180
        const b = new THREE.Mesh(new THREE.BoxGeometry(60, 18, 40), concrete)
        b.position.set(Math.cos(a) * S, 4, Math.sin(a) * S)
        b.rotation.y = -a
        g.add(b)
        COLLIDERS.push({ x: b.position.x, z: b.position.z, hx: 30, hz: 20, rot: -a })
    }
    // cranes
    const crane = (deg, mat, rot) => {
        const S = shoreAt(deg)[0] * 0.95 + 30
        const a = (deg * Math.PI) / 180
        const c = new THREE.Group()
        const legs = new THREE.BoxGeometry(4, 70, 4)
        for (const [lx, lz] of [[-12, -12], [12, -12], [-12, 12], [12, 12]]) {
            const l = new THREE.Mesh(legs, mat)
            l.position.set(lx, 35, lz)
            c.add(l)
        }
        const cab = new THREE.Mesh(new THREE.BoxGeometry(30, 14, 22), mat)
        cab.position.y = 77
        const boom = new THREE.Mesh(new THREE.BoxGeometry(150, 4, 4), mat)
        boom.position.set(60, 100, 0)
        boom.rotation.z = 0.32
        const back = new THREE.Mesh(new THREE.BoxGeometry(40, 10, 10), concrete)
        back.position.set(-22, 86, 0)
        c.add(cab, boom, back)
        c.position.set(Math.cos(a) * S, 8, Math.sin(a) * S)
        c.rotation.y = rot
        g.add(c)
    }
    crane(262, steelBlue, 1.2)
    crane(268, red, 2.1)
    crane(291, steelBlue, 0.4)
    // silos
    for (let i = 0; i < 5; i++) {
        const deg = 300 + i * 1.1
        const S = shoreAt(deg)[0] * 0.95 + 90
        const a = (deg * Math.PI) / 180
        const s = new THREE.Mesh(new THREE.CylinderGeometry(16, 16, 150, 24), silo)
        s.position.set(Math.cos(a) * S, 80, Math.sin(a) * S)
        g.add(s)
    }
    return g
}

/* shore lights along the city for the night */
export function createShoreLights({ lowPower = false } = {}) {
    const n = lowPower ? 250 : 600
    const pos = new Float32Array(n * 3)
    const seed = new Float32Array(n)
    for (let i = 0; i < n; i++) {
        const deg = CITY.from + 4 + Math.random() * (CITY.to - CITY.from - 8)
        const S = shoreAt(deg)[0]
        const a = (deg * Math.PI) / 180
        const r = S + Math.random() * 1800
        const x = Math.cos(a) * r
        const z = Math.sin(a) * r
        pos.set([x, Math.max(6, landHeight(x, z)) + 10 + Math.random() * 20, z], i * 3)
        seed[i] = Math.random()
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3))
    g.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1))
    const m = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: { uNight: { value: 0 }, uPx: { value: 1 } },
        vertexShader: /* glsl */ `
            attribute float aSeed; uniform float uPx; varying float vA; varying float vS;
            void main() {
                vS = aSeed;
                vec4 mv = modelViewMatrix * vec4(position, 1.0);
                vA = 1.0;
                gl_PointSize = (1.5 + aSeed * 2.0) * uPx;
                gl_Position = projectionMatrix * mv;
            }
        `,
        fragmentShader: /* glsl */ `
            uniform float uNight; varying float vA; varying float vS;
            void main() {
                float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard;
                vec3 c = mix(vec3(1.0, 0.72, 0.38), vec3(0.85, 0.92, 1.0), step(0.8, vS));
                gl_FragColor = vec4(c * (1.0 - d * 2.0) * uNight * 3.0, 1.0);
            }
        `,
    })
    const p = new THREE.Points(g, m)
    p.frustumCulled = false
    return p
}

export { shoreAt }
