import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Page, Label, SectionHead, Reveal, Button, CtaPanel, pick, cx, at, BP, DISPLAY, BODY, MONO, DARK, GRAY, LAVENDER } from "./SiteKit.tsx"
import type { Img } from "./SiteKit.tsx"
import { PH } from "./SponsorKit.tsx"
import { DoorCard, DOOR_CSS } from "./HomeWorld.tsx"
import type { Door } from "./HomeWorld.tsx"
import { freshCopy } from "./CopyUpdates.tsx"

/* ================================================================
 Projects hub – choose Argus or Proteus
 ================================================================ */

export const HUB_CSS = `
.hub-intro{display:flex;align-items:flex-end;justify-content:space-between;gap:32px}
.hub-head{display:flex;flex-direction:column;align-items:flex-start;gap:22px;max-width:760px}
.hub-facts{display:flex;gap:26px;margin:0;padding:0;list-style:none;flex-wrap:wrap}
.hub-facts li{display:flex;flex-direction:column;gap:4px;padding-left:14px;border-left:1px solid rgba(16,16,17,.16)}
.hub-facts b{font-family:${DISPLAY};font-weight:700;font-size:30px;line-height:1;letter-spacing:-.04em;color:${DARK}}
.hub-facts span{font-family:${MONO};font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:${GRAY}}
.hub-top{display:flex;flex-direction:column;gap:44px}
.hub-steps{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
.hub-step{display:flex;flex-direction:column;gap:10px;padding:24px 22px 26px;border-radius:18px;background:#fff;border:1px solid rgba(16,16,17,.06)}
.hub-step b{font-family:${MONO};font-size:12px;font-weight:500;letter-spacing:.06em;color:var(--mr-accent)}
.hub-step h3{font-size:21px}
.hub-step.is-last{background:${DARK};border-color:${DARK}}
.hub-step.is-last b{color:${LAVENDER}}
.hub-step.is-last h3{color:#fff}
.hub-step.is-last .mr-small{color:rgba(255,255,255,.7)}
${at(BP.lg, `.hub-steps{grid-template-columns:repeat(2,minmax(0,1fr))}`)}
${at(BP.md, `.hub-intro{flex-direction:column;align-items:flex-start;gap:28px}.hub-top{gap:36px}`)}
${at(BP.sm, `.hub-steps{grid-template-columns:minmax(0,1fr);gap:10px}.hub-step{padding:20px 18px 22px}.hub-facts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;width:100%}.hub-facts li{padding-left:10px}.hub-facts b{font-size:26px}.hub-facts span{font-size:10px;letter-spacing:.04em}`)}
`

type Fact = { k: string; v: string }
type Milestone = { y: string; t: string; d: string }

