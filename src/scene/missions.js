import * as THREE from "three"
import { waveHeight } from "./world/waves.js"
import { withAir } from "./world/air.js"

/* ================================================================
   The four Njord tasks at the helm, as on the Njord page: manoeuvring,
   path finding, collision avoidance and docking. Each is laid out in
   its own part of the harbour, well away from the harbour's own boats.
   A task opens with a briefing, then a countdown, and is scored out of
   100: points come off for each buoy touched, a mark passed on the
   wrong side, getting too close to the Otter or hitting it, stopping in
   the wrong berth, and each second over par. 90 is gold, 75 silver, 50
   bronze. The full Njord run is all four in a row, out of 400. The best
   scores are kept in this browser.

   The way: bow along (cos h, 0, -sin h), starboard (sin h, 0, cos h);
   north on the compass is +z, east is +x.
   ================================================================ */

const BLUE = new THREE.Color("#7cc4ff")
const VIOLET = new THREE.Color("#c39cf0")
const GREEN = new THREE.Color("#7ff0a8")
const RED = new THREE.Color("#ff8a6c")
const BEST_KEY = "marinor-njord-best"

const DED = { buoy: 5, side: 20, close: 10, hit: 30, berth: 15 }
const SAFE = 15 // keep this far from the Otter, centre to centre (4.5 m)
const OVER_MAX = 40 // at most this many points off for time

const TASKS = [
    {
        id: "manoeuvring",
        name: "Manoeuvring",
        site: "The boat has to steer through a marked course on the water and show that it can control its own movement.",
        how: [
            "Steer through every gate: the red buoy to port, the green to starboard.",
            "Halfway there is a ring on the water. Inside it, turn the boat a full 360° with <kbd>Q</kbd> or <kbd>E</kbd>.",
        ],
        quote: "With four propellers Argus can turn a full 360 degrees while it keeps moving forward.",
        par: 45,
    },
    {
        id: "pathfinding",
        name: "Path finding",
        site: "The boat has to read the sea markers and find its own way through the course, without help from the team.",
        how: [
            "No line to follow: five cardinal marks show the way. Pass each one on its safe side.",
            "Pass a north mark on its north side, a south mark on its south side, and so on. North is on the compass.",
        ],
        par: 45,
    },
    {
        id: "collision",
        name: "Collision avoidance",
        site: "Another vessel crosses the path. The boat has to see it in time and go around it safely.",
        how: [
            "The Otter crosses from starboard: slow down or turn, and pass behind it.",
            "Then it comes straight at you: turn to starboard, so you pass port to port.",
            "Keep at least 4.5 m away. The LiDAR shows where it is.",
        ],
        about: "The Otter: a small vessel from the organisers that moves across the course in the collision task.",
        par: 50,
    },
    {
        id: "docking",
        name: "Docking",
        site: "The last task is to find the right spot at the dock and park the boat there on its own.",
        how: ["Four berths, four AR tags. Find the berth with the tag shown here.", "Stop in it bow first, and hold still."],
        par: 30,
    },
]
const taskOf = (id) => TASKS.find((t) => t.id === id)

const MEDALS = [
    { min: 0.9, id: "gold", name: "Gold" },
    { min: 0.75, id: "silver", name: "Silver" },
    { min: 0.5, id: "bronze", name: "Bronze" },
]
const medalOf = (pts, max = 100) => (pts == null ? null : MEDALS.find((m) => pts >= m.min * max) || null)
const medalHtml = (m, big = false) =>
    m ? `<i class="medal is-${m.id}${big ? " is-big" : ""}" role="img" aria-label="${m.name}" title="${m.name}"></i>` : `<i class="medal${big ? " is-big" : ""}" aria-hidden="true"></i>`

const fmt = (s) => {
    const tenths = Math.round(s * 10)
    const m = Math.floor(tenths / 600)
    const r = (tenths - m * 600) / 10
    return `${m}:${r < 10 ? "0" : ""}${r.toFixed(1)}`
}
const dirOf = (h) => [Math.cos(h), -Math.sin(h)]
const stbOf = (h) => [Math.sin(h), Math.cos(h)]
const toM = (u) => (u * 0.3).toFixed(1) + " m"

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
// do the segments a-b and c-d cross?
function segCross(ax, az, bx, bz, cx, cz, dx, dz) {
    const d1 = (bx - ax) * (cz - az) - (bz - az) * (cx - ax)
    const d2 = (bx - ax) * (dz - az) - (bz - az) * (dx - ax)
    const d3 = (dx - cx) * (az - cz) - (dz - cz) * (ax - cx)
    const d4 = (dx - cx) * (bz - cz) - (dz - cz) * (bx - cx)
    return d1 * d2 < 0 && d3 * d4 < 0
}

