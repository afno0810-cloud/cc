import * as THREE from "three"
import { waveHeight } from "./world/waves.js"
import { CARDINALS } from "./taskart.js"

/* ================================================================
   Autonomous mode: Argus sails on its own, the way the Argus page
   describes it, from what the sensors see to the propellers:
   - what is around the boat (the quays, the boats, the buoys, the
     Otter) goes into a cost map of the water: blocked close to
     things, dearer near them (shown as a small map in the panel),
   - a planner finds the cheapest way across it (the line on the
     water) and plans again every moment, as things move,
   - a small state machine decides what to do now (follow the course,
     give way to a boat from starboard, keep to starboard when one
     comes head on, go round a boat, dock, turn 360°),
   - and the steering follows the line.
   It can take a tour of the places not yet seen, go to one place, or
   sail the Njord tasks itself. Any drive key takes the helm back.
   ================================================================ */

const R_BOAT = 5.0 // blocked this close to the edge of a thing (half the boat's width and some)
const R_BUOY = 3.6
const SOFT = 9 // and dearer for this much further out
const PIPE = ["Stereo camera and LiDAR", "Kongsberg Seapath 130", "Cost map", "State machine", "Field D*", "Pixhawk"]
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
const wrap = (a) => Math.atan2(Math.sin(a), Math.cos(a))
const clamp = (v, a, b) => Math.max(a, Math.min(b, v))

// ---- a small binary heap for the planner ----
class Heap {
    constructor() {
        this.k = []
        this.v = []
    }
    push(key, val) {
        const k = this.k
        const v = this.v
        let i = k.length
        k.push(key)
        v.push(val)
        while (i > 0) {
            const p = (i - 1) >> 1
            if (k[p] <= k[i]) break
            ;[k[p], k[i]] = [k[i], k[p]]
            ;[v[p], v[i]] = [v[i], v[p]]
            i = p
        }
    }
    pop() {
        const k = this.k
        const v = this.v
        const top = v[0]
        const lk = k.pop()
        const lv = v.pop()
        if (k.length) {
            k[0] = lk
            v[0] = lv
            let i = 0
            for (;;) {
                const l = i * 2 + 1
                const r = l + 1
                let m = i
                if (l < k.length && k[l] < k[m]) m = l
                if (r < k.length && k[r] < k[m]) m = r
                if (m === i) break
                ;[k[m], k[i]] = [k[i], k[m]]
                ;[v[m], v[i]] = [v[i], v[m]]
                i = m
            }
        }
        return top
    }
    get size() {
        return this.k.length
    }
}

