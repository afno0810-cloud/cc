import * as React from "react"
import * as Framer from "framer"

/* ================================================================
 Marinor NTNU – shared design system
 Used by the navigation, the footer and every page component.

 How layout works:
 · Every page component renders <Page>. It is a CSS "container", and all
   responsive rules are container queries on its width. That means the
   Tablet and Phone frames in Framer, a real phone and the first paint
   before any JavaScript has loaded all show the same, correct layout.
 · Sizes of big text use cqi (1% of the page width) with a vw fallback.
 · Animations are CSS only and pages are visible without JavaScript:
   hero text rises in once, sections below the fold fade in on scroll.
 ================================================================ */

export const DISPLAY = `"Inter Display", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif`
export const BODY = `"Switzer", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif`
export const MONO = `ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace`
export const DARK = "rgb(16, 16, 17)"
export const GRAY = "rgb(92, 94, 100)"
export const ACCENT = "rgb(124, 70, 156)"
export const LAVENDER = "rgb(214, 186, 236)"
export const PAGE_BG = "rgb(238, 235, 253)"
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const IMG = "https://framerusercontent.com/images/"
export const LOGO_ICON = IMG + "BO2urvxgz7PCfU3cj5LFakOZRKs.png"
export const LOGO_WORD = IMG + "7JK8ZyEUioMp7EwhkipkjxdPib0.png"
export const THUMB = {
    argus: IMG + "okoPvPfG1Mc7SjtWCqN6BRlnKQ.jpeg",
    njord: IMG + "gVtb0YIZKv3qgIFUEzjyykwgHS8.png",
    robo: IMG + "LrBmF25Tu6AkREtPrSt4ZFu3PhI.webp",
}

/* Every page link in one place – these must match the page paths in Framer */
export const PATHS = {
    home: "/",
    about: "/about",
    roadmap: "/about#about-journey",
    projects: "/projects",
    argus: "/projects/argus",
    proteus: "/projects/proteus",
    team: "/team",
    team2026: "/team/team-2026",
    team2025: "/team/team-2025",
    competitions: "/competitions",
    njord: "/competitions/njord-challange",
    robo: "/competitions/roboat",
    sponsor: "/want-to-spons-us",
    join: "/join",
}

export const CONTACT = {
    email: "marinorntnu@gmail.com",
    street: "Høgskoleringen 1",
    city: "7034 Trondheim",
    maps: "https://www.google.com/maps/search/?api=1&query=H%C3%B8gskoleringen%201%2C%207034%20Trondheim",
    instagram: "https://www.instagram.com/marinorntnu/",
    linkedin: "https://www.linkedin.com/company/marinor-ntnu",
    orgNr: "936 064 809",
}

export type Img = { src?: string; srcSet?: string; alt?: string } | undefined

export const cx = (...a: (string | false | null | undefined)[]) => a.filter(Boolean).join(" ")
export const img = (src: string, alt: string): Img => ({ src, alt })
export const pick = (a: Img, fallback: string, alt: string): NonNullable<Img> => (a && a.src ? a : { src: fallback, alt })
export const hasSrc = (a: Img) => !!(a && a.src)

const useIsoLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect

/* ---------- Images: never load a 6000 px camera file for a 400 px box ----------
 Framer's image CDN can scale a photo down on the fly (?scale-down-to=…). */
function scalable(src?: string) {
    return !!src && src.indexOf("framerusercontent.com/images/") !== -1 && src.indexOf("?") === -1
}
export function imgSrc(src?: string, width = 1024) {
    if (!src) return ""
    return scalable(src) ? `${src}?scale-down-to=${width}` : src
}
export function imgSet(src?: string, existing?: string) {
    if (existing) return existing
    if (!scalable(src)) return undefined
    return [512, 1024, 2048, 4096].map((w) => `${src}?scale-down-to=${w} ${w}w`).join(", ")
}

/* ---------- Width of an element (only for behaviour, never for layout) ---------- */
export function useWidth(ref: React.RefObject<HTMLElement>) {
    const [w, setW] = React.useState(1200)
    useIsoLayoutEffect(() => {
        const el = ref.current
        if (!el) return
        setW(el.getBoundingClientRect().width)
        if (typeof ResizeObserver === "undefined") return
        const ro = new ResizeObserver((entries) => {
            for (const e of entries) setW(e.contentRect.width)
        })
        ro.observe(el)
        return () => ro.disconnect()
    }, [])
    return w
}

/* true on the Framer canvas and for people who asked for less motion */
export function useStill() {
    const isCanvas = Framer.RenderTarget.current() === Framer.RenderTarget.canvas
    const [reduce, setReduce] = React.useState(false)
    React.useEffect(() => {
        if (typeof window === "undefined" || !window.matchMedia) return
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
        setReduce(mq.matches)
    }, [])
    return isCanvas || reduce
}

/* true once the page runs in a browser that can hover (a mouse) – used to skip
 parallax on phones and tablets, where it only costs battery and feels laggy */
