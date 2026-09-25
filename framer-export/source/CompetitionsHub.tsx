import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Page, SectionHead, Reveal, Button, CtaPanel, pick, at, BP, DISPLAY, BODY, MONO, DARK, GRAY } from "./SiteKit.tsx"
import type { Img } from "./SiteKit.tsx"
import { DoorCard, DOOR_CSS } from "./HomeWorld.tsx"
import type { Door } from "./HomeWorld.tsx"
import { HubIntro, HubSteps, HUB_CSS } from "./ProjectsHub.tsx"
import { freshCopy } from "./CopyUpdates.tsx"

/* ================================================================
 Competitions hub – choose Njord or RoboBoat
 Photos below – a photo set in the right panel replaces them.
 ================================================================ */

const IMG = "https://framerusercontent.com/images/"
const COMP_PHOTOS = {
    njord: IMG + "gVtb0YIZKv3qgIFUEzjyykwgHS8.png", // Njord image (same as the Njord page)
    robo: IMG + "aFSAiq4VrhmVHpI2PQY4CqkQ2g.png", // RoboBoat image (same as the RoboBoat page)
    roboLogo: IMG + "LrBmF25Tu6AkREtPrSt4ZFu3PhI.webp", // RoboBoat logo
}

const COMP_CSS = `
.cmp{background:#fff;border-radius:20px;border:1px solid rgba(16,16,17,.06);padding:6px 32px 10px}
.cmp-row{display:grid;grid-template-columns:.7fr 1fr 1fr;gap:16px;align-items:baseline;border-bottom:1px solid rgba(16,16,17,.08)}
.cmp-row:last-child{border-bottom:0}
.cmp-row>*{padding:18px 0}
.cmp-name{font-family:${DISPLAY};font-weight:700;font-size:28px;letter-spacing:-.04em;color:var(--mr-accent)}
.cmp-key{font-family:${MONO};font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:${GRAY}}
.cmp-val{font-family:${BODY};font-weight:600;font-size:17px;line-height:1.35;color:${DARK}}
.hub-steps-3 .hub-steps{grid-template-columns:repeat(3,minmax(0,1fr))}
${at(BP.md, `.hub-steps-3 .hub-steps{grid-template-columns:minmax(0,1fr)}`)}
${at(BP.sm, `.cmp{padding:2px 16px 6px;border-radius:16px}.cmp-row{grid-template-columns:.8fr 1fr 1fr;gap:10px}.cmp-row>*{padding:14px 0}.cmp-name{font-size:19px}.cmp-key{font-size:10px}.cmp-val{font-size:14px}`)}
`

function Compare() {
    const rows = [
        { k: "Where", a: "Nyhavna, Trondheim", b: "Sarasota, Florida" },
        { k: "When", a: "Five days in August", b: "Every February" },
        { k: "Run by", a: "Njord NTNU", b: "RoboNation" },
        { k: "Marinor", a: "Took part in 2026", b: "Our goal after Njord" },
    ]
    return (
        <section className="mr-sec">
            <SectionHead eyebrow="Side by side" title="Two competitions, one kind of boat." center />
            <Reveal>
                <div className="cmp" role="table" aria-label="Njord and RoboBoat side by side">
                    <div className="cmp-row" role="row">
                        <span />
                        <span className="cmp-name" role="columnheader">
                            Njord
                        </span>
                        <span className="cmp-name" role="columnheader">
                            RoboBoat
                        </span>
                    </div>
                    {rows.map((r) => (
                        <div key={r.k} className="cmp-row" role="row">
                            <span className="cmp-key" role="rowheader">
                                {r.k}
                            </span>
                            <span className="cmp-val" role="cell">
                                {r.a}
                            </span>
                            <span className="cmp-val" role="cell">
                                {r.b}
                            </span>
                        </div>
                    ))}
                </div>
            </Reveal>
        </section>
    )
}

