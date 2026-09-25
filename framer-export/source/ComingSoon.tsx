import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Page, Label, Button, Contours, at, BP, fluid, DISPLAY, MONO, LAVENDER } from "./SiteKit.tsx"
import { freshCopy } from "./CopyUpdates.tsx"

/* ================================================================
 Coming Soon – placeholder block for pages that are not ready yet
 (Team 2026, Proteus …). Dark panel, big title, one small blinking light.
 ================================================================ */

interface Props {
    eyebrow: string
    kicker: string
    title: string
    subtitle: string
    note: string
    buttonLabel: string
    buttonLink: string
    accent: string
    minHeight: number
    style?: React.CSSProperties
}

const CSS = `
.cs{display:flex;align-items:center;justify-content:center;min-height:var(--cs-min,620px);padding:96px 56px;text-align:center}
.cs-in{display:flex;flex-direction:column;align-items:center;gap:22px;max-width:980px}
.cs-kicker{font-family:${DISPLAY};font-weight:600;font-size:${fluid(19, 2.4, 30)};line-height:1.15;letter-spacing:-.03em;color:${LAVENDER}}
.cs-title{margin:0;font-family:${DISPLAY};font-weight:700;font-size:${fluid(46, 10.5, 132)};line-height:.92;letter-spacing:-.055em;color:#fff;text-wrap:balance}
.cs-in .mr-lead{max-width:560px}
.cs-note{display:inline-flex;align-items:center;gap:10px;font-family:${MONO};font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.6)}
.cs-note i{width:7px;height:7px;border-radius:99px;background:${LAVENDER};animation:cs-blink 2.4s ease-in-out infinite}
@keyframes cs-blink{0%,100%{opacity:1}50%{opacity:.2}}
.mr-still .cs-note i{animation:none}
@media (prefers-reduced-motion:reduce){.cs-note i{animation:none}}
${at(BP.md, `.cs{min-height:min(var(--cs-min,620px),560px);padding:80px 36px}`)}
${at(BP.sm, `.cs{min-height:min(var(--cs-min,620px),500px);padding:60px 20px}.cs-in{gap:18px}`)}
`

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 * @framerIntrinsicWidth 1240
 */
export default function ComingSoon(rawProps: Props) {
    const props = freshCopy(rawProps)
    const min = Math.max(300, Math.min(1200, props.minHeight || 620))
    return (
        <Page accent={props.accent} css={CSS} style={props.style}>
            <section className="cs mr-panel mr-dark mr-on-dark" style={{ ["--cs-min" as any]: `${min}px` } as React.CSSProperties}>
                <Contours />
                <div className="cs-in">
                    {props.eyebrow ? (
                        <div className="mr-rise">
                            <Label light>{props.eyebrow}</Label>
                        </div>
                    ) : null}
                    {props.kicker ? (
                        <span className="cs-kicker mr-rise" style={{ animationDelay: "0.06s" }}>
                            {props.kicker}
                        </span>
                    ) : null}
                    <h1 className="cs-title mr-rise" style={{ animationDelay: "0.12s" }}>
                        {props.title}
                    </h1>
                    {props.subtitle ? (
                        <p className="mr-lead mr-rise" style={{ animationDelay: "0.2s" }}>
                            {props.subtitle}
                        </p>
                    ) : null}
                    {props.note ? (
                        <span className="cs-note mr-rise" style={{ animationDelay: "0.26s" }}>
                            <i aria-hidden />
                            {props.note}
                        </span>
                    ) : null}
                    {props.buttonLabel ? (
                        <div className="mr-btns mr-rise" style={{ animationDelay: "0.32s", marginTop: 6 }}>
                            <Button href={props.buttonLink} variant="light">
                                {props.buttonLabel}
                            </Button>
                        </div>
                    ) : null}
                </div>
            </section>
        </Page>
    )
}

ComingSoon.defaultProps = {
    eyebrow: "Marinor NTNU",
    kicker: "Project info",
    title: "Coming soon",
    subtitle: "This page is not ready yet.",
    note: "In progress",
    buttonLabel: "",
    buttonLink: "/projects",
    accent: "rgb(124, 70, 156)",
    minHeight: 620,
}

addPropertyControls(ComingSoon, {
    eyebrow: { type: ControlType.String, title: "Eyebrow" },
    kicker: { type: ControlType.String, title: "Small Line" },
    title: { type: ControlType.String, title: "Big Title" },
    subtitle: { type: ControlType.String, title: "Text", displayTextArea: true },
    note: { type: ControlType.String, title: "Small Note" },
    buttonLabel: { type: ControlType.String, title: "Button Label" },
    buttonLink: { type: ControlType.String, title: "Button Link" },
    accent: { type: ControlType.Color, title: "Accent" },
    minHeight: { type: ControlType.Number, title: "Min Height", min: 300, max: 1200, step: 10 },
})
