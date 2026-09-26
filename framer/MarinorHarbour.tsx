import * as React from "react"
import { useEffect, useRef } from "react"
import { addPropertyControls, ControlType, useIsStaticRenderer } from "framer"

// Request: "har du muligheten til og legge noen av 3d animasjonenen fra denne siden til framer nettsiden"
// The 3D harbour with Argus from the new Marinor site, as a Framer code component.
// The 3D code and the models are served from the repo by jsDelivr, pinned to one commit.
const BASE = "https://cdn.jsdelivr.net/gh/afno0810-cloud/cc@3b553f42a0513fc2170590c527e4b5b3232fb41f/"
const LIB = BASE + "framer/marinor-3d.js"
const MODELS = BASE + "public/media/models/"
const POSTER = BASE + "framer/harbour-poster.jpg"

type MarinorHarbourProps = {
    view: "close" | "argus" | "wide"
    sun: number
    offset: number
    offsetY: number
    scan: boolean
    mouse: boolean
    turn: number
    scroll: boolean
    zoom: number
    poster: boolean
    radius: number
    style?: React.CSSProperties
}

/**
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 * @framerIntrinsicWidth 1200
 * @framerIntrinsicHeight 675
 */
export default function MarinorHarbour(props: MarinorHarbourProps) {
    const { view = "close", sun = 16, offset = 0, offsetY = 0, scan = true, mouse = true, turn = 1, scroll = false, zoom = 1, poster = true, radius = 0, style } = props
    const isStatic = useIsStaticRenderer()
    const box = useRef<HTMLDivElement>(null)
    const api = useRef<any>(null)
    // the newest settings, so props that change while the 3D is loading are not lost
    const latest = useRef({ view, sun, offset, offsetY, scan, mouse, turn, scroll, zoom })
    latest.current = { view, sun, offset, offsetY, scan, mouse, turn, scroll, zoom }

    // start the 3D once in the browser (the Framer canvas shows the poster)
    useEffect(() => {
        if (isStatic || typeof window === "undefined" || !box.current) return
        let dead = false
        import(/* @vite-ignore */ LIB)
            .then((m) => {
                if (dead || !box.current) return
                api.current = m.mountHarbour(box.current, { models: MODELS, ...latest.current })
            })
            .catch(() => {})
        return () => {
            dead = true
            api.current?.destroy()
            api.current = null
        }
    }, [isStatic])

    useEffect(() => {
        api.current?.set({ view, sun, offset, offsetY, mouse, turn, scroll, zoom })
    }, [view, sun, offset, offsetY, mouse, turn, scroll, zoom])

    return (
        <div
            ref={box}
            style={{
                ...style,
                position: "relative",
                overflow: "hidden",
                borderRadius: radius,
                // without the poster, whatever is behind the box shows until the 3D has loaded
                background: poster ? `#2b3a4f url(${POSTER}) center / cover no-repeat` : "transparent",
            }}
        />
    )
}

addPropertyControls(MarinorHarbour, {
    view: {
        type: ControlType.Enum,
        title: "Utsnitt",
        options: ["close", "argus", "wide"],
        optionTitles: ["Argus nært", "Argus lavt", "Hele havna"],
        defaultValue: "close",
    },
    sun: {
        type: ControlType.Number,
        title: "Sol (grader)",
        min: -10,
        max: 30,
        step: 1,
        defaultValue: 16,
        description: "20 ettermiddag · 4 gyllen · 0 solnedgang · −5 skumring · −10 natt",
    },
    offset: {
        type: ControlType.Number,
        title: "Flytt båten",
        min: -0.4,
        max: 0.4,
        step: 0.02,
        defaultValue: 0,
        description: "Skyv båten til siden for å gi plass til tekst",
    },
    offsetY: {
        type: ControlType.Number,
        title: "Båten opp/ned",
        min: -0.4,
        max: 0.4,
        step: 0.02,
        defaultValue: 0,
        description: "Pluss flytter båten opp, minus ned",
    },
    scan: {
        type: ControlType.Boolean,
        title: "LiDAR-skann",
        defaultValue: true,
        enabledTitle: "På",
        disabledTitle: "Av",
    },
    mouse: {
        type: ControlType.Boolean,
        title: "Mus",
        defaultValue: true,
        enabledTitle: "På",
        disabledTitle: "Av",
        description: "Kamera følger musa, klikk i vannet gir ringer",
    },
    turn: {
        type: ControlType.Number,
        title: "Kamerafart",
        min: 0,
        max: 3,
        step: 0.1,
        defaultValue: 1,
    },
    scroll: {
        type: ControlType.Boolean,
        title: "Scroll",
        defaultValue: false,
        enabledTitle: "På",
        disabledTitle: "Av",
        description: "Kameraet svinger rundt båten når du scroller forbi",
    },
    zoom: {
        type: ControlType.Number,
        title: "Zoom",
        min: 0.5,
        max: 2,
        step: 0.05,
        defaultValue: 1,
        description: "Over 1 flytter kameraet nærmere båten",
    },
    poster: {
        type: ControlType.Boolean,
        title: "Stillbilde",
        defaultValue: true,
        enabledTitle: "På",
        disabledTitle: "Av",
        description: "Vis et stillbilde til 3D-en har lastet",
    },
    radius: {
        type: ControlType.Number,
        title: "Hjørner",
        min: 0,
        max: 64,
        step: 1,
        defaultValue: 0,
        unit: "px",
    },
})
