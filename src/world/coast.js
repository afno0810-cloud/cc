import * as THREE from "three"
import { COLORS } from "./sea.js"

/* ================================================================
   Norway as a 3D point cloud. The coastline is the same drawing as on the
   old About page (real latitude / longitude, so Tromsø and Kirkenes sit at
   the same height). Land is filled inwards from the coast with mountains,
   and a route along the coast lights up from Kristiansand to Kirkenes.
   ================================================================ */

// Coast in the old 420 × 560 drawing: start point + cubic segments
const START = [70.8, 518.7]
const SEGS = [
    [65.0, 513.8, 43.0, 502.6, 36.2, 489.2],
    [29.4, 475.8, 28.9, 459.1, 30.0, 438.1],
    [31.1, 417.1, 29.7, 381.4, 42.6, 363.2],
    [55.5, 344.9, 86.4, 357.5, 107.3, 328.6],
    [128.2, 299.7, 146.4, 227.3, 168.1, 190.0],
    [189.8, 152.7, 208.6, 128.0, 237.5, 104.7],
    [266.4, 81.4, 313.2, 50.5, 341.3, 50.0],
    [369.4, 49.5, 395.4, 93.2, 406.2, 101.8],
]

export const CITIES = [
    { name: "Kristiansand", p: [70.8, 518.7] },
    { name: "Stavanger", p: [36.2, 489.2] },
    { name: "Bergen", p: [30, 438.1] },
    { name: "Ålesund", p: [42.6, 363.2] },
    { name: "Trondheim", p: [107.3, 328.6], home: true },
    { name: "Bodø", p: [168.1, 190] },
    { name: "Tromsø", p: [237.5, 104.7] },
    { name: "Nordkapp", p: [341.3, 50] },
    { name: "Kirkenes", p: [406.2, 101.8] },
]

export const MAP = { cx: 95, cz: -10, s: 0.5 }
export const toWorld = (sx, sy, y = 0) => new THREE.Vector3((sx - 210) * MAP.s + MAP.cx, y, (sy - 300) * MAP.s + MAP.cz)

function sampleCoast(n) {
    const out = []
    let p0 = START
    const per = Math.ceil(n / SEGS.length)
    for (const s of SEGS) {
        const c = new THREE.CubicBezierCurve(new THREE.Vector2(...p0), new THREE.Vector2(s[0], s[1]), new THREE.Vector2(s[2], s[3]), new THREE.Vector2(s[4], s[5]))
        const pts = c.getSpacedPoints(per)
        pts.pop()
        out.push(...pts)
        p0 = [s[4], s[5]]
    }
    out.push(new THREE.Vector2(...p0))
    return out
}

// land width (in drawing px) along the coast: wide in the south, thin in the north
function landWidth(t) {
    const k = [
        [0, 70], [0.2, 85], [0.35, 64], [0.45, 42], [0.58, 20], [0.68, 16], [0.78, 26], [0.9, 30], [1, 22],
    ]
    for (let i = 1; i < k.length; i++) {
        if (t <= k[i][0]) {
            const a = k[i - 1]
            const b = k[i]
            const f = (t - a[0]) / (b[0] - a[0])
            return a[1] + (b[1] - a[1]) * (f * f * (3 - 2 * f))
        }
    }
    return 22
}

const hash = (x, y) => {
    const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453
    return s - Math.floor(s)
}
function noise(x, y) {
    const ix = Math.floor(x)
    const iy = Math.floor(y)
    const fx = x - ix
    const fy = y - iy
    const ux = fx * fx * (3 - 2 * fx)
    const uy = fy * fy * (3 - 2 * fy)
    const a = hash(ix, iy)
    const b = hash(ix + 1, iy)
    const c = hash(ix, iy + 1)
    const d = hash(ix + 1, iy + 1)
    return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy
}

