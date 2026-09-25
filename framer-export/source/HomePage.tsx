import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Page, img, pick, at, BP } from "./SiteKit.tsx"
import type { Img } from "./SiteKit.tsx"
import { HP } from "./HomeKit.tsx"
import { Hero, HERO_CSS } from "./HomeHero.tsx"
import type { Slide } from "./HomeHero.tsx"
import { About, ABOUT_CSS } from "./HomeStory.tsx"
import { Projects, Competitions, WORLD_CSS } from "./HomeWorld.tsx"
import { WaysIn, LIFE_CSS } from "./HomeLife.tsx"
import { DEFAULT_SPONSORS, TIERS_CSS } from "./SponsorTiers.tsx"
import type { Sponsor } from "./SponsorTiers.tsx"
import { SponsorStage, STAGE_CSS } from "./HomeSponsors.tsx"
import { freshCopy } from "./CopyUpdates.tsx"

/* ================================================================
 Home page – Marinor NTNU
 Order: Hero (big Argus photo) → Who we are → Sponsors →
        Projects → Competitions → Get involved
 Sections live in HomeHero, HomeStory, HomeSponsors, HomeWorld and HomeLife.
 Layout and building blocks: SiteKit.tsx
 ================================================================ */

/* The hero shows the first photo. This one has the boat low in the frame,
   so the text can sit on the open water above it. */
const DEFAULT_SLIDES: Slide[] = [{ image: img(HP.boat, "Argus, the autonomous boat from Marinor NTNU, on the water in Trondheim"), caption: "Argus on Trondheim harbour" }]

const PAGE_CSS = `
.hp-body{margin-top:88px;padding-bottom:150px}
${at(BP.md, `.hp-body{margin-top:72px;padding-bottom:110px}`)}
${at(BP.sm, `.hp-body{margin-top:56px;padding-bottom:88px}`)}
`

const CSS = HERO_CSS + ABOUT_CSS + STAGE_CSS + TIERS_CSS + WORLD_CSS + LIFE_CSS + PAGE_CSS

interface Props {
    accent: string
    slides: Slide[]
    heroEyebrow: string
    heroTitle: string
    heroHighlight: string
    heroText: string
    heroPrimary: string
    heroPrimaryLink: string
    heroSecondary: string
    heroSecondaryLink: string
    heroPlace: string
    heroCoords: string
    aboutEyebrow: string
    aboutTitle: string
    aboutText: string
    aboutHighlight: string
    aboutPhoto1?: Img
    aboutPhoto2?: Img
    aboutBadge: string
    aboutChip: string
    projectsEyebrow: string
    projectsTitle: string
    projectsText: string
    argusText: string
    argusTags: string
    argusPhoto?: Img
    proteusText: string
    compEyebrow: string
    compTitle: string
    compText: string
    njordText: string
    njordPhoto?: Img
    roboText: string
    roboPhoto?: Img
    waysEyebrow: string
    waysTitle: string
    joinTitle: string
    joinText: string
    joinPhoto?: Img
    partnerTitle: string
    partnerText: string
    partnerPhoto?: Img
    sponsorsEyebrow: string
    sponsorsTitle: string
    sponsorsText: string
    sponsors: Sponsor[]
    calloutText: string
    calloutLabel: string
    style?: React.CSSProperties
}

const orDefault = <T,>(list: T[] | undefined, fallback: T[]) => (list && list.length ? list : fallback)

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 * @framerIntrinsicWidth 1200
 */
