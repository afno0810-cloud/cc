/* Three sine swells. The same numbers are used in the water shader and in JS,
   so the boat, the buoys and the camera ride on the waves you see. */

/* a harbour, not the open sea: a low swell and some chop (1 unit = 0.3 m) */
export const WAVES = [
    { dx: 0.8, dz: 0.6, k: 0.2, s: 1.0, a: 0.2 },
    { dx: -0.42, dz: 0.91, k: 0.36, s: 1.5, a: 0.12 },
    { dx: 0.95, dz: -0.31, k: 0.75, s: 2.3, a: 0.06 },
    { dx: 0.2, dz: -0.98, k: 1.3, s: 3.1, a: 0.025 },
]

export function waveHeight(x, z, t, amp) {
    let h = 0
    for (const w of WAVES) h += w.a * Math.sin((w.dx * x + w.dz * z) * w.k + t * w.s)
    return h * amp
}

/* slope along x and z, used to tilt floating things */
export function waveSlope(x, z, t, amp) {
    let sx = 0
    let sz = 0
    for (const w of WAVES) {
        const c = w.a * w.k * Math.cos((w.dx * x + w.dz * z) * w.k + t * w.s)
        sx += c * w.dx
        sz += c * w.dz
    }
    return [sx * amp, sz * amp]
}

export const WAVE_GLSL = `
vec3 waveH(vec2 p, float t, float amp) {
    float h = 0.0; float sx = 0.0; float sz = 0.0; float ph; float c;
    ${WAVES.map(
        (w) => `
    ph = (${w.dx.toFixed(3)} * p.x + ${w.dz.toFixed(3)} * p.y) * ${w.k.toFixed(3)} + t * ${w.s.toFixed(3)};
    h += ${w.a.toFixed(3)} * sin(ph);
    c = ${(w.a * w.k).toFixed(4)} * cos(ph);
    sx += c * ${w.dx.toFixed(3)}; sz += c * ${w.dz.toFixed(3)};`
    ).join("")}
    return vec3(h, sx, sz) * amp;
}
`
