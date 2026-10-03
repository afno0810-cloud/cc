import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { GALLERY_PHOTOS } from "./ArgusPhotos.tsx"
import { Page, PHOTO, DEFAULT_STATS, DEFAULT_TECH, DEFAULT_TIMELINE, DEFAULT_GOALS, GALLERY_CAPTIONS, hasSrc, useStill, currentTech } from "./ArgusKit.tsx"
import type { Img, Stat, Tech as TechItem, Milestone, GalleryItem, Goal } from "./ArgusKit.tsx"
import { Hero, Stats, Story, ARGUS_TOP_CSS } from "./ArgusTop.tsx"
import { Tech, ARGUS_TECH_CSS } from "./ArgusTech.tsx"
import { Navigation, ARGUS_NAV_CSS } from "./ArgusNav.tsx"
import { Journey, ARGUS_JOURNEY_CSS } from "./ArgusJourney.tsx"
import { Gallery, Lightbox, ARGUS_GALLERY_CSS } from "./ArgusGallery.tsx"
import { Goals, CTA, ARGUS_END_CSS } from "./ArgusEnd.tsx"
import { freshCopy } from "./CopyUpdates.tsx"

/* ================================================================
 Project Argus – full page showcase for Marinor NTNU
 Sections live in ArgusTop, ArgusTech, ArgusNav, ArgusJourney, ArgusGallery and ArgusEnd.
 Gallery photos: ArgusPhotos.tsx · Gallery captions: ArgusKit.tsx
 ================================================================ */

const CSS = ARGUS_TOP_CSS + ARGUS_TECH_CSS + ARGUS_NAV_CSS + ARGUS_JOURNEY_CSS + ARGUS_GALLERY_CSS + ARGUS_END_CSS

