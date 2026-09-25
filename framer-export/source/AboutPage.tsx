import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Page, PH, STAT_DEFAULTS, fixMembers, img, pick, at, BP } from "./AboutKit.tsx"
import type { Img, Stat } from "./AboutKit.tsx"
import { Hero, Statement, WhoWeAre, Stats, ABOUT_TOP_CSS } from "./AboutTop.tsx"
import { Journey, ABOUT_JOURNEY_CSS } from "./AboutJourney.tsx"
import type { Chapter } from "./AboutJourney.tsx"
import { Vision, Pillars, Bento, CTA, ABOUT_BOTTOM_CSS } from "./AboutBottom.tsx"
import { freshCopy } from "./CopyUpdates.tsx"

/* ================================================================
 About – Marinor NTNU
 Sections: AboutTop, AboutJourney, AboutBottom · shared parts: AboutKit / SiteKit
 Journey: 2026 = Njord image, 2027 = RoboBoat logo, 2028 = drawing of Argus next to the big boat
 ================================================================ */

const PAGE_CSS = `
.ab-group{display:flex;flex-direction:column;gap:72px}
${at(BP.sm, `.ab-group{gap:52px}`)}
`

const CSS = ABOUT_TOP_CSS + ABOUT_JOURNEY_CSS + ABOUT_BOTTOM_CSS + PAGE_CSS

interface Props {
    accent: string
    joinLink: string
    heroEyebrow: string
    heroTitle: string
    heroHighlight: number
    heroText: string
    heroBadge: string
    heroPhoto1?: Img
    heroPhoto2?: Img
    heroPhoto3?: Img
    statement: string
    whoEyebrow: string
    whoTitle: string
    whoText: string
    whoPhoto1?: Img
    whoPhoto2?: Img
    stats: Stat[]
    journeyEyebrow: string
    journeyTitle: string
    journeyText: string
    y2025Title: string
    y2025Text: string
    y2025Photo?: Img
    y2026Title: string
    y2026Text: string
    y2026Photo?: Img
    y2027Title: string
    y2027Text: string
    y2027Logo?: Img
    y2028Title: string
    y2028Text: string
    visionEyebrow: string
    visionTitle: string
    visionText: string
    visionPhoto?: Img
    doEyebrow: string
    doTitle: string
    do1Title: string
    do1Text: string
    do1Photo?: Img
    do2Title: string
    do2Text: string
    do2Photo?: Img
    do3Title: string
    do3Text: string
    do3Photo?: Img
    galleryEyebrow: string
    galleryTitle: string
    gallery1?: Img
    gallery2?: Img
    gallery3?: Img
    gallery4?: Img
    gallery5?: Img
    gallery6?: Img
    ctaTitle: string
    ctaText: string
    style?: React.CSSProperties
}

const Y2028_TITLE = "A bigger boat"
const Y2028_TEXT =
    "In 2028 we plan to start building a much bigger boat. The long-term goal is a boat that can sail the Norwegian coast on its own with a crew on board."

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 * @framerIntrinsicWidth 1240
 */
