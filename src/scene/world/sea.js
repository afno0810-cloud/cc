import * as THREE from "three"
import { WAVE_GLSL } from "./waves.js"
import { PANO_GLSL } from "./sky.js"

/* ================================================================
   The fjord: water that mirrors the world above it.

   - The surface is a grid of rings around the camera (dense close by,
     wide far away), lifted by the same swells the boat rides on.
   - Small waves come from a tiling normal map made here in code.
   - The mirror image is a real render of the scene from below the
     water (planar reflection), bent by the waves. How much of it you
     see follows Fresnel: little when you look down, a lot at a glance.
   - Sunlight glitters on the small waves; light shines through wave
     crests when you look towards the sun; far away everything fades
     into the colour of the air (aerial perspective).
   - Foam: around the hulls, in Argus' wake, and in rings where you tap.
   - The LiDAR returns (rings and a sweep) are drawn on top, mostly at night.
   ================================================================ */

export const COLORS = {
    abyss: new THREE.Color("#05080c"),
    deep: new THREE.Color("#080d15"),
    horizon: new THREE.Color("#141a2d"),
    violet: new THREE.Color("#7c469c"),
    lavender: new THREE.Color("#d6baec"),
    cardinal: new THREE.Color("#f2c230"),
    moon: new THREE.Color("#eef3ff"),
    steel: new THREE.Color("#3f5678"),
    ice: new THREE.Color("#c9d7ee"),
}

export const MOON_DIR = new THREE.Vector3(-0.55, 0.32, -0.77).normalize()

export const WAKE_N = 40
export const RIPPLE_N = 12

function rng(seed) {
    return () => {
        seed |= 0
        seed = (seed + 0x6d2b79f5) | 0
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
}

/* small waves: a sum of sines with whole numbers of waves across the tile,
   so it repeats without a seam. r,g = slope, b = height (breaks up the foam) */
function makeWaveTexture(size = 256) {
    const rand = rng(11)
    const waves = []
    for (let i = 0; i < 72; i++) {
        const ang = 0.5 + (rand() - 0.5) * 2.4 // most waves run with the wind
        const mag = 2 + Math.pow(rand(), 1.7) * 44
        const kx = Math.round(Math.cos(ang) * mag)
        const ky = Math.round(Math.sin(ang) * mag)
        if (!kx && !ky) continue
        const k = Math.hypot(kx, ky)
        waves.push({ kx, ky, a: 1 / Math.pow(k, 1.35), ph: rand() * Math.PI * 2 })
    }
    const sx = new Float32Array(size * size)
    const sy = new Float32Array(size * size)
    const h = new Float32Array(size * size)
    let mS = 0
    let mH = 0
    const TAU = Math.PI * 2
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            let a = 0
            let b = 0
            let c = 0
            for (const w of waves) {
                const ph = (TAU * (w.kx * x + w.ky * y)) / size + w.ph
                const cs = Math.cos(ph)
                a += w.a * w.kx * cs
                b += w.a * w.ky * cs
                c += w.a * Math.sin(ph)
            }
            const i = y * size + x
            sx[i] = a
            sy[i] = b
            h[i] = c
            mS = Math.max(mS, Math.abs(a), Math.abs(b))
            mH = Math.max(mH, Math.abs(c))
        }
    }
    const data = new Uint8Array(size * size * 4)
    for (let i = 0; i < size * size; i++) {
        data[i * 4] = Math.round((sx[i] / mS) * 127.5 + 127.5)
        data[i * 4 + 1] = Math.round((sy[i] / mS) * 127.5 + 127.5)
        data[i * 4 + 2] = Math.round((h[i] / mH) * 127.5 + 127.5)
        data[i * 4 + 3] = 255
    }
    const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat)
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping
    tex.magFilter = THREE.LinearFilter
    tex.minFilter = THREE.LinearMipmapLinearFilter
    tex.generateMipmaps = true
    tex.anisotropy = 8
    tex.colorSpace = THREE.NoColorSpace
    tex.needsUpdate = true
    return tex
}

