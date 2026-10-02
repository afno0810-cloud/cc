import * as THREE from "three"
import { waveHeight } from "./world/waves.js"
import { withAir } from "./world/air.js"

/* ================================================================
   Places to visit at the helm: info buoys around the harbour, each with
   a sign over it. Sail up to one and a card opens with what the site
   says about it: Marinor, Argus, the Njord Challenge and what is out on
   its course, RoboBoat, Proteus, the partners and how to join. The
   places you have been to are kept in this browser; the list (P) shows
   how far away the rest are and can set a course to one.
   ================================================================ */

const VISITED_KEY = "marinor-places-visited"
const NEAR = 17 // the card opens this close (5 m)
const VIOLET = new THREE.Color("#c39cf0")
const BRAND = "#7c469c"

// the site's pages, for the "read more" links (the one-page build has its own addresses)
const KEYS = {
    "/about/": "about",
    "/projects/argus/": "projects-argus",
    "/projects/proteus/": "projects-proteus",
    "/competitions/njord-challenge/": "njord",
    "/competitions/roboboat/": "roboboat",
    "/sponsor/": "sponsor",
    "/join/": "join",
}
const linkTo = (path) => (typeof window.__glbSource === "function" ? location.pathname + location.search + "#page-" + KEYS[path] : path)

// the words are the site's own
const PLACES = [
    {
        id: "argus",
        x: 34,
        z: 44,
        kicker: "Project Argus",
        title: "Argus",
        text: [
            "Our first autonomous boat. A catamaran built by students in Trondheim and tested in the harbour.",
            "Argus is our first autonomous surface vessel. It finds its way on the water with no one at the wheel.",
        ],
        facts: ["Catamaran", "LiDAR", "Stereo camera", "Seapath 130"],
        link: ["/projects/argus/", "Read about Argus"],
        action: ["lid", "Look inside"],
    },
    {
        id: "marinor",
        x: -30,
        z: -150,
        kicker: "About",
        title: "Marinor NTNU",
        text: [
            "Marinor NTNU is a technical student organisation at NTNU. We build autonomous boats that find their way on the water without anyone steering.",
            "Our members study robotics, automation, marine technology and other subjects. We work with the Department of Engineering Cybernetics.",
            "Marinor was founded in 2025 and has more than 35 members.",
        ],
        facts: ["Founded 2025", "Trondheim"],
        link: ["/about/", "About Marinor"],
    },
    {
        id: "njord",
        x: 205,
        z: 112,
        kicker: "Competitions",
        title: "The Njord Challenge",
        text: [
            "A student competition for autonomous boats, held every August in Trondheim. Teams from several countries bring boats they have built and let them sail on their own.",
            "Marinor NTNU is on the team list for the Njord Challenge 2026. We built Argus for these four tasks: find the way, see what is around it, avoid other boats and dock.",
        ],
        facts: ["Nyhavna, Trondheim", "Five days in August", "Student teams from many countries"],
        link: ["/competitions/njord-challenge/", "Read about Njord"],
        action: ["tasks", "Try the four tasks"],
    },
    {
        id: "course",
        x: 268,
        z: 150,
        kicker: "Njord · On the course",
        title: "What is out on the course",
        text: ["The course has the same kind of marks a boat meets at sea, and the boat has to read them."],
        list: [
            ["Buoys", "Floating markers that show where the course goes and where the boat must not sail."],
            ["Cardinal marks", "Sea marks that show which side is safe to pass."],
            ["AR tags", "Printed markers the boat reads with its camera to find the right dock or gate."],
            ["The Otter", "A small vessel from the organisers that moves across the course in the collision task."],
        ],
        link: ["/competitions/njord-challenge/", "Read about Njord"],
        action: ["tasks", "Try the four tasks"],
    },
    {
        id: "roboboat",
        x: -235,
        z: -205,
        kicker: "Competitions",
        title: "RoboBoat",
        text: [
            "An international student competition in Florida. Teams build small autonomous boats and let them solve a course on the water, with no one steering.",
            "In 2027 we want to win the Njord Challenge. After that we want to enter RoboBoat in Florida.",
        ],
        facts: ["Sarasota, Florida", "Every February", "Run by RoboNation"],
        link: ["/competitions/roboboat/", "Read about RoboBoat"],
    },
    {
        id: "partners",
        x: -262,
        z: -10,
        kicker: "Our sponsors",
        title: "Thanks to our partners",
        text: ["These companies and organisations support Marinor NTNU. Without them we could not build our boats or travel to competitions."],
        facts: ["Kongsberg Discovery", "DNV", "Telenor", "NTNU", "Frifond"],
        link: ["/sponsor/", "Become a partner"],
    },
    {
        id: "join",
        x: 86,
        z: -205,
        kicker: "Recruitment",
        title: "Join Marinor",
        text: [
            "We build autonomous boats in Trondheim. All NTNU students can apply, and you do not need to know anything about boats.",
            "We are not recruiting right now. We take in new members at set times. Follow us on Instagram, where we post when applications open.",
        ],
        facts: ["Perception", "Autonomy", "Control", "GUI", "Hardware", "Economy", "PR"],
        link: ["/join/", "Our groups"],
    },
    {
        id: "proteus",
        x: 128,
        z: 226,
        kicker: "Project Proteus",
        title: "Proteus",
        text: ["Our next boat. We are working on the design now.", "Everything we learn on Argus goes into Proteus."],
        facts: ["Coming soon"],
        link: ["/projects/proteus/", "About Proteus"],
    },
]

