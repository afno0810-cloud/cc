import * as THREE from "three"
import { waveHeight } from "./world/waves.js"
import { withAir } from "./world/air.js"

/* ================================================================
   Missions at the helm, after the Njord tasks: steer through gates,
   find the way down a buoy channel, give way to a boat crossing from
   starboard, and dock in the berth with the tag. Each one starts with a
   countdown where it is laid out (well away from the harbour's own
   boats), runs on a clock, and adds seconds for each buoy you touch.
   The best time for each is kept in this browser.

   The way: bow along (cos h, 0, -sin h), starboard (sin h, 0, cos h).
   ================================================================ */

const BLUE = new THREE.Color("#7cc4ff")
const PENALTY_BUOY = 5
const PENALTY_GIVEWAY = 10
const PENALTY_BOAT = 10

const MISSIONS = [
    { id: "gates", name: "Gates", text: "Steer through every gate: red buoy to port, green to starboard." },
    { id: "channel", name: "Buoy channel", text: "Find the way down the channel without touching a buoy." },
    { id: "giveway", name: "Give way", text: "A boat crosses from starboard. Slow down and pass behind it." },
    { id: "dock", name: "Docking", text: "Find the berth with the tag and stop in it, bow first." },
]

const fmt = (s) => {
    const tenths = Math.round(s * 10)
    const m = Math.floor(tenths / 600)
    const r = (tenths - m * 600) / 10
    return `${m}:${r < 10 ? "0" : ""}${r.toFixed(1)}`
}
const dirOf = (h) => [Math.cos(h), -Math.sin(h)]
const stbOf = (h) => [Math.sin(h), Math.cos(h)]

// a gate: from its port end a to its starboard end b; you pass it going the way it faces
function gate(x, z, h, half) {
    const [sx, sz] = stbOf(h)
    return { x, z, h, half, a: { x: x - sx * half, z: z - sz * half }, b: { x: x + sx * half, z: z + sz * half } }
}
// did the boat's centre cross the gate (between its ends, the right way) this frame?
function crossed(g, x0, z0, x1, z1) {
    const [fx, fz] = dirOf(g.h)
    const d0 = (x0 - g.x) * fx + (z0 - g.z) * fz
    const d1 = (x1 - g.x) * fx + (z1 - g.z) * fz
    if (!(d0 < 0 && d1 >= 0)) return false
    const k = d0 / (d0 - d1)
    const cx = x0 + (x1 - x0) * k
    const cz = z0 + (z1 - z0) * k
    const [sx, sz] = stbOf(g.h)
    return Math.abs((cx - g.x) * sx + (cz - g.z) * sz) <= g.half
}

// an ArUco-style tag: a black square with a white code inside, on a white board
function tagTexture() {
    const c = document.createElement("canvas")
    c.width = c.height = 128
    const g = c.getContext("2d")
    g.fillStyle = "#f4f4f2"
    g.fillRect(0, 0, 128, 128)
    g.fillStyle = "#0b0b0c"
    g.fillRect(16, 16, 96, 96)
    const code = ["01101", "10010", "11011", "00110", "10101"]
    g.fillStyle = "#f4f4f2"
    for (let r = 0; r < 5; r++) for (let q = 0; q < 5; q++) if (code[r][q] === "1") g.fillRect(28 + q * 14.4, 28 + r * 14.4, 14.4, 14.4)
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    t.magFilter = THREE.NearestFilter
    return t
}

// planks for the floating dock
function plankTexture() {
    const c = document.createElement("canvas")
    c.width = 256
    c.height = 256
    const g = c.getContext("2d")
    for (let i = 0; i < 16; i++) {
        const v = 92 + Math.floor(Math.random() * 30)
        g.fillStyle = `rgb(${v}, ${Math.floor(v * 0.84)}, ${Math.floor(v * 0.68)})`
        g.fillRect(0, i * 16, 256, 15)
        g.fillStyle = "rgba(20, 14, 8, 0.85)"
        g.fillRect(0, i * 16 + 15, 256, 1)
        // the grain
        g.fillStyle = "rgba(40, 28, 16, 0.18)"
        for (let k = 0; k < 6; k++) g.fillRect(Math.random() * 256, i * 16 + Math.random() * 14, 30 + Math.random() * 80, 1)
    }
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    t.wrapS = t.wrapT = THREE.RepeatWrapping
    t.anisotropy = 4
    return t
}

