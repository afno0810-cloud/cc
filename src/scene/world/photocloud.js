import * as THREE from "three"

/* A photo as a LiDAR-style point cloud: every point takes the colour of
   the photo, and bright parts stand a little forward, so the picture has
   depth when the camera moves. The points fly in and lock into place;
   then the page shows the real photo on top. */
export const PHOTO_CENTER = new THREE.Vector3(0, 46, -240)

export async function createPhotoCloud(url, { lowPower }) {
    const img = new Image()
    img.decoding = "async"
    img.src = url
    await img.decode()
    const aspect = img.naturalWidth / img.naturalHeight
    const cols = lowPower ? 150 : 240
    const rows = Math.round(cols / aspect)
    const c = document.createElement("canvas")
    c.width = cols
    c.height = rows
    const g = c.getContext("2d", { willReadFrequently: true })
    g.drawImage(img, 0, 0, cols, rows)
    const data = g.getImageData(0, 0, cols, rows).data

    const WIDTH = 30 // world units
    const HEIGHT = WIDTH / aspect
    const n = cols * rows
    const pos = new Float32Array(n * 3)
    const col = new Float32Array(n * 3)
    const dir = new Float32Array(n * 3)
    const seed = new Float32Array(n)
    const lin = (v) => Math.pow(v / 255, 2.2)
    let k = 0
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            const i = (y * cols + x) * 4
            const r = data[i]
            const gg = data[i + 1]
            const b = data[i + 2]
            const lum = (r * 0.3 + gg * 0.55 + b * 0.15) / 255
            const jx = (Math.random() - 0.5) * 0.6
            const jy = (Math.random() - 0.5) * 0.6
            pos[k * 3] = ((x + 0.5 + jx) / cols - 0.5) * WIDTH
            pos[k * 3 + 1] = (0.5 - (y + 0.5 + jy) / rows) * HEIGHT
            pos[k * 3 + 2] = (lum - 0.5) * 2.4
            col[k * 3] = lin(r)
            col[k * 3 + 1] = lin(gg)
            col[k * 3 + 2] = lin(b)
            const a = Math.random() * Math.PI * 2
            const rr = 6 + Math.random() * 18
            dir[k * 3] = Math.cos(a) * rr
            dir[k * 3 + 1] = (Math.random() - 0.5) * 16
            dir[k * 3 + 2] = Math.sin(a) * rr * 0.5 - 14 - Math.random() * 20
            seed[k] = Math.random()
            k++
        }
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3))
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3))
    geo.setAttribute("aDir", new THREE.BufferAttribute(dir, 3))
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1))
    const U = {
        uAssemble: { value: 0 },
        uOpacity: { value: 0 },
        uTime: { value: 0 },
        uProj: { value: 800 },
        uSpacing: { value: (WIDTH / cols) * 1.35 },
        uScan: { value: -1 },
        uW: { value: WIDTH },
    }
    const pts = new THREE.Points(
        geo,
        new THREE.ShaderMaterial({
            transparent: true,
            depthWrite: false,
            blending: THREE.NormalBlending,
            uniforms: U,
            vertexColors: true,
            vertexShader: /* glsl */ `
                attribute vec3 aDir; attribute float aSeed;
                uniform float uAssemble; uniform float uTime; uniform float uProj; uniform float uSpacing; uniform float uScan; uniform float uW;
                varying vec3 vCol; varying float vA;
                void main() {
                    float t = clamp(uAssemble * 1.5 - aSeed * 0.5, 0.0, 1.0);
                    t = 1.0 - pow(1.0 - t, 4.0);
                    vec3 p = position + aDir * (1.0 - t);
                    // a scan line across the picture while it forms
                    float sx = (position.x / uW + 0.5);
                    float edge = exp(-pow((sx - uScan) * 30.0, 2.0));
                    vCol = mix(color * 1.1, vec3(0.9, 0.95, 1.0), clamp(edge * 0.9 + (1.0 - t) * 0.6, 0.0, 1.0));
                    vA = (0.25 + 0.75 * t);
                    vec4 mv = modelViewMatrix * vec4(p, 1.0);
                    gl_PointSize = clamp(uSpacing * (1.0 + edge * 0.8) * uProj / -mv.z, 1.0, 9.0);
                    gl_Position = projectionMatrix * mv;
                }
            `,
            fragmentShader: /* glsl */ `
                uniform float uOpacity; varying vec3 vCol; varying float vA;
                void main() {
                    float d = length(gl_PointCoord - 0.5);
                    if (d > 0.5) discard;
                    gl_FragColor = vec4(vCol, vA * uOpacity * (1.0 - smoothstep(0.35, 0.5, d)));
                }
            `,
        })
    )
    pts.frustumCulled = false
    pts.renderOrder = 7
    pts.position.copy(PHOTO_CENTER)
    return { points: pts, U, width: WIDTH, height: HEIGHT }
}
