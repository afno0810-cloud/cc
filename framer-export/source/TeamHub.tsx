import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Page, Intro, Photo, Arrow, Contours, at, DISPLAY, MONO, DARK, LAVENDER } from "./SiteKit.tsx"
import type { Img } from "./SiteKit.tsx"
import { freshCopy } from "./CopyUpdates.tsx"

/* ================================================================
 Team page parts – Marinor NTNU
 · Header: the big "Our Team" title
 · Card: a season card that links to that season's page
   (with a photo, or a dark card with the year when there is no photo)
 ================================================================ */

const GROUP_PHOTO = "https://framerusercontent.com/images/fUF3HR5F9cbPVuyf7I6Qd6Ndug.jpeg"

interface Props {
    mode: string // "header" | "card"
    // header
    eyebrow: string
    titleA: string
    titleB: string
    subtitle: string
    // card
    link?: string
    year: string
    label: string
    caption: string
    image?: Img
    usePhoto: boolean
    delay: number
    accent: string
    style?: React.CSSProperties
}

const CARD_CSS = `
.th-page{height:100%}
.th-card{position:relative;display:block;width:100%;height:100%;min-height:300px;border-radius:24px;overflow:hidden;isolation:isolate;text-decoration:none;color:#fff;background:${DARK}}
.th-card .mr-photo{position:absolute;inset:0;z-index:-2}
.th-shade{position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,rgba(16,16,17,0) 38%,rgba(16,16,17,.78) 100%);pointer-events:none}
.th-year{position:absolute;right:22px;top:12px;font-family:${DISPLAY};font-weight:700;font-size:120px;line-height:1;letter-spacing:-.06em;color:${LAVENDER};opacity:.9;pointer-events:none;user-select:none}
.th-foot{position:absolute;left:0;right:0;bottom:0;display:flex;align-items:flex-end;justify-content:space-between;gap:16px;padding:26px 26px 26px 28px}
.th-text{display:flex;flex-direction:column;gap:10px;min-width:0}
.th-cap{font-family:${MONO};font-size:11.5px;letter-spacing:.08em;text-transform:uppercase;color:${LAVENDER}}
.th-label{font-family:${DISPLAY};font-weight:700;font-size:40px;line-height:1;letter-spacing:-.045em;color:#fff}
.th-go{display:flex;align-items:center;justify-content:center;width:52px;height:52px;flex:0 0 auto;border-radius:14px;background:#fff;color:${DARK};transition:background-color .3s ease,color .3s ease}
.th-go svg{transform:rotate(-45deg);transition:transform .35s cubic-bezier(.2,.7,.2,1)}
@media (hover:hover){.th-card:hover .th-go{background:var(--mr-accent);color:#fff}.th-card:hover .th-go svg{transform:none}}
.th-card:focus-visible{outline:2px solid var(--mr-accent);outline-offset:3px}
${at(420, `.th-card{min-height:260px;border-radius:20px}.th-year{font-size:88px;right:16px}.th-foot{padding:20px}.th-label{font-size:30px}.th-go{width:46px;height:46px;border-radius:12px}`)}
`

function Card(props: Props) {
    const src = props.image && props.image.src ? props.image : props.usePhoto ? { src: GROUP_PHOTO, alt: props.label } : undefined
    const delay = 0.12 + Math.min(Math.max(props.delay || 0, 0), 1.5) * 0.2
    return (
        <Page accent={props.accent} css={CARD_CSS} className="th-page" style={props.style}>
            <a className="th-card mr-zoom mr-rise" href={props.link || undefined} aria-label={props.label} style={{ animationDelay: `${delay}s` }}>
                {src ? (
                    <Photo image={src} sizes="(max-width: 700px) 100vw, 540px" />
                ) : (
                    <>
                        <Contours />
                        {props.year ? (
                            <span className="th-year" aria-hidden>
                                {props.year}
                            </span>
                        ) : null}
                    </>
                )}
                <div className="th-shade" aria-hidden />
                <div className="th-foot">
                    <div className="th-text">
                        {props.caption ? <span className="th-cap">{props.caption}</span> : null}
                        <span className="th-label">{props.label}</span>
                    </div>
                    <span className="th-go" aria-hidden>
                        <Arrow size={20} />
                    </span>
                </div>
            </a>
        </Page>
    )
}

function Header(props: Props) {
    const titleB = (props.titleB || "").trim()
    const accentWords = titleB ? titleB.split(/\s+/).length : 0
    return (
        <Page accent={props.accent} style={props.style}>
            <Intro eyebrow={props.eyebrow} title={[props.titleA, titleB].filter(Boolean).join(" ")} accentWords={accentWords} text={props.subtitle} />
        </Page>
    )
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any
 * @framerIntrinsicWidth 520
 * @framerIntrinsicHeight 340
 */
export default function TeamHub(rawProps: Props) {
    const props = freshCopy(rawProps)
    if (props.mode === "card") return <Card {...props} />
    return <Header {...props} />
}

TeamHub.defaultProps = {
    mode: "header",
    eyebrow: "Marinor NTNU",
    titleA: "Our",
    titleB: "Team",
    subtitle: "The students behind Marinor NTNU. Choose a year to see who was on the team.",
    year: "2025",
    label: "Team 2025",
    caption: "Founding season",
    usePhoto: true,
    delay: 0.9,
    accent: "rgb(124, 70, 156)",
}

addPropertyControls(TeamHub, {
    mode: {
        type: ControlType.Enum,
        title: "Mode",
        options: ["header", "card"],
        optionTitles: ["Header", "Card"],
    },
    eyebrow: { type: ControlType.String, title: "Eyebrow", hidden: (p: any) => p.mode !== "header" },
    titleA: { type: ControlType.String, title: "Title (dark)", hidden: (p: any) => p.mode !== "header" },
    titleB: { type: ControlType.String, title: "Title (accent)", hidden: (p: any) => p.mode !== "header" },
    subtitle: { type: ControlType.String, title: "Subtitle", displayTextArea: true, hidden: (p: any) => p.mode !== "header" },
    link: { type: ControlType.Link, title: "Link", hidden: (p: any) => p.mode !== "card" },
    year: { type: ControlType.String, title: "Year", hidden: (p: any) => p.mode !== "card" },
    label: { type: ControlType.String, title: "Label", hidden: (p: any) => p.mode !== "card" },
    caption: { type: ControlType.String, title: "Tag", hidden: (p: any) => p.mode !== "card" },
    image: { type: ControlType.ResponsiveImage, title: "Image", hidden: (p: any) => p.mode !== "card" },
    usePhoto: {
        type: ControlType.Boolean,
        title: "Group Photo",
        description: "Use the Team 2025 group photo when no image is set",
        hidden: (p: any) => p.mode !== "card",
    },
    delay: { type: ControlType.Number, title: "Delay", min: 0, max: 3, step: 0.05, hidden: (p: any) => p.mode !== "card" },
    accent: { type: ControlType.Color, title: "Accent" },
})