interface Props {
    accent: string
    guiLink: string
    joinLink: string
    heroImage?: Img
    heroEyebrow: string
    heroBadge: string
    heroTitle: string
    heroSubtitle: string
    heroPrimary: string
    heroSecondary: string
    stats: Stat[]
    storyEyebrow: string
    storyTitle: string
    storyText: string
    storyBadge: string
    storyImageA?: Img
    storyImageB?: Img
    techEyebrow: string
    techTitle: string
    techText: string
    techCaption: string
    techImage?: Img
    tech: TechItem[]
    navEyebrow: string
    navTitle: string
    navText: string
    linkTitle: string
    linkText: string
    journeyEyebrow: string
    journeyTitle: string
    journeyText: string
    timeline: Milestone[]
    galleryEyebrow: string
    galleryTitle: string
    goalsEyebrow: string
    goalsTitle: string
    goals: Goal[]
    ctaTitle: string
    ctaText: string
    ctaPrimary: string
    ctaSecondary: string
    style?: React.CSSProperties
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 * @framerIntrinsicWidth 1240
 */
export default function ArgusShowcase(rawProps: Props) {
    const props = freshCopy(rawProps)
    const still = useStill()

    /* One gallery photo per line in ArgusPhotos.tsx – empty lines are skipped */
    const galleryList: GalleryItem[] = GALLERY_PHOTOS.map((url: string, i: number) => ({
        caption: GALLERY_CAPTIONS[i] || "",
        image: url ? { src: url, alt: GALLERY_CAPTIONS[i] || "Argus" } : undefined,
    })).filter((g: GalleryItem) => hasSrc(g.image))

    const [lightbox, setLightbox] = React.useState<number | null>(null)
    const close = React.useCallback(() => setLightbox(null), [])
    const nav = React.useCallback(
        (dir: number) => {
            setLightbox((cur) => {
                if (cur === null || galleryList.length === 0) return cur
                return (cur + dir + galleryList.length) % galleryList.length
            })
        },
        [galleryList.length]
    )

    return (
        <Page accent={props.accent} css={CSS} style={props.style}>
            <div className="mr-stack">
                <div className="mr-stack" style={{ gap: 48 }}>
                    <Hero
                        image={hasSrc(props.heroImage) ? props.heroImage : { src: PHOTO.hero, alt: "Argus on the water in Trondheim harbour" }}
                        eyebrow={props.heroEyebrow}
                        badge={props.heroBadge}
                        title={props.heroTitle}
                        subtitle={props.heroSubtitle}
                        primaryLabel={props.heroPrimary}
                        primaryLink={props.guiLink}
                        secondaryLabel={props.heroSecondary}
                    />
                    <Stats stats={props.stats} />
                </div>
                <Story
                    eyebrow={props.storyEyebrow}
                    title={props.storyTitle}
                    text={props.storyText}
                    imageA={hasSrc(props.storyImageA) ? props.storyImageA : { src: PHOTO.storyA, alt: "Argus in the water" }}
                    imageB={hasSrc(props.storyImageB) ? props.storyImageB : { src: PHOTO.storyB, alt: "Working on the boat on the dock" }}
                    badge={props.storyBadge}
                />
                <Tech
                    eyebrow={props.techEyebrow}
                    title={props.techTitle}
                    text={props.techText}
                    image={hasSrc(props.techImage) ? props.techImage : { src: PHOTO.tech, alt: "Sensors mounted on the electronics case" }}
                    caption={props.techCaption}
                    items={currentTech(props.tech)}
                />
                <Navigation
                    eyebrow={props.navEyebrow}
                    title={props.navTitle}
                    text={props.navText}
                    link={{ title: props.linkTitle || "5G to shore", text: props.linkText }}
                />
                <Journey eyebrow={props.journeyEyebrow} title={props.journeyTitle} text={props.journeyText} items={props.timeline} />
                {galleryList.length > 0 ? <Gallery eyebrow={props.galleryEyebrow} title={props.galleryTitle} items={galleryList} onOpen={(i: number) => setLightbox(i)} /> : null}
                <Goals eyebrow={props.goalsEyebrow} title={props.goalsTitle} items={props.goals} />
                <CTA
                    title={props.ctaTitle}
                    text={props.ctaText}
                    primaryLabel={props.ctaPrimary}
                    primaryLink={props.guiLink}
                    secondaryLabel={props.ctaSecondary}
                    secondaryLink={props.joinLink || "/join"}
                />
            </div>
            {!still ? <Lightbox items={galleryList} index={lightbox} onClose={close} onNav={nav} /> : null}
        </Page>
    )
}

ArgusShowcase.defaultProps = {
    accent: "rgb(124, 70, 156)",
    guiLink: "https://gui.marinorntnu.no",
    joinLink: "/join",
    heroImage: { src: PHOTO.hero, alt: "Argus on the water in Trondheim harbour" },
    heroEyebrow: "Marinor NTNU · Project Argus",
    heroBadge: "Autonomous Surface Vessel",
    heroTitle: "Meet Argus",
    heroSubtitle: "Our first autonomous boat. A catamaran built by students in Trondheim and tested in the harbour.",
    heroPrimary: "Open the interface",
    heroSecondary: "See the build",
    stats: DEFAULT_STATS,
    storyEyebrow: "The project",
    storyTitle: "About Argus",
    storyText:
        "Argus is our first autonomous surface vessel. It finds its way on the water with no one at the wheel.\nThe hulls, electronics, sensors, control system and software all have to work together on one boat. Our members made every part of it.",
    storyBadge: "Tested in Trondheim harbour",
    storyImageA: { src: PHOTO.storyA, alt: "Argus in the water" },
    storyImageB: { src: PHOTO.storyB, alt: "Working on the boat on the dock" },
    techEyebrow: "On board",
    techTitle: "What is on board",
    techText: "The sensors and hardware Argus uses to see, find its position and steer.",
    techCaption: "Sensors mounted on top of the electronics case",
    techImage: { src: PHOTO.tech, alt: "Sensors mounted on the electronics case" },
    tech: DEFAULT_TECH,
    navEyebrow: "Autonomy",
    navTitle: "How Argus finds its way",
    navText: "From what the sensors see to the signal that turns the propellers, in the order it happens on board.",
    linkTitle: "5G to shore",
    linkText: "All data from Argus is sent to land over 5G, so we can follow its internal state and get important information while it sails.",
    journeyEyebrow: "The build",
    journeyTitle: "How we built it",
    journeyText: "The build, from the first hull in the workshop to the first test in the harbour.",
    timeline: DEFAULT_TIMELINE,
    galleryEyebrow: "Behind the scenes",
    galleryTitle: "Photos from the dock",
    goalsEyebrow: "Our goals",
    goalsTitle: "Our goals",
    goals: DEFAULT_GOALS,
    ctaTitle: "Open the Argus interface",
    ctaText: "Our GUI team built a web interface for following Argus while it sails. You can open it here.",
    ctaPrimary: "Open the interface",
    ctaSecondary: "Join Marinor",
}

addPropertyControls(ArgusShowcase, {
    accent: { type: ControlType.Color, title: "Accent" },
    guiLink: { type: ControlType.String, title: "GUI Link" },
    joinLink: { type: ControlType.String, title: "Join Link" },

    heroImage: { type: ControlType.ResponsiveImage, title: "Hero Photo" },
    heroEyebrow: { type: ControlType.String, title: "Hero Eyebrow" },
    heroBadge: { type: ControlType.String, title: "Hero Badge" },
    heroTitle: { type: ControlType.String, title: "Hero Title" },
    heroSubtitle: { type: ControlType.String, title: "Hero Text", displayTextArea: true },
    heroPrimary: { type: ControlType.String, title: "Hero Button 1" },
    heroSecondary: { type: ControlType.String, title: "Hero Button 2" },

    stats: {
        type: ControlType.Array,
        title: "Stats",
        control: {
            type: ControlType.Object,
            controls: {
                value: { type: ControlType.Number, title: "Number", min: 0, max: 100000, step: 1 },
                suffix: { type: ControlType.String, title: "Suffix" },
                label: { type: ControlType.String, title: "Label", displayTextArea: true },
            },
        },
        defaultValue: DEFAULT_STATS,
    },

    storyImageA: { type: ControlType.ResponsiveImage, title: "Story Photo 1" },
    storyImageB: { type: ControlType.ResponsiveImage, title: "Story Photo 2" },
    storyEyebrow: { type: ControlType.String, title: "Story Eyebrow" },
    storyTitle: { type: ControlType.String, title: "Story Title" },
    storyText: { type: ControlType.String, title: "Story Text", displayTextArea: true, description: "New line = new paragraph" },
    storyBadge: { type: ControlType.String, title: "Story Badge" },

    techImage: { type: ControlType.ResponsiveImage, title: "Tech Photo" },
    techEyebrow: { type: ControlType.String, title: "Tech Eyebrow" },
    techTitle: { type: ControlType.String, title: "Tech Title" },
    techText: { type: ControlType.String, title: "Tech Text", displayTextArea: true },
    techCaption: { type: ControlType.String, title: "Tech Caption" },
    tech: {
        type: ControlType.Array,
        title: "Tech Items",
        control: {
            type: ControlType.Object,
            controls: {
                title: { type: ControlType.String, title: "Title" },
                text: { type: ControlType.String, title: "Text", displayTextArea: true },
            },
        },
        defaultValue: DEFAULT_TECH,
    },

    navEyebrow: { type: ControlType.String, title: "Autonomy Eyebrow" },
    navTitle: { type: ControlType.String, title: "Autonomy Title" },
    navText: { type: ControlType.String, title: "Autonomy Text", displayTextArea: true, description: "The steps are in ArgusKit.tsx (DEFAULT_NAV)" },
    linkTitle: { type: ControlType.String, title: "5G Title" },
    linkText: { type: ControlType.String, title: "5G Text", displayTextArea: true },

    journeyEyebrow: { type: ControlType.String, title: "Build Eyebrow" },
    journeyTitle: { type: ControlType.String, title: "Build Title" },
    journeyText: { type: ControlType.String, title: "Build Text", displayTextArea: true },
    timeline: {
        type: ControlType.Array,
        title: "Timeline",
        control: {
            type: ControlType.Object,
            controls: {
                image: { type: ControlType.ResponsiveImage, title: "Photo" },
                date: { type: ControlType.String, title: "Date" },
                title: { type: ControlType.String, title: "Title" },
                text: { type: ControlType.String, title: "Text", displayTextArea: true },
            },
        },
        defaultValue: DEFAULT_TIMELINE,
    },

    galleryEyebrow: { type: ControlType.String, title: "Gallery Eyebrow" },
    galleryTitle: { type: ControlType.String, title: "Gallery Title", description: "Photos: ArgusPhotos.tsx · Captions: ArgusKit.tsx" },

    goalsEyebrow: { type: ControlType.String, title: "Goals Eyebrow" },
    goalsTitle: { type: ControlType.String, title: "Goals Title" },
    goals: {
        type: ControlType.Array,
        title: "Goals",
        control: {
            type: ControlType.Object,
            controls: {
                title: { type: ControlType.String, title: "Title" },
                text: { type: ControlType.String, title: "Text", displayTextArea: true },
            },
        },
        defaultValue: DEFAULT_GOALS,
    },

    ctaTitle: { type: ControlType.String, title: "CTA Title" },
    ctaText: { type: ControlType.String, title: "CTA Text", displayTextArea: true },
    ctaPrimary: { type: ControlType.String, title: "CTA Button 1" },
    ctaSecondary: { type: ControlType.String, title: "CTA Button 2" },
})
