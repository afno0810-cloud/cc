import * as React from "react"

/* ================================================================
 Njord Challenge (and RoboBoat) – photos, types and icons.
 Layout, colours and building blocks live in SiteKit.tsx (re-exported here).
 ================================================================ */

export * from "./SiteKit.tsx"

/* Photos for the Njord page (uploaded to this Framer project) */
const IMG = "https://framerusercontent.com/images/"
export const NJORD_PHOTOS = {
    hero: IMG + "gVtb0YIZKv3qgIFUEzjyykwgHS8.png", // Njord image
    about: IMG + "2E7XId6Dx1tZgYXAEGufUkarzk.jpeg", // DSCF6206
    aboutTwo: IMG + "okoPvPfG1Mc7SjtWCqN6BRlnKQ.jpeg", // DSCF6237
    marinor: IMG + "4TVFbItxOj73jH3lRTCoPsZy9z4.jpg", // 19. april
}

export type Stat = { value: number; suffix: string; label: string }
export type Task = { icon: string; title: string; text: string }
export type Item = { title: string; text: string }

export function Icon({ name, color = "currentColor" }: { name: string; color?: string }) {
    const p = { stroke: color, strokeWidth: 1.7, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const }
    let body: React.ReactNode
    switch (name) {
        case "map":
            body = (
                <>
                    <path d="M3 6.5l6-2.5 6 2.5 6-2.5v13l-6 2.5-6-2.5-6 2.5z" {...p} />
                    <path d="M9 4v13M15 6.5v13" {...p} />
                </>
            )
            break
        case "warning":
            body = (
                <>
                    <path d="M12 4l9 16H3z" {...p} />
                    <path d="M12 10v4M12 17.2v.1" {...p} />
                </>
            )
            break
        case "dock":
            body = (
                <>
                    <path d="M3 20h18M6 20V9h8v11" {...p} />
                    <path d="M14 13h5v7" {...p} />
                    <path d="M9 6V3" {...p} />
                </>
            )
            break
        default:
            body = (
                <>
                    <path d="M4 18c3-9 13-9 16 0" {...p} />
                    <circle cx="4" cy="18" r="1.6" {...p} />
                    <circle cx="20" cy="18" r="1.6" {...p} />
                </>
            )
    }
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
            {body}
        </svg>
    )
}