const NAMES = { 0: "N", 45: "NE", 90: "E", 135: "SE", 180: "S", 225: "SW", 270: "W", 315: "NW" }
const bearingName = (dx, dz) => {
    const b = ((Math.atan2(dx, dz) * 180) / Math.PI + 360) % 360
    return NAMES[(Math.round(b / 45) * 45) % 360]
}
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;")

// the sign over a buoy: an "i" (a tick once visited) and the name, in a pill
function signTexture(title, done) {
    const c = document.createElement("canvas")
    const g = c.getContext("2d")
    const font = "600 44px system-ui, -apple-system, 'Segoe UI', sans-serif"
    g.font = font
    const w = Math.ceil(g.measureText(title).width) + 150
    c.width = w
    c.height = 112
    g.font = font
    const r = 46
    g.fillStyle = "rgba(12, 14, 22, 0.82)"
    g.strokeStyle = done ? "rgba(159, 227, 181, 0.85)" : "rgba(195, 156, 240, 0.95)"
    g.lineWidth = 4
    g.beginPath()
    g.roundRect(4, 6, w - 8, 100, r)
    g.fill()
    g.stroke()
    g.fillStyle = done ? "#3d8f5c" : BRAND
    g.beginPath()
    g.arc(56, 56, 34, 0, Math.PI * 2)
    g.fill()
    g.fillStyle = "#ffffff"
    g.textAlign = "center"
    g.textBaseline = "middle"
    g.font = done ? "700 40px system-ui, sans-serif" : "italic 700 46px Georgia, serif"
    g.fillText(done ? "✓" : "i", 56, 58)
    g.textAlign = "left"
    g.font = font
    g.fillStyle = "#f2f4f8"
    g.fillText(title, 108, 58)
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    t.anisotropy = 4
    return { tex: t, aspect: w / 112 }
}

