import * as THREE from "three"

/* ================================================================
   The sky over Trondheimsfjorden, from the physics of the air.

   The colour of the sky is light from the sun scattered by air
   molecules (Rayleigh: blue sky, red sunsets) and by haze (Mie: the
   bright glow around the sun). We integrate that along each view ray
   into a small panorama whenever the sun moves. The panorama is then:
     - the sky you see (plus a sun disc, clouds and stars on top),
     - the light that shines on everything (image-based lighting),
     - the haze colour that far hills fade into (aerial perspective).
   So the colours come from the sun's height, not from a palette.
   ================================================================ */

export const PANO_W = 256
export const PANO_H = 128

/* Rayleigh / Mie numbers for the Earth's atmosphere (metres) */
const R_PLANET = 6371e3
const R_ATMOS = 6471e3
const K_RLH = [5.8e-6, 13.5e-6, 33.1e-6]
const K_MIE = 2e-6 // clean Nordic air: little haze
const K_OZO = [0.65e-6, 1.881e-6, 0.085e-6] // ozone: keeps the twilight sky blue
const SH_RLH = 8e3
const SH_MIE = 1.2e3
const G_MIE = 0.758
export const SUN_POWER = 22
// the moon hangs over the fjord in the north-east at night
export const MOON = new THREE.Vector3(0.35, 0.34, 0.87).normalize()

const ATMOSPHERE_GLSL = /* glsl */ `
#define PI 3.141592653589793
const float R_PLANET = 6371e3;
const float R_ATMOS = 6471e3;
const vec3 K_RLH = vec3(5.8e-6, 13.5e-6, 33.1e-6);
const float K_MIE = 2e-6;
const vec3 K_OZO = vec3(0.65e-6, 1.881e-6, 0.085e-6);
float ozone(float h) { return max(0.0, 1.0 - abs(h - 25e3) / 15e3); }
const float SH_RLH = 8e3;
const float SH_MIE = 1.2e3;
const float G_MIE = 0.758;

vec2 rsi(vec3 r0, vec3 rd, float sr) {
    float a = dot(rd, rd);
    float b = 2.0 * dot(rd, r0);
    float c = dot(r0, r0) - sr * sr;
    float d = b * b - 4.0 * a * c;
    if (d < 0.0) return vec2(1e5, -1e5);
    return vec2((-b - sqrt(d)) / (2.0 * a), (-b + sqrt(d)) / (2.0 * a));
}

// single scattering along the view ray; light rays that hit the planet are in its shadow
uniform vec3 uMs; // light scattered many times: the sky's own glow, added along the ray
vec3 atmosphere(vec3 r, vec3 pSun, float iSun) {
    vec3 r0 = vec3(0.0, R_PLANET + 20.0, 0.0);
    vec2 p = rsi(r0, r, R_ATMOS);
    if (p.x > p.y) return vec3(0.0);
    vec2 pg = rsi(r0, r, R_PLANET);
    if (pg.x > 0.0) p.y = min(p.y, pg.x);
    const int I = 20;
    const int J = 8;
    float iStep = (p.y - max(p.x, 0.0)) / float(I);
    float iTime = max(p.x, 0.0);
    vec3 totRlh = vec3(0.0);
    vec3 totMie = vec3(0.0);
    float odRlh = 0.0;
    float odMie = 0.0;
    float odOzo = 0.0;
    float mu = dot(r, pSun);
    float mumu = mu * mu;
    float gg = G_MIE * G_MIE;
    float pRlh = 3.0 / (16.0 * PI) * (1.0 + mumu);
    float pMie = 3.0 / (8.0 * PI) * ((1.0 - gg) * (mumu + 1.0)) / (pow(1.0 + gg - 2.0 * mu * G_MIE, 1.5) * (2.0 + gg));
    for (int i = 0; i < I; i++) {
        vec3 iPos = r0 + r * (iTime + iStep * 0.5);
        float h = length(iPos) - R_PLANET;
        float sR = exp(-h / SH_RLH) * iStep;
        float sM = exp(-h / SH_MIE) * iStep;
        odRlh += sR;
        odMie += sM;
        odOzo += ozone(h) * iStep;
        // is this bit of air still in sunlight?
        vec2 sh = rsi(iPos, pSun, R_PLANET);
        if (!(sh.x > 0.0 && sh.x < 1e5)) {
            float jStep = rsi(iPos, pSun, R_ATMOS).y / float(J);
            float jTime = 0.0;
            float jR = 0.0;
            float jM = 0.0;
            float jO = 0.0;
            for (int j = 0; j < J; j++) {
                vec3 jPos = iPos + pSun * (jTime + jStep * 0.5);
                float jh = length(jPos) - R_PLANET;
                jR += exp(-jh / SH_RLH) * jStep;
                jM += exp(-jh / SH_MIE) * jStep;
                jO += ozone(jh) * jStep;
                jTime += jStep;
            }
            vec3 attn = exp(-(K_MIE * 1.1 * (odMie + jM) + K_RLH * (odRlh + jR) + K_OZO * (odOzo + jO)));
            totRlh += sR * attn;
            totMie += sM * attn;
        }
        iTime += iStep;
    }
    vec3 single = iSun * (pRlh * K_RLH * totRlh + pMie * K_MIE * totMie);
    return single + uMs * (1.0 - exp(-(K_RLH * odRlh + K_MIE * odMie)));
}
`