// ---- cardinal marks: the colours and the two cones on top tell where the safe water is ----
const YELLOW = "#f2c230"
const BLACK = "#16171a"
const CARDINALS = {
    // bands from the top; cones [upper, lower], 1 = point up; dir = the safe side
    N: { name: "North", bands: [BLACK, YELLOW], cones: [1, 1], dir: [0, 1] },
    S: { name: "South", bands: [YELLOW, BLACK], cones: [-1, -1], dir: [0, -1] },
    E: { name: "East", bands: [BLACK, YELLOW, BLACK], cones: [1, -1], dir: [1, 0] },
    W: { name: "West", bands: [YELLOW, BLACK, YELLOW], cones: [-1, 1], dir: [-1, 0] },
}
function markSvg(kind) {
    const c = CARDINALS[kind]
    const tri = (cy, up) => (up > 0 ? `18,${cy + 4} 32,${cy + 4} 25,${cy - 4}` : `18,${cy - 4} 32,${cy - 4} 25,${cy + 4}`)
    const n = c.bands.length
    const h = 30 / n
    const bands = c.bands.map((col, i) => `<rect x="19" y="${(24 + i * h).toFixed(2)}" width="12" height="${(h + 0.3).toFixed(2)}" fill="${col}"/>`).join("")
    const edge = `stroke="rgba(232,238,248,.55)" stroke-width="1"`
    return `<svg class="cm-svg" viewBox="0 0 50 64" aria-hidden="true"><path d="M25 3V24" stroke="#c9d1db" stroke-width="1.5"/><polygon points="${tri(8, c.cones[0])}" fill="${BLACK}" ${edge}/><polygon points="${tri(18, c.cones[1])}" fill="${BLACK}" ${edge}/>${bands}<rect x="19" y="24" width="12" height="30" fill="none" ${edge}/><path d="M13 54h24l-3 6H16z" fill="${c.bands[n - 1]}" ${edge}/><path d="M3 60q5.5-3 11 0t11 0 11 0 11 0" stroke="#7cc4ff" fill="none" stroke-width="1.5"/></svg>`
}

// ---- AR tags: four different codes, one for each berth ----
const CODES = [
    ["10110", "01001", "11100", "00111", "10010"],
    ["01101", "10010", "11011", "00110", "10101"],
    ["11001", "00110", "10101", "01011", "11100"],
    ["00111", "11010", "01100", "10011", "01110"],
]
function tagCanvas(code) {
    const c = document.createElement("canvas")
    c.width = c.height = 128
    const g = c.getContext("2d")
    g.fillStyle = "#f4f4f2"
    g.fillRect(0, 0, 128, 128)
    g.fillStyle = "#0b0b0c"
    g.fillRect(16, 16, 96, 96)
    g.fillStyle = "#f4f4f2"
    for (let r = 0; r < 5; r++) for (let q = 0; q < 5; q++) if (code[r][q] === "1") g.fillRect(28 + q * 14.4, 28 + r * 14.4, 14.4, 14.4)
    return c
}
function tagTexture(canvas) {
    const t = new THREE.CanvasTexture(canvas)
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

let mats = null
function materials() {
    if (mats) return mats
    const std = (color, roughness = 0.5, metalness = 0) => withAir(new THREE.MeshStandardMaterial({ color, roughness, metalness }))
    mats = {
        [YELLOW]: std(YELLOW, 0.5),
        [BLACK]: std(BLACK, 0.45),
        steel: std(0x3a3d40, 0.5, 0.4),
        white: std(0xe4e6e8, 0.45),
        dark: std(0x24272b, 0.6),
        orange: std(0xe8742a, 0.5),
        lamp: new THREE.MeshBasicMaterial({ color: 0xfff1c8 }),
    }
    return mats
}

// a cardinal pillar buoy, about 3 m tall: a float, the banded pillar, a mast with the two cones
function cardinalMesh(kind) {
    const M = materials()
    const c = CARDINALS[kind]
    const g = new THREE.Group()
    const add = (geo, mat, y, rx = 0) => {
        const m = new THREE.Mesh(geo, mat)
        m.position.y = y
        m.rotation.x = rx
        g.add(m)
        return m
    }
    const n = c.bands.length
    add(new THREE.CylinderGeometry(1.45, 1.9, 1.7, 24), M[c.bands[n - 1]], 0.05)
    const hb = 6 / n
    for (let i = 0; i < n; i++) add(new THREE.CylinderGeometry(0.6 + (0.2 * i) / n, 0.6 + (0.2 * (i + 1)) / n, hb, 20), M[c.bands[i]], 0.9 + 6 - (i + 0.5) * hb)
    add(new THREE.CylinderGeometry(0.85, 0.85, 0.1, 18), M.steel, 6.95)
    add(new THREE.CylinderGeometry(0.06, 0.06, 2.7, 8), M.steel, 8.3)
    add(new THREE.ConeGeometry(0.62, 0.85, 20), M[BLACK], 9.05, c.cones[0] > 0 ? 0 : Math.PI)
    add(new THREE.ConeGeometry(0.62, 0.85, 20), M[BLACK], 7.95, c.cones[1] > 0 ? 0 : Math.PI)
    add(new THREE.CylinderGeometry(0.11, 0.11, 0.28, 10), M.lamp, 9.75)
    return g
}

// the Otter: a small catamaran drone, about 2 m long; the bow along +x
function otterMesh() {
    const M = materials()
    const g = new THREE.Group()
    for (const s of [-1, 1]) {
        const hull = new THREE.Mesh(new THREE.CapsuleGeometry(0.55, 5.0, 6, 16), M.white)
        hull.rotation.z = Math.PI / 2
        hull.scale.set(0.8, 1, 1)
        hull.position.set(0, 0.12, s * 1.55)
        const nose = new THREE.Mesh(new THREE.SphereGeometry(0.34, 14, 10), M.orange)
        nose.position.set(2.85, 0.2, s * 1.55)
        g.add(hull, nose)
    }
    const deck = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.22, 3.5), M.dark)
    deck.position.y = 0.72
    const house = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.75, 1.7), M.white)
    house.position.set(-0.3, 1.2, 0)
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.0, 8), M.dark)
    mast.position.set(-1.0, 2.3, 0)
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.24, 14, 10), M.white)
    dome.position.set(-1.0, 3.35, 0)
    const light = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 8), new THREE.MeshBasicMaterial({ color: 0xffb030 }))
    light.position.set(-1.0, 3.7, 0)
    g.add(deck, house, mast, dome, light)
    return { group: g, light }
}

