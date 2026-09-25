import * as THREE from "three"
import { WAVE_GLSL } from "./waves.js"

/* ================================================================
   The harbour: water, sky, stars, the hills around the fjord and the
   LiDAR beam. The water shader also draws the LiDAR returns: rings and a
   rotating sweep that light up dots on the surface around the boat.
   ================================================================ */

export const COLORS = {
    abyss: new THREE.Color("#07060d"),
    deep: new THREE.Color("#0c0a18"),
    horizon: new THREE.Color("#1a1030"),
    violet: new THREE.Color("#7c469c"),
    lavender: new THREE.Color("#d6baec"),
    cardinal: new THREE.Color("#f2c230"),
    moon: new THREE.Color("#f1e6ff"),
}

export const MOON_DIR = new THREE.Vector3(-0.55, 0.32, -0.77).normalize()

export function createWater(segments) {
    const geo = new THREE.PlaneGeometry(700, 700, segments, segments)
    geo.rotateX(-Math.PI / 2)
    const mat = new THREE.ShaderMaterial({
        transparent: true,
        uniforms: {
            uTime: { value: 0 },
            uAmp: { value: 1 },
            uOpacity: { value: 1 },
            uBoat: { value: new THREE.Vector2() },
            uSweep: { value: 1 },
            uSweepAngle: { value: 0 },
            uGrid: { value: 0.35 },
            uDim: { value: 1 },
            uCam: { value: new THREE.Vector3() },
            uMoon: { value: MOON_DIR },
            uDeep: { value: COLORS.deep },
            uHorizon: { value: COLORS.horizon },
            uLav: { value: COLORS.lavender },
            uViolet: { value: COLORS.violet },
            uFogFar: { value: 320 },
        },
        vertexShader: /* glsl */ `
            uniform float uTime; uniform float uAmp;
            varying vec3 vPos; varying vec3 vN;
            ${WAVE_GLSL}
            void main() {
                vec3 p = position;
                vec3 w = waveH(p.xz, uTime, uAmp);
                p.y += w.x;
                vN = normalize(vec3(-w.y, 1.0, -w.z));
                vPos = p;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
            }
        `,
        fragmentShader: /* glsl */ `
            uniform float uTime; uniform float uOpacity; uniform vec2 uBoat;
            uniform float uSweep; uniform float uSweepAngle; uniform float uGrid; uniform float uDim;
            uniform vec3 uCam; uniform vec3 uMoon; uniform vec3 uDeep; uniform vec3 uHorizon;
            uniform vec3 uLav; uniform vec3 uViolet; uniform float uFogFar;
            varying vec3 vPos; varying vec3 vN;
            void main() {
                vec3 V = normalize(uCam - vPos);
                vec3 N = normalize(vN);
                float fres = pow(1.0 - max(dot(N, V), 0.0), 4.0);
                vec3 col = mix(uDeep, uHorizon * 1.4, fres);

                // moonlight glitter
                vec3 R = reflect(-uMoon, N);
                float spec = pow(max(dot(R, V), 0.0), 420.0);
                col += vec3(0.95, 0.9, 1.0) * spec * 0.55;

                // nautical chart grid, every 8 units
                vec2 g = abs(fract(vPos.xz / 8.0) - 0.5);
                float grid = 1.0 - smoothstep(0.0, 0.035, min(g.x, g.y));
                col += uLav * grid * 0.06 * uGrid;

                // LiDAR: rings and a rotating sweep around the boat
                vec2 d = vPos.xz - uBoat;
                float r = length(d);
                float ringR = mod(uTime * 11.0, 70.0);
                float ring = exp(-pow((r - ringR) * 0.45, 2.0)) * (1.0 - ringR / 70.0);
                float ang = atan(d.y, d.x);
                float diff = mod(uSweepAngle - ang, 6.28318);
                float sweep = exp(-diff * 3.2) * smoothstep(55.0, 4.0, r);
                vec2 cell = fract(vPos.xz * 0.9) - 0.5;
                float dots = smoothstep(0.16, 0.02, length(cell));
                float lidar = (ring * 0.9 + sweep) * uSweep;
                col += uLav * lidar * (0.25 + dots * 1.4);
                col += uViolet * smoothstep(9.0, 0.0, r) * 0.18 * uSweep;

                // distance fog into the horizon
                float dist = length(vPos - uCam);
                float fog = smoothstep(40.0, uFogFar, dist);
                col = mix(col, uHorizon * 0.9, fog);
                col *= uDim;
                gl_FragColor = vec4(col, uOpacity);
            }
        `,
    })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.frustumCulled = false
    return mesh
}