/* panorama layout: u = azimuth (atan2(z, x)), v = direction.y mapped so the
   horizon gets most of the pixels. Below the horizon: the sky just above it,
   darkened (the fjord and the hills), so the lighting from below is dark. */
export const PANO_GLSL = /* glsl */ `
vec2 panoUV(vec3 d) {
    float u = atan(d.z, d.x) / 6.283185307 + 0.5;
    float y = clamp(d.y, -1.0, 1.0);
    float v = 0.5 + 0.5 * sign(y) * sqrt(abs(y));
    return vec2(u, v);
}
vec3 panoDir(vec2 uv) {
    float az = (uv.x - 0.5) * 6.283185307;
    float s = uv.y * 2.0 - 1.0;
    float y = sign(s) * s * s;
    float c = sqrt(max(0.0, 1.0 - y * y));
    return vec3(cos(az) * c, y, sin(az) * c);
}
`

// ---- JS side: the colour of sunlight after its way through the air ----
function opticalDepth(elevDeg) {
    const e = THREE.MathUtils.degToRad(elevDeg)
    const d = [Math.cos(e), Math.sin(e)]
    const r0 = [0, R_PLANET + 20]
    // distance to the top of the atmosphere
    const b = 2 * (d[0] * r0[0] + d[1] * r0[1])
    const c = r0[0] * r0[0] + r0[1] * r0[1] - R_ATMOS * R_ATMOS
    const len = (-b + Math.sqrt(b * b - 4 * c)) / 2
    const N = 48
    const step = len / N
    let odR = 0
    let odM = 0
    let odO = 0
    for (let i = 0; i < N; i++) {
        const t = (i + 0.5) * step
        const x = r0[0] + d[0] * t
        const y = r0[1] + d[1] * t
        const h = Math.hypot(x, y) - R_PLANET
        if (h < 0) return null // through the ground: the sun is set for this ray
        odR += Math.exp(-h / SH_RLH) * step
        odM += Math.exp(-h / SH_MIE) * step
        odO += Math.max(0, 1 - Math.abs(h - 25e3) / 15e3) * step
    }
    return [odR, odM, odO]
}

export function sunTransmittance(elevDeg, out = new THREE.Color()) {
    // the sun is a disc half a degree wide: average over it so the light fades out smoothly at sunset
    let r = 0
    let g = 0
    let b = 0
    const S = 5
    for (let i = 0; i < S; i++) {
        const od = opticalDepth(elevDeg + ((i + 0.5) / S - 0.5) * 0.53)
        if (!od) continue
        r += Math.exp(-(K_MIE * 1.1 * od[1] + K_RLH[0] * od[0] + K_OZO[0] * od[2])) / S
        g += Math.exp(-(K_MIE * 1.1 * od[1] + K_RLH[1] * od[0] + K_OZO[1] * od[2])) / S
        b += Math.exp(-(K_MIE * 1.1 * od[1] + K_RLH[2] * od[0] + K_OZO[2] * od[2])) / S
    }
    return out.setRGB(r, g, b)
}

