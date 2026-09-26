import * as THREE from "three"
import { createWater, createBeam, WAKE_N, RIPPLE_N } from "./world/sea.js"
import { createSky, MOON } from "./world/sky.js"
import { AIR } from "./world/air.js"
import { waveHeight, waveSlope } from "./world/waves.js"
import { createArgus, CUT_ALL_SOLID, CUT_ALL_CLOUD } from "./world/argus.js"
import { createTitle3D } from "./world/title3d.js"
import { createGlobe, GLOBE_CENTER, GLOBE_R, PLACES } from "./world/globe.js"
import { createPost } from "./post.js"
import { createMotes } from "./world/motes.js"
import { createPhotoCloud, PHOTO_CENTER } from "./world/photocloud.js"
import { createSpray } from "./world/spray.js"
import { createDrive } from "./drive.js"

/* ================================================================
   The harbour behind every page.

   One renderer, one scene: Trondheim harbour with Argus floating in it.
   The sky is computed from the physics of the air, the sun goes down as
   you scroll (afternoon at the top of a page, night at the bottom), the
   water reflects everything around it, and the land, the city and the
   things in the harbour (made with Higgsfield) sit in the haze of the
   fjord. Rendered in HDR with bloom, sun rays and a lens flare.
   Sections can take over the camera ("stages"), marked in the HTML:

   <section data-stage="hero">    the first screen: Argus up close, scanned in
                                  by its own LiDAR (data-view="home" | "argus",
                                  data-title = a big 3D title behind the boat)
   <section data-stage="argus">   Argus turning with scroll; the boat turns into
                                  a LiDAR point cloud and the parts light up
   <section data-stage="course">  Argus sails the Njord course
   <section data-stage="coast">   Norway as a point cloud, route along the coast

   The Argus model is made with Higgsfield (Tripo, four views → 3D) from
   our own photos, and compressed with gltf-transform (meshopt + WebP).
   <body data-sun="9"> sets the height of the sun (degrees) at the top of a page.
   ================================================================ */

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const smooth = (t) => t * t * (3 - 2 * t)
const lerp = (a, b, t) => a + (b - a) * t
const ease = (t) => 1 - Math.pow(1 - clamp(t), 3)

/* Where the parts are on the Argus model (model units, centred model, bow = +x).
   Measured on the Higgsfield mesh (Tripo, from four views made from our photos). a/e = camera angle and height that show the part. */
