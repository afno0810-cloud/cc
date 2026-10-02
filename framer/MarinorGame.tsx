// Request: "kan du legge spillet til i framer nettsiden så" and "bare spillet skal legges inn i framer nettsdien"
// Only the game from the new Marinor site (drive Argus in the harbour), as a Framer code component.
// The game runs from GitHub Pages in a frame; until it is started, a title card over a still of the harbour.
// The frame gets this site's address (?site=) and the full list of page paths on this site (?pages=, JSON),
// so every post in the game can open the right page here.
// Request: "kan du lage en game menu til spillet og gjøre det bedre så det generelt ser mere ferdig ut" –
// the title card here, and the game menu inside the game (src/scene/gamemenu.js).
import * as React from "react"
import { startTransition, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { addPropertyControls, ControlType, useIsStaticRenderer } from "framer"

const BASE = "https://cdn.jsdelivr.net/gh/afno0810-cloud/cc@2379071874dca65a96268a1daa53b07f6fcc20ad/"
const POSTER = BASE + "framer/game-poster.jpg"
const GAME = "https://afno0810-cloud.github.io/cc/"
const FONT = '"Inter Display", "Inter", system-ui, -apple-system, "Segoe UI", sans-serif'
const MONO = 'ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace'
const GOLD = "#f2c230"
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

const FEATURES = ["4 Njord tasks", "Autonomous mode", "24 places to visit", "Weather & night"]

const CSS = `
.mg-card{position:absolute;inset:0;display:flex;align-items:center;padding:0 clamp(22px,6cqi,80px);color:#fff;text-align:left;container-type:inline-size}
.mg-shade{position:absolute;inset:0;pointer-events:none;background:linear-gradient(90deg,rgba(7,6,13,.9) 0%,rgba(7,6,13,.66) 34%,rgba(7,6,13,.1) 68%,rgba(7,6,13,0) 100%),linear-gradient(0deg,rgba(7,6,13,.55) 0%,rgba(7,6,13,0) 35%)}
.mg-in{position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:clamp(14px,2.4cqi,24px);max-width:520px}
.mg-kick{display:inline-flex;align-items:center;gap:10px;font:500 12px/1 ${MONO};letter-spacing:.18em;text-transform:uppercase;color:${LAVENDER}}
.mg-kick i{width:8px;height:8px;border-radius:50%;background:${GOLD};box-shadow:0 0 12px ${GOLD};animation:mg-blink 1.6s ease-in-out infinite}
@keyframes mg-blink{50%{opacity:.3}}
.mg-title{margin:0;font:800 clamp(48px,10cqi,112px)/.86 ${FONT};letter-spacing:-.045em;text-transform:uppercase}
.mg-title b{display:block;font-weight:800;color:${GOLD};background:linear-gradient(100deg,${GOLD} 0%,#f7dc86 45%,${LAVENDER} 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.mg-sub{margin:0;max-width:420px;font:500 clamp(14px,1.6cqi,17px)/1.5 ${FONT};color:rgba(255,255,255,.78)}
.mg-chips{display:flex;flex-wrap:wrap;gap:6px}
.mg-chip{padding:6px 11px;border-radius:999px;border:1px solid rgba(214,186,236,.28);background:rgba(255,255,255,.06);font:500 12px/1 ${FONT};color:rgba(255,255,255,.85);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}
.mg-play{display:inline-flex;align-items:center;gap:14px;padding:10px 26px 10px 10px;border-radius:999px;background:${GOLD};color:#15120a;font:700 19px/1 ${FONT};letter-spacing:-.01em;box-shadow:0 14px 40px -12px rgba(242,194,48,.6);transition:transform .3s cubic-bezier(.2,.7,.2,1),box-shadow .3s ease}
.mg-play span{display:grid;place-items:center;width:42px;height:42px;border-radius:50%;background:#15120a;color:${GOLD}}
.mg-card:hover .mg-play,.mg-card:focus-visible .mg-play{transform:translateY(-2px) scale(1.03);box-shadow:0 18px 48px -12px rgba(242,194,48,.75)}
.mg-card:focus-visible{outline:none}
.mg-card:focus-visible .mg-play{outline:2px solid #fff;outline-offset:4px}
.mg-hint{font:500 12.5px/1.4 ${FONT};color:rgba(255,255,255,.6)}
.mg-hint kbd{display:inline-block;min-width:20px;padding:2px 5px;margin:0 1px;border-radius:5px;border:1px solid rgba(255,255,255,.3);font:500 11px/1.2 ${MONO};text-align:center;color:#fff}
.mg-load{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;background:#07060d;color:rgba(255,255,255,.7);font:500 12px/1 ${MONO};letter-spacing:.16em;text-transform:uppercase;transition:opacity .6s ease;pointer-events:none}
.mg-load i{width:38px;height:38px;border-radius:50%;border:2px solid rgba(214,186,236,.2);border-top-color:${GOLD};animation:mg-spin .9s linear infinite}
@keyframes mg-spin{to{transform:rotate(360deg)}}
@container (max-width:560px){.mg-card{align-items:flex-end;padding-bottom:28px}.mg-shade{background:linear-gradient(0deg,rgba(7,6,13,.94) 0%,rgba(7,6,13,.7) 50%,rgba(7,6,13,.15) 100%)}.mg-hint{display:none}.mg-play{font-size:17px}}
@media (prefers-reduced-motion:reduce){.mg-kick i,.mg-load i{animation:none}}
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
                background: "#07060d",
                fontFamily: FONT,
                containerType: "inline-size",
            }}
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
                        Loading the harbour
                    </div>
                </>
            ) : (
                <button
                    type="button"
                    onClick={play}
                    aria-label={`${label}: Drive Argus, the Marinor NTNU harbour game`}
                    className="mg-card"
                    style={{ border: 0, cursor: "pointer", background: `#07060d url(${POSTER}) center / cover no-repeat`, font: "inherit" }}
                >
                    <span className="mg-shade" aria-hidden="true" />
                    <span className="mg-in">
                        <span className="mg-kick">
                            <i />
                            Marinor NTNU · The harbour game
                        </span>
                        <span className="mg-title">
                            Drive <b>Argus</b>
                        </span>
                        <span className="mg-sub">Take the helm of Argus, our autonomous boat, in the harbour in Trondheim. Sail the Njord tasks, or let it find its own way.</span>
                        <span className="mg-chips">
                            {FEATURES.map((f) => (
                                <span key={f} className="mg-chip">
                                    {f}
                                </span>
                            ))}
                        </span>
                        <span className="mg-play">
                            <span>
                                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M7 4.5v15l12.5-7.5z" fill="currentColor" />
                                </svg>
                            </span>
                            {label}
                        </span>
                        {hint ? (
                            <span className="mg-hint">
                                {hint.split(" ").map((w, i) =>
                                    w.length === 1 ? (
                                        <kbd key={i}>{w}</kbd>
                                    ) : (
                                        <React.Fragment key={i}> {w} </React.Fragment>
                                    )
                                )}
                            </span>
                        ) : null}
                    </span>
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