export function useFinePointer() {
    const [fine, setFine] = React.useState(false)
    React.useEffect(() => {
        if (typeof window === "undefined" || !window.matchMedia) return
        setFine(window.matchMedia("(hover: hover) and (pointer: fine)").matches)
    }, [])
    return fine
}

/* ---------- Current page path (also updates when Framer changes page) ---------- */
const norm = (p: string) => (p || "/").replace(/\/+$/, "") || "/"

export function usePath() {
    const [path, setPath] = React.useState("")
    React.useEffect(() => {
        if (typeof window === "undefined") return
        const read = () => setPath(norm(window.location.pathname))
        read()
        window.addEventListener("popstate", read)
        return () => window.removeEventListener("popstate", read)
    }, [])
    return path
}

export function pathOf(href: string) {
    if (!href) return ""
    try {
        const base = typeof window !== "undefined" ? window.location.href : "https://marinorntnu.no/"
        return norm(new URL(href, base).pathname)
    } catch (e) {
        return norm(href.split("#")[0])
    }
}

export function hashOf(href: string) {
    const i = (href || "").indexOf("#")
    return i >= 0 ? href.slice(i + 1) : ""
}

/* ---------- Site-wide rules (no sideways wobble on phones) ---------- */
const SITE_STYLE_ID = "marinor-site-style"
const SITE_CSS = `
html, body { overflow-x: clip; }
body { -webkit-text-size-adjust: 100%; text-size-adjust: 100%; }
`

function useSiteStyle() {
    React.useEffect(() => {
        if (typeof document === "undefined") return
        if (document.getElementById(SITE_STYLE_ID)) return
        const el = document.createElement("style")
        el.id = SITE_STYLE_ID
        el.textContent = SITE_CSS
        document.head.appendChild(el)
    }, [])
}

/* ---------- Framer navigation ----------
 Plain links like "/about" can land in the wrong place inside Framer's Preview.
 So every click on a link to one of our own pages goes through Framer's own router.
 On the published site the result is the same, just faster (no full page reload).
 The nav and the footer are on every page, so they also listen for clicks on the
 whole page – that way the buttons and cards inside the pages work the same way. */
const useRouterSafe: () => any = (Framer as any).useRouter || (() => null)

type ClickLike = {
    defaultPrevented: boolean
    button: number
    metaKey: boolean
    ctrlKey: boolean
    shiftKey: boolean
    altKey: boolean
    target: EventTarget | null
    preventDefault: () => void
}

export function useSiteRouter() {
    useSiteStyle()
    const router = useRouterSafe()
    const routes: Record<string, any> | null = router && router.routes ? router.routes : null
    const navigate = router && typeof router.navigate === "function" ? router.navigate : null
    const cur = router && router.currentRouteId && routes ? routes[router.currentRouteId] : null
    const currentPath = cur && typeof cur.path === "string" ? norm(cur.path) : ""

    const go = (e: ClickLike) => {
        if (!routes || !navigate) return
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
        const t = e.target as HTMLElement
        const a = t && t.closest ? (t.closest("a") as HTMLAnchorElement | null) : null
        if (!a) return
        const href = a.getAttribute("href") || ""
        /* leave alone: empty links, links to a section on this page, other sites, mailto:, new tabs, downloads */
        if (!href || href.startsWith("#") || /^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("//") || a.target === "_blank" || a.hasAttribute("download")) return
        let u: URL
        try {
            u = new URL(href, "https://site.local" + (currentPath || "/"))
        } catch (err) {
            return
        }
        const p = norm(u.pathname)
        const id = Object.keys(routes).find((key) => routes[key] && typeof routes[key].path === "string" && norm(routes[key].path) === p)
        if (!id) return
        e.preventDefault()
        const hash = u.hash ? u.hash.slice(1) : undefined
        try {
            navigate(id, hash)
        } catch (err) {
            window.location.href = href
        }
    }

    /* Page-wide listener. It runs after React's own click handlers, so a link the
     nav or footer already handled (or any handler that called preventDefault) is skipped. */
    const goRef = React.useRef(go)
    goRef.current = go
    React.useEffect(() => {
        if (typeof document === "undefined") return
        const onClick = (e: MouseEvent) => goRef.current(e)
        document.addEventListener("click", onClick)
        return () => document.removeEventListener("click", onClick)
    }, [])

    return { go, currentPath }
}

/* If a link points to a section on the page we are already on: scroll there smoothly */
export function onSamePageHash(e: React.MouseEvent, href: string, before?: () => void) {
    if (typeof window === "undefined" || !href) return
    const hash = hashOf(href)
    if (!hash) return
    if (pathOf(href) !== norm(window.location.pathname)) return
    const el = document.getElementById(hash)
    if (!el) return
    e.preventDefault()
    if (before) before()
    window.setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), before ? 80 : 0)
    try {
        window.history.replaceState(null, "", "#" + hash)
    } catch (err) {}
}

/* ================================================================
 CSS
 Breakpoints (width of the page component, not of the window):
 lg ≤ 1099 · md ≤ 859 (tablet) · sm ≤ 599 (phone) · xs ≤ 399
 ================================================================ */
