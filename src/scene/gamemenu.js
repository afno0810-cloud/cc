/* ================================================================
   The game menu (the game page only)
   A title screen when the game opens, and the same menu as a pause
   menu on Esc: free drive, the Njord tasks, autonomous mode, the
   places, the logbook, settings (time of day, weather, sound) and
   the controls. While it is open the camera swings slowly round
   Argus and the helm is locked. The arrow keys move between the
   choices (drive.addMenu), Enter picks, Esc goes back.
   The other modules are built later (with the world), so they are
   fetched through get() and their entries wait until they exist.
   ================================================================ */

const ICONS = {
    play: '<path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/>',
    njord: '<path d="M5 20V5"/><path d="M5 5h11l-2.5 3.5L16 12H5"/>',
    auto: '<rect x="6" y="8" width="12" height="10" rx="2.5"/><path d="M12 4v4M9.5 12.5h.01M14.5 12.5h.01M9.5 15.5h5"/>',
    places: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
    log: '<path d="M6 4h10a2 2 0 0 1 2 2v14H8a2 2 0 0 1-2-2z"/><path d="M6 18a2 2 0 0 1 2-2h10M10 8h5M10 11h4"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>',
    keys: '<rect x="3" y="7" width="18" height="11" rx="2.5"/><path d="M7 11h.01M10.5 11h.01M14 11h.01M17.5 11h.01M8 14.5h8"/>',
    back: '<path d="M14.5 6 8.5 12l6 6"/>',
}
const icon = (k) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[k]}</svg>`

const ITEMS = [
    { id: "play", label: "Start sailing", resume: "Resume", text: "Free drive in Trondheim harbour" },
    { id: "njord", label: "Njord tasks", text: "Four tasks from the real competition, out of 100", key: "M" },
    { id: "auto", label: "Autonomous mode", text: "Let Argus plan its own way and sail", key: "G" },
    { id: "places", label: "Places to visit", text: "Posts round the harbour with our story", key: "P" },
    { id: "log", label: "Logbook", text: "Your score, level and what you have found", key: "B" },
    { id: "settings", label: "Settings", text: "Time of day, weather and sound" },
    { id: "keys", label: "Controls", text: "Every key, and how to drive on a phone", key: "H" },
]
// keys that open a panel of their own: they close the menu and go on to it
const PANEL_KEYS = ["m", "p", "g", "b", "h", "?"]

export function createGameMenu({ drive, get }) {
    const el = document.createElement("div")
    el.className = "gm"
    el.setAttribute("role", "dialog")
    el.setAttribute("aria-label", "Game menu")
    const tile = (it) => `<button type="button" class="gm-item gm-tile" data-gm="${it.id}">
                        <span class="gm-ico">${icon(it.id)}</span>
                        <span class="gm-txt"><b class="gm-label">${it.label}</b><small>${it.text}</small></span>
                        ${it.key ? `<kbd>${it.key}</kbd>` : ""}
                    </button>`
    el.innerHTML = `
        <div class="gm-veil" aria-hidden="true"></div>
        <div class="gm-side">
            <header class="gm-brand">
                <span class="gm-kicker"><i></i><span class="gm-kick-text">Marinor NTNU · The harbour game</span></span>
                <h1 class="gm-title">Drive <b>Argus</b></h1>
                <p class="gm-sub">Take the helm of Argus, our autonomous boat, in the harbour in Trondheim.</p>
            </header>
            <nav class="gm-view gm-main" aria-label="Game menu">
                <button type="button" class="gm-item is-primary" data-gm="play">
                    <span class="gm-ico">${icon("play")}</span>
                    <span class="gm-txt"><b class="gm-label">${ITEMS[0].label}</b><small>${ITEMS[0].text}</small></span>
                    <kbd class="gm-enter">Enter</kbd>
                </button>
                <div class="gm-grid">${ITEMS.slice(1).map(tile).join("")}</div>
                <p class="gm-mini" aria-hidden="true"><span><b data-mini="score">0</b> points</span><span><b data-mini="medals">0</b> of 5 medals</span><span><b data-mini="places">0</b> places</span></p>
            </nav>
            <div class="gm-view gm-settings" aria-label="Settings" hidden>
                <span class="gm-view-head">Settings</span>
                <button type="button" class="gm-row" data-set="time"><span class="gm-row-name">Time of day</span><span class="gm-val"><i aria-hidden="true">‹</i><b></b><i aria-hidden="true">›</i></span></button>
                <button type="button" class="gm-row" data-set="weather"><span class="gm-row-name">Weather</span><span class="gm-val"><i aria-hidden="true">‹</i><b></b><i aria-hidden="true">›</i></span></button>
                <button type="button" class="gm-row" data-set="sound"><span class="gm-row-name">Sound</span><span class="gm-val"><i aria-hidden="true">‹</i><b></b><i aria-hidden="true">›</i></span></button>
                <span class="gm-view-head gm-view-sub">Online</span>
                <button type="button" class="gm-row" data-set="online"><span class="gm-row-name">Online<small>Sail in the same harbour as everyone else</small></span><span class="gm-val"><i aria-hidden="true">‹</i><b></b><i aria-hidden="true">›</i></span></button>
                <button type="button" class="gm-row" data-set="voice"><span class="gm-row-name">Proximity chat<small>Hear the boats close by</small></span><span class="gm-val"><i aria-hidden="true">‹</i><b></b><i aria-hidden="true">›</i></span></button>
                <button type="button" class="gm-row" data-set="mic"><span class="gm-row-name">Microphone<small>Let the boats close by hear you · C</small></span><span class="gm-val"><i aria-hidden="true">‹</i><b></b><i aria-hidden="true">›</i></span></button>
                <button type="button" class="gm-item gm-back" data-gm="back"><span class="gm-ico">${icon("back")}</span><span class="gm-txt"><b class="gm-label">Back</b></span><kbd>Esc</kbd></button>
            </div>
            <footer class="gm-foot"><span><kbd>↑</kbd><kbd>↓</kbd><kbd>←</kbd><kbd>→</kbd> choose</span><span><kbd>Enter</kbd> select</span><span class="gm-foot-esc"><kbd>Esc</kbd> <span class="gm-esc-text">back to the water</span></span></footer>
        </div>
        <aside class="gm-stats" aria-label="Your harbour">
            <span class="gm-stats-head">Your harbour</span>
            <div class="gm-stat"><b class="gm-n" data-stat="score">0</b><span>points · <em data-stat="level">level 1</em></span></div>
            <div class="gm-stat"><b class="gm-n" data-stat="medals">0</b><span>of 5 medals</span></div>
            <div class="gm-stat"><b class="gm-n" data-stat="places">0</b><span data-stat="places-of">places visited</span></div>
        </aside>
    `
    drive.hud.appendChild(el)
    drive.addMenu(el)
    drive.hud.classList.add("has-gm")

    // the menu button at the helm (time, weather and sound move into the settings)
    const menuBtn = document.createElement("button")
    menuBtn.type = "button"
    menuBtn.className = "hud-btn hud-menu"
    menuBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg><span>Menu</span> <kbd>Esc</kbd>`
    menuBtn.addEventListener("click", () => open(true))
    drive.actions.appendChild(menuBtn)

    const side = el.querySelector(".gm-side")
    const main = el.querySelector(".gm-main")
    const settings = el.querySelector(".gm-settings")
    const playLabel = el.querySelector('[data-gm="play"] .gm-label')
    const kickText = el.querySelector(".gm-kick-text")
    const escText = el.querySelector(".gm-esc-text")
    let started = false // the first time it is the title screen, after that a pause menu

    const isOpen = () => el.classList.contains("is-on")
    const fmt = (n) => Math.round(n).toLocaleString("en-US").replace(/,/g, " ")

    function renderStats() {
        const { score, missions, places } = get()
        const total = score ? score.total : 0
        el.querySelector('[data-stat="score"]').textContent = fmt(total)
        el.querySelector('[data-stat="level"]').textContent = "level " + (1 + Math.floor(total / 500))
        el.querySelector('[data-stat="medals"]').textContent = missions ? missions.medals : 0
        el.querySelector('[data-stat="places"]').textContent = places ? places.visited.length : 0
        el.querySelector('[data-stat="places-of"]').textContent = places ? `of ${places.list.length} places visited` : "places visited"
        el.querySelector('[data-mini="score"]').textContent = fmt(total)
        el.querySelector('[data-mini="medals"]').textContent = missions ? missions.medals : 0
        el.querySelector('[data-mini="places"]').textContent = places ? `${places.visited.length}/${places.list.length}` : 0
    }
    function renderSettings() {
        settings.querySelector('[data-set="time"] b').textContent = drive.TIME_NAMES[drive.timeIndex]
        settings.querySelector('[data-set="weather"] b').textContent = drive.WEATHERS[drive.weatherIndex].name
        settings.querySelector('[data-set="sound"] b').textContent = drive.soundOn ? "On" : "Off"
        const on = get().online
        const row = (k, text, disabled) => {
            const b = settings.querySelector(`[data-set="${k}"]`)
            b.querySelector("b").textContent = text
            b.disabled = !!disabled
        }
        row("online", !on ? "…" : on.enabled ? (on.status === "on" ? `On · ${on.count + 1}` : "On") : "Off", !on)
        row("voice", !on ? "…" : on.hear ? "On" : "Off", !on || !on.enabled)
        row("mic", !on ? "…" : on.mic ? "On" : "Off", !on || !on.enabled)
    }
    let onlineHooked = false
    function hookOnline() {
        const on = get().online
        if (!on || onlineHooked) return
        onlineHooked = true
        on.onChange(() => isOpen() && el.dataset.view === "settings" && renderSettings())
    }
    // entries for the parts of the game that are not built yet wait
    function renderReady() {
        const g = get()
        const ready = { njord: !!g.missions, auto: !!g.autopilot, places: !!g.places, log: !!g.score }
        for (const b of main.querySelectorAll("[data-gm]")) {
            const id = b.dataset.gm
            if (id in ready) b.disabled = !ready[id]
        }
    }

    function show(view) {
        main.hidden = view !== "main"
        settings.hidden = view !== "settings"
        el.dataset.view = view
        side.scrollTop = 0
        escText.textContent = view === "settings" ? "back" : started ? "back to the water" : "start sailing"
        if (view === "settings") {
            hookOnline()
            renderSettings()
        }
        const first = (view === "main" ? main : settings).querySelector("button:not([disabled])")
        if (first) first.focus({ preventScroll: true })
    }

    function open(on) {
        if (on === isOpen()) return
        el.classList.toggle("is-on", on)
        drive.hud.classList.toggle("is-menu", on)
        el.classList.toggle("is-title", on && !started)
        if (on) {
            playLabel.textContent = started ? ITEMS[0].resume : ITEMS[0].label
            kickText.textContent = started ? "Paused" : "Marinor NTNU · The harbour game"
            escText.textContent = started ? "back to the water" : "start sailing"
            // (the helm reads state.menu: the boat holds still and the camera swings round while it is open)
            drive.state.menu = true
            drive.showKeys(false)
            renderStats()
            renderReady()
            show("main")
        } else {
            // the first time out on the water: the controls come up first
            if (!started) setTimeout(() => drive.active && !isOpen() && drive.showKeys(true), 200)
            started = true
            drive.state.menu = false
        }
    }

    function pick(id) {
        const g = get()
        drive.sfx && drive.sfx("click")
        if (id === "settings") return show("settings")
        if (id === "back") return show("main")
        const first = !started
        open(false)
        if (first && id !== "play") setTimeout(() => drive.showKeys(id === "keys"), 220)
        if (id === "njord" && g.missions) g.missions.openPanel(true)
        if (id === "auto" && g.autopilot) g.autopilot.openMenu(true)
        if (id === "places" && g.places) g.places.openPanel(true)
        if (id === "log" && g.score) g.score.open(true)
        if (id === "keys") drive.showKeys(true)
    }
    function change(what, dir) {
        if (what === "time") drive.setTime(drive.timeIndex + dir)
        if (what === "weather") drive.setWeather(drive.weatherIndex + dir)
        if (what === "sound") drive.setSound(!drive.soundOn)
        const on = get().online
        if (on && what === "online") on.setEnabled(!on.enabled)
        if (on && what === "voice") on.setHear(!on.hear)
        if (on && what === "mic") on.setMic(!on.mic)
        drive.sfx && drive.sfx("click")
        renderSettings()
    }

    el.addEventListener("click", (e) => {
        const b = e.target.closest("[data-gm]")
        if (b) return pick(b.dataset.gm)
        const row = e.target.closest("[data-set]")
        if (row) {
            // a click on the left arrow goes back, anywhere else forward
            const arrows = row.querySelectorAll(".gm-val i")
            change(row.dataset.set, e.target === arrows[0] ? -1 : 1)
        }
    })

    // while the menu is open: ← → change a setting, the panel keys go on to their panel,
    // and nothing else reaches the helm (the arrows, Enter and Esc go on to the menu; Space presses the button)
    addEventListener(
        "keydown",
        (e) => {
            if (!isOpen() || !drive.active) return
            const k = e.key.toLowerCase()
            const row = document.activeElement && document.activeElement.closest && document.activeElement.closest("[data-set]")
            if (row && (k === "arrowleft" || k === "arrowright")) {
                e.preventDefault()
                e.stopPropagation()
                change(row.dataset.set, k === "arrowleft" ? -1 : 1)
                return
            }
            if (PANEL_KEYS.includes(k)) {
                started = true // the key opens its own panel, not the controls
                open(false)
                return
            }
            if (k.startsWith("arrow") || k === "enter" || k === "escape" || k === "tab") return
            e.stopPropagation()
        },
        true
    )

    // Esc in the menu: back from the settings, else back to the water
    drive.onEscape(() => {
        if (!isOpen()) return false
        if (el.dataset.view === "settings") show("main")
        else open(false)
        return true
    })
    // Esc on the water with nothing open: the pause menu
    drive.onPause(() => open(true))
    // the game opens on the title screen
    addEventListener("drive:change", (e) => {
        if (e.detail && !started) setTimeout(() => drive.active && !started && open(true), 300)
    })

    return {
        open,
        get isOpen() {
            return isOpen()
        },
        // the world has been built: the entries that waited for it can be chosen
        refresh() {
            if (!isOpen()) return
            renderReady()
            renderStats()
        },
    }
}
