/* ================================================================
 About – Marinor NTNU · photos and default content.
 Layout, colours and building blocks live in SiteKit.tsx (re-exported here).
 ================================================================ */

export * from "./SiteKit.tsx"

const IMG = "https://framerusercontent.com/images/"
export const PH = {
    boat: IMG + "okoPvPfG1Mc7SjtWCqN6BRlnKQ.jpeg", // Argus on the water
    water: IMG + "iD5n7P5PmXPXewIrUMJsfhii2rQ.jpeg", // Argus in the water
    dock: IMG + "Xt3NToRpvd0fFTDvicZcgFlrjiE.jpeg", // work on the dock
    sensors: IMG + "wE8Fd622sKOX4zZ47Yd5LTp9oo.jpeg", // sensors
    workshop: IMG + "XCTH8UnFJpPlbZTWKyEdvdjsN1A.jpg", // hull in the workshop
    sanding: IMG + "sscihEc0vW6hGiMootkpCcppvtg.jpg", // sanding the hulls
    d6180: IMG + "4TVFbItxOj73jH3lRTCoPsZy9z4.jpg",
    d6189: IMG + "e4K2lW5CTwePm1UXtq3SxHSsjM.jpeg",
    njord: IMG + "gVtb0YIZKv3qgIFUEzjyykwgHS8.png", // Njord image (2026)
    roboLogo: IMG + "LrBmF25Tu6AkREtPrSt4ZFu3PhI.webp", // RoboBoat logo (2027)
}

export type Stat = { value: number; from: number; suffix: string; label: string }

export const STAT_DEFAULTS: Stat[] = [
    { value: 2025, from: 1990, suffix: "", label: "the year Marinor NTNU was founded in Trondheim" },
    { value: 35, from: 0, suffix: "+", label: "members in 2026" },
    { value: 4, from: 0, suffix: "", label: "students started Marinor" },
    { value: 23, from: 0, suffix: "", label: "teams in the 2026 Njord Challenge, Marinor included" },
]

export const FOUNDERS = ["Kasper Tufte Langland", "Johannes Embretsen Gunnarshaug", "Oskar Fredrik Eliassen", "Emil Mohr-Skogan"]

/* We are 35+ members. An older stats list saved in the right panel may still say 20 –
 the member number is lifted to 35+ so the page is always up to date. */
export const MEMBERS = 35
export const fixMembers = (list: Stat[]) =>
    (list || []).map((s: Stat) => (/member/i.test(s.label || "") && s.value < MEMBERS ? { ...s, value: MEMBERS, suffix: "+" } : s))
