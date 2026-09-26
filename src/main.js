import Lenis from "lenis"

/* ================================================================
   Shared behaviour for every page: smooth scroll, navigation, menu,
   scroll reveals, copy buttons, lightbox and the 3D harbour.
   Everything is progressive: the pages read fine without JavaScript.
   ================================================================ */

const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches
const fine = matchMedia("(hover: hover) and (pointer: fine)").matches
const $ = (s, r = document) => r.querySelector(s)
const $$ = (s, r = document) => [...r.querySelectorAll(s)]

// ---------- background layers ----------
const fallback = document.createElement("div")
fallback.className = "scene-fallback"
fallback.setAttribute("aria-hidden", "true")
document.body.prepend(fallback)
const grain = document.createElement("div")
grain.className = "grain"
grain.setAttribute("aria-hidden", "true")
document.body.append(grain)
window.addEventListener("scene:ready", () => document.documentElement.classList.add("has-scene"), { once: true })

// ---------- loader (pages with a 3D first screen) ----------
// Waits for the boat model and the fonts, at least a short moment, at most a few seconds.
const loaderEl = $(".loader")
if (loaderEl && document.documentElement.classList.contains("is-loading")) {
    const pct = $("[data-pct]", loaderEl)
    const bar = $(".loader-bar i", loaderEl)
    let shown = 0
    let target = 0.08
    let done = false
    const t0 = performance.now()
    const tick = () => {
        if (done) return
        shown += (target - shown) * 0.12
        if (pct) pct.textContent = String(Math.round(shown * 100))
        if (bar) bar.style.transform = `scaleX(${shown})`
        requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
    window.addEventListener("scene:progress", (e) => (target = Math.max(target, Math.min(0.92, e.detail * 0.92))))
    const finish = () => {
        if (done) return
        const wait = Math.max(0, 900 - (performance.now() - t0))
        target = 1
        setTimeout(() => {
            done = true
            if (pct) pct.textContent = "100"
            if (bar) bar.style.transform = "scaleX(1)"
            loaderEl.classList.add("is-out")
            document.documentElement.classList.remove("is-loading")
            window.dispatchEvent(new Event("loader:done"))
            setTimeout(() => loaderEl.remove(), 1200)
        }, wait + 250)
    }
    const fonts = document.fonts ? document.fonts.ready : Promise.resolve()
    const scene = new Promise((res) => {
        window.addEventListener("scene:ready", res, { once: true })
        window.addEventListener("scene:failed", res, { once: true })
    })
    Promise.all([fonts, scene]).then(finish)
    setTimeout(finish, 6000)
    window.__endLoader = finish
} else if (loaderEl) loaderEl.remove()

// ---------- smooth scroll (desktop with a mouse only) ----------
let lenis = null
if (!reduced && fine) {
    lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 })
    const raf = (time) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
}
function scrollToEl(el) {
    if (!el) return
    if (lenis) lenis.scrollTo(el, { offset: -90 })
    else el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" })
}
document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href*="#"]')
    if (!a) return
    const url = new URL(a.href, location.href)
    if (url.pathname !== location.pathname || !url.hash) return
    const target = url.hash === "#top" ? document.body : document.getElementById(url.hash.slice(1))
    if (!target) return
    e.preventDefault()
    if (url.hash === "#top") {
        lenis ? lenis.scrollTo(0) : scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" })
    } else scrollToEl(target)
    history.replaceState(null, "", url.hash)
})
if (location.hash) {
    addEventListener("load", () => setTimeout(() => scrollToEl(document.getElementById(location.hash.slice(1))), 60))
}

// ---------- navigation ----------
const nav = $("#nav")
const menu = $("#menu")
const burger = $(".nav-burger")
let lastY = scrollY
function onScroll() {
    const y = scrollY
    nav.classList.toggle("is-solid", y > 24)
    const dy = y - lastY
    if (y < 200 || document.documentElement.classList.contains("menu-open")) nav.classList.remove("is-hidden")
    else if (Math.abs(dy) > 6) nav.classList.toggle("is-hidden", dy > 0 && !nav.querySelector(".is-open"))
    lastY = y
}
addEventListener("scroll", onScroll, { passive: true })
onScroll()