export function createAutopilot({ scene, drive, missions, places, score, getColliders, getObstacles, getBuoys, getMovers, getPlayers = () => null, landHeight, lowPower = false }) {
    const group = new THREE.Group()
    scene.add(group)

    // ================= the planner =================
    let grid = null // the last cost map: { minX, minZ, cell, W, H, cost }
    function buildGrid(sx, sz, gx, gz) {
        const pad = 70
        const minX = Math.min(sx, gx) - pad
        const maxX = Math.max(sx, gx) + pad
        const minZ = Math.min(sz, gz) - pad
        const maxZ = Math.max(sz, gz) + pad
        let cell = 3
        const cap = lowPower ? 22000 : 42000
        while (((maxX - minX) / cell) * ((maxZ - minZ) / cell) > cap) cell *= 1.2
        const W = Math.ceil((maxX - minX) / cell)
        const H = Math.ceil((maxZ - minZ) / cell)
        const cost = new Float32Array(W * H).fill(1)
        const paint = (cx, cz, reach, distAt, r0) => {
            const ext = reach + r0 + SOFT
            const i0 = Math.max(0, Math.floor((cx - ext - minX) / cell))
            const i1 = Math.min(W - 1, Math.ceil((cx + ext - minX) / cell))
            const j0 = Math.max(0, Math.floor((cz - ext - minZ) / cell))
            const j1 = Math.min(H - 1, Math.ceil((cz + ext - minZ) / cell))
            for (let j = j0; j <= j1; j++)
                for (let i = i0; i <= i1; i++) {
                    const x = minX + (i + 0.5) * cell
                    const z = minZ + (j + 0.5) * cell
                    const d = distAt(x, z)
                    const n = j * W + i
                    if (d < r0) cost[n] = Infinity
                    else if (d < r0 + SOFT) {
                        const k = 1 - (d - r0) / SOFT
                        cost[n] = Math.max(cost[n], 1 + 8 * k * k)
                    }
                }
        }
        const inside = (x, z, r) => x + r > minX && x - r < maxX && z + r > minZ && z - r < maxZ
        // boxes: quays, wharves, boats, the dock, the Otter
        for (const list of getColliders())
            for (const b of list) {
                const reach = b.hx + b.hz
                if (!inside(b.x, b.z, reach + R_BOAT + SOFT)) continue
                const cr = Math.cos(b.rot)
                const sr = Math.sin(b.rot)
                paint(
                    b.x,
                    b.z,
                    reach,
                    (x, z) => {
                        const dx = x - b.x
                        const dz = z - b.z
                        const lx = Math.abs(dx * cr - dz * sr) - b.hx
                        const lz = Math.abs(dx * sr + dz * cr) - b.hz
                        return Math.hypot(Math.max(lx, 0), Math.max(lz, 0))
                    },
                    R_BOAT
                )
            }
        // round things: rocks; buoys and posts (a little less room)
        for (const o of getObstacles()) if (inside(o.x, o.z, o.r + R_BOAT + SOFT)) paint(o.x, o.z, o.r, (x, z) => Math.hypot(x - o.x, z - o.z) - o.r, R_BOAT)
        for (const o of getBuoys()) if (inside(o.x, o.z, o.r + R_BUOY + SOFT)) paint(o.x, o.z, o.r, (x, z) => Math.hypot(x - o.x, z - o.z) - o.r, R_BUOY)
        // boats on the move: where they are and where they will be in a few seconds
        for (const m of getMovers()) {
            for (const ahead of [0, 2.5, 5]) {
                const x = m.x + m.vx * ahead
                const z = m.z + m.vz * ahead
                if (inside(x, z, m.r + R_BOAT + SOFT)) paint(x, z, m.r, (px, pz) => Math.hypot(px - x, pz - z) - m.r, R_BOAT)
            }
        }
        // the shore, far out
        for (let j = 0; j < H; j += 1)
            for (let i = 0; i < W; i += 1) {
                const x = minX + (i + 0.5) * cell
                const z = minZ + (j + 0.5) * cell
                if (x * x + z * z > 1000 * 1000 && landHeight(x, z) > -2) cost[j * W + i] = Infinity
            }
        return { minX, minZ, cell, W, H, cost }
    }
    const cellOf = (g, x, z) => [clamp(Math.floor((x - g.minX) / g.cell), 0, g.W - 1), clamp(Math.floor((z - g.minZ) / g.cell), 0, g.H - 1)]
    const center = (g, i, j) => [g.minX + (i + 0.5) * g.cell, g.minZ + (j + 0.5) * g.cell]
    function nearestFree(g, i, j) {
        for (let r = 0; r < 12; r++)
            for (let dj = -r; dj <= r; dj++)
                for (let di = -r; di <= r; di++) {
                    if (Math.max(Math.abs(di), Math.abs(dj)) !== r) continue
                    const a = i + di
                    const b = j + dj
                    if (a >= 0 && b >= 0 && a < g.W && b < g.H && Number.isFinite(g.cost[b * g.W + a])) return [a, b]
                }
        return [i, j]
    }
    // a straight line across the map that stays clear of the dear parts
    function clearLine(g, x0, z0, x1, z1) {
        const n = Math.ceil(Math.hypot(x1 - x0, z1 - z0) / (g.cell * 0.5))
        for (let k = 0; k <= n; k++) {
            const [i, j] = cellOf(g, x0 + ((x1 - x0) * k) / n, z0 + ((z1 - z0) * k) / n)
            if (g.cost[j * g.W + i] > 1.6) return false
        }
        return true
    }
    function plan(sx, sz, gx, gz) {
        const g = buildGrid(sx, sz, gx, gz)
        grid = g
        let [si, sj] = cellOf(g, sx, sz)
        // the boat may sit close to something (a dock, a buoy): let it leave
        for (let dj = -2; dj <= 2; dj++)
            for (let di = -2; di <= 2; di++) {
                const a = si + di
                const b = sj + dj
                if (a >= 0 && b >= 0 && a < g.W && b < g.H && !Number.isFinite(g.cost[b * g.W + a])) g.cost[b * g.W + a] = 6
            }
        let [ti, tj] = nearestFree(g, ...cellOf(g, gx, gz))
        const N = g.W * g.H
        const best = new Float32Array(N).fill(Infinity)
        const from = new Int32Array(N).fill(-1)
        const done = new Uint8Array(N)
        const start = sj * g.W + si
        const goal = tj * g.W + ti
        best[start] = 0
        const heap = new Heap()
        const h = (i, j) => {
            const dx = Math.abs(i - ti)
            const dz = Math.abs(j - tj)
            return (Math.max(dx, dz) + 0.4142 * Math.min(dx, dz)) * g.cell
        }
        heap.push(h(si, sj), start)
        const D = [
            [1, 0, 1],
            [-1, 0, 1],
            [0, 1, 1],
            [0, -1, 1],
            [1, 1, 1.4142],
            [1, -1, 1.4142],
            [-1, 1, 1.4142],
            [-1, -1, 1.4142],
        ]
        let found = false
        let steps = 0
        while (heap.size && steps < 200000) {
            steps++
            const n = heap.pop()
            if (done[n]) continue
            done[n] = 1
            if (n === goal) {
                found = true
                break
            }
            const i = n % g.W
            const j = (n / g.W) | 0
            for (const [di, dj, len] of D) {
                const a = i + di
                const b = j + dj
                if (a < 0 || b < 0 || a >= g.W || b >= g.H) continue
                const m = b * g.W + a
                const c = g.cost[m]
                if (!Number.isFinite(c) || done[m]) continue
                // no cutting a corner past something
                if (di && dj && (!Number.isFinite(g.cost[j * g.W + a]) || !Number.isFinite(g.cost[b * g.W + i]))) continue
                const nb = best[n] + len * g.cell * (c + g.cost[n]) * 0.5
                if (nb < best[m]) {
                    best[m] = nb
                    from[m] = n
                    heap.push(nb + h(a, b), m)
                }
            }
        }
        if (!found) return null
        const cells = []
        for (let n = goal; n !== -1; n = from[n]) cells.push(n)
        cells.reverse()
        const pts = cells.map((n) => center(g, n % g.W, (n / g.W) | 0))
        pts[0] = [sx, sz]
        pts[pts.length - 1] = [gx, gz]
        // pull the line straight where the water is clear
        const out = [pts[0]]
        let i = 0
        while (i < pts.length - 1) {
            let j = pts.length - 1
            while (j > i + 1 && !clearLine(g, pts[i][0], pts[i][1], pts[j][0], pts[j][1])) j--
            out.push(pts[j])
            i = j
        }
        return out
    }

    // ================= what you see =================
    // the cost map: a small map in the panel (north up), not a grid on the water
    const MAP = 120 // units across
    const PX = 160
    const mapCanvas = document.createElement("canvas")
    mapCanvas.width = mapCanvas.height = PX
    mapCanvas.className = "ha-map"
    mapCanvas.setAttribute("aria-hidden", "true")
    const mapCtx = mapCanvas.getContext("2d")
    const mapAt = { x: 0, z: 0 }
    function drawMap(cx, cz) {
        mapAt.x = cx
        mapAt.z = cz
        const g = grid
        mapCtx.clearRect(0, 0, PX, PX)
        if (!g) return
        const u = MAP / PX
        const step = Math.max(1, Math.round(g.cell / u))
        for (let py = 0; py < PX; py += step)
            for (let px = 0; px < PX; px += step) {
                // the plane lies flat: its +y is world -z
                const x = cx - MAP / 2 + (px + step / 2) * u
                const z = cz - MAP / 2 + (py + step / 2) * u
                const i = Math.floor((x - g.minX) / g.cell)
                const j = Math.floor((z - g.minZ) / g.cell)
                if (i < 0 || j < 0 || i >= g.W || j >= g.H) continue
                const c = g.cost[j * g.W + i]
                const r = Math.hypot(px - PX / 2, py - PX / 2) / (PX / 2)
                const fade = clamp(1.15 - r, 0, 1)
                if (!Number.isFinite(c)) mapCtx.fillStyle = `rgba(255, 70, 60, ${0.75 * fade})`
                else if (c > 1.05) {
                    const k = clamp((c - 1) / 8, 0, 1)
                    mapCtx.fillStyle = `rgba(${Math.round(150 + 105 * k)}, ${Math.round(110 + 40 * (1 - k))}, ${Math.round(240 - 180 * k)}, ${(0.18 + 0.5 * k) * fade})`
                } else mapCtx.fillStyle = `rgba(110, 200, 255, ${0.05 * fade})`
                mapCtx.fillRect(px, py, step - 1, step - 1)
            }
        // Argus in the middle
        mapCtx.fillStyle = "#e8fdff"
        mapCtx.beginPath()
        mapCtx.arc(PX / 2, PX / 2, 3.2, 0, Math.PI * 2)
        mapCtx.fill()
    }
    // the planned way: a bright dashed line on the water
    const PATH_N = 400
    const pathPos = new Float32Array(PATH_N * 2 * 3)
    const pathUv = new Float32Array(PATH_N * 2 * 2)
    const pathGeo = new THREE.BufferGeometry()
    pathGeo.setAttribute("position", new THREE.BufferAttribute(pathPos, 3))
    pathGeo.setAttribute("uv", new THREE.BufferAttribute(pathUv, 2))
    const pathIdx = []
    for (let i = 0; i < PATH_N - 1; i++) pathIdx.push(i * 2, i * 2 + 1, i * 2 + 2, i * 2 + 1, i * 2 + 3, i * 2 + 2)
    pathGeo.setIndex(pathIdx)
    pathGeo.setDrawRange(0, 0)
    const pathMat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        uniforms: { uTime: { value: 0 }, uGain: { value: 1 } },
        vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: /* glsl */ `uniform float uTime; uniform float uGain; varying vec2 vUv;
            void main(){
                // a soft line of light (no hard edges or blocks), with pulses running along it
                float across = 1.0 - abs(vUv.y - 0.5) * 2.0;
                float core = across * across * across;
                float flow = 0.5 + 0.5 * smoothstep(0.1, 0.9, 0.5 + 0.5 * sin(vUv.x * 0.8 - uTime * 6.0));
                float ends = smoothstep(2.0, 12.0, vUv.x);
                vec3 c = mix(vec3(0.35, 0.95, 1.0), vec3(0.75, 0.6, 1.0), clamp(vUv.x / 300.0, 0.0, 1.0));
                gl_FragColor = vec4(c * core * flow * ends * 0.75 * uGain, 1.0);
            }`,
    })
    const pathMesh = new THREE.Mesh(pathGeo, pathMat)
    pathMesh.frustumCulled = false
    pathMesh.renderOrder = 2
    group.add(pathMesh)
    let pathSamples = [] // [x, z, sx, sz, along]
    function layPath(pts) {
        pathSamples = []
        if (!pts || pts.length < 2) {
            pathGeo.setDrawRange(0, 0)
            return
        }
        // even steps along the line
        let along = 0
        for (let k = 0; k < pts.length - 1 && pathSamples.length < PATH_N; k++) {
            const [x0, z0] = pts[k]
            const [x1, z1] = pts[k + 1]
            const len = Math.hypot(x1 - x0, z1 - z0)
            const n = Math.max(1, Math.ceil(len / 2.5))
            const sx = -(z1 - z0) / (len || 1)
            const sz = (x1 - x0) / (len || 1)
            for (let i = 0; i < n && pathSamples.length < PATH_N; i++) {
                const f = i / n
                pathSamples.push([x0 + (x1 - x0) * f, z0 + (z1 - z0) * f, sx, sz, along + len * f])
            }
            along += len
        }
        const last = pts[pts.length - 1]
        const pl = pathSamples[pathSamples.length - 1]
        if (pathSamples.length < PATH_N) pathSamples.push([last[0], last[1], pl[2], pl[3], along])
        for (let i = 0; i < pathSamples.length; i++) pathUv.set([pathSamples[i][4], 0, pathSamples[i][4], 1], i * 4)
        pathGeo.attributes.uv.needsUpdate = true
        pathGeo.setDrawRange(0, (pathSamples.length - 1) * 6)
    }
    // the goal: a ring that pulses
    const goalMat = new THREE.MeshBasicMaterial({ color: 0x7ff0ff, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide })
    const goalMesh = new THREE.Mesh(new THREE.RingGeometry(3.2, 3.8, 48), goalMat)
    goalMesh.rotation.x = -Math.PI / 2
    goalMesh.visible = false
    group.add(goalMesh)

    // ================= the HUD =================
    const hud = drive.hud
    const btn = document.createElement("button")
    btn.type = "button"
    btn.className = "hud-btn hud-autobtn"
    btn.innerHTML = `<i class="ha-led" aria-hidden="true"></i>Autonomous <kbd>G</kbd>`
    const placesBtn = [...drive.actions.children].find((b) => /Places/.test(b.textContent))
    if (placesBtn) placesBtn.after(btn)
    else drive.actions.prepend(btn)

    const box = document.createElement("div")
    box.className = "hud-auto"
    box.setAttribute("aria-live", "polite")
    box.innerHTML = `
        <div class="ha-head"><span class="ha-badge"><i></i>Autonomous</span><button type="button" class="hud-btn ha-stop">Take the helm</button></div>
        <p class="ha-state">Planning</p>
        <p class="ha-goal"></p>
        <ol class="ha-pipe">${PIPE.map((p) => `<li>${p}</li>`).join("")}</ol>
        <p class="ha-stats"></p>`
    hud.appendChild(box)
    box.querySelector(".ha-pipe").after(mapCanvas)
    const stateEl = box.querySelector(".ha-state")
    const goalEl = box.querySelector(".ha-goal")
    const statsEl = box.querySelector(".ha-stats")
    const pipeEls = [...box.querySelectorAll(".ha-pipe li")]
    box.querySelector(".ha-stop").addEventListener("click", () => stop("You have the helm"))

    // the menu
    const panel = document.createElement("div")
    panel.className = "hud-missions hud-autom"
    panel.setAttribute("role", "dialog")
    panel.setAttribute("aria-label", "Autonomous")
    hud.appendChild(panel)
    drive.addMenu(panel)
    function renderMenu() {
        const tasks = missions.tasks
        const groups = places.groups
        const left = places.list.filter((p) => !places.isVisited(p.id)).length
        panel.innerHTML = `
            <div class="hm-head">
                <div><span class="hm-kicker">No one at the wheel</span><h2>Autonomous</h2></div>
                ${mode ? `<button type="button" class="hud-btn" data-auto="stop">Take the helm</button>` : ""}
            </div>
            <p class="hm-intro">Argus is our first autonomous surface vessel. It finds its way on the water with no one at the wheel.</p>
            <ol class="hm-list ha-list">
                <li><button type="button" class="hm-item" data-auto="tour"><span class="hm-icon ha-ic">${ICON.tour}</span><span class="hm-body"><b>Tour the harbour</b><span>${left ? `Argus sails to the ${left} places you have not seen, one after another.` : "Argus sails round all the places again."}</span></span></button></li>
                <li><button type="button" class="hm-item" data-auto="near"><span class="hm-icon ha-ic">${ICON.near}</span><span class="hm-body"><b>The nearest new place</b><span>Plans a way there round everything in between.</span></span></button></li>
            </ol>
            <section class="hp-group" style="--gc: #f2c230"><h3><span>Njord tasks on its own</span><small>you watch</small></h3>
                <ol class="hm-list hp-list">
                    ${tasks.map((t, i) => `<li><button type="button" class="hm-item" data-auto="task:${t.id}"><span class="hp-dot">0${i + 1}</span><span class="hm-body"><b>${t.name}</b></span></button></li>`).join("")}
                    <li><button type="button" class="hm-item" data-auto="full"><span class="hp-dot">★</span><span class="hm-body"><b>Full Njord run</b></span></button></li>
                </ol>
            </section>
            ${playersMenu()}
            ${groups
                .map(
                    (gr) => `<section class="hp-group" style="--gc: ${gr.color}"><h3><span>Go to: ${esc(gr.name)}</span></h3>
                <ol class="hm-list hp-list">${places.list
                    .filter((p) => p.group === gr.id)
                    .map((p) => `<li><button type="button" class="hm-item${places.isVisited(p.id) ? " is-done" : ""}" data-auto="go:${p.id}"><span class="hm-body"><b>${esc(p.title)}</b></span></button></li>`)
                    .join("")}</ol></section>`
                )
                .join("")}
            <div class="hm-foot"><span class="hud-keyhint" aria-hidden="true"><kbd>↑</kbd><kbd>↓</kbd> choose <kbd>Enter</kbd> go <kbd>Esc</kbd> close</span><span class="ha-note">Any drive key takes the helm back</span></div>`
    }
    // the other players online: sail over to one of them
    function playersMenu() {
        const list = getPlayers()
        if (!list) return ""
        const p0 = drive.pos
        const items = list
            .map((pl) => ({ pl, d: Math.hypot(pl.x - p0.x, pl.z - p0.z) }))
            .sort((a, b) => a.d - b.d)
            .map(({ pl, d }) => `<li><button type="button" class="hm-item" data-auto="player:${esc(pl.id)}"><span class="hp-dot ha-player" style="background:${esc(pl.color)}" aria-hidden="true"></span><span class="hm-body"><b>${esc(pl.name)}</b><span>${Math.round(d * 0.3)} m away</span></span></button></li>`)
            .join("")
        return `<section class="hp-group" style="--gc: #7cc4ff"><h3><span>Go to: players online</span><small>${list.length || "none"}</small></h3>
                <ol class="hm-list hp-list">${items || `<li><p class="ha-none">No one else is on the water right now. When someone comes online, they show up here.</p></li>`}</ol></section>`
    }
    const ICON = {
        tour: `<svg class="ti-svg" viewBox="0 0 40 40" aria-hidden="true"><path d="M8 30c0-8 8-6 12-12s12-6 12-12" fill="none" stroke="#7ff0ff" stroke-width="2" stroke-dasharray="3 3"/><circle cx="8" cy="31" r="3" fill="#c39cf0"/><circle cx="20" cy="18" r="3" fill="#f2c230"/><circle cx="32" cy="7" r="3" fill="#9fd4ff"/></svg>`,
        near: `<svg class="ti-svg" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="13" fill="none" stroke="#7ff0ff" stroke-width="1.6" stroke-dasharray="2 3"/><path d="M20 32V12m-5 5 5-5 5 5" fill="none" stroke="#e8eef8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    }
    function openMenu(on, focus = true) {
        if (on) {
            renderMenu()
            panel.scrollTop = 0
        }
        panel.classList.toggle("is-on", on)
        if (on && focus) {
            const f = panel.querySelector(".hm-item")
            if (f) f.focus({ preventScroll: true })
        }
    }
    btn.addEventListener("click", () => openMenu(!panel.classList.contains("is-on")))
    panel.addEventListener("click", (e) => {
        const b = e.target.closest("[data-auto]")
        if (!b) return
        const a = b.dataset.auto
        openMenu(false)
        if (a === "stop") return stop("You have the helm")
        if (a === "tour") return startTour()
        if (a === "near") return startNear()
        if (a === "full") return startTask(missions.tasks[0].id, true)
        if (a.startsWith("task:")) return startTask(a.slice(5), false)
        if (a.startsWith("go:")) return startGo(places.list.find((p) => p.id === a.slice(3)))
        if (a.startsWith("player:")) return startPlayer(a.slice(7))
    })
    addEventListener("keydown", (e) => {
        if (!drive.active || e.target.closest?.("input, textarea")) return
        if (e.key.toLowerCase() === "g" && !e.repeat) openMenu(!panel.classList.contains("is-on"))
    })
    drive.onEscape(() => {
        if (panel.classList.contains("is-on")) {
            openMenu(false)
            return true
        }
        return false
    })
    drive.onManual(() => {
        if (mode && mode.kind !== "task") stop("You have the helm")
        else if (mode && mode.kind === "task") stop("You have the helm: the task goes on with you")
    })

    // ================= modes =================
    let mode = null // { kind: "go" | "tour" | "near" | "task", ... }
    let path = null
    let replanT = 0
    let stateName = "Planning"
    let replans = 0
    let goal = null // { x, z, stop, label }
    let flowT = 0
    let noteEl = null
    function say(text) {
        if (!noteEl) {
            noteEl = document.createElement("div")
            noteEl.className = "hud-note hud-note-auto"
            hud.appendChild(noteEl)
        }
        noteEl.textContent = text
        noteEl.classList.add("is-on")
        clearTimeout(say.t)
        say.t = setTimeout(() => noteEl.classList.remove("is-on"), 2400)
    }
    function engage(m) {
        mode = m
        path = null
        replanT = 0
        replans = 0
        drive.setLid(false)
        drive.state.orbit = true
        box.classList.add("is-on")
        btn.classList.add("is-on")
        if (score) {
            score.achieve("auto")
            score.count("auto")
        }
        drive.sfx("go")
    }
    function stop(msg) {
        if (!mode) return
        mode = null
        path = null
        goal = null
        drive.state.auto = null
        drive.state.orbit = false
        box.classList.remove("is-on")
        btn.classList.remove("is-on")
        layPath(null)
        goalMesh.visible = false
        if (msg) say(msg)
    }
    const placeGoal = (p) => {
        // stop a little short of the post, on the near side
        const dx = drive.pos.x - p.item.x
        const dz = drive.pos.z - p.item.z
        const d = Math.hypot(dx, dz) || 1
        return { x: p.item.x + (dx / d) * 10, z: p.item.z + (dz / d) * 10, stop: true, label: p.title, place: p }
    }
    const taskBusy = () => {
        if (missions.busy) {
            say("Finish or stop the task first")
            return true
        }
        return false
    }
    function startGo(p) {
        if (!p || taskBusy()) return
        engage({ kind: "go", place: p })
        goal = placeGoal(p)
    }
    // another player: stop alongside, a little short of them on this side (they may be moving)
    const findPlayer = (id) => (getPlayers() || []).find((pl) => pl.id === id)
    function playerGoal(pl) {
        const dx = drive.pos.x - pl.x
        const dz = drive.pos.z - pl.z
        const d = Math.hypot(dx, dz) || 1
        return { x: pl.x + (dx / d) * 14, z: pl.z + (dz / d) * 14, stop: true, label: pl.name, player: pl }
    }
    function startPlayer(id) {
        const pl = findPlayer(id)
        if (!pl) return say("That player is no longer online")
        if (taskBusy()) return
        engage({ kind: "player", id, name: pl.name })
        goal = playerGoal(pl)
    }
    function nextUnseen(from) {
        let bestP = null
        let bestD = Infinity
        for (const p of places.list) {
            if (places.isVisited(p.id)) continue
            const d = Math.hypot(p.item.x - from.x, p.item.z - from.z)
            if (d < bestD) {
                bestD = d
                bestP = p
            }
        }
        return bestP
    }
    function startNear() {
        const p = nextUnseen(drive.pos)
        if (!p) return say("Every place is visited")
        startGo(p)
    }
    function startTour() {
        if (taskBusy()) return
        const again = places.list.every((p) => places.isVisited(p.id))
        engage({ kind: "tour", again, list: again ? places.list.slice() : null, k: 0, wait: 0 })
        tourNext()
    }
    function tourNext() {
        const m = mode
        let p
        if (m.again) p = m.list[m.k++ % m.list.length]
        else p = nextUnseen(drive.pos)
        if (!p) {
            stop("The tour is over: every place visited")
            if (score) score.add(150, "Harbour tour on its own", { big: true })
            return
        }
        m.place = p
        goal = placeGoal(p)
        path = null
        replanT = 0
    }
    function startTask(id, full) {
        missions.begin(id, { full: full ? { scores: [] } : null, auto: true })
        engage({ kind: "task" })
    }

    // the boats on the move near us (for the give-way rules)
    function traffic() {
        // not the player we are sailing over to: we mean to come close to that one
        const all = getMovers()
        return mode && mode.kind === "player" ? all.filter((m) => m.peer !== mode.id) : all
    }
    // the rules of the road: a boat from starboard on a collision course → give way; head on → to starboard
    function rules(th, st) {
        const p = drive.pos
        const h = drive.course
        const fx = Math.cos(h)
        const fz = -Math.sin(h)
        const v = Math.max(1, Math.abs(drive.speed))
        let label = null
        for (const m of traffic()) {
            const rx = m.x - p.x
            const rz = m.z - p.z
            const dist = Math.hypot(rx, rz)
            if (dist > 110) continue
            const vx = m.vx - fx * v
            const vz = m.vz - fz * v
            const vv = vx * vx + vz * vz
            const tc = vv > 1e-3 ? -(rx * vx + rz * vz) / vv : 0
            const dc = Math.hypot(rx + vx * tc, rz + vz * tc)
            if (tc < 0 || tc > 12 || dc > m.r + 14) continue
            const ahead = rx * fx + rz * fz
            const stb = rx * Math.sin(h) + rz * Math.cos(h)
            const mh = Math.atan2(-m.vz, m.vx)
            const headOn = Math.abs(wrap(mh - h - Math.PI)) < 0.6 && ahead > 0
            if (headOn) {
                st = Math.min(st, -0.55)
                label = "Keeping to starboard"
            } else if (stb > 0 && ahead > -5) {
                th = Math.min(th, dist < 40 ? -0.3 : 0.05)
                label = "Giving way"
            }
        }
        return { th, st, label }
    }

    // what the plan does now: straight on, or round something (a boat, if one is close to the line)
    function aroundLabel(p) {
        if (!path || path.length < 3 || !goal) return "Following the course"
        let len = 0
        for (let k = 0; k < path.length - 1; k++) len += Math.hypot(path[k + 1][0] - path[k][0], path[k + 1][1] - path[k][1])
        const direct = Math.hypot(goal.x - p.x, goal.z - p.z)
        if (len < direct * 1.04 + 3) return "Following the course"
        const boat = getMovers().some((m) => Math.hypot(m.x - p.x, m.z - p.z) < 60)
        return boat ? "Going around another boat" : "Finding a way round"
    }
    // follow the line
    function follow(dt, { stopAtEnd = true, cap = 1 } = {}) {
        const p = drive.pos
        if (!path || path.length < 2) return { th: 0, st: 0 }
        // where on the line are we: the nearest segment
        let bi = 0
        let bd = Infinity
        let bt = 0
        for (let k = 0; k < path.length - 1; k++) {
            const [x0, z0] = path[k]
            const [x1, z1] = path[k + 1]
            const dx = x1 - x0
            const dz = z1 - z0
            const l2 = dx * dx + dz * dz || 1
            const t = clamp(((p.x - x0) * dx + (p.z - z0) * dz) / l2, 0, 1)
            const d = Math.hypot(x0 + dx * t - p.x, z0 + dz * t - p.z)
            if (d < bd) {
                bd = d
                bi = k
                bt = t
            }
        }
        // a point some way ahead on it
        const look = clamp(9 + Math.abs(drive.speed) * 0.8, 9, 24)
        let rem = look
        let k = bi
        let t = bt
        let tx = path[path.length - 1][0]
        let tz = path[path.length - 1][1]
        for (; k < path.length - 1; k++) {
            const [x0, z0] = path[k]
            const [x1, z1] = path[k + 1]
            const len = Math.hypot(x1 - x0, z1 - z0)
            const left = len * (1 - t)
            if (left >= rem) {
                const f = t + rem / (len || 1)
                tx = x0 + (x1 - x0) * f
                tz = z0 + (z1 - z0) * f
                break
            }
            rem -= left
            t = 0
        }
        // how far is left to go
        let togo = 0
        {
            const [x0, z0] = path[bi]
            const [x1, z1] = path[bi + 1]
            togo += Math.hypot(x1 - x0, z1 - z0) * (1 - bt)
            for (let q = bi + 1; q < path.length - 1; q++) togo += Math.hypot(path[q + 1][0] - path[q][0], path[q + 1][1] - path[q][1])
        }
        const want = Math.atan2(-(tz - p.z), tx - p.x)
        const err = wrap(want - drive.course)
        let st = clamp(err * 2.2, -1, 1)
        let th = cap * clamp(1 - Math.abs(err) * 0.75, 0.2, 1)
        if (Math.abs(err) > 2.2) th = 0.12 // it is behind: turn on the spot
        if (stopAtEnd) {
            th *= clamp(togo / 40, 0.1, 1)
            if (togo < 4) th = drive.speed > 0.8 ? -0.5 : 0
        }
        return { th, st, togo, boost: !stopAtEnd ? false : togo > 160 && Math.abs(err) < 0.15 && mode && mode.kind !== "task" }
    }

    // where a step is (to aim on after passing a mark)
    function stepPoint(r, i) {
        const s = r.steps[i]
        if (!s) return null
        if (s.kind === "gate") return [s.g.x - Math.cos(s.g.h) * 9, s.g.z + Math.sin(s.g.h) * 9]
        if (s.kind === "mark") {
            const c = CARDINALS[s.type]
            return [s.x + c.dir[0] * 14, s.z + c.dir[1] * 14]
        }
        return [s.x, s.z]
    }
    // the targets for the Njord tasks, one step at a time
    function taskTarget(r) {
        const s = r.steps[r.i]
        if (!s) return null
        const p = drive.pos
        if (s.kind === "gate") {
            const fx = Math.cos(s.g.h)
            const fz = -Math.sin(s.g.h)
            const before = (p.x - s.g.x) * fx + (p.z - s.g.z) * fz
            // in line before the gate, then straight through it
            if (before < -6) return { x: s.g.x - fx * 9, z: s.g.z - fz * 9, then: [s.g.x + fx * 16, s.g.z + fz * 16], state: r.otters.length ? "Following the course" : "Following the course" }
            return { x: s.g.x + fx * 16, z: s.g.z + fz * 16, direct: true, state: "Following the course" }
        }
        if (s.kind === "spin") return { x: s.x, z: s.z, spin: true, R: s.R, state: "Turning 360°" }
        if (s.kind === "mark") {
            const c = CARDINALS[s.type]
            // through a point on the safe side, and on towards the next step (across the safe line)
            return { x: s.x + c.dir[0] * 14, z: s.z + c.dir[1] * 14, then: stepPoint(r, r.i + 1), mark: true, state: `Reading the marks: ${c.name.toLowerCase()} mark` }
        }
        if (s.kind === "dock") {
            const bz = r.berths[r.want].z
            const inLine = p.x > -40 && Math.abs(p.z - bz) < 5
            if (!inLine) return { x: -34, z: bz, state: "Docking: reading the AR tags" }
            return { x: -7.5, z: bz, direct: true, dock: true, state: "Docking" }
        }
        return null
    }

    // ================= every frame =================
    const tmpBox = new THREE.Vector3()
    function update(t, dt) {
        pathMat.uniforms.uTime.value = t
        goalMat.opacity = 0.5 + 0.4 * Math.sin(t * 4)
        if (!drive.active) {
            if (mode) stop()
            panel.classList.remove("is-on")
            return
        }
        if (!mode) return
        const p = drive.pos
        let inputs = { th: 0, st: 0, spin: 0 }
        let label = "Following the course"

        // ---- the Njord tasks on its own ----
        if (mode.kind === "task") {
            const r = missions.run
            if (!r || !r.auto) return stop("Argus is done")
            if (r.phase === "done") {
                drive.state.auto = null
                stateName = "Done"
                path = null
                layPath(null)
                goalMesh.visible = false
                stateEl.textContent = "Task done: the result is up"
                // a next task in a full run starts with its briefing; wait for it
                return
            }
            if (r.phase !== "go") {
                drive.state.auto = { th: 0, st: 0 }
                stateEl.textContent = r.phase === "count" ? "Ready" : "Waiting for the start"
                return
            }
            const tg = taskTarget(r)
            if (!tg) return
            goal = { x: tg.x, z: tg.z, label: r.task.name }
            if (tg.spin && Math.hypot(p.x - tg.x, p.z - tg.z) < tg.R - 4) {
                inputs = { th: 0.18, st: 0, spin: 1 }
                label = tg.state
                path = [
                    [p.x, p.z],
                    [tg.x, tg.z],
                ]
            } else if (tg.direct) {
                path = [
                    [p.x, p.z],
                    [tg.x, tg.z],
                ]
                inputs = follow(dt, { stopAtEnd: !!tg.dock, cap: tg.dock ? 0.55 : 0.85 })
                label = tg.state
                if (tg.dock && Math.abs(p.x - tg.x) < 3) inputs = { th: drive.speed > 0.6 ? -0.6 : 0, st: 0 }
            } else {
                replanT -= dt
                if (!path || replanT <= 0 || mode.step !== r.i) {
                    mode.step = r.i
                    const pl = plan(p.x, p.z, tg.x, tg.z)
                    replans++
                    if (pl) {
                        if (tg.then) pl.push(tg.then)
                        path = pl
                    }
                    // a mark: plan only up to the next one, so it goes through the point first
                    if (tg.mark) replanT = 2.5
                    replanT = 0.6
                    drawMap(p.x, p.z)
                }
                inputs = follow(dt, { stopAtEnd: false, cap: tg.mark ? 0.85 : 1 })
                label = tg.state
            }
            const ru = rules(inputs.th, inputs.st)
            if (ru.label) {
                inputs.th = ru.th
                inputs.st = ru.st
                label = ru.label
            }
        } else {
            // a task of your own took over
            if (missions.busy) return stop("You have the helm for the task")
            // ---- go somewhere: a place, or a tour ----
            if (mode.kind === "tour" && mode.place && mode.wait > 0) {
                mode.wait -= dt
                inputs = { th: drive.speed > 0.6 ? -0.4 : 0, st: 0 }
                label = "Reading the place"
                if (mode.wait <= 0) tourNext()
            } else if (goal) {
                // a player moves: the goal goes with them, and the plan is made again more often
                if (mode.kind === "player") {
                    const pl = findPlayer(mode.id)
                    // not heard from for a moment (their tab in the background, a slow line): keep on a little
                    if (!pl) {
                        mode.lost = (mode.lost || 0) + dt
                        if (mode.lost > 8) return stop(`${mode.name} is no longer online`)
                    } else {
                        mode.lost = 0
                        goal = playerGoal(pl)
                        if (path && path.length) path[path.length - 1] = [goal.x, goal.z]
                    }
                }
                const dGoal = Math.hypot(goal.x - p.x, goal.z - p.z)
                replanT -= dt
                if (!path || replanT <= 0) {
                    const pl = plan(p.x, p.z, goal.x, goal.z)
                    replans++
                    if (pl) path = pl
                    else label = "No way through: waiting"
                    replanT = mode.kind === "player" ? 0.5 : 0.8
                    drawMap(p.x, p.z)
                }
                inputs = follow(dt, { stopAtEnd: true, cap: 1 })
                const ru = rules(inputs.th, inputs.st)
                if (ru.label) {
                    inputs.th = ru.th
                    inputs.st = ru.st
                    label = ru.label
                } else label = aroundLabel(p)
                // there
                const reached =
                    (goal.place && places.isVisited(goal.place.id) && Math.hypot(goal.place.item.x - p.x, goal.place.item.z - p.z) < 18) ||
                    (goal.player && Math.hypot(goal.player.x - p.x, goal.player.z - p.z) < 20) ||
                    dGoal < 5
                if (reached && Math.abs(drive.speed) < 1.5) {
                    if (mode.kind === "tour") {
                        mode.wait = 5
                        label = "Reading the place"
                    } else {
                        const name = goal.label
                        stop(`Arrived: ${name}`)
                        return
                    }
                }
            }
        }
        drive.state.auto = inputs
        stateName = label

        // ---- what you see ----
        layPath(path)
        for (let i = 0; i < pathSamples.length; i++) {
            const [x, z, sx, sz] = pathSamples[i]
            const y = waveHeight(x, z, t, 1) * 0.85 + 0.22
            pathPos.set([x + sx * 0.5, y, z + sz * 0.5, x - sx * 0.5, y, z - sz * 0.5], i * 6)
        }
        pathGeo.attributes.position.needsUpdate = true
        if (goal) {
            goalMesh.visible = true
            goalMesh.position.set(goal.x, waveHeight(goal.x, goal.z, t, 1) * 0.85 + 0.3, goal.z)
            goalMesh.scale.setScalar(1 + 0.15 * Math.sin(t * 4))
        }
        // what the sensors see close by (counted for the panel; the LiDAR view shows them)
        let n = 0
        const near = 70
        for (const list of getColliders())
            for (const b of list) if (Math.abs(b.x - p.x) < near && Math.abs(b.z - p.z) < near && Math.hypot(b.x - p.x, b.z - p.z) < near) n++
        for (const b of getBuoys()) if (Math.hypot(b.x - p.x, b.z - p.z) < near) n++

        // ---- the panel ----
        stateEl.textContent = stateName
        const where = goal ? `${esc(goal.label)} · ${Math.round(Math.hypot(goal.x - p.x, goal.z - p.z) * 0.3)} m` : ""
        goalEl.innerHTML = where ? `<span>To</span> ${where}` : ""
        statsEl.textContent = `${n} things seen · plan ${replans} · ${(Math.abs(drive.speed) * 0.3 * 1.944).toFixed(1)} kn`
        // the data runs down the pipeline
        flowT += dt * 6
        const lit = Math.floor(flowT) % PIPE.length
        pipeEls.forEach((el, i) => el.classList.toggle("is-lit", i === lit))
    }

    return {
        group,
        update,
        openMenu,
        // the menu again, if it is open (the players online changed)
        refreshMenu() {
            if (panel.classList.contains("is-on")) openMenu(true, false)
        },
        stop,
        get active() {
            return !!mode
        },
        get mode() {
            return mode
        },
        plan,
    }
}