export const BP = { lg: 1099, md: 859, sm: 599, xs: 399 }

/* Rules for a narrower page. Modern browsers use a container query on the page,
 very old ones (no container queries) fall back to the window width. */
export function at(max: number, css: string) {
    return atName("mr", max, css)
}
/* Same, for components that are their own container (nav, footer, photo) */
export function atName(name: string, max: number, css: string, fallbackExtra = 60) {
    return `@container ${name} (max-width:${max}px){${css}}@supports not (container-type:inline-size){@media (max-width:${max + fallbackExtra}px){${css}}}`
}

/* size that follows the page width: n = % of the page width, with a vw fallback */
export const fluid = (min: number, n: number, max: number) => `clamp(${min}px, ${n}vw, ${max}px); font-size: clamp(${min}px, ${n}cqi, ${max}px)`

export const UI_CSS = `
.mr-page{container-type:inline-size;container-name:mr;position:relative;width:100%;min-width:0;color:${DARK};font-family:${BODY};-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;--mr-accent:${ACCENT}}
.mr-page *,.mr-page *::before,.mr-page *::after{box-sizing:border-box}
/* Side margins: the page always keeps at least 20 px (phone) to 40 px (tablet) free at the edges.
 100% here is the width around the page and 100vw the screen, so (100vw - 100%) / 2 is the margin
 the Framer frame already gives – only the part that is missing is added. */
.mr-page{box-sizing:border-box;--mr-gut:clamp(20px,5vw,40px);padding-left:max(0px,calc(var(--mr-gut) - (100vw - 100%) / 2));padding-right:max(0px,calc(var(--mr-gut) - (100vw - 100%) / 2))}
.mr-page.mr-full{padding-left:0;padding-right:0}
.mr-page a{-webkit-tap-highlight-color:transparent}
.mr-stack{display:flex;flex-direction:column;gap:136px;width:100%}
.mr-wrap{width:100%;max-width:1320px;margin:0 auto;padding:0 40px}
.mr-sec{display:flex;flex-direction:column;gap:48px;width:100%}

.mr-h1{margin:0;font-family:${DISPLAY};font-weight:700;font-size:${fluid(46, 7.2, 108)};line-height:.94;letter-spacing:-.045em;color:${DARK};text-wrap:balance}
.mr-h2{margin:0;font-family:${DISPLAY};font-weight:700;font-size:${fluid(32, 4.4, 60)};line-height:1.04;letter-spacing:-.04em;color:${DARK};text-wrap:balance}
.mr-h3{margin:0;font-family:${DISPLAY};font-weight:700;font-size:24px;line-height:1.12;letter-spacing:-.03em;color:${DARK}}
.mr-lead{margin:0;font-family:${BODY};font-weight:500;font-size:${fluid(17, 1.5, 19)};line-height:1.55;letter-spacing:-.01em;color:${GRAY};max-width:62ch}
.mr-text{margin:0;font-family:${BODY};font-weight:500;font-size:16px;line-height:1.55;letter-spacing:-.01em;color:${GRAY}}
.mr-small{margin:0;font-family:${BODY};font-weight:500;font-size:14px;line-height:1.5;color:${GRAY}}
.mr-mono{font-family:${MONO};font-size:12px;font-weight:500;letter-spacing:.06em;text-transform:uppercase}
.mr-on-dark .mr-h1,.mr-on-dark .mr-h2,.mr-on-dark .mr-h3{color:#fff}
.mr-on-dark .mr-lead,.mr-on-dark .mr-text,.mr-on-dark .mr-small{color:rgba(255,255,255,.74)}

.mr-label{display:inline-flex;align-items:center;gap:10px;width:fit-content;max-width:100%;font-family:${MONO};font-size:12px;font-weight:500;line-height:1.2;letter-spacing:.08em;text-transform:uppercase;color:var(--mr-accent)}
.mr-label::before{content:"";flex:0 0 auto;width:18px;height:1px;background:currentColor}
.mr-label.is-light,.mr-on-dark .mr-label{color:${LAVENDER}}

.mr-head{display:flex;flex-direction:column;align-items:flex-start;gap:18px;max-width:720px;width:100%}
.mr-head.is-center{align-items:center;text-align:center;margin:0 auto}
.mr-head.is-center .mr-lead{margin:0 auto}

.mr-btns{display:flex;flex-wrap:wrap;gap:10px}
.mr-btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:10px;height:50px;padding:0 22px;border-radius:12px;border:1px solid transparent;font-family:${BODY};font-weight:600;font-size:15.5px;line-height:1;letter-spacing:-.01em;text-decoration:none;white-space:nowrap;cursor:pointer;transition:background-color .2s ease,color .2s ease,border-color .2s ease}
.mr-btn svg{flex:0 0 auto;transition:transform .25s cubic-bezier(.2,.7,.2,1)}
.mr-btn--dark{background:${DARK};color:#fff}
.mr-btn--accent{background:var(--mr-accent);color:#fff}
.mr-btn--light{background:#fff;color:${DARK}}
.mr-btn--outline{background:transparent;color:${DARK};border-color:rgba(16,16,17,.2)}
.mr-btn--ghost{background:rgba(255,255,255,.08);color:#fff;border-color:rgba(255,255,255,.4)}
@media (hover:hover){
.mr-btn:hover svg{transform:translateX(3px)}
.mr-btn.is-down:hover svg{transform:translateY(3px)}
.mr-btn--dark:hover{background:var(--mr-accent)}
.mr-btn--accent:hover{background:${DARK}}
.mr-btn--light:hover{background:rgb(244,238,250)}
.mr-btn--outline:hover{border-color:${DARK}}
.mr-btn--ghost:hover{background:rgba(255,255,255,.16);border-color:rgba(255,255,255,.7)}
}
.mr-btn{transition:background-color .2s ease,color .2s ease,border-color .2s ease,transform .15s ease}
.mr-btn:focus-visible,.mr-card-link:focus-visible{outline:2px solid var(--mr-accent);outline-offset:3px}

.mr-photo{position:relative;overflow:hidden;background:rgb(222,216,236)}
.mr-photo>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;transition:transform .8s cubic-bezier(.2,.7,.2,1)}
@media (hover:hover){.mr-zoom:hover .mr-photo>img,.mr-photo.mr-zoom:hover>img{transform:scale(1.035)}}

.mr-card{background:#fff;border:1px solid rgba(16,16,17,.07);border-radius:18px;transition:transform .45s cubic-bezier(.2,.7,.2,1),box-shadow .45s ease,border-color .3s ease}
@media (hover:hover){.mr-card:hover{transform:translateY(-4px);border-color:rgba(124,70,156,.28);box-shadow:0 22px 44px -28px rgba(16,16,17,.4)}}
.mr-dark{background:${DARK};color:#fff}
.mr-panel{position:relative;overflow:hidden;border-radius:28px;isolation:isolate}
.mr-contours{position:absolute;left:0;right:0;bottom:0;width:100%;height:120px;z-index:-1;pointer-events:none;opacity:.5}
.mr-cta{padding:104px 64px 112px;display:flex;justify-content:center;text-align:center}
.mr-cta-inner{display:flex;flex-direction:column;align-items:center;gap:20px;max-width:780px}
.mr-cta .mr-btns{justify-content:center;margin-top:10px}
.mr-cta.is-left{justify-content:flex-start;text-align:left}
.mr-cta.is-left .mr-cta-inner{align-items:flex-start}
.mr-cta.is-left .mr-btns{justify-content:flex-start}

.mr-tag{display:inline-flex;align-items:center;gap:8px;height:30px;padding:0 12px;border-radius:8px;font-family:${MONO};font-size:11.5px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;white-space:nowrap}
.mr-tag--glass{background:rgba(16,16,17,.42);color:#fff;border:1px solid rgba(255,255,255,.22);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}
.mr-tag--light{background:#fff;color:${DARK}}
.mr-tag--soft{background:rgba(124,70,156,.1);color:var(--mr-accent)}
.mr-dot{width:7px;height:7px;border-radius:99px;background:currentColor;flex:0 0 auto}
.mr-dot--live{background:rgb(110,222,160);box-shadow:0 0 0 3px rgba(110,222,160,.25)}

.mr-intro{display:flex;flex-direction:column;align-items:center;text-align:center;gap:22px;width:100%}
.mr-intro .mr-h1{font-size:${fluid(58, 12, 164)};line-height:.9;letter-spacing:-.055em}
.mr-intro .mr-h1 em{font-style:normal;color:var(--mr-accent)}
.mr-intro .mr-lead{max-width:580px;margin:0 auto}

.mr-stat{display:flex;flex-direction:column;gap:10px;padding:22px 24px 4px 0;border-top:1px solid rgba(16,16,17,.14)}
.mr-stat b{font-family:${DISPLAY};font-weight:700;font-size:${fluid(40, 4.6, 64)};line-height:1;letter-spacing:-.045em;color:${DARK};font-variant-numeric:tabular-nums}
.mr-stat b small{font-size:.55em;letter-spacing:-.02em;color:var(--mr-accent);margin-left:2px}
.mr-stat span{font-family:${BODY};font-weight:500;font-size:15px;line-height:1.45;color:${GRAY};max-width:26ch}
.mr-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0 28px;width:100%}
.mr-on-dark .mr-stat{border-color:rgba(255,255,255,.2)}
.mr-on-dark .mr-stat b{color:#fff}
.mr-on-dark .mr-stat span{color:rgba(255,255,255,.7)}

/* Hover: everything you can click reacts – it lifts, grows a little or changes colour */
.mr-page a[href],.mr-page button{transition:translate .45s cubic-bezier(.2,.7,.2,1),scale .45s cubic-bezier(.2,.7,.2,1),transform .35s cubic-bezier(.2,.7,.2,1),box-shadow .45s ease,background-color .25s ease,color .25s ease,border-color .25s ease,flex-grow .6s cubic-bezier(.2,.7,.2,1),opacity .3s ease}
@media (hover:hover){
.mr-page .mr-btn:hover{translate:0 -2px;scale:1.04;box-shadow:0 14px 28px -16px rgba(16,16,17,.5)}
.mr-page .mr-btn--light:hover,.mr-page .mr-btn--ghost:hover{box-shadow:0 14px 30px -14px rgba(0,0,0,.6)}
.mr-page a.mr-zoom:hover,.mr-page button.mr-zoom:hover,.mr-page .nl-card:hover,.mr-page a.mr-card:hover{translate:0 -6px;box-shadow:0 32px 60px -34px rgba(16,16,17,.55)}
.mr-page .mr-zoom:hover .mr-photo>img,.mr-page .mr-photo.mr-zoom:hover>img{transform:scale(1.07)}
.mr-page .nl-card:not(.is-big):hover .nl-title{color:var(--mr-accent)}
.mr-page a[href]:not([class]):hover{color:var(--mr-accent)}
}
.mr-page .mr-btn:active,.mr-page a.mr-zoom:active,.mr-page .nl-card:active{scale:.97}

/* Scroll reveal: the children of a Reveal come in one after the other */
.mr-reveal.is-hidden>*{opacity:0}
.mr-reveal.is-in>*{animation:mr-in .9s cubic-bezier(.2,.7,.2,1) backwards;animation-delay:calc(var(--rd,0s) + var(--mr-i,0) * 80ms)}
.mr-reveal>:nth-child(2){--mr-i:1}.mr-reveal>:nth-child(3){--mr-i:2}.mr-reveal>:nth-child(4){--mr-i:3}.mr-reveal>:nth-child(5){--mr-i:4}.mr-reveal>:nth-child(6){--mr-i:5}.mr-reveal>:nth-child(7){--mr-i:6}.mr-reveal>:nth-child(8){--mr-i:7}.mr-reveal>:nth-child(9){--mr-i:8}.mr-reveal>:nth-child(10){--mr-i:9}.mr-reveal>:nth-child(n+11){--mr-i:10}
.mr-reveal.is-in>.mr-h2{animation-name:mr-line;animation-duration:1s}
.mr-reveal.is-in .mr-photo>img{animation:mr-img 1.6s cubic-bezier(.2,.7,.2,1) backwards;animation-delay:calc(var(--rd,0s) + var(--mr-i,0) * 80ms)}
.mr-reveal.is-in .mr-label::before{transform-origin:left center;animation:mr-grow .9s cubic-bezier(.2,.7,.2,1) .15s backwards}
.mr-reveal.is-in .mr-stat b{animation:mr-in 1s cubic-bezier(.2,.7,.2,1) backwards;animation-delay:calc(.12s + var(--mr-i,0) * 90ms)}
@keyframes mr-in{from{opacity:0;transform:translate3d(0,28px,0)}}
@keyframes mr-line{from{opacity:0;transform:translate3d(0,.45em,0);clip-path:inset(0 0 100% 0)}to{clip-path:inset(-10% -5% -25% -5%)}}
@keyframes mr-img{from{transform:scale(1.14)}}
@keyframes mr-grow{from{transform:scaleX(0)}}
/* The first big photo on a page settles in slowly */
.mr-photo--lead>img{animation:mr-img 2.4s cubic-bezier(.2,.7,.2,1) backwards}
/* Depth lines drift slowly, like water */
.mr-contours g{transform-origin:center;animation:mr-drift 16s ease-in-out infinite alternate}
@keyframes mr-drift{from{transform:translateX(-2.5%) scaleX(1.06)}to{transform:translateX(2.5%) scaleX(1.06)}}
@keyframes mr-rise{from{opacity:0;transform:translate3d(0,26px,0)}to{opacity:1;transform:none}}
@keyframes mr-fade{from{opacity:0}to{opacity:1}}
.mr-rise{animation:mr-rise .9s cubic-bezier(.2,.7,.2,1) both}
.mr-fade{animation:mr-fade 1.1s ease both}
.mr-still .mr-rise,.mr-still .mr-fade,.mr-still .mr-contours g,.mr-still .mr-photo--lead>img{animation:none}
@media (prefers-reduced-motion:reduce){.mr-rise,.mr-fade,.mr-contours g,.mr-photo--lead>img,.mr-reveal.is-in>*,.mr-reveal.is-in .mr-photo>img,.mr-reveal.is-in .mr-label::before,.mr-reveal.is-in .mr-stat b{animation:none}.mr-reveal.is-hidden>*{opacity:1}.mr-photo>img{transition:none}.mr-reveal *,.mr-reveal *::before,.mr-reveal *::after{transition-duration:0s!important;transition-delay:0s!important}}

${at(BP.lg, `.mr-stats{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px 28px}.mr-wrap{padding:0 40px}`)}
${at(BP.md, `.mr-stack{gap:104px}.mr-wrap{padding:0 40px}.mr-panel{border-radius:24px}.mr-cta{padding:80px 36px 88px}`)}
${at(BP.sm, `.mr-stack{gap:80px}.mr-sec{gap:34px}.mr-cta{padding:60px 20px 68px}.mr-cta .mr-btns{flex-direction:column;align-items:stretch;width:100%}.mr-cta.is-left .mr-btns{align-items:flex-start}.mr-wrap{padding:0 20px}.mr-h3{font-size:21px}.mr-btn{height:48px;padding:0 18px;font-size:15px}.mr-head{gap:14px}.mr-panel{border-radius:20px}.mr-stat{padding:18px 12px 2px 0}.mr-stat span{font-size:14px}`)}
${at(BP.xs, `.mr-stats{gap:4px 16px}`)}
`

