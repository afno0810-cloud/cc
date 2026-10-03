// Request: "kan du legge spillet til i framer nettsiden så" and "bare spillet skal legges inn i framer nettsdien"
// Only the game from the new Marinor site (drive Argus in the harbour), as a Framer code component.
// The game runs from GitHub Pages in a frame; until it is started, a title card over a still of the harbour.
// The frame gets this site's address (?site=) and the full list of page paths on this site (?pages=, JSON),
// so every post in the game can open the right page here.
// Request: "kan du lage en game menu til spillet og gjøre det bedre så det generelt ser mere ferdig ut" –
// the title card here, and the game menu inside the game (src/scene/gamemenu.js).
// Request: "passe på at all implementering av spillet på nettisden blir bra" – in a section of a page, the
// wheel and a vertical swipe over the game scroll the page (the game forwards them, see src/scene/drive.js).
import * as React from "react"
import { startTransition, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { addPropertyControls, ControlType, useIsStaticRenderer } from "framer"

const BASE = "https://cdn.jsdelivr.net/gh/afno0810-cloud/cc@2379071874dca65a96268a1daa53b07f6fcc20ad/"
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

const FACTS = [
    { n: "4", t: "Njord tasks" },
    { n: "24", t: "Places to visit" },
    { n: "Auto", t: "Autonomous mode" },
]

/* The title card: sized by both the width and the height of the component, so it
 always fits; the same type, colours and buttons as the rest of the site */
const CSS = `
.mg-root{container-type:inline-size}
.mg-card{position:absolute;inset:0;display:flex;align-items:center;padding:0 clamp(24px,7cqi,96px);color:#fff;text-align:left;container-type:size}
.mg-shade{position:absolute;inset:0;pointer-events:none;background:linear-gradient(90deg,rgba(9,7,16,.92) 0%,rgba(9,7,16,.74) 32%,rgba(9,7,16,.18) 62%,rgba(9,7,16,0) 80%),linear-gradient(0deg,rgba(9,7,16,.6) 0%,rgba(9,7,16,0) 30%),radial-gradient(60% 80% at 10% 50%,rgba(124,70,156,.35) 0%,rgba(124,70,156,0) 70%)}
.mg-in{position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:clamp(14px,3.2cqh,28px);max-width:min(540px,92cqi)}
.mg-title{margin:0;font:700 clamp(44px,min(9cqi,15cqh),108px)/.92 ${FONT};letter-spacing:-.05em}
.mg-title b{font-weight:700;color:${LAVENDER};background:linear-gradient(100deg,#fff 0%,${LAVENDER} 60%,#c6a2e8 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.mg-sub{margin:0;max-width:440px;font:500 clamp(14.5px,min(1.5cqi,2.4cqh),18px)/1.55 ${FONT};color:rgba(255,255,255,.76)}
.mg-facts{display:flex;align-items:stretch}
.mg-fact{display:flex;flex-direction:column;gap:4px;padding:0 22px;border-left:1px solid rgba(255,255,255,.16)}
.mg-fact:first-child{padding-left:0;border-left:0}
.mg-fact b{font:700 clamp(20px,min(2.2cqi,3.6cqh),28px)/1 ${FONT};letter-spacing:-.03em;color:#fff}
.mg-fact span{font:500 12.5px/1.3 ${FONT};color:rgba(255,255,255,.6)}
.mg-btns{display:flex;flex-wrap:wrap;gap:10px;margin-top:4px}
.mg-play{display:inline-flex;align-items:center;gap:10px;height:52px;padding:0 22px;border-radius:14px;font:600 16px/1 ${FONT};letter-spacing:-.01em;transition:transform .3s cubic-bezier(.2,.7,.2,1),box-shadow .3s ease,background-color .25s ease,border-color .25s ease}
.mg-play{background:#fff;color:#141018;box-shadow:0 16px 36px -16px rgba(0,0,0,.7)}
.mg-play svg{color:${ACCENT}}
.mg-card:hover .mg-play,.mg-card:focus-visible .mg-play{transform:translateY(-2px);box-shadow:0 20px 44px -16px rgba(124,70,156,.75)}
.mg-card:focus-visible{outline:none}
.mg-card:focus-visible .mg-play{outline:2px solid #fff;outline-offset:4px}
.mg-keys{position:absolute;left:clamp(24px,7cqi,96px);bottom:clamp(16px,4cqh,32px);display:flex;align-items:center;gap:14px;padding:9px 14px;border-radius:12px;background:rgba(9,7,16,.5);border:1px solid rgba(255,255,255,.12);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);font:500 12.5px/1 ${FONT};color:rgba(255,255,255,.66)}
.mg-keys span{display:inline-flex;align-items:center;gap:6px}
.mg-keys kbd{display:inline-block;min-width:20px;padding:3px 5px;border-radius:5px;border:1px solid rgba(255,255,255,.3);font:500 11px/1.1 ${MONO};text-align:center;color:#fff}
.mg-load{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;background:#09070f;color:rgba(255,255,255,.7);font:500 13px/1 ${FONT};letter-spacing:.02em;transition:opacity .6s ease;pointer-events:none}
.mg-load i{width:38px;height:38px;border-radius:50%;border:2px solid rgba(214,186,236,.2);border-top-color:${LAVENDER};animation:mg-spin .9s linear infinite}
@keyframes mg-spin{to{transform:rotate(360deg)}}
@container (max-width:620px){.mg-card{align-items:flex-end;padding-bottom:28px}.mg-shade{background:linear-gradient(0deg,rgba(9,7,16,.95) 0%,rgba(9,7,16,.72) 50%,rgba(9,7,16,.15) 100%)}.mg-keys{display:none}.mg-fact{padding:0 14px}}
@container (max-height:520px){.mg-sub{display:none}.mg-keys{display:none}}
@media (prefers-reduced-motion:reduce){.mg-load i{animation:none}}
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

    // the game gets this site's address and its page paths, so the posts in it open this site's own pages
    const src = useMemo(() => {
        if (typeof window === "undefined") return ""
        return GAME + "?site=" + encodeURIComponent(window.location.origin) + "&pages=" + encodeURIComponent(JSON.stringify(SITE_PAGES)) + "#page-game"
    }, [])

    // full screen, where the browser has it (not on phones: the game's own controls fill the bottom there)
    useEffect(() => {
        if (isStatic || typeof document === "undefined" || !box.current) return
        const el = box.current
        startTransition(() => setCanFull(!!document.fullscreenEnabled))
        const onChange = () => startTransition(() => setFull(document.fullscreenElement === el))
        document.addEventListener("fullscreenchange", onChange)
        const ro = new ResizeObserver(() => startTransition(() => setWide(el.clientWidth >= 640)))
        ro.observe(el)
        return () => {
            document.removeEventListener("fullscreenchange", onChange)
            ro.disconnect()
        }
    }, [isStatic])

    // a post in the game asks for one of this site's pages: go there (only the game's own address, only our pages)
    useEffect(() => {
        if (isStatic || typeof window === "undefined") return
        const ok = new Set(Object.values(SITE_PAGES))
        const onMessage = (e: MessageEvent) => {
            if (e.origin !== GAME_ORIGIN || !e.data) return
            // the wheel and a finger moving up or down over the game scroll this page (the game sends them here)
            if (e.data.marinor === "scroll") {
                const dy = Number(e.data.dy)
                if (frame.current && e.source === frame.current.contentWindow && isFinite(dy)) window.scrollBy({ top: Math.max(-800, Math.min(800, dy)), left: 0 })
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

    const play = useCallback(() => startTransition(() => setOn(true)), [])
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
                        allow="fullscreen; autoplay; gamepad"
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
                <button
                    type="button"
                    onClick={play}
                    aria-label={`${label}: Drive Argus, the Marinor NTNU harbour game`}
                    className="mg-card"
                    style={{ border: 0, cursor: "pointer", background: `#09070f url(${POSTER}) center / cover no-repeat`, font: "inherit" }}
                >
                    <span className="mg-shade" aria-hidden="true" />
                    <span className="mg-in">
                        <span className="mg-title">
                            Drive <b>Argus</b>
                        </span>
                        <span className="mg-sub">Take the helm of Argus, our autonomous boat, in the harbour in Trondheim. Sail the Njord tasks, or let it find its own way.</span>
                        <span className="mg-facts">
                            {FACTS.map((f) => (
                                <span key={f.t} className="mg-fact">
                                    <b>{f.n}</b>
                                    <span>{f.t}</span>
                                </span>
                            ))}
                        </span>
                        <span className="mg-btns">
                            <span className="mg-play">
                                <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M7 4.5v15l12.5-7.5z" fill="currentColor" />
                                </svg>
                                {label}
                            </span>
                        </span>
                    </span>
                    {hint ? (
                        <span className="mg-keys">
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
