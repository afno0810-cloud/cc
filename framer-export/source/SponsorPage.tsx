import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Page, SectionHead, Reveal, Photo, Button, CopyButton, CtaPanel, useUI, img, pick, cx, at, BP, DISPLAY, BODY, MONO, DARK, GRAY, LAVENDER } from "./SiteKit.tsx"
import type { Img } from "./SiteKit.tsx"
import { PH, DEFAULT_BENEFITS, DEFAULT_STEPS, DEFAULT_STATS, fixMembers } from "./SponsorKit.tsx"
import type { Benefit, Step, Shot, Stat } from "./SponsorKit.tsx"
import { Hero, SPONSOR_HERO_CSS } from "./SponsorHero.tsx"
import { Statement, Stats, Benefits, SPONSOR_SECTIONS_CSS } from "./SponsorSections.tsx"
import { SponsorTiers, DEFAULT_SPONSORS, TIERS_CSS } from "./SponsorTiers.tsx"
import type { Sponsor } from "./SponsorTiers.tsx"
import { freshCopy } from "./CopyUpdates.tsx"

/* ================================================================
 Want to sponsor us – Marinor NTNU
 Sections: SponsorHero, SponsorSections, SponsorTiers · building blocks: SiteKit
 ================================================================ */

const PAGE_CSS = `
.sg-row{display:flex;gap:16px;overflow-x:auto;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;padding:4px 2px 14px}
.sg-row::-webkit-scrollbar{display:none}
.sg-card{position:relative;flex:0 0 auto;width:560px;height:420px;border-radius:20px;overflow:hidden;scroll-snap-align:start;background:rgb(40,42,50)}
.sg-card.is-tall{width:320px}
.sg-card .mr-photo{position:absolute;inset:0}
.sg-card figcaption{position:absolute;left:0;right:0;bottom:0;display:flex;align-items:center;gap:10px;padding:40px 18px 16px;background:linear-gradient(180deg,rgba(12,12,16,0) 0%,rgba(12,12,16,.75) 100%);color:#fff;font-family:${BODY};font-weight:600;font-size:15px}
.sg-card figcaption span{font-family:${MONO};font-size:11.5px;font-weight:500;color:${LAVENDER}}
.sg-sticky{position:sticky;top:0;height:100vh;display:flex;flex-direction:column;justify-content:center;gap:40px;overflow:hidden}
.sg-track{display:flex;gap:18px;width:max-content;padding-right:40px}
.sg-bar{width:240px;height:3px;border-radius:3px;background:rgba(124,70,156,.16);overflow:hidden}
.sg-bar div{height:100%;transform-origin:left;background:var(--mr-accent)}
.sp-steps{position:relative;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:28px}
.sp-steps::before{content:"";position:absolute;left:16.6%;right:16.6%;top:34px;border-top:1px dashed rgba(124,70,156,.35)}
.sp-step{position:relative;display:flex;flex-direction:column;align-items:center;text-align:center;gap:14px}
.sp-num{display:flex;flex:0 0 auto;align-items:center;justify-content:center;width:68px;height:68px;border-radius:18px;background:#fff;border:1px solid rgba(124,70,156,.2);font-family:${MONO};font-weight:500;font-size:18px;color:var(--mr-accent)}
.sp-step:last-child .sp-num{background:var(--mr-accent);border-color:var(--mr-accent);color:#fff}
.sp-step .mr-text{max-width:300px}
.sp-mail{height:56px;padding:0 26px;font-size:17px}
.sp-role{font-family:${MONO};font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:${LAVENDER};margin-top:6px}
${at(BP.md, `.sg-card{width:440px;height:340px}.sg-card.is-tall{width:250px}.sp-steps{grid-template-columns:minmax(0,1fr);gap:22px}.sp-steps::before{left:33px;right:auto;top:20px;bottom:20px;border-top:0;border-left:1px dashed rgba(124,70,156,.35)}.sp-step{flex-direction:row;align-items:flex-start;text-align:left;gap:18px}.sp-step .mr-text{max-width:none}`)}
${at(BP.sm, `.sg-row{gap:12px;margin:0 -14px;padding:4px 14px 14px;scroll-padding:0 14px}.sg-card{width:300px;height:240px;border-radius:16px}.sg-card.is-tall{width:180px}.sp-num{width:56px;height:56px;border-radius:14px;font-size:16px}.sp-steps::before{left:27px}.sp-mail{height:52px;font-size:15px;padding:0 18px}`)}
`

