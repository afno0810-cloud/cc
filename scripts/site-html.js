/* ================================================================
   Build-time HTML helpers for the Marinor site (a tiny Vite plugin).

   Tags you can use in any page:
   <site-head title="…" description="…" image="/media/og/…jpg"></site-head>
       → <title>, description, canonical URL, Open Graph, icons, CSS + JS
   <site-nav></site-nav>        → the main navigation (active link set here)
   <site-footer></site-footer>  → the footer
   <m-img src="argus-argus-on-water-dscf6237" alt="…" sizes="50vw" …>
       → <img> with WebP srcset, width/height from the image manifest
   {{icon:name}}                → an inline SVG icon from ICONS below
   ================================================================ */

export const SITE = {
    url: "https://marinorntnu.no",
    name: "Marinor NTNU",
    email: "marinorntnu@gmail.com",
    sponsorEmail: "andreas.furst@marinorntnu.no",
    street: "Høgskoleringen 1",
    city: "7034 Trondheim",
    maps: "https://www.google.com/maps/search/?api=1&query=H%C3%B8gskoleringen%201%2C%207034%20Trondheim",
    instagram: "https://www.instagram.com/marinorntnu/",
    linkedin: "https://www.linkedin.com/company/marinor-ntnu",
    gui: "https://gui.marinorntnu.no",
    orgNr: "936 064 809",
}

export const PATHS = {
    home: "/",
    about: "/about/",
    timeline: "/about/#timeline",
    projects: "/projects/",
    argus: "/projects/argus/",
    proteus: "/projects/proteus/",
    team: "/team/",
    team2026: "/team/team-2026/",
    team2025: "/team/team-2025/",
    competitions: "/competitions/",
    njord: "/competitions/njord-challenge/",
    robo: "/competitions/roboboat/",
    sponsor: "/sponsor/",
    join: "/join/",
}

const I = (d, extra = "") => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`
export const ICONS = {
    arrow: I(`<path d="M4 12h15M13 6l6 6-6 6"/>`),
    out: I(`<path d="M7 17 17 7M9 7h8v8"/>`),
    down: I(`<path d="M12 4v15M6 13l6 6 6-6"/>`),
    up: I(`<path d="M12 20V5M6 11l6-6 6 6"/>`),
    left: I(`<path d="M20 12H5M11 6l-6 6 6 6"/>`),
    chev: I(`<path d="m6 9 6 6 6-6"/>`),
    close: I(`<path d="M6 6l12 12M18 6 6 18"/>`),
    mail: I(`<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/>`),
    pin: I(`<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/>`),
    copy: I(`<rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V6.5A2.5 2.5 0 0 0 13.5 4h-7A2.5 2.5 0 0 0 4 6.5v7A2.5 2.5 0 0 0 6.5 16H8"/>`),
    check: I(`<path d="m5 12.5 4.5 4.5L19 7.5"/>`),
    instagram: I(`<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/>`),
    linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75V21h-4z"/></svg>`,
    lidar: I(`<circle cx="12" cy="12" r="2.5"/><path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8"/>`),
    camera: I(`<rect x="2.5" y="7" width="19" height="10" rx="3"/><circle cx="8" cy="12" r="2"/><circle cx="16" cy="12" r="2"/>`),
    gnss: I(`<path d="m14 4 6 6-3 3-6-6z"/><path d="m12 12-2 2"/><path d="M4 14a6 6 0 0 0 6 6M4 10a10 10 0 0 0 10 10"/>`),
    box: I(`<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/>`),
    chip: I(`<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4"/>`),
    signal: I(`<path d="M5 18v-2M9.5 18v-5M14 18v-8M18.5 18V6"/>`),
    hull: I(`<path d="M3 15h18"/><path d="m4.5 15 1.5 4h12l1.5-4"/><path d="M8 15V9h8v6M12 9V4"/>`),
    prop: I(`<circle cx="12" cy="12" r="2"/><path d="M12 10c0-4 1-7 3-7s1 4-1.5 7M13.8 13c3.4 2 5.4 4.5 4.4 6s-4-1-5.6-4M10.3 13.2c-3 2.4-6.5 2.9-7 1.4s3-3 6-3.1"/>`),
}

