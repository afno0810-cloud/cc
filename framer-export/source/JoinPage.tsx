import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Page, Label, Button, Photo, Reveal, SectionHead, CtaPanel, CopyButton, Contours, pick, at, BP, fluid, DISPLAY, BODY, MONO, DARK, GRAY, LAVENDER } from "./SiteKit.tsx"
import type { Img } from "./SiteKit.tsx"
import { freshCopy } from "./CopyUpdates.tsx"

/* ================================================================
 Join page – Marinor NTNU
 Hero (with the recruiting status) · the seven groups · what you get ·
 optional "ask us" panel. Built on SiteKit: the layout follows the width of
 the component, so the Tablet and Phone frames look like a real tablet/phone.
 ================================================================ */

const TEAM_PHOTO = "https://framerusercontent.com/images/fUF3HR5F9cbPVuyf7I6Qd6Ndug.jpeg"

type Group = { title: string; text: string; tags: string }
type Perk = { title: string; text: string }

interface Props {
    accent: string
    heroEyebrow: string
    heroTitle: string
    heroSubtitle: string
    heroPhoto?: Img
    photoTag: string
    statusLabel: string
    statusTitle: string
    statusText: string
    applyLabel: string
    applyLink: string
    secondLabel: string
    secondLink: string
    groupsEyebrow: string
    groupsTitle: string
    groupsText: string
    groups: Group[]
    showTags: boolean
    perksTitle: string
    perks: Perk[]
    showAsk: boolean
    askEyebrow: string
    askTitle: string
    askText: string
    email: string
    aboutLabel: string
    aboutLink: string
    style?: React.CSSProperties
}

const DEFAULT_GROUPS: Group[] = [
    { title: "Perception", text: "LiDAR, cameras and the software that lets the boat understand what is around it.", tags: "Sensors · Computer vision · Data" },
    { title: "Autonomy", text: "Planning and decision making, so the boat finds a safe route on its own.", tags: "Path planning · Algorithms · Simulation" },
    { title: "Control", text: "Steering and thrust. Keeps the boat on the planned path in wind and waves.", tags: "Control theory · Modelling · Testing" },
    { title: "GUI", text: "The interface where we follow the boat, read its data and send it commands.", tags: "Web · UX · Visualisation" },
    { title: "Hardware", text: "Hulls, frame, power and electronics.", tags: "Electronics · CAD · Building" },
    { title: "Economy", text: "Budget, sponsors, travel and other practical work.", tags: "Budget · Sponsors · Applications" },
    { title: "PR", text: "Social media, photos and this website.", tags: "Content · Design · Web" },
]

const DEFAULT_PERKS: Perk[] = [
    { title: "You build real boats", text: "You work on a boat that goes in the water and enters competitions." },
    { title: "You work across subjects", text: "Software, electronics and mechanics students work on the same boat." },
    { title: "You meet companies", text: "Our sponsors and partners follow the project and meet the team." },
]

