import * as THREE from "three"
import { COLORS } from "./sea.js"

/* ================================================================
   A Njord-style course in the harbour, laid out along +x from the boat.
   A · gates of red (port) and green (starboard) buoys
   B · yellow cardinal marks to find the way past
   C · the Otter crossing from starboard, Argus gives way astern of it
   D · the dock with an AR tag on the right berth
   1 scene unit = 0.3 m, so Argus (6 units long) is about 1.8 m.
   ================================================================ */

export const M_PER_UNIT = 0.3

const PORT = new THREE.Color("#e25a4f")
const STBD = new THREE.Color("#45c07f")
const YELLOW = COLORS.cardinal
const BLACK = new THREE.Color("#141018")

const WAYPOINTS = [
    [-8, 0], [0, 0], [10, 0], [20, 0], [28, 5], [36, 8], [44, 3], [52, -4], [61, -7], [70, -9],
    [79, -3], [88, 3], [96, -3], [104, -8], [113, -4], [122, 0], [129, 5], [136, 8], [144, 5],
    [152, 1], [161, 2], [169, 4], [175, 4], [177.5, 4],
]

export function createCourse() {
    const group = new THREE.Group()
    const floaters = [] // things that ride the waves: { obj, x, z, lift }
    const targets = [] // things the boat can detect: { obj, kind, color, radius }

    const curve = new THREE.CatmullRomCurve3(
        WAYPOINTS.map(([x, z]) => new THREE.Vector3(x, 0, z)),
        false,
        "centripetal"
    )
    curve.arcLengthDivisions = 800

    const mat = (c, e = 0.25) => new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: e, metalness: 0.2, roughness: 0.55, transparent: true })
    const edge = (geo, c) => new THREE.LineSegments(new THREE.EdgesGeometry(geo, 30), new THREE.LineBasicMaterial({ color: c, transparent: true, opacity: 0.8 }))

    function lateral(x, z, port) {
        const g = new THREE.Group()
        const c = port ? PORT : STBD
        const float = new THREE.CylinderGeometry(0.75, 0.9, 0.7, 20)
        const body = new THREE.Mesh(float, mat(c))
        body.add(edge(float, c))
        body.position.y = 0.2
        const topGeo = port ? new THREE.CylinderGeometry(0.4, 0.4, 0.9, 16) : new THREE.ConeGeometry(0.5, 1.0, 16)
        const top = new THREE.Mesh(topGeo, mat(c, 0.45))
        top.position.y = 1.05
        g.add(body, top)
        g.position.set(x, 0, z)
        group.add(g)
        floaters.push({ obj: g, x, z, lift: 0 })
        targets.push({ obj: g, kind: port ? "Buoy · port" : "Buoy · stbd", color: port ? "#e25a4f" : "#45c07f", radius: 1.6, h: 0.8 })
    }

    function cardinal(x, z) {
        const g = new THREE.Group()
        const pillarA = new THREE.CylinderGeometry(0.55, 0.7, 1.0, 16)
        const pillarB = new THREE.CylinderGeometry(0.45, 0.55, 1.0, 16)
        const a = new THREE.Mesh(pillarA, mat(BLACK, 0))
        a.add(edge(pillarA, YELLOW))
        a.position.y = 0.3
        const b = new THREE.Mesh(pillarB, mat(YELLOW, 0.45))
        b.position.y = 1.3
        const cone = new THREE.ConeGeometry(0.35, 0.5, 14)
        const t1 = new THREE.Mesh(cone, mat(BLACK, 0))
        t1.add(edge(cone, YELLOW))
        t1.position.y = 2.2
        const t2 = t1.clone()
        t2.position.y = 2.75
        g.add(a, b, t1, t2)
        g.position.set(x, 0, z)
        group.add(g)
        floaters.push({ obj: g, x, z, lift: 0 })
        targets.push({ obj: g, kind: "Cardinal mark", color: "#f2c230", radius: 1.9, h: 1.4 })
    }

    // A · three gates, red to port (-z) and green to starboard (+z)
    for (const [x, z] of [[20, 0], [36, 8], [52, -4]]) {
        lateral(x, z - 4, true)
        lateral(x, z + 4, false)
    }
    // B · cardinal marks
    for (const [x, z] of [[70, -2], [88, 10], [104, -1]]) cardinal(x, z)

    // C · the Otter, a small survey vessel that crosses the course
    const otter = new THREE.Group()
    const hullGeo = new THREE.BoxGeometry(3.4, 0.7, 1.5)
    const oh = new THREE.Mesh(hullGeo, mat(new THREE.Color("#2b2340"), 0.1))
    oh.add(edge(hullGeo, new THREE.Color("#efebf7")))
    oh.position.y = 0.25
    const mastGeo = new THREE.BoxGeometry(0.5, 1.1, 0.5)
    const om = new THREE.Mesh(mastGeo, mat(new THREE.Color("#2b2340"), 0.1))
    om.add(edge(mastGeo, new THREE.Color("#efebf7")))
    om.position.set(-0.4, 1.1, 0)
    const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color("#ffffff"), transparent: true }))
    lamp.position.set(-0.4, 1.75, 0)
    otter.add(oh, om, lamp)
    otter.rotation.y = Math.PI / 2 // heading -z (towards port side of Argus)
    group.add(otter)
    const otterItem = { obj: otter, x: 132, z: 28, lift: 0 }
    floaters.push(otterItem)
    targets.push({ obj: otter, kind: "Vessel · Otter", color: "#efebf7", radius: 2.4, h: 0.9 })

    // D · the dock with berths and an AR tag
    const dock = new THREE.Group()
    const woodC = new THREE.Color("#2a2236")
    const pierGeo = new THREE.BoxGeometry(2.2, 1.0, 30)
    const pier = new THREE.Mesh(pierGeo, mat(woodC, 0.05))
    pier.add(edge(pierGeo, COLORS.lavender))
    pier.position.set(184, 0.3, 2)
    dock.add(pier)
    for (const z of [-6, 0.5, 7.5, 14]) {
        const fg = new THREE.BoxGeometry(5, 0.6, 0.7)
        const f = new THREE.Mesh(fg, mat(woodC, 0.05))
        f.add(edge(fg, COLORS.lavender))
        f.position.set(180.6, 0.3, z)
        dock.add(f)
    }
    // AR tag on the pier face at the target berth
    const tagCanvas = document.createElement("canvas")
    tagCanvas.width = tagCanvas.height = 64
    const tc = tagCanvas.getContext("2d")
    tc.fillStyle = "#000"
    tc.fillRect(0, 0, 64, 64)
    tc.fillStyle = "#fff"
    tc.fillRect(8, 8, 48, 48)
    tc.fillStyle = "#000"
    const cells = [1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1]
    cells.forEach((v, i) => v && tc.fillRect(12 + (i % 4) * 10, 12 + Math.floor(i / 4) * 10, 10, 10))
    const tex = new THREE.CanvasTexture(tagCanvas)
    tex.magFilter = THREE.NearestFilter
    const tag = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 1.4), new THREE.MeshBasicMaterial({ map: tex, transparent: true }))
    tag.position.set(182.85, 1.2, 4)
    tag.rotation.y = -Math.PI / 2
    dock.add(tag)
    group.add(dock)
    targets.push({ obj: tag, kind: "Dock · AR tag", color: "#d6baec", radius: 1.4, h: 0 })

    // The planned route as dashed light, the part behind the boat as a solid trail
    const N = 900
    const rp = new Float32Array(N * 3)
    const ru = new Float32Array(N)
    for (let i = 0; i < N; i++) {
        const u = i / (N - 1)
        const p = curve.getPointAt(u)
        rp[i * 3] = p.x
        rp[i * 3 + 1] = 0.9
        rp[i * 3 + 2] = p.z
        ru[i] = u
    }
    const routeGeo = new THREE.BufferGeometry()
    routeGeo.setAttribute("position", new THREE.BufferAttribute(rp, 3))
    routeGeo.setAttribute("aU", new THREE.BufferAttribute(ru, 1))
    const routeMat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: { uU: { value: 0 }, uOpacity: { value: 0 }, uPx: { value: 1 }, uTime: { value: 0 }, uLav: { value: COLORS.lavender }, uYel: { value: COLORS.cardinal } },
        vertexShader: /* glsl */ `
            attribute float aU; uniform float uU; uniform float uPx; varying float vU;
            void main(){ vU = aU; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = uPx * 3.2 * (60.0 / -mv.z); gl_Position = projectionMatrix * mv; }
        `,
        fragmentShader: /* glsl */ `
            uniform float uU; uniform float uOpacity; uniform float uTime; uniform vec3 uLav; uniform vec3 uYel; varying float vU;
            void main(){
                float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard;
                float ahead = step(uU, vU);
                float dash = step(0.5, fract(vU * 140.0 - uTime * 0.6));
                float a = ahead > 0.5 ? dash * 0.8 : 0.35;
                vec3 c = ahead > 0.5 ? uLav : uYel;
                float near = smoothstep(0.08, 0.0, abs(vU - uU));
                gl_FragColor = vec4(c + near * 0.6, (a + near) * uOpacity * (1.0 - d * 1.6));
            }
        `,
    })
    const route = new THREE.Points(routeGeo, routeMat)
    route.frustumCulled = false
    group.add(route)

    // u values where each task ends, found along the curve
    const uAtX = (x) => {
        let lo = 0
        let hi = 1
        for (let i = 0; i < 30; i++) {
            const mid = (lo + hi) / 2
            if (curve.getPointAt(mid).x < x) lo = mid
            else hi = mid
        }
        return lo
    }
    const phases = [uAtX(0), uAtX(60), uAtX(114), uAtX(154), 1]

    const all = []
    group.traverse((o) => o.material && all.push(o.material))
    const baseOpacity = new Map(all.map((m) => [m, m.opacity]))

    // draw after the water, which is transparent and writes depth
    group.traverse((o) => (o.renderOrder = 4))

    return {
        group,
        curve,
        route,
        floaters,
        targets,
        otter: otterItem,
        phases,
        setOpacity(o) {
            group.visible = o > 0.01
            for (const m of all) {
                if (m === routeMat) continue
                m.opacity = baseOpacity.get(m) * o
            }
            routeMat.uniforms.uOpacity.value = o
        },
    }
}
