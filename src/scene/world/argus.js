import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js"
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler.js"
import { COLORS } from "./sea.js"

/* ================================================================
   Argus: the Higgsfield mesh (made from our photos) plus a LiDAR-style
   point cloud sampled from its surface.

   One "cut" along the length of the boat (model x, bow = +x) splits it
   in two: behind the cut the boat is solid, in front of it the boat is
   a point cloud. Moving the cut scans the boat in or out of existence.
     uCut  –0.62 … 0.62   everything cloud … everything solid
     uGhost 0 / 1         cloud side: mesh hidden (scan-in) or dark x-ray
   Points near uHi glow yellow, which is how a part is highlighted even
   though the model is one mesh.
   ================================================================ */

export const CUT_ALL_SOLID = 0.62
export const CUT_ALL_CLOUD = -0.62

export function createArgus({ renderer, lowPower, onProgress }) {
    const model = new THREE.Group() // model units, centred, bow = +x

    const U = {
        uCut: { value: CUT_ALL_CLOUD },
        uGhost: { value: 0 },
        uTime: { value: 0 },
        uEdgeCol: { value: COLORS.ice.clone() },
        uEdgeGain: { value: 1 },
    }
    const P = {
        uCut: U.uCut,
        uTime: U.uTime,
        uAssemble: { value: 0 },
        uOpacity: { value: 1 },
        uGain: { value: 1 },
        uPx: { value: 1 },
        uProj: { value: 800 },
        uHi: { value: new THREE.Vector3(99, 99, 99) },
        uHiOn: { value: 0 },
        uHiR: { value: 0.2 },
        uLav: { value: COLORS.lavender },
        uYel: { value: COLORS.cardinal },
        uVio: { value: COLORS.violet },
    }

    function patch(material, meshToModel) {
        const m = material.clone()
        m.onBeforeCompile = (sh) => {
            Object.assign(sh.uniforms, U, { uMeshToModel: { value: meshToModel } })
            sh.vertexShader = sh.vertexShader
                .replace("#include <common>", "#include <common>\nuniform mat4 uMeshToModel;\nvarying vec3 vModelPos;")
                .replace("#include <begin_vertex>", "#include <begin_vertex>\nvModelPos = (uMeshToModel * vec4(transformed, 1.0)).xyz;")
            sh.fragmentShader = sh.fragmentShader
                .replace(
                    "#include <common>",
                    "#include <common>\nuniform float uCut;\nuniform float uGhost;\nuniform float uTime;\nuniform vec3 uEdgeCol;\nuniform float uEdgeGain;\nvarying vec3 vModelPos;"
                )
                .replace(
                    "#include <clipping_planes_fragment>",
                    "#include <clipping_planes_fragment>\nfloat side = vModelPos.x - uCut;\nif (side > 0.0 && uGhost < 0.5) discard;"
                )
                .replace(
                    "#include <opaque_fragment>",
                    `{
                        float ghostK = step(0.0, side) * uGhost;
                        float rim = pow(1.0 - abs(dot(normalize(normal), normalize(vViewPosition))), 2.2);
                        outgoingLight = mix(outgoingLight, outgoingLight * 0.12 + uEdgeCol * (rim * 0.35 + 0.015) * uEdgeGain, ghostK);
                        float edge = exp(-pow(side * 110.0, 2.0));
                        outgoingLight += uEdgeCol * edge * 2.2 * uEdgeGain;
                    }
                    #include <opaque_fragment>`
                )
        }
        m.customProgramCacheKey = () => "argus-cut"
        return m
    }

    function pointCloud(meshes, count) {
        const pos = new Float32Array(count * 3)
        const dir = new Float32Array(count * 3)
        const lum = new Float32Array(count)
        const seed = new Float32Array(count)
        // share points between meshes by triangle count
        const tris = meshes.map((m) => (m.geometry.index ? m.geometry.index.count : m.geometry.attributes.position.count) / 3)
        const total = tris.reduce((a, b) => a + b, 0)
        const p = new THREE.Vector3()
        const n = new THREE.Vector3()
        const uv = new THREE.Vector2()
        let k = 0
        meshes.forEach((mesh, mi) => {
            const want = mi === meshes.length - 1 ? count - k : Math.round((count * tris[mi]) / total)
            const sampler = new MeshSurfaceSampler(mesh).build()
            const toModel = mesh.userData.toModel
            const nm = new THREE.Matrix3().getNormalMatrix(toModel)
            const tex = texReader(mesh.material.map)
            for (let i = 0; i < want && k < count; i++, k++) {
                sampler.sample(p, n, undefined, uv)
                p.applyMatrix4(toModel)
                n.applyMatrix3(nm).normalize()
                p.addScaledVector(n, 0.004)
                pos.set([p.x, p.y, p.z], k * 3)
                // start of the fly-in: scattered around, mostly above and to the sides
                const a = Math.random() * Math.PI * 2
                const r = 0.4 + Math.random() * 1.1
                dir.set([Math.cos(a) * r, 0.2 + Math.random() * 0.9, Math.sin(a) * r], k * 3)
                lum[k] = tex ? tex(uv.x, uv.y) : 0.7
                seed[k] = Math.random()
            }
        })
        const g = new THREE.BufferGeometry()
        g.setAttribute("position", new THREE.BufferAttribute(pos, 3))
        g.setAttribute("aDir", new THREE.BufferAttribute(dir, 3))
        g.setAttribute("aLum", new THREE.BufferAttribute(lum, 1))
        g.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1))
        const mat = new THREE.ShaderMaterial({
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            uniforms: P,
            vertexShader: /* glsl */ `
                uniform float uCut; uniform float uTime; uniform float uAssemble; uniform float uPx; uniform float uProj;
                uniform vec3 uHi; uniform float uHiOn; uniform float uHiR;
                uniform vec3 uLav; uniform vec3 uYel; uniform vec3 uVio; uniform float uOpacity; uniform float uGain;
                attribute vec3 aDir; attribute float aLum; attribute float aSeed;
                varying vec3 vCol; varying float vA;
                void main() {
                    vec3 p = position;
                    float t = clamp((uAssemble * 1.6 - aSeed * 0.6), 0.0, 1.0);
                    t = 1.0 - pow(1.0 - t, 3.0);
                    p += aDir * (1.0 - t);
                    float side = position.x - uCut;
                    float cloud = smoothstep(-0.004, 0.004, side);
                    float edge = exp(-pow(side * 60.0, 2.0));
                    float hi = uHiOn * (1.0 - smoothstep(uHiR * 0.35, uHiR, distance(position, uHi)));
                    float twinkle = 0.75 + 0.25 * sin(uTime * 3.0 + aSeed * 40.0);
                    // cool white points with a touch of Marinor lilac
                    vec3 c = mix(vec3(0.42, 0.52, 0.74), mix(vec3(0.93, 0.95, 1.0), uLav, 0.25), 0.3 + aLum * 0.7);
                    c = mix(c, vec3(1.0), edge * 0.7);
                    c = mix(c, uYel * 2.2, hi);
                    vCol = c;
                    vA = (cloud * (0.45 + aLum * 0.7) * twinkle + edge * 1.2 + hi * 2.4) * uOpacity * uGain * (0.25 + 0.75 * t);
                    vec4 mv = modelViewMatrix * vec4(p, 1.0);
                    float size = 0.0085 * (1.0 + edge * 1.3 + hi * 1.4) * (1.0 + (1.0 - t) * 0.8);
                    gl_PointSize = max(1.0, uPx * size * uProj / -mv.z);
                    gl_Position = projectionMatrix * mv;
                }
            `,
            fragmentShader: /* glsl */ `
                varying vec3 vCol; varying float vA;
                void main() {
                    float d = length(gl_PointCoord - 0.5);
                    if (d > 0.5 || vA < 0.002) discard;
                    float a = vA * (1.0 - d * 1.9);
                    gl_FragColor = vec4(vCol * a, 1.0);
                }
            `,
        })
        const pts = new THREE.Points(g, mat)
        pts.frustumCulled = false
        pts.renderOrder = 6
        return pts
    }

    // brightness of the texture at a uv, so the cloud shows the boat's details
    function texReader(map) {
        if (!map || !map.image) return null
        try {
            const S = 256
            const c = document.createElement("canvas")
            c.width = c.height = S
            const g = c.getContext("2d", { willReadFrequently: true })
            g.drawImage(map.image, 0, 0, S, S)
            const d = g.getImageData(0, 0, S, S).data
            const flipY = map.flipY
            return (u, v) => {
                const x = Math.min(S - 1, Math.max(0, Math.floor(u * S)))
                const yy = flipY ? 1 - v : v
                const y = Math.min(S - 1, Math.max(0, Math.floor(yy * S)))
                const i = (y * S + x) * 4
                return (d[i] * 0.3 + d[i + 1] * 0.55 + d[i + 2] * 0.15) / 255
            }
        } catch (e) {
            return null
        }
    }

    let cloud = null
    const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder)
    const url = lowPower ? "/media/models/argus-lite.glb" : "/media/models/argus.glb"
    // a host page can hand over the model bytes itself (the one-file preview does); normally we fetch the GLB
    const fromHost = typeof window.__modelSource === "function" ? window.__modelSource(lowPower) : null
    const load = fromHost
        ? fromHost.then(
              (buf) =>
                  new Promise((res, rej) => {
                      // textures through <img> instead of fetch(), which strict hosts may block for blob: URLs
                      const cib = window.createImageBitmap
                      try {
                          window.createImageBitmap = undefined
                      } catch (e) {
                          /* read-only: keep the default */
                      }
                      loader.parse(buf, "", res, rej)
                      window.createImageBitmap = cib
                  })
          )
        : loader.loadAsync(url, (e) => e.total && onProgress && onProgress(e.loaded / e.total))
    const ready = load
        .then((gltf) => {
            const obj = gltf.scene
            const box = new THREE.Box3().setFromObject(obj)
            obj.position.sub(box.getCenter(new THREE.Vector3()))
            model.add(obj)
            model.updateMatrixWorld(true)
            const inv = new THREE.Matrix4().copy(model.matrixWorld).invert()
            const meshes = []
            obj.traverse((o) => {
                if (!o.isMesh) return
                o.userData.toModel = new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld)
                if (o.material.map) o.material.map.anisotropy = renderer.capabilities.getMaxAnisotropy()
                o.material.envMapIntensity = 1
                meshes.push(o)
            })
            cloud = pointCloud(meshes, lowPower ? 16000 : 42000)
            meshes.forEach((o) => (o.material = patch(o.material, o.userData.toModel)))
            model.add(cloud)
        })
        .catch((err) => {
            console.warn("Argus model failed to load", err)
            const m = new THREE.Mesh(new THREE.BoxGeometry(1, 0.2, 0.8), new THREE.MeshStandardMaterial({ color: 0xcfcfe0 }))
            model.add(m)
            U.uCut.value = CUT_ALL_SOLID
        })

    return {
        model,
        uniforms: U,
        points: P,
        ready,
        get cloud() {
            return cloud
        },
    }
}
