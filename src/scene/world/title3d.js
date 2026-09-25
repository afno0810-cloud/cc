import * as THREE from "three"

/* A big title set in the site's display font, drawn into a texture and
   placed in the scene behind the boat, so the boat sits in front of the
   words and they move with the camera. */
export async function createTitle3D(text, { color = "#f1f4f8", glow = "#b9c9e6" } = {}) {
    const family = "Big Shoulders Display"
    try {
        await document.fonts.load(`800 200px "${family}"`, text)
    } catch (e) {
        /* the system font is fine as a fallback */
    }
    const words = text.toUpperCase()
    const H = 420
    const c = document.createElement("canvas")
    const g = c.getContext("2d")
    g.font = `800 ${H * 0.86}px "${family}", Impact, sans-serif`
    const w = Math.ceil(g.measureText(words).width) + 160
    c.width = Math.min(4096, w)
    c.height = H + 160
    g.font = `800 ${H * 0.86}px "${family}", Impact, sans-serif`
    g.textAlign = "center"
    g.textBaseline = "middle"
    // soft glow under the letters, then the letters
    g.shadowColor = glow
    g.shadowBlur = 28
    g.fillStyle = color
    g.fillText(words, c.width / 2, c.height / 2 + H * 0.04)
    g.shadowBlur = 0
    g.fillText(words, c.width / 2, c.height / 2 + H * 0.04)

    const tex = new THREE.CanvasTexture(c)
    tex.colorSpace = THREE.SRGBColorSpace
    tex.anisotropy = 4
    const aspect = c.width / c.height
    const mat = new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        depthWrite: false,
        fog: false,
        toneMapped: false,
        color: new THREE.Color(1.18, 1.2, 1.26),
        opacity: 0,
    })
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(aspect, 1), mat)
    // drawn after the water, but still behind the boat and the water in front of it
    mesh.renderOrder = 8
    mesh.userData.aspect = aspect
    return mesh
}