const CSS = SPONSOR_HERO_CSS + SPONSOR_SECTIONS_CSS + TIERS_CSS + PAGE_CSS

/* ================================================================
 GALLERY – a swipe row. On a desktop with a mouse the row is pinned
 and slides sideways while you scroll down.
 ================================================================ */
function GalleryCard({ shot, index }: { shot: Shot; index: number }) {
    return (
        <figure className={cx("sg-card", "mr-zoom", index % 3 === 1 && "is-tall")} style={{ margin: 0 }}>
            <Photo image={shot.image} alt={shot.caption} sizes="(max-width: 600px) 300px, 560px" />
            <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {shot.caption}
            </figcaption>
        </figure>
    )
}

function PinnedGallery({ head, shots }: { head: React.ReactNode; shots: Shot[] }) {
    const outer = React.useRef<HTMLDivElement>(null)
    const track = React.useRef<HTMLDivElement>(null)
    const [dist, setDist] = React.useState(0)
    React.useLayoutEffect(() => {
        const t = track.current
        const o = outer.current
        if (!t || !o) return
        const measure = () => setDist(Math.max(0, t.scrollWidth - o.getBoundingClientRect().width))
        measure()
        if (typeof ResizeObserver === "undefined") return
        const ro = new ResizeObserver(measure)
        ro.observe(t)
        ro.observe(o)
        return () => ro.disconnect()
    }, [shots.length])
    const { scrollYProgress } = useScroll({ target: outer, offset: ["start start", "end end"] })
    const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })
    const x = useTransform(smooth, (v: number) => -v * dist)
    return (
        <section ref={outer} style={{ position: "relative", height: `calc(100vh + ${dist}px)` }}>
            <div className="sg-sticky">
                {head}
                <motion.div ref={track} className="sg-track" style={{ x }}>
                    {shots.map((s, i) => (
                        <GalleryCard key={i} shot={s} index={i} />
                    ))}
                </motion.div>
                <div className="sg-bar">
                    <motion.div style={{ scaleX: smooth }} />
                </div>
            </div>
        </section>
    )
}

function Gallery(props: { eyebrow: string; title: string; text: string; shots: Shot[] }) {
    const { still, fine, w } = useUI()
    const head = <SectionHead eyebrow={props.eyebrow} title={props.title} text={props.text} />
    if (!still && fine && w >= 1000) return <PinnedGallery head={head} shots={props.shots} />
    return (
        <section className="mr-sec">
            {head}
            <Reveal>
                <div className="sg-row">
                    {props.shots.map((s, i) => (
                        <GalleryCard key={i} shot={s} index={i} />
                    ))}
                </div>
            </Reveal>
        </section>
    )
}

/* ================================================================
 HOW IT WORKS
 ================================================================ */
function Steps(props: { eyebrow: string; title: string; items: Step[] }) {
    const list = props.items && props.items.length ? props.items : DEFAULT_STEPS
    return (
        <section className="mr-sec">
            <SectionHead eyebrow={props.eyebrow} title={props.title} center />
            <Reveal className="sp-steps">
                {list.map((s, i) => (
                    <div key={i} className="sp-step">
                        <span className="sp-num">{String(i + 1).padStart(2, "0")}</span>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            <h3 className="mr-h3">{s.title}</h3>
                            <p className="mr-text">{s.text}</p>
                        </div>
                    </div>
                ))}
            </Reveal>
        </section>
    )
}

/* ================================================================
 MAIN
 ================================================================ */
interface Props {
    accent: string
    email: string
    contactRole: string
    contactName: string
    heroPhoto?: Img
    heroEyebrow: string
    heroTitle: string
    heroText: string
    heroPrimary: string
    heroSecondary: string
    statement: string
    statementHighlight: string
    stats: Stat[]
    benefitsEyebrow: string
    benefitsTitle: string
    benefitsText: string
    benefits: Benefit[]
    benefitPhoto1?: Img
    benefitPhoto2?: Img
    galleryEyebrow: string
    galleryTitle: string
    galleryText: string
    gallery: Shot[]
    stepsEyebrow: string
    stepsTitle: string
    steps: Step[]
    ctaTitle: string
    ctaText: string
    ctaPhoto?: Img
    sponsorsEyebrow: string
    sponsorsTitle: string
    sponsorsText: string
    sponsors: Sponsor[]
    style?: React.CSSProperties
}