function infoBuoy() {
    const white = withAir(new THREE.MeshStandardMaterial({ color: 0xe9eaee, roughness: 0.45 }))
    const violet = withAir(new THREE.MeshStandardMaterial({ color: BRAND, roughness: 0.45 }))
    const g = new THREE.Group()
    const add = (geo, mat, y) => {
        const m = new THREE.Mesh(geo, mat)
        m.position.y = y
        g.add(m)
        return m
    }
    add(new THREE.CylinderGeometry(1.25, 1.6, 1.3, 22), white, 0.05)
    add(new THREE.CylinderGeometry(1.62, 1.62, 0.22, 22), violet, -0.25)
    add(new THREE.CylinderGeometry(0.42, 0.52, 3.6, 16), white, 2.5)
    add(new THREE.CylinderGeometry(0.5, 0.5, 0.75, 16), violet, 3.0)
    const lamp = add(new THREE.SphereGeometry(0.3, 14, 10), new THREE.MeshBasicMaterial({ color: VIOLET }), 4.55)
    return { group: g, lamp }
}

export function createPlaces({ scene, props, drive, missions }) {
    const group = new THREE.Group()
    scene.add(group)

    let visited = new Set()
    try {
        visited = new Set(JSON.parse(localStorage.getItem(VISITED_KEY) || "[]"))
    } catch (e) {
        visited = new Set()
    }
    const save = () => {
        try {
            localStorage.setItem(VISITED_KEY, JSON.stringify([...visited]))
        } catch (e) {
            /* no storage: kept for this visit only */
        }
    }

    // ---- the buoys, the signs and a ring on the water around each ----
    const ringGeo = new THREE.RingGeometry(NEAR - 0.7, NEAR, 96, 1)
    const items = PLACES.map((p) => {
        const { group: holder, lamp } = infoBuoy()
        const item = props.adopt(holder, { x: p.x, z: p.z, yaw: Math.random() * 6.28, k: 1.0, buoy: "info", r: 1.6, lift: -0.1 })
        const sign = new THREE.Sprite(new THREE.SpriteMaterial({ transparent: true, depthWrite: false, fog: false }))
        sign.position.set(p.x, 7.6, p.z)
        sign.renderOrder = 2
        group.add(sign)
        const ringMat = new THREE.MeshBasicMaterial({ color: VIOLET, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide })
        const ring = new THREE.Mesh(ringGeo, ringMat)
        ring.rotation.x = -Math.PI / 2
        ring.position.set(p.x, 0.3, p.z)
        group.add(ring)
        const place = { ...p, item, sign, ring, lamp, armed: true, d: Infinity }
        paint(place)
        return place
    })
    function paint(p) {
        const done = visited.has(p.id)
        p.done = done
        const { tex, aspect } = signTexture(p.title, done)
        if (p.sign.material.map) p.sign.material.map.dispose()
        p.sign.material.map = tex
        p.sign.material.needsUpdate = true
        p.sign.scale.set(2.5 * aspect, 2.5, 1)
    }
    drive.state.pois = items

    // ---- the HUD: a button, the list of places, and the card ----
    const hud = drive.hud
    const btn = document.createElement("button")
    btn.type = "button"
    btn.className = "hud-btn"
    btn.innerHTML = `Places <kbd>P</kbd>`
    const tasksBtn = drive.actions.firstElementChild
    if (tasksBtn) tasksBtn.after(btn)
    else drive.actions.prepend(btn)

    const panel = document.createElement("div")
    panel.className = "hud-missions hud-places"
    panel.setAttribute("role", "dialog")
    panel.setAttribute("aria-label", "Places")
    hud.appendChild(panel)
    function renderPanel() {
        const n = items.filter((p) => visited.has(p.id)).length
        const pos = drive.pos
        panel.innerHTML = `
            <div class="hm-head"><h2>Places</h2><span>${n} of ${items.length} visited</span></div>
            <div class="hp-progress" aria-hidden="true"><i style="transform: scaleX(${(n / items.length).toFixed(3)})"></i></div>
            <p class="hm-intro">Info buoys around the harbour. Sail up to one to read about it.</p>
            <ol class="hm-list hp-list">
                ${items
                    .map((p) => {
                        const dx = p.item.x - pos.x
                        const dz = p.item.z - pos.z
                        const d = Math.hypot(dx, dz)
                        const done = visited.has(p.id)
                        return `<li>
                        <button type="button" class="hm-item${done ? " is-done" : ""}" data-place="${p.id}" aria-label="${esc(p.title)}: set course">
                            <span class="hp-dot" aria-hidden="true">${done ? "✓" : "i"}</span>
                            <span class="hm-body"><b>${esc(p.title)}</b><span>${esc(p.kicker)} · <em>${Math.round(d * 0.3)} m ${bearingName(dx, dz)}</em></span></span>
                        </button>
                    </li>`
                    })
                    .join("")}
            </ol>
            <div class="hm-foot"><span>${n === items.length ? "All places visited" : "Pick one to set a course: the compass points the way"}</span><button type="button" class="hud-btn" data-close>Close</button></div>`
    }
    function openPanel(on, focus = true) {
        if (on && missions && missions.busy) {
            showNote("Finish or stop the task first")
            return
        }
        if (on) {
            renderPanel()
            closeCard()
        }
        panel.classList.toggle("is-on", on)
        if (on && focus) {
            const first = panel.querySelector(".hm-item")
            if (first) first.focus({ preventScroll: true })
        }
    }
    btn.addEventListener("click", () => openPanel(!panel.classList.contains("is-on")))
    panel.addEventListener("click", (e) => {
        const b = e.target.closest("[data-place]")
        if (b) {
            const p = items.find((q) => q.id === b.dataset.place)
            course = p
            drive.state.target = { x: p.item.x, z: p.item.z }
            openPanel(false)
            showNote(`Course set: ${p.title}`)
            return
        }
        if (e.target.closest("[data-close]")) openPanel(false)
    })

    const card = document.createElement("div")
    card.className = "hud-place"
    card.setAttribute("role", "dialog")
    card.setAttribute("aria-live", "polite")
    hud.appendChild(card)
    let open = null
    function openCard(p, isNew) {
        open = p
        const n = items.filter((q) => visited.has(q.id)).length
        card.innerHTML = `
            <div class="hpl-top"><span class="hpl-kicker">${esc(p.kicker)}</span><button type="button" class="hpl-x" data-act="close" aria-label="Close">×</button></div>
            <h2>${esc(p.title)}</h2>
            ${p.text.map((t) => `<p>${esc(t)}</p>`).join("")}
            ${p.list ? `<dl class="hpl-list">${p.list.map(([a, b]) => `<div><dt>${esc(a)}</dt><dd>${esc(b)}</dd></div>`).join("")}</dl>` : ""}
            ${p.facts ? `<ul class="hpl-facts">${p.facts.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>` : ""}
            <div class="hpl-btns">
                ${p.action ? `<button type="button" class="hud-btn hr-main" data-act="${p.action[0]}">${p.action[1]}</button>` : ""}
                <a class="hud-btn" href="${linkTo(p.link[0])}" target="_blank" rel="noopener">${p.link[1]} <span aria-hidden="true">↗</span></a>
            </div>
            <p class="hpl-foot">${isNew ? `New place · ${n} of ${items.length} visited` : `${n} of ${items.length} places visited`}</p>`
        card.classList.add("is-on")
    }
    function closeCard() {
        open = null
        card.classList.remove("is-on")
    }
    card.addEventListener("click", (e) => {
        const b = e.target.closest("[data-act]")
        if (!b) return
        const act = b.dataset.act
        if (act === "lid") drive.setLid(true)
        if (act === "tasks" && missions) missions.openPanel(true)
        closeCard()
    })

    const note = document.createElement("div")
    note.className = "hud-note"
    note.setAttribute("aria-live", "polite")
    hud.appendChild(note)
    let noteUntil = 0
    function showNote(text) {
        note.textContent = text
        note.classList.add("is-on")
        noteUntil = performance.now() / 1000 + 2.2
    }

    addEventListener("keydown", (e) => {
        if (!drive.active || e.target.closest?.("input, textarea")) return
        if (e.key.toLowerCase() === "p" && !e.repeat) openPanel(!panel.classList.contains("is-on"))
    })
    drive.onEscape(() => {
        if (panel.classList.contains("is-on")) {
            openPanel(false)
            return true
        }
        if (open) {
            closeCard()
            return true
        }
        return false
    })

    let course = null
    function update(t, dt, exposure = 1) {
        const gain = 1 / Math.max(exposure, 0.5)
        const busy = missions && missions.busy
        // the signs and rings: quieter during a task, so the course stands out
        for (const p of items) {
            const done = visited.has(p.id)
            const h = waveHeight(p.item.x, p.item.z, t, 1) * 0.85
            p.sign.position.set(p.item.x, h + 7.6 + Math.sin(t * 1.3 + p.x) * 0.15, p.item.z)
            p.ring.position.set(p.item.x, h + 0.14, p.item.z)
            const pulse = 0.5 + 0.5 * Math.sin(t * 2.2 + p.z)
            // close by, the card says it all: the sign and the ring step back (and do not fill the view)
            const dd = Math.hypot(drive.pos.x - p.item.x, drive.pos.z - p.item.z)
            const ringK = THREE.MathUtils.smoothstep(dd, NEAR - 1, NEAR + 14)
            p.ring.material.color.copy(VIOLET).multiplyScalar(gain * (done ? 0.12 : 0.22 + 0.2 * pulse) * (busy ? 0.3 : 1) * ringK)
            p.ring.visible = ringK > 0.01
            p.sign.material.opacity = (busy ? 0.35 : 1) * THREE.MathUtils.smoothstep(dd, 16, 38)
            p.sign.visible = p.sign.material.opacity > 0.01
            p.lamp.material.color.copy(VIOLET).multiplyScalar(Math.sin(t * 3 + p.x) > 0.3 ? 1.6 * gain : 0.35)
        }
        if (note.classList.contains("is-on") && performance.now() / 1000 > noteUntil) note.classList.remove("is-on")
        // the buoys are for the helm: the pages behind keep their harbour as it was
        const show = drive.active
        if (group.visible !== show) {
            group.visible = show
            for (const p of items) p.item.obj.visible = show
        }
        if (!drive.active) {
            panel.classList.remove("is-on")
            if (open) closeCard()
            for (const p of items) p.armed = true
            course = null
            return
        }
        if (busy) {
            if (open) closeCard()
            if (panel.classList.contains("is-on")) panel.classList.remove("is-on")
            course = null
            return
        }
        const pos = drive.pos
        for (const p of items) {
            p.d = Math.hypot(pos.x - p.item.x, pos.z - p.item.z)
            if (p.d > NEAR + 14) p.armed = true
            if (p.d < NEAR && p.armed && !drive.lidOpen) {
                p.armed = false
                const isNew = !visited.has(p.id)
                if (isNew) {
                    visited.add(p.id)
                    save()
                    paint(p)
                }
                if (course === p) {
                    course = null
                    if (drive.state.target && drive.state.target.x === p.item.x) drive.state.target = null
                }
                openCard(p, isNew)
            }
        }
        // a course set to a place follows its buoy, and goes when you are there
        if (course && drive.state.target) drive.state.target = { x: course.item.x, z: course.item.z }
        // sailing on closes the card
        if (open && open.d > NEAR + 30) closeCard()
        if (panel.classList.contains("is-on") && Math.floor(t * 2) !== Math.floor((t - dt) * 2)) {
            // keep the distances fresh (without stealing focus)
            const f = document.activeElement && document.activeElement.dataset ? document.activeElement.dataset.place : null
            renderPanel()
            if (f) panel.querySelector(`[data-place="${f}"]`)?.focus({ preventScroll: true })
        }
    }

    return {
        group,
        list: items,
        update,
        openPanel,
        get visited() {
            return [...visited]
        },
    }
}
