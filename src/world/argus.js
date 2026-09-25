import * as THREE from "three"
import { COLORS } from "./sea.js"

/* ================================================================
   Argus, built from simple shapes: two hulls, a frame, the electronics
   case, the LiDAR mast, a stereo camera, two GNSS antennas and two
   thrusters. Bow points along +x. Every part can move out on its own
   (exploded view) and light up when the page talks about it.
   Part order matches the cards on the page:
   0 hulls · 1 LiDAR · 2 stereo camera · 3 GNSS · 4 electronics case · 5 thrusters
   ================================================================ */

const EDGE = COLORS.lavender.clone()
const HIGHLIGHT = COLORS.cardinal.clone()

function hullGeometry() {
    // a pontoon: pointed bow, rounded stern, a little flatter than round
    const pts = []
    const n = 28
    for (let i = 0; i <= n; i++) {
        const t = i / n // 0 = stern, 1 = bow
        const x = -3 + t * 6
        let r = 0.42
        if (t > 0.62) r *= Math.pow(1 - (t - 0.62) / 0.38, 0.75)
        if (t < 0.08) r *= 0.75 + (t / 0.08) * 0.25
        pts.push(new THREE.Vector2(Math.max(r, 0.001), x))
    }
    const g = new THREE.LatheGeometry(pts, 20)
    g.rotateZ(-Math.PI / 2) // lathe axis (y) → x
    g.scale(1, 0.86, 1)
    return g
}

function part(name, index, offset) {
    const g = new THREE.Group()
    g.name = name
    g.userData = { index, offset: offset.clone(), meshes: [], edges: [] }
    return g
}