// drop-downs: open on hover (mouse) or on focus (keyboard)
for (const item of $$(".nav-item.has-kids")) {
    let timer
    const link = item.querySelector(".nav-link")
    const open = (on) => {
        clearTimeout(timer)
        item.classList.toggle("is-open", on)
        link.setAttribute("aria-expanded", on ? "true" : "false")
    }
    item.addEventListener("mouseenter", () => open(true))
    item.addEventListener("mouseleave", () => (timer = setTimeout(() => open(false), 160)))
    item.addEventListener("focusin", () => open(true))
    item.addEventListener("focusout", (e) => {
        if (!item.contains(e.relatedTarget)) open(false)
    })
}

function setMenu(on) {
    menu.hidden = !on
    document.documentElement.classList.toggle("menu-open", on)
    burger.setAttribute("aria-expanded", on ? "true" : "false")
    burger.setAttribute("aria-label", on ? "Close menu" : "Open menu")
    if (lenis) on ? lenis.stop() : lenis.start()
    document.documentElement.style.overflow = on ? "hidden" : ""
}
burger && burger.addEventListener("click", () => setMenu(menu.hidden))
menu && menu.addEventListener("click", (e) => e.target.closest("a") && setMenu(false))
addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        if (menu && !menu.hidden) setMenu(false)
        $$(".nav-item.is-open").forEach((i) => i.classList.remove("is-open"))
    }
})
addEventListener("resize", () => innerWidth >= 1080 && menu && !menu.hidden && setMenu(false))

// ---------- reveal on scroll ----------
const revealables = $$("[data-reveal], .draw, .route, .blueprint")
if ("IntersectionObserver" in window && !reduced) {
    const io = new IntersectionObserver(
        (entries) => {
            for (const e of entries) {
                if (e.isIntersecting) {
                    e.target.classList.add("is-in")
                    io.unobserve(e.target)
                }
            }
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.01 }
    )
    revealables.forEach((el) => io.observe(el))
} else revealables.forEach((el) => el.classList.add("is-in"))

// ---------- timelines that fill while you scroll ----------
const lines = $$("[data-progress]")
function fillLines() {
    for (const el of lines) {
        const r = el.getBoundingClientRect()
        const p = Math.min(1, Math.max(0, (innerHeight * 0.65 - r.top) / r.height))
        el.style.setProperty("--p", p.toFixed(4))
    }
}
if (lines.length) {
    addEventListener("scroll", fillLines, { passive: true })
    fillLines()
}

// ---------- sideways gallery, pinned while you scroll (desktop only) ----------
const hs = $("[data-hscroll]")
if (hs) {
    const track = $("[data-htrack]", hs)
    const wide = matchMedia("(min-width: 1100px) and (pointer: fine)")
    let extra = 0
    const layout = () => {
        const on = wide.matches && !reduced
        hs.classList.toggle("is-pinned", on)
        track.style.transform = ""
        if (!on) {
            hs.style.height = ""
            return
        }
        extra = Math.max(0, track.scrollWidth - innerWidth)
        hs.style.height = `${innerHeight + extra}px`
        move()
    }
    const move = () => {
        if (!hs.classList.contains("is-pinned")) return
        const r = hs.getBoundingClientRect()
        const p = Math.min(1, Math.max(0, -r.top / Math.max(1, hs.offsetHeight - innerHeight)))
        track.style.transform = `translate3d(${-p * extra}px,0,0)`
    }
    addEventListener("scroll", move, { passive: true })
    addEventListener("resize", layout)
    wide.addEventListener("change", layout)
    addEventListener("load", layout)
    layout()
}

// ---------- statements that light up word by word ----------
for (const st of $$("[data-light]")) {
    const words = []
    const walk = (node) => {
        for (const n of [...node.childNodes]) {
            if (n.nodeType === 3) {
                const frag = document.createDocumentFragment()
                n.textContent.split(/(\s+)/).forEach((w) => {
                    if (!w.trim()) return frag.append(w)
                    const s = document.createElement("span")
                    s.className = "w"
                    s.textContent = w
                    frag.append(s)
                    words.push(s)
                })
                n.replaceWith(frag)
            } else if (n.nodeType === 1) {
                if (n.tagName === "B") {
                    n.classList.add("w")
                    words.push(n)
                } else walk(n)
            }
        }
    }
    walk(st)
    const light = () => {
        const r = st.getBoundingClientRect()
        const p = Math.min(1, Math.max(0, (innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.35)))
        const n = Math.round(p * words.length)
        words.forEach((w, i) => w.classList.toggle("is-lit", i < n))
    }
    if (reduced) words.forEach((w) => w.classList.add("is-lit"))
    else {
        addEventListener("scroll", light, { passive: true })
        light()
    }
}

