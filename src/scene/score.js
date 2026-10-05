import { confetti } from "./hudfx.js"

/* ================================================================
   The harbour score at the helm, kept in this browser: points for what
   you do (a new place, a whole row of posts, a Njord task and its
   medal, a full Njord run, letting Argus sail on its own, the distance
   you sail) and for a few things to find out once (open the lid, ping
   the LiDAR, sail at night, in every weather ...). Every 500 points is
   a level. The chip by the name shows the score and the level; it
   opens the logbook (B) with the numbers, the things found out and the
   last points earned.
   ================================================================ */

const KEY = "marinor-score"
const LEVEL = 500
const ACH = [
    { id: "lid", name: "Look inside", note: "Open the lid of Argus", pts: 25 },
    { id: "ping", name: "LiDAR ping", note: "Ping with the LiDAR", pts: 10 },
    { id: "boost", name: "Full power", note: "Keep Shift down at full speed for 8 s", pts: 20 },
    { id: "spin", name: "Four propellers", note: "Turn the boat a full round with Q or E", pts: 20 },
    { id: "night", name: "Night sail", note: "Sail after dark", pts: 40 },
    { id: "weather", name: "All weathers", note: "Sail in clear, cloudy, fog and rain", pts: 40 },
    { id: "auto", name: "Hands off", note: "Let Argus sail on its own", pts: 30 },
    { id: "autotask", name: "No one at the wheel", note: "Watch Argus solve a Njord task on its own", pts: 50 },
    { id: "island", name: "Out to the lighthouse", note: "Sail all the way out to the lighthouse", pts: 150 },
    { id: "far", name: "Long way", note: "Sail 3 km in all", pts: 60 },
]
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
const fmtN = (n) => Math.round(n).toLocaleString("en-US").replace(/,/g, " ")
const KEYS_HINT = `<span class="hud-keyhint" aria-hidden="true"><kbd>↑</kbd><kbd>↓</kbd> scroll <kbd>Esc</kbd> close</span>`