/* The Marinor mark: a circle with a crosshair and a four-point compass star,
   two opposite points filled – drawn from the logo so it is sharp at any size */
export const MARK = `<svg class="mark" viewBox="-60 -60 120 120" aria-hidden="true"><path d="M0-58V58M-58 0H58" stroke="currentColor" stroke-width="2.8"/><circle r="42" fill="none" stroke="currentColor" stroke-width="2.8"/><path d="M0 0V-42A42 42 0 0 0 42 0ZM0 0V42A42 42 0 0 0-42 0Z" fill="currentColor"/></svg>`

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;")
const attrs = (s) => {
    const out = {}
    const re = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g
    let m
    while ((m = re.exec(s))) out[m[1]] = m[2] ?? m[3] ?? m[4] ?? ""
    return out
}

function head(a, path) {
    const title = a.title ? `${a.title} · ${SITE.name}` : `${SITE.name} – Autonomous boats from Trondheim`
    const desc = a.description || "Marinor NTNU is a student organisation at NTNU in Trondheim that builds autonomous boats."
    const img = SITE.url + (a.image || "/media/og/og-default.jpg")
    const canonical = SITE.url + path
    return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canonical}">
<meta name="theme-color" content="#07060d">
<meta name="color-scheme" content="dark">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:url" content="${canonical}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${img}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${img}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<script>document.documentElement.classList.add("js")</script>
<link rel="stylesheet" href="/src/styles/main.css">
<script type="module" src="/src/main.js"></script>`
}

const NAV = [
    { key: "about", label: "About us", href: PATHS.about },
    {
        key: "projects",
        label: "Projects",
        href: PATHS.projects,
        all: "All projects",
        kids: [
            { label: "Argus", note: "Our first autonomous boat", href: PATHS.argus, thumb: "argus-argus-on-water-dscf6237" },
            { label: "Proteus", note: "Our next boat, in the works", href: PATHS.proteus, thumb: "" , text: "P" },
        ],
    },
    {
        key: "team",
        label: "Team",
        href: PATHS.team,
        all: "All teams",
        kids: [
            { label: "Team 2026", note: "This season's crew", href: PATHS.team2026, text: "’26" },
            { label: "Team 2025", note: "The founding crew", href: PATHS.team2025, thumb: "team-team-2025-group-photo" },
        ],
    },
    {
        key: "competitions",
        label: "Competitions",
        href: PATHS.competitions,
        all: "All competitions",
        kids: [
            { label: "Njord Challenge", note: "Trondheim, Norway", href: PATHS.njord, thumb: "competitions-njord-all-teams-at-haven" },
            { label: "RoboBoat", note: "Florida, USA", href: PATHS.robo, thumb: "competitions-roboboat-logo", logo: true },
        ],
    },
    { key: "sponsor", label: "Sponsor us", href: PATHS.sponsor },
]

const isActive = (item, path) => path === item.href || (item.href !== "/" && path.startsWith(item.href)) || (item.kids || []).some((k) => path.startsWith(k.href))

function thumb(k, manifest) {
    if (k.thumb && manifest[k.thumb]) {
        const f = manifest[k.thumb].files
        const src = f["800"] || f.webp || f.png
        return `<span class="nav-thumb${k.logo ? " is-logo" : ""}"><img src="/media/img/${src}" alt="" loading="lazy" decoding="async" width="46" height="46"></span>`
    }
    return `<span class="nav-thumb is-text">${esc(k.text || "")}</span>`
}

function nav(path, manifest) {
    const desk = NAV.map((it) => {
        const on = isActive(it, path)
        if (!it.kids) return `<li class="nav-item"><a class="nav-link${on ? " is-active" : ""}" href="${it.href}"${on ? ' aria-current="page"' : ""}>${it.label}</a></li>`
        const kids = it.kids
            .map((k) => {
                const kon = path.startsWith(k.href)
                return `<a class="nav-row${kon ? " is-active" : ""}" href="${k.href}">${thumb(k, manifest)}<span class="nav-row-text"><b>${k.label}</b><small>${k.note}</small></span><span class="nav-row-go">${ICONS.arrow}</span></a>`
            })
            .join("")
        return `<li class="nav-item has-kids">
