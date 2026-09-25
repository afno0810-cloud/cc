import * as THREE from "three"

/* Gulls over the harbour: a few birds that glide in wide circles and flap
   now and then. One small mesh, drawn many times; the wings move in the
   vertex shader. They leave when it gets dark. */
export function createBirds(count = 22) {
    // a gull seen from above: body along +x, wings along ±z, wing tips last
    const v = [
        // body
        0.5, 0, 0, -0.45, 0.02, 0.05, -0.45, 0.02, -0.05,
        0.5, 0, 0, -0.45, -0.04, 0, -0.45, 0.02, 0.05,
        0.5, 0, 0, -0.45, 0.02, -0.05, -0.45, -0.04, 0,
        // inner wings
        0.18, 0, 0.04, -0.1, 0, 0.04, 0.02, 0, 0.62,
        0.18, 0, -0.04, 0.02, 0, -0.62, -0.1, 0, -0.04,
        // outer wings
        0.02, 0, 0.62, -0.1, 0, 0.04, -0.2, 0, 1.12,
        0.02, 0, -0.62, -0.2, 0, -1.12, -0.1, 0, -0.04,
        // tail
        -0.45, 0.01, 0.0, -0.72, 0.01, 0.16, -0.72, 0.01, -0.16,
    ]
    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.Float32BufferAttribute(v, 3))
    geo.computeVertexNormals()
    const phase = new Float32Array(count)
    for (let i = 0; i < count; i++) phase[i] = Math.random() * 100
    geo.setAttribute("aPhase", new THREE.InstancedBufferAttribute(phase, 1))

    const U = { uTime: { value: 0 } }
    const mat = new THREE.MeshStandardMaterial({ color: new THREE.Color(0.75, 0.76, 0.78), roughness: 0.8, side: THREE.DoubleSide })
    mat.onBeforeCompile = (sh) => {
        Object.assign(sh.uniforms, U)
        sh.vertexShader = sh.vertexShader
            .replace("#include <common>", "#include <common>\nattribute float aPhase;\nuniform float uTime;")
            .replace(
                "#include <begin_vertex>",
                `#include <begin_vertex>
                {
                    // flap for a few seconds, glide for a few seconds
                    float t = uTime + aPhase;
                    float flapping = smoothstep(0.2, 0.6, sin(t * 0.35 + aPhase));
                    float a = sin(t * 7.0) * 0.55 * flapping + 0.12;
                    float s = abs(position.z);
                    float k = s > 0.05 ? 1.0 : 0.0;
                    // the outer wing bends a little more than the inner one
                    float bend = a * (s > 0.63 ? 1.35 : 1.0);
                    transformed.y += k * s * sin(bend) * 0.9;
                    transformed.z = sign(position.z) * s * mix(1.0, cos(bend), k);
                }`
            )
    }
    const mesh = new THREE.InstancedMesh(geo, mat, count)
    mesh.frustumCulled = false
    const birds = []
    for (let i = 0; i < count; i++) {
        birds.push({
            cx: -60 + (Math.random() - 0.5) * 140,
            cz: 40 + (Math.random() - 0.5) * 160,
            r: 25 + Math.random() * 70,
            h: 14 + Math.random() * 38,
            w: (0.08 + Math.random() * 0.1) * (Math.random() < 0.5 ? 1 : -1),
            a: Math.random() * Math.PI * 2,
            s: 4.2 + Math.random() * 1.2, // wingspan ~1.4 m
        })
    }
    const m = new THREE.Matrix4()
    const q = new THREE.Quaternion()
    const e = new THREE.Euler()
    const p = new THREE.Vector3()
    const sc = new THREE.Vector3()
    return {
        mesh,
        update(t, dt, away) {
            U.uTime.value = t
            for (let i = 0; i < count; i++) {
                const b = birds[i]
                b.a += b.w * dt
                // at night they fly off and up
                const r = b.r + away * 400
                p.set(b.cx + Math.cos(b.a) * r, b.h + Math.sin(t * 0.3 + i) * 3 + away * 200, b.cz + Math.sin(b.a) * r)
                // heading along the circle, banking into the turn
                const sg = Math.sign(b.w)
                const heading = Math.atan2(-Math.cos(b.a) * sg, -Math.sin(b.a) * sg)
                e.set(-0.35 * Math.sign(b.w), heading, 0, "YXZ")
                q.setFromEuler(e)
                sc.setScalar(b.s * (1 - away))
                m.compose(p, q, sc)
                mesh.setMatrixAt(i, m)
            }
            mesh.instanceMatrix.needsUpdate = true
            mesh.visible = away < 0.98
        },
    }
}