export function createScore({ drive, island = null }) {
    let data = { total: 0, dist: 0, tasks: 0, auto: 0, ach: {}, log: [], weathers: [] }
    try {
        data = { ...data, ...(JSON.parse(localStorage.getItem(KEY) || "{}") || {}) }
    } catch (e) {
        /* fresh */
    }
    const save = () => {
        try {
            localStorage.setItem(KEY, JSON.stringify(data))
        } catch (e) {
            /* no storage: kept for this visit only */
        }
    }
    let stats = () => ({})

    // ---- the chip by the name ----
    const hud = drive.hud
    const chip = document.createElement("button")
    chip.type = "button"
    chip.className = "hud-score"
    chip.setAttribute("aria-label", "Harbour score and logbook")
    hud.querySelector(".hud-tag").after(chip)
    function paintChip() {
        const lv = 1 + Math.floor(data.total / LEVEL)
        const k = (data.total % LEVEL) / LEVEL
        chip.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" fill="currentColor"/></svg><b>${fmtN(data.total)}</b><span class="hs-lv">Lv ${lv}</span><i class="hs-bar"><i style="transform: scaleX(${k.toFixed(3)})"></i></i>`
    }
    paintChip()

    // points rising from the chip
    const toasts = []
    function toast(points, label, big = false) {
        const el = document.createElement("div")
        el.className = "hud-pts" + (big ? " is-big" : "")
        el.innerHTML = `<b>+${points}</b> ${esc(label)}`
        const r = chip.getBoundingClientRect()
        const h = hud.getBoundingClientRect()
        el.style.left = r.left - h.left + "px"
        el.style.top = r.bottom - h.top + 8 + toasts.length * 30 + "px"
        hud.appendChild(el)
        toasts.push(el)
        setTimeout(() => {
            el.remove()
            toasts.splice(toasts.indexOf(el), 1)
        }, 2600)
    }

    function add(points, label, { big = false } = {}) {
        if (!points) return
        const before = Math.floor(data.total / LEVEL)
        data.total += points
        data.log.unshift({ p: points, label, at: Date.now() })
        data.log.length = Math.min(data.log.length, 30)
        save()
        paintChip()
        chip.classList.remove("is-bump")
        void chip.offsetWidth
        chip.classList.add("is-bump")
        toast(points, label, big)
        const after = Math.floor(data.total / LEVEL)
        if (after > before) {
            setTimeout(() => {
                drive.sfx("medal")
                confetti(hud, { count: 150 })
                note(`Level ${after + 1}`)
            }, 700)
        }
        if (panel.classList.contains("is-on")) render()
    }
    function achieve(id) {
        if (data.ach[id]) return
        const a = ACH.find((q) => q.id === id)
        if (!a) return
        data.ach[id] = Date.now()
        add(a.pts, a.name, { big: true })
        drive.sfx("discover")
    }

    // a short note in the middle (the places module has one too: this one is for levels)
    const noteEl = document.createElement("div")
    noteEl.className = "hud-note hud-note-lv"
    hud.appendChild(noteEl)
    let noteTimer = 0
    function note(text) {
        noteEl.textContent = text
        noteEl.classList.add("is-on")
        clearTimeout(noteTimer)
        noteTimer = setTimeout(() => noteEl.classList.remove("is-on"), 2600)
    }

    // ---- the logbook ----
    const panel = document.createElement("div")
    panel.className = "hud-missions hud-log"
    panel.setAttribute("role", "dialog")
    panel.setAttribute("aria-label", "Logbook")
    hud.appendChild(panel)
    drive.addMenu(panel)
    const ago = (t) => {
        const s = (Date.now() - t) / 1000
        if (s < 60) return "just now"
        if (s < 3600) return Math.floor(s / 60) + " min ago"
        if (s < 86400) return Math.floor(s / 3600) + " h ago"
        return Math.floor(s / 86400) + " d ago"
    }
    function render() {
        const st = stats()
        const lv = 1 + Math.floor(data.total / LEVEL)
        const k = (data.total % LEVEL) / LEVEL
        const km = (data.dist * 0.3) / 1000
        const found = ACH.filter((a) => data.ach[a.id]).length
        panel.innerHTML = `
            <div class="hm-head">
                <div><span class="hm-kicker">Your harbour score</span><h2>Logbook</h2></div>
                <button type="button" class="hud-btn" data-close>Close</button>
            </div>
            <div class="hl-score">
                <p class="hl-total"><b>${fmtN(data.total)}</b><span>points</span></p>
                <div class="hl-level"><span>Level ${lv}</span><i><i style="transform: scaleX(${k.toFixed(3)})"></i></i><small>${fmtN(LEVEL - (data.total % LEVEL))} to level ${lv + 1}</small></div>
            </div>
            <dl class="hl-stats">
                <div><dt>Sailed</dt><dd>${km < 1 ? Math.round(km * 1000) + " m" : km.toFixed(2) + " km"}</dd></div>
                <div><dt>Places</dt><dd>${st.places ? `${st.places[0]} / ${st.places[1]}` : "–"}</dd></div>
                <div><dt>Njord tasks done</dt><dd>${data.tasks}</dd></div>
                <div><dt>Medals</dt><dd>${st.medals != null ? `${st.medals} / 5` : "–"}</dd></div>
                <div><dt>Sailed on its own</dt><dd>${data.auto}</dd></div>
                <div><dt>Found out</dt><dd>${found} / ${ACH.length}</dd></div>
            </dl>
            <h3 class="hl-h">Things to find out</h3>
            <ul class="hl-ach">
                ${ACH.map((a) => `<li class="${data.ach[a.id] ? "is-done" : ""}"><span class="hl-badge" aria-hidden="true">${data.ach[a.id] ? "✓" : "?"}</span><span><b>${esc(a.name)}</b><small>${esc(a.note)}</small></span><em>+${a.pts}</em></li>`).join("")}
            </ul>
            <h3 class="hl-h">Last points</h3>
            <ol class="hl-log">
                ${data.log.length ? data.log.slice(0, 10).map((l) => `<li><b>+${l.p}</b><span>${esc(l.label)}</span><small>${ago(l.at)}</small></li>`).join("") : `<li class="is-empty">Nothing yet: sail to a place, or try a Njord task.</li>`}
            </ol>
            <div class="hm-foot">${KEYS_HINT}</div>`
    }
    function open(on) {
        if (on) render()
        if (on) drive.closeOthers(panel)
        panel.classList.toggle("is-on", on)
        if (on) {
            panel.scrollTop = 0
            const b = panel.querySelector("[data-close]")
            if (b) b.focus({ preventScroll: true })
        }
    }
    chip.addEventListener("click", () => open(!panel.classList.contains("is-on")))
    panel.addEventListener("click", (e) => {
        if (e.target.closest("[data-close]")) open(false)
    })
    addEventListener("keydown", (e) => {
        if (!drive.active || e.ctrlKey || e.metaKey || e.altKey || e.target.closest?.("input, textarea")) return
        if (e.key.toLowerCase() === "b" && !e.repeat) open(!panel.classList.contains("is-on"))
    })
    drive.onEscape(() => {
        if (panel.classList.contains("is-on")) {
            open(false)
            return true
        }
        return false
    })

    // ---- watching what you do ----
    let boostT = 0
    let spinAcc = 0
    let lastHeading = null
    let lastCourse = null
    let distStep = 0
    function update(t, dt, { inTask = false } = {}) {
        if (!drive.active) {
            lastHeading = null
            panel.classList.remove("is-on")
            return
        }
        const v = Math.abs(drive.speed)
        // distance: points every 500 m
        const d = v * dt
        data.dist += d
        distStep += d
        if (distStep * 0.3 >= 500) {
            distStep = 0
            add(20, "500 m sailed")
            if (data.dist * 0.3 >= 3000) achieve("far")
        } else if (Math.random() < 0.01) save()
        if (drive.lidOpen) achieve("lid")
        // full power for a while
        if (drive.state.auto == null && v > 18) {
            boostT += dt
            if (boostT > 8) achieve("boost")
        } else boostT = 0
        // a full round of the hull against the course, outside the tasks
        if (lastHeading != null && !inTask) {
            let dh = drive.heading - drive.course - (lastHeading - lastCourse)
            dh = Math.atan2(Math.sin(dh), Math.cos(dh))
            spinAcc = Math.abs(dh) > 0.0001 ? spinAcc + dh : spinAcc * 0.98
            if (Math.abs(spinAcc) > Math.PI * 2) achieve("spin")
        }
        lastHeading = drive.heading
        lastCourse = drive.course
        if (drive.sunElev < -2 && v > 2) achieve("night")
        const w = drive.weather && drive.weather.name
        if (w && v > 2 && !data.weathers.includes(w)) {
            data.weathers.push(w)
            save()
            if (data.weathers.length >= 4) achieve("weather")
        }
        if (island && Math.hypot(drive.pos.x - island.x, drive.pos.z - island.z) < island.r) achieve("island")
    }

    return {
        add,
        achieve,
        update,
        open,
        setStats(fn) {
            stats = fn
        },
        count(what) {
            data[what] = (data[what] || 0) + 1
            save()
        },
        get total() {
            return data.total
        },
        get data() {
            return data
        },
    }
}
