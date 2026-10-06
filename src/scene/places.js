import * as THREE from "three"
import { waveHeight } from "./world/waves.js"
import { withAir } from "./world/air.js"
import { confetti } from "./hudfx.js"

/* ================================================================
   Places to visit at the helm: posts on the water, each with a sign
   over it. Sail up to one and a card opens with what the site says
   about it. There are four kinds, each with its own look:
   - info buoys for the site's pages (Marinor, Argus, Njord and its
     course, RoboBoat, the partners, Proteus, joining),
   - the timeline: tall posts in a row, 2025 to the long run,
   - how we built Argus: frames on rafts with the photos from the site,
   - how Argus finds its way: numbered buoys, sensors to propellers.
   A faint line on the water leads from post to post in each row. The
   places you have been to are kept in this browser; the list (P)
   shows them by kind, how far away the rest are, and can set a course.
   ================================================================ */

const VISITED_KEY = "marinor-places-visited"
const NEAR = 17 // the card opens this close (5 m)
const BRAND = "#7c469c"

// the site's pages, for the "read more" links (the one-page build has its own addresses)
const KEYS = {
    "/about/": "about",
    "/projects/": "projects",
    "/projects/argus/": "projects-argus",
    "/projects/proteus/": "projects-proteus",
    "/team/": "team",
    "/competitions/": "competitions",
    "/competitions/njord-challenge/": "njord",
    "/competitions/roboboat/": "roboboat",
    "/sponsor/": "sponsor",
    "/join/": "join",
}
// the game on the Framer site (in a frame, ?site=<its address>): the links go to that site's pages.
// The site sends its own page paths too (?pages=, JSON, keyed as in PAGE_KEYS); those win over these.
const FRAMER = {
    "/about/": "/about",
    "/projects/": "/projects",
    "/projects/argus/": "/projects/argus",
    "/projects/proteus/": "/projects/proteus",
    "/team/": "/team",
    "/competitions/": "/competitions",
    "/competitions/njord-challenge/": "/competitions/njord-challange",
    "/competitions/roboboat/": "/competitions/roboat",
    "/sponsor/": "/want-to-spons-us",
    "/join/": "/join",
}
const PAGE_KEYS = {
    "/about/": "about",
    "/projects/": "projects",
    "/projects/argus/": "argus",
    "/projects/proteus/": "proteus",
    "/team/": "team",
    "/competitions/": "competitions",
    "/competitions/njord-challenge/": "njord",
    "/competitions/roboboat/": "roboboat",
    "/sponsor/": "sponsor",
    "/join/": "join",
}
const PARAMS = new URLSearchParams(location.search)
const SITE = (() => {
    try {
        const u = new URL(PARAMS.get("site") || "")
        return u.protocol === "https:" || u.protocol === "http:" ? u.origin : null
    } catch (e) {
        return null
    }
})()
const SITE_PAGES = (() => {
    try {
        const o = JSON.parse(PARAMS.get("pages") || "{}")
        return o && typeof o === "object" ? o : {}
    } catch (e) {
        return {}
    }
})()
const isOut = (path) => /^https?:/.test(path)
const sitePath = (path) => {
    const own = SITE_PAGES[PAGE_KEYS[path]]
    return typeof own === "string" && own.startsWith("/") ? own : FRAMER[path]
}
const linkTo = (path) => {
    if (isOut(path)) return path
    if (SITE && sitePath(path)) return SITE + sitePath(path)
    return typeof window.__glbSource === "function" ? location.pathname + location.search + "#page-" + KEYS[path] : path
}
// a link to the site opens the page on the site itself, not inside the game's frame:
// ask the page around the frame to go there, and if it does not, take the whole tab there
const inFrame = (() => {
    try {
        return window.top !== window.self
    } catch (e) {
        return true
    }
})()
let fallback = 0
addEventListener("message", (e) => {
    // the site took the link: no need for the fallback
    if (e.origin === SITE && e.data && e.data.type === "marinor:navigating") clearTimeout(fallback)
})
function goToSite(path) {
    const url = linkTo(path)
    if (inFrame) {
        try {
            window.parent.postMessage({ type: "marinor:navigate", path: sitePath(path), url }, SITE)
        } catch (e) {}
        clearTimeout(fallback)
        fallback = setTimeout(() => {
            try {
                window.top.location.href = url
            } catch (e) {
                window.open(url, "_blank", "noopener")
            }
        }, 250)
    } else {
        location.href = url
    }
}

const GROUPS = [
    { id: "pages", kind: "info", name: "Info buoys", intro: "Sail up to a buoy to read about it.", color: "#c39cf0" },
    { id: "timeline", kind: "milestone", name: "What we have done so far", intro: "We started in 2025. Here is what we have done and what we plan next.", color: "#f2c230" },
    { id: "build", kind: "photo", name: "How we built it", intro: "The build, from the first hull in the workshop to the first test in the harbour.", color: "#9fd4ff" },
    { id: "autonomy", kind: "step", name: "How Argus finds its way", intro: "From what the sensors see to the signal that turns the propellers, in the order it happens on board.", color: "#7ff0c8" },
]