export function createArgus(clipPlane) {
    const root = new THREE.Group()
    const body = new THREE.Group() // bobbing happens on root, explode on parts
    root.add(body)

    const base = new THREE.MeshStandardMaterial({ color: new THREE.Color("#221c33"), metalness: 0.45, roughness: 0.42, clippingPlanes: [clipPlane] })
    const dark = new THREE.MeshStandardMaterial({ color: new THREE.Color("#141020"), metalness: 0.5, roughness: 0.5, clippingPlanes: [clipPlane] })
    const glass = new THREE.MeshStandardMaterial({ color: new THREE.Color("#0b0a12"), metalness: 0.9, roughness: 0.15, clippingPlanes: [clipPlane] })
    const edgeMat = new THREE.LineBasicMaterial({ color: EDGE, transparent: true, opacity: 0.85, clippingPlanes: [clipPlane] })

    const parts = []
    const add = (p, geo, mat, pos, rot, edgeAngle = 28) => {
        const m = new THREE.Mesh(geo, mat.clone())
        m.material.clippingPlanes = [clipPlane]
        if (pos) m.position.copy(pos)
        if (rot) m.rotation.set(rot.x, rot.y, rot.z)
        const e = new THREE.LineSegments(new THREE.EdgesGeometry(geo, edgeAngle), edgeMat.clone())
        e.material.clippingPlanes = [clipPlane]
        m.add(e)
        p.add(m)
        p.userData.meshes.push(m)
        p.userData.edges.push(e)
        return m
    }
    const V = (x, y, z) => new THREE.Vector3(x, y, z)

    // 0 · two hulls (each moves out to its own side)
    const hullGeo = hullGeometry()
    const hullA = part("hull-port", 0, V(0, -0.5, -1.0))
    const hullB = part("hull-stbd", 0, V(0, -0.5, 1.0))
    add(hullA, hullGeo, base, V(0, 0, -1.35), null, 12)
    add(hullB, hullGeo, base, V(0, 0, 1.35), null, 12)
    parts.push(hullA, hullB)

    // frame (not one of the six cards, it just lifts a little)
    const frame = part("frame", -1, V(0, 0.25, 0))
    for (const x of [-1.9, -0.25, 1.45]) add(frame, new THREE.BoxGeometry(0.16, 0.12, 3.05), dark, V(x, 0.52, 0))
    for (const z of [-1.35, 1.35]) {
        add(frame, new THREE.BoxGeometry(3.6, 0.08, 0.12), dark, V(-0.2, 0.44, z))
        for (const x of [-1.9, -0.25, 1.45]) add(frame, new THREE.BoxGeometry(0.1, 0.34, 0.1), dark, V(x, 0.3, z))
    }
    add(frame, new THREE.BoxGeometry(3.1, 0.05, 1.7), base, V(-0.25, 0.6, 0))
    parts.push(frame)

    // 4 · electronics case
    const box = part("case", 4, V(0, 0.8, 0))
    add(box, new THREE.BoxGeometry(1.5, 0.6, 1.0), base, V(-0.3, 0.93, 0))
    add(box, new THREE.BoxGeometry(1.56, 0.06, 1.06), dark, V(-0.3, 1.24, 0))
    add(box, new THREE.CylinderGeometry(0.05, 0.05, 0.12, 10), dark, V(-0.85, 1.32, 0.3))
    parts.push(box)

    // 1 · LiDAR on a mast
    const lidar = part("lidar", 1, V(0, 1.5, 0))
    add(lidar, new THREE.CylinderGeometry(0.05, 0.06, 0.72, 10), dark, V(0.12, 1.62, 0))
    add(lidar, new THREE.CylinderGeometry(0.21, 0.21, 0.3, 28), base, V(0.12, 2.12, 0))
    const lidarWindow = add(lidar, new THREE.CylinderGeometry(0.215, 0.215, 0.1, 28, 1, true), glass, V(0.12, 2.1, 0))
    add(lidar, new THREE.CylinderGeometry(0.19, 0.21, 0.05, 28), dark, V(0.12, 2.3, 0))
    parts.push(lidar)

    // 2 · stereo camera at the front of the case
    const cam = part("camera", 2, V(1.1, 0.55, 0))
    add(cam, new THREE.BoxGeometry(0.08, 0.2, 0.08), dark, V(0.42, 1.34, 0))
    add(cam, new THREE.BoxGeometry(0.16, 0.14, 0.66), base, V(0.5, 1.48, 0))
    for (const z of [-0.22, 0.22]) add(cam, new THREE.CylinderGeometry(0.05, 0.05, 0.06, 16), glass, V(0.6, 1.48, z), new THREE.Euler(0, 0, Math.PI / 2))
    parts.push(cam)

    // 3 · two GNSS antennas at the back
    const gnss = part("gnss", 3, V(-0.2, 0.95, 0))
    for (const z of [-0.78, 0.78]) {
        add(gnss, new THREE.CylinderGeometry(0.03, 0.03, 0.8, 8), dark, V(-1.45, 1.0, z))
        add(gnss, new THREE.CylinderGeometry(0.16, 0.18, 0.08, 24), base, V(-1.45, 1.42, z))
    }
    parts.push(gnss)

    // 5 · thrusters under the sterns
    const thr = part("thrusters", 5, V(-0.9, -0.6, 0))
    for (const z of [-1.35, 1.35]) {
        add(thr, new THREE.BoxGeometry(0.08, 0.3, 0.06), dark, V(-2.45, -0.36, z))
        add(thr, new THREE.CylinderGeometry(0.12, 0.1, 0.55, 16), base, V(-2.55, -0.5, z), new THREE.Euler(0, 0, Math.PI / 2))
        add(thr, new THREE.TorusGeometry(0.16, 0.025, 8, 24), dark, V(-2.86, -0.5, z), new THREE.Euler(0, Math.PI / 2, 0))
    }
    parts.push(thr)

    for (const p of parts) body.add(p)

    // Points to aim the callout line at, one per card (local to the part)
    const anchors = [
        { part: hullB, local: V(1.6, 0.05, 1.35 + 0.42) },
        { part: lidar, local: V(0.12, 2.3, 0) },
        { part: cam, local: V(0.58, 1.48, 0.33) },
        { part: gnss, local: V(-1.45, 1.46, 0.78) },
        { part: box, local: V(0.45, 1.0, 0.5) },
        { part: thr, local: V(-2.6, -0.5, 1.5) },
    ]

    // A glowing ring that shows where the LiDAR sits
    const ringGeo = new THREE.RingGeometry(0.3, 0.33, 48)
    ringGeo.rotateX(-Math.PI / 2)
    const lidarRing = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: COLORS.lavender, transparent: true, opacity: 0.6, side: THREE.DoubleSide, depthWrite: false }))
    lidarRing.position.set(0.12, 2.12, 0)
    lidar.add(lidarRing)

    const api = {
        root,
        body,
        parts,
        lidar,
        lidarRing,
        lidarWindow,
        anchors,
        _explode: -1,
        _hl: -2,
        _op: -1,
        setExplode(e) {
            if (Math.abs(e - this._explode) < 1e-4) return
            this._explode = e
            for (const p of parts) p.position.copy(p.userData.offset).multiplyScalar(e)
        },
        setHighlight(index, pulse) {
            for (const p of parts) {
                const on = index >= 0 && p.userData.index === index
                const dim = index >= 0 && !on
                for (const m of p.userData.meshes) {
                    m.material.emissive.copy(HIGHLIGHT).multiplyScalar(on ? 0.35 + pulse * 0.25 : 0)
                }
                for (const e of p.userData.edges) {
                    e.material.color.copy(on ? HIGHLIGHT : EDGE)
                    e.material.opacity = (dim ? 0.28 : on ? 1 : 0.85) * api._opacity
                }
            }
        },
        _opacity: 1,
        setOpacity(o) {
            this._opacity = o
            root.visible = o > 0.01
            for (const p of parts) {
                for (const m of p.userData.meshes) {
                    m.material.transparent = o < 0.999
                    m.material.opacity = o
                }
            }
            lidarRing.material.opacity = 0.6 * o
        },
        anchorWorld(i, out) {
            const a = anchors[i]
            a.part.updateWorldMatrix(true, false)
            return out.copy(a.local).applyMatrix4(a.part.matrixWorld)
        },
    }
    api.setExplode(0)
    return api
}