export default function HomePage(rawProps: Props) {
    const props = freshCopy(rawProps)
    const slides = orDefault(props.slides, DEFAULT_SLIDES).map((s, i) => ({
        caption: s.caption,
        image: pick(s.image, DEFAULT_SLIDES[i % DEFAULT_SLIDES.length].image!.src!, s.caption),
    }))

    return (
        <Page accent={props.accent} css={CSS} className="mr-full" style={props.style}>
            <Hero
                slides={slides}
                eyebrow={props.heroEyebrow}
                title={props.heroTitle}
                highlight={props.heroHighlight}
                text={props.heroText}
                primary={props.heroPrimary}
                primaryLink={props.heroPrimaryLink || "/projects/argus"}
                secondary={props.heroSecondary}
                secondaryLink={props.heroSecondaryLink || "/want-to-spons-us"}
                place={props.heroPlace}
                coords={props.heroCoords}
            />

            <div className="hp-body mr-stack">
                <div className="mr-wrap">
                    <About
                        eyebrow={props.aboutEyebrow}
                        title={props.aboutTitle}
                        text={props.aboutText}
                        highlight={props.aboutHighlight}
                        linkLabel="More about us"
                        link="/about"
                        photoA={pick(props.aboutPhoto1, HP.team, "The team").src!}
                        photoB={pick(props.aboutPhoto2, HP.workshop, "Workshop").src!}
                        badge={props.aboutBadge}
                        chip={props.aboutChip}
                    />
                </div>

                <SponsorStage
                    eyebrow={props.sponsorsEyebrow || "Our sponsors"}
                    title={props.sponsorsTitle || "Thanks to our partners."}
                    text={props.sponsorsText}
                    sponsors={orDefault(props.sponsors, DEFAULT_SPONSORS)}
                    calloutText={props.calloutText}
                    calloutLabel={props.calloutLabel}
                    calloutLink="/want-to-spons-us"
                />

                <div className="mr-wrap">
                    <Projects
                        eyebrow={props.projectsEyebrow}
                        title={props.projectsTitle}
                        text={props.projectsText}
                        argusText={props.argusText}
                        argusTags={props.argusTags}
                        argusImage={pick(props.argusPhoto, HP.boat, "Argus on the water")}
                        proteusText={props.proteusText}
                    />
                </div>

                <div className="mr-wrap">
                    <Competitions
                        eyebrow={props.compEyebrow}
                        title={props.compTitle}
                        text={props.compText}
                        njordText={props.njordText}
                        roboText={props.roboText}
                        njordImage={pick(props.njordPhoto, HP.njord, "The Njord Challenge")}
                        roboImage={pick(props.roboPhoto, HP.robo, "RoboBoat")}
                        roboLogo={HP.roboLogo}
                    />
                </div>

                <div className="mr-wrap">
                    <WaysIn
                        eyebrow={props.waysEyebrow}
                        title={props.waysTitle}
                        cards={[
                            {
                                eyebrow: "For students",
                                title: props.joinTitle,
                                text: props.joinText,
                                label: "Join Marinor",
                                link: "/join",
                                image: pick(props.joinPhoto, HP.team, "The Marinor NTNU team"),
                            },
                            {
                                eyebrow: "For companies",
                                title: props.partnerTitle,
                                text: props.partnerText,
                                label: "Partner with us",
                                link: "/want-to-spons-us",
                                image: pick(props.partnerPhoto, HP.water, "Argus in the water"),
                            },
                        ]}
                    />
                </div>
            </div>
        </Page>
    )
}

HomePage.defaultProps = {
    accent: "rgb(124, 70, 156)",
    slides: DEFAULT_SLIDES,
    heroEyebrow: "Marinor NTNU · Trondheim",
    heroTitle: "Where robotics meets the sea.",
    heroHighlight: "sea",
    heroText:
        "We are a student organisation at NTNU that builds autonomous boats. Our first boat, Argus, sailed in the Njord Challenge in Trondheim in 2026.",
    heroPrimary: "Meet Argus",
    heroPrimaryLink: "/projects/argus",
    heroSecondary: "Become a partner",
    heroSecondaryLink: "/want-to-spons-us",
    heroPlace: "Trondheim harbour",
    heroCoords: "63.44° N · 10.42° E",
    aboutEyebrow: "Who we are",
    aboutTitle: "Autonomous boats, built by students.",
    aboutText:
        "Our members study robotics, automation, marine technology and other subjects at NTNU. We work with the Department of Engineering Cybernetics, and we build, program and test the boats ourselves in Trondheim.",
    aboutHighlight: "robotics automation marine technology ourselves",
    aboutPhoto1: img(HP.team, "The Marinor NTNU team"),
    aboutPhoto2: img(HP.workshop, "Building the hull in the workshop"),
    aboutBadge: "Marinor NTNU • Trondheim • Est. 2025",
    aboutChip: "35+ members and growing",
    projectsEyebrow: "Our projects",
    projectsTitle: "Our boats.",
    projectsText: "Argus is finished and has been tested in the harbour. Proteus is the next boat, and we are designing it now.",
    argusText: "Our first autonomous boat. A catamaran with LiDAR, a stereo depth camera and a Kongsberg Seapath 130.",
    argusTags: "Catamaran · LiDAR · Stereo camera · Seapath 130",
    argusPhoto: img(HP.boat, "Argus on the water"),
    proteusText: "Our next boat. We are working on the design now.",
    compEyebrow: "Competitions",
    compTitle: "Where we compete.",
    compText: "We took Argus to the Njord Challenge in Trondheim in 2026. Next we want to go to RoboBoat in Florida.",
    njordText: "A student competition in Trondheim where autonomous boats solve tasks in the harbour without anyone steering.",
    njordPhoto: img(HP.njord, "The Njord Challenge"),
    roboText: "A large competition for autonomous boats, held every February in Sarasota, Florida.",
    roboPhoto: img(HP.robo, "RoboBoat"),
    waysEyebrow: "Get involved",
    waysTitle: "Join us or support us.",
    joinTitle: "Join the team.",
    joinText: "We need students in software, electronics, mechanics, design and more. You do not need any boat experience.",
    joinPhoto: img(HP.team, "The Marinor NTNU team"),
    partnerTitle: "Become a partner.",
    partnerText: "Support the team and get to know students in robotics, automation and marine technology at NTNU.",
    partnerPhoto: img(HP.water, "Argus in the water"),
    sponsorsEyebrow: "Our sponsors",
    sponsorsTitle: "Thanks to our partners.",
    sponsorsText: "These companies and organisations support Marinor NTNU. Without them we could not build our boats or travel to competitions.",
    sponsors: DEFAULT_SPONSORS,
    calloutText: "Want to see your logo here?",
    calloutLabel: "Become a partner",
}

