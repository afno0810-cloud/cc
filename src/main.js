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

// ---------- the 3D harbour ----------
function webgl() {
    try {
        const c = document.createElement("canvas")
        return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl")))
    } catch (e) {
        return false
    }
}
if (webgl() && !document.body.hasAttribute("data-no-scene")) {
    const go = () => import("./scene/index.js").then((m) => m.startScene({ reduced })).catch((err) => console.warn("3D scene off:", err))
    if ("requestIdleCallback" in window) requestIdleCallback(go, { timeout: 1200 })
    else setTimeout(go, 300)
}
