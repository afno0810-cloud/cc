import * as React from "react"

/* ================================================================
 Project Argus – photos, default content and icons.
 Layout, colours and building blocks live in SiteKit.tsx (re-exported here).
 ================================================================ */

export * from "./SiteKit.tsx"

/* Photos uploaded to this Framer project */
const IMG = "https://framerusercontent.com/images/"
export const PHOTO = {
    hero: IMG + "okoPvPfG1Mc7SjtWCqN6BRlnKQ.jpeg", // DSCF6237 – boat on the water
    storyA: IMG + "iD5n7P5PmXPXewIrUMJsfhii2rQ.jpeg", // DSCF6216 – boat in the water
    storyB: IMG + "Xt3NToRpvd0fFTDvicZcgFlrjiE.jpeg", // DSCF6185 – work on the dock
    tech: IMG + "wE8Fd622sKOX4zZ47Yd5LTp9oo.jpeg", // DSCF6178 – sensors
    nov: IMG + "XCTH8UnFJpPlbZTWKyEdvdjsN1A.jpg", // 16 November
    jan: IMG + "sscihEc0vW6hGiMootkpCcppvtg.jpg", // 8 January
    mar: IMG + "4TVFbItxOj73jH3lRTCoPsZy9z4.jpg", // 8 March
}

export type Stat = { value: number; suffix: string; label: string }
export type Tech = { icon: string; title: string; text: string }
export type Milestone = { date: string; title: string; text: string; image?: { src?: string; srcSet?: string; alt?: string } }
export type GalleryItem = { caption: string; image?: { src?: string; srcSet?: string; alt?: string } }
export type Goal = { title: string; text: string }

/* ---------- Default content ---------- */
export const DEFAULT_STATS: Stat[] = [
    { value: 1, suffix: "st", label: "autonomous surface vessel built by Marinor NTNU" },
    { value: 2, suffix: "", label: "hulls in a stable catamaran design" },
    { value: 5, suffix: "", label: "months from the first hull to launch day" },
    { value: 4, suffix: "", label: "propellers, so Argus can turn 360 degrees while it moves forward" },
]

export const DEFAULT_TECH: Tech[] = [
    { icon: "hull", title: "Two hulls", text: "Argus is a catamaran. The two hulls give a wide and stable platform for the sensors and electronics." },
    { icon: "thruster", title: "Four propellers", text: "With four propellers Argus can turn a full 360 degrees while it keeps moving forward." },
    { icon: "gnss", title: "Kongsberg Seapath 130", text: "A GNSS-aided inertial navigation system. It combines multi-frequency GNSS receivers with gyroscopes and accelerometers, and gives Argus its position, heading, speed, roll and pitch." },
    { icon: "camera", title: "Stereo depth camera", text: "Two lenses measure the distance to things in front of the boat. The images are also used to recognise what the objects are." },
    { icon: "lidar", title: "LiDAR", text: "Measures the distance to docks, buoys, boats and other obstacles around the boat." },
    { icon: "chip", title: "Pixhawk flight controller", text: "Controls the motors. It calculates the PWM signal that sets the speed of each propeller." },
    { icon: "box", title: "5G link", text: "Sends all data from the boat to land, so we can follow its internal state while it sails." },
    { icon: "box", title: "Waterproof electronics case", text: "The computer, power and wiring are kept dry inside one sealed case." },
]

/* Old spec lists saved on the Framer canvas are swapped for the list above */
export const OLD_TECH = /^(Twin hulls|3D LiDAR|Dual GNSS antennas|Electric thrusters)$/
export const currentTech = (list?: Tech[]) => (!list || !list.length || list.some((t) => OLD_TECH.test((t && t.title) || "")) ? DEFAULT_TECH : list)

export type NavStep = { kind: string; title: string; text: string; link?: { label: string; href: string } }

/* How Argus finds its way, in the order the data flows */
export const DEFAULT_NAV: NavStep[] = [
    { kind: "See", title: "Stereo camera and LiDAR", text: "The depth camera measures distance and recognises objects like buoys and boats. The LiDAR measures the distance to everything around the boat." },
    {
        kind: "Locate",
        title: "Kongsberg Seapath 130",
        text: "GNSS receivers give the position and heading. Gyroscopes and accelerometers fill in between the satellite fixes and keep the estimate going if the signal drops out. Correction data over 5G makes the position more accurate.",
        link: { label: "Seapath 130 at Kongsberg", href: "https://www.kongsberg.com/what-we-do/ocean-space/inertial-solutions/seapath/seapath-130-series/" },
    },
    { kind: "Map", title: "Cost map", text: "What the sensors find goes into a map of the water around the boat. Obstacles, and the water close to them, cost more to sail through." },
    { kind: "Decide", title: "State machine", text: "Keeps track of what Argus is doing right now, for example following the course, going around another boat or docking, and switches when something changes." },
    { kind: "Plan", title: "Field D*", text: "The path planning algorithm finds the cheapest route across the cost map, and plans again when the map changes." },
    { kind: "Drive", title: "Pixhawk", text: "The flight controller turns the plan into PWM signals for the four motors." },
]

