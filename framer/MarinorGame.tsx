// Request: "kan du legge spillet til i framer nettsiden så" and "bare spillet skal legges inn i framer nettsdien"
// Only the game from the new Marinor site (drive Argus in the harbour), as a Framer code component.
// The game runs from GitHub Pages in a frame; until it is started, a still of the harbour and a button are shown.
import * as React from "react"
import { startTransition, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { addPropertyControls, ControlType, useIsStaticRenderer } from "framer"

const BASE = "https://cdn.jsdelivr.net/gh/afno0810-cloud/cc@2379071874dca65a96268a1daa53b07f6fcc20ad/"
const POSTER = BASE + "framer/game-poster.jpg"
const GAME = "https://afno0810-cloud.github.io/cc/"
const FONT = '"Inter Display", "Inter", system-ui, -apple-system, "Segoe UI", sans-serif'

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
    const { start = "click", label = "Drive Argus", hint = "W A S D or arrows to drive", accent = "rgb(124, 70, 156)", radius = 0, fullscreen = true, style } = props
    const isStatic = useIsStaticRenderer()
    const box = useRef<HTMLDivElement>(null)
    const frame = useRef<HTMLIFrameElement>(null)
    const [on, setOn] = useState(false)
    const [full, setFull] = useState(false)
    const [canFull, setCanFull] = useState(false)
    const [wide, setWide] = useState(true)

    // the game gets this site's address, so the links in it open this site's own pages
    const src = useMemo(() => {
        if (typeof window === "undefined") return ""
        return GAME + "?site=" + encodeURIComponent(window.location.origin) + "#page-game"
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
                background: "#0d1420",
                fontFamily: FONT,
            }}
        >
            {on && src ? (
                <iframe
                    ref={frame}
                    src={src}
                    title="Drive Argus: the Marinor NTNU harbour game"
                    allow="fullscreen; autoplay; gamepad"
                    allowFullScreen
                    onLoad={() => frame.current && frame.current.focus()}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, display: "block" }}
                />
            ) : (
                <button
                    type="button"
                    onClick={play}
                    aria-label={label}
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        padding: 0,
                        border: 0,
                        cursor: "pointer",
                        background: `#0d1420 url(${POSTER}) center / cover no-repeat`,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 14,
                        color: "#fff",
                        fontFamily: FONT,
                    }}
                >
                    <span aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(8, 10, 18, 0.15) 0%, rgba(8, 10, 18, 0.55) 70%, rgba(8, 10, 18, 0.75) 100%)" }} />
                    <span
                        style={{
                            position: "relative",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 12,
                            padding: "16px 30px 16px 24px",
                            borderRadius: 999,
                            background: accent,
                            fontSize: 20,
                            fontWeight: 600,
                            letterSpacing: "-0.01em",
                            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.35)",
                            width: "max-content",
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M7 4.5v15l12.5-7.5z" fill="currentColor" />
                        </svg>
                        {label}
                    </span>
                    {hint ? (
                        <span style={{ position: "relative", fontSize: 14, fontWeight: 500, opacity: 0.85, textShadow: "0 1px 8px rgba(0, 0, 0, 0.5)", width: "max-content", maxWidth: "90%" }}>{hint}</span>
                    ) : null}
                </button>
            )}
            {on && fullscreen && canFull && wide ? (
                <button
                    type="button"
                    onClick={toggleFull}
                    aria-label={full ? "Leave full screen" : "Full screen"}
                    style={{
                        position: "absolute",
                        left: "50%",
                        bottom: 14,
                        transform: "translateX(-50%)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "8px 14px",
                        borderRadius: 999,
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        background: "rgba(16, 16, 17, 0.55)",
                        backdropFilter: "blur(8px)",
                        color: "#fff",
                        fontFamily: FONT,
                        fontSize: 13,
                        fontWeight: 500,
                        cursor: "pointer",
                        width: "max-content",
                    }}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                        <path d={full ? "M9 3v6H3M15 3v6h6M9 21v-6H3M15 21v-6h6" : "M3 9V3h6M21 9V3h-6M3 15v6h6M21 15v6h-6"} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {full ? "Leave full screen" : "Full screen"}
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
    label: { type: ControlType.String, title: "Button", defaultValue: "Drive Argus" },
    hint: { type: ControlType.String, title: "Hint", defaultValue: "W A S D or arrows to drive" },
    accent: { type: ControlType.Color, title: "Accent", defaultValue: "rgb(124, 70, 156)" },
    radius: { type: ControlType.Number, title: "Radius", defaultValue: 0, min: 0, max: 60, unit: "px" },
    fullscreen: { type: ControlType.Boolean, title: "Full screen", defaultValue: true, enabledTitle: "Show", disabledTitle: "Hide" },
})