/* ---------- Page root ---------- */
type UI = { still: boolean; fine: boolean; w: number }
const UICtx = React.createContext<UI>({ still: true, fine: false, w: 1200 })
export const useUI = () => React.useContext(UICtx)

export function Page({
    accent,
    css,
    style,
    className,
    children,
}: {
    accent?: string
    css?: string
    style?: React.CSSProperties
    className?: string
    children?: React.ReactNode
}) {
    const still = useStill()
    const fine = useFinePointer()
    const ref = React.useRef<HTMLDivElement>(null)
    const w = useWidth(ref)
    const value = React.useMemo(() => ({ still, fine, w }), [still, fine, w])
    return (
        <UICtx.Provider value={value}>
            <div
                ref={ref}
                className={cx("mr-page", still && "mr-still", className)}
                style={{ ...style, ["--mr-accent" as any]: accent || ACCENT } as React.CSSProperties}
            >
                {/* raw CSS – React would escape quotes and ">" inside a normal <style> on the server */}
                <style dangerouslySetInnerHTML={{ __html: UI_CSS + (css || "") }} />
                {children}
            </div>
        </UICtx.Provider>
    )
}

/* ---------- Fade in on scroll, visible without JavaScript ----------
 Anything already on screen when the page loads stays as it is; things further
 down start hidden once the page is running and come in when they scroll in:
 the children one after the other, headings slide up out of a mask, photos
 settle from a slight zoom and label lines draw themselves. */