export default function AboutPage(rawProps: Props) {
    const props = freshCopy(rawProps)
    const joinLink = props.joinLink || "/join"

    const chapters: Chapter[] = [
        {
            year: "2025",
            status: "done",
            statusLabel: "Founded",
            title: props.y2025Title,
            text: props.y2025Text,
            visual: "photo",
            image: pick(props.y2025Photo, PH.workshop, "Building the first hull in the workshop"),
            links: [{ label: "See how we built Argus", href: "/projects/argus" }],
        },
        {
            year: "2026",
            status: "done",
            statusLabel: "Njord Challenge",
            title: props.y2026Title,
            text: props.y2026Text,
            visual: "photo",
            image: pick(props.y2026Photo, PH.njord, "The Njord Challenge"),
            links: [{ label: "About Njord", href: "/competitions/njord-challange" }],
        },
        {
            year: "2027",
            status: "next",
            statusLabel: "Next goal",
            title: props.y2027Title,
            text: props.y2027Text,
            visual: "logo",
            image: pick(props.y2027Logo, PH.roboLogo, "RoboBoat logo"),
            links: [
                { label: "Njord", href: "/competitions/njord-challange" },
                { label: "RoboBoat", href: "/competitions/roboat" },
            ],
        },
        {
            year: "2028",
            status: "future",
            statusLabel: "Planned",
            title: props.y2028Title || Y2028_TITLE,
            text: props.y2028Text || Y2028_TEXT,
            visual: "build",
            links: [{ label: "About the long-term goal", href: "#about-vision" }],
        },
    ]

    const pillars = [
        { title: props.do1Title, text: props.do1Text, image: pick(props.do1Photo, PH.sanding, "Hands-on work") },
        { title: props.do2Title, text: props.do2Text, image: pick(props.do2Photo, PH.sensors, "Sensors on Argus") },
        { title: props.do3Title, text: props.do3Text, image: pick(props.do3Photo, PH.d6189, "The team at work") },
    ]

    const gallery = [
        { image: pick(props.gallery1, PH.boat, "Argus on the water"), caption: "Out on the water" },
        { image: pick(props.gallery2, PH.dock, "Work on the dock"), caption: "Work on the dock" },
        { image: pick(props.gallery3, PH.d6180, "Getting ready"), caption: "Getting ready" },
        { image: pick(props.gallery4, PH.sensors, "Sensors"), caption: "Eyes of the boat" },
        { image: pick(props.gallery5, PH.workshop, "In the workshop"), caption: "Long days in the workshop" },
        { image: pick(props.gallery6, PH.water, "Test in the harbour"), caption: "Testing in the harbour" },
    ]

    return (
        <Page accent={props.accent} css={CSS} style={props.style}>
            <div className="mr-stack">
                <Hero
                    eyebrow={props.heroEyebrow}
                    title={props.heroTitle}
                    highlight={props.heroHighlight ?? 2}
                    text={props.heroText}
                    badge={props.heroBadge}
                    imageA={pick(props.heroPhoto1, PH.boat, "Argus on the water")}
                    imageB={pick(props.heroPhoto2, PH.dock, "Work on the dock")}
                    imageC={pick(props.heroPhoto3, PH.sensors, "Sensors on Argus")}
                    joinLink={joinLink}
                />
                <Statement text={props.statement} />
                <div className="ab-group">
                    <WhoWeAre
                        eyebrow={props.whoEyebrow}
                        title={props.whoTitle}
                        text={(props.whoText || "").replace(/more than 20 members/gi, "more than 35 members")}
                        imageA={pick(props.whoPhoto1, PH.d6180, "Marinor at work")}
                        imageB={pick(props.whoPhoto2, PH.d6189, "Marinor members")}
                    />
                    <Stats stats={fixMembers(props.stats)} />
                </div>
                <Journey eyebrow={props.journeyEyebrow} title={props.journeyTitle} text={props.journeyText} chapters={chapters} />
                <Vision eyebrow={props.visionEyebrow} title={props.visionTitle} text={props.visionText} image={pick(props.visionPhoto, PH.water, "Argus at sea")} />
                <Pillars eyebrow={props.doEyebrow} title={props.doTitle} items={pillars} />
                <Bento eyebrow={props.galleryEyebrow} title={props.galleryTitle} photos={gallery} />
                <CTA title={props.ctaTitle} text={props.ctaText} joinLink={joinLink} argusLink="/projects/argus" />
            </div>
        </Page>
    )
}

