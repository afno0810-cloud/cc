import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Page, Intro, Photo, Reveal, SectionHead, Button, CtaPanel, Contours, at, BP, DISPLAY, BODY, MONO, DARK } from "./SiteKit.tsx"
import type { Img } from "./SiteKit.tsx"
import { freshCopy } from "./CopyUpdates.tsx"

/* ================================================================
 Team 2025 – Marinor NTNU
 · Intro: the page title
 · Content: one card per group (photo, name, members) and a closing call
 ================================================================ */

const IMG = "https://framerusercontent.com/images/"

const DEFAULT_IMAGES: Record<string, string> = {
    Leader: IMG + "XEpmBBtEvBO4PSWTN8RRtlOvw.jpeg",
    Perception: IMG + "JovExWAPbKYOkeeHXr3RYOcI67Y.jpeg",
    Autonomy: IMG + "BfHh25OHRJlZw83QrlZp6I7iHU.jpeg",
    GUI: IMG + "XkgagUSOg49xXxzKBEZ1LBQ1h0.jpeg",
    Hardware: IMG + "NAN587lOnw5hQoiitkckLyvyYVM.jpeg",
    Economy: IMG + "6zm7txRmwqFrKATugJuXPjmKc.jpeg",
    PR: IMG + "t3K8fBiWn2DvrZOUrKPQgZMU6M.jpeg",
}

const DEFAULT_GROUPS = [
    { name: "Leader", members: "Kasper Tufte Langland" },
    { name: "Perception", members: "Emil Gaustad\nJohannes Embretsen Gunnarshaug\nKasper Tufte Langland\nSåvi Midtveit\nEmil Mohr-Skogan" },
    { name: "Autonomy", members: "Oskar Fredrik Eliassen\nVegard Hovstad\nMagnus Skourup Rognebakke\nMatteo Bonora Sevenius" },
    { name: "Control", members: "Sigurd Werner Aatsæther\nPeder Aasmundtveit Hoff" },
    { name: "GUI", members: "Emil Sørgaard Djupvik\nAslak Myhre" },
    { name: "Hardware", members: "Are Odberg Algrøy\nJacob Hansson\nMagnus Kalvenes\nGardar Benneche Skansbo\nPaul Johan Slungård" },
    { name: "Economy", members: "Jonas Aanensen" },
    { name: "PR", members: "Marte Madslien Bakken" },
]

type Group = { name: string; members: string; image?: Img }

interface Props {
    section: string // "intro" | "content"
    eyebrow: string
    title: string
    subtitle: string
    groupsTitle: string
    ctaTitle: string
    ctaText: string
    ctaButton: string
    ctaLink: string
    accent: string
    groups: Group[]
    style?: React.CSSProperties
}

const CSS = `
.t25-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;align-items:stretch}
.t25-card{display:flex;flex-direction:column;background:#fff;border:1px solid rgba(16,16,17,.07);border-radius:18px;overflow:hidden}
.t25-media{position:relative;aspect-ratio:4 / 3;overflow:hidden;background:rgb(222,216,236)}
.t25-media .mr-photo{position:absolute;inset:0}
.t25-empty{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:${DARK};isolation:isolate;overflow:hidden}
.t25-empty span{font-family:${DISPLAY};font-weight:700;font-size:30px;letter-spacing:-.04em;color:#fff}
.t25-body{display:flex;flex-direction:column;gap:14px;padding:18px 20px 22px}
.t25-head{display:flex;align-items:baseline;justify-content:space-between;gap:12px;padding-bottom:12px;border-bottom:1px solid rgba(16,16,17,.1)}
.t25-head h3{margin:0;font-family:${DISPLAY};font-weight:700;font-size:23px;line-height:1.1;letter-spacing:-.04em;color:${DARK}}
.t25-count{font-family:${MONO};font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--mr-accent);white-space:nowrap}
.t25-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:7px}
.t25-list li{font-family:${BODY};font-weight:500;font-size:15px;line-height:1.3;letter-spacing:-.015em;color:${DARK}}
${at(BP.lg, `.t25-grid{grid-template-columns:repeat(3,minmax(0,1fr))}`)}
${at(BP.md, `.t25-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}`)}
${at(BP.sm, `.t25-grid{grid-template-columns:minmax(0,1fr);gap:10px}.t25-card{display:grid;grid-template-columns:38% minmax(0,1fr)}.t25-media{aspect-ratio:auto;min-height:150px;height:100%}.t25-body{padding:14px 16px 16px;gap:10px}.t25-head{flex-direction:column;gap:4px;padding-bottom:10px}.t25-head h3{font-size:21px}.t25-list li{font-size:14px}.t25-empty span{font-size:22px}`)}
`

