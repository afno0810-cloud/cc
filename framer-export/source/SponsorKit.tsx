/* ================================================================
 Sponsor, Projects and Competitions pages – photos and default content.
 Layout, colours and building blocks live in SiteKit.tsx (re-exported here).
 ================================================================ */

export * from "./SiteKit.tsx"

/* Photos in this Framer project */
export const IMG = "https://framerusercontent.com/images/"
export const PH = {
    team: IMG + "vejpeUPaXWhQEjooH4OycbpXan8.webp", // Team.jpg (new)
    boat: IMG + "okoPvPfG1Mc7SjtWCqN6BRlnKQ.jpeg", // DSCF6237
    water: IMG + "iD5n7P5PmXPXewIrUMJsfhii2rQ.jpeg", // DSCF6216
    dock: IMG + "Xt3NToRpvd0fFTDvicZcgFlrjiE.jpeg", // DSCF6185
    sensors: IMG + "wE8Fd622sKOX4zZ47Yd5LTp9oo.jpeg", // DSCF6178
    workshop: IMG + "XCTH8UnFJpPlbZTWKyEdvdjsN1A.jpg", // 16 November
    sanding: IMG + "sscihEc0vW6hGiMootkpCcppvtg.jpg", // 8 January
    float: IMG + "4TVFbItxOj73jH3lRTCoPsZy9z4.jpg", // 8 March
    crew: IMG + "e4K2lW5CTwePm1UXtq3SxHSsjM.jpeg", // DSCF6189
}

export type Benefit = { title: string; text: string }
export type Step = { title: string; text: string }
export type Shot = { image?: { src?: string; srcSet?: string; alt?: string }; caption: string }
export type Stat = { value: number; from: number; suffix: string; label: string }

export const DEFAULT_BENEFITS: Benefit[] = [
    { title: "Meet students", text: "Get to know engineering students at NTNU before they graduate." },
    { title: "Help us early", text: "Marinor started in 2025, so partners have a real say in how we grow." },
    { title: "Support new technology", text: "Your support goes into boats that sail without anyone steering." },
    { title: "Work with us", text: "Give us problems from your company, or join our tests and projects." },
    { title: "Visibility", text: "Your logo on our website, our boat and our posts from competitions." },
]

export const DEFAULT_STEPS: Step[] = [
    { title: "Send us an email", text: "Tell us a little about your company and what you are interested in." },
    { title: "We find the right fit", text: "We meet and agree on what the partnership should look like." },
    { title: "Build it together", text: "You follow the project and hear from us during the year and at competitions." },
]

export const DEFAULT_STATS: Stat[] = [
    { value: 2025, from: 1990, suffix: "", label: "founded at NTNU in Trondheim" },
    { value: 35, from: 0, suffix: "+", label: "members from robotics, automation and marine technology" },
    { value: 7, from: 0, suffix: "", label: "groups, from perception and control to hardware and PR" },
    { value: 23, from: 0, suffix: "", label: "teams in the 2026 Njord Challenge, Marinor included" },
]

/* We are 35+ members. An older stats list saved in the right panel may still say 20 –
 the member number is lifted to 35+ so the page is always up to date. */
export const MEMBERS = 35
export const fixMembers = (list: Stat[]) =>
    (list || []).map((s: Stat) => (/member/i.test(s.label || "") && s.value < MEMBERS ? { ...s, value: MEMBERS, suffix: "+" } : s))