interface Props {
    accent: string
    eyebrow: string
    title: string
    text: string
    njordStatus: string
    njordText: string
    njordTags: string
    njordPhoto?: Img
    roboStatus: string
    roboText: string
    roboTags: string
    roboPhoto?: Img
    ctaTitle: string
    ctaText: string
    style?: React.CSSProperties
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 * @framerIntrinsicWidth 1240
 */
/* Older wording that may still be saved on the Framer canvas is swapped for the current text */
const OLD_COPY = /[–—]|Autonomous boats are built to be tested|^The Autonomous Ship Challenge in Trondheim|^One of the biggest competitions|or help us get to the next competition/
const current = (value: string | undefined, fallback: string) => (!value || OLD_COPY.test(value) ? fallback : value)

export default function CompetitionsHub(rawProps: Props) {
    const props = freshCopy(rawProps)
    const D = CompetitionsHub.defaultProps
    const cards: Door[] = [
        {
            name: "Njord",
            status: props.njordStatus,
            live: true,
            text: current(props.njordText, D.njordText),
            tags: props.njordTags,
            link: "/competitions/njord-challange",
            cta: "Explore Njord",
            image: pick(props.njordPhoto, COMP_PHOTOS.njord, "The Njord Challenge"),
        },
        {
            name: "RoboBoat",
            status: props.roboStatus,
            live: false,
            text: current(props.roboText, D.roboText),
            tags: props.roboTags,
            link: "/competitions/roboat",
            cta: "Explore RoboBoat",
            image: pick(props.roboPhoto, COMP_PHOTOS.robo, "RoboBoat"),
            logo: COMP_PHOTOS.roboLogo,
        },
    ]

    return (
        <Page accent={props.accent} css={DOOR_CSS + HUB_CSS + COMP_CSS} style={props.style}>
            <div className="mr-stack">
                <section className="hub-top">
                    <HubIntro
                        eyebrow={props.eyebrow}
                        title={props.title}
                        text={current(props.text, D.text)}
                        facts={[
                            { k: "2", v: "competitions" },
                            { k: "2", v: "continents" },
                            { k: "1", v: "boat: Argus" },
                        ]}
                    />
                    <div className="hw-doors mr-rise" style={{ animationDelay: "0.3s" }}>
                        {cards.map((c) => (
                            <DoorCard key={c.name} c={c} tall />
                        ))}
                    </div>
                </section>

                <Compare />

                <section className="mr-sec">
                    <SectionHead eyebrow="The road ahead" title="Where we compete." center />
                    <div className="hub-steps-3">
                        <HubSteps
                            items={[
                                { y: "2026", t: "First time at Njord", d: "Argus sails the Njord Challenge in Trondheim with 22 other teams." },
                                { y: "2027", t: "Win Njord", d: "Back in Nyhavna, this time to win." },
                                { y: "Then", t: "RoboBoat", d: "Enter RoboBoat in Florida with what we learn at Njord." },
                            ]}
                        />
                    </div>
                </section>

                <CtaPanel eyebrow="Come along" title={props.ctaTitle} text={current(props.ctaText, D.ctaText)}>
                    <Button href="/projects/argus" variant="light">
                        Meet Argus
                    </Button>
                    <Button href="/want-to-spons-us" variant="ghost">
                        Become a partner
                    </Button>
                </CtaPanel>
            </div>
        </Page>
    )
}

CompetitionsHub.defaultProps = {
    accent: "rgb(124, 70, 156)",
    eyebrow: "Marinor NTNU · Competitions",
    title: "Pick a competition.",
    text: "Read about Njord in Trondheim, where we sail Argus, or RoboBoat in Florida, where we want to go next.",
    njordStatus: "We compete here",
    njordText: "A student competition in Trondheim where autonomous boats solve tasks in the harbour without anyone steering.",
    njordTags: "Trondheim · August · Njord NTNU",
    roboStatus: "Next goal",
    roboText: "A large competition for autonomous boats, held every February in Sarasota, Florida.",
    roboTags: "Sarasota, FL · February · RoboNation",
    ctaTitle: "Follow us to the start line.",
    ctaText: "See the boat we compete with, or support us as a partner.",
}

addPropertyControls(CompetitionsHub, {
    accent: { type: ControlType.Color, title: "Accent" },
    eyebrow: { type: ControlType.String, title: "Eyebrow" },
    title: { type: ControlType.String, title: "Title" },
    text: { type: ControlType.String, title: "Text", displayTextArea: true },
    njordStatus: { type: ControlType.String, title: "Njord Status" },
    njordText: { type: ControlType.String, title: "Njord Text", displayTextArea: true },
    njordTags: { type: ControlType.String, title: "Njord Tags", placeholder: "Tag · Tag · Tag" },
    njordPhoto: { type: ControlType.ResponsiveImage, title: "Njord Photo" },
    roboStatus: { type: ControlType.String, title: "RoboBoat Status" },
    roboText: { type: ControlType.String, title: "RoboBoat Text", displayTextArea: true },
    roboTags: { type: ControlType.String, title: "RoboBoat Tags", placeholder: "Tag · Tag · Tag" },
    roboPhoto: { type: ControlType.ResponsiveImage, title: "RoboBoat Photo" },
    ctaTitle: { type: ControlType.String, title: "CTA Title" },
    ctaText: { type: ControlType.String, title: "CTA Text", displayTextArea: true },
})
