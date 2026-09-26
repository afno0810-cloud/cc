import * as THREE from "three"

/* ================================================================
   Drive mode: take the helm of Argus in the harbour.

   W A S D or the arrow keys (or the stick on a touch screen) to drive,
   Shift for more power, Space for a LiDAR ping, drag to look around,
   T or the button for the time of day, Esc to go back to the page.

   The boat has a little physics: thrust and water drag, it turns faster
   with speed, lifts its bows when it speeds up and leans into turns.
   Buoys can be pushed away, and the shore stops you. A radar shows what
   the LiDAR sees around the boat.
   ================================================================ */

const clamp = (v, a, b) => Math.min(b, Math.max(a, v))
const MAX = 13 // units/s (1 unit = 0.3 m)
const BOOST = 21
const RADAR_RANGE = 170

export function createDrive({ camera, getBoat, getElev, landHeight, obstacles, buoys, spray, onPing, reduced }) {
    const state = {
        active: false,
        pos: new THREE.Vector3(),
        heading: 0, // rotation about y; the bow points along (cos h, 0, -sin h)
        speed: 0,
        yawRate: 0,
        pitch: 0,
        roll: 0,
        camPos: new THREE.Vector3(),
        camLook: new THREE.Vector3(),
        sunElev: 12,
        outBlend: 0, // 1 → 0 after leaving, so the page camera takes over smoothly
    }
    const keys = new Set()
    const stick = new THREE.Vector2()
    let camYaw = 0
    let camPitch = 0.28
    let camDist = 17
    let dragging = false
    let lastDrag = 0
    let inBlend = 0
    const camFrom = new THREE.Vector3()
    const lookFrom = new THREE.Vector3()
    let savedScroll = 0
    let ping = -10
    const TIMES = [16, 5, 0.5, -3.5, -10]
    let timeI = 0

    // ---- the HUD ----
    const hud = document.createElement("div")
    hud.className = "drive-hud"
    hud.setAttribute("role", "dialog")
    hud.setAttribute("aria-label", "Drive Argus")
    hud.innerHTML = `
        <div class="hud-look" aria-hidden="true"></div>
        <div class="hud-top">
            <span class="hud-tag"><i></i>Drive Argus</span>
            <div class="hud-actions">
                <button type="button" class="hud-btn" data-hud="time">Time of day</button>
                <button type="button" class="hud-btn" data-hud="sound" aria-pressed="false">Sound</button>
                <button type="button" class="hud-btn hud-exit" data-hud="exit">Exit <kbd>Esc</kbd></button>
            </div>
        </div>
        <p class="hud-help"><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> or arrows to drive · <kbd>Shift</kbd> more power · <kbd>Space</kbd> LiDAR ping · drag to look around</p>
        <div class="hud-bottom">
            <div class="hud-gauges">
                <div class="hud-gauge"><span>Throttle</span><i><b class="hud-thr"></b></i></div>
                <canvas class="hud-compass" width="440" height="60" aria-hidden="true"></canvas>
            </div>
            <div class="hud-radar-wrap"><canvas class="hud-radar" width="360" height="360" aria-hidden="true"></canvas><span>LiDAR</span></div>
        </div>
        <div class="hud-stick" aria-hidden="true"><i></i></div>
    `
    document.body.appendChild(hud)

    // a small button on every page (after the first screen) to take the helm
    const fab = document.createElement("button")
    fab.type = "button"
    fab.className = "drive-fab"
    fab.setAttribute("data-drive", "")
    fab.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.2"/><path d="M12 4v5.8M12 14.2V20M4 12h5.8M14.2 12H20"/></svg><span>Drive Argus</span>`
    document.body.appendChild(fab)
    const hasHeroButton = !!document.querySelector(".btn-drive")
    const showFab = () => fab.classList.toggle("is-shown", !hasHeroButton || scrollY > innerHeight * 0.7)
    addEventListener("scroll", showFab, { passive: true })
    showFab()
    const thrEl = hud.querySelector(".hud-thr")
    const compass = hud.querySelector(".hud-compass").getContext("2d")
    const radar = hud.querySelector(".hud-radar").getContext("2d")
    const soundBtn = hud.querySelector('[data-hud="sound"]')
    const stickEl = hud.querySelector(".hud-stick")
    const stickKnob = stickEl.querySelector("i")

    hud.addEventListener("click", (e) => {
        const b = e.target.closest("[data-hud]")
        if (!b) return
        const what = b.dataset.hud
        if (what === "exit") stop()
        if (what === "time") cycleTime()
        if (what === "sound") setSound(!soundOn)
    })
    function cycleTime() {
        timeI = (timeI + 1) % TIMES.length
        state.sunElev = TIMES[timeI]
    }

    // look around: drag anywhere
    const look = hud.querySelector(".hud-look")
    let lx = 0
    let ly = 0
    look.addEventListener("pointerdown", (e) => {
        dragging = true
        lx = e.clientX
        ly = e.clientY
        look.setPointerCapture(e.pointerId)
    })
    look.addEventListener("pointermove", (e) => {
        if (!dragging) return
        camYaw -= (e.clientX - lx) * 0.006
        camPitch = clamp(camPitch + (e.clientY - ly) * 0.003, 0.08, 1.1)
        lx = e.clientX
        ly = e.clientY
        lastDrag = performance.now()
    })
    const endDrag = () => {
        dragging = false
        lastDrag = performance.now()
    }
    look.addEventListener("pointerup", endDrag)
    look.addEventListener("pointercancel", endDrag)
    look.addEventListener(
        "wheel",
        (e) => {
            camDist = clamp(camDist * Math.exp(e.deltaY * 0.001), 10, 60)
            e.preventDefault()
        },
        { passive: false }
    )

    // touch stick
    let stickId = null
    const stickCenter = new THREE.Vector2()
    stickEl.addEventListener("pointerdown", (e) => {
        stickId = e.pointerId
        stickEl.setPointerCapture(e.pointerId)
        const r = stickEl.getBoundingClientRect()
        stickCenter.set(r.left + r.width / 2, r.top + r.height / 2)
        moveStick(e)
    })
    stickEl.addEventListener("pointermove", (e) => e.pointerId === stickId && moveStick(e))
    const endStick = () => {
        stickId = null
        stick.set(0, 0)
        stickKnob.style.transform = ""
    }
    stickEl.addEventListener("pointerup", endStick)
    stickEl.addEventListener("pointercancel", endStick)
    function moveStick(e) {
        const R = 46
        stick.set(e.clientX - stickCenter.x, e.clientY - stickCenter.y)
        if (stick.length() > R) stick.setLength(R)
        stickKnob.style.transform = `translate(${stick.x}px, ${stick.y}px)`
        stick.divideScalar(R)
    }

    function onKey(e) {
        if (!state.active) return
        const k = e.key.toLowerCase()
        if (e.type === "keydown") {
            if (k === "escape") return stop()
            if (k === "t") cycleTime()
            if (k === " ") {
                ping = performance.now() / 1000
                onPing && onPing(state.pos)
            }
            if (["arrowup", "arrowdown", "arrowleft", "arrowright", " "].includes(k)) e.preventDefault()
            keys.add(k)
        } else keys.delete(k)
    }
    addEventListener("keydown", onKey)
    addEventListener("keyup", onKey)
    addEventListener("blur", () => keys.clear())

    // ---- sound: a small electric thruster hum and the water ----
    let audio = null
    let soundOn = false
    try {
        soundOn = localStorage.getItem("marinor-sound") === "on"
    } catch (e) {
        /* no storage: stays off */
    }
    function makeAudio() {
        if (audio) return audio
        const Ctx = window.AudioContext || window.webkitAudioContext
        if (!Ctx) return null
        const ctx = new Ctx()
        const master = ctx.createGain()
        master.gain.value = 0
        master.connect(ctx.destination)
        const motor = ctx.createOscillator()
        motor.type = "sawtooth"
        motor.frequency.value = 60
        const motorF = ctx.createBiquadFilter()
        motorF.type = "lowpass"
        motorF.frequency.value = 300
        const motorG = ctx.createGain()
        motorG.gain.value = 0
        motor.connect(motorF).connect(motorG).connect(master)
        motor.start()
        const len = ctx.sampleRate * 2
        const buf = ctx.createBuffer(1, len, ctx.sampleRate)
        const d = buf.getChannelData(0)
        let last = 0
        for (let i = 0; i < len; i++) {
            last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02
            d[i] = last * 3.5
        }
        const noise = ctx.createBufferSource()
        noise.buffer = buf
        noise.loop = true
        const waterF = ctx.createBiquadFilter()
        waterF.type = "bandpass"
        waterF.frequency.value = 500
        waterF.Q.value = 0.6
        const waterG = ctx.createGain()
        waterG.gain.value = 0.25
        noise.connect(waterF).connect(waterG).connect(master)
        noise.start()
        audio = { ctx, master, motor, motorF, motorG, waterF, waterG }
        return audio
    }
    function setSound(on) {
        soundOn = on
        soundBtn.setAttribute("aria-pressed", on ? "true" : "false")
        soundBtn.textContent = on ? "Sound on" : "Sound off"
        try {
            localStorage.setItem("marinor-sound", on ? "on" : "off")
        } catch (e) {
            /* fine */
        }
        const a = on ? makeAudio() : audio
        if (!a) return
        if (on && a.ctx.state === "suspended") a.ctx.resume()
        a.master.gain.setTargetAtTime(on && state.active ? 0.14 : 0, a.ctx.currentTime, 0.2)
    }
    soundBtn.textContent = soundOn ? "Sound on" : "Sound off"

    // ---- start and stop ----
    function start() {
        if (state.active) return
        const b = getBoat()
        state.pos.copy(b.pos).setY(0)
        state.heading = b.heading
        state.speed = 0
        state.sunElev = getElev()
        timeI = TIMES.reduce((best, v, i) => (Math.abs(v - state.sunElev) < Math.abs(TIMES[best] - state.sunElev) ? i : best), 0)
        camFrom.copy(camera.position)
        lookFrom.copy(b.pos)
        inBlend = 0
        camYaw = 0
        savedScroll = scrollY
        state.active = true
        state.outBlend = 0
        document.documentElement.classList.add("is-driving")
        hud.classList.add("is-on")
        hud.querySelector(".hud-exit").focus({ preventScroll: true })
        if (soundOn) setSound(true)
        dispatchEvent(new CustomEvent("drive:change", { detail: true }))
    }
    function stop() {
        if (!state.active) return
        state.active = false
        state.outBlend = 1
        keys.clear()
        document.documentElement.classList.remove("is-driving")
        hud.classList.remove("is-on")
        if (audio) audio.master.gain.setTargetAtTime(0, audio.ctx.currentTime, 0.15)
        scrollTo(0, savedScroll)
        dispatchEvent(new CustomEvent("drive:change", { detail: false }))
    }

    const fwd = new THREE.Vector3()
    const side = new THREE.Vector3()
    const want = new THREE.Vector3()
    const wantLook = new THREE.Vector3()
    let thr = 0
    let lastSpray = 0

    function update(dt, t) {
        // input
        let th = 0
        let st = 0
        if (keys.has("w") || keys.has("arrowup")) th += 1
        if (keys.has("s") || keys.has("arrowdown")) th -= 1
        if (keys.has("a") || keys.has("arrowleft")) st += 1
        if (keys.has("d") || keys.has("arrowright")) st -= 1
        th += -stick.y
        st += -stick.x
        th = clamp(th, -1, 1)
        st = clamp(st, -1, 1)
        const boost = keys.has("shift")
        thr += (th - thr) * (1 - Math.exp(-dt * 4))

        // physics: thrust against a drag that grows with speed
        const vmax = boost ? BOOST : MAX
        const acc = th > 0 ? th * vmax * 0.9 : th * vmax * 0.5
        const drag = state.speed * (0.9 / vmax) * Math.abs(state.speed) * 0.9 + state.speed * 0.25
        const prev = state.speed
        state.speed += (acc - drag) * dt
        // the four thrusters turn it even when it stands still
        const turn = st * (0.55 + Math.min(1, Math.abs(state.speed) / MAX) * 0.6) * (state.speed < -0.5 ? -1 : 1)
        state.yawRate += (turn - state.yawRate) * (1 - Math.exp(-dt * 3.5))
        state.heading += state.yawRate * dt
        fwd.set(Math.cos(state.heading), 0, -Math.sin(state.heading))
        state.pos.addScaledVector(fwd, state.speed * dt)

        // the shore, islands and moored things stop the boat
        const bow = state.pos.clone().addScaledVector(fwd, 3.4 * Math.sign(state.speed || 1))
        let hitSomething = false
        if (landHeight && landHeight(bow.x, bow.z) > -1.2) hitSomething = true
        for (const o of obstacles()) {
            const dx = state.pos.x - o.x
            const dz = state.pos.z - o.z
            const d = Math.hypot(dx, dz)
            if (d < o.r + 3.5) {
                state.pos.x = o.x + (dx / d) * (o.r + 3.5)
                state.pos.z = o.z + (dz / d) * (o.r + 3.5)
                hitSomething = hitSomething || Math.abs(state.speed) > 1
                state.speed *= 0.5
            }
        }
        if (hitSomething) {
            state.pos.addScaledVector(fwd, -state.speed * dt * 2)
            if (Math.abs(state.speed) > 3 && spray) spray.splash(bow.x, bow.z, 0.8)
            state.speed *= -0.25
        }
        // keep to the harbour
        const r = Math.hypot(state.pos.x, state.pos.z)
        if (r > 2400) state.pos.multiplyScalar(2400 / r)

        // how the boat sits: bows up when speeding up, lean into turns
        const accel = (state.speed - prev) / Math.max(dt, 1e-3)
        const pitchWant = clamp(state.speed / BOOST, -0.3, 1) * 0.07 + clamp(accel * 0.006, -0.03, 0.05)
        const rollWant = clamp(-state.yawRate * state.speed * 0.012, -0.14, 0.14)
        state.pitch += (pitchWant - state.pitch) * (1 - Math.exp(-dt * 3))
        state.roll += (rollWant - state.roll) * (1 - Math.exp(-dt * 3))

        // spray from the bows at speed
        if (spray && !reduced && Math.abs(state.speed) > 6 && t - lastSpray > 0.03) {
            lastSpray = t
            side.set(Math.sin(state.heading), 0, Math.cos(state.heading))
            const k = (Math.abs(state.speed) - 6) / 10
            for (const s of [-1, 1]) {
                const bx = state.pos.x + fwd.x * 3 + side.x * 1.85 * s
                const bz = state.pos.z + fwd.z * 3 + side.z * 1.85 * s
                spray.emit(bx, 0.2, bz, side.x * s * 2.4 + fwd.x * state.speed * 0.5, 3.2 + k * 3, side.z * s * 2.4 + fwd.z * state.speed * 0.5, Math.ceil(2 + k * 5), 1.2, 0.1)
            }
        }

        // chase camera, a little behind the turn, and you can look around
        if (!dragging && performance.now() - lastDrag > 2200) camYaw *= Math.exp(-dt * 1.2)
        const a = state.heading + Math.PI + camYaw - state.yawRate * 0.25
        const flat = Math.cos(camPitch) * camDist
        want.set(state.pos.x + Math.cos(a) * flat, 1.2 + Math.sin(camPitch) * camDist, state.pos.z - Math.sin(a) * flat)
        wantLook.copy(state.pos).addScaledVector(fwd, 5).setY(1.6)
        inBlend = Math.min(1, inBlend + dt * 0.8)
        const k = inBlend * inBlend * (3 - 2 * inBlend)
        if (inBlend < 1) {
            state.camPos.lerpVectors(camFrom, want, k)
            state.camLook.lerpVectors(lookFrom, wantLook, k)
        } else {
            state.camPos.lerp(want, 1 - Math.exp(-dt * 6))
            state.camLook.lerp(wantLook, 1 - Math.exp(-dt * 8))
        }

        // sound
        if (audio && soundOn) {
            const v = Math.abs(state.speed) / BOOST
            audio.motor.frequency.setTargetAtTime(50 + Math.abs(thr) * 70 + v * 60, audio.ctx.currentTime, 0.1)
            audio.motorF.frequency.setTargetAtTime(260 + Math.abs(thr) * 900, audio.ctx.currentTime, 0.1)
            audio.motorG.gain.setTargetAtTime(0.05 + Math.abs(thr) * 0.22, audio.ctx.currentTime, 0.1)
            audio.waterF.frequency.setTargetAtTime(380 + v * 900, audio.ctx.currentTime, 0.2)
            audio.waterG.gain.setTargetAtTime(0.15 + v * 0.7, audio.ctx.currentTime, 0.2)
        }

        drawHud(t)
    }

    function drawHud(t) {
        thrEl.style.transform = `scaleX(${Math.abs(thr).toFixed(3)})`
        thrEl.classList.toggle("is-back", thr < 0)
        // compass tape: bearing from north (+z), clockwise
        const bearing = ((Math.atan2(Math.cos(state.heading), -Math.sin(state.heading)) * 180) / Math.PI + 360) % 360
        const c = compass
        const W = c.canvas.width
        const H = c.canvas.height
        c.clearRect(0, 0, W, H)
        c.font = "600 18px 'JetBrains Mono', monospace"
        c.textAlign = "center"
        for (let d = -60; d <= 60; d += 5) {
            const b = Math.round(bearing / 5) * 5 + d
            const x = W / 2 + (b - bearing) * 3.4
            const bb = ((b % 360) + 360) % 360
            const major = bb % 45 === 0
            c.fillStyle = "rgba(232,238,248,0.55)"
            c.fillRect(x - 1, 0, 2, major ? 16 : 8)
            if (major) {
                const name = { 0: "N", 45: "NE", 90: "E", 135: "SE", 180: "S", 225: "SW", 270: "W", 315: "NW" }[bb]
                c.fillStyle = "rgba(232,238,248,0.9)"
                c.fillText(name, x, 40)
            }
        }
        c.fillStyle = "#f2c230"
        c.fillRect(W / 2 - 1.5, 0, 3, 24)
        c.fillStyle = "rgba(232,238,248,0.95)"
        c.fillText(String(Math.round(bearing) % 360).padStart(3, "0") + "°", W / 2, 58)

        // radar: what the LiDAR sees, the bow up
        const g = radar
        const S = g.canvas.width
        const R = S / 2 - 6
        g.clearRect(0, 0, S, S)
        g.save()
        g.translate(S / 2, S / 2)
        g.fillStyle = "rgba(6,10,16,0.55)"
        g.beginPath()
        g.arc(0, 0, R, 0, Math.PI * 2)
        g.fill()
        g.strokeStyle = "rgba(200,212,232,0.18)"
        g.lineWidth = 1.5
        for (const k of [0.33, 0.66, 1]) {
            g.beginPath()
            g.arc(0, 0, R * k, 0, Math.PI * 2)
            g.stroke()
        }
        // the sweep
        const sw = t * 2.4
        const grd = g.createConicGradient ? g.createConicGradient(sw, 0, 0) : null
        if (grd) {
            grd.addColorStop(0, "rgba(159,212,255,0.35)")
            grd.addColorStop(0.12, "rgba(159,212,255,0)")
            grd.addColorStop(1, "rgba(159,212,255,0)")
            g.fillStyle = grd
            g.beginPath()
            g.arc(0, 0, R, 0, Math.PI * 2)
            g.fill()
        }
        // a ping: a ring going out
        const pa = performance.now() / 1000 - ping
        if (pa < 1.6) {
            g.strokeStyle = `rgba(159,212,255,${1 - pa / 1.6})`
            g.lineWidth = 3
            g.beginPath()
            g.arc(0, 0, R * (pa / 1.6), 0, Math.PI * 2)
            g.stroke()
        }
        const toRadar = (x, z) => {
            const dx = x - state.pos.x
            const dz = z - state.pos.z
            // rotate so the bow points up
            const ch = Math.cos(state.heading)
            const sh = Math.sin(state.heading)
            const fx = dx * ch - dz * sh // along the bow
            const sx = dx * sh + dz * ch // to starboard
            return [(sx / RADAR_RANGE) * R, (-fx / RADAR_RANGE) * R]
        }
        const dot = (x, z, col, r) => {
            const [px, py] = toRadar(x, z)
            if (px * px + py * py > R * R) return
            g.fillStyle = col
            g.beginPath()
            g.arc(px, py, r, 0, Math.PI * 2)
            g.fill()
        }
        for (const o of obstacles()) dot(o.x, o.z, "rgba(232,238,248,0.7)", Math.max(4, (o.r / RADAR_RANGE) * R))
        for (const b of buoys()) dot(b.x, b.z, b.kind === "port" ? "#ff5a4a" : b.kind === "stbd" ? "#45d07f" : "#f2c230", 5)
        // Argus
        g.fillStyle = "#e8eef8"
        g.beginPath()
        g.moveTo(0, -9)
        g.lineTo(6, 7)
        g.lineTo(-6, 7)
        g.closePath()
        g.fill()
        g.restore()
    }

    // buoys get pushed by the hulls
    function collide(list) {
        for (const b of list) {
            const dx = b.x - state.pos.x
            const dz = b.z - state.pos.z
            const d = Math.hypot(dx, dz)
            const min = b.r + 3.2
            if (d < min && d > 0.001) {
                const push = (min - d) * 6
                b.vx += (dx / d) * push + Math.cos(state.heading) * state.speed * 0.3
                b.vz += (dz / d) * push - Math.sin(state.heading) * state.speed * 0.3
                if (Math.abs(state.speed) > 2.5 && spray) spray.splash(b.x, b.z, 0.5)
                state.speed *= 0.92
            }
        }
    }

    return {
        get active() {
            return state.active
        },
        state,
        get pos() {
            return state.pos
        },
        get heading() {
            return state.heading
        },
        get speed() {
            return state.speed
        },
        get pitch() {
            return state.pitch
        },
        get roll() {
            return state.roll
        },
        get camPos() {
            return state.camPos
        },
        get camLook() {
            return state.camLook
        },
        get sunElev() {
            return state.sunElev
        },
        get outBlend() {
            return state.outBlend
        },
        fade(dt) {
            state.outBlend = Math.max(0, state.outBlend - dt * 0.9)
        },
        start,
        stop,
        update,
        collide,
    }
}