// the words and the photos are the site's own
const PLACES = [
    // ---- info buoys ----
    {
        id: "argus",
        group: "pages",
        x: 34,
        z: 44,
        kicker: "Project Argus",
        title: "Argus",
        img: ["/media/img/argus-argus-on-water-dscf6237-800.webp", "Argus on the water"],
        lead: "Our first autonomous boat, the one you are driving right now.",
        text: [
            "Argus is a catamaran built by students in Trondheim. It finds its way on the water with no one at the wheel: the sensors see the harbour, the computer on board plans a course, and the motors steer it.",
            "We built it from the first hull in the workshop to the first test in the harbour in under a year, for the Njord Challenge 2026.",
        ],
        stats: [
            ["2", "hulls"],
            ["4", "motors"],
            ["2026", "first race"],
        ],
        list: [
            ["See", "LiDAR and a stereo camera give a 3D picture of what is around the boat."],
            ["Know where it is", "A Kongsberg Seapath 130 gives position and heading, with correction data over 5G."],
            ["Plan and steer", "A cost map and the Field D* planner find the route, and a Pixhawk drives the four motors."],
        ],
        link: ["/projects/argus/", "Read about Argus"],
        links: [["/projects/", "All our projects"]],
        action: ["lid", "Look inside"],
    },
    {
        id: "marinor",
        group: "pages",
        x: -30,
        z: -150,
        kicker: "About us",
        title: "Marinor NTNU",
        img: ["/media/img/team-team-2025-group-photo-800.webp", "The Marinor NTNU team"],
        lead: "A student organisation at NTNU that builds autonomous boats.",
        text: [
            "Our members study robotics, cybernetics, marine technology, computer science, economics and more. We work with the Department of Engineering Cybernetics at NTNU.",
            "The long term goal: a boat of about 25 feet, with room for a crew, that sails the whole way from Trondheim to Nordkapp on its own.",
        ],
        stats: [
            ["2025", "founded"],
            ["35+", "members"],
            ["10", "groups"],
        ],
        facts: ["Trondheim", "NTNU", "Engineering Cybernetics"],
        link: ["/about/", "About Marinor"],
        links: [["/team/", "Meet the team"]],
    },
    {
        id: "njord",
        group: "pages",
        x: 205,
        z: 112,
        kicker: "Competitions",
        title: "The Njord Challenge",
        img: ["/media/img/competitions-njord-all-teams-at-haven-800.webp", "All the teams at the Njord Challenge in Nyhavna"],
        lead: "Autonomous boats from student teams, racing in Trondheim every August.",
        text: [
            "Teams from several countries bring boats they have built themselves and let them solve tasks on their own, with no one steering.",
            "Marinor NTNU is on the team list for the Njord Challenge 2026. We built Argus for these four tasks, and you can try them here in the harbour.",
        ],
        stats: [
            ["4", "tasks"],
            ["5", "days"],
            ["Aug", "every year"],
        ],
        list: [
            ["Find the way", "Sail a course through gates of buoys."],
            ["See what is around", "Find and report the marks on the course."],
            ["Avoid other boats", "Keep clear of a vessel that crosses your path."],
            ["Dock", "Find the right dock and lay alongside it."],
        ],
        link: ["/competitions/njord-challenge/", "Read about Njord"],
        links: [["/competitions/", "All competitions"]],
        action: ["tasks", "Try the four tasks"],
    },
    {
        id: "course",
        group: "pages",
        x: 268,
        z: 150,
        kicker: "Njord · On the course",
        title: "What is out on the course",
        lead: "The course has the same kind of marks a boat meets at sea, and the boat has to read them.",
        text: [],
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
        group: "pages",
        x: -235,
        z: -205,
        kicker: "Competitions",
        title: "RoboBoat",
        img: ["/media/img/competitions-roboboat-hero-boat-barka-800.webp", "A student boat at RoboBoat"],
        lead: "The big international competition for autonomous boats, in Florida.",
        text: [
            "RoboBoat is run by RoboNation in the USA. Student teams from all over the world design, build and test their own autonomous surface vessel, and then bring it to Florida to solve a course on the water.",
            "It is the next step for Marinor after Njord: a bigger stage, harder tasks and teams from the best universities in the world.",
        ],
        stats: [
            ["Feb", "every year"],
            ["USA", "Sarasota, Florida"],
        ],
        facts: ["Run by RoboNation", "Teams from all over the world"],
        link: ["/competitions/roboboat/", "Read about RoboBoat"],
        links: [["/competitions/", "All competitions"]],
    },
    {
        id: "partners",
        group: "pages",
        x: -262,
        z: -10,
        kicker: "Our partners",
        title: "Thanks to our partners",
        logos: [
            ["/media/img/sponsors-kongsberg.webp", "Kongsberg Discovery"],
            ["/media/img/sponsors-dnv.webp", "DNV"],
            ["/media/img/sponsors-telenor.webp", "Telenor"],
            ["/media/img/sponsors-ntnu.webp", "NTNU"],
            ["/media/img/sponsors-frifond.webp", "Frifond"],
        ],
        lead: "These companies and organisations make it possible for us to build boats and travel to competitions.",
        text: ["We are looking for more partners. As a partner you meet motivated students in robotics and marine technology, and your name sails with us on the water and at the competitions."],
        list: [
            ["Visibility", "Your logo on the boat, our site and at the competitions."],
            ["Recruitment", "Get to know the students before they graduate."],
            ["Knowledge", "Follow the work and share what you know."],
        ],
        link: ["/sponsor/", "Become a partner"],
    },
    {
        id: "join",
        group: "pages",
        x: 86,
        z: -205,
        kicker: "Join us",
        title: "Join Marinor",
        img: ["/media/img/argus-dock-team-gathered-2026-04-19-800.webp", "The team behind Argus"],
        lead: "All NTNU students can apply. You do not need to know anything about boats.",
        text: [
            "We take in new members at set times. Follow us on Instagram and LinkedIn, where we post when applications open.",
            "We have ten groups. Pick the one that fits what you study, or what you want to learn:",
        ],
        facts: ["Software", "Hardware", "Autonomy", "Control", "GUI", "Perception", "Simulation", "Electrical", "Hull", "Business"],
        link: ["/join/", "Our groups"],
        links: [
            ["https://www.instagram.com/marinorntnu/", "Instagram"],
            ["https://www.linkedin.com/company/marinor-ntnu", "LinkedIn"],
        ],
    },
    {
        id: "proteus",
        group: "pages",
        x: 128,
        z: 226,
        kicker: "Project Proteus",
        title: "Proteus",
        lead: "Our next boat. We are working on the design now.",
        text: [
            "Everything we learn on Argus goes into Proteus. It is a step on the way to the 25 foot boat that will sail from Trondheim to Nordkapp on its own.",
        ],
        facts: ["In design", "Built on what we learn from Argus"],
        link: ["/projects/proteus/", "About Proteus"],
        links: [["/projects/", "All our projects"]],
    },
    // ---- the timeline (the about page) ----
    {
        id: "t2025",
        group: "timeline",
        x: 370,
        z: -60,
        badge: "2025",
        title: "Marinor is founded",
        text: ["Four students start Marinor NTNU in Trondheim. The first members build the hulls for Argus in the workshop."],
        img: ["/media/img/argus-workshop-hull-on-bench-2025-11-16-800.webp", "The first hull on the workbench"],
        link: ["/about/", "About Marinor"],
    },
    {
        id: "t2026",
        group: "timeline",
        x: 440,
        z: -55,
        badge: "2026",
        title: "First Njord Challenge",
        text: ["We sail Argus in Njord: The Autonomous Ship Challenge in Trondheim, against university teams from several countries."],
        link: ["/competitions/njord-challenge/", "Read about Njord"],
    },
    {
        id: "t2027",
        group: "timeline",
        x: 510,
        z: -60,
        badge: "2027",
        title: "Win Njord, then RoboBoat",
        text: ["In 2027 we want to win the Njord Challenge. After that we want to enter RoboBoat in Florida."],
        link: ["/competitions/roboboat/", "Read about RoboBoat"],
    },
    {
        id: "t2028",
        group: "timeline",
        x: 580,
        z: -55,
        badge: "2028",
        title: "A bigger boat",
        text: ["In 2028 we plan to start building a much bigger boat: about 25 feet long, with room for a crew, but built to sail fully on its own."],
        link: ["/about/", "About Marinor"],
    },
    {
        id: "tlong",
        group: "timeline",
        x: 655,
        z: -55,
        badge: "→",
        kicker: "The long run",
        title: "Trondheim to Nordkapp",
        text: ["The long term goal: the 25 foot boat sails autonomously the whole way from Trondheim to Nordkapp, with a crew on board but no one at the wheel."],
        link: ["/about/", "About Marinor"],
    },
    // ---- how we built it (the Argus page) ----
    {
        id: "b1",
        group: "build",
        x: -170,
        z: 400,
        kicker: "16 November 2025",
        title: "Shaping the hulls",
        text: ["Work starts in the workshop with the first hull."],
        img: ["/media/img/argus-workshop-hull-2025-11-16-800.webp", "Shaping the first hull"],
        link: ["/projects/argus/", "Read about Argus"],
    },
    {
        id: "b2",
        group: "build",
        x: -95,
        z: 428,
        kicker: "8 January 2026",
        title: "Sanding and finishing",
        text: ["Long days of sanding, filling and painting to make the hulls smooth and watertight."],
        img: ["/media/img/argus-workshop-sanding-2026-01-08-800.webp", "Sanding and finishing"],
        link: ["/projects/argus/", "Read about Argus"],
    },
    {
        id: "b3",
        group: "build",
        x: -20,
        z: 442,
        kicker: "8 March 2026",
        title: "First time on the water",
        text: ["The first float test in the harbour. It floats."],
        img: ["/media/img/argus-float-test-harbour-2026-03-08-800.webp", "First float test"],
        link: ["/projects/argus/", "Read about Argus"],
    },
    {
        id: "b4",
        group: "build",
        x: 55,
        z: 432,
        kicker: "19 April 2026",
        title: "Putting it all together",
        text: ["Hulls, frame and electronics are joined together on the dock for the first time."],
        img: ["/media/img/argus-dock-wiring-electronics-dscf6185-800.webp", "Wiring the electronics on the dock"],
        link: ["/projects/argus/", "Read about Argus"],
    },
    {
        id: "b5",
        group: "build",
        x: 130,
        z: 408,
        kicker: "26 April 2026",
        title: "Launch day",
        text: ["Argus goes into the water with all sensors on board, ready for testing."],
        img: ["/media/img/argus-argus-in-water-front-dscf6216-800.webp", "Argus in the water"],
        link: ["/projects/argus/", "Read about Argus"],
    },
    // ---- how Argus finds its way (the Argus page) ----
    {
        id: "a1",
        group: "autonomy",
        x: -165,
        z: -95,
        badge: "1",
        title: "Stereo camera and LiDAR",
        text: ["The depth camera measures distance and recognises objects like buoys and boats. The LiDAR measures the distance to everything around the boat."],
        img: ["/media/img/argus-argus-sensors-closeup-dscf6178-800.webp", "Sensors on board"],
        link: ["/projects/argus/", "Read about Argus"],
    },
    {
        id: "a2",
        group: "autonomy",
        x: -210,
        z: -75,
        badge: "2",
        title: "Kongsberg Seapath 130",
        text: ["GNSS receivers give the position and heading. Gyroscopes and accelerometers fill in between the satellite fixes and keep the estimate going if the signal drops out. Correction data over 5G makes the position more accurate."],
        link: ["/projects/argus/", "Read about Argus"],
    },
    {
        id: "a3",
        group: "autonomy",
        x: -258,
        z: -92,
        badge: "3",
        title: "Cost map",
        text: ["What the sensors find goes into a map of the water around the boat. Obstacles, and the water close to them, cost more to sail through."],
        link: ["/projects/argus/", "Read about Argus"],
    },
    {
        id: "a4",
        group: "autonomy",
        x: -296,
        z: -126,
        badge: "4",
        title: "State machine",
        text: ["Keeps track of what Argus is doing right now, for example following the course, going around another boat or docking, and switches when something changes."],
        link: ["/projects/argus/", "Read about Argus"],
    },
    {
        id: "a5",
        group: "autonomy",
        x: -312,
        z: -172,
        badge: "5",
        title: "Field D*",
        text: ["The path planning algorithm finds the cheapest route across the cost map, and plans again when the map changes."],
        link: ["/projects/argus/", "Read about Argus"],
    },
    {
        id: "a6",
        group: "autonomy",
        x: -296,
        z: -218,
        badge: "6",
        title: "Pixhawk",
        text: [
            "The flight controller turns the plan into PWM signals for the four motors.",
            "All data from Argus is sent to land over 5G, so we can follow its internal state and get important information while it sails.",
        ],
        link: ["/projects/argus/", "Read about Argus"],
    },
]