AboutPage.defaultProps = {
    accent: "rgb(124, 70, 156)",
    joinLink: "/join",
    heroEyebrow: "About Marinor NTNU",
    heroTitle: "Students who build autonomous boats",
    heroHighlight: 2,
    heroText: "Marinor NTNU is a student organisation at NTNU in Trondheim. We build autonomous boats and enter them in student competitions.",
    heroBadge: "Founded 2025 · Trondheim",
    heroPhoto1: img(PH.boat, "Argus on the water"),
    heroPhoto2: img(PH.dock, "Work on the dock"),
    heroPhoto3: img(PH.sensors, "Sensors on Argus"),
    statement: "We build our boats in the workshop and test them in the harbour in Trondheim.",
    whoEyebrow: "Who we are",
    whoTitle: "A student organisation at NTNU.",
    whoText:
        "Marinor NTNU is a technical student organisation at NTNU. We build autonomous boats that find their way on the water without anyone steering.\nOur members study robotics, automation, marine technology and other subjects. We work with the Department of Engineering Cybernetics.\nMarinor was founded in 2025 and has more than 35 members.",
    whoPhoto1: img(PH.d6180, "Marinor at work"),
    whoPhoto2: img(PH.d6189, "Marinor members"),
    stats: STAT_DEFAULTS,
    journeyEyebrow: "Timeline",
    journeyTitle: "What we have done so far.",
    journeyText: "We started in 2025. Here is what we have done and what we plan next.",
    y2025Title: "Marinor is founded",
    y2025Text: "Four students start Marinor NTNU in Trondheim. The first members build the hulls for Argus in the workshop.",
    y2025Photo: img(PH.workshop, "Building the first hull"),
    y2026Title: "First Njord Challenge",
    y2026Text:
        "We sail Argus in Njord: The Autonomous Ship Challenge in Trondheim, against university teams from several countries.",
    y2026Photo: img(PH.njord, "The Njord Challenge"),
    y2027Title: "Win Njord, then RoboBoat",
    y2027Text: "In 2027 we want to win the Njord Challenge. After that we want to enter RoboBoat in Florida.",
    y2027Logo: img(PH.roboLogo, "RoboBoat logo"),
    y2028Title: Y2028_TITLE,
    y2028Text: Y2028_TEXT,
    visionEyebrow: "The long run",
    visionTitle: "Along the Norwegian coast.",
    visionText: "In the long run we want to scale up our competition boat. The goal is a boat that sails the whole Norwegian coast on its own, with people on board.",
    visionPhoto: img(PH.water, "Argus at sea"),
    doEyebrow: "What we do",
    doTitle: "What we do.",
    do1Title: "We build",
    do1Text: "Members make the hulls, electronics and software themselves and test them in the harbour.",
    do1Photo: img(PH.sanding, "Hands-on work"),
    do2Title: "We work with NTNU",
    do2Text: "We work with the Department of Engineering Cybernetics and with companies that support us.",
    do2Photo: img(PH.sensors, "Sensors on Argus"),
    do3Title: "We meet people",
    do3Text: "Members get to know other students, researchers and companies that work with autonomous boats.",
    do3Photo: img(PH.d6189, "The team at work"),
    galleryEyebrow: "Life at Marinor",
    galleryTitle: "From the workshop and the harbour.",
    gallery1: img(PH.boat, "Argus on the water"),
    gallery2: img(PH.dock, "Work on the dock"),
    gallery3: img(PH.d6180, "Getting ready"),
    gallery4: img(PH.sensors, "Sensors"),
    gallery5: img(PH.workshop, "In the workshop"),
    gallery6: img(PH.water, "Test in the harbour"),
    ctaTitle: "Want to join?",
    ctaText: "We need students in software, electronics, mechanics, design and more. You do not need any boat experience.",
}