export function HubIntro({ eyebrow, title, text, facts }: { eyebrow: string; title: string; text: string; facts: Fact[] }) {
    return (
        <div className="hub-intro">
            <div className="hub-head">
                <div className="mr-rise">
                    <Label>{eyebrow}</Label>
                </div>
                <h1 className="mr-h1 mr-rise" style={{ animationDelay: "0.08s" }}>
                    {title}
                </h1>
                {text ? (
                    <p className="mr-lead mr-rise" style={{ animationDelay: "0.16s" }}>
                        {text}
                    </p>
                ) : null}
            </div>
            <ul className="hub-facts mr-rise" style={{ animationDelay: "0.24s" }}>
                {facts.map((f) => (
                    <li key={f.v}>
                        <b>{f.k}</b>
                        <span>{f.v}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export function HubSteps({ items }: { items: Milestone[] }) {
    return (
        <Reveal className="hub-steps">
            {items.map((m, i) => (
                <div key={i} className={cx("hub-step", i === items.length - 1 && "is-last")}>
                    <b>{m.y}</b>
                    <h3 className="mr-h3">{m.t}</h3>
                    <p className="mr-small">{m.d}</p>
                </div>
            ))}
        </Reveal>
    )
}

interface Props {
    accent: string
    eyebrow: string
    title: string
    text: string
    argusStatus: string
    argusText: string
    argusTags: string
    argusPhoto?: Img
    proteusStatus: string
    proteusText: string
    proteusTags: string
    proteusPhoto?: Img
    ctaTitle: string
    ctaText: string
    style?: React.CSSProperties
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 * @framerIntrinsicWidth 1240
 */
export default function ProjectsHub(rawProps: Props) {
    const props = freshCopy(rawProps)
    const cards: Door[] = [
        {
            name: "Argus",
            status: props.argusStatus,
            live: true,
            text: props.argusText,
            tags: props.argusTags,
            link: "/projects/argus",
            cta: "Explore Argus",
            image: pick(props.argusPhoto, PH.boat, "Argus on the water"),
        },
        {
            name: "Proteus",
            status: props.proteusStatus,
            live: false,
            text: props.proteusText,
            tags: props.proteusTags,
            link: "/projects/proteus",
            cta: "Follow Proteus",
            image: props.proteusPhoto && props.proteusPhoto.src ? props.proteusPhoto : undefined,
        },
    ]

    return (
        <Page accent={props.accent} css={DOOR_CSS + HUB_CSS} style={props.style}>
            <div className="mr-stack">
                <section className="hub-top">
                    <HubIntro
                        eyebrow={props.eyebrow}
                        title={props.title}
                        text={props.text}
                        facts={[
                            { k: "2", v: "projects" },
                            { k: "1", v: "on the water" },
                            { k: "1", v: "in development" },
                        ]}
                    />
                    <div className="hw-doors mr-rise" style={{ animationDelay: "0.3s" }}>
                        {cards.map((c) => (
                            <DoorCard key={c.name} c={c} tall />
                        ))}
                    </div>
                </section>

                <section className="mr-sec">
                    <SectionHead eyebrow="From one boat to the next" title="Everything we learn on Argus goes into Proteus." center />
                    <HubSteps
                        items={[
                            { y: "2025", t: "Marinor is founded", d: "Four students start Marinor." },
                            { y: "2026", t: "Argus hits the water", d: "Argus goes in the water in Trondheim harbour." },
                            { y: "2026", t: "Njord Challenge", d: "We enter the Njord Challenge with Argus." },
                            { y: "Next", t: "Proteus", d: "Our next boat. Work has started." },
                        ]}
                    />
                </section>

                <CtaPanel eyebrow="Be part of the next one" title={props.ctaTitle} text={props.ctaText}>
                    <Button href="/join" variant="light">
                        Join Marinor
                    </Button>
                    <Button href="/want-to-spons-us" variant="ghost">
                        Become a partner
                    </Button>
                </CtaPanel>
            </div>
        </Page>
    )
}

ProjectsHub.defaultProps = {
    accent: "rgb(124, 70, 156)",
    eyebrow: "Marinor NTNU · Projects",
    title: "Pick a project.",
    text: "Read about Argus, the boat we have built and tested, or Proteus, the boat we are designing now.",
    argusStatus: "On the water",
    argusText: "Our first autonomous boat. A catamaran with LiDAR, a stereo depth camera and a Kongsberg Seapath 130.",
    argusTags: "Catamaran · LiDAR · Stereo camera · Seapath 130",
    proteusStatus: "In development",
    proteusText: "Our next boat. We are working on the design now.",
    proteusTags: "Coming soon",
    ctaTitle: "Want to help build the next boat?",
    ctaText: "Join the team, or support us as a partner while we build Proteus.",
}

addPropertyControls(ProjectsHub, {
    accent: { type: ControlType.Color, title: "Accent" },
    eyebrow: { type: ControlType.String, title: "Eyebrow" },
    title: { type: ControlType.String, title: "Title" },
    text: { type: ControlType.String, title: "Text", displayTextArea: true },
    argusStatus: { type: ControlType.String, title: "Argus Status" },
    argusText: { type: ControlType.String, title: "Argus Text", displayTextArea: true },
    argusTags: { type: ControlType.String, title: "Argus Tags", placeholder: "Tag · Tag · Tag" },
    argusPhoto: { type: ControlType.ResponsiveImage, title: "Argus Photo" },
    proteusStatus: { type: ControlType.String, title: "Proteus Status" },
    proteusText: { type: ControlType.String, title: "Proteus Text", displayTextArea: true },
    proteusTags: { type: ControlType.String, title: "Proteus Tags", placeholder: "Tag · Tag" },
    proteusPhoto: { type: ControlType.ResponsiveImage, title: "Proteus Photo", description: "Empty = drawn blueprint" },
    ctaTitle: { type: ControlType.String, title: "CTA Title" },
    ctaText: { type: ControlType.String, title: "CTA Text", displayTextArea: true },
})
