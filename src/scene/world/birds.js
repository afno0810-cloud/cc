import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js"
import { waveHeight } from "./waves.js"

/* Herring gulls over the harbour, and a few resting on the water.

   The flying gull is a Higgsfield 3D model, painted and with its wings
   drawn out in scripts/gull/build.mjs (head +x, wings along ±z). It is
   drawn many times; the wings move in the vertex shader: they turn about
   the body's axis at the shoulder, and the hand bends further than the
   arm, so a flap reads as a gull's and not a hinge's. The birds glide in
   wide circles, bank into the turn, flap in short bouts (and climb a
   little while they do), and leave when it gets dark. The resting gulls
   are small shapes of their own that ride the waves. */

const SPAN = 0.694 // half the wingspan of the model
const SHOULDER = 0.06

function restingGull() {
    // body, the folded grey wings on top with black tips over the tail, the head and the bill
    const parts = []
    const add = (geo, color, m) => {
        geo.applyMatrix4(m)
        const c = new THREE.Color(color)
        const n = geo.attributes.position.count
        const col = new Float32Array(n * 3)
        for (let i = 0; i < n; i++) col.set([c.r, c.g, c.b], i * 3)
        geo.setAttribute("color", new THREE.BufferAttribute(col, 3))
        parts.push(geo.index ? geo.toNonIndexed() : geo)
    }
    const M = (x, y, z, sx = 1, sy = 1, sz = 1, rz = 0) => new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, rz)), new THREE.Vector3(sx, sy, sz))
    add(new THREE.SphereGeometry(1, 14, 10), "#f1f1ee", M(0, 0.07, 0, 0.26, 0.11, 0.12))
    add(new THREE.SphereGeometry(1, 12, 8), "#8d97a0", M(-0.04, 0.12, 0, 0.26, 0.07, 0.125, -0.12))
    add(new THREE.SphereGeometry(1, 10, 6), "#18181a", M(-0.26, 0.135, 0, 0.1, 0.03, 0.06, -0.25))
    add(new THREE.SphereGeometry(1, 12, 8), "#f1f1ee", M(0.2, 0.2, 0, 0.075, 0.07, 0.065))
    add(new THREE.ConeGeometry(0.018, 0.08, 8).rotateZ(-Math.PI / 2), "#e9b934", M(0.3, 0.19, 0))
    const g = new THREE.BufferGeometry()
    const count = parts.reduce((n, p) => n + p.attributes.position.count, 0)
    for (const name of ["position", "normal", "color"]) {
        const arr = new Float32Array(count * 3)
        let o = 0
        for (const p of parts) {
            arr.set(p.attributes[name].array, o)
            o += p.attributes[name].array.length
        }
        g.setAttribute(name, new THREE.BufferAttribute(arr, 3))
    }
    return g
}