export function createMissions({ scene, props, drive, isGame = false }) {
    const group = new THREE.Group()
    scene.add(group)
    const colliders = [] // the dock and the Otter: boxes for the drive mode

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
    let chevY = 7.5

    // the ring for the 360° turn: it fills up as the boat turns
    const ringMat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        uniforms: { uCol: { value: new THREE.Color() }, uP: { value: 0 }, uTime: { value: 0 } },
        vertexShader: /* glsl */ `varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: /* glsl */ `uniform vec3 uCol; uniform float uP; uniform float uTime; varying vec2 vP;
            void main(){
                float a = fract(atan(vP.x, vP.y) / 6.2831853 + 1.0);
                float on = step(a, uP);
                float tick = step(0.5, fract(a * 36.0));
                float base = 0.2 + 0.08 * sin(uTime * 3.0) + tick * 0.08;
                gl_FragColor = vec4(uCol * mix(base, 1.3, on), 1.0);
            }`,
    })
    const ring = new THREE.Mesh(new THREE.RingGeometry(12.6, 13.6, 128, 1), ringMat)
    ring.rotation.x = -Math.PI / 2
    ring.visible = false
    group.add(ring)

    // bursts on the water when a gate, a mark or the turn is done
    const bursts = []
    const burstGeo = new THREE.RingGeometry(0.86, 1, 72, 1)
    function burst(x, z, color, size = 9) {
        const m = new THREE.Mesh(burstGeo, new THREE.MeshBasicMaterial({ color, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }))
        m.rotation.x = -Math.PI / 2
        m.position.set(x, 0.4, z)
        group.add(m)
        bursts.push({ m, t: 0, size, color: color.clone() })
    }

    // ---- the HUD: a button, the list, the bar while running, messages, the briefing and the result ----
    const hud = drive.hud
    const btn = document.createElement("button")
    btn.type = "button"
    btn.className = "hud-btn"
    btn.innerHTML = `Njord tasks <kbd>M</kbd>`
    drive.actions.prepend(btn)

    let best = {}
    try {
        best = JSON.parse(localStorage.getItem(BEST_KEY) || "{}") || {}
    } catch (e) {
        best = {}
    }
    const saveBest = () => {
        try {
            localStorage.setItem(BEST_KEY, JSON.stringify(best))
        } catch (e) {
            /* no storage: kept for this visit only */
        }
    }

    const panel = document.createElement("div")
    panel.className = "hud-missions"
    panel.setAttribute("role", "dialog")
    panel.setAttribute("aria-label", "Njord tasks")
    hud.appendChild(panel)
    function renderPanel() {
        const medals = TASKS.map((t) => medalOf(best[t.id]))
        const won = medals.filter(Boolean).length + (medalOf(best.full, 400) ? 1 : 0)
        panel.innerHTML = `
            <div class="hm-head"><h2>Njord tasks</h2><span>4 tasks on the water</span></div>
            <p class="hm-intro">The boats sail a course in the harbour and get one task at a time. Here you are at the helm.</p>
            <ol class="hm-list">
                ${TASKS.map(
                    (t, i) => `<li>
                        <button type="button" class="hm-item" data-mission="${t.id}">
                            <span class="hm-n">0${i + 1}</span>
                            <span class="hm-body"><b>${t.name}</b><span>${t.site}</span></span>
                            <span class="hm-best">${best[t.id] != null ? `${medalHtml(medals[i])}<span><b>${best[t.id]}</b>points</span>` : "Not done yet"}</span>
                        </button>
                    </li>`
                ).join("")}
            </ol>
            <button type="button" class="hm-item hm-full" data-mission="full">
                <span class="hm-n">★</span>
                <span class="hm-body"><b>Full Njord run</b><span>All four tasks in a row, out of 400.</span></span>
                <span class="hm-best">${best.full != null ? `${medalHtml(medalOf(best.full, 400))}<span><b>${best.full}</b>of 400</span>` : "Not done yet"}</span>
            </button>
            <div class="hm-foot"><span class="hm-medals">${MEDALS.map((m) => medalHtml(m)).join("")} ${won} of 5 medals won</span><button type="button" class="hud-btn" data-close>Free drive</button></div>`
    }
    renderPanel()

    const bar = document.createElement("div")
    bar.className = "hud-mission"
    bar.innerHTML = `<span class="hmb-name"></span><span class="hmb-step"></span><span class="hmb-time">0:00.0</span><span class="hmb-pts"><b>100</b> pts</span><button type="button" class="hmb-stop" aria-label="Stop the task">Stop</button>`
    hud.appendChild(bar)
    const barName = bar.querySelector(".hmb-name")
    const barStep = bar.querySelector(".hmb-step")
    const barTime = bar.querySelector(".hmb-time")
    const barPts = bar.querySelector(".hmb-pts b")
    let stepHtml = ""
    const setStep = (html) => {
        if (html !== stepHtml) barStep.innerHTML = stepHtml = html
    }

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
        if (on && run && run.phase !== "go" && run.phase !== "count") clear()
        renderPanel()
        panel.classList.toggle("is-on", on)
        if (on) result.classList.remove("is-on")
        if (on && focus) {
            const first = panel.querySelector(".hm-item")
            if (first) first.focus({ preventScroll: true })
        }
    }
    btn.addEventListener("click", () => openPanel(!panel.classList.contains("is-on")))
    panel.addEventListener("click", (e) => {
        const m = e.target.closest("[data-mission]")
        if (m) return m.dataset.mission === "full" ? begin(TASKS[0].id, { full: { scores: [] } }) : begin(m.dataset.mission)
        if (e.target.closest("[data-close]")) openPanel(false)
    })
    bar.querySelector(".hmb-stop").addEventListener("click", () => clear())
    result.addEventListener("click", (e) => {
        const b = e.target.closest("[data-act]")
        if (!b) return
        const act = b.dataset.act
        if (act === "go") return go()
        if (act === "again" && last) return begin(last.id, last.full ? { full: { scores: [] } } : {})
        if (act === "next" && run && run.full) {
            const i = TASKS.indexOf(run.task)
            return begin(TASKS[i + 1].id, { full: run.full })
        }
        clear()
        if (act === "list") openPanel(true)
        if (act === "close") result.classList.remove("is-on")
    })
    addEventListener("keydown", (e) => {
        if (!drive.active || e.target.closest?.("input, textarea")) return
        if (e.key.toLowerCase() === "m" && !e.repeat) openPanel(!panel.classList.contains("is-on"))
        if (e.key === "Enter" && run && run.phase === "brief" && !e.target.closest?.("button")) {
            e.preventDefault()
            go()
        }
    })
    drive.onEscape(() => {
        if (panel.classList.contains("is-on")) {
            openPanel(false)
            return true
        }
        if (result.classList.contains("is-on")) {
            clear()
            result.classList.remove("is-on")
            return true
        }
        return false
    })

    // ---- running a task ----
    let run = null
    let last = null
    const prev = new THREE.Vector2()

    function clear() {
        if (!run) return
        for (const it of run.items) props.despawn(it)
        for (const o of run.objs) group.remove(o)
        colliders.length = 0
        run = null
        marker.visible = false
        ring.visible = false
        drive.state.target = null
        drive.state.locked = false
        bar.classList.remove("is-on")
        result.classList.remove("is-on", "is-brief")
    }

    const overtime = (r) => Math.min(OVER_MAX, Math.max(0, Math.floor(r.time - r.task.par)))
    const points = (r) => Math.max(0, 100 - r.ded - overtime(r))
    function deduct(r, key, label, pts, msg) {
        r.ded += pts
        const l = r.log.get(key) || { label, n: 0, pts }
        l.n++
        r.log.set(key, l)
        say(`−${pts} · ${msg}`, "bad", 1.8)
    }

    async function begin(id, { full = null } = {}) {
        clear()
        drive.setLid(false)
        panel.classList.remove("is-on")
        result.classList.remove("is-on")
        const task = taskOf(id)
        last = { id: full ? TASKS[0].id : id, full: !!full }
        const r = { id, task, full, items: [], objs: [], steps: [], i: 0, time: 0, ded: 0, log: new Map(), phase: "build", count: 3.2, buoys: [], otters: [] }
        run = r
        await { manoeuvring: buildManoeuvring, pathfinding: buildPathfinding, collision: buildCollision, docking: buildDocking }[id](r)
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
        barName.textContent = `${String(TASKS.indexOf(task) + 1).padStart(2, "0")} ${task.name}`
        barTime.textContent = fmt(0)
        barPts.textContent = "100"
        bar.classList.remove("is-low")
        aim()
        brief(r)
    }

    // the briefing: what the Njord page says, and how to do it here
    function brief(r) {
        const t = r.task
        const n = TASKS.indexOf(t) + 1
        let extra = ""
        if (t.id === "pathfinding")
            extra = `<div class="hr-marks">${["N", "E", "S", "W"].map((k) => `<span>${markSvg(k)}<b>${CARDINALS[k].name} mark</b><small>pass ${CARDINALS[k].name.toLowerCase()} of it</small></span>`).join("")}</div>`
        if (t.id === "docking") extra = `<div class="hr-tagwant"><img src="${r.tagUrl}" alt="The AR tag to find" width="88" height="88"><span>Find this tag</span></div>`
        if (t.about) extra = `<p class="hr-note">${t.about}</p>`
        if (t.quote) extra = `<p class="hr-note">${t.quote}</p>`
        const rules = [`Par ${t.par} s`, "−1 point a second over par", `buoy touched −${DED.buoy}`]
        if (t.id === "pathfinding") rules.push(`wrong side of a mark −${DED.side}`)
        if (t.id === "collision") rules.push(`too close −${DED.close}`, `wrong side −${DED.side}`, `collision −${DED.hit}`)
        if (t.id === "docking") rules.push(`wrong berth −${DED.berth}`)
        result.innerHTML = `
            <span class="hr-tag">${r.full ? `Full Njord run · ` : ""}Task 0${n}</span>
            <h2>${t.name}</h2>
            <p class="hr-quote">${t.site}</p>
            ${extra}
            <ul class="hr-how">${t.how.map((h) => `<li>${h}</li>`).join("")}</ul>
            <p class="hr-rules">${rules.join(" · ")}</p>
            <div class="hr-btns">
                <button type="button" class="hud-btn hr-main" data-act="go">Start <kbd>Enter</kbd></button>
                <button type="button" class="hud-btn" data-act="list">Tasks</button>
            </div>`
        result.classList.add("is-on", "is-brief")
        r.phase = "brief"
        const goBtn = result.querySelector("[data-act=go]")
        if (goBtn) goBtn.focus({ preventScroll: true })
    }
    function go() {
        if (!run || run.phase !== "brief") return
        result.classList.remove("is-on", "is-brief")
        run.phase = "count"
        run.count = 3.2
        bar.classList.add("is-on")
    }

    function finish() {
        const r = run
        const pts = points(r)
        const was = best[r.id]
        const isBest = was == null || pts > was
        if (isBest) best[r.id] = pts
        const m = medalOf(pts)
        let total = null
        let fullBest = false
        let nextTask = null
        if (r.full) {
            r.full.scores.push({ id: r.id, pts })
            const i = TASKS.indexOf(r.task)
            if (i < TASKS.length - 1) nextTask = TASKS[i + 1]
            else {
                total = r.full.scores.reduce((s, q) => s + q.pts, 0)
                fullBest = best.full == null || total > best.full
                if (fullBest) best.full = total
            }
        }
        saveBest()
        const over = overtime(r)
        const lines = [`<li><span>Time ${fmt(r.time)} · par ${fmt(r.task.par)}</span><b>${over ? "−" + over : "0"}</b></li>`]
        for (const l of r.log.values()) lines.push(`<li><span>${l.label}${l.n > 1 ? ` ×${l.n}` : ""}</span><b>−${l.n * l.pts}</b></li>`)
        if (!r.log.size && !over) lines.push(`<li class="is-clean"><span>Clean run</span><b>✓</b></li>`)
        const n = TASKS.indexOf(r.task) + 1
        let fullHtml = ""
        if (r.full) {
            const sum = r.full.scores.reduce((s, q) => s + q.pts, 0)
            fullHtml = `<div class="hr-full">${TASKS.map((t, k) => {
                const s = r.full.scores.find((q) => q.id === t.id)
                return `<span class="${s ? "" : "is-todo"}"><small>0${k + 1}</small>${s ? s.pts : "–"}</span>`
            }).join("")}<span class="is-sum"><small>Total</small>${sum}</span></div>`
        }
        const endFull = total != null
        result.innerHTML = `
            <span class="hr-tag">${r.full ? "Full Njord run · " : ""}Task 0${n} done</span>
            <h2>${r.task.name}</h2>
            <div class="hr-score">${medalHtml(m, true)}<p class="hr-time"><span data-count="${pts}">0</span><small>/ 100</small></p></div>
            <p class="hr-sub">${m ? `<b>${m.name}</b>` : "No medal this time"}${isBest ? ` · ${was == null ? "First score" : "New best"}` : ` · Best ${was}`}</p>
            <ul class="hr-lines">${lines.join("")}</ul>
            ${fullHtml}
            ${endFull ? `<p class="hr-total">${medalHtml(medalOf(total, 400))}Njord total <b>${total}</b> / 400${fullBest ? " · new best" : ` · best ${best.full}`}</p>` : ""}
            <div class="hr-btns">
                ${nextTask ? `<button type="button" class="hud-btn hr-main" data-act="next">Next: ${nextTask.name}</button>` : `<button type="button" class="hud-btn hr-main" data-act="again">${endFull ? "New run" : "Again"}</button>`}
                <button type="button" class="hud-btn" data-act="list">Tasks</button>
                <button type="button" class="hud-btn" data-act="close">Free drive</button>
            </div>`
        result.classList.add("is-on")
        // the number counts up to the score
        const num = result.querySelector("[data-count]")
        const t0 = performance.now()
        const tick = () => {
            const k = Math.min(1, (performance.now() - t0) / 900)
            num.textContent = String(Math.round(pts * (1 - Math.pow(1 - k, 3))))
            if (k < 1 && num.isConnected) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        const main = result.querySelector(".hr-main")
        if (main) main.focus({ preventScroll: true })
        // the course stays where it is (you may still be in the berth) until you go on
        r.phase = "done"
        marker.visible = false
        ring.visible = false
        drive.state.target = null
        bar.classList.remove("is-on")
        burst(drive.pos.x, drive.pos.z, m ? GREEN : BLUE, 14)
    }

    async function buoy(r, kind, x, z, size = 6.5) {
        const file = kind === "port" ? "buoy-red" : "buoy-green"
        const it = await props.spawn(file, { x, z, size, sink: 0.3, buoy: kind, yaw: Math.random() * 6.28 })
        if (it) r.items.push(it)
        return it
    }
    async function gateBuoys(r, g) {
        await Promise.all([buoy(r, "port", g.a.x, g.a.z), buoy(r, "stbd", g.b.x, g.b.z)])
    }
    const gateStep = (g, label) => ({ kind: "gate", g, label })

    // 01 · a slalom of gates east of the start, with the ring for a 360° turn halfway
    async function buildManoeuvring(r) {
        r.start = { x: 300, z: -200, h: 0 }
        const pts = [[340, -200], [376, -186], [412, -206], [448, -182], { spin: [500, -196] }, [552, -198], [588, -214], [624, -200], [664, -200]]
        const at = (i) => (pts[i].spin ? pts[i].spin : pts[i])
        const jobs = []
        const gates = pts.filter((p) => !p.spin).length
        let k = 0
        for (let i = 0; i < pts.length; i++) {
            if (pts[i].spin) {
                r.steps.push({ kind: "spin", x: at(i)[0], z: at(i)[1], R: 13.5, acc: 0, label: "Turn 360° in the ring" })
                continue
            }
            const p0 = at(Math.max(0, i - 1))
            const p1 = at(Math.min(pts.length - 1, i + 1))
            const g = gate(at(i)[0], at(i)[1], Math.atan2(-(p1[1] - p0[1]), p1[0] - p0[0]), 7.5)
            k++
            r.steps.push(gateStep(g, k === gates ? "Finish gate" : `Gate ${k}/${gates}`))
            jobs.push(gateBuoys(r, g))
        }
        await Promise.all(jobs)
    }

    // 02 · cardinal marks in a weave, then a finish gate; no line to follow
    async function buildPathfinding(r) {
        r.start = { x: 300, z: 200, h: 0 }
        const g0 = gate(325, 200, 0, 9)
        r.steps.push(gateStep(g0, "Start gate"))
        const marks = [
            ["N", 350, 200],
            ["S", 405, 200],
            ["N", 460, 200],
            ["E", 500, 165],
            ["W", 480, 105],
        ]
        marks.forEach(([kind, x, z], i) => {
            const it = props.adopt(cardinalMesh(kind), { x, z, yaw: Math.random() * 6.28, k: 1.1, buoy: "cardinal", r: 1.9, lift: -0.15 })
            r.items.push(it)
            r.steps.push({ kind: "mark", type: kind, x, z, label: `Mark ${i + 1}/5` })
        })
        const g1 = gate(458, 60, Math.PI / 2, 10)
        r.steps.push(gateStep(g1, "Finish gate"))
        await Promise.all([gateBuoys(r, g0), gateBuoys(r, g1)])
    }

    // 03 · a straight line of gates; the Otter crosses from starboard, then meets you head on
    async function buildCollision(r) {
        r.start = { x: -140, z: -300, h: 0 }
        const gs = [gate(-100, -300, 0, 9), gate(120, -300, 0, 9), gate(330, -300, 0, 11)]
        r.steps.push(gateStep(gs[0], "Start gate"), gateStep(gs[1], "Gate 2/3"), gateStep(gs[2], "Finish gate"))
        r.steps[0].onPass = () => launch(r, 0)
        r.steps[1].onPass = () => launch(r, 1)
        await Promise.all(gs.map((g) => gateBuoys(r, g)))
        if (run !== r) return
        // A waits north of the line and runs south across it at x = 20; B waits east and runs west along it
        const waits = [
            { x: 20, z: -228, h: Math.PI / 2 },
            { x: 420, z: -300, h: Math.PI },
        ]
        for (const w of waits) {
            const { group: o, light } = otterMesh()
            const it = props.adopt(o, { x: w.x, z: w.z, yaw: w.h, k: 1.0, lift: -0.05 })
            r.items.push(it)
            const box = { x: w.x, z: w.z, hx: 3.1, hz: 2.1, rot: w.h }
            colliders.push(box)
            r.otters.push({ it, box, light, x: w.x, z: w.z, h: w.h, v: 0, d: Infinity, on: false, gone: false, judged: false, close: false, hit: false })
        }
    }
    function launch(r, k) {
        const o = r.otters[k]
        if (!o || o.on) return
        o.on = true
        if (k === 0) {
            // timed to reach the crossing just as you would at full speed: you have to give way
            const T = Math.max(1, 20 - drive.pos.x) / Math.max(7, Math.abs(drive.speed))
            o.v = THREE.MathUtils.clamp((o.z + 300) / T, 5, 10)
            say("Vessel crossing from starboard", "", 2.4)
        } else {
            o.v = 7
            say("Vessel ahead, head on", "", 2.4)
        }
    }

    // 04 · a floating dock with four berths and four AR tags; one of them is yours
    async function buildDocking(r) {
        r.start = { x: -120, z: 300, h: 0 }
        const M = materials()
        const deck = withAir(new THREE.MeshStandardMaterial({ map: plankTexture(), roughness: 0.85 }))
        const add = (x, z, hx, hz) => {
            const len = Math.max(hx, hz) * 2
            const geo = new THREE.BoxGeometry(hx * 2, 0.35, hz * 2)
            // the planks run across the walkway
            const uv = geo.attributes.uv
            for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * (hx > hz ? len / 8 : 1), uv.getY(i) * (hz > hx ? len / 8 : 1))
            const m = new THREE.Mesh(geo, deck)
            m.position.set(x, 0.5, z)
            const f = new THREE.Mesh(new THREE.BoxGeometry(hx * 2 - 0.2, 0.6, hz * 2 - 0.2), M.dark)
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
        const order = [0, 1, 2, 3].sort(() => Math.random() - 0.5)
        for (let k = 0; k < 4; k++) {
            const z = 300 + (k - 1.5) * W
            const canvas = tagCanvas(CODES[order[k]])
            // the tag on a post at the head of each berth
            const tag = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 2.6), withAir(new THREE.MeshStandardMaterial({ map: tagTexture(canvas), roughness: 0.6 })))
            tag.position.set(1.0, 2.6, z)
            tag.rotation.y = -Math.PI / 2
            const post = new THREE.Mesh(new THREE.BoxGeometry(0.25, 2.4, 0.25), M.dark)
            post.position.set(1.15, 1.5, z)
            group.add(tag, post)
            r.objs.push(tag, post)
            r.berths.push({ z, canvas, told: false })
        }
        r.want = Math.floor(Math.random() * 4)
        r.tagUrl = r.berths[r.want].canvas.toDataURL()
        r.hold = 0
        r.wrongHold = 0
        r.steps.push({ kind: "dock", x: -14, z: 300, label: "Find the tag" })
    }

    // where the marker and the compass point
    function aim() {
        if (!run) return
        const s = run.steps[run.i]
        ring.visible = false
        if (!s) {
            marker.visible = false
            drive.state.target = null
            return
        }
        marker.visible = true
        lineHolder.visible = s.kind === "gate"
        chevY = s.kind === "mark" ? 13 : 7.5
        if (s.kind === "gate") {
            marker.position.set(s.g.x, 0, s.g.z)
            lineHolder.rotation.y = s.g.h + Math.PI / 2
            line.scale.set(s.g.half * 2, 1, 1)
        } else marker.position.set(s.x, 0, s.z)
        if (s.kind === "spin") {
            ring.visible = true
            ring.position.set(s.x, 0.3, s.z)
            ringMat.uniforms.uP.value = 0
            s.acc = 0
        }
        drive.state.target = { x: marker.position.x, z: marker.position.z }
    }
    function stepLabel(r) {
        const s = r.steps[r.i]
        if (!s) return ""
        if (s.kind === "mark") return `<span class="hmb-mark">${markSvg(s.type)}</span>${s.label}<span class="hmb-hint"> · ${CARDINALS[s.type].name} mark: pass ${CARDINALS[s.type].name.toLowerCase()} of it</span>`
        if (s.kind === "spin") return `<span class="hmb-hint">${s.label} · </span><b>${Math.min(360, Math.round((Math.abs(s.acc) * 180) / Math.PI))}° / 360°</b>`
        if (s.kind === "dock") return `<img class="hmb-tag" src="${r.tagUrl}" alt="" width="22" height="22">${r.inBerth ? "Stop and hold" : s.label}`
        const near = r.otters.filter((o) => o.on && !o.gone).reduce((m, o) => Math.min(m, o.d), Infinity)
        if (near < 90) return `${s.label} · Otter <b class="${near < SAFE ? "is-bad" : ""}">${toM(Math.max(0, near - 6))}</b>`
        return s.label
    }
    function advance(r, x, z, msg, color = GREEN) {
        const s = r.steps[r.i]
        if (s && s.onPass) s.onPass()
        r.i++
        burst(x, z, color)
        if (r.i >= r.steps.length) return finish()
        say(msg, "good", 0.8)
        aim()
    }

    // ---- every frame ----
    let opened = false
    let lastHeading = 0
    function update(t, dt, exposure = 1) {
        const gain = 1 / Math.max(exposure, 0.5)
        // the bursts spread and fade
        for (let i = bursts.length - 1; i >= 0; i--) {
            const b = bursts[i]
            b.t += dt
            const k = Math.min(1, b.t / 1.1)
            b.m.scale.setScalar(b.size * (0.35 + k * 1.9))
            b.m.material.color.copy(b.color).multiplyScalar(gain * 1.6 * (1 - k) * (1 - k))
            if (k >= 1) {
                group.remove(b.m)
                b.m.material.dispose()
                bursts.splice(i, 1)
            }
        }
        if (!drive.active) {
            if (run) clear()
            panel.classList.remove("is-on")
            result.classList.remove("is-on", "is-brief")
            opened = false
            return
        }
        // the game page opens with the list
        if (isGame && !opened && !window.__noPanel) {
            opened = true
            setTimeout(() => !run && drive.active && openPanel(true, false), 1400)
        }
        if (flash.classList.contains("is-on") && performance.now() / 1000 > flashUntil) flash.classList.remove("is-on")

        // the marker bobs and glows; the pillar is for finding it from afar, close by it steps back
        const near = marker.visible ? Math.hypot(marker.position.x - drive.pos.x, marker.position.z - drive.pos.z) : 0
        pillarMat.uniforms.uCol.value.copy(BLUE).multiplyScalar(0.22 * gain * THREE.MathUtils.smoothstep(near, 12, 45))
        pillarMat.uniforms.uTime.value = t
        lineMat.uniforms.uCol.value.copy(BLUE).multiplyScalar(0.6 * gain)
        lineMat.uniforms.uTime.value = t
        chevMat.color.copy(BLUE).multiplyScalar(1.4 * gain)
        ringMat.uniforms.uCol.value.copy(VIOLET).multiplyScalar(0.75 * gain)
        ringMat.uniforms.uTime.value = t
        if (marker.visible) {
            const h = waveHeight(marker.position.x, marker.position.z, t, 1) * 0.8
            chev.position.y = chevY + Math.sin(t * 2.4) * 0.5
            chev.rotation.y = t * 1.5
            lineHolder.position.y = h + 0.12
        }
        if (ring.visible) ring.position.y = waveHeight(ring.position.x, ring.position.z, t, 1) * 0.8 + 0.15
        if (!run || !run.start) return
        const r = run
        const p = drive.pos

        // the Otters move once they have been sent off (also after the finish)
        for (const o of r.otters) {
            if (o.on && !o.gone) {
                o.x += Math.cos(o.h) * o.v * dt
                o.z -= Math.sin(o.h) * o.v * dt
                if (o.z < -520 || o.x < -220) o.gone = true
            }
            o.it.x = o.box.x = o.x
            o.it.z = o.box.z = o.z
            o.it.yaw = o.box.rot = o.h
            o.light.material.color.setRGB(1, 0.69, 0.19).multiplyScalar(Math.sin(t * 6) > 0.2 ? 2.2 * gain : 0.15)
        }
        if (r.phase !== "count" && r.phase !== "go") {
            prev.set(p.x, p.z)
            lastHeading = drive.heading
            return
        }

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
            lastHeading = drive.heading
            setStep(stepLabel(r))
            return
        }

        r.time += dt
        barTime.textContent = fmt(r.time)

        // buoys touched
        for (const b of r.buoys) {
            if (b.hits > 0) {
                b.hits = 0
                deduct(r, "buoy", "Buoy touched", DED.buoy, "Buoy touched")
            }
        }

        // the Otters: distance, collisions, and which side you passed them
        for (const o of r.otters) {
            o.d = Math.hypot(p.x - o.x, p.z - o.z)
            if (!o.on) continue
            if (o.d < SAFE && !o.close) {
                o.close = true
                deduct(r, "close", "Too close to the Otter", DED.close, "Too close")
            }
            const c = Math.abs(Math.cos(o.h))
            const sn = Math.abs(Math.sin(o.h))
            const ex = c * o.box.hx + sn * o.box.hz
            const ez = sn * o.box.hx + c * o.box.hz
            if (!o.hit && Math.abs(p.x - o.x) < ex + 3.3 && Math.abs(p.z - o.z) < ez + 3.3) {
                o.hit = true
                deduct(r, "hit", "Collision with the Otter", DED.hit, "Collision")
            }
        }
        const A = r.otters[0]
        if (A && A.on && !A.judged && prev.x < 20 && p.x >= 20) {
            // you crossed its track: behind it (good), or ahead of it while it was close?
            A.judged = true
            if (A.z > p.z && A.z - p.z < 48) deduct(r, "side", "Crossed ahead of the Otter", DED.side, "Pass behind a vessel from starboard")
            else if (A.z <= p.z) say("Passed behind it", "good", 1.2)
        }
        const B = r.otters[1]
        if (B && B.on && !B.judged && B.x <= p.x) {
            // it went past: on your port side (good) or your starboard side?
            B.judged = true
            const dz = p.z - B.z
            if (dz < 0 && dz > -40) deduct(r, "side2", "Passed starboard to starboard", DED.side, "Keep to starboard: port to port")
            else if (dz >= 0 && dz < 40) say("Port to port", "good", 1.2)
        }

        // the step you are on
        const s = r.steps[r.i]
        if (s && s.kind === "gate") {
            if (crossed(s.g, prev.x, prev.y, p.x, p.z)) advance(r, s.g.x, s.g.z, s.label === "Start gate" ? "Start" : "Gate")
        } else if (s && s.kind === "spin") {
            let dh = drive.heading - lastHeading
            dh = Math.atan2(Math.sin(dh), Math.cos(dh))
            const inside = Math.hypot(p.x - s.x, p.z - s.z) < s.R
            if (inside) s.acc += dh
            else if (Math.abs(s.acc) > 0.4) {
                s.acc = 0
                say("Stay in the ring", "bad", 1.2)
            } else s.acc = 0
            ringMat.uniforms.uP.value = Math.min(1, Math.abs(s.acc) / (Math.PI * 2))
            if (Math.abs(s.acc) >= Math.PI * 2) {
                ring.visible = false
                advance(r, s.x, s.z, "360°", VIOLET)
            }
        } else if (s && s.kind === "mark") {
            const c = CARDINALS[s.type]
            const L = 60
            const safe = segCross(prev.x, prev.y, p.x, p.z, s.x, s.z, s.x + c.dir[0] * L, s.z + c.dir[1] * L)
            const wrong = segCross(prev.x, prev.y, p.x, p.z, s.x, s.z, s.x - c.dir[0] * L, s.z - c.dir[1] * L)
            if (safe) advance(r, s.x, s.z, `${c.name} mark ✓`)
            else if (wrong) {
                deduct(r, "side", "Wrong side of a mark", DED.side, `Wrong side: pass ${c.name.toLowerCase()} of a ${c.name.toLowerCase()} mark`)
                r.i++
                burst(s.x, s.z, RED)
                if (r.i >= r.steps.length) return finish()
                aim()
            }
        } else if (s && s.kind === "dock") {
            // stopped in the right berth, bow in
            const inBerth = (bz) => p.x > -12 && p.x < -3 && Math.abs(p.z - bz) < 5.2
            const bowIn = Math.cos(drive.heading) > 0.82
            const slow = drive.vel.length() < 1.1
            const right = r.berths[r.want]
            r.inBerth = inBerth(right.z)
            // the tags are for reading close up: there the marker leaves you to it
            marker.visible = Math.hypot(p.x + 14, p.z - 300) > 46
            if (r.inBerth) {
                if (bowIn && slow) {
                    r.hold += dt
                    if (r.hold > 1.2) {
                        r.i++
                        return finish()
                    }
                } else r.hold = 0
            } else {
                r.hold = 0
                const wrong = r.berths.find((b, k) => k !== r.want && inBerth(b.z))
                if (wrong && slow) {
                    r.wrongHold += dt
                    if (r.wrongHold > 0.8 && !wrong.told) {
                        wrong.told = true
                        deduct(r, "berth", "Wrong berth", DED.berth, "Wrong berth: look at the tag")
                    }
                } else r.wrongHold = 0
            }
        }
        const pts = points(r)
        barPts.textContent = String(pts)
        bar.classList.toggle("is-low", pts < 50)
        setStep(stepLabel(r))
        prev.set(p.x, p.z)
        lastHeading = drive.heading
    }

    return {
        group,
        colliders,
        update,
        begin,
        go,
        openPanel,
        tasks: TASKS,
        get busy() {
            return !!run && run.phase !== "done"
        },
        get run() {
            return run
        },
    }
}