const GALLERY_CAPTIONS = [
    "Shaping the first hull",
    "Sanding and finishing",
    "First float test",
    "Wiring on the dock",
    "Sensors on board",
    "Testing in the harbour",
    "Argus on the water",
    "The team behind it",
]
const GALLERY_PHOTOS = [PH.workshop, PH.sanding, PH.float, PH.dock, PH.sensors, PH.water, PH.boat, PH.team]
const DEFAULT_GALLERY: Shot[] = GALLERY_CAPTIONS.map((c) => ({ caption: c }))

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 * @framerIntrinsicWidth 1240
 */
export default function SponsorPage(rawProps: Props) {
    const props = freshCopy(rawProps)
    const email = props.email || "andreas.furst@marinorntnu.no"
    const role = props.contactRole || "Head of Sponsorship and Branding"
    const name = props.contactName || ""

    const shots: Shot[] = (props.gallery && props.gallery.length ? props.gallery : DEFAULT_GALLERY).map((s: Shot, i: number) => ({
        caption: s.caption,
        image: pick(s.image, GALLERY_PHOTOS[i % GALLERY_PHOTOS.length], s.caption),
    }))

    return (
        <Page accent={props.accent} css={CSS} style={props.style}>
            <div className="mr-stack">
                <Hero
                    image={pick(props.heroPhoto, PH.team, "The Marinor NTNU team")}
                    eyebrow={props.heroEyebrow}
                    title={props.heroTitle}
                    text={props.heroText}
                    email={email}
                    role={role}
                    name={name}
                    primary={props.heroPrimary}
                    secondary={props.heroSecondary}
                />
                <Statement text={props.statement} highlight={props.statementHighlight} />
                <Stats stats={fixMembers(props.stats && props.stats.length ? props.stats : DEFAULT_STATS)} />
                <Benefits
                    eyebrow={props.benefitsEyebrow}
                    title={props.benefitsTitle}
                    text={props.benefitsText}
                    items={props.benefits}
                    image1={pick(props.benefitPhoto1, PH.team, "Marinor NTNU members")}
                    image2={pick(props.benefitPhoto2, PH.boat, "Argus on the water")}
                />
                <Gallery eyebrow={props.galleryEyebrow} title={props.galleryTitle} text={props.galleryText} shots={shots} />
                <Steps eyebrow={props.stepsEyebrow} title={props.stepsTitle} items={props.steps} />
                <SponsorTiers
                    eyebrow={props.sponsorsEyebrow || "Our sponsors"}
                    title={props.sponsorsTitle || "Thanks to our partners."}
                    text={props.sponsorsText}
                    sponsors={props.sponsors && props.sponsors.length ? props.sponsors : DEFAULT_SPONSORS}
                />
                <CtaPanel eyebrow="Let's talk" title={props.ctaTitle} text={props.ctaText}>
                    <Button href={`mailto:${email}`} variant="light" arrow={false} className="sp-mail">
                        {email}
                    </Button>
                    <CopyButton text={email} light />
                </CtaPanel>
            </div>
        </Page>
    )
}

SponsorPage.defaultProps = {
    accent: "rgb(124, 70, 156)",
    email: "andreas.furst@marinorntnu.no",
    contactRole: "Head of Sponsorship and Branding",
    contactName: "",
    heroPhoto: img(PH.team, "The Marinor NTNU team"),
    heroEyebrow: "Marinor NTNU · Partnerships",
    heroTitle: "Become our next partner.",
    heroText:
        "We are looking for new sponsors and partners. If your company wants to support us, contact our Head of Sponsorship and Branding.",
    heroPrimary: "Contact us",
    heroSecondary: "Why partner with us",
    statement:
        "We want to work with companies that care about new technology and want to help students build it.",
    statementHighlight: "technology students",
    stats: DEFAULT_STATS,
    benefitsEyebrow: "Why partner with Marinor",
    benefitsTitle: "What you get as a partner.",
    benefitsText: "This is what a partnership gives you.",
    benefits: DEFAULT_BENEFITS,
    benefitPhoto1: img(PH.team, "Marinor NTNU members"),
    benefitPhoto2: img(PH.boat, "Argus on the water"),
    galleryEyebrow: "What you support",
    galleryTitle: "What your support pays for.",
    galleryText: "Materials, electronics, sensors and travel to competitions. Here is some of the work.",
    gallery: DEFAULT_GALLERY,
    stepsEyebrow: "How it works",
    stepsTitle: "Three steps to a partnership.",
    steps: DEFAULT_STEPS,
    ctaTitle: "Get in touch.",
    ctaText: "Send us an email and we will answer. We can tell you more about Marinor and what a partnership could look like.",
    ctaPhoto: img(PH.water, "Argus in the water"),
    sponsorsEyebrow: "Our sponsors",
    sponsorsTitle: "Thanks to our partners.",
    sponsorsText: "These companies and organisations support Marinor NTNU. Without them we could not build our boats or travel to competitions.",
    sponsors: DEFAULT_SPONSORS,
}

