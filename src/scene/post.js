import * as THREE from "three"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js"
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js"
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js"

/* ================================================================
   Post-processing: the scene is rendered in linear HDR, bright things
   (LiDAR, the scan line, route lights, glitter) bloom, and one final
   pass does tone mapping, sRGB, a violet grade, chromatic aberration at
   the edges, a vignette and film grain.
   ================================================================ */

const GradeShader = {
    uniforms: {
        tDiffuse: { value: null },
        uTime: { value: 0 },
        uExposure: { value: 1.0 },
        uRes: { value: new THREE.Vector2(1, 1) },
        uCA: { value: 0.0006 },
        uGrain: { value: 0.045 },
        uVig: { value: 0.55 },
        uFlash: { value: 0 },
    },
    vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,
    fragmentShader: /* glsl */ `
        uniform sampler2D tDiffuse; uniform float uTime; uniform float uExposure; uniform vec2 uRes;
        uniform float uCA; uniform float uGrain; uniform float uVig; uniform float uFlash;
        varying vec2 vUv;

        // ACES filmic (same fit as three.js)
        vec3 RRTAndODTFit(vec3 v) {
            vec3 a = v * (v + 0.0245786) - 0.000090537;
            vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
            return a / b;
        }
        vec3 aces(vec3 color) {
            const mat3 ACESInputMat = mat3(vec3(0.59719, 0.07600, 0.02840), vec3(0.35458, 0.90834, 0.13383), vec3(0.04823, 0.01566, 0.83777));
            const mat3 ACESOutputMat = mat3(vec3(1.60475, -0.10208, -0.00327), vec3(-0.53108, 1.10813, -0.07276), vec3(-0.07367, -0.00605, 1.07602));
            color *= uExposure / 0.6;
            color = ACESInputMat * color;
            color = RRTAndODTFit(color);
            color = ACESOutputMat * color;
            return clamp(color, 0.0, 1.0);
        }
        vec3 toSRGB(vec3 c) {
            return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
        }
        float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

        void main() {
            vec2 d = vUv - 0.5;
            float r2 = dot(d, d);
            vec2 off = d * r2 * uCA * 40.0;
            vec3 c;
            c.r = texture2D(tDiffuse, vUv + off).r;
            c.g = texture2D(tDiffuse, vUv).g;
            c.b = texture2D(tDiffuse, vUv - off).b;
            c = aces(c);
            c = toSRGB(c);
            // grade: lift the shadows towards violet, keep highlights clean
            c = c * vec3(1.0, 1.0, 1.02) + vec3(0.003, 0.006, 0.011);
            c += uFlash * vec3(0.9, 0.93, 1.0);
            // vignette
            float v = smoothstep(0.95, 0.2, sqrt(r2) * 1.25);
            c *= mix(1.0, v, uVig);
            // grain
            float g = hash(vUv * uRes + fract(uTime * 7.13) * 91.7) - 0.5;
            c += g * uGrain;
            gl_FragColor = vec4(c, 1.0);
        }
    `,
}

export function createPost(renderer, scene, camera, { lowPower }) {
    const size = renderer.getDrawingBufferSize(new THREE.Vector2())
    const rt = new THREE.WebGLRenderTarget(size.x, size.y, {
        type: THREE.HalfFloatType,
        samples: lowPower ? 0 : 4,
    })
    const composer = new EffectComposer(renderer, rt)
    const renderPass = new RenderPass(scene, camera)
    const bloom = new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.75, 0.5, 0.78)
    const grade = new ShaderPass(GradeShader)
    composer.addPass(renderPass)
    composer.addPass(bloom)
    composer.addPass(grade)

    return {
        composer,
        bloom,
        grade,
        setSize(w, h, dpr) {
            composer.setPixelRatio(dpr)
            composer.setSize(w, h)
            // bloom works on a smaller buffer: soft and cheap
            const k = lowPower ? 0.35 : 0.5
            bloom.setSize(Math.round(w * dpr * k), Math.round(h * dpr * k))
            grade.uniforms.uRes.value.set(w * dpr, h * dpr)
        },
        render(t) {
            grade.uniforms.uTime.value = t
            composer.render()
        },
    }
}