export const DEFAULT_TIMELINE: Milestone[] = [
    {
        date: "16 November 2025",
        title: "Shaping the hulls",
        text: "Work starts in the workshop with the first hull.",
        image: { src: PHOTO.nov, alt: "Working on the hull in the workshop" },
    },
    {
        date: "8 January 2026",
        title: "Sanding and finishing",
        text: "Long days of sanding, filling and painting to make the hulls smooth and watertight.",
        image: { src: PHOTO.jan, alt: "Sanding and finishing the hulls" },
    },
    {
        date: "8 March 2026",
        title: "First time on the water",
        text: "The first float test in the harbour. It floats.",
        image: { src: PHOTO.mar, alt: "First float test in the harbour" },
    },
    {
        date: "19 April 2026",
        title: "Putting it all together",
        text: "Hulls, frame and electronics are joined together on the dock for the first time.",
        image: { src: PHOTO.storyB, alt: "Putting Argus together on the dock" },
    },
    {
        date: "26 April 2026",
        title: "Launch day",
        text: "Argus goes into the water with all sensors on board, ready for testing.",
        image: { src: PHOTO.storyA, alt: "Argus in the water on launch day" },
    },
]

export const TIMELINE_FALLBACK = [
    DEFAULT_TIMELINE[0].image,
    DEFAULT_TIMELINE[1].image,
    DEFAULT_TIMELINE[2].image,
    DEFAULT_TIMELINE[3].image,
    DEFAULT_TIMELINE[4].image,
    { src: PHOTO.tech, alt: "Sensors on Argus" },
    { src: PHOTO.hero, alt: "Argus on the water" },
]

/* Gallery captions – same order as the photos in ArgusPhotos.tsx */
export const GALLERY_CAPTIONS: string[] = [
    "Wiring the electronics on the dock",
    "Last checks before launch",
    "Lowering Argus into the water",
    "Working on the hull",
    "Rolling Argus out to the harbour",
    "Ready on the dock",
    "The team behind Argus",
]

export const DEFAULT_GOALS: Goal[] = [
    { title: "A fully autonomous boat", text: "Get Argus to solve all four Njord tasks on its own." },
    { title: "More partners", text: "Work more with the Department of Engineering Cybernetics and with the companies that support us." },
    { title: "Next projects", text: "Use what we learn from Argus when we build Proteus and the bigger boat." },
]

/* ---------- Line icons for the hardware cards ---------- */
export function Icon({ name, color = "currentColor" }: { name: string; color?: string }) {
    const p = { stroke: color, strokeWidth: 1.7, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const }
    let body: React.ReactNode
    switch (name) {
        case "lidar":
            body = (
                <>
                    <circle cx="12" cy="12" r="2.5" {...p} />
                    <path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7" {...p} />
                    <path d="M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8" {...p} />
                </>
            )
            break
        case "camera":
            body = (
                <>
                    <rect x="2.5" y="7" width="19" height="10" rx="3" {...p} />
                    <circle cx="8" cy="12" r="2" {...p} />
                    <circle cx="16" cy="12" r="2" {...p} />
                </>
            )
            break
        case "gnss":
            body = (
                <>
                    <path d="M14 4l6 6-3 3-6-6z" {...p} />
                    <path d="M12 12l-2 2" {...p} />
                    <path d="M4 14a6 6 0 0 0 6 6M4 10a10 10 0 0 0 10 10" {...p} />
                </>
            )
            break
        case "box":
            body = (
                <>
                    <rect x="3" y="7" width="18" height="13" rx="2" {...p} />
                    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" {...p} />
                </>
            )
            break
        case "thruster":
            body = (
                <>
                    <circle cx="12" cy="12" r="2" {...p} />
                    <path d="M12 10c0-4 1-7 3-7s1 4-1.5 7" {...p} />
                    <path d="M13.8 13c3.4 2 5.4 4.5 4.4 6s-4-1-5.6-4" {...p} />
                    <path d="M10.3 13.2c-3 2.4-6.5 2.9-7 1.4s3-3 6-3.1" {...p} />
                </>
            )
            break
        case "frame":
            body = (
                <>
                    <rect x="4" y="4" width="16" height="16" rx="1.5" {...p} />
                    <path d="M4 12h16M12 4v16" {...p} />
                </>
            )
            break
        case "chip":
            body = (
                <>
                    <rect x="7" y="7" width="10" height="10" rx="1.5" {...p} />
                    <path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4" {...p} />
                </>
            )
            break
        default:
            body = (
                <>
                    <path d="M3 15h18" {...p} />
                    <path d="M4.5 15l1.5 4h12l1.5-4" {...p} />
                    <path d="M8 15V9h8v6M12 9V4" {...p} />
                </>
            )
    }
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
            {body}
        </svg>
    )
}