/* rings around the camera: ~0.4 units apart close by, kilometres far out */
function ringGeometry(rings, sectors, rMax) {
    const r0 = 0.35
    const growth = Math.pow(rMax / r0, 1 / rings)
    const pos = [0, 0, 0]
    const idx = []
    for (let i = 1; i <= rings; i++) {
        const r = r0 * Math.pow(growth, i - 1)
        for (let j = 0; j < sectors; j++) {
            const a = (j / sectors) * Math.PI * 2
            pos.push(Math.cos(a) * r, 0, Math.sin(a) * r)
        }
    }
    for (let j = 0; j < sectors; j++) idx.push(0, 1 + ((j + 1) % sectors), 1 + j)
    for (let i = 1; i < rings; i++) {
        const a0 = 1 + (i - 1) * sectors
        const a1 = 1 + i * sectors
        for (let j = 0; j < sectors; j++) {
            const j1 = (j + 1) % sectors
            idx.push(a0 + j, a0 + j1, a1 + j, a0 + j1, a1 + j1, a1 + j)
        }
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3))
    g.setIndex(idx)
    return g
}

export function createWater({ lowPower = false } = {}) {
    const geo = ringGeometry(lowPower ? 150 : 210, lowPower ? 160 : 256, 36000)
    const wake = []
    for (let i = 0; i < WAKE_N; i++) wake.push(new THREE.Vector4(0, 0, -999, 0))
    const ripples = []
    for (let i = 0; i < RIPPLE_N; i++) ripples.push(new THREE.Vector4(0, 0, -999, 0))
    const U = {
        uTime: { value: 0 },
        uAmp: { value: 1 },
        uCenter: { value: new THREE.Vector2() },
        uCam: { value: new THREE.Vector3() },
        uWaves: { value: makeWaveTexture(lowPower ? 128 : 256) },
        uPano: { value: null },
        uReflect: { value: null },
        uReflectMatrix: { value: new THREE.Matrix4() },
        uReflectOn: { value: 1 },
        uSun: { value: new THREE.Vector3(0, 1, 0) },
        uSunCol: { value: new THREE.Color(1, 1, 1) },
        uSunPower: { value: 22 },
        uBody: { value: new THREE.Color(0.004, 0.018, 0.026) },
        uNight: { value: 0 },
        uFog: { value: 5200 },
        uDim: { value: 1 },
        uBoat: { value: new THREE.Vector2() },
        uBoatDir: { value: new THREE.Vector2(1, 0) },
        uBoatSpeed: { value: 0 },
        uBoatOn: { value: 1 },
        uWake: { value: wake },
        uRipple: { value: ripples },
        uSweep: { value: 1 },
        uSweepAngle: { value: 0 },
        uLidar: { value: new THREE.Color("#9fd4ff") },
        uGlit: { value: 1 },
        uRain: { value: 0 }, // raindrops: rings on the water, and a rougher surface
        uChop: { value: 1 }, // the small waves: stronger in bad weather
    }
    const mat = new THREE.ShaderMaterial({
        uniforms: U,
        vertexShader: /* glsl */ `
            uniform float uTime; uniform float uAmp; uniform vec2 uCenter; uniform vec3 uCam;
            varying vec3 vPos; varying vec2 vSlope; varying float vH;
            ${WAVE_GLSL}
            void main() {
                vec3 p = position + vec3(uCenter.x, 0.0, uCenter.y);
                // swells fade out far away, where they would only shimmer
                float far = 1.0 - smoothstep(220.0, 1600.0, length(p.xz - uCam.xz));
                vec3 w = waveH(p.xz, uTime, uAmp * far);
                p.y += w.x;
                vSlope = w.yz;
                vH = w.x;
                vPos = p;
                gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
            }
        `,
        fragmentShader: /* glsl */ `
            ${PANO_GLSL}
            #define WAKE_N ${WAKE_N}
            #define RIPPLE_N ${RIPPLE_N}
            uniform float uTime; uniform vec3 uCam; uniform sampler2D uWaves; uniform sampler2D uPano;
            uniform sampler2D uReflect; uniform mat4 uReflectMatrix; uniform float uReflectOn;
            uniform vec3 uSun; uniform vec3 uSunCol; uniform float uSunPower; uniform vec3 uBody;
            uniform float uNight; uniform float uFog; uniform float uDim;
            uniform vec2 uBoat; uniform vec2 uBoatDir; uniform float uBoatSpeed; uniform float uBoatOn;
            uniform vec4 uWake[WAKE_N]; uniform vec4 uRipple[RIPPLE_N];
            uniform float uSweep; uniform float uSweepAngle; uniform vec3 uLidar; uniform float uGlit;
            uniform float uRain; uniform float uChop;
            varying vec3 vPos; varying vec2 vSlope; varying float vH;

            float rh(vec2 q) { return fract(sin(dot(q, vec2(127.1, 311.7))) * 43758.5453); }
            vec3 sky(vec3 d) { return texture2D(uPano, panoUV(normalize(vec3(d.x, max(d.y, 0.002), d.z)))).rgb; }

            void main() {
                vec3 toCam = uCam - vPos;
                float dist = length(toCam);
                vec3 V = toCam / dist;

                // small waves, at three scales, fading into calm far away
                vec2 p = vPos.xz;
                vec3 w1 = texture2D(uWaves, p / 34.0 + vec2(0.011, 0.006) * uTime).xyz * 2.0 - 1.0;
                vec3 w2 = texture2D(uWaves, p / 9.5 + vec2(-0.019, 0.013) * uTime).xyz * 2.0 - 1.0;
                vec3 w3 = texture2D(uWaves, p / 140.0 + vec2(0.003, -0.002) * uTime).xyz * 2.0 - 1.0;
                float near = 1.0 / (1.0 + dist * 0.0035);
                vec2 slope = vSlope + (w1.xy * 0.15 + w2.xy * 0.12 * near + w3.xy * 0.045) * (0.3 + 0.7 * near) * uChop;

                // raindrops: little rings spreading where each drop lands (close by; far off they blur into a rough sheen)
                if (uRain > 0.01) {
                    float rn = 1.0 - smoothstep(25.0, 140.0, dist);
                    if (rn > 0.0) {
                        for (int layer = 0; layer < 2; layer++) {
                            vec2 rp = p * (layer == 0 ? 1.6 : 2.3) + float(layer) * 17.3;
                            vec2 base = floor(rp);
                            for (int i = -1; i <= 1; i++) {
                                for (int j = -1; j <= 1; j++) {
                                    vec2 cell = base + vec2(float(i), float(j));
                                    float h = rh(cell);
                                    if (h > uRain * 0.9 + 0.1) continue;
                                    vec2 c = cell + vec2(rh(cell + 1.7), rh(cell + 3.1));
                                    float tt = fract(uTime * (0.9 + h * 0.6) + h * 7.0);
                                    vec2 dd = rp - c;
                                    float l = length(dd) + 1e-4;
                                    float R = tt * 0.75;
                                    float ring = exp(-pow((l - R) * 16.0, 2.0)) * (1.0 - tt) * (1.0 - tt);
                                    slope += (dd / l) * ring * 0.55 * rn;
                                }
                            }
                        }
                    }
                }
                float foamNoise = w1.z * 0.5 + w2.z * 0.5;

                // ripples where the water was touched
                float rippleFoam = 0.0;
                for (int i = 0; i < RIPPLE_N; i++) {
                    vec4 r = uRipple[i];
                    float age = uTime - r.z;
                    if (age < 0.0 || age > 6.0) continue;
                    vec2 d = p - r.xy;
                    float l = length(d) + 1e-4;
                    float R = age * 3.2;
                    float x = l - R;
                    float env = exp(-x * x * 0.9) * r.w * (1.0 - age / 6.0) / (1.0 + R * 0.25);
                    slope += (d / l) * cos(x * 5.0) * env * 0.35;
                    rippleFoam += exp(-x * x * 6.0) * env * 0.5 * smoothstep(1.4, 0.0, age);
                }

                vec3 N = normalize(vec3(-slope.x, 1.0, -slope.y));
                if (dot(N, V) < 0.02) N = normalize(N + V * (0.02 - dot(N, V)));

                // how much is mirrored (Schlick, water F0 = 0.02)
                float cosT = clamp(dot(N, V), 0.0, 1.0);
                float F = 0.02 + 0.98 * pow(1.0 - cosT, 5.0);

                // the mirror image: sky from the panorama, the world from the reflection render
                vec3 R = reflect(-V, N);
                vec3 refl = sky(R);
                if (uReflectOn > 0.0) {
                    vec4 rc = uReflectMatrix * vec4(vPos.x, 0.0, vPos.z, 1.0);
                    vec2 ruv = rc.xy / rc.w + slope * vec2(0.035, 0.05) / (1.0 + dist * 0.012);
                    ruv = clamp(ruv, 0.001, 0.999);
                    // a few taps: the mirror is never perfectly sharp, and its edges don't show the pixels
                    // (weighted by coverage: where nothing was drawn the colour means nothing)
                    vec2 px = 1.3 / vec2(textureSize(uReflect, 0));
                    vec4 m0 = texture2D(uReflect, ruv);
                    vec4 m1 = texture2D(uReflect, ruv + vec2(px.x, px.y));
                    vec4 m2 = texture2D(uReflect, ruv + vec2(-px.x, px.y));
                    vec4 m3 = texture2D(uReflect, ruv + vec2(px.x, -px.y));
                    vec4 m4 = texture2D(uReflect, ruv + vec2(-px.x, -px.y));
                    float a0 = clamp(m0.a, 0.0, 1.0), a1 = clamp(m1.a, 0.0, 1.0), a2 = clamp(m2.a, 0.0, 1.0), a3 = clamp(m3.a, 0.0, 1.0), a4 = clamp(m4.a, 0.0, 1.0);
                    vec3 rgb = m0.rgb * a0 * 0.4 + (m1.rgb * a1 + m2.rgb * a2 + m3.rgb * a3 + m4.rgb * a4) * 0.15;
                    float cov = a0 * 0.4 + (a1 + a2 + a3 + a4) * 0.15;
                    refl = mix(refl, rgb / max(cov, 1e-3), cov * uReflectOn);
                }

                // the water itself: dark fjord water, lit by the sky
                vec3 body = uBody;
                // light through the crests when you look towards the sun
                vec2 sunH = normalize(uSun.xz + 1e-5);
                float back = pow(max(dot(-V.xz / max(length(V.xz), 1e-4), sunH), 0.0), 4.0);
                body += vec3(0.02, 0.09, 0.08) * uSunCol * back * smoothstep(-0.2, 0.6, vH) * (1.0 - uNight) * 0.5;

                vec3 col = mix(body, refl, F);

                // sun glitter
                vec3 Hh = normalize(V + uSun);
                float nh = max(dot(N, Hh), 0.0);
                float glit = pow(nh, 1400.0) * 22.0 + pow(nh, 160.0) * 0.35;
                col += uSunCol * uSunPower * glit * F * 3.0 * step(0.0, uSun.y) * uGlit;

                // the water is darker right against the hulls (they shade it and hide the sky)
                if (uBoatOn > 0.0) {
                    vec2 d0 = p - uBoat;
                    vec2 lq = vec2(dot(d0, uBoatDir), dot(d0, vec2(-uBoatDir.y, uBoatDir.x)));
                    float contact = 0.0;
                    for (int k = 0; k < 2; k++) {
                        float side = k == 0 ? 1.84 : -1.84;
                        vec2 q = abs(vec2(lq.x, lq.y - side)) - vec2(2.75, 0.45);
                        float dd = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - 0.34;
                        contact = max(contact, exp(-max(dd, 0.0) * 1.6));
                    }
                    // and between the hulls, under the frame
                    vec2 qm = abs(lq) - vec2(2.2, 1.0);
                    float dm = length(max(qm, 0.0)) + min(max(qm.x, qm.y), 0.0);
                    contact = max(contact, 0.6 * exp(-max(dm, 0.0) * 1.2));
                    col *= 1.0 - 0.38 * contact * uBoatOn;
                }

                // foam: around the two hulls and behind the boat
                float foam = rippleFoam;
                if (uBoatOn > 0.0) {
                    vec2 d = p - uBoat;
                    vec2 lp = vec2(dot(d, uBoatDir), dot(d, vec2(-uBoatDir.y, uBoatDir.x)));
                    for (int k = 0; k < 2; k++) {
                        float side = k == 0 ? 1.85 : -1.85;
                        vec2 e = vec2(lp.x / 3.3, (lp.y - side) / 0.62);
                        float ee = length(e);
                        foam += smoothstep(1.55, 1.0, ee) * smoothstep(0.85, 1.02, ee) * (0.22 + uBoatSpeed * 1.4);
                    }
                    foam *= uBoatOn;
                }
                for (int i = 0; i < WAKE_N; i++) {
                    vec4 w = uWake[i];
                    float age = uTime - w.z;
                    if (age < 0.0 || age > 7.0) continue;
                    float r = 1.2 + age * 1.1;
                    float l = length(p - w.xy);
                    float ring = exp(-pow((l - r) / (0.7 + age * 0.35), 2.0)) + exp(-pow(l / (1.6 + age * 0.5), 2.0)) * 0.7;
                    foam += ring * w.w * (1.0 - age / 7.0) * 0.55;
                }
                foam = clamp(foam, 0.0, 1.4) * smoothstep(-0.35, 0.45, foamNoise + foam * 0.35);
                vec3 foamCol = (uSunCol * max(uSun.y, 0.0) * uSunPower * 0.035 + sky(vec3(0.0, 1.0, 0.0)) * 0.9);
                col = mix(col, foamCol, clamp(foam, 0.0, 0.9));

                // LiDAR returns: rings and a turning sweep around the boat, clearer at night
                float lidarK = uSweep * (0.18 + 0.82 * uNight);
                if (lidarK > 0.001) {
                    vec2 d = p - uBoat;
                    float r = length(d);
                    float ringR = mod(uTime * 11.0, 70.0);
                    float ring = exp(-pow((r - ringR) * 0.45, 2.0)) * (1.0 - ringR / 70.0);
                    float ang = atan(d.y, d.x);
                    float diff = mod(uSweepAngle - ang, 6.28318);
                    float sw = exp(-diff * 3.2) * smoothstep(55.0, 4.0, r);
                    vec2 cell = fract(p * 0.9) - 0.5;
                    float dots = 1.0 - smoothstep(0.02, 0.11, length(cell));
                    col += uLidar * (ring * 0.9 + sw) * (0.05 + dots * 0.5) * lidarK;
                }

                // the air between you and the water
                vec3 air = sky(vec3(-V.x, 0.0, -V.z));
                float fog = 1.0 - exp(-dist / uFog);
                col = mix(col, air, fog * mix(1.0, 0.92, clamp(uFog / 5200.0, 0.0, 1.0)));

                gl_FragColor = vec4(col * uDim, 1.0);
            }
        `,
    })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.frustumCulled = false
    mesh.renderOrder = -5
    return mesh
}

/* The LiDAR beam: a thin fan of light that turns with the sweep on the water */
export function createBeam() {
    const geo = new THREE.CircleGeometry(48, 24, -0.16, 0.32)
    geo.rotateX(-Math.PI / 2)
    const mat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        uniforms: { uOpacity: { value: 1 }, uColor: { value: new THREE.Color("#9fd4ff") } },
        vertexShader: /* glsl */ `varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
        fragmentShader: /* glsl */ `
            uniform float uOpacity; uniform vec3 uColor; varying vec2 vP;
            void main(){ float r = length(vP); float a = (1.0 - r / 48.0); gl_FragColor = vec4(uColor, a * a * 0.07 * uOpacity); }
        `,
    })
    return new THREE.Mesh(geo, mat)
}