addPropertyControls(SponsorPage, {
    accent: { type: ControlType.Color, title: "Accent" },
    email: { type: ControlType.String, title: "Email" },
    contactRole: { type: ControlType.String, title: "Contact Role" },
    contactName: { type: ControlType.String, title: "Contact Name", placeholder: "Optional" },

    heroPhoto: { type: ControlType.ResponsiveImage, title: "Hero Photo" },
    heroEyebrow: { type: ControlType.String, title: "Hero Eyebrow" },
    heroTitle: { type: ControlType.String, title: "Hero Title" },
    heroText: { type: ControlType.String, title: "Hero Text", displayTextArea: true },
    heroPrimary: { type: ControlType.String, title: "Hero Button 1" },
    heroSecondary: { type: ControlType.String, title: "Hero Button 2" },

    statement: { type: ControlType.String, title: "Big Sentence", displayTextArea: true },
    statementHighlight: { type: ControlType.String, title: "Dark Words", description: "Words from the sentence shown in full black" },

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
        defaultValue: DEFAULT_STATS,
    },

    benefitsEyebrow: { type: ControlType.String, title: "Benefits Eyebrow" },
    benefitsTitle: { type: ControlType.String, title: "Benefits Title" },
    benefitsText: { type: ControlType.String, title: "Benefits Text", displayTextArea: true },
    benefits: {
        type: ControlType.Array,
        title: "Benefits",
        control: {
            type: ControlType.Object,
            controls: {
                title: { type: ControlType.String, title: "Title" },
                text: { type: ControlType.String, title: "Text", displayTextArea: true },
            },
        },
        defaultValue: DEFAULT_BENEFITS,
    },
    benefitPhoto1: { type: ControlType.ResponsiveImage, title: "Benefit Photo 1" },
    benefitPhoto2: { type: ControlType.ResponsiveImage, title: "Benefit Photo 5" },

    galleryEyebrow: { type: ControlType.String, title: "Gallery Eyebrow" },
    galleryTitle: { type: ControlType.String, title: "Gallery Title" },
    galleryText: { type: ControlType.String, title: "Gallery Text", displayTextArea: true },
    gallery: {
        type: ControlType.Array,
        title: "Gallery",
        control: {
            type: ControlType.Object,
            controls: {
                image: { type: ControlType.ResponsiveImage, title: "Photo" },
                caption: { type: ControlType.String, title: "Caption" },
            },
        },
        defaultValue: DEFAULT_GALLERY,
    },

    stepsEyebrow: { type: ControlType.String, title: "Steps Eyebrow" },
    stepsTitle: { type: ControlType.String, title: "Steps Title" },
    steps: {
        type: ControlType.Array,
        title: "Steps",
        control: {
            type: ControlType.Object,
            controls: {
                title: { type: ControlType.String, title: "Title" },
                text: { type: ControlType.String, title: "Text", displayTextArea: true },
            },
        },
        defaultValue: DEFAULT_STEPS,
    },

    ctaTitle: { type: ControlType.String, title: "CTA Title" },
    ctaText: { type: ControlType.String, title: "CTA Text", displayTextArea: true },
    ctaPhoto: { type: ControlType.ResponsiveImage, title: "CTA Photo" },

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
                tier: {
                    type: ControlType.Enum,
                    title: "Tier",
                    options: ["gold", "silver", "bronze"],
                    optionTitles: ["Gold", "Silver", "Bronze"],
                    displaySegmentedControl: true,
                },
                logo: { type: ControlType.ResponsiveImage, title: "Logo" },
                url: { type: ControlType.Link, title: "Website" },
            },
        },
        defaultValue: DEFAULT_SPONSORS,
    },
})