export function Reveal({
    children,
    delay = 0,
    className,
    style,
    id,
}: {
    children?: React.ReactNode
    delay?: number
    className?: string
    style?: React.CSSProperties
    id?: string
}) {
    const { still } = useUI()
    const ref = React.useRef<HTMLDivElement>(null)
    const [phase, setPhase] = React.useState<"idle" | "hidden" | "in">("idle")
    const hidden = phase === "hidden"
    const setHidden = (h: boolean) => setPhase((p) => (h ? "hidden" : p === "hidden" ? "in" : p))
    useIsoLayoutEffect(() => {
        if (still) {
            // canvas or "reduce motion" (known one render later): never keep anything hidden
            setPhase("idle")
            return
        }
        if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return
        const el = ref.current
        if (!el) return
        if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return
        setHidden(true)
        const io = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    setHidden(false)
                    io.disconnect()
                }
            },
            { rootMargin: "0px 0px -8% 0px" }
        )
        io.observe(el)
        return () => io.disconnect()
    }, [still])
    return (
        <div ref={ref} id={id} className={cx("mr-reveal", hidden && "is-hidden", phase === "in" && "is-in", className)} style={delay ? ({ ...style, ["--rd" as any]: `${delay}s` } as React.CSSProperties) : style}>
            {children}
        </div>
    )
}