const lines = (s: string) =>
    (s || "")
        .split("\n")
        .map((m) => m.trim())
        .filter(Boolean)

function GroupCard({ group }: { group: Group }) {
    const members = lines(group.members)
    const src = group.image && group.image.src ? group.image : DEFAULT_IMAGES[group.name] ? { src: DEFAULT_IMAGES[group.name], alt: `${group.name}, Marinor NTNU` } : undefined
    return (
        <article className="t25-card mr-zoom">
            <div className="t25-media">
                {src ? (
                    <Photo image={src} alt={`${group.name}, Marinor NTNU`} sizes="(max-width: 600px) 40vw, (max-width: 860px) 50vw, 25vw" />
                ) : (
                    <div className="t25-empty">
                        <Contours />
                        <span>{group.name}</span>
                    </div>
                )}
            </div>
            <div className="t25-body">
                <div className="t25-head">
                    <h3>{group.name}</h3>
                    <span className="t25-count">
                        {members.length} {members.length === 1 ? "member" : "members"}
                    </span>
                </div>
                <ul className="t25-list">
                    {members.map((m, i) => (
                        <li key={m + i}>{m}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 * @framerIntrinsicWidth 1240
 */
export default function Team2025Showcase(rawProps: Props) {
    const props = freshCopy(rawProps)
    const list: Group[] = props.groups && props.groups.length ? props.groups : DEFAULT_GROUPS

    if (props.section === "intro") {
        return (
            <Page accent={props.accent} style={props.style}>
                <Intro eyebrow={props.eyebrow} title={props.title} accentWords={1} text={props.subtitle} />
            </Page>
        )
    }

    return (
        <Page accent={props.accent} css={CSS} style={props.style}>
            <div className="mr-stack">
                <section className="mr-sec">
                    <SectionHead title={props.groupsTitle} />
                    <Reveal className="t25-grid">
                        {list.map((g, i) => (
                            <GroupCard key={g.name + i} group={g} />
                        ))}
                    </Reveal>
                </section>
                <CtaPanel title={props.ctaTitle} text={props.ctaText} left>
                    {props.ctaButton ? (
                        <Button href={props.ctaLink} variant="light">
                            {props.ctaButton}
                        </Button>
                    ) : null}
                </CtaPanel>
            </div>
        </Page>
    )
}

Team2025Showcase.defaultProps = {
    section: "content",
    eyebrow: "Marinor NTNU · Season 2025",
    title: "Team 2025",
    subtitle: "The students who started Marinor NTNU and built Argus.",
    groupsTitle: "Our groups",
    ctaTitle: "Want to join the team?",
    ctaText: "We need students in robotics, automation, marine technology and other subjects.",
    ctaButton: "Join Marinor",
    ctaLink: "/join",
    accent: "rgb(124, 70, 156)",
    groups: DEFAULT_GROUPS,
}

addPropertyControls(Team2025Showcase, {
    section: {
        type: ControlType.Enum,
        title: "Section",
        options: ["intro", "content"],
        optionTitles: ["Intro", "Content"],
    },
    eyebrow: { type: ControlType.String, title: "Eyebrow", hidden: (p: any) => p.section !== "intro" },
    title: { type: ControlType.String, title: "Title", hidden: (p: any) => p.section !== "intro" },
    subtitle: { type: ControlType.String, title: "Subtitle", displayTextArea: true, hidden: (p: any) => p.section !== "intro" },
    groupsTitle: { type: ControlType.String, title: "Groups Title", hidden: (p: any) => p.section !== "content" },
    ctaTitle: { type: ControlType.String, title: "CTA Title", hidden: (p: any) => p.section !== "content" },
    ctaText: { type: ControlType.String, title: "CTA Text", displayTextArea: true, hidden: (p: any) => p.section !== "content" },
    ctaButton: { type: ControlType.String, title: "CTA Button", hidden: (p: any) => p.section !== "content" },
    ctaLink: { type: ControlType.String, title: "CTA Link", hidden: (p: any) => p.section !== "content" },
    accent: { type: ControlType.Color, title: "Accent" },
    groups: {
        type: ControlType.Array,
        title: "Groups",
        hidden: (p: any) => p.section !== "content",
        control: {
            type: ControlType.Object,
            controls: {
                name: { type: ControlType.String, title: "Name" },
                members: { type: ControlType.String, title: "Members", displayTextArea: true, placeholder: "One name per line" },
                image: { type: ControlType.ResponsiveImage, title: "Image" },
            },
        },
        defaultValue: DEFAULT_GROUPS,
    },
})
