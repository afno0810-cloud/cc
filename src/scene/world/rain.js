import * as THREE from "three"

/* ================================================================
   Rain: thin streaks falling past the camera, in a box that moves with
   it (every drop wraps round inside the box, so there are always drops
   near and far). The wind blows them a little sideways.
   ================================================================ */
export function createRain(count = 3000) {
    const pos = new Float32Array(count * 2 * 3)
    const seed = new Float32Array(count * 2 * 3)
    const end = new Float32Array(count * 2)
    for (let i = 0; i < count; i++) {
        const sx = Math.random()
        const sy = Math.random()
        const sz = Math.random()
        for (let k = 0; k < 2; k++) {
            seed.set([sx, sy, sz], (i * 2 + k) * 3)
            end[i * 2 + k] = k
        }
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3))
    g.setAttribute("aSeed", new THREE.BufferAttribute(seed, 3))
    g.setAttribute("aEnd", new THREE.BufferAttribute(end, 1))
    const uniforms = {
        uTime: { value: 0 },
        uCam: { value: new THREE.Vector3() },
        uAmount: { value: 0 },
        uCol: { value: new THREE.Color(0.7, 0.75, 0.8) },
        uWind: { value: new THREE.Vector2(3, 1.5) },
    }
    const mat = new THREE.ShaderMaterial({
        uniforms,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexShader: /* glsl */ `
            uniform float uTime; uniform vec3 uCam; uniform float uAmount; uniform vec2 uWind;
            attribute vec3 aSeed; attribute float aEnd;
            varying float vA;
            const vec3 BOX = vec3(48.0, 30.0, 48.0);
            void main() {
                float fall = 26.0 + aSeed.x * 8.0;
                vec3 vel = vec3(uWind.x, -fall, uWind.y);
                vec3 p = aSeed * BOX + vel * uTime;
                // wrap inside the box round the camera
                p = mod(p - uCam + BOX * 0.5, BOX) - BOX * 0.5 + uCam;
                // the streak: the drop and where it was a moment ago
                p -= vel * 0.032 * aEnd;
                vec4 mv = modelViewMatrix * vec4(p, 1.0);
                // only some drops, more when it rains harder; fade with distance and at the box edges
                float on = step(aSeed.z, uAmount);
                float d = -mv.z;
                vA = on * (1.0 - smoothstep(6.0, 24.0, d)) * smoothstep(1.5, 4.0, d) * (1.0 - aEnd * 0.8);
                gl_Position = projectionMatrix * mv;
            }
        `,
        fragmentShader: /* glsl */ `
            uniform vec3 uCol; varying float vA;
            void main() { if (vA < 0.01) discard; gl_FragColor = vec4(uCol * vA * 0.8, 1.0); }
        `,
    })
    const lines = new THREE.LineSegments(g, mat)
    lines.frustumCulled = false
    lines.renderOrder = 8
    return { lines, uniforms }
}