<a class="nav-link${on ? " is-active" : ""}" href="${it.href}" aria-haspopup="true" aria-expanded="false"${on ? ' aria-current="page"' : ""}>${it.label}<span class="nav-chev">${ICONS.chev}</span></a>
<div class="nav-drop"><div class="nav-drop-box">${kids}<a class="nav-all" href="${it.href}">${it.all}${ICONS.arrow}</a></div></div>
</li>`
    }).join("")

    const mob = [{ key: "home", label: "Home", href: "/" }, ...NAV]
        .map((it, i) => {
            const on = it.key === "home" ? path === "/" : isActive(it, path)
            const kids = it.kids
                ? `<div class="menu-subs">${it.kids.map((k) => `<a class="menu-sub${path.startsWith(k.href) ? " is-active" : ""}" href="${k.href}">${thumb(k, manifest)}${k.label}</a>`).join("")}</div>`
                : ""
            return `<li class="menu-item" style="--i:${i}"><a class="menu-link${on ? " is-active" : ""}" href="${it.href}"><span class="menu-no">0${i + 1}</span>${it.label}${ICONS.arrow}</a>${kids}</li>`
        })
        .join("")

    return `<a class="skip" href="#main">Skip to content</a>
<header class="nav" id="nav">
  <div class="nav-in">
    <a class="brand" href="/" aria-label="Marinor NTNU – home">${MARK}<span class="brand-word"><b>MARINOR</b> NTNU</span></a>
    <nav class="nav-main" aria-label="Main"><ul class="nav-links">${desk}</ul></nav>
    <a class="btn btn-accent nav-join" href="${PATHS.join}"><span>Join Marinor</span>${ICONS.arrow}</a>
    <button class="nav-burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="menu"><i></i><i></i></button>
  </div>
</header>
<div class="menu" id="menu" hidden data-lenis-prevent>
  <div class="menu-in">
    <nav aria-label="Menu"><ul class="menu-list">${mob}</ul></nav>
    <div class="menu-foot">
      <a class="btn btn-accent btn-lg menu-join" href="${PATHS.join}"><span>Join Marinor</span>${ICONS.arrow}</a>
      <div class="menu-contact">
        <a href="mailto:${SITE.email}">${ICONS.mail}${SITE.email}</a>
        <span class="menu-socials"><a href="${SITE.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Marinor NTNU on Instagram">${ICONS.instagram}</a><a href="${SITE.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="Marinor NTNU on LinkedIn">${ICONS.linkedin}</a></span>
      </div>
    </div>
  </div>