/* the same single-scattering integral as the shader, for a handful of directions */
export function atmosphereJS(r, s, iSun, ms = [0, 0, 0]) {
    const r0 = [0, R_PLANET + 20, 0]
    const rsi = (o, d, sr) => {
        const a = d[0] * d[0] + d[1] * d[1] + d[2] * d[2]
        const b = 2 * (d[0] * o[0] + d[1] * o[1] + d[2] * o[2])
        const c = o[0] * o[0] + o[1] * o[1] + o[2] * o[2] - sr * sr
        const q = b * b - 4 * a * c
        if (q < 0) return [1e5, -1e5]
        return [(-b - Math.sqrt(q)) / (2 * a), (-b + Math.sqrt(q)) / (2 * a)]
    }
    const len = Math.hypot(r[0], r[1], r[2])
    r = [r[0] / len, r[1] / len, r[2] / len]
    const p = rsi(r0, r, R_ATMOS)
    const pg = rsi(r0, r, R_PLANET)
    if (pg[0] > 0) p[1] = Math.min(p[1], pg[0])
    const I = 16
    const J = 6
    const start = Math.max(p[0], 0)
    const iStep = (p[1] - start) / I
    let odR = 0
    let odM = 0
    let odO = 0
    const oz = (h) => Math.max(0, 1 - Math.abs(h - 25e3) / 15e3)
    const tot = [0, 0, 0, 0, 0, 0]
    const mu = r[0] * s[0] + r[1] * s[1] + r[2] * s[2]
    const gg = G_MIE * G_MIE
    const pR = (3 / (16 * Math.PI)) * (1 + mu * mu)
    const pM = ((3 / (8 * Math.PI)) * ((1 - gg) * (mu * mu + 1))) / (Math.pow(1 + gg - 2 * mu * G_MIE, 1.5) * (2 + gg))
    for (let i = 0; i < I; i++) {
        const t = start + iStep * (i + 0.5)
        const ip = [r0[0] + r[0] * t, r0[1] + r[1] * t, r0[2] + r[2] * t]
        const h = Math.hypot(ip[0], ip[1], ip[2]) - R_PLANET
        const sR = Math.exp(-h / SH_RLH) * iStep
        const sM = Math.exp(-h / SH_MIE) * iStep
        odR += sR
        odM += sM
        odO += oz(h) * iStep
        const sh = rsi(ip, s, R_PLANET)
        if (sh[0] > 0 && sh[0] < 1e5) continue
        const jStep = rsi(ip, s, R_ATMOS)[1] / J
        let jR = 0
        let jM = 0
        let jO = 0
        for (let j = 0; j < J; j++) {
            const u = jStep * (j + 0.5)
            const jh = Math.hypot(ip[0] + s[0] * u, ip[1] + s[1] * u, ip[2] + s[2] * u) - R_PLANET
            jR += Math.exp(-jh / SH_RLH) * jStep
            jM += Math.exp(-jh / SH_MIE) * jStep
            jO += oz(jh) * jStep
        }
        for (let k = 0; k < 3; k++) {
            const at = Math.exp(-(K_MIE * 1.1 * (odM + jM) + K_RLH[k] * (odR + jR) + K_OZO[k] * (odO + jO)))
            tot[k] += sR * at
            tot[k + 3] += sM * at
        }
    }
    return [0, 1, 2].map((k) => iSun * (pR * K_RLH[k] * tot[k] + pM * K_MIE * tot[k + 3]) + ms[k] * (1 - Math.exp(-(K_RLH[k] * odR + K_MIE * odM))))
}