addPropertyControls(HomePage, {
    accent: { type: ControlType.Color, title: "Accent" },

    slides: {
        type: ControlType.Array,
        title: "Hero Photo",
        maxCount: 1,
        control: {
            type: ControlType.Object,
            controls: {
                image: { type: ControlType.ResponsiveImage, title: "Photo" },
                caption: { type: ControlType.String, title: "Caption" },
            },
        },
        defaultValue: DEFAULT_SLIDES,
    } as any,
    heroEyebrow: { type: ControlType.String, title: "Hero Eyebrow" },
    heroTitle: { type: ControlType.String, title: "Hero Title" },
    heroHighlight: { type: ControlType.String, title: "Hero Coloured Word" },
    heroText: { type: ControlType.String, title: "Hero Text", displayTextArea: true },
    heroPrimary: { type: ControlType.String, title: "Hero Button 1" },
    heroPrimaryLink: { type: ControlType.Link, title: "Hero Link 1" },
    heroSecondary: { type: ControlType.String, title: "Hero Button 2" },
    heroSecondaryLink: { type: ControlType.Link, title: "Hero Link 2" },
    heroPlace: { type: ControlType.String, title: "Hero Place" },
    heroCoords: { type: ControlType.String, title: "Hero Coordinates" },

    aboutEyebrow: { type: ControlType.String, title: "About Eyebrow" },
    aboutTitle: { type: ControlType.String, title: "About Title" },
    aboutText: { type: ControlType.String, title: "About Text", displayTextArea: true },
    aboutHighlight: { type: ControlType.String, title: "About Dark Words", description: "Words from the text shown in full black" },
    aboutPhoto1: { type: ControlType.ResponsiveImage, title: "About Photo 1" },
    aboutPhoto2: { type: ControlType.ResponsiveImage, title: "About Photo 2" },
    aboutBadge: { type: ControlType.String, title: "Photo Tag" },
    aboutChip: { type: ControlType.String, title: "About Chip" },

    sponsorsEyebrow: { type: ControlType.String, title: "Sponsors Eyebrow" },
    sponsorsTitle: { type: ControlType.String, title: "Sponsors Title" },
    sponsorsText: { type: ControlType.String, title: "Sponsors Text", displayTextArea: true },
    sponsors: {
        type: ControlType.Array,
        title: "Sponsors",
        control: {
            type: ControlType.Object,
            controls: {
                name: { type: ControlType.String, title: "Name" },
                tier: { type: ControlType.Enum, title: "Tier", options: ["gold", "silver", "bronze"], optionTitles: ["Gold", "Silver", "Bronze"], displaySegmentedControl: true },
                logo: { type: ControlType.ResponsiveImage, title: "Logo" },
                url: { type: ControlType.Link, title: "Website" },
            },
        },
        defaultValue: DEFAULT_SPONSORS,
    },
    calloutText: { type: ControlType.String, title: "Callout Text" },
    calloutLabel: { type: ControlType.String, title: "Callout Button" },

    projectsEyebrow: { type: ControlType.String, title: "Projects Eyebrow" },
    projectsTitle: { type: ControlType.String, title: "Projects Title" },
    projectsText: { type: ControlType.String, title: "Projects Text", displayTextArea: true },
    argusText: { type: ControlType.String, title: "Argus Text", displayTextArea: true },
    argusTags: { type: ControlType.String, title: "Argus Tags" },
    argusPhoto: { type: ControlType.ResponsiveImage, title: "Argus Photo" },
    proteusText: { type: ControlType.String, title: "Proteus Text", displayTextArea: true },

    compEyebrow: { type: ControlType.String, title: "Comp. Eyebrow" },
    compTitle: { type: ControlType.String, title: "Comp. Title" },
    compText: { type: ControlType.String, title: "Comp. Text", displayTextArea: true },
    njordText: { type: ControlType.String, title: "Njord Text", displayTextArea: true },
    njordPhoto: { type: ControlType.ResponsiveImage, title: "Njord Photo" },
    roboText: { type: ControlType.String, title: "RoboBoat Text", displayTextArea: true },
    roboPhoto: { type: ControlType.ResponsiveImage, title: "RoboBoat Photo" },

    waysEyebrow: { type: ControlType.String, title: "Join Eyebrow" },
    waysTitle: { type: ControlType.String, title: "Join Title" },
    joinTitle: { type: ControlType.String, title: "Students Title" },
    joinText: { type: ControlType.String, title: "Students Text", displayTextArea: true },
    joinPhoto: { type: ControlType.ResponsiveImage, title: "Students Photo" },
    partnerTitle: { type: ControlType.String, title: "Companies Title" },
    partnerText: { type: ControlType.String, title: "Companies Text", displayTextArea: true },
    partnerPhoto: { type: ControlType.ResponsiveImage, title: "Companies Photo" },
})