export function createBirds(count = 22, { base = "/media/models/world/", resting = 10 } = {}) {
    const group = new THREE.Group()
    const U = { uTime: { value: 0 } }

    // ---- flying gulls ----
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85, metalness: 0 })
    mat.onBeforeCompile = (sh) => {
        Object.assign(sh.uniforms, U)
        sh.vertexShader = sh.vertexShader
            .replace("#include <common>", "#include <common>\nattribute float aPhase;\nattribute float aFlap;\nuniform float uTime;")
            .replace(
                "#include <beginnormal_vertex>",
                `#include <beginnormal_vertex>
                // the wing beat: up to 0.55 rad up and down, a little dihedral while gliding
                float gT = uTime * (6.5 + fract(aPhase * 7.3) * 1.5) + aPhase * 10.0;
                float gA = sin(gT) * 0.55 * aFlap + 0.08 + 0.05 * sin(uTime * 0.7 + aPhase);
                float gS = abs(position.z);
                float gK = smoothstep(${SHOULDER.toFixed(3)}, 0.16, gS);
                // the hand bends more (and lags behind a little)
                float gH = smoothstep(0.32, 0.55, gS) * (sin(gT - 0.6) * 0.35 * aFlap + 0.04);
                float gAng = (gA * gK + gH) * sign(position.z);
                objectNormal = vec3(objectNormal.x, objectNormal.y * cos(gAng) + objectNormal.z * sin(gAng), -objectNormal.y * sin(gAng) + objectNormal.z * cos(gAng));`
            )
            .replace(
                "#include <begin_vertex>",
                `#include <begin_vertex>
                if (gS > ${SHOULDER.toFixed(3)}) {
                    float gR = gS - ${SHOULDER.toFixed(3)};
                    float gU = gA * gK + gH;
                    transformed.y = position.y + gR * sin(gU);
                    transformed.z = sign(position.z) * (${SHOULDER.toFixed(3)} + gR * cos(gU));
                }`
            )
    }
    let flying = null
    const phase = new Float32Array(count)
    const flap = new Float32Array(count)
    const birds = []
    for (let i = 0; i < count; i++) {
        phase[i] = Math.random() * 100
        // most circle over the harbour; a few cross it on long, wide loops
        const far = i % 5 === 0
        birds.push({
            cx: (far ? 0 : -60) + (Math.random() - 0.5) * (far ? 300 : 160),
            cz: (far ? 0 : 40) + (Math.random() - 0.5) * (far ? 300 : 170),
            r: far ? 180 + Math.random() * 160 : 22 + Math.random() * 70,
            h: 10 + Math.random() * 34,
            w: (far ? 0.03 + Math.random() * 0.02 : 0.07 + Math.random() * 0.09) * (Math.random() < 0.5 ? 1 : -1),
            a: Math.random() * Math.PI * 2,
            s: 3.1 + Math.random() * 0.7, // wingspan about 1.3 to 1.5 m
            climb: 0,
        })
    }

    // ---- resting gulls: on the water near the harbour, riding the waves ----
    const restGeo = restingGull()
    const restMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85, metalness: 0 })
    const rest = new THREE.InstancedMesh(restGeo, restMat, resting)
    rest.frustumCulled = false
    const sitting = []
    for (let i = 0; i < resting; i++) {
        // in twos and threes, between the harbour boats and the start
        const grp = Math.floor(i / 3)
        const gx = [-40, -85, 30, -20][grp % 4]
        const gz = [30, 95, -60, -90][grp % 4]
        sitting.push({ x: gx + (Math.random() - 0.5) * 8, z: gz + (Math.random() - 0.5) * 8, yaw: Math.random() * Math.PI * 2, s: 3.4 + Math.random() * 0.5, ph: Math.random() * 6 })
    }
    group.add(rest)

    // ---- load the model (the one-page build hands the bytes over itself) ----
    const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder)
    const host = typeof window.__glbSource === "function" ? window.__glbSource("world/gull") : null
    const load = host ? host.then((buf) => new Promise((res, rej) => loader.parse(buf, "", res, rej))) : loader.loadAsync(base + "gull.glb")
    load.then((gltf) => {
        gltf.scene.updateMatrixWorld(true)
        let src = null
        gltf.scene.traverse((o) => {
            if (o.isMesh && !src) src = o
        })
        if (!src) return
        // back to plain floats in the model's own space (the file is quantized)
        const g = new THREE.BufferGeometry()
        for (const name of ["position", "normal", "color"]) {
            const a = src.geometry.attributes[name]
            if (!a) continue
            const arr = new Float32Array(a.count * 3)
            for (let i = 0; i < a.count; i++) arr.set([a.getX(i), a.getY(i), a.getZ(i)], i * 3)
            g.setAttribute(name, new THREE.BufferAttribute(arr, 3))
        }
        if (src.geometry.index) g.setIndex(Array.from(src.geometry.index.array))
        g.applyMatrix4(src.matrixWorld)
        g.computeBoundingSphere()
        g.setAttribute("aPhase", new THREE.InstancedBufferAttribute(phase, 1))
        g.setAttribute("aFlap", new THREE.InstancedBufferAttribute(flap, 1))
        flying = new THREE.InstancedMesh(g, mat, count)
        flying.frustumCulled = false
        group.add(flying)
    }).catch((e) => console.warn("gull model failed", e))

    const m = new THREE.Matrix4()
    const q = new THREE.Quaternion()
    const e = new THREE.Euler()
    const p = new THREE.Vector3()
    const sc = new THREE.Vector3()
    return {
        mesh: group,
        list: birds,
        sitting,
        update(t, dt, away) {
            U.uTime.value = t
            if (flying) {
                for (let i = 0; i < count; i++) {
                    const b = birds[i]
                    // flap in bouts of a few seconds, glide in between
                    const f = THREE.MathUtils.smoothstep(Math.sin(t * 0.27 + phase[i]) + 0.15 * Math.sin(t * 1.3 + i), 0.35, 0.75)
                    flap[i] = f
                    b.climb += (f * 2.5 - b.climb) * Math.min(1, dt * 0.5)
                    b.a += b.w * dt * (1 + f * 0.25)
                    // at night they fly off and up
                    const r = b.r + away * 400
                    p.set(b.cx + Math.cos(b.a) * r, b.h + b.climb + Math.sin(t * 0.21 + i) * 4 + away * 200, b.cz + Math.sin(b.a) * r)
                    // heading along the circle (head = +x), banking into the turn: harder on tight circles
                    const sg = Math.sign(b.w)
                    const heading = Math.atan2(-Math.cos(b.a) * sg, -Math.sin(b.a) * sg)
                    const bank = THREE.MathUtils.clamp(b.w * b.w * r * 0.6, 0.06, 0.55) * sg
                    e.set(bank, heading, 0.03 + f * 0.06, "YZX")
                    q.setFromEuler(e)
                    sc.setScalar(b.s * (1 - away))
                    m.compose(p, q, sc)
                    flying.setMatrixAt(i, m)
                }
                flying.instanceMatrix.needsUpdate = true
                flying.geometry.attributes.aFlap.needsUpdate = true
                flying.visible = away < 0.98
            }
            for (let i = 0; i < sitting.length; i++) {
                const s = sitting[i]
                s.yaw += Math.sin(t * 0.1 + s.ph) * dt * 0.05
                p.set(s.x, waveHeight(s.x, s.z, t, 1) * 0.85 - 0.12, s.z)
                e.set(Math.sin(t * 1.3 + s.ph) * 0.06, s.yaw, Math.sin(t * 1.1 + s.ph * 2) * 0.05, "YXZ")
                q.setFromEuler(e)
                sc.setScalar(s.s)
                m.compose(p, q, sc)
                rest.setMatrixAt(i, m)
            }
            rest.instanceMatrix.needsUpdate = true
        },
    }
}
