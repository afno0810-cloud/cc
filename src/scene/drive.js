import * as THREE from "three"

/* ================================================================
   Drive mode: take the helm of Argus in the harbour.

   W A S D or the arrow keys (or the stick on a touch screen) to drive,
   Q and E to turn the boat on the spot while it keeps its course (the
   four thrusters can do that), Shift for more power, Space for a LiDAR
   ping, drag to look around, T or the button for the time of day, Esc to
   go back to the page.

   The boat has a little physics: thrust and water drag, it turns faster
   with speed, lifts its bows when it speeds up and leans into turns.
   It moves along its course (A/D steer it), and the hull can point
   another way (Q/E). The whole hull is solid: the shore, quays, wharves,
   boats and the pontoon stop it and it slides along them. Buoys can be
   pushed away. A radar shows what the LiDAR sees around the boat.
   ================================================================ */

const clamp = (v, a, b) => Math.min(b, Math.max(a, v))
const MAX = 13 // units/s (1 unit = 0.3 m)
const BOOST = 21
const RADAR_RANGE = 170

// Argus in scene units: half length and half width of the outline of the two hulls
const HALF_L = 3.1
const HALF_W = 2.7

// shown in a frame on another page (the game on the Framer site)
const EMBEDDED = (() => {
    try {
        return window.self !== window.top
    } catch (e) {
        return true
    }
})()
if (EMBEDDED) document.documentElement.classList.add("is-embedded")
// in a frame that fills the screen (the site opens the game in full screen: ?full=1, or tells the frame later),
// nothing round it to scroll: the wheel and a drag steer the camera, as on the game's own page
let hostFull = /[?&]full=1\b/.test(location.search)
addEventListener("message", (e) => {
    if (EMBEDDED && e.source === window.parent && e.data && e.data.marinor === "full") hostFull = !!e.data.on
})
const scrollsHost = () => EMBEDDED && !hostFull
// the page round the frame scrolls when asked (the Framer component listens for this)
const scrollHost = (dy) => {
    try {
        window.parent.postMessage({ marinor: "scroll", dy }, "*")
    } catch (e) {
        /* nothing to scroll */
    }
}

