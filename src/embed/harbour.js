import * as THREE from "three"
import { createSky, MOON } from "../scene/world/sky.js"
import { createWater, RIPPLE_N } from "../scene/world/sea.js"
import { AIR } from "../scene/world/air.js"
import { createTerrain, createShoreLights } from "../scene/world/terrain.js"
import { createProps } from "../scene/world/props.js"
import { createBirds } from "../scene/world/birds.js"
import { createSpray } from "../scene/world/spray.js"
import { createArgus, CUT_ALL_SOLID, CUT_ALL_CLOUD } from "../scene/world/argus.js"
import { createPost } from "../scene/post.js"
import { waveHeight, waveSlope } from "../scene/world/waves.js"

/* ================================================================
   The harbour with Argus, in one box on someone else's page (Framer).

   mountHarbour(element, options) draws into the element and follows its
   size. Options:
     models   base URL of the models (…/media/models/)
     view     "close" (Argus up close), "argus" (a bit lower), "wide" (the harbour)
     sun      height of the sun in degrees: 20 afternoon, 4 golden, 0 sunset, -5 dusk, -10 night
     offset   move the boat sideways on screen, -0.4 … 0.4 (room for text)
     scan     play the LiDAR scan-in when it first comes into view
     mouse    the camera follows the pointer a little; click the water for ripples
     turn     how fast the camera drifts around the boat (0 = still)
   Returns { set(options), destroy() }.
   ================================================================ */

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const lerp = (a, b, t) => a + (b - a) * t
const ease = (t) => 1 - Math.pow(1 - clamp(t), 3)

const VIEWS = {
    close: { a: -0.95, r: 15.5, y: 2.3, look: [0, 1.0, 0] },
    argus: { a: -0.5, r: 13.5, y: 1.7, look: [0, 1.4, 0] },
    wide: { a: -0.9, r: 40, y: 7, look: "far" },
}