// ---------- copy e-mail buttons ----------
document.addEventListener("click", async (e) => {
    const b = e.target.closest("[data-copy]")
    if (!b) return
    const text = b.dataset.copy
    try {
        await navigator.clipboard.writeText(text)
    } catch (err) {
        const ta = document.createElement("textarea")
        ta.value = text
        ta.style.position = "fixed"
        ta.style.opacity = "0"
        document.body.append(ta)
        ta.select()
        document.execCommand("copy")
        ta.remove()
    }
    const label = b.querySelector("span")
    const old = label ? label.textContent : ""
    b.classList.add("is-done")
    if (label) label.textContent = "Copied"
    setTimeout(() => {
        b.classList.remove("is-done")
        if (label) label.textContent = old
    }, 1800)
})

// ---------- lightbox for photo galleries ----------
const tiles = $$("[data-lightbox]")
if (tiles.length) {
    const lb = document.createElement("div")
    lb.className = "lb"
    lb.hidden = true
    lb.setAttribute("role", "dialog")
    lb.setAttribute("aria-modal", "true")
    lb.innerHTML = `<img alt=""><p></p>
<button class="lb-close" type="button" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
<button class="lb-prev" type="button" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12H5M11 6l-6 6 6 6"/></svg></button>
<button class="lb-next" type="button" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h15M13 6l6 6-6 6"/></svg></button>`
    document.body.append(lb)
    const im = lb.querySelector("img")
    const cap = lb.querySelector("p")
    let i = 0
    let lastFocus = null
    const show = (k) => {
        i = (k + tiles.length) % tiles.length
        const img = tiles[i].querySelector("img")
        im.src = img.currentSrc || img.src
        im.alt = img.alt
        cap.textContent = tiles[i].dataset.caption || img.alt
    }
    const close = () => {
        lb.hidden = true
        lenis && lenis.start()
        document.documentElement.style.overflow = ""
        lastFocus && lastFocus.focus()
    }
    tiles.forEach((t, k) =>
        t.addEventListener("click", () => {
            lastFocus = t
            show(k)
            lb.hidden = false
            lenis && lenis.stop()
            document.documentElement.style.overflow = "hidden"
            lb.querySelector(".lb-close").focus()
        })
    )
    lb.querySelector(".lb-close").addEventListener("click", close)
    lb.querySelector(".lb-prev").addEventListener("click", (e) => (e.stopPropagation(), show(i - 1)))
    lb.querySelector(".lb-next").addEventListener("click", (e) => (e.stopPropagation(), show(i + 1)))
    lb.addEventListener("click", (e) => e.target === lb && close())
    addEventListener("keydown", (e) => {
        if (lb.hidden) return
        if (e.key === "Escape") close()
        if (e.key === "ArrowRight") show(i + 1)
        if (e.key === "ArrowLeft") show(i - 1)
    })
}

// ---------- videos: pause when off screen or when motion is reduced ----------
for (const v of $$("video")) {
    if (reduced) {
        v.removeAttribute("autoplay")
        v.pause()
        continue
    }
    new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause())).observe(v)
}

// ---------- year in the footer ----------
$$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()))

