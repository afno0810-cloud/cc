import * as THREE from "three"

/* Sea spray and dust in the air: a box of slow points that always wraps
   around the camera, so there is depth close to the lens wherever it goes. */
export function createMotes(count, box = 60) {
    const pos = new Float32Array(count * 3)
    const seed = new Float32Array(count)
    for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * box
        pos[i * 3 + 1] = (Math.random() - 0.5) * box
        pos[i * 3 + 2] = (Math.random() - 0.5) * box
        seed[i] = Math.random()
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3))
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1))
    const U = {
        uCam: { value: new THREE.Vector3() },
        uTime: { value: 0 },
        uBox: { value: box },
        uProj: { value: 800 },
        uOpacity: { value: 1 },
    }
    const pts = new THREE.Points(
        geo,
        new THREE.ShaderMaterial({
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            uniforms: U,
            vertexShader: /* glsl */ `
                attribute float aSeed; uniform vec3 uCam; uniform float uTime; uniform float uBox; uniform float uProj;
                varying float vA; varying float vS;
                void main() {
                    // a light wind along the fjord, and a slow rise and fall
                    vec3 p = position + vec3(uTime * (0.5 + aSeed * 0.5), sin(uTime * 0.35 + aSeed * 6.28) * 0.6, uTime * 0.22);
                    p = mod(p - uCam + uBox * 0.5, uBox) - uBox * 0.5 + uCam;
                    vec4 mv = modelViewMatrix * vec4(p, 1.0);
                    float d = -mv.z;
                    // soft near the lens, gone at the edge of the box so the wrap never shows
                    vA = smoothstep(0.6, 3.5, d) * (1.0 - smoothstep(uBox * 0.3, uBox * 0.48, d)) * (0.2 + 0.8 * aSeed);
                    vA *= 0.6 + 0.4 * sin(uTime * (1.0 + aSeed * 2.0) + aSeed * 50.0);
                    vS = aSeed;
                    gl_PointSize = clamp((0.035 + aSeed * 0.05) * uProj / d, 1.0, 26.0);
                    gl_Position = projectionMatrix * mv;
                }
            `,
            fragmentShader: /* glsl */ `
                uniform float uOpacity; varying float vA; varying float vS;
                void main() {
                    float d = length(gl_PointCoord - 0.5);
                    if (d > 0.5) discard;
                    float k = pow(1.0 - d * 2.0, 1.6);
                    vec3 c = mix(vec3(0.72, 0.8, 0.95), vec3(1.0, 0.95, 0.85), step(0.92, vS));
                    gl_FragColor = vec4(c * k * vA * 0.55 * uOpacity, 1.0);
                }
            `,
        })
    )
    pts.frustumCulled = false
    pts.renderOrder = 9
    return {
        points: pts,
        update(t, cam, proj, o = 1) {
            U.uTime.value = t
            U.uCam.value.copy(cam)
            U.uProj.value = proj
            U.uOpacity.value = o
        },
    }
}
