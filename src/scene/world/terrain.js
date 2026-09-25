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
        spruce: new THREE.Color(0.018, 0.034, 0.018),
        birch: new THREE.Color(0.05, 0.072, 0.028),
        field: new THREE.Color(0.1, 0.11, 0.045),
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
        const city = inCity(deg) * smooth(3000, 2200, Math.hypot(x, z) - shoreAt(deg)[0] * 0.95)
        c.lerp(C.town, city * 0.7)
        col[k * 3] = c.r
        col[k * 3 + 1] = c.g
        col[k * 3 + 2] = c.b
    }
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3))
    const mat = withAir(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.96, metalness: 0 }))
    const land = new THREE.Mesh(geo, mat)
    land.frustumCulled = false

    const group = new THREE.Group()
    group.add(land)
    group.add(createTown({ lowPower }))
    group.add(createQuay())
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
    const facades = [
        [0.62, 0.6, 0.56],
        [0.55, 0.36, 0.13],
        [0.32, 0.075, 0.045],
        [0.36, 0.36, 0.35],
        [0.62, 0.52, 0.3],
        [0.12, 0.12, 0.13],
        [0.38, 0.42, 0.46],
        [0.58, 0.58, 0.55],
    ].map((a) => new THREE.Color(a[0], a[1], a[2]))
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
        const over = 60 + Math.pow(rnd(), 1.6) * 2600
        const a = (deg * Math.PI) / 180
        const x = Math.cos(a) * (S + over)
        const z = Math.sin(a) * (S + over)
        const h = landHeight(x, z)
        if (h < 4) continue
        const central = over < 1100
        // blocks near the water, houses further up
        const w = central ? 26 + rnd() * 40 : 16 + rnd() * 16
        const d = central ? 26 + rnd() * 40 : 14 + rnd() * 12
        const ht = central ? 22 + Math.pow(rnd(), 2) * 90 : 14 + rnd() * 12
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
