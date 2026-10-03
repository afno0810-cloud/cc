// Request: "kan du legge spillet til i framer nettsiden så" and "bare spillet skal legges inn i framer nettsdien"
// Only the game from the new Marinor site (drive Argus in the harbour), as a Framer code component.
// The game runs from GitHub Pages in a frame; until it is started, a title card over a still of the harbour.
// The frame gets this site's address (?site=) and the full list of page paths on this site (?pages=, JSON),
// so every post in the game can open the right page here.
// Request: "kan du lage en game menu til spillet og gjøre det bedre så det generelt ser mere ferdig ut" –
// the title card here, and the game menu inside the game (src/scene/gamemenu.js).
// Request: "når du prøver og trykke deg inn på nettsiden fra en post i spillet funker det ikke" – a post in the
// game asks this page (postMessage) to open one of the site's pages, and this page goes there.
// Requests: "gjør sånn at når du trykker inn på spillet så går den i stor skjerm modus med en gang" and
// "når man trykker på drive argus så kommer man rett inn i stor skjerm modus" – a click on the title card,
// or on Drive Argus in the menu bar (SiteNav), opens the game over the whole page and asks the browser for
// full screen in the same click (launchGame). Where a browser has no full screen (an iPhone), the game
// still covers the whole screen. Close (or the browser's own full-screen exit) brings the page back.
// Request: "denne greia må se mere proff ut" – the title card: a calmer layout in Marinor lilla.
import * as React from "react"
import { startTransition, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { addPropertyControls, ControlType, useIsStaticRenderer } from "framer"

const BASE = "https://cdn.jsdelivr.net/gh/afno0810-cloud/cc@0a52b8b2f44d86897b03787684978124cbf4d929/"
const POSTER = BASE + "framer/game-poster.jpg"
const GAME = "https://afno0810-cloud.github.io/cc/"
const GAME_ORIGIN = "https://afno0810-cloud.github.io"
const FONT = '"Inter Display", "Inter", system-ui, -apple-system, "Segoe UI", sans-serif'
const MONO = 'ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace'
const ACCENT = "rgb(124, 70, 156)"
const LAVENDER = "#d6baec"

/* Every page on the Framer site – these must match the page paths in Framer */
export const SITE_PAGES: Record<string, string> = {
    home: "/",
    about: "/about",
    timeline: "/about#about-journey",
    projects: "/projects",
    argus: "/projects/argus",
    proteus: "/projects/proteus",
    team: "/team",
    team2026: "/team/team-2026",
    team2025: "/team/team-2025",
    competitions: "/competitions",
    njord: "/competitions/njord-challange",
    roboboat: "/competitions/roboat",
    sponsor: "/want-to-spons-us",
    join: "/join",
    game: "/spill",
}

// the address of the game: this site and its pages go with it; full=1 when the frame fills the screen
function gameSrc(full: boolean) {
    if (typeof window === "undefined") return ""
    return GAME + "?site=" + encodeURIComponent(window.location.origin) + "&pages=" + encodeURIComponent(JSON.stringify(SITE_PAGES)) + (full ? "&full=1" : "") + "#page-game"
}

/* ================================================================
 launchGame – the game over the whole page, in full screen
 Called straight from a click (the browser only gives full screen inside one).
 Returns false where it cannot run (no page), so a link can go on to /spill.
 ================================================================ */

const OV_CSS = `
.mg-ov{position:fixed;inset:0;z-index:2147483000;width:100vw;height:100vh;height:100dvh;background:#09070f;overscroll-behavior:contain;animation:mg-ov-in .35s ease both}
.mg-ov iframe{position:absolute;inset:0;width:100%;height:100%;border:0;display:block;background:#09070f}
.mg-ov-load{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;background:#09070f url(${POSTER}) center/cover no-repeat;color:rgba(255,255,255,.8);font:500 14px/1.3 ${FONT};text-align:center;transition:opacity .6s ease,visibility 0s linear .6s;pointer-events:none}
.mg-ov-load::before{content:"";position:absolute;inset:0;background:rgba(9,7,16,.74);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}
.mg-ov-load>*{position:relative}
.mg-ov-load i{width:42px;height:42px;border-radius:50%;border:2px solid rgba(214,186,236,.22);border-top-color:${LAVENDER};animation:mg-spin .9s linear infinite}
.mg-ov-load b{margin-top:6px;font:700 26px/1 ${FONT};letter-spacing:-.03em;color:#fff}
.mg-ov-load b em{font-style:normal;color:${LAVENDER}}
.mg-ov.is-ready .mg-ov-load{opacity:0;visibility:hidden}
.mg-ov-x{position:absolute;z-index:2;left:50%;bottom:calc(14px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);display:inline-flex;align-items:center;gap:8px;height:38px;padding:0 14px 0 11px;border-radius:12px;border:1px solid rgba(255,255,255,.22);background:rgba(10,8,18,.6);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);color:#fff;font:600 13px/1 ${FONT};letter-spacing:-.01em;cursor:pointer;opacity:.82;transition:opacity .2s ease,background-color .2s ease,border-color .2s ease}
.mg-ov-x:hover,.mg-ov-x:focus-visible{opacity:1;background:${ACCENT};border-color:rgba(255,255,255,.4);outline:none}
.mg-ov-x svg{width:14px;height:14px;flex:0 0 auto}
@media (max-width:640px),(max-height:520px){.mg-ov-x{bottom:auto;top:calc(10px + env(safe-area-inset-top,0px));height:34px;padding:0 12px 0 10px}}
@keyframes mg-ov-in{from{opacity:0}to{opacity:1}}
@keyframes mg-spin{to{transform:rotate(360deg)}}
@media (prefers-reduced-motion:reduce){.mg-ov{animation:none}.mg-ov-load i{animation:none}}
`

let openGame: { close: () => void } | null = null

export function launchGame(): boolean {
    if (typeof window === "undefined" || typeof document === "undefined" || !document.body) return false
    if (openGame) return true
    const doc = document
    const anyDoc = doc as any
    if (!doc.getElementById("mg-ov-css")) {
        const st = doc.createElement("style")
        st.id = "mg-ov-css"
        st.textContent = OV_CSS
        doc.head.appendChild(st)
    }
    const back = doc.activeElement as HTMLElement | null

    const ov = doc.createElement("div")
    ov.className = "mg-ov"
    ov.setAttribute("role", "dialog")
    ov.setAttribute("aria-modal", "true")
    ov.setAttribute("aria-label", "Drive Argus: the Marinor NTNU harbour game")
    const frame = doc.createElement("iframe")
    frame.src = gameSrc(true)
    frame.title = "Drive Argus: the Marinor NTNU harbour game"
    frame.allow = "fullscreen; autoplay; gamepad; microphone"
    frame.setAttribute("allowfullscreen", "")
    const load = doc.createElement("div")
    load.className = "mg-ov-load"
    load.setAttribute("aria-hidden", "true")
    load.innerHTML = "<i></i><b>Drive <em>Argus</em></b><span>Loading the harbour …</span>"
    const x = doc.createElement("button")
    x.type = "button"
    x.className = "mg-ov-x"
    x.setAttribute("aria-label", "Close the game")
    x.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg><span>Close</span>'
    ov.append(frame, load, x)
    doc.body.appendChild(ov)

    const html = doc.documentElement
    const oldOverflow = html.style.overflow
    html.style.overflow = "hidden"

    const fsElement = () => doc.fullscreenElement || anyDoc.webkitFullscreenElement || null
    const nav = navigator as any
    // in full screen the game gets Esc for its own menu (holding Esc leaves full screen, where the browser has that)
    const lockEsc = () => {
        try {
            if (nav.keyboard && nav.keyboard.lock) nav.keyboard.lock(["Escape"]).catch(() => {})
        } catch (e) {}
    }
    const unlockEsc = () => {
        try {
            if (nav.keyboard && nav.keyboard.unlock) nav.keyboard.unlock()
        } catch (e) {}
    }
    // full screen, in this same click
    const req = (ov as any).requestFullscreen || (ov as any).webkitRequestFullscreen
    if (req) {
        try {
            const r = req.call(ov, { navigationUI: "hide" })
            if (r && typeof r.then === "function") r.then(lockEsc, () => {})
        } catch (e) {}
    }

    const ok = new Set(Object.values(SITE_PAGES))
    const onMessage = (e: MessageEvent) => {
        if (e.origin !== GAME_ORIGIN || e.source !== frame.contentWindow || !e.data) return
        // a post in the game opens one of our pages
        if (e.data.type === "marinor:navigate") {
            const path = String(e.data.path || "")
            if (!ok.has(path)) return
            try {
                ;(e.source as Window).postMessage({ type: "marinor:navigating" }, GAME_ORIGIN)
            } catch (err) {}
            close()
            window.location.href = path
        } else if (e.data.marinor === "close") close()
    }
    const onKey = (e: KeyboardEvent) => {
        // Esc on the page round the game (not in the game itself) closes it, when it is not in full screen
        if (e.key === "Escape" && !fsElement()) close()
    }
    const onFull = () => {
        if (fsElement() !== ov) unlockEsc()
    }
    const onLoad = () => {
        ov.classList.add("is-ready")
        try {
            frame.focus()
        } catch (e) {}
    }

    function close() {
        if (!openGame) return
        openGame = null
        window.removeEventListener("message", onMessage)
        window.removeEventListener("keydown", onKey)
        doc.removeEventListener("fullscreenchange", onFull)
        doc.removeEventListener("webkitfullscreenchange", onFull)
        unlockEsc()
        if (fsElement() === ov) {
            try {
                const ex = doc.exitFullscreen || anyDoc.webkitExitFullscreen
                const r = ex && ex.call(doc)
                if (r && typeof r.catch === "function") r.catch(() => {})
            } catch (e) {}
        }
        ov.remove()
        html.style.overflow = oldOverflow
        if (back && back.focus && back !== doc.body) {
            try {
                back.focus({ preventScroll: true })
            } catch (e) {}
        }
    }

    window.addEventListener("message", onMessage)
    window.addEventListener("keydown", onKey)
    doc.addEventListener("fullscreenchange", onFull)
    doc.addEventListener("webkitfullscreenchange", onFull)
    frame.addEventListener("load", onLoad)
    x.addEventListener("click", close)
    openGame = { close }
    try {
        frame.focus()
    } catch (e) {}
    // the menu bar closes its phone menu behind the game
    window.dispatchEvent(new CustomEvent("marinor:game", { detail: { open: true } }))
    return true
}

/* useGameLinks – every link on the site to the game page (/spill) opens the game in full screen instead:
 Drive Argus in the menu bar, "Play in full size", buttons on the pages. It listens on the window before
 anything else, so Framer's router never sees the click. A click with a key held (a new tab) is left alone.
 The menu bar (SiteNav) turns it on, as it is on every page. */
let linkUsers = 0
let linkOff: (() => void) | null = null
export function useGameLinks(enabled = true) {
    useEffect(() => {
        if (!enabled || typeof window === "undefined") return
        if (linkUsers++ === 0) {
            const onClick = (e: MouseEvent) => {
                if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
                const t = e.target as HTMLElement | null
                const a = t && t.closest ? (t.closest("a[href]") as HTMLAnchorElement | null) : null
                if (!a || a.target === "_blank" || a.hasAttribute("download")) return
                let u: URL
                try {
                    u = new URL(a.getAttribute("href") || "", window.location.href)
                } catch (err) {
                    return
                }
                if (u.origin !== window.location.origin || u.pathname.replace(/\/+$/, "") !== SITE_PAGES.game) return
                if (!launchGame()) return
                e.preventDefault()
                e.stopPropagation()
            }
            window.addEventListener("click", onClick, true)
            linkOff = () => window.removeEventListener("click", onClick, true)
        }
        return () => {
            if (--linkUsers === 0 && linkOff) {
                linkOff()
                linkOff = null
            }
        }
    }, [enabled])
}

/* ================================================================
 The title card – sized by both the width and the height of the component,
 so it always fits; Marinor lilla, as the game menu inside the game
 ================================================================ */

const CHIPS = [
    { n: "4", t: "Njord tasks", icon: '<path d="M5 20V5"/><path d="M5 5h11l-2.5 3.5L16 12H5"/>' },
    { n: "24", t: "places to visit", icon: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>' },
    { n: "", t: "Autonomous mode", icon: '<rect x="6" y="8" width="12" height="10" rx="2.5"/><path d="M12 4v4M9.5 12.5h.01M14.5 12.5h.01M9.5 15.5h5"/>' },
]

const CSS = `
.mg-root{container-type:inline-size}
.mg-card{position:absolute;inset:0;display:flex;align-items:center;padding:0 clamp(24px,7cqi,96px);color:#fff;text-align:left;container-type:size;overflow:hidden;border:0;cursor:pointer;background:#09070f;font:inherit}
.mg-bg{position:absolute;inset:0;background:#09070f url(${POSTER}) center / cover no-repeat;transform:scale(1.02);transition:transform 1.4s cubic-bezier(.2,.7,.2,1)}
.mg-card:hover .mg-bg,.mg-card:focus-visible .mg-bg{transform:scale(1.06)}
.mg-shade{position:absolute;inset:0;pointer-events:none;background:linear-gradient(90deg,rgba(9,6,16,.94) 0%,rgba(9,6,16,.8) 34%,rgba(9,6,16,.26) 62%,rgba(9,6,16,.05) 82%),linear-gradient(0deg,rgba(9,6,16,.62) 0%,rgba(9,6,16,0) 34%),radial-gradient(70% 90% at 0% 60%,rgba(124,70,156,.38) 0%,rgba(124,70,156,0) 70%)}
.mg-in{position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:clamp(12px,2.8cqh,22px);max-width:min(560px,92cqi)}
.mg-eyebrow{display:inline-flex;align-items:center;gap:10px;font:500 12px/1 ${MONO};letter-spacing:.16em;text-transform:uppercase;white-space:nowrap;color:${LAVENDER}}
.mg-eyebrow i{width:7px;height:7px;border-radius:50%;background:${LAVENDER};box-shadow:0 0 0 4px rgba(214,186,236,.16)}
.mg-title{margin:0;font:700 clamp(40px,min(8.4cqi,14cqh),100px)/.94 ${FONT};letter-spacing:-.05em;color:#fff}
.mg-title b{font-weight:700;color:${LAVENDER}}
.mg-sub{margin:0;max-width:460px;font:500 clamp(14.5px,min(1.45cqi,2.4cqh),17.5px)/1.55 ${FONT};color:rgba(255,255,255,.74)}
.mg-chips{display:flex;flex-wrap:wrap;gap:8px}
.mg-chip{display:inline-flex;align-items:center;gap:8px;height:34px;padding:0 12px 0 10px;border-radius:10px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.13);font:500 13px/1 ${FONT};color:rgba(255,255,255,.82);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);white-space:nowrap}
.mg-chip svg{width:16px;height:16px;flex:0 0 auto;color:${LAVENDER}}
.mg-chip b{font-weight:700;color:#fff}
.mg-cta{display:flex;align-items:center;flex-wrap:wrap;gap:12px 18px;margin-top:4px}
.mg-play{display:inline-flex;align-items:center;gap:12px;height:56px;padding:0 24px 0 9px;border-radius:16px;background:linear-gradient(110deg,#8d52b8 0%,#6a3888 100%);border:1px solid rgba(239,228,250,.3);box-shadow:0 18px 40px -18px rgba(124,70,156,.95),inset 0 1px 0 rgba(255,255,255,.18);font:600 16.5px/1 ${FONT};letter-spacing:-.01em;color:#fff;transition:transform .3s cubic-bezier(.2,.7,.2,1),box-shadow .3s ease,background-color .3s ease}
.mg-play i{display:grid;place-items:center;width:38px;height:38px;border-radius:11px;background:#fff;color:#6a3888}
.mg-card:hover .mg-play,.mg-card:focus-visible .mg-play{transform:translateY(-2px);box-shadow:0 22px 46px -16px rgba(154,95,196,.95),0 0 0 3px rgba(214,186,236,.22),inset 0 1px 0 rgba(255,255,255,.22)}
.mg-card:focus-visible{outline:none}
.mg-card:focus-visible .mg-play{outline:2px solid #fff;outline-offset:4px}
.mg-note{display:inline-flex;align-items:center;gap:8px;font:500 13px/1.3 ${FONT};color:rgba(255,255,255,.62)}
.mg-note svg{width:15px;height:15px;flex:0 0 auto}
.mg-keys{position:absolute;left:clamp(24px,7cqi,96px);bottom:clamp(16px,4cqh,32px);display:flex;align-items:center;gap:16px;font:500 12.5px/1 ${FONT};color:rgba(255,255,255,.6)}
.mg-keys span{display:inline-flex;align-items:center;gap:6px}
.mg-keys kbd{display:inline-block;min-width:20px;padding:3px 5px;border-radius:5px;border:1px solid rgba(255,255,255,.28);background:rgba(255,255,255,.06);font:500 11px/1.1 ${MONO};text-align:center;color:#fff}
.mg-load{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;background:#09070f;color:rgba(255,255,255,.7);font:500 13px/1 ${FONT};letter-spacing:.02em;transition:opacity .6s ease;pointer-events:none}
.mg-load i{width:38px;height:38px;border-radius:50%;border:2px solid rgba(214,186,236,.2);border-top-color:${LAVENDER};animation:mg-spin .9s linear infinite}
@keyframes mg-spin{to{transform:rotate(360deg)}}
@container (max-width:620px){.mg-card{align-items:flex-end;padding:0 22px 26px}.mg-shade{background:linear-gradient(0deg,rgba(9,6,16,.96) 0%,rgba(9,6,16,.78) 52%,rgba(9,6,16,.18) 100%)}.mg-keys{display:none}.mg-play{height:52px;font-size:16px}.mg-chip{height:32px;font-size:12.5px}.mg-eyebrow{font-size:10.5px;letter-spacing:.1em}.mg-bg{background-position:68% 50%}}
@container (max-height:560px){.mg-sub{display:none}.mg-keys{display:none}}
@container (max-height:430px){.mg-chips{display:none}.mg-eyebrow{display:none}}
@media (pointer:coarse){.mg-keys{display:none}}
@media (prefers-reduced-motion:reduce){.mg-load i{animation:none}.mg-bg{transition:none}}
`

type MarinorGameProps = {
    start: "click" | "auto"
    label: string
    hint: string
    accent: string
    radius: number
    fullscreen: boolean
    style?: React.CSSProperties
}

/**
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 * @framerIntrinsicWidth 1200
 * @framerIntrinsicHeight 675
 */
export default function MarinorGame(props: MarinorGameProps) {
    const { start = "click", label = "Start sailing", hint = "W A S D or arrows to drive", radius = 0, fullscreen = true, style } = props
    const isStatic = useIsStaticRenderer()
    const box = useRef<HTMLDivElement>(null)
    const frame = useRef<HTMLIFrameElement>(null)
    const [on, setOn] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [full, setFull] = useState(false)
    const [canFull, setCanFull] = useState(false)
    const [wide, setWide] = useState(true)
    const fullRef = useRef(false)

    // the game in this frame (start "At once"): it gets this site's address and its page paths
    const src = useMemo(() => gameSrc(false), [])

    // full screen for the game in this frame, where the browser has it
    useEffect(() => {
        if (isStatic || typeof document === "undefined" || !box.current) return
        const el = box.current
        startTransition(() => setCanFull(!!document.fullscreenEnabled))
        const onChange = () => {
            const f = document.fullscreenElement === el
            fullRef.current = f
            startTransition(() => setFull(f))
            // full screen: the wheel steers the camera in the game, and does not scroll this page
            try {
                if (frame.current && frame.current.contentWindow) frame.current.contentWindow.postMessage({ marinor: "full", on: f }, GAME_ORIGIN)
            } catch (e) {}
        }
        document.addEventListener("fullscreenchange", onChange)
        const ro = new ResizeObserver(() => startTransition(() => setWide(el.clientWidth >= 640)))
        ro.observe(el)
        return () => {
            document.removeEventListener("fullscreenchange", onChange)
            ro.disconnect()
        }
    }, [isStatic])

    // the game in this frame: a post asks for one of this site's pages (only the game's own address, only our pages),
    // and the wheel over the game scrolls this page
    useEffect(() => {
        if (isStatic || typeof window === "undefined") return
        const ok = new Set(Object.values(SITE_PAGES))
        const onMessage = (e: MessageEvent) => {
            if (e.origin !== GAME_ORIGIN || !e.data || !frame.current || e.source !== frame.current.contentWindow) return
            if (e.data.marinor === "scroll") {
                const dy = Number(e.data.dy)
                if (!fullRef.current && isFinite(dy)) window.scrollBy({ top: Math.max(-800, Math.min(800, dy)), left: 0 })
                return
            }
            if (e.data.type !== "marinor:navigate") return
            const path = String(e.data.path || "")
            if (!ok.has(path)) return
            try {
                ;(e.source as Window | null)?.postMessage({ type: "marinor:navigating" }, GAME_ORIGIN)
            } catch (err) {}
            if (document.fullscreenElement) document.exitFullscreen().catch(() => {})
            window.location.href = path
        }
        window.addEventListener("message", onMessage)
        return () => window.removeEventListener("message", onMessage)
    }, [isStatic])

    useEffect(() => {
        if (!isStatic && start === "auto") startTransition(() => setOn(true))
    }, [isStatic, start])

    // the keys go to the game as soon as it is in front
    useEffect(() => {
        if (on && frame.current) frame.current.focus()
    }, [on])

    // a click on the title card: the game over the whole page, in full screen (in this frame if that cannot open)
    const play = useCallback(() => {
        if (!launchGame()) startTransition(() => setOn(true))
    }, [])
    const toggleFull = useCallback(() => {
        if (typeof document === "undefined" || !box.current) return
        if (document.fullscreenElement) document.exitFullscreen().catch(() => {})
        else box.current.requestFullscreen().catch(() => {})
        if (frame.current) frame.current.focus()
    }, [])

    return (
        <div
            ref={box}
            style={{
                ...style,
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                borderRadius: full ? 0 : radius,
                background: "#09070f",
                fontFamily: FONT,
            }}
            className="mg-root"
        >
            <style dangerouslySetInnerHTML={{ __html: CSS }} />
            {on && src ? (
                <>
                    <iframe
                        ref={frame}
                        src={src}
                        title="Drive Argus: the Marinor NTNU harbour game"
                        allow="fullscreen; autoplay; gamepad; microphone"
                        allowFullScreen
                        onLoad={() => {
                            startTransition(() => setLoaded(true))
                            if (frame.current) frame.current.focus()
                        }}
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, display: "block" }}
                    />
                    <div className="mg-load" style={{ opacity: loaded ? 0 : 1 }} aria-hidden={loaded}>
                        <i />
                        Loading the harbour …
                    </div>
                </>
            ) : (
                <button type="button" onClick={play} aria-label={`${label}: Drive Argus, the Marinor NTNU harbour game, in full screen`} className="mg-card">
                    <span className="mg-bg" aria-hidden="true" />
                    <span className="mg-shade" aria-hidden="true" />
                    <span className="mg-in">
                        <span className="mg-eyebrow">
                            <i />
                            Marinor NTNU · The harbour game
                        </span>
                        <span className="mg-title">
                            Drive <b>Argus</b>
                        </span>
                        <span className="mg-sub">Take the helm of Argus, our autonomous boat, in the harbour in Trondheim. Sail the Njord tasks, or let it find its own way.</span>
                        <span className="mg-chips">
                            {CHIPS.map((c) => (
                                <span key={c.t} className="mg-chip">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" dangerouslySetInnerHTML={{ __html: c.icon }} />
                                    <span>
                                        {c.n ? <b>{c.n} </b> : null}
                                        {c.t}
                                    </span>
                                </span>
                            ))}
                        </span>
                        <span className="mg-cta">
                            <span className="mg-play">
                                <i>
                                    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M7 4.5v15l12.5-7.5z" fill="currentColor" />
                                    </svg>
                                </i>
                                {label}
                            </span>
                            <span className="mg-note">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M3 9V3h6M21 9V3h-6M3 15v6h6M21 15v6h-6" />
                                </svg>
                                Opens in full screen
                            </span>
                        </span>
                    </span>
                    {hint ? (
                        <span className="mg-keys" aria-hidden="true">
                            <span>
                                <kbd>W</kbd>
                                <kbd>A</kbd>
                                <kbd>S</kbd>
                                <kbd>D</kbd>
                                drive
                            </span>
                            <span>
                                <kbd>Space</kbd>
                                LiDAR
                            </span>
                            <span>
                                <kbd>Esc</kbd>
                                menu
                            </span>
                        </span>
                    ) : null}
                </button>
            )}
            {on && loaded && fullscreen && canFull && wide ? (
                <button
                    type="button"
                    onClick={toggleFull}
                    aria-label={full ? "Leave full screen" : "Full screen"}
                    title={full ? "Leave full screen" : "Full screen"}
                    style={{
                        position: "absolute",
                        left: "50%",
                        bottom: 14,
                        transform: "translateX(-50%)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 38,
                        height: 38,
                        padding: 0,
                        borderRadius: 10,
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        background: "rgba(10, 13, 20, 0.55)",
                        backdropFilter: "blur(8px)",
                        color: "#fff",
                        cursor: "pointer",
                    }}
                >
                    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
                        <path d={full ? "M9 3v6H3M15 3v6h6M9 21v-6H3M15 21v-6h6" : "M3 9V3h6M21 9V3h-6M3 15v6h6M21 15v6h-6"} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            ) : null}
        </div>
    )
}

addPropertyControls(MarinorGame, {
    start: {
        type: ControlType.Enum,
        title: "Start",
        options: ["click", "auto"],
        optionTitles: ["On click", "At once"],
        defaultValue: "click",
        displaySegmentedControl: true,
    },
    label: { type: ControlType.String, title: "Button", defaultValue: "Start sailing" },
    hint: { type: ControlType.String, title: "Hint", defaultValue: "W A S D or arrows to drive" },
    accent: { type: ControlType.Color, title: "Accent", defaultValue: "rgb(124, 70, 156)", hidden: () => true },
    radius: { type: ControlType.Number, title: "Radius", defaultValue: 0, min: 0, max: 60, unit: "px" },
    fullscreen: { type: ControlType.Boolean, title: "Full screen", defaultValue: true, enabledTitle: "Show", disabledTitle: "Hide" },
})