export function createCoast(density = 1) {
    const group = new THREE.Group()
    const coast = sampleCoast(Math.round(420 * density))

    // normals pointing inland (right-hand side when walking from Kristiansand)
    const normals = coast.map((p, i) => {
        const a = coast[Math.max(0, i - 3)]
        const b = coast[Math.min(coast.length - 1, i + 3)]
        const d = new THREE.Vector2(b.x - a.x, b.y - a.y).normalize()
        return new THREE.Vector2(-d.y, d.x)
    })
    // smooth the normals so the land band does not fold over itself
    for (let pass = 0; pass < 4; pass++) {
        for (let i = 1; i < normals.length - 1; i++) normals[i] = normals[i - 1].clone().add(normals[i]).add(normals[i + 1]).normalize()
    }

    // --- land ---
    const pos = []
    const hgt = []
    const across = Math.round(22 * density)
    for (let i = 0; i < coast.length; i++) {
        const t = i / (coast.length - 1)
        const W = landWidth(t)
        for (let k = 0; k < across; k++) {
            const f = (k + Math.random() * 0.9) / across
            const jitter = (Math.random() - 0.5) * 3
            const sx = coast[i].x + normals[i].x * W * f + jitter
            const sy = coast[i].y + normals[i].y * W * f + jitter
            const n = noise(sx * 0.06, sy * 0.06) * 0.7 + noise(sx * 0.17, sy * 0.17) * 0.3
            const ridge = Math.sin(Math.PI * Math.min(1, f * 1.15))
            const h = (0.3 + n * 7.5) * ridge * (0.55 + 0.45 * Math.min(1, W / 50))
            const w = toWorld(sx, sy, h)
            pos.push(w.x, w.y, w.z)
            hgt.push(h / 7)
        }
    }
    const landGeo = new THREE.BufferGeometry()
    landGeo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3))
    landGeo.setAttribute("aH", new THREE.Float32BufferAttribute(hgt, 1))
    const landMat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: { uOpacity: { value: 0 }, uPx: { value: 1 }, uLav: { value: COLORS.lavender }, uVio: { value: COLORS.violet }, uReveal: { value: 1 } },
        vertexShader: /* glsl */ `
            attribute float aH; uniform float uPx; varying float vH;
            void main(){ vH = aH; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = uPx * (1.4 + aH * 1.6) * (150.0 / -mv.z); gl_Position = projectionMatrix * mv; }
        `,
        fragmentShader: /* glsl */ `
            uniform float uOpacity; uniform vec3 uLav; uniform vec3 uVio; varying float vH;
            void main(){ float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard; vec3 c = mix(uVio, uLav, clamp(vH, 0.0, 1.0)); gl_FragColor = vec4(c, (0.35 + vH * 0.5) * uOpacity * (1.0 - d * 1.8)); }
        `,
    })
    const land = new THREE.Points(landGeo, landMat)
    land.frustumCulled = false
    group.add(land)

    // --- coastline + route (u = 0 at Kristiansand, 1 at Kirkenes) ---
    const makeLine = (offset, count) => {
        const lp = []
        const lu = []
        for (let i = 0; i < count; i++) {
            const t = i / (count - 1)
            const j = Math.min(coast.length - 1, Math.round(t * (coast.length - 1)))
            const w = toWorld(coast[j].x - normals[j].x * offset, coast[j].y - normals[j].y * offset, 0.3)
            lp.push(w.x, w.y, w.z)
            lu.push(t)
        }
        const g = new THREE.BufferGeometry()
        g.setAttribute("position", new THREE.Float32BufferAttribute(lp, 3))
        g.setAttribute("aU", new THREE.Float32BufferAttribute(lu, 1))
        return g
    }
    const lineMat = (route) =>
        new THREE.ShaderMaterial({
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            uniforms: { uOpacity: { value: 0 }, uPx: { value: 1 }, uFrom: { value: 0 }, uTo: { value: route ? 0 : 1 }, uTime: { value: 0 }, uLav: { value: COLORS.lavender }, uYel: { value: COLORS.cardinal } },
            vertexShader: /* glsl */ `
                attribute float aU; uniform float uPx; varying float vU;
                void main(){ vU = aU; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = uPx * ${route ? "3.4" : "2.0"} * (150.0 / -mv.z); gl_Position = projectionMatrix * mv; }
            `,
            fragmentShader: /* glsl */ `
                uniform float uOpacity; uniform float uFrom; uniform float uTo; uniform float uTime; uniform vec3 uLav; uniform vec3 uYel; varying float vU;
                void main(){
                    float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard;
                    float on = step(uFrom, vU) * step(vU, uTo);
                    ${
                        route
                            ? `float head = smoothstep(0.02, 0.0, abs(vU - uTo)) + smoothstep(0.02, 0.0, abs(vU - uFrom));
                    float pulse = 0.6 + 0.4 * sin(vU * 300.0 - uTime * 6.0);
                    gl_FragColor = vec4(mix(uYel, vec3(1.0), head), (on * pulse + head) * uOpacity * (1.0 - d * 1.7));`
                            : `gl_FragColor = vec4(uLav, 0.8 * uOpacity * (1.0 - d * 1.8));`
                    }
                }
            `,
        })
    const coastLine = new THREE.Points(makeLine(0, 1400), lineMat(false))
    const route = new THREE.Points(makeLine(6, 1400), lineMat(true))
    coastLine.frustumCulled = route.frustumCulled = false
    group.add(coastLine, route)

    // --- city pins ---
    const pins = []
    for (const c of CITIES) {
        const w = toWorld(c.p[0], c.p[1], 0)
        const h = c.home ? 9 : 3.5
        const geo = new THREE.CylinderGeometry(0.12, 0.12, h, 6)
        geo.translate(0, h / 2, 0)
        const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: c.home ? COLORS.cardinal : COLORS.lavender, transparent: true, opacity: 0 }))
        m.position.copy(w)
        group.add(m)
        let ring = null
        if (c.home) {
            const rg = new THREE.RingGeometry(1.2, 1.45, 48)
            rg.rotateX(-Math.PI / 2)
            ring = new THREE.Mesh(rg, new THREE.MeshBasicMaterial({ color: COLORS.cardinal, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false }))
            ring.position.copy(w).setY(0.4)
            group.add(ring)
        }
        pins.push({ city: c, mesh: m, ring, top: w.clone().setY(h + 1) })
    }

    // u along the route for each city (nearest sample)
    const cityU = CITIES.map((c) => {
        let best = 0
        let bd = Infinity
        coast.forEach((p, i) => {
            const d = (p.x - c.p[0]) ** 2 + (p.y - c.p[1]) ** 2
            if (d < bd) {
                bd = d
                best = i
            }
        })
        return best / (coast.length - 1)
    })

    const mats = [landMat, coastLine.material, route.material]
    return {
        group,
        pins,
        cityU,
        routeMat: route.material,
        setOpacity(o) {
            group.visible = o > 0.01
            for (const m of mats) m.uniforms.uOpacity.value = o
            for (const p of pins) {
                p.mesh.material.opacity = o * 0.9
                if (p.ring) p.ring.material.opacity = o * 0.8
            }
        },
        setPx(px) {
            for (const m of mats) m.uniforms.uPx.value = px
        },
    }
}