export function createSky() {
    const geo = new THREE.SphereGeometry(900, 48, 24)
    const mat = new THREE.ShaderMaterial({
        side: THREE.BackSide,
        depthWrite: false,
        uniforms: {
            uHorizon: { value: COLORS.horizon },
            uTop: { value: COLORS.abyss },
            uMoon: { value: MOON_DIR },
            uDim: { value: 1 },
        },
        vertexShader: /* glsl */ `
            varying vec3 vDir;
            void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `,
        fragmentShader: /* glsl */ `
            uniform vec3 uHorizon; uniform vec3 uTop; uniform vec3 uMoon; uniform float uDim;
            varying vec3 vDir;
            void main() {
                float h = clamp(vDir.y, -0.2, 1.0);
                vec3 col = mix(uHorizon * 1.15, uTop, smoothstep(-0.02, 0.45, h));
                float m = max(dot(vDir, uMoon), 0.0);
                col += vec3(0.85, 0.75, 1.0) * (pow(m, 900.0) * 3.0 + pow(m, 40.0) * 0.18 + pow(m, 6.0) * 0.05);
                gl_FragColor = vec4(col * uDim, 1.0);
            }
        `,
    })
    return new THREE.Mesh(geo, mat)
}

export function createStars(count) {
    const pos = new Float32Array(count * 3)
    const size = new Float32Array(count)
    for (let i = 0; i < count; i++) {
        const u = Math.random() * Math.PI * 2
        const v = 0.04 + Math.random() * 0.96
        const y = Math.pow(v, 0.8)
        const r = Math.sqrt(1 - y * y)
        pos[i * 3] = Math.cos(u) * r * 850
        pos[i * 3 + 1] = y * 850
        pos[i * 3 + 2] = Math.sin(u) * r * 850
        size[i] = Math.random()
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3))
    geo.setAttribute("aSize", new THREE.BufferAttribute(size, 1))
    const mat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: { uTime: { value: 0 }, uOpacity: { value: 1 }, uPx: { value: 1 } },
        vertexShader: /* glsl */ `
            attribute float aSize; uniform float uTime; uniform float uPx; varying float vA;
            void main() {
                vA = 0.35 + 0.65 * (0.5 + 0.5 * sin(uTime * (0.6 + aSize * 2.0) + aSize * 40.0));
                gl_PointSize = (0.6 + aSize * 1.8) * uPx;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: /* glsl */ `
            uniform float uOpacity; varying float vA;
            void main() { float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard; gl_FragColor = vec4(vec3(0.9, 0.85, 1.0), vA * uOpacity * (1.0 - d * 2.0)); }
        `,
    })
    return new THREE.Points(geo, mat)
}

/* Low hills all around the fjord, drawn dark with a faint lavender rim */
export function createHills() {
    const seg = 220
    const pos = []
    const col = []
    const idx = []
    const top = new THREE.Color("#241a36")
    const bottom = new THREE.Color("#0b0914")
    const noise = (a) => Math.sin(a * 3.1) * 0.5 + Math.sin(a * 7.3 + 1.3) * 0.28 + Math.sin(a * 17.9 + 0.4) * 0.14 + Math.sin(a * 41.7) * 0.06
    for (let i = 0; i <= seg; i++) {
        const a = (i / seg) * Math.PI * 2
        const r = 380 + Math.sin(a * 2.2) * 30
        const h = 14 + (noise(a) * 0.5 + 0.5) * 42 + (Math.cos(a - 2.2) > 0.6 ? 22 : 0)
        pos.push(Math.cos(a) * r, -4, Math.sin(a) * r)
        pos.push(Math.cos(a) * r, h, Math.sin(a) * r)
        col.push(bottom.r, bottom.g, bottom.b, top.r, top.g, top.b)
        if (i < seg) {
            const k = i * 2
            idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2)
        }
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3))
    geo.setAttribute("color", new THREE.Float32BufferAttribute(col, 3))
    geo.setIndex(idx)
    const mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide, fog: true, transparent: true }))
    // ridge line
    const ridge = []
    for (let i = 0; i <= seg; i++) ridge.push(pos[i * 6 + 3], pos[i * 6 + 4], pos[i * 6 + 5])
    const rg = new THREE.BufferGeometry()
    rg.setAttribute("position", new THREE.Float32BufferAttribute(ridge, 3))
    const line = new THREE.Line(rg, new THREE.LineBasicMaterial({ color: COLORS.violet, transparent: true, opacity: 0.55, fog: true }))
    const g = new THREE.Group()
    g.add(mesh, line)
    // a few harbour lights along the shore
    const lights = []
    for (let i = 0; i < 90; i++) {
        const a = Math.random() * Math.PI * 2
        const r = 360 + Math.random() * 20
        lights.push(Math.cos(a) * r, 0.5 + Math.random() * 5, Math.sin(a) * r)
    }
    const lg = new THREE.BufferGeometry()
    lg.setAttribute("position", new THREE.Float32BufferAttribute(lights, 3))
    const lp = new THREE.Points(lg, new THREE.PointsMaterial({ color: new THREE.Color("#ffd98a"), size: 2.2, sizeAttenuation: false, transparent: true, opacity: 0.8, fog: true }))
    g.add(lp)
    return g
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
        uniforms: { uOpacity: { value: 1 }, uColor: { value: COLORS.lavender } },
        vertexShader: /* glsl */ `varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
        fragmentShader: /* glsl */ `
            uniform float uOpacity; uniform vec3 uColor; varying vec2 vP;
            void main(){ float r = length(vP); float a = (1.0 - r / 48.0); gl_FragColor = vec4(uColor, a * a * 0.07 * uOpacity); }
        `,
    })
    return new THREE.Mesh(geo, mat)
}