export function createDrive({ camera, getBoat, getElev, landHeight, groundHeight = landHeight, obstacles, colliders, buoys, spray, onPing, reduced }) {
    const state = {
        active: false,
        pos: new THREE.Vector3(),
        heading: 0, // rotation about y; the bow points along (cos h, 0, -sin h)
        course: 0, // the way the boat travels; A/D turn it, Q/E only turn the hull
        vel: new THREE.Vector3(),
        speed: 0, // along the course
        yawRate: 0,
        spinRate: 0,
        pitch: 0,
        roll: 0,
        camPos: new THREE.Vector3(),
        camLook: new THREE.Vector3(),
        sunElev: 12,
        locked: false, // no throttle or steering (a countdown)
        lidOpen: false, // the case lid is open: the camera comes close and the boat waits
        inspect: 0, // 0 … 1, eased: how far the camera has gone to the open case
        target: null, // { x, z }: where the mission wants you next (compass and radar)
        pois: null, // places to visit: [{ item: { x, z }, done }]
        shake: 0, // camera shake after a hard bump, 0..1
        auto: null, // the autopilot's inputs { th, st, spin, boost } while it has the helm
        orbit: false, // the camera swings round slowly (autopilot)
        menu: false, // the game menu is open: the camera stands back and keeps the boat to the right
        menuK: 0, // 0 … 1, eased
        others: null, // the other players' boats online: [{ x, z, color }] (radar)
        outBlend: 0, // 1 → 0 after leaving, so the page camera takes over smoothly
    }
    const keys = new Set()
    const stick = new THREE.Vector2()
    let camYaw = 0
    let camPitch = 0.21 // low enough to see the shore and the town over the water
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
    // the weather: how grey the sky is, how thick the fog, how hard it rains
    const WEATHERS = [
        { name: "Clear", over: 0, fog: 0, rain: 0 },
        { name: "Cloudy", over: 0.75, fog: 0.15, rain: 0 },
        { name: "Fog", over: 0.9, fog: 1, rain: 0 },
        { name: "Rain", over: 1, fog: 0.45, rain: 1 },
    ]
    let weatherI = 0

    // ---- the HUD ----
    const hud = document.createElement("div")
    hud.className = "drive-hud"
    hud.setAttribute("role", "dialog")
    hud.setAttribute("aria-label", "Drive Argus")
    // the smooth scroll of the page leaves the wheel alone here, so the posts and menus scroll with a mouse or trackpad
    hud.setAttribute("data-lenis-prevent", "")
    hud.innerHTML = `
        <div class="hud-look" aria-hidden="true"></div>
        <div class="hud-top">
            <span class="hud-tag"><i></i>Drive Argus</span>
            <div class="hud-actions">
                <button type="button" class="hud-btn" data-hud="time"><span class="hb-long">Time of day</span><span class="hb-short">Time</span></button>
                <button type="button" class="hud-btn" data-hud="weather"><span class="hb-long">Weather: </span><span class="hud-weather">Clear</span></button>
                <button type="button" class="hud-btn" data-hud="sound" aria-pressed="false">Sound</button>
                <button type="button" class="hud-btn" data-hud="keys" aria-expanded="false">Controls <kbd>H</kbd></button>
                <button type="button" class="hud-btn hud-exit" data-hud="exit">Exit <kbd>Esc</kbd></button>
            </div>
        </div>
        <p class="hud-help"><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> or arrows to drive · <kbd>H</kbd> all the controls</p>
        <div class="hud-bottom">
            <div class="hud-left">
            <button type="button" class="hud-btn hud-lid" data-hud="lid" aria-pressed="false" aria-label="Open lid"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 11h16v8H4z"/><path d="M4 11 7 4h13l-3 7"/></svg><span>Open lid</span> <kbd>L</kbd></button>
            <div class="hud-gauges">
                <div class="hud-gauge"><span>Throttle</span><i><b class="hud-thr"></b></i></div>
                <canvas class="hud-compass" width="440" height="60" aria-hidden="true"></canvas>
            </div>
            </div>
            <div class="hud-radar-wrap"><canvas class="hud-radar" width="360" height="360" aria-hidden="true"></canvas><span>LiDAR</span></div>
        </div>
        <div class="hud-stick" aria-hidden="true"><i></i></div>
        <div class="hud-keys" role="dialog" aria-label="Controls">
            <div class="hk-head"><div><span class="hk-kicker">How to play</span><h2>Controls</h2></div><button type="button" class="hud-btn" data-hud="keys-close">Close <kbd>H</kbd></button></div>
            <div class="hk-body">
                <div class="hk-pad" aria-hidden="true">
                    <div class="hk-pad-row"><kbd>Q</kbd><kbd class="is-main">W</kbd><kbd>E</kbd></div>
                    <div class="hk-pad-row"><kbd class="is-main">A</kbd><kbd class="is-main">S</kbd><kbd class="is-main">D</kbd></div>
                    <div class="hk-pad-row"><kbd class="is-wide">Shift</kbd><kbd class="is-space">Space</kbd></div>
                    <span class="hk-pad-or">or</span>
                    <div class="hk-pad-row"><kbd class="is-main">↑</kbd></div>
                    <div class="hk-pad-row"><kbd class="is-main">←</kbd><kbd class="is-main">↓</kbd><kbd class="is-main">→</kbd></div>
                </div>
                <div class="hk-groups">
                    <section class="hk-group">
                        <h3>Drive</h3>
                        <dl class="hk-list">
                            <div><dt><kbd>W</kbd><kbd>↑</kbd></dt><dd>Forward</dd></div>
                            <div><dt><kbd>S</kbd><kbd>↓</kbd></dt><dd>Slow down, then back</dd></div>
                            <div><dt><kbd>A</kbd><kbd>D</kbd></dt><dd>Steer (or <kbd>←</kbd> <kbd>→</kbd>)</dd></div>
                            <div><dt><kbd>Q</kbd><kbd>E</kbd></dt><dd>Turn the boat while it keeps going straight</dd></div>
                            <div><dt><kbd>Shift</kbd></dt><dd>More power</dd></div>
                        </dl>
                    </section>
                    <section class="hk-group">
                        <h3>Argus</h3>
                        <dl class="hk-list">
                            <div><dt><kbd>Space</kbd></dt><dd>LiDAR ping</dd></div>
                            <div><dt><kbd>L</kbd></dt><dd>Open the lid and look inside</dd></div>
                            <div><dt>Drag</dt><dd>Look around</dd></div>
                            <div><dt>${scrollsHost() ? "Ctrl + scroll" : "Scroll"}</dt><dd>Camera closer or further away</dd></div>
                        </dl>
                    </section>
                    <section class="hk-group">
                        <h3>Game</h3>
                        <dl class="hk-list">
                            <div><dt><kbd>M</kbd></dt><dd>Njord tasks</dd></div>
                            <div><dt><kbd>P</kbd></dt><dd>Places to visit</dd></div>
                            <div><dt><kbd>T</kbd></dt><dd>Time of day</dd></div>
                            <div><dt><kbd>V</kbd></dt><dd>Weather</dd></div>
                            <div><dt><kbd>H</kbd></dt><dd>This list</dd></div>
                            <div><dt><kbd>C</kbd></dt><dd>Your microphone on or off (online)</dd></div>
                            <div class="hk-esc"><dt><kbd>Esc</kbd></dt><dd>Leave the helm</dd></div>
                        </dl>
                    </section>
                    <section class="hk-group">
                        <h3>Menus</h3>
                        <dl class="hk-list">
                            <div><dt><kbd>↑</kbd><kbd>↓</kbd></dt><dd>Choose, or scroll</dd></div>
                            <div><dt><kbd>Enter</kbd></dt><dd>Open what you chose</dd></div>
                            <div><dt><kbd>Esc</kbd></dt><dd>Close the menu</dd></div>
                        </dl>
                    </section>
                </div>
            </div>
            <p class="hk-touch">On a phone or tablet: the round stick drives, drag anywhere else to look around.</p>
        </div>
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
    const weatherEl = hud.querySelector(".hud-weather")
    const lidBtn = hud.querySelector(".hud-lid")
    const keysEl = hud.querySelector(".hud-keys")
    const keysBtn = hud.querySelector('[data-hud="keys"]')
    // the panels sit under the buttons, however many rows they take
    const topEl = hud.querySelector(".hud-top")
    const measureTop = () => hud.style.setProperty("--hud-top", Math.round(topEl.getBoundingClientRect().bottom - hud.getBoundingClientRect().top) + "px")
    if (window.ResizeObserver) new ResizeObserver(measureTop).observe(topEl)
    addEventListener("resize", measureTop)
    const stickEl = hud.querySelector(".hud-stick")
    const stickKnob = stickEl.querySelector("i")

    hud.addEventListener("click", (e) => {
        const b = e.target.closest("[data-hud]")
        if (!b) return
        const what = b.dataset.hud
        if (what === "exit") stop()
        if (what === "time") cycleTime()
        if (what === "weather") cycleWeather()
        if (what === "lid") setLid(!state.lidOpen)
        if (what === "keys" || what === "keys-close") showKeys(!keysEl.classList.contains("is-on"))
        if (what === "sound") setSound(!soundOn)
    })
    function cycleTime() {
        setTime(timeI + 1)
    }
    function setTime(i) {
        timeI = (i + TIMES.length) % TIMES.length
        state.sunElev = TIMES[timeI]
    }
    function setLid(on) {
        state.lidOpen = on
        lidBtn.setAttribute("aria-pressed", on ? "true" : "false")
        lidBtn.querySelector("span").textContent = on ? "Close lid" : "Open lid"
        lidBtn.setAttribute("aria-label", on ? "Close lid" : "Open lid")
        hud.classList.toggle("is-inspecting", on)
    }
    // one menu at a time: opening one closes the other lists (not a task's briefing or result)
    function closeOthers(el) {
        for (const m of menus) if (m.modal && m.el !== el && !m.el.classList.contains("hud-result")) m.el.classList.remove("is-on")
    }
    function showKeys(on) {
        if (on) closeOthers(keysEl)
        keysEl.classList.toggle("is-on", on)
        keysBtn.setAttribute("aria-expanded", on ? "true" : "false")
    }
    function cycleWeather() {
        setWeather(weatherI + 1)
    }
    function setWeather(i) {
        weatherI = (i + WEATHERS.length) % WEATHERS.length
        weatherEl.textContent = WEATHERS[weatherI].name
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
        // in a frame, a finger moving up or down scrolls the page round it; sideways it still looks round
        if (scrollsHost() && e.pointerType === "touch" && Math.abs(e.clientY - ly) > Math.abs(e.clientX - lx)) {
            scrollHost(-(e.clientY - ly))
            lx = e.clientX
            ly = e.clientY
            return
        }
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
    // in a frame on another page (the game on the Framer site), the wheel scrolls that page:
    // the camera only zooms with Ctrl held (a pinch on a trackpad comes as that too)
    look.addEventListener(
        "wheel",
        (e) => {
            if (scrollsHost() && !e.ctrlKey && !e.metaKey) {
                e.preventDefault()
                scrollHost(e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? innerHeight : 1))
                return
            }
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
        if (state.auto) for (const f of manual) f()
        const R = 46
        stick.set(e.clientX - stickCenter.x, e.clientY - stickCenter.y)
        if (stick.length() > R) stick.setLength(R)
        stickKnob.style.transform = `translate(${stick.x}px, ${stick.y}px)`
        stick.divideScalar(R)
    }

    const escapers = []
    const pausers = [] // the game page: Esc with nothing else open opens the game menu
    const manual = [] // called when someone takes the helm from the autopilot
    // ---- menus: the arrow keys move between the choices (and scroll the long ones), Enter picks ----
    const menus = [{ el: keysEl, modal: true }]
    function activeMenu() {
        for (let i = menus.length - 1; i >= 0; i--) {
            const m = menus[i]
            if (!m.el.classList.contains("is-on")) continue
            // a card that just pops up while you drive only takes the arrows once you are in it
            if (m.modal || m.el.contains(document.activeElement)) return m.el
        }
        return null
    }
    function navigate(el, k) {
        const items = [...el.querySelectorAll("button:not([disabled]), a[href]")].filter((b) => b.getClientRects().length)
        const cur = items.includes(document.activeElement) ? document.activeElement : null
        const go = (b) => {
            b.focus({ preventScroll: true })
            b.scrollIntoView({ block: "nearest", behavior: reduced ? "auto" : "smooth" })
            sfx("click")
        }
        if (!cur) {
            if (items.length) go(k === "arrowup" || k === "arrowleft" ? items[items.length - 1] : items[0])
            return
        }
        const r = cur.getBoundingClientRect()
        const cx = r.left + r.width / 2
        const cy = r.top + r.height / 2
        let best = null
        let bestScore = Infinity
        for (const b of items) {
            if (b === cur) continue
            const q = b.getBoundingClientRect()
            const dx = q.left + q.width / 2 - cx
            const dy = q.top + q.height / 2 - cy
            const along = k === "arrowdown" ? dy : k === "arrowup" ? -dy : k === "arrowright" ? dx : -dx
            const across = k === "arrowdown" || k === "arrowup" ? dx : dy
            if (along <= 6) continue
            const score = along + Math.abs(across) * 2
            if (score < bestScore) {
                bestScore = score
                best = b
            }
        }
        if (best) go(best)
        // nothing further that way: read on (or back) in a long menu
        else if (k === "arrowdown" || k === "arrowup") el.scrollBy({ top: k === "arrowdown" ? 90 : -90, behavior: reduced ? "auto" : "smooth" })
    }
    function onKey(e) {
        if (!state.active) return
        const k = (e.key || "").toLowerCase()
        // a shortcut of the browser or the system (Ctrl/Cmd/Alt + a key) is not for the boat; and on a Mac
        // the letters held with Cmd never send their keyup, so letting go of Cmd/Ctrl lets go of everything
        if (e.type === "keyup" && (k === "meta" || k === "control" || k === "os")) {
            keys.clear()
            return
        }
        if (e.type === "keydown" && (e.ctrlKey || e.metaKey || e.altKey)) return
        const tg = e.target
        if (tg && (tg.tagName === "INPUT" || tg.tagName === "TEXTAREA" || tg.tagName === "SELECT" || tg.isContentEditable)) return
        if (e.type === "keydown") {
            if (k === "escape") {
                if (keysEl.classList.contains("is-on")) return showKeys(false)
                // open panels (the tasks, the places) close first
                for (const f of escapers) if (f()) return
                if (state.lidOpen) return setLid(false)
                if (document.body.hasAttribute("data-game")) {
                    for (const f of pausers) f()
                    return
                }
                return stop()
            }
            if (k.startsWith("arrow")) {
                const m = activeMenu()
                if (m) {
                    e.preventDefault()
                    navigate(m, k)
                    return
                }
            }
            if (state.auto && ["w", "a", "s", "d", "q", "e", "arrowup", "arrowdown", "arrowleft", "arrowright"].includes(k)) for (const f of manual) f()
            if (k === "t") cycleTime()
            if (k === "v") cycleWeather()
            if (k === "l") setLid(!state.lidOpen)
            if (k === "h" || k === "?") showKeys(!keysEl.classList.contains("is-on"))
            if (k === " ") {
                // Space on a button in an open menu presses the button (no ping)
                const m = activeMenu()
                const f = document.activeElement
                if (m && f && m.contains(f) && (f.tagName === "BUTTON" || f.tagName === "A")) return
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
    // short sounds for the game: the countdown, a gate, a penalty, a medal, a new place, a horn
    function sfx(name) {
        if (!soundOn || !state.active) return
        const a = makeAudio()
        if (!a) return
        const ctx = a.ctx
        if (ctx.state === "suspended") ctx.resume()
        if (!a.sfx) {
            a.sfx = ctx.createGain()
            a.sfx.gain.value = 0.2
            a.sfxF = ctx.createBiquadFilter()
            a.sfxF.type = "lowpass"
            a.sfxF.frequency.value = 5200
            a.sfx.connect(a.sfxF).connect(ctx.destination)
        }
        const now = ctx.currentTime
        const tone = (f, t0, dur, { type = "sine", vol = 0.6, slide = 0 } = {}) => {
            const o = ctx.createOscillator()
            const g = ctx.createGain()
            o.type = type
            o.frequency.setValueAtTime(f, now + t0)
            if (slide) o.frequency.exponentialRampToValueAtTime(f * slide, now + t0 + dur)
            g.gain.setValueAtTime(0.0001, now + t0)
            g.gain.exponentialRampToValueAtTime(vol, now + t0 + 0.012)
            g.gain.exponentialRampToValueAtTime(0.0001, now + t0 + dur)
            o.connect(g).connect(a.sfx)
            o.start(now + t0)
            o.stop(now + t0 + dur + 0.05)
        }
        if (name === "count") tone(660, 0, 0.16, { type: "triangle", vol: 0.7 })
        else if (name === "go") {
            tone(990, 0, 0.55, { type: "triangle", vol: 0.8 })
            tone(1485, 0, 0.45, { vol: 0.25 })
        } else if (name === "gate") {
            tone(880, 0, 0.16, { vol: 0.55 })
            tone(1320, 0.07, 0.3, { vol: 0.45 })
        } else if (name === "bad") tone(170, 0, 0.38, { type: "sawtooth", vol: 0.32, slide: 0.65 })
        else if (name === "medal") [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.11, i === 3 ? 0.9 : 0.4, { type: "triangle", vol: 0.5 }))
        else if (name === "discover") {
            tone(1175, 0, 0.55, { vol: 0.35 })
            tone(1568, 0.1, 0.7, { vol: 0.3 })
        } else if (name === "horn") {
            tone(98, 0, 1.2, { type: "sawtooth", vol: 0.22 })
            tone(123.5, 0, 1.2, { type: "sawtooth", vol: 0.18 })
        } else if (name === "click") tone(1500, 0, 0.04, { type: "square", vol: 0.08 })
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
        state.course = b.heading
        state.vel.set(0, 0, 0)
        state.speed = 0
        state.spinRate = 0
        state.sunElev = getElev()
        timeI = TIMES.reduce((best, v, i) => (Math.abs(v - state.sunElev) < Math.abs(TIMES[best] - state.sunElev) ? i : best), 0)
        camFrom.copy(camera.position)
        lookFrom.copy(b.pos)
        // the game page opens on a wide view from high up behind the boat, and comes down to the helm
        // (the page's own camera is right by the hull, and would swing through it)
        if (document.body.hasAttribute("data-game")) camFrom.set(b.pos.x - Math.cos(b.heading) * 90, 46, b.pos.z + Math.sin(b.heading) * 90)
        inBlend = 0
        camYaw = 0
        savedScroll = scrollY
        state.active = true
        state.outBlend = 0
        requestAnimationFrame(measureTop)
        setTimeout(measureTop, 900) // after the HUD has slid in
        document.documentElement.classList.add("is-driving")
        hud.classList.add("is-on")
        hud.querySelector(".hud-exit").focus({ preventScroll: true })
        if (soundOn) setSound(true)
        dispatchEvent(new CustomEvent("drive:change", { detail: true }))
    }
    function stop() {
        if (!state.active) return
        // the game page is only the harbour: leaving the helm would leave an empty (black) screen,
        // so it opens the game menu there instead
        if (document.body.hasAttribute("data-game") && pausers.length) {
            for (const f of pausers) f()
            return
        }
        state.active = false
        state.outBlend = 1
        keys.clear()
        setLid(false)
        showKeys(false)
        document.documentElement.classList.remove("is-driving")
        hud.classList.remove("is-on")
        if (audio) audio.master.gain.setTargetAtTime(0, audio.ctx.currentTime, 0.15)
        scrollTo(0, savedScroll)
        dispatchEvent(new CustomEvent("drive:change", { detail: false }))
    }

    // ---- collisions: Argus is a rectangle (the outline of the two hulls) ----
    const bow = new THREE.Vector3()
    const stb = new THREE.Vector3()
    const push = new THREE.Vector3()
    const nrm = new THREE.Vector3()
    // probe points round the hulls for the shore (body frame: along the bow, to starboard)
    const PROBES = [
        [HALF_L, HALF_W - 0.2],
        [HALF_L, -HALF_W + 0.2],
        [-HALF_L, HALF_W - 0.2],
        [-HALF_L, -HALF_W + 0.2],
        [0, HALF_W],
        [0, -HALF_W],
        [HALF_L + 0.1, 1.8],
        [HALF_L + 0.1, -1.8],
        [-HALF_L - 0.1, 1.8],
        [-HALF_L - 0.1, -1.8],
        [HALF_L * 0.5, HALF_W],
        [HALF_L * 0.5, -HALF_W],
        [-HALF_L * 0.5, HALF_W],
        [-HALF_L * 0.5, -HALF_W],
    ]
    const LAND = -1 // anything higher than this is shore
    let lastHit = 0

    // the boat rectangle against an oriented box: the shortest way out (2D separating axes)
    function boxPush(b, out) {
        const cr = Math.cos(b.rot)
        const sr = Math.sin(b.rot)
        const axes = [
            [bow.x, bow.z],
            [stb.x, stb.z],
            [cr, -sr],
            [sr, cr],
        ]
        const dx = state.pos.x - b.x
        const dz = state.pos.z - b.z
        let best = Infinity
        let bx = 0
        let bz = 0
        for (const [ax, az] of axes) {
            const rBoat = HALF_L * Math.abs(bow.x * ax + bow.z * az) + HALF_W * Math.abs(stb.x * ax + stb.z * az)
            const rBox = b.hx * Math.abs(cr * ax - sr * az) + b.hz * Math.abs(sr * ax + cr * az)
            const d = dx * ax + dz * az
            const overlap = rBoat + rBox - Math.abs(d)
            if (overlap <= 0) return false
            if (overlap < best) {
                best = overlap
                const sgn = d < 0 ? -1 : 1
                bx = ax * sgn
                bz = az * sgn
            }
        }
        out.set(bx * best, 0, bz * best)
        return true
    }
    // against a circle: from the closest point of the rectangle
    function circlePush(c, out) {
        const dx = c.x - state.pos.x
        const dz = c.z - state.pos.z
        const lx = dx * bow.x + dz * bow.z
        const lz = dx * stb.x + dz * stb.z
        const qx = clamp(lx, -HALF_L, HALF_L)
        const qz = clamp(lz, -HALF_W, HALF_W)
        const ex = lx - qx
        const ez = lz - qz
        const d = Math.hypot(ex, ez)
        if (d >= c.r) return false
        if (d > 1e-4) {
            // the centre is outside the boat: push away from it
            const k = (c.r - d) / d
            out.set(-(bow.x * ex + stb.x * ez) * k, 0, -(bow.z * ex + stb.z * ez) * k)
        } else {
            // the centre is inside the outline: out the shortest side
            const px = HALF_L - Math.abs(lx) + c.r
            const pz = HALF_W - Math.abs(lz) + c.r
            if (px < pz) out.copy(bow).multiplyScalar(-Math.sign(lx || 1) * px)
            else out.copy(stb).multiplyScalar(-Math.sign(lz || 1) * pz)
        }
        return true
    }
    // take the part of the velocity that goes into the thing away, keep the sliding part
    // (a thing that moves, another player's boat, counts with its own speed: it can bump you too)
    function bounce(n, t, o) {
        const into = o && o.vx != null ? (state.vel.x - o.vx) * n.x + (state.vel.z - o.vz) * n.z : state.vel.dot(n)
        if (into < 0) {
            // each player's game moves its own boat, so a boat on boat bump shares it out (about half each)
            state.vel.addScaledVector(n, -into * (o && o.peer ? 0.85 : 1.15))
            if (-into > 2.5) state.shake = Math.min(1, state.shake + -into / 14)
            if (-into > 3 && spray && t - lastHit > 0.25) {
                lastHit = t
                spray.splash(state.pos.x - n.x * HALF_L, state.pos.z - n.z * HALF_L, Math.min(1.2, -into / 10))
            }
        }
    }
    function solve(t) {
        for (let pass = 0; pass < 3; pass++) {
            let moved = false
            bow.set(Math.cos(state.heading), 0, -Math.sin(state.heading))
            stb.set(Math.sin(state.heading), 0, Math.cos(state.heading))
            // the shore: push each probe that is on land back towards the water
            if (landHeight) {
                for (const [fx, sz] of PROBES) {
                    const px = state.pos.x + bow.x * fx + stb.x * sz
                    const pz = state.pos.z + bow.z * fx + stb.z * sz
                    if (landHeight(px, pz) <= LAND) continue
                    // downhill is towards the water
                    const e = 2.5
                    nrm.set(landHeight(px - e, pz) - landHeight(px + e, pz), 0, landHeight(px, pz - e) - landHeight(px, pz + e))
                    if (nrm.lengthSq() < 1e-6) nrm.set(-state.pos.x, 0, -state.pos.z)
                    nrm.normalize()
                    // step out until the probe is in the water again
                    let k = 0
                    while (k < 12 && landHeight(px + nrm.x * k * 0.4, pz + nrm.z * k * 0.4) > LAND) k++
                    state.pos.addScaledVector(nrm, k * 0.4 + 0.05)
                    bounce(nrm, t)
                    moved = true
                }
            }
            // quays, wharves, boats, the pontoon
            const lists = colliders ? colliders() : []
            for (const list of lists) {
                for (const b of list) {
                    if (Math.abs(b.x - state.pos.x) > b.hx + b.hz + 8 || Math.abs(b.z - state.pos.z) > b.hx + b.hz + 8) continue
                    if (!boxPush(b, push)) continue
                    state.pos.add(push)
                    bounce(nrm.copy(push).normalize(), t, b)
                    moved = true
                }
            }
            for (const o of obstacles()) {
                if (Math.abs(o.x - state.pos.x) > o.r + 6 || Math.abs(o.z - state.pos.z) > o.r + 6) continue
                if (!circlePush(o, push)) continue
                state.pos.add(push)
                bounce(nrm.copy(push).normalize(), t)
                moved = true
            }
            if (!moved) break
        }
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
        let spin = 0
        const arrows = !activeMenu()
        if (keys.has("w") || (arrows && keys.has("arrowup"))) th += 1
        if (keys.has("s") || (arrows && keys.has("arrowdown"))) th -= 1
        if (keys.has("a") || (arrows && keys.has("arrowleft"))) st += 1
        if (keys.has("d") || (arrows && keys.has("arrowright"))) st -= 1
        if (keys.has("q")) spin += 1
        if (keys.has("e")) spin -= 1
        th += -stick.y
        st += -stick.x
        // the autopilot steers when no one else does
        if (state.auto) {
            th = state.auto.th
            st = state.auto.st
            spin = state.auto.spin || 0
        }
        th = clamp(th, -1, 1)
        st = clamp(st, -1, 1)
        if (state.locked || state.lidOpen || state.menu) {
            th = 0
            st = 0
            spin = 0
        }
        const boost = keys.has("shift") || !!(state.auto && state.auto.boost)
        thr += (th - thr) * (1 - Math.exp(-dt * 4))

        // along the course and across it
        fwd.set(Math.cos(state.course), 0, -Math.sin(state.course))
        side.set(Math.sin(state.course), 0, Math.cos(state.course))
        let vf = state.vel.dot(fwd)
        let vs = state.vel.dot(side)

        // thrust against a drag that grows with speed
        const vmax = boost ? BOOST : MAX
        const acc = th > 0 ? th * vmax * 0.9 : th * vmax * 0.5
        const drag = vf * (0.9 / vmax) * Math.abs(vf) * 0.9 + vf * 0.25
        const prev = vf
        vf += (acc - drag) * dt
        // sideways the water holds the boat: a slide (after a bump) dies out
        vs *= Math.exp(-dt * 1.6)

        // A/D steer the course (and the hull with it); it turns even standing still
        const turn = st * (0.55 + Math.min(1, Math.abs(vf) / MAX) * 0.6) * (vf < -0.5 ? -1 : 1)
        state.yawRate += (turn - state.yawRate) * (1 - Math.exp(-dt * 3.5))
        state.course += state.yawRate * dt
        // Q/E turn only the hull: it keeps going the same way
        state.spinRate += (spin * 1.7 - state.spinRate) * (1 - Math.exp(-dt * 4))
        state.heading += (state.yawRate + state.spinRate) * dt

        fwd.set(Math.cos(state.course), 0, -Math.sin(state.course))
        side.set(Math.sin(state.course), 0, Math.cos(state.course))
        state.vel.copy(fwd).multiplyScalar(vf).addScaledVector(side, vs)
        state.pos.addScaledVector(state.vel, dt)

        // nothing to drive through
        solve(t)
        // keep to the harbour
        const r = Math.hypot(state.pos.x, state.pos.z)
        if (r > 2400) state.pos.multiplyScalar(2400 / r)
        state.speed = state.vel.dot(fwd)

        // how the boat sits: bows up when speeding up, lean into turns
        const accel = (state.speed - prev) / Math.max(dt, 1e-3)
        const pitchWant = clamp(state.speed / BOOST, -0.3, 1) * 0.07 + clamp(accel * 0.006, -0.03, 0.05)
        const rollWant = clamp(-state.yawRate * state.speed * 0.012 - state.spinRate * 0.02, -0.14, 0.14)
        state.pitch += (pitchWant - state.pitch) * (1 - Math.exp(-dt * 3))
        state.roll += (rollWant - state.roll) * (1 - Math.exp(-dt * 3))

        // spray from the bows of the hulls at speed (where the hulls point, thrown the way it goes)
        if (spray && !reduced && Math.abs(state.speed) > 6 && t - lastSpray > 0.03) {
            lastSpray = t
            bow.set(Math.cos(state.heading), 0, -Math.sin(state.heading))
            stb.set(Math.sin(state.heading), 0, Math.cos(state.heading))
            const k = (Math.abs(state.speed) - 6) / 10
            for (const s of [-1, 1]) {
                const bx = state.pos.x + bow.x * 3 + stb.x * 1.85 * s
                const bz = state.pos.z + bow.z * 3 + stb.z * 1.85 * s
                spray.emit(bx, 0.2, bz, stb.x * s * 2.4 + state.vel.x * 0.5, 3.2 + k * 3, stb.z * s * 2.4 + state.vel.z * 0.5, Math.ceil(2 + k * 5), 1.2, 0.1)
            }
        }

        // chase camera, a little behind the turn, and you can look around
        if (!dragging && performance.now() - lastDrag > 2200) {
            // with the autopilot on, the camera swings slowly round to show the boat from the sides
            if (state.orbit || state.menu) camYaw += (Math.sin(t * 0.13) * 0.95 - camYaw) * (1 - Math.exp(-dt * 0.6))
            else camYaw *= Math.exp(-dt * 1.2)
        }
        // the camera follows the course, so it stays steady while the hull turns
        // with the lid open the camera comes close, from starboard (the lid opens away from you), above the case
        state.inspect += ((state.lidOpen ? 1 : 0) - state.inspect) * (1 - Math.exp(-dt * 2.2))
        const ki = state.inspect * state.inspect * (3 - 2 * state.inspect)
        const a = state.course + Math.PI + camYaw - state.yawRate * 0.25 + ki * (-Math.PI / 2 - 0.45 + Math.PI)
        const pitch = camPitch + (0.72 - camPitch) * ki
        state.menuK += ((state.menu ? 1 : 0) - state.menuK) * (1 - Math.exp(-dt * 1.6))
        const km = state.menuK * state.menuK * (3 - 2 * state.menuK)
        const dist = camDist + (6.4 - camDist) * ki + 15 * km
        const flat = Math.cos(pitch + 0.06 * km) * dist
        const lookY = 1.6 + (2.05 - 1.6) * ki
        want.set(state.pos.x + Math.cos(a) * flat, 1.2 + (lookY - 1.6) + Math.sin(pitch + 0.06 * km) * dist, state.pos.z - Math.sin(a) * flat)
        // keep the camera out of the hills: when land rises between the boat and the camera,
        // come in closer and higher, or the view fills with the inside of the hill
        if (groundHeight) {
            let f = 1
            let lift = 0
            let over = 0
            for (let tries = 0; tries < 5; tries++) {
                lift = 0
                over = 0
                for (let i = 1; i <= 8; i++) {
                    const s = i / 8
                    const h = groundHeight(state.pos.x + (want.x - state.pos.x) * f * s, state.pos.z + (want.z - state.pos.z) * f * s)
                    if (h == null) continue
                    const need = h + 2.5 - (lookY + (want.y - lookY) * s)
                    if (need > 0) lift = Math.max(lift, need / s)
                    over = Math.max(over, h + 2.5 - want.y)
                }
                if (lift < dist * 0.4) break
                f *= 0.75
            }
            // right up against something tall: just stand above it, looking down at the boat
            if (lift >= dist * 0.4) lift = Math.min(lift, over)
            want.x = state.pos.x + (want.x - state.pos.x) * f
            want.z = state.pos.z + (want.z - state.pos.z) * f
            want.y += lift
        }
        wantLook.copy(state.pos).addScaledVector(fwd, 5 * (1 - ki) * (1 - km)).setY(lookY)
        // with the menu open, look a little to the left of the boat, so it stands right of the menu
        wantLook.x += Math.sin(a) * dist * 0.24 * km
        wantLook.z += Math.cos(a) * dist * 0.24 * km
        inBlend = Math.min(1, inBlend + dt * (document.body.hasAttribute("data-game") ? 0.5 : 0.8))
        const k = inBlend * inBlend * (3 - 2 * inBlend)
        if (inBlend < 1) {
            state.camPos.lerpVectors(camFrom, want, k)
            state.camLook.lerpVectors(lookFrom, wantLook, k)
        } else {
            state.camPos.lerp(want, 1 - Math.exp(-dt * 6))
            state.camLook.lerp(wantLook, 1 - Math.exp(-dt * 8))
        }
        // a hard bump shakes the camera for a moment
        if (state.shake > 0.002) {
            const sh = reduced ? 0 : state.shake * 0.5
            state.camPos.x += (Math.random() - 0.5) * sh
            state.camPos.y += (Math.random() - 0.5) * sh * 0.6
            state.camPos.z += (Math.random() - 0.5) * sh
            state.shake *= Math.exp(-dt * 6)
        }
        // and never below the ground where the camera actually is (it trails behind the wanted spot)
        if (groundHeight) {
            const g = groundHeight(state.camPos.x, state.camPos.z)
            if (g != null && state.camPos.y < g + 2) state.camPos.y = g + 2
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

    let hudThr = ""
    let hudAt = 0
    function drawHud(t) {
        const tf = `scaleX(${Math.abs(thr).toFixed(2)})`
        if (tf !== hudThr) {
            hudThr = tf
            thrEl.style.transform = tf
            thrEl.classList.toggle("is-back", thr < 0)
        }
        // the compass and the radar are drawn 30 times a second (plenty for them, and half the work at 60)
        const now = performance.now()
        if (now - hudAt < 30) return
        hudAt = now
        // compass tape: bearing from north (+z), clockwise, so a turn to starboard turns it up (east is -x)
        const bearing = ((Math.atan2(-Math.cos(state.heading), -Math.sin(state.heading)) * 180) / Math.PI + 360) % 360
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
        c.fillStyle = "#ffffff"
        c.fillRect(W / 2 - 1.5, 0, 3, 24)
        // places not yet visited: small violet marks on the tape
        if (state.pois && !state.target) {
            c.fillStyle = "#c39cf0"
            for (const p of state.pois) {
                if (p.done || !p.item) continue
                const pb = ((Math.atan2(state.pos.x - p.item.x, p.item.z - state.pos.z) * 180) / Math.PI + 360) % 360
                const d = ((pb - bearing + 540) % 360) - 180
                if (Math.abs(d) > (W / 2 - 8) / 3.4) continue
                c.beginPath()
                c.arc(W / 2 + d * 3.4, 12, 4, 0, Math.PI * 2)
                c.fill()
            }
        }
        // the way to the next mission target: a blue mark, or an arrow at the edge
        if (state.target) {
            const tb = ((Math.atan2(state.pos.x - state.target.x, state.target.z - state.pos.z) * 180) / Math.PI + 360) % 360
            let d = ((tb - bearing + 540) % 360) - 180
            const lim = (W / 2 - 14) / 3.4
            const x = W / 2 + clamp(d, -lim, lim) * 3.4
            c.fillStyle = "#7cc4ff"
            c.beginPath()
            if (Math.abs(d) < lim) {
                c.moveTo(x, 22)
                c.lineTo(x - 8, 6)
                c.lineTo(x + 8, 6)
            } else {
                const s = Math.sign(d)
                c.moveTo(x + s * 10, 14)
                c.lineTo(x - s * 4, 4)
                c.lineTo(x - s * 4, 24)
            }
            c.closePath()
            c.fill()
        }
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
        // boxes: quays, wharves, boats, the pontoon
        g.fillStyle = "rgba(232,238,248,0.55)"
        for (const list of colliders ? colliders() : []) {
            for (const b of list) {
                if (b.peer) continue // another player: their own coloured dot below
                const [px, py] = toRadar(b.x, b.z)
                if (px * px + py * py > R * R * 1.2) continue
                g.save()
                g.translate(px, py)
                // the box's own x axis, seen with the bow up
                g.rotate(-(b.rot - state.heading) - Math.PI / 2)
                const sx = Math.max(2, (b.hx / RADAR_RANGE) * R)
                const sz = Math.max(2, (b.hz / RADAR_RANGE) * R)
                g.fillRect(-sx, -sz, sx * 2, sz * 2)
                g.restore()
            }
        }
        for (const b of buoys()) dot(b.x, b.z, b.kind === "port" ? "#ff5a4a" : b.kind === "stbd" ? "#45d07f" : b.kind === "info" ? "#c39cf0" : "#f2c230", b.kind === "info" ? 6 : 5)
        // the other players online, in their own colours
        // (a ring with a light middle, so they are not taken for a post or a buoy)
        if (state.others)
            for (const o of state.others) {
                const [px, py] = toRadar(o.x, o.z)
                if (px * px + py * py > R * R) continue
                g.fillStyle = "#ffffff"
                g.beginPath()
                g.arc(px, py, 4, 0, Math.PI * 2)
                g.fill()
                g.strokeStyle = o.color
                g.lineWidth = 3.5
                g.beginPath()
                g.arc(px, py, 8.5, 0, Math.PI * 2)
                g.stroke()
            }
        if (state.target) {
            const [px, py] = toRadar(state.target.x, state.target.z)
            const l = Math.hypot(px, py)
            const k = l > R - 10 ? (R - 10) / l : 1
            g.strokeStyle = "#7cc4ff"
            g.lineWidth = 3
            g.beginPath()
            g.arc(px * k, py * k, 9, 0, Math.PI * 2)
            g.stroke()
        }
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
            const touching = d < min
            if (touching && !b.touching) b.hits = (b.hits || 0) + 1
            b.touching = touching
            if (d < min && d > 0.001) {
                const push = (min - d) * 6
                b.vx += (dx / d) * push + state.vel.x * 0.3
                b.vz += (dz / d) * push + state.vel.z * 0.3
                if (state.vel.length() > 2.5 && spray) spray.splash(b.x, b.z, 0.5)
                state.vel.multiplyScalar(0.96)
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
        get course() {
            return state.course
        },
        get speed() {
            return state.speed
        },
        get vel() {
            return state.vel
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
        get weather() {
            return WEATHERS[weatherI]
        },
        get lidOpen() {
            return state.lidOpen
        },
        setLid,
        get outBlend() {
            return state.outBlend
        },
        hud,
        actions: hud.querySelector(".hud-actions"),
        onEscape(fn) {
            escapers.push(fn)
        },
        onPause(fn) {
            pausers.push(fn)
        },
        // the settings, for the game menu
        TIME_NAMES: ["Day", "Low sun", "Sunset", "Dusk", "Night"],
        WEATHERS,
        get timeIndex() {
            return timeI
        },
        get weatherIndex() {
            return weatherI
        },
        setTime,
        setWeather,
        get soundOn() {
            return soundOn
        },
        setSound,
        showKeys,
        onManual(fn) {
            manual.push(fn)
        },
        // a panel whose buttons the arrow keys move between (modal: it takes them as soon as it is open)
        addMenu(el, { modal = true } = {}) {
            menus.push({ el, modal })
        },
        closeOthers,
        get menuOpen() {
            return !!activeMenu()
        },
        sfx,
        shake(k) {
            state.shake = Math.min(1, state.shake + k)
        },
        // put the boat somewhere at once, standing still (the start of a mission)
        place(x, z, heading) {
            state.pos.set(x, 0, z)
            state.heading = heading
            state.course = heading
            state.vel.set(0, 0, 0)
            state.speed = 0
            state.yawRate = 0
            state.spinRate = 0
            thr = 0
            camYaw = 0
            const a = heading + Math.PI
            const flat = Math.cos(camPitch) * camDist
            state.camPos.set(x + Math.cos(a) * flat, 1.2 + Math.sin(camPitch) * camDist, z - Math.sin(a) * flat)
            state.camLook.set(x + Math.cos(heading) * 5, 1.6, z - Math.sin(heading) * 5)
            inBlend = 1
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