// ---------- numbers count up when they come into view ----------
// "2025" counts from 1990, the rest from 0; a suffix in <small> stays put
const counters = $$(".stat b, .hero-facts b")
if (counters.length && !reduced && "IntersectionObserver" in window) {
    const run = (el) => {
        const node = [...el.childNodes].find((n) => n.nodeType === 3 && /\d/.test(n.textContent))
        if (!node) return
        const m = node.textContent.match(/^(\s*)(\d+)(.*)$/s)
        if (!m) return
        const end = +m[2]
        const from = end >= 1900 ? 1990 : 0
        const dur = 1400
        const t0 = performance.now()
        const step = (now) => {
            const k = Math.min(1, (now - t0) / dur)
            const e = 1 - Math.pow(1 - k, 4)
            node.textContent = m[1] + Math.round(from + (end - from) * e) + m[3]
            if (k < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
    }
    const io = new IntersectionObserver(
        (es) =>
            es.forEach((e) => {
                if (!e.isIntersecting) return
                io.unobserve(e.target)
                run(e.target)
            }),
        { threshold: 0.6 }
    )
    counters.forEach((el) => io.observe(el))
}

// ---------- mono labels decode like a sensor read-out ----------
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·/<>#*+"
function decode(el) {
    if (el.dataset.decoded) return
    el.dataset.decoded = "1"
    const nodes = []
    const walk = (n) => n.childNodes.forEach((c) => (c.nodeType === 3 ? c.textContent.trim() && nodes.push(c) : c.nodeName !== "svg" && walk(c)))
    walk(el)
    nodes.forEach((node) => {
        const final = node.textContent
        const len = final.length
        const t0 = performance.now()
        const dur = 450 + len * 18
        const step = (now) => {
            const k = Math.min(1, (now - t0) / dur)
            const shown = Math.floor(k * len)
            let out = final.slice(0, shown)
            for (let i = shown; i < len; i++) out += final[i] === " " ? " " : GLYPHS[(Math.random() * GLYPHS.length) | 0]
            node.textContent = out
            if (k < 1) requestAnimationFrame(step)
            else node.textContent = final
        }
        requestAnimationFrame(step)
    })
}
if (!reduced && "IntersectionObserver" in window) {
    const labels = $$(".eyebrow, .route-label, .tl-date, .card-no, .hero-cap, .tag")
    const io = new IntersectionObserver(
        (es) =>
            es.forEach((e) => {
                if (!e.isIntersecting) return
                io.unobserve(e.target)
                // wait for the loader on the first screen
                if (document.documentElement.classList.contains("is-loading")) window.addEventListener("loader:done", () => decode(e.target), { once: true })
                else decode(e.target)
            }),
        { threshold: 0.8 }
    )
    labels.forEach((el) => io.observe(el))
}

// ---------- desktop: magnetic buttons, cards that tilt (the normal mouse pointer stays) ----------
if (fine && !reduced) {
    document.documentElement.classList.add("has-fine")

    // buttons lean towards the pointer
    $$(".btn").forEach((b) => {
        b.addEventListener("pointermove", (e) => {
            const r = b.getBoundingClientRect()
            const dx = (e.clientX - (r.left + r.width / 2)) / r.width
            const dy = (e.clientY - (r.top + r.height / 2)) / r.height
            b.style.transform = `translate(${dx * 8}px, ${dy * 6}px)`
        })
        b.addEventListener("pointerleave", () => (b.style.transform = ""))
    })

    // photo cards tilt in 3D under the pointer
    $$(".door, .season, .way, .lcard, .benefit.is-photo, .group, .do-card, .sponsor, .card, .chain-step").forEach((c) => {
        c.classList.add("tilt")
        c.addEventListener("pointermove", (e) => {
            const r = c.getBoundingClientRect()
            const px = (e.clientX - r.left) / r.width - 0.5
            const py = (e.clientY - r.top) / r.height - 0.5
            c.style.setProperty("--rx", `${(-py * 6).toFixed(2)}deg`)
            c.style.setProperty("--ry", `${(px * 8).toFixed(2)}deg`)
            c.style.setProperty("--mx", `${((px + 0.5) * 100).toFixed(1)}%`)
            c.style.setProperty("--my", `${((py + 0.5) * 100).toFixed(1)}%`)
        })
        c.addEventListener("pointerleave", () => {
            c.style.setProperty("--rx", "0deg")
            c.style.setProperty("--ry", "0deg")
        })
    })
}

// ---------- headings: letters flip up in 3D when they come into view ----------
function splitHeading(h) {
    if (h.dataset.split) return
    h.dataset.split = "1"
    h.setAttribute("aria-label", h.textContent.replace(/\s+/g, " ").trim())
    let i = 0
    const walk = (node) => {
        ;[...node.childNodes].forEach((c) => {
            if (c.nodeType === 3) {
                if (!c.textContent.trim()) return
                const frag = document.createDocumentFragment()
                c.textContent.split(/(\s+)/).forEach((part) => {
                    if (!part) return
                    if (/^\s+$/.test(part)) return frag.append(document.createTextNode(" "))
                    const w = document.createElement("span")
                    w.className = "w-split"
                    w.setAttribute("aria-hidden", "true")
                    for (const ch of part) {
                        const sp = document.createElement("span")
                        sp.className = "ch"
                        sp.textContent = ch
                        sp.style.setProperty("--ci", Math.min(i++, 36))
                        w.append(sp)
                    }
                    frag.append(w)
                })
                c.replaceWith(frag)
            } else if (c.nodeType === 1 && !["svg", "BR", "SVG"].includes(c.nodeName)) walk(c)
        })
    }
    walk(h)
}
if (!reduced && "IntersectionObserver" in window) {
    const heads = $$(".h2, .chapter-year, .door-title, .lcard-title, .coming .h1")
    heads.forEach(splitHeading)
    const io = new IntersectionObserver(
        (es) =>
            es.forEach((e) => {
                if (!e.isIntersecting) return
                io.unobserve(e.target)
                e.target.classList.add("is-split-in")
            }),
        { threshold: 0.2 }
    )
    heads.forEach((h) => io.observe(h))
}

// ---------- photos: revealed top to bottom with a scan line, then a little parallax ----------
const rvMedia = $$(
    ".collage .media, .tl-photo, .chapter-media:not(.plan):not(.chapter-logo), .do-card .media, .comp-marinor, .group-photo, .gallery-tile .media, .bento .media, .onboard-photo, .shot .media, .benefit.is-photo > .media"
).filter((m) => !m.closest("[data-stage='photo']"))
if (!reduced && "IntersectionObserver" in window && rvMedia.length) {
    rvMedia.forEach((m) => {
        m.classList.add("rv")
        const line = document.createElement("i")
        line.className = "scanline"
        line.setAttribute("aria-hidden", "true")
        m.append(line)
    })
    const io = new IntersectionObserver(
        (es) =>
            es.forEach((e) => {
                if (!e.isIntersecting) return
                io.unobserve(e.target)
                e.target.classList.add("is-vis")
            }),
        { threshold: 0.18, rootMargin: "0px 0px -6% 0px" }
    )
    rvMedia.forEach((m) => io.observe(m))

    // parallax on the bigger photos
    const px = rvMedia.filter((m) => !m.closest(".gallery, .bento, .shot, .group"))
    px.forEach((m) => m.classList.add("px"))
    let ticking = false
    const update = () => {
        ticking = false
        const vh = innerHeight
        for (const m of px) {
            const r = m.getBoundingClientRect()
            if (r.bottom < -50 || r.top > vh + 50) continue
            const k = (r.top + r.height / 2 - vh / 2) / vh
            m.style.setProperty("--py", `${(-k * r.height * 0.1).toFixed(1)}px`)
        }
    }
    addEventListener("scroll", () => {
        if (!ticking) {
            ticking = true
            requestAnimationFrame(update)
        }
    }, { passive: true })
    update()
}

// ---------- the running band of words: faster and tilted when you scroll fast ----------
const bands = $$(".marquee")
if (bands.length && !reduced) {
    let last = scrollY
    let v = 0
    const tick = () => {
        const d = scrollY - last
        last = scrollY
        v += (Math.max(-60, Math.min(60, d)) - v) * 0.12
        bands.forEach((b) => {
            b.style.setProperty("--skew", `${(-v * 0.18).toFixed(2)}deg`)
            b.style.setProperty("--boost", (1 + Math.abs(v) * 0.08).toFixed(2))
        })
        requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
}

// ---------- a thin line at the top that shows how far down the page you are ----------
{
    const bar = document.createElement("div")
    bar.className = "progress"
    bar.setAttribute("aria-hidden", "true")
    bar.innerHTML = "<i></i>"
    document.body.append(bar)
    const i = bar.firstChild
    const set = () => {
        const max = Math.max(1, document.documentElement.scrollHeight - innerHeight)
        i.style.transform = `scaleX(${Math.min(1, scrollY / max)})`
    }
    addEventListener("scroll", set, { passive: true })
    addEventListener("resize", set)
    set()
}

// ---------- the 3D harbour ----------
function webgl() {
    try {
        const c = document.createElement("canvas")
        return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl")))
    } catch (e) {
        return false
    }
}
const photoStage = $('[data-stage="photo"]')
if (photoStage) setTimeout(() => photoStage.classList.add("is-formed"), 9000)
if (webgl() && !document.body.hasAttribute("data-no-scene")) {
    document.documentElement.classList.add("webgl")
    const go = () =>
        import("./scene/index.js")
            .then((m) => m.startScene({ reduced }))
            .then((r) => {
                if (!r) {
                    window.__endLoader?.()
                    photoStage?.classList.add("is-formed")
                }
            })
            .catch((err) => {
                console.warn("3D scene off:", err)
                photoStage?.classList.add("is-formed")
                window.__endLoader?.()
            })
    // pages with a 3D first screen start at once, the others when the browser is idle
    if (loaderEl || !("requestIdleCallback" in window)) setTimeout(go, 0)
    else requestIdleCallback(go, { timeout: 1200 })
} else window.__endLoader?.()
