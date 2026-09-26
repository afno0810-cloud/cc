import * as THREE from "three"
import { createGlobe, GLOBE_CENTER, GLOBE_R, PLACES } from "../scene/world/globe.js"
import { createPost } from "../scene/post.js"

/* ================================================================
   The globe with the route from Trondheim to Sarasota, in one box.

   mountGlobe(element, options):
     background  colour behind the globe
     labels      show the two places and the distance (the texts of the old site)
     loop        play the route again every few seconds
   The route draws itself when the box comes into view.
   ================================================================ */

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const lerp = (a, b, t) => a + (b - a) * t
const smooth = (t) => t * t * (3 - 2 * t)

const LABELS = [
    { key: "trondheim", html: "<b>Trondheim, Norway</b><span>Njord · every August</span>" },
    { key: "sarasota", html: "<b>Sarasota, Florida</b><span>RoboBoat · every February</span>" },
    { key: "mid", html: "<span>≈ 7 450 KM</span>" },
]

export function mountGlobe(el, options = {}) {
    const o = { background: "#0d0c16", labels: true, loop: false, ...options }
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches
    const lowPower = matchMedia("(pointer: coarse)").matches || (navigator.hardwareConcurrency || 8) <= 4

    const canvas = document.createElement("canvas")
    canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block"
    el.appendChild(canvas)
    let renderer
    try {
        renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false })
    } catch (e) {
        canvas.remove()
        return { set() {}, destroy() {} }
    }
    const dpr = Math.min(devicePixelRatio || 1, 1.5)
    renderer.setPixelRatio(dpr)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(o.background).convertSRGBToLinear()
    const camera = new THREE.PerspectiveCamera(38, 1, 1, 2000)
    const post = createPost(renderer, scene, camera, { lowPower })
    post.bloom.threshold = 0.9
    post.bloom.strength = 0.6
    post.grade.uniforms.uVig.value = 0.25

    // labels on top of the canvas
    const style = document.createElement("style")
    style.textContent = `
        .mg-pin{position:absolute;left:0;top:0;z-index:2;display:flex;flex-direction:column;gap:2px;padding:7px 10px;border-radius:8px;
        background:rgba(12,11,18,.72);border:1px solid rgba(214,206,232,.22);color:#f4f2f8;font:500 12px/1.3 ui-sans-serif,system-ui,sans-serif;
        white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .4s ease;transform:translate(var(--x),var(--y)) translate(12px,-50%)}
        .mg-pin.is-on{opacity:1}.mg-pin b{font-weight:600}.mg-pin span{font:500 10px/1.3 ui-monospace,Menlo,monospace;letter-spacing:.1em;text-transform:uppercase;color:#f2c230}`
    el.appendChild(style)
    const pinEls = LABELS.map((l) => {
        const d = document.createElement("div")
        d.className = "mg-pin"
        d.innerHTML = l.html
        el.appendChild(d)
        return { ...l, el: d }
    })

    let globe = null
    createGlobe({ lowPower }).then((g) => {
        if (dead) return
        globe = g
        globe.setOpacity(1)
        scene.add(globe.group)
        resize()
        raf = requestAnimationFrame(frame)
    })

    let W = 1
    let H = 1
    function resize() {
        W = Math.max(1, el.clientWidth)
        H = Math.max(1, el.clientHeight)
        renderer.setSize(W, H, false)
        camera.aspect = W / H
        camera.updateProjectionMatrix()
        post.setSize(W, H, dpr)
        if (globe) globe.setPx(1, (H * dpr) / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))))
    }
    const ro = new ResizeObserver(resize)
    ro.observe(el)

    // the route draws itself when the box comes into view
    let onScreen = false
    let startAt = -1
    const io = new IntersectionObserver((e) => (onScreen = e[0].isIntersecting), { threshold: 0.35 })
    io.observe(el)

    const pointer = new THREE.Vector2()
    const onMove = (e) => {
        const r = el.getBoundingClientRect()
        pointer.set(((e.clientX - r.left) / r.width) * 2 - 1, ((e.clientY - r.top) / r.height) * 2 - 1)
    }
    el.addEventListener("pointermove", onMove, { passive: true })

    const clock = new THREE.Clock()
    let t = 0
    let raf = 0
    let dead = false
    const gv = new THREE.Vector3()
    const toCam = new THREE.Vector3()

    function frame() {
        raf = requestAnimationFrame(frame)
        const dt = Math.min(clock.getDelta(), 0.05)
        if (!onScreen) return
        t += dt
        if (startAt < 0) startAt = t + 0.6
        let el2 = t - startAt
        if (o.loop && el2 > 9) {
            startAt = t + 0.6
            el2 = -0.6
        }
        const arcTo = reduced ? 1 : smooth(clamp(el2 / 3.2))
        const lat = lerp(PLACES.trondheim.lat, PLACES.sarasota.lat, arcTo * 0.85)
        const lon = lerp(PLACES.trondheim.lon, PLACES.sarasota.lon, arcTo * 0.85)
        globe.face(lat * 0.8 - pointer.y * 6, lon + (reduced ? 0 : Math.sin(t * 0.12) * 4) + pointer.x * 10)
        globe.update(t, arcTo, 0)
        // fit the globe in the box
        const fit = Math.min(W, H) * 0.36
        const dist = (GLOBE_R * (H / 2)) / (fit * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)))
        camera.position.set(GLOBE_CENTER.x, GLOBE_CENTER.y, GLOBE_CENTER.z + dist)
        camera.lookAt(GLOBE_CENTER)

        // labels at the pins, only on the near side
        globe.group.updateMatrixWorld(true)
        toCam.copy(camera.position).sub(GLOBE_CENTER).normalize()
        for (const p of pinEls) {
            if (p.key === "mid") gv.copy(globe.arcMid)
            else gv.copy(globe.pins.find((q) => q.key === p.key).top)
            globe.worldOf(gv, gv)
            const facing = gv.clone().sub(GLOBE_CENTER).normalize().dot(toCam)
            gv.project(camera)
            p.el.style.setProperty("--x", `${Math.min((gv.x * 0.5 + 0.5) * W, W - 190)}px`)
            p.el.style.setProperty("--y", `${(-gv.y * 0.5 + 0.5) * H}px`)
            const need = p.key === "trondheim" ? 0 : p.key === "mid" ? 0.55 : 0.97
            p.el.classList.toggle("is-on", o.labels && facing > 0.05 && arcTo >= need)
        }
        post.render(t)
    }

    return {
        set(next) {
            Object.assign(o, next)
            scene.background = new THREE.Color(o.background).convertSRGBToLinear()
        },
        destroy() {
            dead = true
            cancelAnimationFrame(raf)
            ro.disconnect()
            io.disconnect()
            el.removeEventListener("pointermove", onMove)
            renderer.dispose()
            renderer.forceContextLoss()
            canvas.remove()
            style.remove()
            pinEls.forEach((p) => p.el.remove())
        },
    }
}