const NAMES = { 0: "N", 45: "NE", 90: "E", 135: "SE", 180: "S", 225: "SW", 270: "W", 315: "NW" }
const bearingName = (dx, dz) => {
    // as on the compass: north is +z, east is -x
    const b = ((Math.atan2(-dx, dz) * 180) / Math.PI + 360) % 360
    return NAMES[(Math.round(b / 45) * 45) % 360]
}
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;")
const CAMERA = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>`
const KEYS_HINT = `<span class="hud-keyhint" aria-hidden="true"><kbd>↑</kbd><kbd>↓</kbd> choose <kbd>Enter</kbd> set course <kbd>Esc</kbd> close</span>`

// the sign over a post: a badge (an "i", a year, a number; a tick once visited) and the name, in a pill
function signTexture({ badge, title, done, color }) {
    const c = document.createElement("canvas")
    const g = c.getContext("2d")
    const font = "600 44px system-ui, -apple-system, 'Segoe UI', sans-serif"
    const bfont = badge === "i" && !done ? "italic 700 46px Georgia, serif" : "700 40px system-ui, sans-serif"
    const btxt = done ? "✓" : badge
    g.font = bfont
    const bw = Math.max(68, Math.ceil(g.measureText(btxt).width) + 34)
    g.font = font
    const w = Math.ceil(g.measureText(title).width) + bw + 58
    c.width = w
    c.height = 112
    g.fillStyle = "rgba(12, 14, 22, 0.84)"
    g.strokeStyle = done ? "rgba(159, 227, 181, 0.85)" : color
    g.lineWidth = 4
    g.beginPath()
    g.roundRect(4, 6, w - 8, 100, 46)
    g.fill()
    g.stroke()
    g.fillStyle = done ? "#3d8f5c" : badge === "i" ? BRAND : color
    g.beginPath()
    g.roundRect(22, 22, bw, 68, 34)
    g.fill()
    g.fillStyle = done || badge === "i" ? "#ffffff" : "#0b0d14"
    g.textAlign = "center"
    g.textBaseline = "middle"
    g.font = bfont
    g.fillText(btxt, 22 + bw / 2, 58)
    g.textAlign = "left"
    g.font = font
    g.fillStyle = "#f2f4f8"
    g.fillText(title, bw + 40, 58)
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    t.anisotropy = 4
    return { tex: t, aspect: w / 112 }
}

// ---- the posts ----
const std = (color, roughness = 0.45, metalness = 0) => withAir(new THREE.MeshStandardMaterial({ color, roughness, metalness }))
function part(g, geo, mat, x, y, z = 0) {
    const m = new THREE.Mesh(geo, mat)
    m.position.set(x, y, z)
    g.add(m)
    return m
}
// a white spar buoy with a band in the post's colour and a lamp on top
function buoyPost(color, { tall = false } = {}) {
    const g = new THREE.Group()
    const white = std(0xe9eaee)
    const band = std(color)
    part(g, new THREE.CylinderGeometry(1.25, 1.6, 1.3, 22), white, 0, 0.05)
    part(g, new THREE.CylinderGeometry(1.62, 1.62, 0.22, 22), band, 0, -0.25)
    const h = tall ? 9 : 3.6
    part(g, new THREE.CylinderGeometry(0.36, 0.52, h, 16), white, 0, 0.7 + h / 2)
    part(g, new THREE.CylinderGeometry(0.46, 0.46, tall ? 1.4 : 0.75, 16), band, 0, tall ? 0.7 + h - 1.0 : 3.0)
    if (tall) part(g, new THREE.CylinderGeometry(0.44, 0.44, 0.5, 16), band, 0, 0.7 + h - 2.6)
    const lamp = part(g, new THREE.SphereGeometry(0.3, 14, 10), new THREE.MeshBasicMaterial({ color }), 0, 0.95 + h)
    return { group: g, lamp, top: 1.3 + h }
}
// a raft with a frame on two legs; the photo goes in the frame
function photoPost(color) {
    const g = new THREE.Group()
    const dark = std(0x2b2724, 0.8)
    const wood = std(0x6b4f36, 0.85)
    part(g, new THREE.BoxGeometry(6.4, 0.7, 3.4), dark, 0, 0.1)
    part(g, new THREE.BoxGeometry(6.6, 0.12, 3.6), wood, 0, 0.5)
    const easel = new THREE.Group()
    easel.position.y = 0.55
    g.add(easel)
    for (const s of [-1, 1]) part(easel, new THREE.BoxGeometry(0.22, 4.2, 0.22), wood, s * 2.6, 2.1, -0.2)
    part(easel, new THREE.BoxGeometry(7.4, 5.2, 0.28), dark, 0, 4.7, 0)
    const photo = part(easel, new THREE.PlaneGeometry(6.8, 4.53), new THREE.MeshStandardMaterial({ color: 0x40464e, roughness: 0.6 }), 0, 4.7, 0.15)
    const back = part(easel, new THREE.PlaneGeometry(6.8, 4.53), photo.material, 0, 4.7, -0.15)
    back.rotation.y = Math.PI
    const lamp = part(easel, new THREE.SphereGeometry(0.26, 12, 8), new THREE.MeshBasicMaterial({ color }), 0, 7.6, 0)
    return { group: g, lamp, easel, photo, top: 8.4 }
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
    const groupOf = (p) => GROUPS.find((q) => q.id === p.group)

    // ---- the posts, their signs and a soft glow on the water around each ----
    const ringGeo = new THREE.CircleGeometry(NEAR, 48)
    const glowTex = (() => {
        // light in a soft band round the post, nothing under it, no hard edge
        const c = document.createElement("canvas")
        c.width = c.height = 128
        const g = c.getContext("2d")
        const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64)
        grd.addColorStop(0, "rgba(255,255,255,0)")
        grd.addColorStop(0.18, "rgba(255,255,255,0.15)")
        grd.addColorStop(0.42, "rgba(255,255,255,0.55)")
        grd.addColorStop(0.7, "rgba(255,255,255,0.2)")
        grd.addColorStop(1, "rgba(255,255,255,0)")
        g.fillStyle = grd
        g.fillRect(0, 0, 128, 128)
        return new THREE.CanvasTexture(c)
    })()
    const items = PLACES.map((p) => {
        const gr = groupOf(p)
        const col = new THREE.Color(gr.color)
        let built
        if (gr.kind === "photo") built = photoPost(gr.color)
        else built = buoyPost(gr.kind === "info" ? BRAND : gr.color, { tall: gr.kind === "milestone" })
        const item = props.adopt(built.group, { x: p.x, z: p.z, yaw: Math.random() * 6.28, k: gr.kind === "photo" ? 0.5 : 1.0, buoy: "info", r: gr.kind === "photo" ? 3.2 : 1.6, lift: -0.1 })
        const sign = new THREE.Sprite(new THREE.SpriteMaterial({ transparent: true, depthWrite: false, fog: false }))
        sign.renderOrder = 2
        group.add(sign)
        const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: col, map: glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }))
        ring.rotation.x = -Math.PI / 2
        group.add(ring)
        const members = PLACES.filter((q) => q.group === p.group)
        const place = { ...p, gr, col, item, sign, ring, lamp: built.lamp, easel: built.easel, photo: built.photo, signY: built.top + 2.2, armed: true, d: Infinity, n: members.indexOf(p) + 1, of: members.length }
        paint(place)
        return place
    })
    function paint(p) {
        const done = visited.has(p.id)
        p.done = done
        const { tex, aspect } = signTexture({ badge: p.gr.kind === "info" ? "i" : p.badge || String(p.n), title: p.title, done, color: p.gr.color })
        if (p.sign.material.map) p.sign.material.map.dispose()
        p.sign.material.map = tex
        p.sign.material.needsUpdate = true
        p.sign.scale.set(2.5 * aspect, 2.5, 1)
    }
    drive.state.pois = items

    // the photos in the frames: loaded the first time you take the helm
    let photosLoaded = false
    function loadPhotos() {
        photosLoaded = true
        const loader = new THREE.TextureLoader()
        for (const p of items) {
            if (!p.photo || !p.img) continue
            loader.load(p.img[0], (tex) => {
                tex.colorSpace = THREE.SRGBColorSpace
                tex.anisotropy = 4
                const m = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.55, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.25 })
                p.photo.material = m
                p.photo.parent.children.forEach((o) => {
                    if (o.geometry && o.geometry.type === "PlaneGeometry") o.material = m
                })
            })
        }
    }

    // ---- a faint line on the water from post to post, for each row ----
    const trails = []
    for (const gr of GROUPS) {
        if (gr.kind === "info") continue
        const pts = items.filter((p) => p.group === gr.id).map((p) => new THREE.Vector3(p.x, 0, p.z))
        const curve = new THREE.CatmullRomCurve3(pts, false, "centripetal")
        const N = 24 * (pts.length - 1)
        const len = curve.getLength()
        const pos = new Float32Array((N + 1) * 2 * 3)
        const uv = new Float32Array((N + 1) * 2 * 2)
        const idx = []
        const samples = []
        for (let i = 0; i <= N; i++) {
            const u = i / N
            const p = curve.getPointAt(u)
            const tg = curve.getTangentAt(u)
            const sx = -tg.z
            const sz = tg.x
            samples.push([p.x, p.z, sx, sz])
            uv.set([u * len * 0.08, 0, u * len * 0.08, 1], i * 4)
            if (i < N) idx.push(i * 2, i * 2 + 1, i * 2 + 2, i * 2 + 1, i * 2 + 3, i * 2 + 2)
        }
        const geo = new THREE.BufferGeometry()
        geo.setAttribute("position", new THREE.BufferAttribute(pos, 3))
        geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2))
        geo.setIndex(idx)
        const mat = new THREE.ShaderMaterial({
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            side: THREE.DoubleSide,
            uniforms: { uCol: { value: new THREE.Color(gr.color) }, uTime: { value: 0 }, uGain: { value: 0 } },
            vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
            fragmentShader: /* glsl */ `uniform vec3 uCol; uniform float uTime; uniform float uGain; varying vec2 vUv;
                void main(){
                    float across = 1.0 - abs(vUv.y - 0.5) * 2.0;
                    float dash = smoothstep(0.35, 0.5, fract(vUv.x - uTime * 0.4)) * (1.0 - smoothstep(0.75, 0.9, fract(vUv.x - uTime * 0.4)));
                    gl_FragColor = vec4(uCol * across * dash * uGain, 1.0);
                }`,
        })
        const mesh = new THREE.Mesh(geo, mat)
        mesh.frustumCulled = false
        group.add(mesh)
        trails.push({ mesh, mat, samples, pos })
    }

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
    drive.addMenu(panel)
    const badgeHtml = (p) => (visited.has(p.id) ? "✓" : p.gr.kind === "info" ? "i" : p.gr.kind === "photo" ? CAMERA : esc(p.badge || p.n))
    const where = (p) => {
        const dx = p.item.x - drive.pos.x
        const dz = p.item.z - drive.pos.z
        return `${Math.round(Math.hypot(dx, dz) * 0.3)} m ${bearingName(dx, dz)}`
    }
    // the groups fold open and shut (a long list is easier to take in a group at a time);
    // the one with the next place not yet seen starts open, and what you open or shut stays so
    const folded = new Map()
    function renderPanel() {
        const n = items.filter((p) => visited.has(p.id)).length
        const next = items.find((p) => !visited.has(p.id))
        panel.innerHTML = `
            <div class="hm-head">
                <div><span class="hm-kicker">Around the harbour</span><h2>Places</h2></div>
                <span class="hm-score"><b>${n}</b>/${items.length} visited</span>
            </div>
            <div class="hp-progress" aria-hidden="true"><i style="transform: scaleX(${(n / items.length).toFixed(3)})"></i></div>
            ${GROUPS.map((gr) => {
                const mine = items.filter((p) => p.group === gr.id)
                const k = mine.filter((p) => visited.has(p.id)).length
                const isOpen = folded.has(gr.id) ? folded.get(gr.id) : !!next && next.group === gr.id
                return `<section class="hp-group is-fold${isOpen ? " is-open" : ""}" style="--gc: ${gr.color}" data-group="${gr.id}">
                    <h3><button type="button" class="hp-fold" data-fold aria-expanded="${isOpen}"><span>${esc(gr.name)}</span><small>${k === mine.length ? "All seen ✓" : `${k} of ${mine.length}`}</small><i class="hp-chev" aria-hidden="true"></i></button></h3>
                    <div class="hp-fold-body">
                    <p class="hp-intro">${esc(gr.intro)}</p>
                    <ol class="hm-list hp-list">
                        ${mine
                            .map(
                                (p) => `<li>
                            <button type="button" class="hm-item${visited.has(p.id) ? " is-done" : ""}" data-place="${p.id}" aria-label="${esc(p.title)}: set course">
                                <span class="hp-dot is-${gr.kind}" aria-hidden="true">${badgeHtml(p)}</span>
                                <span class="hm-body"><b>${esc(p.title)}</b><span><em data-where="${p.id}">${where(p)}</em></span></span>
                            </button>
                        </li>`
                            )
                            .join("")}
                    </ol>
                    </div>
                </section>`
            }).join("")}
            <div class="hm-foot">${KEYS_HINT}<button type="button" class="hud-btn" data-close>Close</button></div>`
    }
    function openPanel(on, focus = true) {
        if (on && missions && missions.busy) {
            showNote("Finish or stop the task first")
            return
        }
        if (on) {
            renderPanel()
            closeCard()
            drive.closeOthers(panel)
            panel.scrollTop = 0
        }
        panel.classList.toggle("is-on", on)
        if (on && focus) {
            // the first place not yet seen (in its open group), or the first group
            const first = panel.querySelector(".is-open .hm-item:not(.is-done)") || panel.querySelector(".hp-fold")
            if (first) {
                first.focus({ preventScroll: true })
                first.scrollIntoView({ block: "nearest" })
            }
        }
    }
    btn.addEventListener("click", () => openPanel(!panel.classList.contains("is-on")))
    panel.addEventListener("click", (e) => {
        const f = e.target.closest("[data-fold]")
        if (f) {
            const sec = f.closest(".hp-group")
            const on = !sec.classList.contains("is-open")
            sec.classList.toggle("is-open", on)
            f.setAttribute("aria-expanded", on)
            folded.set(sec.dataset.group, on)
            return
        }
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
    drive.addMenu(card, { modal: false })
    let open = null
    function linkHtml([path, label], main) {
        const out = isOut(path)
        const target = out || !SITE ? ' target="_blank" rel="noopener"' : ' target="_top"'
        return `<a class="${main ? "hud-btn hpl-go" : "hpl-link"}" href="${linkTo(path)}"${target}${out ? "" : ` data-site="${path}"`}>${esc(label)} <span aria-hidden="true">${out ? "↗" : "→"}</span></a>`
    }
    function openCard(p, isNew) {
        open = p
        drive.showKeys(false) // the controls step aside for the post
        const n = items.filter((q) => visited.has(q.id)).length
        const k = items.filter((q) => q.group === p.group && visited.has(q.id)).length
        const kicker = p.gr.kind === "info" ? p.kicker : `${p.gr.name} · ${p.n} of ${p.of}`
        card.style.setProperty("--gc", p.gr.color)
        card.innerHTML = `
            ${p.img ? `<figure class="hpl-img"><img src="${p.img[0]}" alt="${esc(p.img[1])}" loading="lazy" decoding="async"></figure>` : ""}
            <div class="hpl-top"><span class="hpl-kicker">${esc(kicker)}</span><button type="button" class="hpl-x" data-act="close" aria-label="Close">×</button></div>
            ${p.badge && p.gr.kind === "milestone" ? `<p class="hpl-year">${esc(p.kicker || p.badge)}</p>` : p.gr.kind === "photo" ? `<p class="hpl-year">${esc(p.kicker)}</p>` : ""}
            <h2>${esc(p.title)}</h2>
            ${p.lead ? `<p class="hpl-lead">${esc(p.lead)}</p>` : ""}
            ${p.stats ? `<ul class="hpl-stats">${p.stats.map(([a, b]) => `<li><b>${esc(a)}</b><span>${esc(b)}</span></li>`).join("")}</ul>` : ""}
            ${p.text.map((t) => `<p>${esc(t)}</p>`).join("")}
            ${p.list ? `<dl class="hpl-list">${p.list.map(([a, b]) => `<div><dt>${esc(a)}</dt><dd>${esc(b)}</dd></div>`).join("")}</dl>` : ""}
            ${p.logos ? `<ul class="hpl-logos">${p.logos.map(([src, alt]) => `<li><img src="${src}" alt="${esc(alt)}" loading="lazy"></li>`).join("")}</ul>` : ""}
            ${p.facts ? `<ul class="hpl-facts">${p.facts.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>` : ""}
            <div class="hpl-btns">
                ${p.action ? `<button type="button" class="hud-btn hr-main" data-act="${p.action[0]}">${p.action[1]}</button>` : ""}
                ${linkHtml(p.link, true)}
            </div>
            ${p.links ? `<div class="hpl-more">${p.links.map((l) => linkHtml(l)).join("")}</div>` : ""}
            <p class="hpl-foot">${isNew ? `<b>New place</b> · ` : ""}${p.gr.kind === "info" ? "" : `${k} of ${p.of} in this row · `}${n} of ${items.length} visited<span class="hud-keyhint" aria-hidden="true"> · <kbd>Enter</kbd> to choose</span></p>`
        card.scrollTop = 0
        card.classList.add("is-on")
    }
    function closeCard() {
        open = null
        card.classList.remove("is-on")
        if (card.contains(document.activeElement)) document.activeElement.blur()
    }
    card.addEventListener("click", (e) => {
        const a = e.target.closest("a[data-site]")
        if (a && SITE) {
            e.preventDefault()
            goToSite(a.dataset.site)
            return
        }
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
    function showNote(text, secs = 2.2) {
        note.textContent = text
        note.classList.add("is-on")
        noteUntil = performance.now() / 1000 + secs
    }

    addEventListener("keydown", (e) => {
        if (!drive.active || e.ctrlKey || e.metaKey || e.altKey || e.target.closest?.("input, textarea")) return
        if (e.key.toLowerCase() === "p" && !e.repeat) openPanel(!panel.classList.contains("is-on"))
        // Enter steps into the card that popped up, so the arrows can choose in it
        if (e.key === "Enter" && open && !drive.menuOpen && !card.contains(document.activeElement)) {
            const b = card.querySelector(".hpl-btns .hud-btn")
            if (b) {
                e.preventDefault()
                b.focus({ preventScroll: true })
            }
        }
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

    function visit(p) {
        visited.add(p.id)
        save()
        paint(p)
        drive.sfx("discover")
        const mine = items.filter((q) => q.group === p.group)
        const all = items.every((q) => visited.has(q.id))
        if (hooks.onVisit) hooks.onVisit({ place: p, row: mine.every((q) => visited.has(q.id)) && p.gr.kind !== "info" ? p.gr.name : mine.every((q) => visited.has(q.id)) ? "Info buoys" : null, all })
        if (all) {
            confetti(hud, { count: 260 })
            drive.sfx("medal")
            showNote(`All ${items.length} places visited`, 3.2)
        } else if (mine.every((q) => visited.has(q.id))) {
            confetti(hud, { count: 120 })
            drive.sfx("medal")
            showNote(`${p.gr.name}: all ${mine.length} seen`, 3)
        }
    }

    const hooks = { onVisit: null }
    let course = null
    const look = new THREE.Vector3()
    function update(t, dt, exposure = 1) {
        const gain = 1 / Math.max(exposure, 0.5)
        const busy = missions && missions.busy
        // the posts are for the helm: the pages behind keep their harbour as it was
        const show = drive.active
        if (group.visible !== show) {
            group.visible = show
            for (const p of items) p.item.obj.visible = show
        }
        if (note.classList.contains("is-on") && performance.now() / 1000 > noteUntil) note.classList.remove("is-on")
        if (!show) {
            panel.classList.remove("is-on")
            if (open) closeCard()
            for (const p of items) p.armed = true
            // a course to a place is forgotten off the water: its mark goes from the compass and the radar too
            if (course && drive.state.target && drive.state.target.x === course.item.x) drive.state.target = null
            course = null
            return
        }
        if (!photosLoaded) loadPhotos()
        look.copy(drive.camPos)
        // the signs and rings: quieter during a task, so the course stands out
        for (const p of items) {
            const done = visited.has(p.id)
            const h = waveHeight(p.item.x, p.item.z, t, 1) * 0.85
            p.sign.position.set(p.item.x, h + p.signY + Math.sin(t * 1.3 + p.x) * 0.15, p.item.z)
            p.ring.position.set(p.item.x, h + 0.14, p.item.z)
            const pulse = 0.5 + 0.5 * Math.sin(t * 2.2 + p.z)
            // close by, the card says it all: the sign and the ring step back (and do not fill the view)
            const dd = Math.hypot(drive.pos.x - p.item.x, drive.pos.z - p.item.z)
            const ringK = THREE.MathUtils.smoothstep(dd, NEAR - 1, NEAR + 14)
            p.ring.material.color.copy(p.col).multiplyScalar(gain * (done ? 0.14 : 0.34 + 0.24 * pulse) * (busy ? 0.3 : 1) * ringK)
            p.ring.visible = ringK > 0.01
            p.sign.material.opacity = (busy ? 0.35 : 1) * THREE.MathUtils.smoothstep(dd, p.photo ? 22 : 16, p.photo ? 44 : 38) * (1 - THREE.MathUtils.smoothstep(dd, 420, 600))
            p.sign.visible = p.sign.material.opacity > 0.01
            p.lamp.material.color.copy(p.col).multiplyScalar(Math.sin(t * 3 + p.x) > 0.3 ? 1.6 * gain : 0.35)
            // the photo frames turn slowly to face you
            if (p.easel) {
                const want = Math.atan2(look.x - p.item.x, look.z - p.item.z) - p.item.yaw
                const cur = p.easel.rotation.y
                const d = Math.atan2(Math.sin(want - cur), Math.cos(want - cur))
                p.easel.rotation.y = cur + d * (1 - Math.exp(-dt * 1.5))
            }
        }
        for (const tr of trails) {
            tr.mat.uniforms.uTime.value = t
            tr.mat.uniforms.uGain.value = 0.32 * gain * (busy ? 0.3 : 1)
            // the line rides the waves (only where you can see it ride them: far off it lies still)
            if (tr.cx === undefined) {
                let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity
                for (const q of tr.samples) {
                    x0 = Math.min(x0, q[0])
                    x1 = Math.max(x1, q[0])
                    z0 = Math.min(z0, q[1])
                    z1 = Math.max(z1, q[1])
                }
                tr.cx = (x0 + x1) / 2
                tr.cz = (z0 + z1) / 2
                tr.r = Math.hypot(x1 - x0, z1 - z0) / 2
            }
            if (tr.laid && Math.hypot(tr.cx - look.x, tr.cz - look.z) - tr.r > 260) continue
            tr.laid = true
            const pos = tr.pos
            for (let i = 0; i < tr.samples.length; i++) {
                const q = tr.samples[i]
                const x = q[0]
                const z = q[1]
                const y = waveHeight(x, z, t, 1) * 0.85 + 0.12
                const o = i * 6
                pos[o] = x + q[2] * 0.8
                pos[o + 1] = y
                pos[o + 2] = z + q[3] * 0.8
                pos[o + 3] = x - q[2] * 0.8
                pos[o + 4] = y
                pos[o + 5] = z - q[3] * 0.8
            }
            tr.mesh.geometry.attributes.position.needsUpdate = true
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
                if (isNew) visit(p)
                if (course === p) {
                    course = null
                    if (drive.state.target && drive.state.target.x === p.item.x) drive.state.target = null
                }
                openCard(p, isNew)
            }
        }
        // a course set to a place follows its post, and goes when you are there
        if (course && drive.state.target && (drive.state.target.x !== course.item.x || drive.state.target.z !== course.item.z)) drive.state.target = { x: course.item.x, z: course.item.z }
        // sailing on closes the card
        if (open && open.d > NEAR + 30) closeCard()
        // keep the distances in the list fresh
        if (panel.classList.contains("is-on") && Math.floor(t * 2) !== Math.floor((t - dt) * 2)) {
            for (const el of panel.querySelectorAll("[data-where]")) {
                const p = items.find((q) => q.id === el.dataset.where)
                if (p) el.textContent = where(p)
            }
        }
    }

    return {
        group,
        list: items,
        groups: GROUPS,
        update,
        openPanel,
        set onVisit(fn) {
            hooks.onVisit = fn
        },
        isVisited: (id) => visited.has(id),
        get visited() {
            return [...visited]
        },
    }
}