export const PARTS = {
    lidar: { label: "LiDAR", p: [-0.07, 0.29, 0.0], a: 0.7, e: 4.6 },
    gnss: { label: "Seapath 130 · GNSS", p: [-0.08, 0.2, 0.28], a: 2.0, e: 3.2 },
    camera: { label: "Stereo depth camera", p: [0.1, 0.17, 0.0], a: 0.25, e: 2.2 },
    case: { label: "Electronics case", p: [-0.06, 0.19, -0.12], a: -1.2, e: 3 },
    hull: { label: "Two hulls", p: [0.3, -0.03, -0.27], a: -0.6, e: 1.6 },
    props: { label: "Four propellers", p: [-0.46, -0.24, 0.25], a: 2.7, e: 0.9 },
    pixhawk: { label: "Pixhawk", p: [-0.04, 0.2, 0.06], a: -0.3, e: 5.5 },
    link: { label: "5G link", p: [-0.13, 0.22, -0.05], a: -1.8, e: 5 },
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
    renderer.setClearColor(0x000000)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(38, innerWidth / innerHeight, 0.5, 60000)

    // ---- the sky, and the time of day ----
    const sky = createSky(renderer, { lowPower })
    sky.stars.material.uniforms.uPx.value = dpr
    scene.add(sky.group)
    const SUN_AZIMUTH = 204 // low in the south-west, over the hills west of the city: the boat is lit from the side
    let sunTop = parseFloat(document.body.dataset.sun || "16")
    let elev = sunTop
    sky.setSun(elev, SUN_AZIMUTH)
    sky.bake(true)
    scene.environment = sky.env
    scene.environmentIntensity = 1
    AIR.uPano.value = sky.pano.texture
    const sunLight = new THREE.DirectionalLight(0xffffff, 3)
    const moonLight = new THREE.DirectionalLight(new THREE.Color(0.62, 0.7, 1.0), 0)
    moonLight.position.copy(MOON).multiplyScalar(1000)
    scene.add(sunLight, sunLight.target, moonLight)
    let zenLum = 0.1
    const lumOf = (c) => c.r * 0.2126 + c.g * 0.7152 + c.b * 0.0722
    const zenC = new THREE.Color()

    // ---- water ----
    const water = createWater({ lowPower })
    water.material.uniforms.uPano.value = sky.pano.texture
    const wu = water.material.uniforms
    const beam = createBeam()
    scene.add(water, beam)
    const motes = reduced ? null : createMotes(lowPower ? 160 : 320)
    if (motes) scene.add(motes.points)

    const spray = createSpray(lowPower ? 350 : 700)
    scene.add(spray.points)

    // ---- the land, the city and the harbour (built after the first frames) ----
    let terrainMod = null
    let props = null
    let birds = null
    let shoreLights = null
    const buildWorld = async () => {
        terrainMod = await import("./world/terrain.js")
        const { createTerrain, createShoreLights } = terrainMod
        scene.add(createTerrain({ lowPower }))
        shoreLights = createShoreLights({ lowPower })
        shoreLights.material.uniforms.uPx.value = dpr
        scene.add(shoreLights)
        const { createProps } = await import("./world/props.js")
        props = createProps({ lowPower })
        scene.add(props.group)
        if (!reduced) {
            const { createBirds } = await import("./world/birds.js")
            birds = createBirds(lowPower ? 10 : 22)
            scene.add(birds.mesh)
        }
    }

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
    // waterline: a little below the middle of the hulls (the thrusters hang under the water)
    model.position.y = 0.075 * SCALE
    boat.add(model)

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
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: new THREE.Color(1.25, 1.2, 1.45), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }))
    glow.scale.setScalar(0.075)
    glow.position.fromArray(PARTS.lidar.p)
    model.add(glow)

    let drive = null
    let rippleI = 0

    // navigation lights for the night: red to port, green to starboard, white on top
    const navLights = [
        [0.32, 0.05, -0.27, 0xff3a2a],
        [0.32, 0.05, 0.27, 0x3aff6a],
        [-0.07, 0.34, 0, 0xffffff],
    ].map(([x, y, z, c]) => {
        const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: new THREE.Color(c).multiplyScalar(2.5), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }))
        s.scale.setScalar(c === 0xffffff ? 0.045 : 0.07)
        s.position.set(x, y, z)
        model.add(s)
        return s
    })

    // ---- reflection: the scene seen from below the water, for the mirror image ----
    const reflectRT = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: lowPower ? 0 : 2 })
    wu.uReflect.value = reflectRT.texture
    const reflCam = new THREE.PerspectiveCamera()
    const reflPlane = new THREE.Plane()
    const clipPlane = new THREE.Vector4()
    const qv = new THREE.Vector4()
    const fwd = new THREE.Vector3()
    const upv = new THREE.Vector3()
    function renderReflection() {
        camera.updateMatrixWorld()
        fwd.set(0, 0, -1).applyQuaternion(camera.quaternion)
        upv.set(0, 1, 0).applyQuaternion(camera.quaternion)
        reflCam.position.set(camera.position.x, -camera.position.y, camera.position.z)
        fwd.y = -fwd.y
        upv.y = -upv.y
        reflCam.up.copy(upv)
        reflCam.lookAt(reflCam.position.x + fwd.x, reflCam.position.y + fwd.y, reflCam.position.z + fwd.z)
        reflCam.far = camera.far
        reflCam.updateMatrixWorld()
        reflCam.projectionMatrix.copy(camera.projectionMatrix)
        const tm = wu.uReflectMatrix.value
        tm.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1)
        tm.multiply(reflCam.projectionMatrix).multiply(reflCam.matrixWorldInverse)
        // clip away what is under the water (oblique near plane, Lengyel)
        reflPlane.set(new THREE.Vector3(0, 1, 0), 0.05).applyMatrix4(reflCam.matrixWorldInverse)
        clipPlane.set(reflPlane.normal.x, reflPlane.normal.y, reflPlane.normal.z, reflPlane.constant)
        const pm = reflCam.projectionMatrix
        qv.x = (Math.sign(clipPlane.x) + pm.elements[8]) / pm.elements[0]
        qv.y = (Math.sign(clipPlane.y) + pm.elements[9]) / pm.elements[5]
        qv.z = -1
        qv.w = (1 + pm.elements[10]) / pm.elements[14]
        clipPlane.multiplyScalar(2 / clipPlane.dot(qv))
        pm.elements[2] = clipPlane.x
        pm.elements[6] = clipPlane.y
        pm.elements[10] = clipPlane.z + 1
        pm.elements[14] = clipPlane.w
        reflCam.projectionMatrixInverse.copy(pm).invert()
        const hidden = [water, beam, motes && motes.points].filter(Boolean)
        const was = hidden.map((o) => o.visible)
        hidden.forEach((o) => (o.visible = false))
        renderer.setRenderTarget(reflectRT)
        renderer.clear()
        renderer.render(scene, reflCam)
        renderer.setRenderTarget(null)
        hidden.forEach((o, i) => (o.visible = was[i]))
    }

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
    let globe = null
    if (kinds.has("globe")) {
        globe = await createGlobe({ lowPower })
        globe.setOpacity(0)
        scene.add(globe.group)
    }
    let photo = null
    const photoEl = document.querySelector('[data-stage="photo"]')
    if (photoEl && photoEl.dataset.src) {
        try {
            photo = await createPhotoCloud(photoEl.dataset.src, { lowPower })
            scene.add(photo.points)
        } catch (e) {
            photoEl.classList.add("is-formed")
        }
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
            through: el.hasAttribute("data-through"), // progress while the section passes the screen (not pinned)
            arcStart: parseFloat(el.dataset.arcStart || "0.45"),
            zoom: parseFloat(el.dataset.zoom || "1"),
            anchor: el.dataset.anchor ? el.querySelector(el.dataset.anchor) : null, // the globe sits in this box
            globePins: [...el.querySelectorAll("[data-globe-pin]")],
            p: 0,
            w: 0,
            active: null,
        }
    })
    const hero = stages.find((s) => s.kind === "hero")

    // a big title in 3D behind the boat (Argus page)
    let title = null
    if (hero && hero.el.dataset.title) {
        createTitle3D(hero.el.dataset.title).then((m) => {
            title = m
            scene.add(m)
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
            if (s.kind === "photo") {
                // on as soon as a good part of the photo is on screen
                s.w = smooth(clamp((vh - r.top) / (vh * 0.4))) * smooth(clamp(r.bottom / (vh * 0.4)))
                continue
            }
            const range = Math.max(1, s.el.offsetHeight - vh)
            s.p = s.through ? clamp((vh - r.top) / (vh + r.height)) : clamp(-r.top / range)
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
        // turn towards the open fjord as you scroll, away from the low sun
        const a = -0.9 - scrollP * 1.3 + t * 0.012
        const r = small ? 30 : 40
        out.set(Math.cos(a) * r, 8 + scrollP * 7, Math.sin(a) * r)
        look.set(0, 1.2, 0)
    }
    // the first screen: low over the water, close to the boat
    const HERO_VIEW = {
        home: { a: -0.95, r: 15.5, rs: 34, y: 2.3, look: 1.0, off: 0.25, offY: 0.02, offYs: 0.2 },
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
        const rk = lowPower ? 0.35 : 0.5
        reflectRT.setSize(Math.round(W * dprNow * rk), Math.round(H * dprNow * rk))
        argus.points.uProj.value = (H * dprNow) / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)))
        if (globe) globe.setPx(1, argus.points.uProj.value)
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

    // ---- drive mode ----
    let headingNow = 0
    drive = createDrive({
        camera,
        reduced,
        spray,
        getBoat: () => ({ pos: boat.position, heading: headingNow }),
        getElev: () => elev,
        landHeight: (x, z) => (terrainMod ? terrainMod.landHeight(x, z) : -10),
        obstacles: () => (props ? props.obstacles : []),
        buoys: () => (props ? props.buoys : []),
        onPing: (p) => {
            wu.uRipple.value[rippleI].set(p.x, p.z, t, 2.4)
            rippleI = (rippleI + 1) % RIPPLE_N
        },
    })
    const startDrive = () => {
        intro.done = true
        cut = CUT_ALL_SOLID
        drive.start()
    }
    addEventListener("drive:start", startDrive)
    document.addEventListener("click", (e) => {
        const b = e.target.closest && e.target.closest("[data-drive]")
        if (!b) return
        e.preventDefault()
        startDrive()
    })
    document.documentElement.classList.add("can-drive")

    // ---- windows: the page is white, the harbour shows only in these boxes ----
    const winEls = [...document.querySelectorAll(".win-box, [data-win]")]
    const winR = new Map()
    const readRadii = () => winEls.forEach((el) => winR.set(el, parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0))
    readRadii()
    addEventListener("resize", readRadii)
    let lastClip = ""
    const rr = (x, y, w, h, r) => {
        r = Math.min(r, w / 2, h / 2)
        const f = (n) => Math.round(n * 10) / 10
        return `M${f(x + r)} ${f(y)}H${f(x + w - r)}A${f(r)} ${f(r)} 0 0 1 ${f(x + w)} ${f(y + r)}V${f(y + h - r)}A${f(r)} ${f(r)} 0 0 1 ${f(x + w - r)} ${f(y + h)}H${f(x + r)}A${f(r)} ${f(r)} 0 0 1 ${f(x)} ${f(y + h - r)}V${f(y + r)}A${f(r)} ${f(r)} 0 0 1 ${f(x + r)} ${f(y)}Z`
    }
    // clip the canvas to the windows on screen; false when none is visible (then nothing is drawn)
    function clipToWindows(full) {
        let d = ""
        if (full) d = "full"
        else {
            for (const el of winEls) {
                const r = el.getBoundingClientRect()
                if (r.bottom <= 0 || r.top >= innerHeight || r.width < 2 || r.height < 2) continue
                if (el.closest(".is-formed")) continue // a photo that has formed: the real photo covers it
                d += rr(r.left, r.top, r.width, r.height, winR.get(el) || 0)
            }
        }
        const css = d === "full" ? "none" : d ? `path('${d}')` : "inset(50%)"
        if (css !== lastClip) {
            canvas.style.clipPath = css
            lastClip = css
        }
        return !!d
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
    let exposure = 1
    let wakeI = 0
    const lastWake = new THREE.Vector2(1e9, 1e9)
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
        // nothing of the harbour on screen: skip the frame
        if (!clipToWindows(drive && (drive.active || drive.outBlend > 0)) && !(intro.start >= 0 && !intro.done)) return
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
        let globeO = 0
        let globeArc = 0
        let globeP = null
        let anchored = 0
        let photoO = 0
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
            } else if (s.kind === "globe" && globe) {
                const arcTo = smooth(clamp((s.p - s.arcStart) / 0.38))
                globeArc = Math.max(globeArc, arcTo)
                globeO = Math.max(globeO, s.w)
                globeP = s
                const lat = lerp(PLACES.trondheim.lat, PLACES.sarasota.lat, arcTo * 0.85)
                const lon = lerp(PLACES.trondheim.lon, PLACES.sarasota.lon, arcTo * 0.85)
                globe.face(lat * 0.8, lon + (reduced ? 0 : Math.sin(t * 0.12) * 4))
                let dist = (GLOBE_R * (small ? 5.8 : 4.3) - s.p * GLOBE_R * 0.4) * s.zoom
                let ox = small ? 0 : s.offset
                let oy = small ? 0.12 : 0
                if (s.anchor) {
                    // fit the globe into the box on the page, and follow it while scrolling
                    const r = s.anchor.getBoundingClientRect()
                    ox = (r.left + r.width / 2 - W / 2) / W
                    oy = -(r.top + r.height / 2 - H / 2) / H
                    const want = Math.min(r.width, r.height) * 0.46
                    dist = (GLOBE_R * (H / 2)) / (want * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)))
                    anchored = Math.max(anchored, s.w)
                }
                P.set(GLOBE_CENTER.x + pointerS.x * 3, GLOBE_CENTER.y, GLOBE_CENTER.z + dist)
                L.copy(GLOBE_CENTER)
                boatVis = Math.min(boatVis, 1 - s.w)
                dim = lerp(dim, 0.4, s.w)
                off = lerp(off, ox, s.w)
                offY = lerp(offY, oy, s.w)
            } else if (s.kind === "photo" && photo) {
                // the photo forms from points in its own box on the page, then the real photo takes over
                if (s.w > 0.5 && s.t0 === undefined) s.t0 = t
                const el = s.t0 === undefined ? 0 : t - s.t0
                photo.U.uAssemble.value = reduced ? 1 : clamp(el / 1.9)
                photo.U.uScan.value = reduced ? 2 : lerp(-0.1, 1.1, clamp((el - 0.5) / 1.7))
                if (el > 2.2 || reduced) s.el.classList.add("is-formed")
                photoO = Math.max(photoO, s.w * (el < 2.6 ? 1 : Math.max(0, 1 - (el - 2.6) / 0.9)))
                const r = s.el.getBoundingClientRect()
                const tanH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))
                const dist = (photo.width * W) / (2 * tanH * camera.aspect * Math.max(80, r.width))
                const settle = clamp(1 - (el - 1.9) / 0.5)
                P.set(PHOTO_CENTER.x + pointerS.x * dist * 0.1 * settle, PHOTO_CENTER.y - pointerS.y * dist * 0.06 * settle, PHOTO_CENTER.z + dist)
                L.copy(PHOTO_CENTER)
                off = lerp(off, (r.left + r.width / 2 - W / 2) / W, s.w)
                offY = lerp(offY, -(r.top + r.height / 2 - H / 2) / H, s.w)
                anchored = Math.max(anchored, s.w)
                boatVis = Math.min(boatVis, 1 - s.w)
                dim = lerp(dim, 0.5, s.w)
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

        // ---- the time of day: afternoon at the top of the page, night at the bottom ----
        const elevWant = drive && drive.active ? drive.sunElev : lerp(sunTop, -8.5, smooth(clamp((scrollP - 0.04) / 0.92)))
        elev += (elevWant - elev) * (1 - Math.exp(-dt * 2.5))
        if (Math.abs(elev - sky.state.elev) > 0.03) sky.setSun(elev, SUN_AZIMUTH)
        if (sky.bake()) scene.environment = sky.env
        const S = sky.state
        const night = S.night
        sky.skyAt(0, 1, 0, zenC)
        zenLum += (lumOf(zenC) - zenLum) * 0.2
        sunLight.color.copy(S.sunColor)
        sunLight.intensity = 3.2
        sunLight.position.copy(S.dir).multiplyScalar(1000).add(camLook)
        sunLight.target.position.copy(camLook)
        // a camera adapts to the light: brighter at dusk, but night stays night
        const expWant = clamp(Math.pow(0.1 / Math.max(zenLum, 1e-4), 0.5), 0.85, 4.2)
        moonLight.intensity = night * 0.35
        exposure += (expWant - exposure) * (1 - Math.exp(-dt * 3))
        AIR.uNight.value = night
        if (shoreLights) shoreLights.material.uniforms.uNight.value = night / exposure

        // outside the 3D moments the world steps back a little, so the text reads well
        let stageW = 0
        for (const s of stages) stageW = Math.max(stageW, s.w)
        if (drive && drive.active) stageW = 1
        const contentDim = 1 // the harbour only shows in its own windows now
        const freeLookNow = drive && drive.active ? 1 : hero ? hero.w : 0
        dim *= contentDim

        // boat rides the waves (or is driven)
        let heading = 0
        let speed = 0
        if (drive && drive.active) {
            drive.update(dt, t)
            boatPos.set(drive.pos.x, 0, drive.pos.z)
            heading = drive.heading
            speed = drive.speed
            boatVis = 1
            camPos.copy(drive.camPos)
            camLook.copy(drive.camLook)
            off = 0
            offY = 0
            xray = 0
        } else if (courseO > 0.001 && course) {
            const a = course.curve.getPointAt(clamp(courseU))
            const b = course.curve.getPointAt(clamp(courseU + 0.01))
            heading = -Math.atan2(b.z - a.z, b.x - a.x)
            heading *= courseO
        }
        // after driving: glide back to the page's own view
        if (drive && !drive.active && drive.outBlend > 0) {
            const k = smooth(drive.outBlend)
            drive.fade(dt)
            boatPos.lerp(drive.pos, k)
            let dh = drive.heading - heading
            dh = Math.atan2(Math.sin(dh), Math.cos(dh))
            heading += dh * k
            camPos.lerp(drive.camPos, k)
            camLook.lerp(drive.camLook, k)
            boatVis = Math.max(boatVis, k)
        }
        headingNow = heading
        const bx = boatPos.x
        const bz = boatPos.z
        const h = waveHeight(bx, bz, t, 1)
        const [sx, sz] = waveSlope(bx, bz, t, 1)
        boat.position.set(bx, h * 0.8, bz)
        const pitch = drive && drive.active ? drive.pitch : 0
        const roll = drive && drive.active ? drive.roll : 0
        boat.rotation.set(0, 0, 0)
        boat.rotateY(heading)
        // lie on the water: bow up on a rising slope, lean with the slope across
        boat.rotateZ((sx * Math.cos(heading) - sz * Math.sin(heading)) * 1.1 + pitch)
        boat.rotateX(-(sx * Math.sin(heading) + sz * Math.cos(heading)) * 1.1 + roll)
        boat.visible = boatVis > 0.02
        argus.points.uOpacity.value = boatVis
        argus.points.uGain.value = 1 / exposure
        argus.uniforms.uEdgeGain.value = 1 / exposure
        model.traverse((o) => {
            if (o.isMesh) {
                o.material.transparent = boatVis < 0.999
                o.material.opacity = boatVis
            }
        })
        // the wake: a trail of foam where the boat has been
        const moved = Math.hypot(bx - lastWake.x, bz - lastWake.y)
        if (moved > 1.3 && boat.visible) {
            const sp = drive && drive.active ? clamp(speed / 14) : courseO > 0.1 ? 0.6 : 0
            if (sp > 0.02) {
                wu.uWake.value[wakeI].set(bx, bz, t, sp)
                wakeI = (wakeI + 1) % WAKE_N
            }
            lastWake.set(bx, bz)
        }

        camera.position.copy(camPos)
        camera.lookAt(camLook)
        // follow an anchored box exactly, otherwise ease
        const ko = anchored > 0.5 ? 1 : 1 - Math.exp(-dt * 5)
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
            titleO = Math.min(titleO + (want - titleO) * (1 - Math.exp(-dt * 3)), hero.w) * (drive && drive.active ? 0 : 1)
            title.material.opacity = titleO
            title.material.color.setScalar(0.95 / exposure)
            title.visible = titleO > 0.01
        }

        // water, LiDAR
        sweep += dt * 2.4
        wu.uTime.value = t
        wu.uCenter.value.set(Math.round(camera.position.x), Math.round(camera.position.z))
        wu.uBoat.value.set(boat.position.x, boat.position.z)
        wu.uBoatDir.value.set(Math.cos(-heading), Math.sin(-heading))
        wu.uBoatSpeed.value = clamp(speed / 14)
        wu.uBoatOn.value = boat.visible ? 1 : 0
        wu.uSweepAngle.value = -sweep
        wu.uCam.value.copy(camera.position)
        wu.uDim.value = dim
        wu.uSweep.value = boatVis * (intro.done ? 1 : clamp(cut - CUT_ALL_CLOUD)) * (1 - xray * 0.5) * 0.6 / exposure
        for (const l of navLights) {
            l.material.opacity = night * boatVis
            l.visible = night > 0.05 && boat.visible
        }
        // at night the moon takes the sun's place on the water: a path of light towards it
        if (S.elev > -2) {
            wu.uSun.value.copy(S.dir)
            wu.uSunCol.value.copy(S.sunColor)
        } else {
            wu.uSun.value.copy(MOON)
            wu.uSunCol.value.setRGB(0.0022, 0.0025, 0.003).multiplyScalar(night)
        }
        wu.uNight.value = night
        wu.uBody.value.setRGB(0.02, 0.075, 0.09).multiplyScalar(Math.max(zenLum, 0.0015) * 1.3)
        sky.uniforms.uDim.value = lerp(1, dim, 0.6)
        // behind text the sun is only a glow, not a blinding disc
        sky.uniforms.uSunVis.value = 0.15 + 0.85 * freeLookNow
        wu.uGlit.value = 0.3 + 0.7 * freeLookNow
        sky.update(t)
        beam.position.set(boat.position.x, 0.25, boat.position.z)
        beam.rotation.y = sweep
        beam.material.uniforms.uOpacity.value = boatVis * (1 - coastO) * (intro.done ? 1 : 0) * (0.15 + night * 0.35) / exposure
        glow.material.opacity = (0.65 + Math.sin(t * 6) * 0.25) * boatVis * (cut > 0 ? 1 : 0.2) * (0.3 + night * 0.7)

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
        if (photo) {
            photo.U.uOpacity.value = photoO
            photo.U.uProj.value = argus.points.uProj.value
            photo.points.visible = photoO > 0.01
        }
        if (globe) {
            globe.setOpacity(globeO / Math.sqrt(exposure))
            globe.update(t, globeArc, 0)
            beam.material.uniforms.uOpacity.value *= 1 - globeO
            if (globeP) placeGlobeLabels(globeP, globeArc)
        }
        if (coast) {
            coast.setOpacity(coastO / Math.sqrt(exposure))
            const cs = stages.find((s) => s.kind === "coast")
            coast.routeMat.uniforms.uTo.value = cs ? clamp(cs.p * 1.15) : 0
            coast.routeMat.uniforms.uTime.value = t
            if (cs && cs.cities) placeCities(cs)
        }
        if (props) props.update(t, dt, night)
        spray.update(dt)
        spray.uniforms.uCol.value.copy(S.sunColor).multiplyScalar(Math.max(S.dir.y, 0) * 2.2).add(zenC).multiplyScalar(1.4)
        spray.uniforms.uProj.value = argus.points.uProj.value
        if (birds) birds.update(t, dt, smooth(clamp((night - 0.25) / 0.5)))
        if (drive && drive.active && props) drive.collide(props.buoys)

        placeLabels()
        if (motes) motes.update(t, camera.position, argus.points.uProj.value, (0.25 + 0.5 * night) * (1 - globeO * 0.6) / exposure)

        // ---- the camera: exposure, bloom, sun rays and flare ----
        const g = post.grade.uniforms
        g.uExposure.value = exposure
        g.uDim.value = contentDim > 0.99 ? 1 : lerp(0.6, 1, contentDim)
        post.bloom.threshold = 2.4 / exposure
        post.bloom.strength = (0.45 + night * 0.25) * lerp(0.5, 1, contentDim)
        tmp.copy(S.dir).multiplyScalar(1000).add(camera.position).project(camera)
        g.uSunPos.value.set(tmp.x * 0.5 + 0.5, tmp.y * 0.5 + 0.5)
        g.uSunOn.value = S.elev > -1.5 && tmp.z < 1 ? 1 : 0
        g.uSunCol.value.copy(S.sunColor)
        // sun rays and flare where you look around freely (the first screen and driving), not behind text
        const freeLook = drive && drive.active ? 1 : hero ? hero.w : 0
        g.uRays.value = reduced ? 0 : 0.9 * (1 - smooth(clamp((S.elev - 6) / 18))) * freeLook
        g.uFlare.value = freeLook

        // 1) the mirror image, 2) the scene, bloom and grade
        if (wu.uReflectOn.value > 0) renderReflection()
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

    // labels on the globe: the pins in the HTML are moved to the places on screen
    const gv = new THREE.Vector3()
    function placeGlobeLabels(s, arcTo) {
        globe.group.updateMatrixWorld(true)
        for (const el of s.globePins) {
            const key = el.dataset.globePin
            if (key === "mid") gv.copy(globe.arcMid)
            else gv.copy(globe.pins.find((p) => p.key === key).top)
            globe.worldOf(gv, gv)
            // hidden when on the far side of the earth
            const toCam = camera.position.clone().sub(GLOBE_CENTER).normalize()
            const facing = gv.clone().sub(GLOBE_CENTER).normalize().dot(toCam)
            gv.project(camera)
            const lw = el.offsetWidth || 160
            el.style.setProperty("--x", `${Math.min((gv.x * 0.5 + 0.5) * W, W - lw - 24)}px`)
            el.style.setProperty("--y", `${(-gv.y * 0.5 + 0.5) * H}px`)
            const need = key === "trondheim" ? 0 : key === "mid" ? 0.55 : 0.97
            el.classList.toggle("is-shown", s.w > 0.82 && facing > 0.05 && arcTo >= need)
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

    // ---- touch the water: ripples where you click, and a light trail behind the pointer ----
    const ray = new THREE.Raycaster()
    const waterPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0)
    const hit = new THREE.Vector3()
    const ndc = new THREE.Vector2()
    let lastTrail = 0
    function waterAt(x, y) {
        ndc.set((x / innerWidth) * 2 - 1, -(y / innerHeight) * 2 + 1)
        ray.setFromCamera(ndc, camera)
        if (!ray.ray.intersectPlane(waterPlane, hit)) return null
        return hit.distanceTo(camera.position) < 420 ? hit : null
    }
    function ripple(p, strength) {
        wu.uRipple.value[rippleI].set(p.x, p.z, t, strength)
        rippleI = (rippleI + 1) % RIPPLE_N
    }
    const interactive = "a,button,input,textarea,select,label,summary,[role=button],[tabindex],.drive-hud"
    const inWindow = (x, y) =>
        winEls.some((el) => {
            const r = el.getBoundingClientRect()
            return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom
        })
    addEventListener(
        "pointerdown",
        (e) => {
            if (reduced || (e.target.closest && e.target.closest(interactive)) || !inWindow(e.clientX, e.clientY)) return
            const p = waterAt(e.clientX, e.clientY)
            if (p) {
                ripple(p, 1.2)
                spray.splash(p.x, p.z, 0.7)
            }
        },
        { passive: true }
    )
    addEventListener(
        "pointermove",
        (e) => {
            if (reduced || e.pointerType !== "mouse" || t - lastTrail < 0.22 || !inWindow(e.clientX, e.clientY)) return
            const p = waterAt(e.clientX, e.clientY)
            if (!p) return
            lastTrail = t
            ripple(p, 0.35)
        },
        { passive: true }
    )

    if (/[?&]debug\b/.test(location.search))
        window.__dbg = {
            THREE,
            scene,
            camera,
            renderer,
            coast,
            course,
            globe,
            argus,
            post,
            sky,
            water,
            get drive() {
                return drive
            },
            get props() {
                return props
            },
            setIntro: (v) => {
                introFixed = v
                intro.done = false
                intro.start = 0
            },
            setSunTop: (v) => (sunTop = v),
        }

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
    // the land, the city and the harbour things come in once the first frames are out
    setTimeout(() => buildWorld().catch((e) => console.warn("world failed", e)), 80)
    return { renderer, scene, camera }
}