const CSS = `
.jn-hero{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(0,.92fr);min-height:600px}
.jn-copy{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:26px;padding:76px 56px 64px 64px}
.jn-copy .mr-h1{font-size:${fluid(52, 8.6, 120)};line-height:.92;letter-spacing:-.055em;color:#fff}
.jn-copy .mr-h1 em{font-style:normal;color:${LAVENDER}}
.jn-copy .mr-lead{max-width:520px}
.jn-status{display:flex;flex-direction:column;gap:8px;width:100%;max-width:540px;padding:20px 22px 22px;border-radius:16px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14)}
.jn-status-top{display:flex;align-items:center;gap:8px;font-family:${MONO};font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:${LAVENDER}}
.jn-status b{font-family:${DISPLAY};font-weight:700;font-size:${fluid(21, 2.1, 27)};line-height:1.15;letter-spacing:-.03em;color:#fff}
.jn-status p{margin:0;font-family:${BODY};font-weight:500;font-size:15.5px;line-height:1.5;color:rgba(255,255,255,.7)}
.jn-media{position:relative;min-height:100%}
.jn-media .mr-photo{position:absolute;inset:0}
.jn-media::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(16,16,17,.35) 0%,rgba(16,16,17,0) 30%);pointer-events:none}
.jn-media .mr-tag{position:absolute;left:18px;bottom:18px;z-index:1}

.jn-groups{display:flex;flex-direction:column;border-top:1px solid rgba(16,16,17,.14)}
.jn-group{display:grid;grid-template-columns:56px minmax(0,.8fr) minmax(0,1.35fr) minmax(0,1fr);gap:24px;align-items:baseline;padding:26px 12px;border-bottom:1px solid rgba(16,16,17,.14);transition:background-color .25s ease}
.jn-num{font-family:${MONO};font-size:12px;letter-spacing:.08em;color:var(--mr-accent)}
.jn-name{margin:0;font-family:${DISPLAY};font-weight:700;font-size:${fluid(24, 2.5, 32)};line-height:1.05;letter-spacing:-.04em;color:${DARK};transition:color .25s ease}
.jn-desc{margin:0;font-family:${BODY};font-weight:500;font-size:16px;line-height:1.5;letter-spacing:-.01em;color:${GRAY}}
.jn-tags{display:flex;flex-wrap:wrap;gap:6px;margin:0;padding:0;list-style:none}
.jn-tags li{font-family:${MONO};font-size:11px;line-height:1;letter-spacing:.04em;text-transform:uppercase;color:rgba(16,16,17,.66);padding:6px 8px;border-radius:6px;background:rgba(124,70,156,.08)}
@media (hover:hover){.jn-group:hover{background:rgba(255,255,255,.6)}.jn-group:hover .jn-name{color:var(--mr-accent)}}

.jn-perks{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
.jn-perk{display:flex;flex-direction:column;gap:12px;padding:26px 24px 28px}
.jn-perk::before{content:"";width:28px;height:3px;border-radius:3px;background:var(--mr-accent);margin-bottom:6px}

${at(BP.lg, `.jn-copy{padding:64px 40px 56px 44px}.jn-group{grid-template-columns:48px minmax(0,1fr) minmax(0,1.5fr);gap:10px 20px}.jn-tags{grid-column:3}`)}
${at(BP.md, `.jn-hero{grid-template-columns:minmax(0,1fr);min-height:0}.jn-media{order:-1;min-height:0;aspect-ratio:16 / 9}.jn-media::after{background:linear-gradient(0deg,rgba(16,16,17,.45) 0%,rgba(16,16,17,0) 40%)}.jn-copy{padding:44px 32px 44px}
.jn-group{grid-template-columns:40px minmax(0,1fr);gap:10px 14px;padding:22px 6px}.jn-desc,.jn-tags{grid-column:2}
.jn-perks{grid-template-columns:minmax(0,1fr);gap:10px}.jn-perk{padding:22px 22px 24px}`)}
${at(BP.sm, `.jn-copy{padding:34px 20px 24px;gap:22px}.jn-media{aspect-ratio:4 / 3}.jn-status{padding:18px 18px 20px}.jn-status p{font-size:15px}.jn-group{grid-template-columns:32px minmax(0,1fr)}.jn-desc{font-size:15px}.jn-copy .mr-btns{width:100%}.jn-copy .mr-btn{flex:1 1 auto}`)}
`

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 * @framerIntrinsicWidth 1240
 */
