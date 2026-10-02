import * as THREE from "three"
import { PANO_GLSL } from "./sky.js"

/* Aerial perspective for ordinary three.js materials: the further away a
   thing is, the more it takes the colour of the sky behind it (read from the
   sky panorama). This is what makes far hills blue and hazy. */
export const AIR = {
    uPano: { value: null },
    uFog: { value: 120000 }, // clear Nordic air (about 35 km): the far hills keep their colour
    uNight: { value: 0 },
}

/* windows: true   lit windows at night, on a grid in world space (the town)
            "facade" windows that follow each house: attribute aFac = (along the wall,
                     height) in scene units, aRoof = 1 on the roof. White frames and dark
                     glass by day, warm light in many of them at night (the wharves).
   terrain: true    forest texture on the land: clumps of trees, clearings, rock
*/
export function withAir(material, { windows = false, terrain = false } = {}) {
    const facade = windows === "facade"
    material.onBeforeCompile = (sh) => {
        Object.assign(sh.uniforms, AIR)
        sh.vertexShader = sh.vertexShader
            .replace(
                "#include <common>",
                "#include <common>\nvarying vec3 vAirPos;\nvarying vec3 vAirN;" +
                    (windows ? "\nattribute float aRoof;\nvarying float vRoof;" : "") +
                    (facade ? "\nattribute vec2 aFac;\nvarying vec2 vFac;" : "")
            )
            .replace(
                "#include <project_vertex>",
                `#include <project_vertex>
                vec4 airWp = vec4(transformed, 1.0);
                vec3 airN = objectNormal;
                #ifdef USE_INSTANCING
                    airWp = instanceMatrix * airWp;
                    airN = mat3(instanceMatrix) * airN;
                #endif
                vAirPos = (modelMatrix * airWp).xyz;
                vAirN = normalize(mat3(modelMatrix) * airN);
                ${windows ? "vRoof = aRoof;" : ""}
                ${facade ? "vFac = aFac;" : ""}`
            )
        sh.fragmentShader = sh.fragmentShader
            .replace(
                "#include <common>",
                `#include <common>
                ${PANO_GLSL}
                uniform sampler2D uPano; uniform float uFog; uniform float uNight;
                varying vec3 vAirPos; varying vec3 vAirN;
                ${windows ? "varying float vRoof;" : ""}
                ${facade ? "varying vec2 vFac;" : ""}
                float airHash(vec2 p) { return fract(sin(dot(p, vec2(41.3, 289.1))) * 17853.853); }
                float airNoise(vec2 p) {
                    vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
                    return mix(mix(airHash(i), airHash(i + vec2(1.0, 0.0)), f.x), mix(airHash(i + vec2(0.0, 1.0)), airHash(i + vec2(1.0, 1.0)), f.x), f.y);
                }`
            )
            .replace(
                "#include <color_fragment>",
                terrain
                    ? `#include <color_fragment>
                    {
                        // trees: dark clumps and lighter gaps at a few sizes, fading out far away
                        vec2 q = vAirPos.xz;
                        float camD = length(vAirPos - cameraPosition);
                        float n = airNoise(q / 14.0) * 0.45 + airNoise(q / 55.0) * 0.35 + airNoise(q / 260.0) * 0.2;
                        float k = smoothstep(9000.0, 1500.0, camD) * smoothstep(2.0, 12.0, vAirPos.y);
                        diffuseColor.rgb *= mix(1.0, 0.55 + n * 0.95, k);
                        // and far off, darker stands of spruce and lighter birch and bog in big patches
                        float kf = smoothstep(30000.0, 4000.0, camD) * (1.0 - k) * smoothstep(2.0, 12.0, vAirPos.y);
                        diffuseColor.rgb *= mix(1.0, 0.6 + 0.8 * (airNoise(q / 700.0) * 0.6 + airNoise(q / 2300.0) * 0.4), kf);
                        // grey rock where it is steep: cliffs and screes break through the forest
                        float steep = smoothstep(0.86, 0.62, vAirN.y) * smoothstep(4.0, 20.0, vAirPos.y);
                        float rocky = steep * smoothstep(0.38, 0.62, airNoise(q / 46.0) * 0.6 + airNoise(q / 12.0) * 0.4);
                        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.13, 0.125, 0.115) * (0.75 + 0.5 * airNoise(q / 6.0)), rocky * 0.85);
                    }`
                    : "#include <color_fragment>"
            )
            .replace(
                "#include <emissivemap_fragment>",
                facade
                    ? `#include <emissivemap_fragment>
                    {
                        // windows in rows on each wall: white frames, dark glass, light at night
                        float wall = (1.0 - step(0.5, abs(vAirN.y))) * (1.0 - vRoof);
                        vec2 cs = vec2(6.5, 9.0);
                        vec2 cell = floor(vFac / cs);
                        vec2 f = fract(vFac / cs);
                        float inX = step(0.3, f.x) * step(f.x, 0.7);
                        float inY = step(0.32, f.y) * step(f.y, 0.8);
                        float frX = step(0.25, f.x) * step(f.x, 0.75);
                        float frY = step(0.27, f.y) * step(f.y, 0.85);
                        float win = inX * inY * step(0.5, vFac.y) * wall;
                        float frame = frX * frY * (1.0 - inX * inY) * step(0.5, vFac.y) * wall;
                        // a glazing bar across the middle
                        win *= 1.0 - step(abs(f.x - 0.5), 0.018);
                        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.8, 0.8, 0.78), frame);
                        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.02, 0.025, 0.03), win);
                        float on = step(0.42, airHash(cell + floor(vAirPos.xz / 23.0) * 7.0));
                        totalEmissiveRadiance += vec3(1.0, 0.66, 0.34) * win * on * uNight * 1.1;
                        // dark tarred planks under the floor line, darker roofs
                        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.55, (1.0 - step(0.5, vFac.y)) * wall);
                        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.8, smoothstep(0.35, 0.5, abs(fract(vFac.x * 1.6) - 0.5)) * wall * 0.5);
                    }`
                    : windows
                    ? `#include <emissivemap_fragment>
                    {
                        // lit windows at night, on the walls of the buildings
                        float wall = (1.0 - step(0.5, abs(vAirN.y))) * (1.0 - vRoof);
                        vec2 g = vec2(abs(vAirN.x) > abs(vAirN.z) ? vAirPos.z : vAirPos.x, vAirPos.y);
                        vec2 cell = floor(g / vec2(7.0, 9.5));
                        vec2 f = fract(g / vec2(7.0, 9.5));
                        float win = step(0.3, f.x) * step(f.x, 0.72) * step(0.35, f.y) * step(f.y, 0.78);
                        float on = step(0.76, airHash(cell + floor(vAirPos.xz / 40.0)));
                        totalEmissiveRadiance += vec3(1.0, 0.72, 0.42) * win * on * wall * uNight * 0.7;
                        // by day: dark glass in light frames, so the walls read as houses, not boxes
                        // (far off a window is under a pixel: then it only darkens the wall a little, no speckle)
                        float winNear = smoothstep(6000.0, 2400.0, length(vAirPos - cameraPosition));
                        float frame = step(0.24, f.x) * step(f.x, 0.78) * step(0.29, f.y) * step(f.y, 0.84) * (1.0 - win);
                        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.78, 0.78, 0.75), frame * wall * 0.6 * winNear);
                        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.035, 0.045, 0.055), win * wall * 0.85 * winNear);
                        diffuseColor.rgb *= 1.0 - wall * 0.12 * (1.0 - winNear);
                        // facades a touch darker under the roofs
                        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.045, 0.045, 0.05), vRoof);
                    }`
                    : "#include <emissivemap_fragment>"
            )
            .replace(
                "#include <lights_fragment_end>",
                terrain
                    ? `#include <lights_fragment_end>
                    // a forest is no mirror: seen almost edge-on (far lowland) it must not shine with the bright horizon
                    reflectedLight.indirectSpecular *= 0.08;
                    reflectedLight.directSpecular *= 0.3;`
                    : "#include <lights_fragment_end>"
            )
            .replace(
                "#include <normal_fragment_maps>",
                terrain
                    ? `#include <normal_fragment_maps>
                    {
                        // the forest is bumpy: crowns and clumps catch the low sun, so the hills read as wooded, not smooth
                        vec2 q = vAirPos.xz;
                        float camD = length(vAirPos - cameraPosition);
                        float near = smoothstep(2600.0, 500.0, camD);
                        float mid = smoothstep(9000.0, 1200.0, camD);
                        // far away only the big shapes: gullies, spurs and knolls on the hillsides
                        float far = smoothstep(28000.0, 3000.0, camD);
                        float fade = smoothstep(3.0, 14.0, vAirPos.y);
                        if ((mid + far) * fade > 0.0) {
                            float e = 4.0;
                            // each size of bump about as steep as the others (weight grows with size)
                            #define AIR_CANOPY(p) (airNoise((p) / 9.0) * near + airNoise((p) / 34.0) * 3.4 * mid + airNoise((p) / 130.0) * 9.0 * mid + airNoise((p) / 480.0) * 30.0 * far + airNoise((p) / 1500.0) * 85.0 * far)
                            float h0 = AIR_CANOPY(q);
                            float hx = AIR_CANOPY(q + vec2(e, 0.0));
                            float hz = AIR_CANOPY(q + vec2(0.0, e));
                            vec3 g = vec3(h0 - hx, 0.0, h0 - hz) * (1.5 / e) * fade;
                            normal = normalize(normal + (viewMatrix * vec4(g, 0.0)).xyz);
                        }
                    }`
                    : "#include <normal_fragment_maps>"
            )
            .replace(
                "#include <fog_fragment>",
                `#include <fog_fragment>
                {
                    vec3 airD = vAirPos - cameraPosition;
                    float airL = length(airD);
                    vec3 airV = airD / airL;
                    vec3 air = texture2D(uPano, panoUV(normalize(vec3(airV.x, max(airV.y, 0.0) * 0.35 + 0.004, airV.z)))).rgb;
                    gl_FragColor.rgb = mix(gl_FragColor.rgb, air, 1.0 - exp(-airL / uFog));
                }`
            )
    }
    material.customProgramCacheKey = () => (facade ? "air-facade" : windows ? "air-windows" : terrain ? "air-terrain" : "air")
    return material
}
