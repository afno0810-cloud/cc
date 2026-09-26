import * as React from "react"
import { useEffect, useRef } from "react"
import { addPropertyControls, ControlType, useIsStaticRenderer } from "framer"

// Request: "har du muligheten til og legge noen av 3d animasjonenen fra denne siden til framer nettsiden"
// The 3D globe with the route Trondheim → Sarasota from the new Marinor site, as a Framer code component.
// The 3D code is served from the repo by jsDelivr, pinned to one commit.
const BASE = "https://cdn.jsdelivr.net/gh/afno0810-cloud/cc@dbd1d2a522164d17a88bf64be3d5ebb63ec99d5b/"
const LIB = BASE + "framer/marinor-3d.js"
const POSTER = BASE + "framer/globe-poster.jpg"

// the colour as the browser resolved it (a Framer colour style arrives as a CSS variable)
function solid(el: HTMLElement) {
    return getComputedStyle(el).backgroundColor
}

type MarinorGlobeProps = {
    background: string
    labels: boolean
    loop: boolean
    radius: number
    style?: React.CSSProperties
}

/**
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 * @framerIntrinsicWidth 800
 * @framerIntrinsicHeight 800
 */
export default function MarinorGlobe(props: MarinorGlobeProps) {
    const { background = "#0d0c16", labels = true, loop = false, radius = 0, style } = props
    const isStatic = useIsStaticRenderer()
    const box = useRef<HTMLDivElement>(null)
    const api = useRef<any>(null)
    // the newest settings, so props that change while the 3D is loading are not lost
    const latest = useRef({ labels, loop })
    latest.current = { labels, loop }

    // start the 3D once in the browser (the Framer canvas shows the poster)
    useEffect(() => {
        if (isStatic || typeof window === "undefined" || !box.current) return
        let dead = false
        import(/* @vite-ignore */ LIB)
            .then((m) => {
                if (dead || !box.current) return
                api.current = m.mountGlobe(box.current, { background: solid(box.current), ...latest.current })
            })
            .catch(() => {})
        return () => {
            dead = true
            api.current?.destroy()
            api.current = null
        }
    }, [isStatic])

    useEffect(() => {
        if (api.current && box.current) api.current.set({ background: solid(box.current), labels, loop })
    }, [background, labels, loop])

    return (
        <div
            ref={box}
            style={{
                ...style,
                position: "relative",
                overflow: "hidden",
                borderRadius: radius,
                background: isStatic ? `${background} url(${POSTER}) center / contain no-repeat` : background,
            }}
        />
    )
}

addPropertyControls(MarinorGlobe, {
    background: {
        type: ControlType.Color,
        title: "Bakgrunn",
        defaultValue: "#0d0c16",
    },
    labels: {
        type: ControlType.Boolean,
        title: "Stedsnavn",
        defaultValue: true,
        enabledTitle: "Vis",
        disabledTitle: "Skjul",
    },
    loop: {
        type: ControlType.Boolean,
        title: "Gjenta ruta",
        defaultValue: false,
        enabledTitle: "Ja",
        disabledTitle: "Nei",
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