export default function JoinPage(rawProps: Props) {
    const props = freshCopy(rawProps)
    const groupList = props.groups && props.groups.length ? props.groups : DEFAULT_GROUPS
    const perkList = props.perks && props.perks.length ? props.perks : DEFAULT_PERKS
    const words = (props.heroTitle || "").trim().split(/\s+/).filter(Boolean)
    const last = words.length > 1 ? words[words.length - 1] : ""
    const first = words.length > 1 ? words.slice(0, -1).join(" ") : words.join(" ")

    return (
        <Page accent={props.accent} css={CSS} style={props.style}>
            <div className="mr-stack">
                {/* ---------- Hero ---------- */}
                <section className="jn-hero mr-panel mr-dark mr-on-dark">
                    <Contours />
                    <div className="jn-copy">
                        <div className="mr-rise">
                            <Label light>{props.heroEyebrow}</Label>
                        </div>
                        <h1 className="mr-h1 mr-rise" style={{ animationDelay: "0.08s" }}>
                            {first}
                            {last ? " " : null}
                            {last ? <em>{last}</em> : null}
                        </h1>
                        {props.heroSubtitle ? (
                            <p className="mr-lead mr-rise" style={{ animationDelay: "0.16s" }}>
                                {props.heroSubtitle}
                            </p>
                        ) : null}
                        <div className="jn-status mr-rise" style={{ animationDelay: "0.24s" }}>
                            {props.statusLabel ? (
                                <span className="jn-status-top">
                                    <i className="mr-dot" />
                                    {props.statusLabel}
                                </span>
                            ) : null}
                            {props.statusTitle ? <b>{props.statusTitle}</b> : null}
                            {props.statusText ? <p>{props.statusText}</p> : null}
                        </div>
                        {props.applyLabel || props.secondLabel ? (
                            <div className="mr-btns mr-rise" style={{ animationDelay: "0.3s" }}>
                                {props.applyLabel ? (
                                    <Button href={props.applyLink} variant="light">
                                        {props.applyLabel}
                                    </Button>
                                ) : null}
                                {props.secondLabel ? (
                                    <Button href={props.secondLink} variant="ghost">
                                        {props.secondLabel}
                                    </Button>
                                ) : null}
                            </div>
                        ) : null}
                    </div>
                    <div className="jn-media mr-fade" style={{ animationDelay: "0.15s" }}>
                        <Photo image={pick(props.heroPhoto, TEAM_PHOTO, "The Marinor NTNU team")} sizes="(max-width: 860px) 100vw, 46vw" priority />
                        {props.photoTag ? <span className="mr-tag mr-tag--glass">{props.photoTag}</span> : null}
                    </div>
                </section>

                {/* ---------- Groups ---------- */}
                <section className="mr-sec">
                    <SectionHead eyebrow={props.groupsEyebrow} title={props.groupsTitle} text={props.groupsText} />
                    <Reveal className="jn-groups">
                        {groupList.map((g, i) => {
                            const tags = props.showTags
                                ? (g.tags || "")
                                      .split("·")
                                      .map((t) => t.trim())
                                      .filter(Boolean)
                                : []
                            return (
                                <div key={g.title + i} className="jn-group">
                                    <span className="jn-num">{String(i + 1).padStart(2, "0")}</span>
                                    <h3 className="jn-name">{g.title}</h3>
                                    <p className="jn-desc">{g.text}</p>
                                    {tags.length ? (
                                        <ul className="jn-tags">
                                            {tags.map((t) => (
                                                <li key={t}>{t}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <span />
                                    )}
                                </div>
                            )
                        })}
                    </Reveal>
                </section>

                {/* ---------- What you get ---------- */}
                <section className="mr-sec">
                    <SectionHead title={props.perksTitle} />
                    <Reveal className="jn-perks">
                        {perkList.map((p, i) => (
                            <div key={p.title + i} className="jn-perk mr-card">
                                <h3 className="mr-h3">{p.title}</h3>
                                <p className="mr-text">{p.text}</p>
                            </div>
                        ))}
                    </Reveal>
                </section>

                {/* ---------- Ask us (off by default) ---------- */}
                {props.showAsk ? (
                    <CtaPanel eyebrow={props.askEyebrow} title={props.askTitle} text={props.askText} left>
                        {props.email ? (
                            <Button href={`mailto:${props.email}`} variant="light">
                                {props.email}
                            </Button>
                        ) : null}
                        {props.email ? <CopyButton text={props.email} light /> : null}
                        {props.aboutLabel ? (
                            <Button href={props.aboutLink} variant="ghost">
                                {props.aboutLabel}
                            </Button>
                        ) : null}
                    </CtaPanel>
                ) : null}
            </div>
        </Page>
    )
}

JoinPage.defaultProps = {
    accent: "rgb(124, 70, 156)",
    heroEyebrow: "Marinor NTNU · Recruitment",
    heroTitle: "Join Marinor.",
    heroSubtitle: "We build autonomous boats in Trondheim. All NTNU students can apply, and you do not need to know anything about boats.",
    photoTag: "The 2025 crew",
    statusLabel: "Status",
    statusTitle: "We are not recruiting right now",
    statusText: "We take in new members at set times. Follow us on Instagram, where we post when applications open.",
    applyLabel: "Follow us on Instagram",
    applyLink: "https://www.instagram.com/marinorntnu/",
    secondLabel: "Meet the team",
    secondLink: "/team/team-2025",
    groupsEyebrow: "Seven groups",
    groupsTitle: "Our groups.",
    groupsText: "These are our seven groups. Have a look, so you know which one to apply for.",
    groups: DEFAULT_GROUPS,
    showTags: true,
    perksTitle: "What you get out of it.",
    perks: DEFAULT_PERKS,
    showAsk: false,
    askEyebrow: "Ask us anything",
    askTitle: "Not sure where you fit? Ask.",
    askText: "Write to us and ask about the groups, how much time it takes or anything else.",
    email: "",
    aboutLabel: "About Marinor",
    aboutLink: "/about",
}

addPropertyControls(JoinPage, {
    accent: { type: ControlType.Color, title: "Accent" },
    heroEyebrow: { type: ControlType.String, title: "Hero Eyebrow" },
    heroTitle: { type: ControlType.String, title: "Hero Title", description: "The last word is shown in lavender" },
    heroSubtitle: { type: ControlType.String, title: "Hero Text", displayTextArea: true },
    heroPhoto: { type: ControlType.ResponsiveImage, title: "Hero Photo", description: "Empty = the Team 2025 group photo" },
    photoTag: { type: ControlType.String, title: "Photo Tag" },
    statusLabel: { type: ControlType.String, title: "Status Label" },
    statusTitle: { type: ControlType.String, title: "Status Title" },
    statusText: { type: ControlType.String, title: "Status Text", displayTextArea: true },
    applyLabel: { type: ControlType.String, title: "Button 1 Label" },
    applyLink: { type: ControlType.String, title: "Button 1 Link" },
    secondLabel: { type: ControlType.String, title: "Button 2 Label" },
    secondLink: { type: ControlType.String, title: "Button 2 Link" },
    groupsEyebrow: { type: ControlType.String, title: "Groups Eyebrow" },
    groupsTitle: { type: ControlType.String, title: "Groups Title" },
    groupsText: { type: ControlType.String, title: "Groups Text", displayTextArea: true },
    showTags: { type: ControlType.Boolean, title: "Show Tags" },
    groups: {
        type: ControlType.Array,
        title: "Groups",
        control: {
            type: ControlType.Object,
            controls: {
                title: { type: ControlType.String, title: "Name" },
                text: { type: ControlType.String, title: "Text", displayTextArea: true },
                tags: { type: ControlType.String, title: "Tags", placeholder: "Tag · Tag · Tag" },
            },
        },
        defaultValue: DEFAULT_GROUPS,
    },
    perksTitle: { type: ControlType.String, title: "Perks Title" },
    perks: {
        type: ControlType.Array,
        title: "Perks",
        control: {
            type: ControlType.Object,
            controls: {
                title: { type: ControlType.String, title: "Title" },
                text: { type: ControlType.String, title: "Text", displayTextArea: true },
            },
        },
        defaultValue: DEFAULT_PERKS,
    },
    showAsk: { type: ControlType.Boolean, title: "Show Ask Section" },
    askEyebrow: { type: ControlType.String, title: "Ask Eyebrow", hidden: (p: any) => !p.showAsk },
    askTitle: { type: ControlType.String, title: "Ask Title", hidden: (p: any) => !p.showAsk },
    askText: { type: ControlType.String, title: "Ask Text", displayTextArea: true, hidden: (p: any) => !p.showAsk },
    email: { type: ControlType.String, title: "Email", hidden: (p: any) => !p.showAsk },
    aboutLabel: { type: ControlType.String, title: "About Button", hidden: (p: any) => !p.showAsk },
    aboutLink: { type: ControlType.String, title: "About Link", hidden: (p: any) => !p.showAsk },
})