export function createMissions({ scene, props, drive, isGame = false }) {
    const group = new THREE.Group()
    scene.add(group)
    const colliders = [] // the dock and the crossing boat: boxes for the drive mode

    // ---- the marker over the next target: a light pillar, a chevron and a line on the water ----
    const marker = new THREE.Group()
    const pillarMat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        uniforms: { uCol: { value: new THREE.Color() }, uTime: { value: 0 } },
        vertexShader: /* glsl */ `varying float vY; void main(){ vY = uv.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: /* glsl */ `uniform vec3 uCol; uniform float uTime; varying float vY;
            void main(){ float a = pow(1.0 - vY, 1.6) * (0.75 + 0.25 * sin(uTime * 3.0 - vY * 12.0)); gl_FragColor = vec4(uCol * a, 1.0); }`,
    })
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 26, 12, 1, true), pillarMat)
    pillar.position.y = 13
    const chevMat = new THREE.MeshBasicMaterial({ color: BLUE, transparent: true })
    const chev = new THREE.Mesh(new THREE.ConeGeometry(1.0, 1.8, 4), chevMat)
    chev.rotation.x = Math.PI
    const lineMat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: { uCol: { value: new THREE.Color() }, uTime: { value: 0 } },
        vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: /* glsl */ `uniform vec3 uCol; uniform float uTime; varying vec2 vUv;
            void main(){
                float across = 1.0 - abs(vUv.y - 0.5) * 2.0;
                float dash = step(0.45, fract(vUv.x * 8.0 - uTime * 1.5));
                gl_FragColor = vec4(uCol * across * (0.35 + 0.65 * dash), 1.0);
            }`,
    })
    const line = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.7), lineMat)
    line.rotation.x = -Math.PI / 2
    const lineHolder = new THREE.Group()
    lineHolder.add(line)
    marker.add(pillar, chev, lineHolder)
    marker.visible = false
    group.add(marker)

    // ---- the HUD: a button, the list, the bar while running, messages and the result ----
    const hud = drive.hud
    const btn = document.createElement("button")
    btn.type = "button"
    btn.className = "hud-btn"
    btn.innerHTML = `Missions <kbd>M</kbd>`
    drive.actions.prepend(btn)

    let best = {}
    try {
        best = JSON.parse(localStorage.getItem("marinor-mission-best") || "{}") || {}
    } catch (e) {
        best = {}
    }
    const saveBest = () => {
        try {
            localStorage.setItem("marinor-mission-best", JSON.stringify(best))
        } catch (e) {
            /* no storage: kept for this visit only */
        }
    }

    const panel = document.createElement("div")
    panel.className = "hud-missions"
    panel.setAttribute("role", "dialog")
    panel.setAttribute("aria-label", "Missions")
    hud.appendChild(panel)
    function renderPanel() {
        panel.innerHTML = `
            <div class="hm-head"><h2>Missions</h2><span>After the Njord tasks</span></div>
            <ol class="hm-list">
                ${MISSIONS.map(
                    (m, i) => `<li>
                        <button type="button" class="hm-item" data-mission="${m.id}">
                            <span class="hm-n">0${i + 1}</span>
                            <span class="hm-body"><b>${m.name}</b><span>${m.text}</span></span>
                            <span class="hm-best">${best[m.id] ? `Best <b>${fmt(best[m.id])}</b>` : "Not done yet"}</span>
                        </button>
                    </li>`
                ).join("")}
            </ol>
            <div class="hm-foot"><span>Touching a buoy: +${PENALTY_BUOY} s</span><button type="button" class="hud-btn" data-close>Free drive</button></div>`
    }
    renderPanel()

    const bar = document.createElement("div")
    bar.className = "hud-mission"
    bar.innerHTML = `<span class="hmb-name"></span><span class="hmb-step"></span><span class="hmb-time">0:00.0</span><span class="hmb-pen"></span><button type="button" class="hmb-stop" aria-label="Stop the mission">Stop</button>`
    hud.appendChild(bar)
    const barName = bar.querySelector(".hmb-name")
    const barStep = bar.querySelector(".hmb-step")
    const barTime = bar.querySelector(".hmb-time")
    const barPen = bar.querySelector(".hmb-pen")

    const flash = document.createElement("div")
    flash.className = "hud-flash"
    flash.setAttribute("aria-live", "polite")
    hud.appendChild(flash)
    let flashUntil = 0
    function say(text, kind = "", secs = 1.4) {
        flash.textContent = text
        flash.className = "hud-flash is-on" + (kind ? " is-" + kind : "")
        flashUntil = performance.now() / 1000 + secs
    }

    const result = document.createElement("div")
    result.className = "hud-result"
    result.setAttribute("role", "dialog")
    hud.appendChild(result)

    function openPanel(on, focus = true) {
        if (run && run.phase === "done") clear()
        renderPanel()
        panel.classList.toggle("is-on", on)
        result.classList.remove("is-on")
        if (on && focus) {
            const first = panel.querySelector(".hm-item")
            if (first) first.focus({ preventScroll: true })
        }
    }
    btn.addEventListener("click", () => openPanel(!panel.classList.contains("is-on")))
    panel.addEventListener("click", (e) => {
        const m = e.target.closest("[data-mission]")
        if (m) return begin(m.dataset.mission)
        if (e.target.closest("[data-close]")) openPanel(false)
    })
    bar.querySelector(".hmb-stop").addEventListener("click", () => end(false))
    result.addEventListener("click", (e) => {
        const b = e.target.closest("[data-act]")
        if (!b) return
        if (b.dataset.act === "again" && last) return begin(last)
        clear()
        if (b.dataset.act === "list") openPanel(true)
        if (b.dataset.act === "close") result.classList.remove("is-on")
    })
    addEventListener("keydown", (e) => {
        if (!drive.active || e.target.closest?.("input, textarea")) return
        if (e.key.toLowerCase() === "m") openPanel(!panel.classList.contains("is-on"))
        if (e.key === "Escape" && panel.classList.contains("is-on")) openPanel(false)
    })

    // ---- running a mission ----
    let run = null // { id, items, gates, i, t0, pen, ... }
    let last = null
    const prev = new THREE.Vector2()

    function clear() {
        if (!run) return
        for (const it of run.items) props.despawn(it)
        for (const o of run.objs) group.remove(o)
        colliders.length = 0
        run = null
        marker.visible = false
        drive.state.target = null
        drive.state.locked = false
        bar.classList.remove("is-on")
    }
    function end(done) {
        if (!run) return
        const r = run
        if (done) {
            const time = r.time + r.pen
            const was = best[r.id]
            const isBest = !was || time < was
            if (isBest) {
                best[r.id] = time
                saveBest()
            }
            const m = MISSIONS.find((q) => q.id === r.id)
            result.innerHTML = `
                <span class="hr-tag">Mission complete</span>
                <h2>${m.name}</h2>
                <p class="hr-time">${fmt(time)}</p>
                <p class="hr-sub">${r.pen ? `${fmt(r.time)} + ${r.pen} s for ${r.penNote.join(", ")}` : "No penalties"}${isBest ? ` · <b>${was ? "New best" : "First time"}</b>` : ` · Best ${fmt(was)}`}</p>
                <div class="hr-btns">
                    <button type="button" class="hud-btn hr-main" data-act="again">Again</button>
                    <button type="button" class="hud-btn" data-act="list">Missions</button>
                    <button type="button" class="hud-btn" data-act="close">Free drive</button>
                </div>`
            result.classList.add("is-on")
            const again = result.querySelector("[data-act=again]")
            if (again) again.focus({ preventScroll: true })
            // the course stays where it is (you are still in the berth) until you go on
            r.phase = "done"
            marker.visible = false
            drive.state.target = null
            bar.classList.remove("is-on")
            return
        }
        clear()
    }

    async function begin(id) {
        clear()
        openPanel(false)
        result.classList.remove("is-on")
        last = id
        const r = { id, items: [], objs: [], gates: [], i: 0, time: 0, pen: 0, penNote: [], phase: "count", count: 3.2, buoys: [] }
        run = r
        const build = { gates: buildGates, channel: buildChannel, giveway: buildGiveWay, dock: buildDock }[id]
        await build(r)
        if (run !== r) {
            // stopped (or another one started) while the models loaded
            for (const it of r.items) props.despawn(it)
            for (const o of r.objs) group.remove(o)
            return
        }
        r.buoys = r.items.filter((it) => it.buoy).map((it) => it.buoy)
        for (const b of r.buoys) b.hits = 0
        drive.place(r.start.x, r.start.z, r.start.h)
        drive.state.locked = true
        prev.set(r.start.x, r.start.z)
        barName.textContent = MISSIONS.find((m) => m.id === id).name
        barPen.textContent = ""
        bar.classList.add("is-on")
        aim()
    }

    async function buoy(r, kind, x, z, size = 6.5) {
        const file = kind === "port" ? "buoy-red" : kind === "stbd" ? "buoy-green" : "buoy-cardinal"
        const it = await props.spawn(file, { x, z, size, sink: 0.3, buoy: kind, yaw: Math.random() * 6.28 })
        if (it) r.items.push(it)
        return it
    }
    async function gateBuoys(r, g) {
        await Promise.all([buoy(r, "port", g.a.x, g.a.z), buoy(r, "stbd", g.b.x, g.b.z)])
    }

    // 1 · gates along a slalom, east of the start
    async function buildGates(r) {
        r.start = { x: 300, z: -200, h: 0 }
        const off = [0, 14, -6, 18, 2, -16, -2]
        const pts = off.map((o, i) => [340 + i * 36, -200 + o])
        for (let i = 0; i < pts.length; i++) {
            const p0 = pts[Math.max(0, i - 1)]
            const p1 = pts[Math.min(pts.length - 1, i + 1)]
            const h = Math.atan2(-(p1[1] - p0[1]), p1[0] - p0[0])
            r.gates.push(gate(pts[i][0], pts[i][1], h, 7.5))
        }
        r.label = (i) => `Gate ${Math.min(i + 1, r.gates.length)}/${r.gates.length}`
        await Promise.all(r.gates.map((g) => gateBuoys(r, g)))
    }

    // 2 · a winding channel lined with buoys; checkpoints across it keep you in it
    async function buildChannel(r) {
        r.start = { x: 300, z: 200, h: 0 }
        const N = 26
        const C = []
        for (let j = 0; j <= N; j++) C.push([326 + j * 12, 200 + Math.sin(j * 0.3) * 18 + Math.sin(j * 0.13) * 8])
        const headAt = (j) => {
            const a = C[Math.max(0, j - 1)]
            const b = C[Math.min(N, j + 1)]
            return Math.atan2(-(b[1] - a[1]), b[0] - a[0])
        }
        const half = 11
        const jobs = []
        for (let j = 0; j <= N; j += 2) {
            const h = headAt(j)
            const [sx, sz] = stbOf(h)
            const [x, z] = C[j]
            // alternate a little along the way, as real channels do
            jobs.push(buoy(r, "port", x - sx * half, z - sz * half, 5.5))
            jobs.push(buoy(r, "stbd", x + sx * half, z + sz * half, 5.5))
        }
        for (let j = 2; j < N; j += 2) r.gates.push(gate(C[j][0], C[j][1], headAt(j), half))
        r.gates.push(gate(C[N][0], C[N][1], headAt(N), half))
        r.label = (i) => `Checkpoint ${Math.min(i + 1, r.gates.length)}/${r.gates.length}`
        await Promise.all(jobs)
    }

    // 3 · gates on a straight line, and a boat that crosses it from starboard
    async function buildGiveWay(r) {
        r.start = { x: -100, z: -300, h: 0 }
        for (const x of [-60, 60, 120]) r.gates.push(gate(x, -300, 0, 8))
        await Promise.all(r.gates.map((g) => gateBuoys(r, g)))
        const boat = await props.spawn("snekke", { x: 20, z: -230, size: 17, sink: 0.3 })
        if (!boat) return
        r.items.push(boat)
        if (run !== r) return
        // its long side along its track (towards -z)
        const alongX = boat.hx > boat.hz
        boat.yaw = alongX ? Math.PI / 2 : 0
        boat.obj.rotation.y = boat.yaw
        r.other = { it: boat, z: -230, v: 0, box: { x: 20, z: -230, hx: boat.hx, hz: boat.hz, rot: boat.yaw }, judged: false, hit: false }
        colliders.push(r.other.box)
        r.label = (i) => `Gate ${Math.min(i + 1, r.gates.length)}/${r.gates.length}`
    }

    // 4 · a floating dock with four berths; the tag marks the right one
    async function buildDock(r) {
        r.start = { x: -120, z: 300, h: 0 }
        const deck = withAir(new THREE.MeshStandardMaterial({ map: plankTexture(), roughness: 0.85 }))
        const floatMat = withAir(new THREE.MeshStandardMaterial({ color: 0x2a2c2e, roughness: 0.7 }))
        const add = (x, z, hx, hz) => {
            const len = Math.max(hx, hz) * 2
            const geo = new THREE.BoxGeometry(hx * 2, 0.35, hz * 2)
            // the planks run across the walkway
            const uv = geo.attributes.uv
            for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * (hx > hz ? len / 8 : 1), uv.getY(i) * (hz > hx ? len / 8 : 1))
            const m = new THREE.Mesh(geo, deck)
            m.position.set(x, 0.5, z)
            const f = new THREE.Mesh(new THREE.BoxGeometry(hx * 2 - 0.2, 0.6, hz * 2 - 0.2), floatMat)
            f.position.set(x, 0.05, z)
            group.add(m, f)
            r.objs.push(m, f)
            colliders.push({ x, z, hx, hz, rot: 0 })
        }
        // the walkway along z at x = 0, fingers out towards -x
        add(1.6, 300, 1.6, 42)
        const W = 16
        for (let k = 0; k < 5; k++) add(-7, 300 + (k - 2) * W, 7, 0.7)
        r.berths = []
        for (let k = 0; k < 4; k++) r.berths.push({ z: 300 + (k - 1.5) * W })
        r.want = Math.floor(Math.random() * 4)
        // the tag on a post at the head of the right berth
        const tag = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 2.6), new THREE.MeshStandardMaterial({ map: tagTexture(), roughness: 0.6 }))
        tag.position.set(1.0, 2.6, r.berths[r.want].z)
        tag.rotation.y = -Math.PI / 2
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.25, 2.4, 0.25), floatMat)
        post.position.set(1.15, 1.5, r.berths[r.want].z)
        group.add(tag, post)
        r.objs.push(tag, post)
        // the way in: across the mouth of the right berth
        r.gates.push(gate(-14, r.berths[r.want].z, 0, W / 2 - 0.7))
        r.hold = 0
        r.label = () => (r.i < 1 ? "Find the tag" : "Stop in the berth")
    }

    // where the marker and the compass point
    function aim() {
        if (!run) return
        const g = run.gates[run.i]
        if (!g) {
            marker.visible = false
            drive.state.target = null
            return
        }
        marker.visible = true
        marker.position.set(g.x, 0, g.z)
        lineHolder.rotation.y = g.h + Math.PI / 2
        line.scale.set(g.half * 2, 1, 1)
        drive.state.target = { x: g.x, z: g.z }
        barStep.textContent = run.label(run.i)
    }

    function penalty(secs, note, msg) {
        run.pen += secs
        if (!run.penNote.includes(note)) run.penNote.push(note)
        barPen.textContent = `+${run.pen} s`
        say(`+${secs} s · ${msg}`, "bad")
    }

    // ---- every frame ----
    let opened = false
    function update(t, dt, exposure = 1) {
        if (!drive.active) {
            if (run) clear()
            panel.classList.remove("is-on")
            result.classList.remove("is-on")
            opened = false
            return
        }
        // the game page opens with the list
        if (isGame && !opened) {
            opened = true
            setTimeout(() => !run && drive.active && openPanel(true, false), 1400)
        }
        if (flash.classList.contains("is-on") && performance.now() / 1000 > flashUntil) flash.classList.remove("is-on")

        // the marker bobs and glows
        const gain = 1 / Math.max(exposure, 0.5)
        // the pillar is for finding it from afar: close by it steps back
        const near = marker.visible ? Math.hypot(marker.position.x - drive.pos.x, marker.position.z - drive.pos.z) : 0
        pillarMat.uniforms.uCol.value.copy(BLUE).multiplyScalar(0.22 * gain * THREE.MathUtils.smoothstep(near, 12, 45))
        pillarMat.uniforms.uTime.value = t
        lineMat.uniforms.uCol.value.copy(BLUE).multiplyScalar(0.6 * gain)
        lineMat.uniforms.uTime.value = t
        chevMat.color.copy(BLUE).multiplyScalar(1.4 * gain)
        if (marker.visible) {
            const h = waveHeight(marker.position.x, marker.position.z, t, 1) * 0.8
            chev.position.y = 7.5 + Math.sin(t * 2.4) * 0.5
            chev.rotation.y = t * 1.5
            lineHolder.position.y = h + 0.12
        }
        if (!run || !run.start || run.phase === "done") return
        const r = run
        const p = drive.pos

        if (r.phase === "count") {
            const before = Math.ceil(r.count)
            r.count -= dt
            const now = Math.ceil(r.count)
            if (now !== before || !flash.classList.contains("is-on")) {
                if (r.count > 0 && now <= 3) say(String(now), "count", 0.9)
            }
            if (r.count <= 0) {
                r.phase = "go"
                drive.state.locked = false
                say("Go!", "good", 0.9)
            }
            prev.set(p.x, p.z)
            return
        }

        r.time += dt
        barTime.textContent = fmt(r.time + r.pen)

        // touching buoys
        for (const b of r.buoys) {
            if (b.hits > 0) {
                b.hits = 0
                penalty(PENALTY_BUOY, "buoys", "Buoy touched")
            }
        }

        // the crossing boat (give way)
        if (r.other) {
            const o = r.other
            // it sets off once you are through the first gate
            if (r.i >= 1 && o.v === 0 && !o.went) {
                o.v = 6.5
                o.went = true
                say("A boat from starboard: give way", "", 2.4)
            }
            o.z -= o.v * dt
            o.it.x = 20
            o.it.z = o.z
            o.box.x = 20
            o.box.z = o.z
            // you crossed its track: was it already past (good), or did you cut in ahead of it?
            if (!o.judged && prev.x < 20 && p.x >= 20) {
                o.judged = true
                if (o.z > p.z && o.z - p.z < 48) penalty(PENALTY_GIVEWAY, "not giving way", "Give way to boats from starboard")
                else say("Gave way", "good")
            }
            // bumping into it (its size along x and z, turned as it lies)
            const c = Math.abs(Math.cos(o.box.rot))
            const sn = Math.abs(Math.sin(o.box.rot))
            const ex = c * o.box.hx + sn * o.box.hz
            const ez = sn * o.box.hx + c * o.box.hz
            const dx = Math.abs(p.x - 20)
            const dz = Math.abs(p.z - o.z)
            if (dx < ex + 3.4 && dz < ez + 3.4) {
                if (!o.hit) penalty(PENALTY_BOAT, "a collision", "Collision")
                o.hit = true
            } else if (dx > ex + 6 || dz > ez + 6) o.hit = false
            if (o.z < -420) o.v = 0
        }

        // through the next gate
        const g = r.gates[r.i]
        if (g && crossed(g, prev.x, prev.y, p.x, p.z)) {
            r.i++
            if (r.id !== "dock") {
                if (r.i >= r.gates.length) return end(true)
                say(r.id === "channel" ? "Checkpoint" : "Gate", "good", 0.7)
            }
            aim()
        }

        // docking: stopped in the right berth, bow in
        if (r.id === "dock") {
            const inBerth = (bz) => p.x > -12 && p.x < -3 && Math.abs(p.z - bz) < 5.2
            const bowIn = Math.cos(drive.heading) > 0.82
            const slow = drive.vel.length() < 1.1
            if (inBerth(r.berths[r.want].z)) {
                if (r.i < 1) {
                    r.i = 1
                    aim()
                }
                barStep.textContent = r.label()
                if (bowIn && slow) {
                    r.hold += dt
                    if (r.hold > 1.2) return end(true)
                } else r.hold = 0
            } else {
                r.hold = 0
                const wrong = r.berths.findIndex((b, k) => k !== r.want && inBerth(b.z))
                if (wrong >= 0 && slow && !r.toldWrong) {
                    r.toldWrong = true
                    say("Wrong berth: look for the tag", "bad", 2)
                } else if (wrong < 0) r.toldWrong = false
            }
            if (r.i >= 1) marker.visible = false
        }
        prev.set(p.x, p.z)
    }

    return {
        group,
        colliders,
        update,
        get run() {
            return run
        },
    }
}
