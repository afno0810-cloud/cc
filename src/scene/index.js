import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js"
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js"
import { createWater, createSky, createStars, createHills, createBeam, COLORS, MOON_DIR } from "./world/sea.js"
import { waveHeight, waveSlope } from "./world/waves.js"

/* ================================================================
   The harbour behind every page.

   One renderer, one scene: Trondheim harbour at night with Argus
   floating in it and its LiDAR sweeping the water. Sections can take
   over the camera ("stages"), marked in the HTML:

   <section data-stage="argus">   Argus in close-up, turning with scroll,
                                  with labels on the parts
   <section data-stage="course">  Argus sails the Njord course
   <section data-stage="coast">   Norway as a point cloud, route along the coast

   The Argus model is made with Higgsfield (Tripo, image → 3D) from our
   own photos, and compressed with gltf-transform (meshopt + WebP).
   ================================================================ */

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const smooth = (t) => t * t * (3 - 2 * t)
const lerp = (a, b, t) => a + (b - a) * t

/* Where the parts are on the Argus model (model units, centred model, bow = +x).
   Measured on the Higgsfield mesh. */
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

export async function startScene({ reduced = false } = {}) {
    const canvas = document.createElement("canvas")
    canvas.id = "scene"
    canvas.setAttribute("aria-hidden", "true")
    document.body.prepend(canvas)

    const small = Math.min(innerWidth, innerHeight) < 700
    const lowPower = small || (navigator.hardwareConcurrency || 8) <= 4
    let renderer
    try {
        renderer = new THREE.WebGLRenderer({ canvas, antialias: !lowPower, alpha: false, powerPreference: "high-performance" })
    } catch (e) {
        canvas.remove()
        return null
    }
    const dpr = Math.min(devicePixelRatio || 1, lowPower ? 1.25 : 1.6)
    renderer.setPixelRatio(dpr)
    renderer.setSize(innerWidth, innerHeight, false)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.05
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
    scene.environmentIntensity = 0.38
    const hemi = new THREE.HemisphereLight(new THREE.Color("#b9a6d8"), new THREE.Color("#0b0914"), 0.9)
    const moon = new THREE.DirectionalLight(new THREE.Color("#efe6ff"), 1.6)
    moon.position.copy(MOON_DIR).multiplyScalar(100)
    const rim = new THREE.PointLight(COLORS.violet, 60, 30, 1.6)
    rim.position.set(-4, 3, -5)
    scene.add(hemi, moon, rim)

    // ---- Argus ----
    const boat = new THREE.Group() // world position + bobbing
    const model = new THREE.Group() // scaled, centred mesh
    boat.add(model)
    scene.add(boat)
    const SCALE = 6.2 // model is ~1 unit long → ~6 scene units
    model.scale.setScalar(SCALE)

    // LiDAR glow: a soft sprite at the sensor and a ring for the highlighted part
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
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: COLORS.lavender, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }))
    glow.scale.setScalar(0.18)
    const mark = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: COLORS.cardinal, transparent: true, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, opacity: 0 }))
    mark.scale.setScalar(0.22)
    mark.renderOrder = 20
    model.add(glow, mark)
    glow.position.fromArray(PARTS.lidar.p)

    const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder)
    const modelUrl = lowPower ? "/media/models/argus-lite.glb" : "/media/models/argus.glb"
    const modelReady = loader
        .loadAsync(modelUrl)
        .then((gltf) => {
            const obj = gltf.scene
            const box = new THREE.Box3().setFromObject(obj)
            obj.position.sub(box.getCenter(new THREE.Vector3()))
            obj.traverse((o) => {
                if (o.isMesh) {
                    o.material.envMapIntensity = 1
                    if (o.material.map) o.material.map.anisotropy = renderer.capabilities.getMaxAnisotropy()
                }
            })
            model.add(obj)
        })
        .catch(() => {
            // no model: keep a simple silhouette so the scene still makes sense
            const m = new THREE.Mesh(new THREE.BoxGeometry(1, 0.2, 0.8), new THREE.MeshStandardMaterial({ color: 0xcfcfe0 }))
            model.add(m)
        })
    // waterline: the model's hulls sit about 0.12 model-units below the deck centre
    model.position.y = 0.05 * SCALE

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

    if (/[?&]debug\b/.test(location.search)) window.__dbg = { THREE, scene, camera, renderer, coast, course }

    // ---- stages: measured on every frame from the layout ----
    const stages = stageEls.map((el) => {
        const labelsEl = el.querySelector("[data-labels]")
        const partsWanted = (el.dataset.parts || "lidar,gnss,camera,case,hull,props").split(",")
        const labels = partsWanted.map((key) => {
            const d = document.createElement("div")
            d.className = "hotspot"
            d.innerHTML = `<i></i><span>${PARTS[key].label}</span>`
            labelsEl && labelsEl.appendChild(d)
            return { key, el: d, v: new THREE.Vector3() }
        })
        return {
            el,
            kind: el.dataset.stage,
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

    function measure() {
        const vh = innerHeight
        for (const s of stages) {
            const r = s.el.getBoundingClientRect()
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
                active = s.steps[Math.min(s.steps.length - 1, Math.floor(s.p * s.steps.length * 0.999))]
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
    const baseOffset = parseFloat(document.body.dataset.offset || (document.querySelector(".hero-home") ? "0.14" : "0.3"))
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
        renderer.setSize(W, H, false)
        camera.aspect = W / H
        camera.updateProjectionMatrix()
    }
    addEventListener("resize", resize)

    // ---- loop ----
    const clock = new THREE.Clock()
    let t = 0
    let visible = true
    document.addEventListener("visibilitychange", () => (visible = !document.hidden))
    const heroCover = document.querySelector(".hero-home")
    const lidarWorld = new THREE.Vector3()
    let sweep = 0
    let viewOffset = 0
    let viewOffsetY = 0
    const telemetry = {
        mode: document.querySelector('[data-t="mode"]'),
        pos: document.querySelector('[data-t="pos"]'),
        hdg: document.querySelector('[data-t="hdg"]'),
        pts: document.querySelector('[data-t="pts"]'),
    }
    let teleTick = 0

    function frame() {
        requestAnimationFrame(frame)
        if (!visible) return
        const dt = Math.min(clock.getDelta(), 0.05)
        if (!reduced) t += dt

        // skip rendering while the hero video fully covers the canvas
        if (heroCover) {
            const hr = heroCover.getBoundingClientRect()
            if (hr.bottom > innerHeight * 0.98) {
                updateTelemetry(dt)
                return
            }
        }

        measure()
        const docH = Math.max(1, document.documentElement.scrollHeight - innerHeight)
        const scrollP = clamp(scrollY / docH)

        // base: the harbour
        harbourCam(t, scrollP, camPos, camLook)
        let boatPos = tmp.set(0, 0, 0).clone()
        let dim = 1
        // on phones the text runs over the middle of the screen, so outside the 3D stages
        // the boat stays away on pages without the big hero video
        let boatVis = small && !heroCover ? 0 : 1
        let courseO = 0
        let coastO = 0
        let off = !small ? baseOffset : 0
        let offY = 0

        for (const s of stages) {
            if (s.w <= 0.001) continue
            const P = new THREE.Vector3()
            const L = new THREE.Vector3()
            if (s.kind === "argus") {
                if (small && !heroCover) boatVis = Math.max(boatVis, s.w)
                argusCam(s, P, L)
                off = lerp(off, small ? 0 : s.offset, s.w)
                if (small && s.listMode) offY = lerp(offY, 0.25, s.w)
            } else if (s.kind === "course" && course) {
                if (small && !heroCover) boatVis = Math.max(boatVis, s.w)
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

        // a little parallax from the mouse
        pointerS.lerp(pointer, 0.04)
        camPos.x += pointerS.x * 0.8
        camPos.y += -pointerS.y * 0.4

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
        model.traverse((o) => {
            if (o.isMesh) {
                o.material.transparent = boatVis < 0.999
                o.material.opacity = boatVis
            }
        })

        camera.position.copy(camPos)
        camera.lookAt(camLook)
        viewOffset = lerp(viewOffset, off, 0.08)
        viewOffsetY = lerp(viewOffsetY, offY, 0.08)
        if (Math.abs(viewOffset) > 0.002 || Math.abs(viewOffsetY) > 0.002) camera.setViewOffset(W, H, -viewOffset * W, viewOffsetY * H, W, H)
        else camera.clearViewOffset()

        // LiDAR
        sweep += dt * 2.4
        const wu = water.material.uniforms
        wu.uTime.value = t
        wu.uBoat.value.set(boat.position.x, boat.position.z)
        wu.uSweepAngle.value = -sweep
        wu.uCam.value.copy(camera.position)
        wu.uDim.value = dim
        wu.uSweep.value = boatVis
        sky.material.uniforms.uDim.value = lerp(1, dim, 0.6)
        stars.material.uniforms.uTime.value = t
        glow.getWorldPosition(lidarWorld)
        beam.position.set(boat.position.x, 0.25, boat.position.z)
        beam.rotation.y = sweep
        beam.material.uniforms.uOpacity.value = boatVis * (1 - coastO)
        glow.material.opacity = (0.6 + Math.sin(t * 6) * 0.25) * boatVis

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

        // labels on the parts
        placeLabels()
        renderer.render(scene, camera)
        updateTelemetry(dt)
    }

    function placeLabels() {
        for (const s of stages) {
            if (!s.labels.length) continue
            const show = s.w > 0.55
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
            if (activeKey && PARTS[activeKey] && show) {
                mark.position.fromArray(PARTS[activeKey].p)
                mark.material.opacity = 0.75 + Math.sin(t * 5) * 0.25
            }
        }
        if (!stages.some((s) => s.labels.length && s.w > 0.55 && s.active)) mark.material.opacity = 0
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

    // a simulated read-out on the home hero (clearly marked "Sim" in the page)
    const base = { lat: 63.4401, lon: 10.4203 }
    function updateTelemetry(dt) {
        if (!telemetry.pos) return
        teleTick += dt
        if (teleTick < 0.25) return
        teleTick = 0
        const k = t * 0.05
        telemetry.pos.textContent = `${(base.lat + Math.sin(k) * 0.00012).toFixed(4)}° N ${(base.lon + Math.cos(k * 0.8) * 0.0002).toFixed(4)}° E`
        telemetry.hdg.textContent = `${String(Math.round((72 + Math.sin(t * 0.3) * 4 + 360) % 360)).padStart(3, "0")}°`
        telemetry.pts.textContent = `${(1.31 + Math.sin(t * 1.7) * 0.04).toFixed(2)} M pts/s`
    }

    await modelReady
    resize()
    requestAnimationFrame(frame)
    requestAnimationFrame(() => canvas.classList.add("is-ready"))
    return { renderer, scene, camera }
}
