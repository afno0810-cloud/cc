import * as THREE from "three"
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js"
import { createWater, createSky, createStars, createHills, createBeam, COLORS, MOON_DIR } from "./world/sea.js"
import { waveHeight, waveSlope } from "./world/waves.js"
import { createArgus, CUT_ALL_SOLID, CUT_ALL_CLOUD } from "./world/argus.js"
import { createTitle3D } from "./world/title3d.js"
import { createPost } from "./post.js"

/* ================================================================
   The harbour behind every page.

   One renderer, one scene: Trondheim harbour at night with Argus
   floating in it and its LiDAR sweeping the water. Rendered in HDR with
   bloom, and Argus is mirrored in the water. Sections can take over the
   camera ("stages"), marked in the HTML:

   <section data-stage="hero">    the first screen: Argus up close, scanned in
                                  by its own LiDAR (data-view="home" | "argus",
                                  data-title = a big 3D title behind the boat)
   <section data-stage="argus">   Argus turning with scroll; the boat turns into
                                  a LiDAR point cloud and the parts light up
   <section data-stage="course">  Argus sails the Njord course
   <section data-stage="coast">   Norway as a point cloud, route along the coast

   The Argus model is made with Higgsfield (Tripo, image → 3D) from our
   own photos, and compressed with gltf-transform (meshopt + WebP).
   ================================================================ */

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const smooth = (t) => t * t * (3 - 2 * t)
const lerp = (a, b, t) => a + (b - a) * t
const ease = (t) => 1 - Math.pow(1 - clamp(t), 3)

/* Where the parts are on the Argus model (model units, centred model, bow = +x).
   Measured on the Higgsfield mesh. a/e = camera angle and height that show the part. */
export const PARTS = {
    lidar: { label: "LiDAR", p: [0.07, 0.27, 0.0], a: 0.7, e: 4.6 },
    gnss: { label: "Seapath 130 · GNSS", p: [-0.2, 0.09, 0.37], a: 2.0, e: 3.2 },
    camera: { label: "Stereo depth camera", p: [0.28, 0.13, 0.02], a: 0.25, e: 2.2 },
    case: { label: "Electronics case", p: [0.12, 0.13, -0.17], a: -1.2, e: 3 },
    hull: { label: "Two hulls", p: [0.34, -0.06, -0.26], a: -0.6, e: 1.6 },
    props: { label: "Four propellers", p: [-0.47, -0.25, 0.24], a: 2.7, e: 0.9 },
    pixhawk: { label: "Pixhawk", p: [-0.02, 0.1, 0.06], a: -0.3, e: 5.5 },
    link: { label: "5G link", p: [-0.1, 0.16, -0.05], a: -1.8, e: 5 },
}

const emit = (name, detail) => window.dispatchEvent(new CustomEvent(name, { detail }))