addPropertyControls(AboutPage, {
    accent: { type: ControlType.Color, title: "Accent" },
    joinLink: { type: ControlType.String, title: "Join Link" },

    heroEyebrow: { type: ControlType.String, title: "Hero Eyebrow" },
    heroTitle: { type: ControlType.String, title: "Hero Title" },
    heroHighlight: { type: ControlType.Number, title: "Coloured Words", min: 0, max: 6, step: 1 },
    heroText: { type: ControlType.String, title: "Hero Text", displayTextArea: true },
    heroBadge: { type: ControlType.String, title: "Hero Badge" },
    heroPhoto1: { type: ControlType.ResponsiveImage, title: "Hero Photo 1" },
    heroPhoto2: { type: ControlType.ResponsiveImage, title: "Hero Photo 2" },
    heroPhoto3: { type: ControlType.ResponsiveImage, title: "Hero Photo 3" },

    statement: { type: ControlType.String, title: "Big Sentence", displayTextArea: true, description: "The first sentence is grey, the rest black" },

    whoEyebrow: { type: ControlType.String, title: "Who Eyebrow" },
    whoTitle: { type: ControlType.String, title: "Who Title" },
    whoText: { type: ControlType.String, title: "Who Text", displayTextArea: true, description: "New line = new paragraph" },
    whoPhoto1: { type: ControlType.ResponsiveImage, title: "Who Photo 1" },
    whoPhoto2: { type: ControlType.ResponsiveImage, title: "Who Photo 2" },
    stats: {
        type: ControlType.Array,
        title: "Stats",
        control: {
            type: ControlType.Object,
            controls: {
                value: { type: ControlType.Number, title: "Number", min: 0, max: 10000, step: 1 },
                from: { type: ControlType.Number, title: "Count From", min: 0, max: 10000, step: 1 },
                suffix: { type: ControlType.String, title: "Suffix" },
                label: { type: ControlType.String, title: "Label", displayTextArea: true },
            },
        },
        defaultValue: STAT_DEFAULTS,
    },

    journeyEyebrow: { type: ControlType.String, title: "Journey Eyebrow" },
    journeyTitle: { type: ControlType.String, title: "Journey Title" },
    journeyText: { type: ControlType.String, title: "Journey Text", displayTextArea: true },
    y2025Title: { type: ControlType.String, title: "2025 Title" },
    y2025Text: { type: ControlType.String, title: "2025 Text", displayTextArea: true },
    y2025Photo: { type: ControlType.ResponsiveImage, title: "2025 Photo" },
    y2026Title: { type: ControlType.String, title: "2026 Title" },
    y2026Text: { type: ControlType.String, title: "2026 Text", displayTextArea: true },
    y2026Photo: { type: ControlType.ResponsiveImage, title: "2026 Photo" },
    y2027Title: { type: ControlType.String, title: "2027 Title" },
    y2027Text: { type: ControlType.String, title: "2027 Text", displayTextArea: true },
    y2027Logo: { type: ControlType.ResponsiveImage, title: "2027 Logo" },
    y2028Title: { type: ControlType.String, title: "2028 Title" },
    y2028Text: { type: ControlType.String, title: "2028 Text", displayTextArea: true, description: "The 2028 picture is a drawing of Argus next to the big boat" },

    visionEyebrow: { type: ControlType.String, title: "Vision Eyebrow" },
    visionTitle: { type: ControlType.String, title: "Vision Title" },
    visionText: { type: ControlType.String, title: "Vision Text", displayTextArea: true },
    visionPhoto: { type: ControlType.ResponsiveImage, title: "Vision Photo" },

    doEyebrow: { type: ControlType.String, title: "What We Do Eyebrow" },
    doTitle: { type: ControlType.String, title: "What We Do Title" },
    do1Title: { type: ControlType.String, title: "Card 1 Title" },
    do1Text: { type: ControlType.String, title: "Card 1 Text", displayTextArea: true },
    do1Photo: { type: ControlType.ResponsiveImage, title: "Card 1 Photo" },
    do2Title: { type: ControlType.String, title: "Card 2 Title" },
    do2Text: { type: ControlType.String, title: "Card 2 Text", displayTextArea: true },
    do2Photo: { type: ControlType.ResponsiveImage, title: "Card 2 Photo" },
    do3Title: { type: ControlType.String, title: "Card 3 Title" },
    do3Text: { type: ControlType.String, title: "Card 3 Text", displayTextArea: true },
    do3Photo: { type: ControlType.ResponsiveImage, title: "Card 3 Photo" },

    galleryEyebrow: { type: ControlType.String, title: "Gallery Eyebrow" },
    galleryTitle: { type: ControlType.String, title: "Gallery Title" },
    gallery1: { type: ControlType.ResponsiveImage, title: "Gallery Photo 1" },
    gallery2: { type: ControlType.ResponsiveImage, title: "Gallery Photo 2" },
    gallery3: { type: ControlType.ResponsiveImage, title: "Gallery Photo 3" },
    gallery4: { type: ControlType.ResponsiveImage, title: "Gallery Photo 4" },
    gallery5: { type: ControlType.ResponsiveImage, title: "Gallery Photo 5" },
    gallery6: { type: ControlType.ResponsiveImage, title: "Gallery Photo 6" },

    ctaTitle: { type: ControlType.String, title: "CTA Title" },
    ctaText: { type: ControlType.String, title: "CTA Text", displayTextArea: true },
})