export function mountHarbour(el, options = {}) {
    const o = { models: "/media/models/", view: "close", sun: 16, offset: 0, scan: true, mouse: true, turn: 1, ...options }
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches
    const lowPower = matchMedia("(pointer: coarse)").matches || (navigator.hardwareConcurrency || 8) <= 4

    const canvas = document.createElement("canvas")
    canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;opacity:0;transition:opacity 1s ease"
    el.appendChild(canvas)
    let renderer
    try {
        renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: "high-performance" })
    } catch (e) {
        canvas.remove()
        return { set() {}, destroy() {} }
    }
    const dpr = Math.min(devicePixelRatio || 1, lowPower ? 1.25 : 1.5)
    renderer.setPixelRatio(dpr)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(38, 1, 0.5, 60000)

    // sky and light
    const sky = createSky(renderer, { lowPower })
    sky.stars.material.uniforms.uPx.value = dpr
    scene.add(sky.group)
    let elev = o.sun
    sky.setSun(elev, 204)
    sky.bake(true)
    scene.environment = sky.env
    AIR.uPano.value = sky.pano.texture
    const sunLight = new THREE.DirectionalLight(0xffffff, 3.2)
    const moonLight = new THREE.DirectionalLight(new THREE.Color(0.62, 0.7, 1.0), 0)
    moonLight.position.copy(MOON).multiplyScalar(1000)
    scene.add(sunLight, sunLight.target, moonLight)

    // water
    const water = createWater({ lowPower })
    const wu = water.material.uniforms
    wu.uPano.value = sky.pano.texture
    scene.add(water)
    const spray = createSpray(lowPower ? 200 : 400)
    scene.add(spray.points)

    // the land and the harbour things
    let props = null
    let birds = null
    let lights = null
    setTimeout(() => {
        if (dead) return
        scene.add(createTerrain({ lowPower }))
        lights = createShoreLights({ lowPower })
        lights.material.uniforms.uPx.value = dpr
        scene.add(lights)
        props = createProps({ lowPower, base: o.models + "world/" })
        scene.add(props.group)
        if (!reduced) {
            birds = createBirds(lowPower ? 8 : 16)
            scene.add(birds.mesh)
        }
    }, 60)

    // Argus
    const boat = new THREE.Group()
    scene.add(boat)
    const SCALE = 6.2
    const argus = createArgus({ renderer, lowPower, url: o.models + (lowPower ? "argus-lite.glb" : "argus.glb") })
    argus.model.scale.setScalar(SCALE)
    argus.model.position.y = 0.075 * SCALE
    boat.add(argus.model)
    let cut = o.scan && !reduced ? CUT_ALL_CLOUD : CUT_ALL_SOLID
    if (!(o.scan && !reduced)) argus.points.uAssemble.value = 1
    let introStart = -1

    // reflection camera (the scene seen from under the water)
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
        water.visible = false
        renderer.setRenderTarget(reflectRT)
        renderer.clear()
        renderer.render(scene, reflCam)
        renderer.setRenderTarget(null)
        water.visible = true
    }

    const post = createPost(renderer, scene, camera, { lowPower })

    // size: follow the box
    let W = 1
    let H = 1
    function resize() {
        W = Math.max(1, el.clientWidth)
        H = Math.max(1, el.clientHeight)
        renderer.setSize(W, H, false)
        camera.aspect = W / H
        camera.updateProjectionMatrix()
        post.setSize(W, H, dpr)
        const rk = lowPower ? 0.35 : 0.5
        reflectRT.setSize(Math.round(W * dpr * rk), Math.round(H * dpr * rk))
        argus.points.uProj.value = (H * dpr) / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)))
    }
    const ro = new ResizeObserver(resize)
    ro.observe(el)
    resize()

    // only draw while it is on screen
    let onScreen = true
    const io = new IntersectionObserver((e) => (onScreen = e[0].isIntersecting), { rootMargin: "100px" })
    io.observe(el)

    // pointer: a little parallax, and ripples where you click the water
    const pointer = new THREE.Vector2()
    const pointerS = new THREE.Vector2()
    const ray = new THREE.Raycaster()
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0)
    const hit = new THREE.Vector3()
    let rippleI = 0
    const onMove = (e) => {
        const r = el.getBoundingClientRect()
        pointer.set(((e.clientX - r.left) / r.width) * 2 - 1, ((e.clientY - r.top) / r.height) * 2 - 1)
    }
    const onDown = (e) => {
        if (!o.mouse || reduced) return
        const r = el.getBoundingClientRect()
        ray.setFromCamera(new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1), camera)
        if (!ray.ray.intersectPlane(plane, hit) || hit.distanceTo(camera.position) > 400) return
        wu.uRipple.value[rippleI].set(hit.x, hit.z, t, 1.2)
        rippleI = (rippleI + 1) % RIPPLE_N
        spray.splash(hit.x, hit.z, 0.7)
    }
    el.addEventListener("pointermove", onMove, { passive: true })
    el.addEventListener("pointerdown", onDown, { passive: true })

    // loop
    const clock = new THREE.Clock()
    let t = 0
    let exposure = 1
    let zenLum = 0.1
    const zenC = new THREE.Color()
    const lumOf = (c) => c.r * 0.2126 + c.g * 0.7152 + c.b * 0.0722
    const camPos = new THREE.Vector3()
    const camLook = new THREE.Vector3()
    const tmp = new THREE.Vector3()
    let raf = 0
    let dead = false
    let shown = false

    function frame() {
        raf = requestAnimationFrame(frame)
        const dt = Math.min(clock.getDelta(), 0.05)
        if (!onScreen) return
        if (!reduced) t += dt

        // time of day
        elev += (o.sun - elev) * (1 - Math.exp(-dt * 2.5))
        if (Math.abs(elev - sky.state.elev) > 0.03) sky.setSun(elev, 204)
        if (sky.bake()) scene.environment = sky.env
        const S = sky.state
        const night = S.night
        sky.skyAt(0, 1, 0, zenC)
        zenLum += (lumOf(zenC) - zenLum) * 0.2
        sunLight.color.copy(S.sunColor)
        sunLight.position.copy(S.dir).multiplyScalar(1000)
        moonLight.intensity = night * 0.35
        const expWant = clamp(Math.pow(0.1 / Math.max(zenLum, 1e-4), 0.5), 0.85, 4.2)
        exposure += (expWant - exposure) * (1 - Math.exp(-dt * 3))
        AIR.uNight.value = night
        if (lights) lights.material.uniforms.uNight.value = night / exposure

        // camera
        pointerS.lerp(o.mouse ? pointer : pointer.set(0, 0), 1 - Math.exp(-dt * 2.8))
        const v = VIEWS[o.view] || VIEWS.close
        const a = v.a + (reduced ? 0 : Math.sin(t * 0.09 * o.turn) * 0.14 + t * 0.004 * o.turn) + pointerS.x * 0.2
        camPos.set(Math.cos(a) * v.r, v.y - pointerS.y * 0.35, Math.sin(a) * v.r)
        if (v.look === "far") camLook.set(-Math.cos(a) * 70, 3, -Math.sin(a) * 70)
        else camLook.fromArray(v.look)
        camera.position.copy(camPos)
        camera.lookAt(camLook)
        if (Math.abs(o.offset) > 0.002) camera.setViewOffset(W, H, -o.offset * W, 0, W, H)
        else camera.clearViewOffset()

        // the scan-in: points fly in, then the LiDAR line turns them into the boat
        if (introStart < 0 && o.scan && !reduced) introStart = t
        if (o.scan && !reduced && cut < CUT_ALL_SOLID) {
            const it = t - introStart
            argus.points.uAssemble.value = clamp(it / 1.5)
            cut = lerp(CUT_ALL_CLOUD, CUT_ALL_SOLID, ease((it - 1.1) / 1.7))
        }
        argus.uniforms.uCut.value = cut
        argus.uniforms.uGhost.value = 0
        argus.uniforms.uTime.value = t
        argus.points.uGain.value = 1 / exposure
        argus.uniforms.uEdgeGain.value = 1 / exposure

        // Argus on the waves
        const h = waveHeight(0, 0, t, 1)
        const [sx, sz] = waveSlope(0, 0, t, 1)
        boat.position.set(0, h * 0.8, 0)
        boat.rotation.set(0, 0, 0)
        boat.rotateZ(sx * 1.1)
        boat.rotateX(-sz * 1.1)

        // water
        wu.uTime.value = t
        wu.uCenter.value.set(Math.round(camera.position.x), Math.round(camera.position.z))
        wu.uCam.value.copy(camera.position)
        wu.uBoat.value.set(0, 0)
        wu.uBoatOn.value = 1
        wu.uSweep.value = (cut > CUT_ALL_SOLID - 0.01 ? 1 : clamp(cut - CUT_ALL_CLOUD)) * 0.6 / exposure
        if (S.elev > -2) {
            wu.uSun.value.copy(S.dir)
            wu.uSunCol.value.copy(S.sunColor)
        } else {
            wu.uSun.value.copy(MOON)
            wu.uSunCol.value.setRGB(0.0022, 0.0025, 0.003).multiplyScalar(night)
        }
        wu.uNight.value = night
        wu.uBody.value.setRGB(0.02, 0.075, 0.09).multiplyScalar(Math.max(zenLum, 0.0015) * 1.3)
        sky.update(t)
        if (props) props.update(t, dt, night)
        if (birds) birds.update(t, dt, clamp((night - 0.25) / 0.5))
        spray.update(dt)
        spray.uniforms.uCol.value.copy(S.sunColor).multiplyScalar(Math.max(S.dir.y, 0) * 2.2).add(zenC).multiplyScalar(1.4)
        spray.uniforms.uProj.value = argus.points.uProj.value

        // camera: exposure, bloom, a lens flare and rays when the sun is in view
        const g = post.grade.uniforms
        g.uExposure.value = exposure
        post.bloom.threshold = 2.4 / exposure
        post.bloom.strength = 0.45 + night * 0.25
        tmp.copy(S.dir).multiplyScalar(1000).add(camera.position).project(camera)
        g.uSunPos.value.set(tmp.x * 0.5 + 0.5, tmp.y * 0.5 + 0.5)
        g.uSunOn.value = S.elev > -1.5 && tmp.z < 1 ? 1 : 0
        g.uSunCol.value.copy(S.sunColor)
        g.uRays.value = reduced ? 0 : 0.9 * (1 - clamp((S.elev - 6) / 18))

        renderReflection()
        post.render(t)
        if (!shown) {
            shown = true
            canvas.style.opacity = "1"
        }
    }
    argus.ready.then(() => {
        if (!dead) raf = requestAnimationFrame(frame)
    })

    return {
        set(next) {
            Object.assign(o, next)
        },
        destroy() {
            dead = true
            cancelAnimationFrame(raf)
            ro.disconnect()
            io.disconnect()
            el.removeEventListener("pointermove", onMove)
            el.removeEventListener("pointerdown", onDown)
            renderer.dispose()
            renderer.forceContextLoss()
            canvas.remove()
        },
    }
}