/* ---------- Small building blocks ---------- */
export function Label({ children, light = false, className }: { children?: React.ReactNode; light?: boolean; className?: string }) {
    if (!children) return null
    return <span className={cx("mr-label", light && "is-light", className)}>{children}</span>
}

export function SectionHead({
    eyebrow,
    title,
    text,
    center = false,
    light = false,
    className,
}: {
    eyebrow?: string
    title?: string
    text?: string
    center?: boolean
    light?: boolean
    className?: string
}) {
    return (
        <Reveal className={cx("mr-head", center && "is-center", light && "mr-on-dark", className)}>
            <Label light={light}>{eyebrow}</Label>
            {title ? <h2 className="mr-h2">{title}</h2> : null}
            {text ? <p className="mr-lead">{text}</p> : null}
        </Reveal>
    )
}

export function Arrow({ size = 16, dir = "right", color = "currentColor" }: { size?: number; dir?: "right" | "down" | "up" | "out" | "left"; color?: string }) {
    const r = dir === "down" ? 90 : dir === "up" ? -90 : dir === "out" ? -45 : dir === "left" ? 180 : 0
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden style={r ? { transform: `rotate(${r}deg)` } : undefined}>
            <path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export type BtnVariant = "dark" | "accent" | "light" | "outline" | "ghost"

export function Button({
    href,
    children,
    variant = "dark",
    down = false,
    newTab,
    arrow = true,
    className,
}: {
    href?: string
    children?: React.ReactNode
    variant?: BtnVariant
    down?: boolean
    newTab?: boolean
    arrow?: boolean
    className?: string
}) {
    const external = newTab ?? /^https?:\/\//i.test(href || "")
    return (
        <a
            href={href || undefined}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={cx("mr-btn", `mr-btn--${variant}`, down && "is-down", className)}
            onClick={(e) => href && href.startsWith("#") && onSamePageHash(e, href)}
        >
            <span>{children}</span>
            {arrow ? <Arrow dir={down ? "down" : external ? "out" : "right"} /> : null}
        </a>
    )
}

export function Photo({
    image,
    src,
    alt,
    sizes = "100vw",
    priority = false,
    position,
    className,
    style,
    zoom = false,
}: {
    image?: Img
    src?: string
    alt?: string
    sizes?: string
    priority?: boolean
    position?: string
    className?: string
    style?: React.CSSProperties
    zoom?: boolean
}) {
    const url = (image && image.src) || src || ""
    const [broken, setBroken] = React.useState(false)
    React.useEffect(() => setBroken(false), [url])
    return (
        <div className={cx("mr-photo", zoom && "mr-zoom", priority && "mr-photo--lead", className)} style={style}>
            {url && !broken ? (
                <img
                    src={imgSrc(url, 2048)}
                    srcSet={imgSet(url, image && image.srcSet)}
                    sizes={sizes}
                    alt={(image && image.alt) || alt || ""}
                    loading={priority ? "eager" : "lazy"}
                    decoding="async"
                    {...(priority ? ({ fetchpriority: "high" } as any) : {})}
                    draggable={false}
                    onError={() => setBroken(true)}
                    style={position ? { objectPosition: position } : undefined}
                />
            ) : null}
        </div>
    )
}

/* Faint depth contours, like on a sea chart – static, costs nothing */
export function Contours({ color = "rgba(255,255,255,0.16)", className }: { color?: string; className?: string }) {
    return (
        <svg className={cx("mr-contours", className)} viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden>
            <g fill="none" stroke={color} strokeWidth="1" vectorEffect="non-scaling-stroke">
                <path d="M0 70 C 150 52, 300 88, 450 70 S 750 52, 900 70 S 1100 86, 1200 72" />
                <path d="M0 88 C 170 72, 320 104, 480 88 S 780 72, 940 88 S 1120 102, 1200 90" />
                <path d="M0 104 C 190 92, 340 118, 510 104 S 800 92, 980 104 S 1140 116, 1200 106" />
            </g>
        </svg>
    )
}

/* A stat: number (+ suffix) and a label. Static – no count-up. */
export function Stat({ value, suffix, label }: { value: number | string; suffix?: string; label: string }) {
    return (
        <div className="mr-stat">
            <b>
                {value}
                {suffix ? <small>{suffix}</small> : null}
            </b>
            <span>{label}</span>
        </div>
    )
}

export function Stats({ items, className }: { items: { value: number | string; suffix?: string; label: string }[]; className?: string }) {
    return (
        <Reveal className={cx("mr-stats", className)}>
            {items.map((s, i) => (
                <Stat key={i} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
        </Reveal>
    )
}

/* Closing call-to-action on a dark panel */
export function CtaPanel({
    eyebrow,
    title,
    text,
    left = false,
    children,
    className,
}: {
    eyebrow?: string
    title?: string
    text?: string
    left?: boolean
    children?: React.ReactNode
    className?: string
}) {
    return (
        <Reveal className={cx("mr-cta", "mr-panel", "mr-dark", "mr-on-dark", left && "is-left", className)}>
            <Contours />
            <div className="mr-cta-inner">
                <Label light>{eyebrow}</Label>
                {title ? <h2 className="mr-h2">{title}</h2> : null}
                {text ? <p className="mr-lead">{text}</p> : null}
                {children ? <div className="mr-btns">{children}</div> : null}
            </div>
        </Reveal>
    )
}

/* Centered page title: small label, big title (the last words in the accent colour) and a line of text */
export function Intro({ eyebrow, title, accentWords = 1, text, className }: { eyebrow?: string; title?: string; accentWords?: number; text?: string; className?: string }) {
    const words = (title || "").trim().split(/\s+/).filter(Boolean)
    const cut = Math.max(0, words.length - Math.max(0, accentWords))
    const plain = words.slice(0, cut).join(" ")
    const colored = words.slice(cut).join(" ")
    return (
        <div className={cx("mr-intro", className)}>
            {eyebrow ? (
                <div className="mr-rise">
                    <Label>{eyebrow}</Label>
                </div>
            ) : null}
            <h1 className="mr-h1 mr-rise" style={{ animationDelay: "0.08s" }}>
                {plain}
                {plain && colored ? " " : null}
                {colored ? <em>{colored}</em> : null}
            </h1>
            {text ? (
                <p className="mr-lead mr-rise" style={{ animationDelay: "0.16s" }}>
                    {text}
                </p>
            ) : null}
        </div>
    )
}

/* ---------- Logo sized by CSS (--logo-icon / --logo-word), so it is right before JavaScript runs ---------- */
export const LOGO_CSS = `
.mr-logo{--logo-icon:56px;--logo-word:150px;display:inline-flex;align-items:center;gap:calc(var(--logo-icon) * .32);text-decoration:none;flex:0 0 auto;-webkit-tap-highlight-color:transparent;transition:scale .35s cubic-bezier(.2,.7,.2,1)}
.mr-logo-icon{display:block;width:var(--logo-icon);height:var(--logo-icon);flex:0 0 auto;transition:width .35s cubic-bezier(.22,1,.36,1),height .35s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.34,1.56,.64,1)}
.mr-logo-icon img{width:100%;height:100%;object-fit:contain;display:block}
.mr-logo-word{display:flex;align-items:center;width:var(--logo-word);height:calc(var(--logo-word) * .26);flex:0 0 auto;transition:width .35s cubic-bezier(.22,1,.36,1),height .35s cubic-bezier(.22,1,.36,1)}
.mr-logo-word img{width:100%;height:100%;object-fit:contain;object-position:left center;display:block}
.mr-logo-text{font-family:${DISPLAY};font-style:italic;font-size:calc(var(--logo-word) * .14);letter-spacing:-.01em;white-space:nowrap;color:${ACCENT}}
@media (hover:hover){.mr-logo:hover{scale:1.04}.mr-logo:hover .mr-logo-icon{transform:rotate(90deg)}}
@media (prefers-reduced-motion:reduce){.mr-logo-icon,.mr-logo-word{transition:none}.mr-logo:hover .mr-logo-icon{transform:none}}
`

export function SiteLogo({ href, icon, word, className }: { href: string; icon?: string; word?: string; className?: string }) {
    const [broken, setBroken] = React.useState(false)
    return (
        <a href={href} aria-label="Marinor NTNU – home" className={cx("mr-logo", className)}>
            <span className="mr-logo-icon">{icon ? <img src={imgSrc(icon, 512)} alt="" draggable={false} /> : null}</span>
            <span className="mr-logo-word">
                {word && !broken ? (
                    <img src={imgSrc(word, 512)} alt="Marinor NTNU" draggable={false} onError={() => setBroken(true)} />
                ) : (
                    <span className="mr-logo-text">
                        <b style={{ fontWeight: 800 }}>MARINOR</b> <span style={{ fontWeight: 300 }}>NTNU</span>
                    </span>
                )}
            </span>
        </a>
    )
}

/* ---------- Icons ---------- */
export function ArrowIcon({ color = "currentColor", dir = "right", size = 14 }: { color?: string; dir?: "right" | "up" | "down" | "out"; size?: number }) {
    const r = dir === "up" ? -90 : dir === "down" ? 90 : dir === "out" ? -45 : 0
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden style={{ transform: r ? `rotate(${r}deg)` : undefined, flexShrink: 0, display: "block" }}>
            <path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export function InstagramIcon({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" aria-hidden style={{ display: "block", flexShrink: 0 }}>
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4.2" />
            <circle cx="17.4" cy="6.6" r="1.1" fill={color} stroke="none" />
        </svg>
    )
}

export function LinkedInIcon({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden style={{ display: "block", flexShrink: 0 }}>
            <path
                fill={color}
                d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.2c0-1.240-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75V21h-4z"
            />
        </svg>
    )
}

export function MailIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ display: "block", flexShrink: 0 }}>
            <rect x="3" y="5" width="18" height="14" rx="3" />
            <path d="M4 7l8 6 8-6" />
        </svg>
    )
}

export function PinIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ display: "block", flexShrink: 0 }}>
            <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
            <circle cx="12" cy="10" r="2.4" />
        </svg>
    )
}

