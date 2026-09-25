import * as THREE from "three"
import { PANO_GLSL } from "./sky.js"

/* Aerial perspective for ordinary three.js materials: the further away a
   thing is, the more it takes the colour of the sky behind it (read from the
   sky panorama). This is what makes far hills blue and hazy. */
export const AIR = {
    uPano: { value: null },
    uFog: { value: 24000 },
    uNight: { value: 0 },
}

export function withAir(material, { windows = false } = {}) {
    material.onBeforeCompile = (sh) => {
        Object.assign(sh.uniforms, AIR)
        sh.vertexShader = sh.vertexShader
            .replace("#include <common>", "#include <common>\nvarying vec3 vAirPos;\nvarying vec3 vAirN;" + (windows ? "\nattribute float aRoof;\nvarying float vRoof;" : ""))
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
                ${windows ? "vRoof = aRoof;" : ""}`
            )
        sh.fragmentShader = sh.fragmentShader
            .replace(
                "#include <common>",
                `#include <common>
                ${PANO_GLSL}
                uniform sampler2D uPano; uniform float uFog; uniform float uNight;
                varying vec3 vAirPos; varying vec3 vAirN;
                ${windows ? "varying float vRoof;" : ""}
                float airHash(vec2 p) { return fract(sin(dot(p, vec2(41.3, 289.1))) * 17853.853); }`
            )
            .replace(
                "#include <emissivemap_fragment>",
                windows
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
                        // facades a touch darker under the roofs
                        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.045, 0.045, 0.05), vRoof);
                    }`
                    : "#include <emissivemap_fragment>"
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
    material.customProgramCacheKey = () => (windows ? "air-windows" : "air")
    return material
}