export function createSky(renderer, { lowPower = false } = {}) {
    const state = {
        elev: 10,
        azim: 180,
        dir: new THREE.Vector3(),
        sunColor: new THREE.Color(), // sunlight reaching the ground (linear, ~0..1)
        night: 0, // 0 day … 1 full night
        dusk: 0, // how golden the light is
    }

    // 1) the panorama, rendered with the scattering shader
    const pano = new THREE.WebGLRenderTarget(PANO_W, PANO_H, {
        type: THREE.HalfFloatType,
        depthBuffer: false,
        generateMipmaps: false,
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        wrapS: THREE.RepeatWrapping,
        colorSpace: THREE.LinearSRGBColorSpace,
    })
    pano.texture.mapping = THREE.EquirectangularReflectionMapping
    const bakeU = {
        uSun: { value: state.dir },
        uNight: { value: 0 },
        uMs: { value: new THREE.Vector3() },
    }
    const bakeMat = new THREE.ShaderMaterial({
        uniforms: bakeU,
        depthTest: false,
        depthWrite: false,
        vertexShader: /* glsl */ `varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
        fragmentShader: /* glsl */ `
            ${ATMOSPHERE_GLSL}
            ${PANO_GLSL}
            uniform vec3 uSun; uniform float uNight;
            varying vec2 vUv;
            void main() {
                vec3 d = panoDir(vUv);
                vec3 dd = normalize(vec3(d.x, max(d.y, 0.0015), d.z));
                vec3 col = atmosphere(dd, uSun, ${SUN_POWER.toFixed(1)});
                // the night sky is not black: airglow and starlight
                col += vec3(0.0045, 0.007, 0.015) * (0.4 + 0.6 * smoothstep(-0.1, 0.6, d.y)) * uNight;
                // below the horizon: the land and the water under this sky
                if (d.y < 0.0) col *= mix(0.32, 0.12, smoothstep(0.0, -0.3, d.y));
                gl_FragColor = vec4(col, 1.0);
            }
        `,
    })
    const bakeScene = new THREE.Scene()
    bakeScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), bakeMat))
    const bakeCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    // 2) image-based lighting from the panorama (re-laid out as a standard equirect first)
    const pmrem = new THREE.PMREMGenerator(renderer)
    let env = null
    const envSrc = new THREE.WebGLRenderTarget(256, 128, {
        type: THREE.HalfFloatType,
        depthBuffer: false,
        generateMipmaps: false,
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        colorSpace: THREE.LinearSRGBColorSpace,
    })
    envSrc.texture.mapping = THREE.EquirectangularReflectionMapping
    const copyMat = new THREE.ShaderMaterial({
        uniforms: { uPano: { value: pano.texture } },
        depthTest: false,
        depthWrite: false,
        vertexShader: /* glsl */ `varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
        fragmentShader: /* glsl */ `
            ${PANO_GLSL}
            uniform sampler2D uPano; varying vec2 vUv;
            void main() {
                // three.js equirect: u from atan(dir.z, dir.x), v from asin(dir.y)
                float phi = (vUv.x - 0.5) * 6.283185307;
                float th = (vUv.y - 0.5) * 3.14159265;
                vec3 d = vec3(cos(th) * cos(phi), sin(th), cos(th) * sin(phi));
                gl_FragColor = vec4(texture2D(uPano, panoUV(d)).rgb, 1.0);
            }
        `,
    })
    const copyScene = new THREE.Scene()
    copyScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), copyMat))

    // 3) the sky you see: the panorama + the sun + clouds
    const U = {
        uPano: { value: pano.texture },
        uSun: { value: state.dir },
        uSunCol: { value: new THREE.Color() },
        uTime: { value: 0 },
        uNight: { value: 0 },
        uCloud: { value: 0.56 }, // cover
        uAmbient: { value: new THREE.Color() },
        uDim: { value: 1 },
        uMoon: { value: MOON.clone() },
        uSunVis: { value: 1 },
    }
    const skyMat = new THREE.ShaderMaterial({
        uniforms: U,
        side: THREE.BackSide,
        depthWrite: false,
        fog: false,
        vertexShader: /* glsl */ `
            varying vec3 vDir;
            void main() {
                vDir = normalize(position);
                vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                gl_Position = p.xyww; // on the far plane
            }
        `,
        fragmentShader: /* glsl */ `
            ${PANO_GLSL}
            uniform sampler2D uPano; uniform vec3 uSun; uniform vec3 uSunCol; uniform float uTime;
            uniform float uNight; uniform float uCloud; uniform vec3 uAmbient; uniform float uDim; uniform vec3 uMoon; uniform float uSunVis;
            varying vec3 vDir;

            float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
            float noise(vec2 p) {
                vec2 i = floor(p); vec2 f = fract(p);
                vec2 u = f * f * (3.0 - 2.0 * f);
                return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
            }
            float fbm(vec2 p) {
                float v = 0.0; float a = 0.5;
                for (int i = 0; i < ${lowPower ? 4 : 6}; i++) { v += a * noise(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; }
                return v;
            }

            void main() {
                vec3 d = normalize(vDir);
                vec3 col = texture2D(uPano, panoUV(d)).rgb;

                // the sun disc, coloured by the air it shines through
                float cs = dot(d, uSun);
                float disc = smoothstep(0.99996, 0.99999, cs);
                col += uSunCol * (disc * 4000.0 + pow(max(cs, 0.0), 2200.0) * 40.0) * uSunVis;

                // the moon, and its glow in the air
                float cm = dot(d, uMoon);
                vec3 moonCol = vec3(0.9, 0.93, 1.0) * uNight;
                col += moonCol * smoothstep(0.99992, 0.99996, cm) * 2.5;
                col += moonCol * pow(max(cm, 0.0), 300.0) * 0.012;

                // clouds: a thin layer high up, lit by the sun from the side it is on
                if (d.y > 0.0) {
                    vec2 p = d.xz / (d.y + 0.08) * 1.1;
                    vec2 wind = vec2(uTime * 0.004, uTime * 0.0015);
                    float n = fbm(p * 1.4 + wind);
                    float n2 = fbm(p * 3.3 - wind * 1.6 + n);
                    float cover = smoothstep(1.0 - uCloud, 1.0 - uCloud + 0.28, n * 0.75 + n2 * 0.35);
                    float fade = smoothstep(0.0, 0.18, d.y);
                    // light: the sunny edge of a cloud is bright, the thick middle darker
                    float thick = smoothstep(0.2, 1.0, cover);
                    float fwd = pow(max(cs, 0.0), 6.0);
                    vec3 lit = uSunCol * ${SUN_POWER.toFixed(1)} * (0.018 + 0.06 * fwd) * (1.0 - thick * 0.55);
                    vec3 cloud = uAmbient * (0.9 - thick * 0.35) + lit;
                    col = mix(col, cloud, cover * fade * 0.92);
                }
                gl_FragColor = vec4(col * uDim, 1.0);
            }
        `,
    })
    const sky = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 32), skyMat)
    sky.scale.setScalar(40000)
    sky.frustumCulled = false
    sky.renderOrder = -10

    // 4) stars, for the night
    const stars = (() => {
        const count = lowPower ? 900 : 2400
        const pos = new Float32Array(count * 3)
        const size = new Float32Array(count)
        for (let i = 0; i < count; i++) {
            const u = Math.random() * Math.PI * 2
            const y = Math.pow(Math.random(), 0.7) * 0.98 + 0.02
            const r = Math.sqrt(1 - y * y)
            pos.set([Math.cos(u) * r * 38000, y * 38000, Math.sin(u) * r * 38000], i * 3)
            size[i] = Math.pow(Math.random(), 3)
        }
        const g = new THREE.BufferGeometry()
        g.setAttribute("position", new THREE.BufferAttribute(pos, 3))
        g.setAttribute("aSize", new THREE.BufferAttribute(size, 1))
        const m = new THREE.ShaderMaterial({
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            uniforms: { uTime: { value: 0 }, uOpacity: { value: 0 }, uPx: { value: 1 } },
            vertexShader: /* glsl */ `
                attribute float aSize; uniform float uTime; uniform float uPx; varying float vA;
                void main() {
                    vA = (0.25 + aSize) * (0.7 + 0.3 * sin(uTime * (0.8 + aSize * 3.0) + aSize * 90.0));
                    gl_PointSize = (1.0 + aSize * 2.2) * uPx;
                    vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    gl_Position = p.xyww;
                }
            `,
            fragmentShader: /* glsl */ `
                uniform float uOpacity; varying float vA;
                void main() { float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard; gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * vA * uOpacity * (1.0 - d * 2.0) * 0.12, 1.0); }
            `,
        })
        const p = new THREE.Points(g, m)
        p.frustumCulled = false
        p.renderOrder = -9
        return p
    })()

    const group = new THREE.Group()
    group.add(sky, stars)

    // the light that reaches the scene: sunlight and the sky around
    const ambient = new THREE.Color()
    let lastBake = null
    let lastEnv = null

    let ms = [0, 0, 0]
    function setSun(elev, azim = state.azim) {
        state.elev = elev
        state.azim = azim
        const e = THREE.MathUtils.degToRad(elev)
        const a = THREE.MathUtils.degToRad(azim)
        state.dir.set(Math.cos(e) * Math.cos(a), Math.sin(e), Math.cos(e) * Math.sin(a))
        sunTransmittance(elev, state.sunColor)
        state.night = THREE.MathUtils.smoothstep(-elev, 1, 10)
        state.dusk = 1 - THREE.MathUtils.smoothstep(elev, 2, 22)
        // multiple scattering, roughly: the zenith sky glowing back into the air
        const z = atmosphereJS([0, 1, 0], [state.dir.x, state.dir.y, state.dir.z], SUN_POWER)
        ms = [z[0] * 4, z[1] * 4, z[2] * 4]
        bakeU.uMs.value.set(ms[0], ms[1], ms[2])
        U.uSunCol.value.copy(state.sunColor)
        U.uNight.value = state.night
        bakeU.uNight.value = state.night
        stars.material.uniforms.uOpacity.value = THREE.MathUtils.smoothstep(-elev, 3, 11)
    }

    function bake(force = false) {
        const key = `${state.elev.toFixed(2)}|${state.azim.toFixed(1)}`
        if (key === lastBake && !force) return false
        lastBake = key
        const prev = renderer.getRenderTarget()
        renderer.setRenderTarget(pano)
        renderer.render(bakeScene, bakeCam)
        renderer.setRenderTarget(prev)
        // the light of the whole sky, for the cloud undersides
        skyAt(0, 1, 0, ambient)
        U.uAmbient.value.copy(ambient).multiplyScalar(1.4)
        // the lighting is rebuilt less often: it is slow and changes slowly
        if (force || lastEnv === null || Math.abs(state.elev - lastEnv) > 0.6) {
            lastEnv = state.elev
            const old = env
            renderer.setRenderTarget(envSrc)
            renderer.render(copyScene, bakeCam)
            renderer.setRenderTarget(prev)
            env = pmrem.fromEquirectangular(envSrc.texture)
            if (old) old.dispose()
            return true
        }
        return false
    }

    // the sky colour in one direction, on the CPU (same physics, used for a few numbers)
    function skyAt(x, y, z, out = new THREE.Color()) {
        const v = atmosphereJS([x, Math.max(y, 0.0015), z], [state.dir.x, state.dir.y, state.dir.z], SUN_POWER, ms)
        const n = state.night * (0.4 + 0.6 * THREE.MathUtils.smoothstep(y, -0.1, 0.6))
        return out.setRGB(v[0] + 0.0045 * n, v[1] + 0.007 * n, v[2] + 0.015 * n)
    }

    return {
        group,
        sky,
        stars,
        state,
        uniforms: U,
        pano,
        get env() {
            return env ? env.texture : null
        },
        ambient,
        skyAt,
        setSun,
        bake,
        update(t) {
            U.uTime.value = t
            stars.material.uniforms.uTime.value = t
        },
    }
}