export async function startScene({ reduced = false } = {}) {
    const canvas = document.createElement("canvas")
    canvas.id = "scene"
    canvas.setAttribute("aria-hidden", "true")
    document.body.prepend(canvas)

    const small = Math.min(innerWidth, innerHeight) < 700
    const lowPower = small || (navigator.hardwareConcurrency || 8) <= 4
    let renderer
    try {
        renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: "high-performance" })
    } catch (e) {
        canvas.remove()
        emit("scene:failed")
        return null
    }
    const dpr = Math.min(devicePixelRatio || 1, lowPower ? 1.25 : 1.5)
    let dprNow = dpr // lowered on the fly if the machine can't keep up
    renderer.setPixelRatio(dpr)
    renderer.setSize(innerWidth, innerHeight, false)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.setClearColor(COLORS.abyss)

    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(COLORS.horizon, 60, 380)
    const camera = new THREE.PerspectiveCamera(38, innerWidth / innerHeight, 0.1, 2000)

    // ---- world ----
    const sky = createSky()
    const stars = createStars(lowPower ? 700 : 1600)
    stars.material.uniforms.uPx.value = dpr
    const water = createWater(lowPower ? 120 : 220)
    const hills = createHills()
    const beam = createBeam()
    scene.add(sky, stars, water, hills, beam)

    const pmrem = new THREE.PMREMGenerator(renderer)
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
    scene.environmentIntensity = 0.42
    const hemi = new THREE.HemisphereLight(new THREE.Color("#b9a6d8"), new THREE.Color("#0b0914"), 1.0)
    const moon = new THREE.DirectionalLight(new THREE.Color("#efe6ff"), 2.0)
    moon.position.copy(MOON_DIR).multiplyScalar(100)
    const rim = new THREE.PointLight(COLORS.violet, 90, 30, 1.6)
    rim.position.set(-4, 3, -5)
    const key = new THREE.PointLight(new THREE.Color("#cdb6ff"), 40, 22, 1.8)
    key.position.set(5, 5, 6)
    scene.add(hemi, moon, rim, key)
    // the reflection pass only draws layer 1 (the mirrored boat), with the same lights
    for (const l of [hemi, moon, rim, key]) l.layers.enable(1)

    // ---- Argus ----
    const boat = new THREE.Group() // world position + bobbing
    scene.add(boat)
    const SCALE = 6.2 // the model is ~1 unit long → ~6 scene units
    const argus = createArgus({
        renderer,
        lowPower,
        onProgress: (p) => emit("scene:progress", p),
    })
    const model = argus.model
    model.scale.setScalar(SCALE)
    // waterline: the hulls sit about 0.05 model-units below the centre
    model.position.y = 0.05 * SCALE
    boat.add(model)
    const mirror = argus.mirror
    scene.add(mirror)

    // LiDAR glow on top of the sensor
    const glowTex = (() => {
        const c = document.createElement("canvas")
        c.width = c.height = 64
        const g = c.getContext("2d")
        const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32)
        grd.addColorStop(0, "rgba(255,255,255,1)")
        grd.addColorStop(0.25, "rgba(214,186,236,0.6)")
        grd.addColorStop(1, "rgba(214,186,236,0)")
        g.fillStyle = grd
        g.fillRect(0, 0, 64, 64)
        return new THREE.CanvasTexture(c)
    })()
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: new THREE.Color(1.3, 1.15, 1.5), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }))
    glow.scale.setScalar(0.075)
    glow.position.fromArray(PARTS.lidar.p)
    model.add(glow)

    // ---- reflection buffer: the mirrored boat, drawn from the same camera ----
    const reflectRT = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType })
    water.material.uniforms.uReflect.value = reflectRT.texture

    // ---- post-processing ----
    const post = createPost(renderer, scene, camera, { lowPower })

    // ---- optional worlds, loaded only on the pages that use them ----
    const stageEls = [...document.querySelectorAll("[data-stage]")]
    const kinds = new Set(stageEls.map((el) => el.dataset.stage))
    let course = null
    let coast = null
    if (kinds.has("course")) {
        const { createCourse } = await import("./world/course.js")
        course = createCourse()
        course.setOpacity(0)
        course.route.material.uniforms.uPx.value = dpr
        scene.add(course.group)
    }
    if (kinds.has("coast")) {
        const { createCoast } = await import("./world/coast.js")
        coast = createCoast(lowPower ? 0.6 : 1)
        coast.setOpacity(0)
        coast.setPx(dpr)
        scene.add(coast.group)
    }

    // ---- stages: measured on every frame from the layout ----
    const stages = stageEls.map((el) => {
        const labelsEl = el.querySelector("[data-labels]")
        const partsWanted = (el.dataset.parts || "").split(",").filter(Boolean)
        const labels = partsWanted.map((k) => {
            const d = document.createElement("div")
            d.className = "hotspot"
            d.innerHTML = `<i></i><span>${PARTS[k].label}</span>`
            labelsEl && labelsEl.appendChild(d)
            return { key: k, el: d, v: new THREE.Vector3() }
        })
        return {
            el,
            kind: el.dataset.stage,
            view: el.dataset.view || "",
            offset: parseFloat(el.dataset.offset || "0"), // shift the boat on screen (-0.25 = to the left)
            steps: [...el.querySelectorAll("[data-part]")],
            listMode: el.dataset.mode === "list",
            labels: labelsEl ? labels : [],
            cities: el.querySelector("[data-cities]"),
            tasks: [...el.querySelectorAll("[data-task]")],
            p: 0,
            w: 0,
            active: null,
        }
    })
    const hero = stages.find((s) => s.kind === "hero")

    // a big title in 3D behind the boat (Argus page)
    let title = null
    let titleMirror = null
    if (hero && hero.el.dataset.title) {
        createTitle3D(hero.el.dataset.title).then((m) => {
            title = m
            scene.add(m)
            // and its reflection in the water
            titleMirror = new THREE.Mesh(m.geometry, m.material)
            titleMirror.layers.set(1)
            scene.add(titleMirror)
            document.documentElement.classList.add("has-3d-title")
        })
    }

    function measure() {
        const vh = innerHeight
        for (const s of stages) {
            const r = s.el.getBoundingClientRect()
            if (s.kind === "hero") {
                // the hero starts on screen: full until it has scrolled half away
                s.p = clamp(-r.top / Math.max(1, r.height))
                s.w = 1 - smooth(clamp((-r.top - r.height * 0.05) / (r.height * 0.75)))
                continue
            }
            const range = Math.max(1, s.el.offsetHeight - vh)
            s.p = clamp(-r.top / range)
            const fadeIn = clamp(1 - r.top / (vh * 0.85))
            const fadeOut = clamp((r.bottom - vh * 0.15) / (vh * 0.85))
            s.w = smooth(Math.min(fadeIn, fadeOut))
            // which part is highlighted
            let active = null
            if (s.listMode) {
                let best = Infinity
                for (const li of s.steps) {
                    const lr = li.getBoundingClientRect()
                    const d = Math.abs(lr.top + lr.height / 2 - vh * 0.5)
                    if (d < best && lr.bottom > 0 && lr.top < vh) {
                        best = d
                        active = li
                    }
                }
            } else if (s.steps.length) {
                // the parts light up while the boat is a point cloud (p 0.25 … 0.85)
                const q = clamp((s.p - 0.22) / 0.62)
                active = s.p > 0.2 && s.p < 0.88 ? s.steps[Math.min(s.steps.length - 1, Math.floor(q * s.steps.length * 0.999))] : null
            }
            if (active !== s.active) {
                s.steps.forEach((li) => li.classList.toggle("is-on", li === active))
                s.active = active
            }
            if (s.tasks.length) {
                const i = Math.min(s.tasks.length - 1, Math.floor(s.p * s.tasks.length * 0.999))
                s.tasks.forEach((t, k) => t.classList.toggle("is-on", k === i))
            }
        }
    }

    // ---- camera rig ----
    const heroCover = document.querySelector(".hero-home")
    const baseOffset = parseFloat(document.body.dataset.offset || (heroCover ? "0.14" : "0.3"))
    const tmp = new THREE.Vector3()
    const camPos = new THREE.Vector3()
    const camLook = new THREE.Vector3()
    const pointer = new THREE.Vector2()
    const pointerS = new THREE.Vector2()
    addEventListener(
        "pointermove",
        (e) => {
            pointer.set((e.clientX / innerWidth) * 2 - 1, (e.clientY / innerHeight) * 2 - 1)
        },
        { passive: true }
    )

    function harbourCam(t, scrollP, out, look) {
        const a = -0.9 + scrollP * 1.6 + t * 0.012
        const r = small ? 30 : 40
        out.set(Math.cos(a) * r, 8 + scrollP * 7, Math.sin(a) * r)
        look.set(0, 1.2, 0)
    }
    // the first screen: low over the water, close to the boat
    const HERO_VIEW = {
        home: { a: -0.85, r: 13, rs: 34, y: 2.0, look: 1.1, off: 0.27, offY: -0.02, offYs: 0.2 },
        argus: { a: -0.5, r: 13.5, rs: 31, y: 1.7, look: 1.4, off: 0, offY: -0.1, offYs: 0.04 },
    }
    function heroCam(s, out, look) {
        const v = HERO_VIEW[s.view] || HERO_VIEW.home
        const drift = reduced ? 0 : Math.sin(t * 0.09) * 0.14
        const a = v.a + drift + pointerS.x * 0.22 + s.p * 0.5
        const r = (small ? v.rs : v.r) + s.p * 6
        out.set(Math.cos(a) * r, v.y + s.p * 5 - pointerS.y * 0.35, Math.sin(a) * r)
        look.set(0, v.look, 0)
        return v
    }
    function argusCam(s, out, look) {
        let a = -0.55 + s.p * Math.PI * 1.7
        let e = 2.6 + Math.sin(s.p * Math.PI) * 2.2
        if (s.listMode) {
            // turn the boat so the part in the list faces the camera
            const part = s.active && PARTS[s.active.dataset.part]
            const ta = part ? part.a : -0.5
            const te = part ? part.e : 3
            if (s.a === undefined) (s.a = ta), (s.e = te)
            let d = ta - s.a
            d = Math.atan2(Math.sin(d), Math.cos(d))
            s.a += d * 0.045
            s.e += (te - s.e) * 0.045
            a = s.a + s.p * 0.6
            e = s.e
        }
        const r = s.listMode ? (small ? 15 : 13.5) : small ? 11 : 9.2
        out.set(Math.cos(a) * r, e * (s.listMode ? 1.35 : 1), Math.sin(a) * r)
        look.set(0, 0.9, 0)
    }

    let courseU = 0
    function courseCam(p, out, look) {
        courseU = lerp(course.phases[0], 1, p)
        const at = course.curve.getPointAt(clamp(courseU))
        const ahead = course.curve.getPointAt(clamp(courseU + 0.035))
        const dir = tmp.copy(ahead).sub(at).normalize()
        const k = small ? 1.9 : 1
        out.set(at.x - (dir.x * 16 + dir.z * 8) * k, small ? 17 : 9.5, at.z - (dir.z * 16 - dir.x * 8) * k)
        look.set(ahead.x, 0.5, ahead.z)
        return at
    }
    const coastAt = new THREE.Vector3()
    function coastCam(p, out, look) {
        if (small) {
            // phones: follow the route up the coast instead of showing all of Norway
            const pins = coast.pins
            const f = clamp(p * 1.1) * (pins.length - 1)
            const i = Math.min(pins.length - 2, Math.floor(f))
            coastAt.copy(pins[i].top).lerp(pins[i + 1].top, f - i).setY(0)
            out.set(coastAt.x + 10, 150, coastAt.z + 95)
            look.copy(coastAt).setZ(coastAt.z - 25)
            return
        }
        out.set(60 + p * 40, 190 - p * 30, 150 - p * 90)
        look.set(95 + p * 30, 0, -10 - p * 40)
    }

    // ---- resize ----
    let W = innerWidth
    let H = innerHeight
    function resize() {
        W = innerWidth
        H = innerHeight
        renderer.setPixelRatio(dprNow)
        renderer.setSize(W, H, false)
        camera.aspect = W / H
        camera.updateProjectionMatrix()
        post.setSize(W, H, dprNow)
        reflectRT.setSize(Math.round(W * dprNow * 0.5), Math.round(H * dprNow * 0.5))
        water.material.uniforms.uRes.value.set(W * dprNow, H * dprNow)
        argus.points.uProj.value = (H * dprNow) / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)))
    }
    addEventListener("resize", resize)

    // ---- the scan-in: points fly in, then the LiDAR line turns them into the boat ----
    const intro = { start: -1, done: reduced }
    const INTRO_ASSEMBLE = 1.5
    const INTRO_SCAN = 1.7
    let cut = CUT_ALL_CLOUD
    let ghost = 0
    let hiOn = 0
    const hiPos = new THREE.Vector3(99, 99, 99)
    if (reduced) {
        argus.points.uAssemble.value = 1
        cut = CUT_ALL_SOLID
    }

    // ---- loop ----
    const clock = new THREE.Clock()
    let t = 0
    let visible = true
    document.addEventListener("visibilitychange", () => (visible = !document.hidden))
    let sweep = 0
    let viewOffset = 0
    let viewOffsetY = 0
    let titleO = 0
    const titlePos = new THREE.Vector3()
    const introClock = new THREE.Clock(false)
    let introFixed = null // debug: freeze the intro at a time
    const introTime = () => (introFixed !== null ? introFixed : introClock.getElapsedTime())

    function frame() {
        requestAnimationFrame(frame)
        if (!visible) return
        const raw = clock.getDelta()
        const dt = Math.min(raw, 0.05)
        if (!reduced) t += dt
        adapt(raw)

        measure()
        const docH = Math.max(1, document.documentElement.scrollHeight - innerHeight)
        const scrollP = clamp(scrollY / docH)

        // base: the harbour
        harbourCam(t, scrollP, camPos, camLook)
        const boatPos = new THREE.Vector3()
        let dim = 1
        // on phones the text runs over the middle of the screen, so outside the 3D stages
        // the boat stays away on pages without a 3D hero
        let boatVis = small && !hero ? 0 : 1
        let courseO = 0
        let coastO = 0
        let off = !small ? baseOffset : 0
        let offY = 0
        let xray = 0 // 0 = solid boat, 1 = LiDAR point cloud with the parts lit
        let activePart = null

        pointerS.lerp(pointer, 1 - Math.exp(-dt * 2.8))

        for (const s of stages) {
            if (s.w <= 0.001) continue
            const P = new THREE.Vector3()
            const L = new THREE.Vector3()
            if (s.kind === "hero") {
                const v = heroCam(s, P, L)
                boatVis = Math.max(boatVis, s.w)
                off = lerp(off, small ? 0 : v.off, s.w)
                offY = lerp(offY, small ? v.offYs : v.offY, s.w)
            } else if (s.kind === "argus") {
                boatVis = Math.max(boatVis, s.w)
                argusCam(s, P, L)
                off = lerp(off, small ? 0 : s.offset, s.w)
                if (small && s.listMode) offY = lerp(offY, 0.25, s.w)
                const x = s.listMode ? 1 : smooth(clamp((s.p - 0.06) / 0.16)) * (1 - smooth(clamp((s.p - 0.86) / 0.12)))
                xray = Math.max(xray, x * clamp(s.w * 1.6 - 0.3))
                if (s.active && s.w > 0.5) activePart = s.active.dataset.part
            } else if (s.kind === "course" && course) {
                boatVis = Math.max(boatVis, s.w)
                const at = courseCam(s.p, P, L)
                boatPos.lerp(at, s.w)
                courseO = Math.max(courseO, s.w)
                off = lerp(off, 0, s.w)
            } else if (s.kind === "coast" && coast) {
                coastCam(s.p, P, L)
                coastO = Math.max(coastO, s.w)
                boatVis = Math.min(boatVis, 1 - s.w)
                dim = lerp(dim, 0.45, s.w)
                off = lerp(off, small ? 0 : s.offset, s.w)
            }
            camPos.lerp(P, s.w)
            camLook.lerp(L, s.w)
        }

        // a little parallax from the mouse everywhere
        camPos.x += pointerS.x * 0.6
        camPos.y += -pointerS.y * 0.3
        // blending two camera positions can cut straight through the boat: keep a distance
        tmp.copy(camPos).sub(boatPos).setY(Math.max(camPos.y - 1, 0))
        if (tmp.length() < 8.5) camPos.copy(boatPos).add(tmp.setLength(8.5)).setY(Math.max(camPos.y, 1.2))

        // ---- the scan state: intro first, then the stages decide ----
        if (!intro.done && intro.start >= 0) {
            const it = introTime()
            argus.points.uAssemble.value = clamp(it / INTRO_ASSEMBLE)
            const k = ease((it - INTRO_ASSEMBLE * 0.75) / INTRO_SCAN)
            cut = lerp(CUT_ALL_CLOUD, CUT_ALL_SOLID, k)
            ghost = 0
            if (it > INTRO_ASSEMBLE * 0.75 + INTRO_SCAN) {
                intro.done = true
                emit("scene:intro-done")
            }
        } else if (intro.done) {
            const target = lerp(CUT_ALL_SOLID, CUT_ALL_CLOUD, xray)
            // the cut moves like a scanner: steady speed, not a jump
            const step = dt * 1.4
            cut += clamp(target - cut, -step, step)
            if (window.__snap) cut = target // debug: jump straight to the target
            if (cut < CUT_ALL_SOLID - 0.005) ghost = 1
            else ghost = 0
        }
        argus.uniforms.uCut.value = cut
        argus.uniforms.uGhost.value = ghost
        hiOn = lerp(hiOn, activePart && xray > 0.5 ? 1 : 0, window.__snap ? 1 : 1 - Math.exp(-dt * 5))
        if (activePart) hiPos.fromArray(PARTS[activePart].p)
        argus.points.uHi.value.lerp(hiPos, 1 - Math.exp(-dt * 8))
        argus.points.uHiOn.value = hiOn
        argus.uniforms.uTime.value = t

        // boat rides the waves
        const bx = boatPos.x
        const bz = boatPos.z
        const h = waveHeight(bx, bz, t, 1)
        const [sx, sz] = waveSlope(bx, bz, t, 1)
        boat.position.set(bx, h * 0.8, bz)
        let heading = 0
        if (courseO > 0.001 && course) {
            const a = course.curve.getPointAt(clamp(courseU))
            const b = course.curve.getPointAt(clamp(courseU + 0.01))
            heading = -Math.atan2(b.z - a.z, b.x - a.x)
            heading *= courseO
        }
        boat.rotation.set(sz * 0.6, heading, -sx * 0.6)
        boat.visible = boatVis > 0.02
        argus.points.uOpacity.value = boatVis
        model.traverse((o) => {
            if (o.isMesh) {
                o.material.transparent = boatVis < 0.999
                o.material.opacity = boatVis
            }
        })
        // the reflection follows the boat, upside down
        mirror.position.set(boat.position.x, -boat.position.y, boat.position.z)
        mirror.rotation.set(-boat.rotation.x, boat.rotation.y, -boat.rotation.z)
        mirror.visible = boat.visible

        camera.position.copy(camPos)
        camera.lookAt(camLook)
        const ko = 1 - Math.exp(-dt * 5)
        viewOffset = lerp(viewOffset, off, ko)
        viewOffsetY = lerp(viewOffsetY, offY, ko)
        if (Math.abs(viewOffset) > 0.002 || Math.abs(viewOffsetY) > 0.002) camera.setViewOffset(W, H, -viewOffset * W, viewOffsetY * H, W, H)
        else camera.clearViewOffset()

        // the 3D title sits behind the boat, facing where the camera starts
        if (title && hero) {
            const v = HERO_VIEW[hero.view] || HERO_VIEW.home
            const r0 = small ? v.rs : v.r
            titlePos.set(-Math.cos(v.a) * 7, 2.3 + (small ? 0.5 : 0), -Math.sin(v.a) * 7)
            title.position.copy(titlePos)
            title.lookAt(Math.cos(v.a) * r0, 2.3, Math.sin(v.a) * r0)
            // as wide as ~88% of the screen at that distance
            const dist = r0 + 7
            const hgt = 2 * dist * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))
            const width = hgt * camera.aspect * (small ? 0.94 : 0.86)
            title.scale.setScalar(width / title.userData.aspect)
            const want = intro.done || reduced ? hero.w : clamp((introTime() - INTRO_ASSEMBLE * 0.75 - INTRO_SCAN * 0.5) / 0.8) * hero.w
            // fades in over time, but follows the scroll at once when the hero leaves
            titleO = Math.min(titleO + (want - titleO) * (1 - Math.exp(-dt * 3)), hero.w)
            title.material.opacity = titleO
            title.visible = titleO > 0.01
            titleMirror.position.set(title.position.x, -title.position.y, title.position.z)
            titleMirror.quaternion.copy(title.quaternion)
            titleMirror.scale.set(title.scale.x, -title.scale.y, title.scale.z)
            titleMirror.visible = title.visible
        }

        // LiDAR
        sweep += dt * 2.4
        const wu = water.material.uniforms
        wu.uTime.value = t
        wu.uBoat.value.set(boat.position.x, boat.position.z)
        wu.uSweepAngle.value = -sweep
        wu.uCam.value.copy(camera.position)
        wu.uDim.value = dim
        wu.uSweep.value = boatVis * (intro.done ? 1 : clamp(cut - CUT_ALL_CLOUD))
        wu.uReflectOn.value = Math.max(boatVis, title ? titleO : 0)
        sky.material.uniforms.uDim.value = lerp(1, dim, 0.6)
        stars.material.uniforms.uTime.value = t
        beam.position.set(boat.position.x, 0.25, boat.position.z)
        beam.rotation.y = sweep
        beam.material.uniforms.uOpacity.value = boatVis * (1 - coastO) * (intro.done ? 1 : 0)
        glow.material.opacity = (0.65 + Math.sin(t * 6) * 0.25) * boatVis * (cut > 0 ? 1 : 0.2)

        if (course) {
            course.setOpacity(courseO)
            course.route.material.uniforms.uU.value = courseU
            course.route.material.uniforms.uTime.value = t
            for (const f of course.floaters) {
                f.obj.position.y = waveHeight(f.x, f.z, t, 1) * 0.8 + f.lift
            }
            // the Otter crosses the course during the collision task
            const o = course.otter
            const cu = clamp((courseU - course.phases[2]) / (course.phases[3] - course.phases[2]))
            o.obj.position.set(o.x, o.obj.position.y, o.z - cu * 56)
        }
        if (coast) {
            coast.setOpacity(coastO)
            const cs = stages.find((s) => s.kind === "coast")
            coast.routeMat.uniforms.uTo.value = cs ? clamp(cs.p * 1.15) : 0
            coast.routeMat.uniforms.uTime.value = t
            if (cs && cs.cities) placeCities(cs)
        }

        placeLabels()

        // 1) the reflection: only layer 1, into its own buffer
        if (boat.visible || (title && title.visible)) {
            camera.layers.set(1)
            renderer.setRenderTarget(reflectRT)
            renderer.setClearColor(0x000000, 0)
            renderer.clear()
            renderer.render(scene, camera)
            renderer.setRenderTarget(null)
            renderer.setClearColor(COLORS.abyss, 1)
            camera.layers.set(0)
        }
        // 2) the scene, bloom and grade
        post.render(t)
    }

    // keep it smooth: if frames get slow, render fewer pixels (never below 0.75)
    let fAcc = 0
    let fN = 0
    let fCool = 2
    function adapt(raw) {
        if (raw > 0.25) return // tab switch or a hitch, not a trend
        fAcc += raw
        fN++
        if (fN < 90) return
        const avg = fAcc / fN
        fAcc = fN = 0
        if (fCool-- > 0) return // let the page settle first
        if (avg > 1 / 38 && dprNow > 0.76) {
            dprNow = Math.max(0.75, dprNow * 0.82)
            post.bloom.enabled = dprNow > 0.9 || !lowPower
            resize()
        } else if (avg < 1 / 57 && dprNow < dpr - 0.01) {
            dprNow = Math.min(dpr, dprNow * 1.1)
            resize()
        }
    }

    function placeLabels() {
        for (const s of stages) {
            if (!s.labels.length) continue
            const show = s.w > 0.55 && ghost > 0.5
            const activeKey = s.active ? s.active.dataset.part : null
            for (const l of s.labels) {
                l.v.fromArray(PARTS[l.key].p)
                model.localToWorld(l.v)
                l.v.project(camera)
                const x = (l.v.x * 0.5 + 0.5) * W
                const y = (-l.v.y * 0.5 + 0.5) * H
                const behind = l.v.z > 1
                l.el.style.setProperty("--x", `${x}px`)
                l.el.style.setProperty("--y", `${y}px`)
                l.el.classList.toggle("is-shown", show && !behind && (!activeKey || activeKey === l.key || !s.listMode))
                l.el.classList.toggle("is-on", activeKey === l.key)
            }
        }
    }

    let cityEls = null
    function placeCities(s) {
        if (!cityEls) {
            cityEls = coast.pins.map((pin) => {
                const d = document.createElement("div")
                d.className = "hotspot city" + (pin.city.home ? " is-home" : "")
                d.innerHTML = `<i></i><span>${pin.city.home ? "Trondheim · home port" : pin.city.name}</span>`
                s.cities.appendChild(d)
                return { pin, el: d, v: new THREE.Vector3() }
            })
        }
        const reached = clamp(s.p * 1.15)
        for (const c of cityEls) {
            c.v.copy(c.pin.top).project(camera)
            c.el.style.setProperty("--x", `${(c.v.x * 0.5 + 0.5) * W}px`)
            c.el.style.setProperty("--y", `${(-c.v.y * 0.5 + 0.5) * H}px`)
            const i = coast.pins.indexOf(c.pin)
            c.el.classList.toggle("is-shown", s.w > 0.5 && coast.cityU[i] <= reached + 0.02)
        }
    }

    if (/[?&]debug\b/.test(location.search)) window.__dbg = { THREE, scene, camera, renderer, coast, course, argus, post, setIntro: (v) => { introFixed = v; intro.done = false; intro.start = 0 } }

    await argus.ready
    resize()
    emit("scene:ready")
    // the page's loader decides when the show starts (it waits for the fonts and a minimum time)
    const go = () => {
        if (intro.start >= 0) return
        intro.start = 0
        introClock.start()
    }
    if (document.documentElement.classList.contains("is-loading")) window.addEventListener("loader:done", go, { once: true })
    else go()
    setTimeout(go, 4000)
    requestAnimationFrame(frame)
    requestAnimationFrame(() => canvas.classList.add("is-ready"))
    return { renderer, scene, camera }
}