</div>`
}

function footer() {
    const col = (title, links) =>
        `<div class="ft-col"><p class="ft-title">${title}</p><ul>${links.map(([l, h]) => `<li><a href="${h}">${l}</a></li>`).join("")}</ul></div>`
    return `<footer class="footer">
  <div class="wrap">
    <div class="ft-grid">
      <div class="ft-brand">
        <a class="brand brand-lg" href="/" aria-label="Marinor NTNU – home">${MARK}<span class="brand-word"><b>MARINOR</b> NTNU</span></a>
        <p class="ft-tag">A student organisation at NTNU in Trondheim that builds autonomous boats.</p>
        <div class="ft-contact">
          <p class="ft-mail">${ICONS.mail}<a href="mailto:${SITE.email}">${SITE.email}</a><button class="copy-btn" type="button" data-copy="${SITE.email}" aria-label="Copy email address">${ICONS.copy}<span>Copy</span></button></p>
          <a class="ft-addr" href="${SITE.maps}" target="_blank" rel="noopener noreferrer">${ICONS.pin}<span>${SITE.street}<br>${SITE.city}</span></a>
        </div>
        <div class="ft-socials">
          <a class="chip-link" href="${SITE.instagram}" target="_blank" rel="noopener noreferrer">${ICONS.instagram}Instagram</a>
          <a class="chip-link" href="${SITE.linkedin}" target="_blank" rel="noopener noreferrer">${ICONS.linkedin}LinkedIn</a>
        </div>
      </div>
      ${col("Marinor", [["Home", "/"], ["About us", PATHS.about], ["Team", PATHS.team], ["Competitions", PATHS.competitions]])}
      ${col("Our work", [["Argus", PATHS.argus], ["Proteus", PATHS.proteus], ["Njord Challenge", PATHS.njord], ["RoboBoat", PATHS.robo]])}
      ${col("Get involved", [["Join the crew", PATHS.join], ["Sponsor us", PATHS.sponsor], ["Email us", `mailto:${SITE.email}`]])}
    </div>
    <div class="ft-bottom">
      <p><span>© <span data-year>2026</span> Marinor NTNU</span><span>Org.nr. ${SITE.orgNr}</span><span class="mono">63.44° N · 10.42° E</span></p>
      <a class="ft-top" href="#top">Back to top<span>${ICONS.up}</span></a>
    </div>
  </div>
</footer>`
}

function img(a, manifest) {
    const e = manifest[a.src]
    if (!e) throw new Error(`m-img: unknown image "${a.src}"`)
    const f = e.files
    const sizes = a.sizes || "100vw"
    const rest = Object.entries(a)
        .filter(([k]) => !["src", "alt", "sizes", "loading", "priority"].includes(k))
        .map(([k, v]) => (v === "" ? ` ${k}` : ` ${k}="${esc(v)}"`))
        .join("")
    const pri = "priority" in a
    const load = pri ? ` loading="eager" fetchpriority="high"` : ` loading="${a.loading || "lazy"}"`
    if (f.png) {
        return `<img src="/media/img/${f.webp}" alt="${esc(a.alt || "")}" width="${e.w}" height="${e.h}"${load} decoding="async"${rest}>`
    }
    const ws = Object.keys(f).map(Number).sort((x, y) => x - y)
    const main = f[String(ws.includes(1600) ? 1600 : ws[ws.length - 1])]
    const set = ws.map((w) => `/media/img/${f[w]} ${w}w`).join(", ")
    return `<img src="/media/img/${main}" srcset="${set}" sizes="${esc(sizes)}" alt="${esc(a.alt || "")}" width="${e.w}" height="${e.h}"${load} decoding="async"${rest}>`
}

export function site({ imageManifest }) {
    return {
        name: "marinor-site-html",
        transformIndexHtml: {
            order: "pre",
            handler(html, ctx) {
                let path = ctx.path.replace(/index\.html$/, "")
                if (path.endsWith(".html")) path = path.replace(/\.html$/, "")
                if (path === "/404") path = "/404"
                return html
                    .replace(/<site-head([^>]*)><\/site-head>/, (_, a) => head(attrs(a), path))
                    .replace(/<site-nav><\/site-nav>/, () => nav(path, imageManifest))
                    .replace(/<site-footer><\/site-footer>/, () => footer())
                    .replace(/<m-img([^>]*?)\/?>(?:<\/m-img>)?/g, (_, a) => img(attrs(a), imageManifest))
                    .replace(/\{\{icon:([a-z0-9]+)\}\}/g, (_, n) => ICONS[n] || "")
                    .replace(/\{\{mark\}\}/g, MARK)
            },
        },
    }
}
