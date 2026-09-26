import { useEffect, useRef } from "react"
import { addPropertyControls, ControlType, useIsStaticRenderer } from "framer"

// The 3D harbour with Argus from the new Marinor site, as a Framer code component.
// The 3D code and the models are served from the repo by jsDelivr, pinned to one commit.
const BASE = "https://cdn.jsdelivr.net/gh/afno0810-cloud/cc@2f3316d5a677a3ed4feaf6ae2266a6c7d80101b5/"
const LIB = BASE + "framer/marinor-3d.js"
const MODELS = BASE + "public/media/models/"
const POSTER = BASE + "framer/harbour-poster.jpg"

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 * @framerIntrinsicWidth 1200
 * @framerIntrinsicHeight 675
 */
export default function MarinorHarbour(props) {
    const { view = "close", sun = 16, offset = 0, scan = true, mouse = true, turn = 1, radius = 0, style } = props
    const isStatic = useIsStaticRenderer()
    const box = useRef<HTMLDivElement>(null)
    const api = useRef<any>(null)

    // start the 3D once in the browser (the Framer canvas shows the poster)
    useEffect(() => {
        if (isStatic || typeof window === "undefined" || !box.current) return
        let dead = false
        import(/* @vite-ignore */ LIB)
            .then((m) => {
                if (dead || !box.current) return
                api.current = m.mountHarbour(box.current, { models: MODELS, view, sun, offset, scan, mouse, turn })
            })
            .catch(() => {})
        return () => {
            dead = true
            api.current?.destroy()
            api.current = null
        }
    }, [isStatic])

    useEffect(() => {
        api.current?.set({ view, sun, offset, mouse, turn })
    }, [view, sun, offset, mouse, turn])

    return (
        <div
            ref={box}
            style={{
                ...style,
                position: "relative",
                overflow: "hidden",
                borderRadius: radius,
                background: `#2b3a4f url(${POSTER}) center / cover no-repeat`,
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