export function copyText(text: string): Promise<void> {
    try {
        if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
            return navigator.clipboard.writeText(text)
        }
    } catch (e) {}
    try {
        const ta = document.createElement("textarea")
        ta.value = text
        ta.style.position = "fixed"
        ta.style.opacity = "0"
        document.body.appendChild(ta)
        ta.select()
        document.execCommand("copy")
        document.body.removeChild(ta)
    } catch (e) {}
    return Promise.resolve()
}

/* Copy-to-clipboard button for email addresses */
export function CopyButton({ text, light = false }: { text: string; light?: boolean }) {
    const [done, setDone] = React.useState(false)
    React.useEffect(() => {
        if (!done) return
        const t = setTimeout(() => setDone(false), 1800)
        return () => clearTimeout(t)
    }, [done])
    return (
        <button
            type="button"
            aria-label="Copy email address"
            onClick={() => copyText(text).then(() => setDone(true), () => setDone(true))}
            className={cx("mr-btn", light ? "mr-btn--ghost" : "mr-btn--outline")}
            style={{ fontSize: 14 }}
        >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
                {done ? (
                    <path d="M3 8.5l3.2 3L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                    <>
                        <rect x="5" y="5" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5" stroke="currentColor" strokeWidth="1.5" />
                    </>
                )}
            </svg>
            {done ? "Copied" : "Copy email"}
        </button>
    )
}
