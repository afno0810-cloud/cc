import * as React from "react"
import { Label, Button, Photo, Reveal, at, BP, fluid, PAGE_BG, DARK, DISPLAY } from "./SiteKit.tsx"

/* ================================================================
 Home – who we are
 Text on the left, two photos on the right. The chosen words in the
 paragraph are set in full black, the rest a little lighter.
 ================================================================ */

export const ABOUT_CSS = `
.ha{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:72px;align-items:center}
.ha-copy{display:flex;flex-direction:column;align-items:flex-start;gap:26px}
.ha-copy .mr-h2{max-width:560px}
.ha-para{margin:0;max-width:600px;font-family:${DISPLAY};font-weight:600;font-size:${fluid(21, 2.1, 30)};line-height:1.3;letter-spacing:-.025em;color:rgba(16,16,17,.46)}
.ha-para b{font-weight:600;color:${DARK}}
.ha-collage{position:relative;height:580px}
.ha-a{position:absolute;right:0;top:0;width:86%;height:72%;border-radius:22px}
.ha-b{position:absolute;left:0;bottom:0;width:56%;height:46%;border-radius:18px;box-shadow:0 0 0 7px ${PAGE_BG}}
.ha-badge{position:absolute;left:calc(14% + 16px);top:16px;max-width:calc(86% - 32px)}
.ha-chip{position:absolute;right:16px;bottom:calc(28% + 16px);display:inline-flex;align-items:center;gap:10px;padding:11px 16px;border-radius:12px;background:${DARK};color:#fff;font-weight:600;font-size:14.5px;white-space:nowrap}
${at(BP.lg, `.ha{gap:48px}.ha-collage{height:520px}`)}
${at(BP.md, `.ha{grid-template-columns:minmax(0,1fr);gap:48px}.ha-collage{height:500px}`)}
${at(BP.sm, `.ha-collage{height:400px}.ha-a{width:90%;height:70%;border-radius:18px}.ha-b{width:58%;height:44%;border-radius:14px;box-shadow:0 0 0 5px ${PAGE_BG}}.ha-badge{left:calc(10% + 12px);top:12px;max-width:calc(90% - 24px)}.ha-badge.mr-tag{height:auto;min-height:28px;padding:6px 10px;white-space:normal;text-wrap:balance;line-height:1.35;font-size:10.5px;letter-spacing:.04em}.ha-chip{right:12px;bottom:calc(30% + 12px);font-size:13.5px;padding:10px 14px}`)}
`

const clean = (s: string) => s.toLowerCase().replace(/[^a-z0-9æøåäöü-]/g, "")

export function About(props: {
    eyebrow: string
    title: string
    text: string
    highlight: string
    linkLabel: string
    link: string
    photoA: string
    photoB: string
    badge: string
    chip: string
}) {
    const hi = new Set((props.highlight || "").split(/\s+/).map(clean).filter(Boolean))
    const words = (props.text || "").split(/\s+/).filter(Boolean)
    const badge = (props.badge || "").replace(/[\s•·]+$/, "")

    return (
        <section className="ha">
            <div className="ha-copy">
                <Reveal className="mr-head">
                    <Label>{props.eyebrow}</Label>
                    <h2 className="mr-h2">{props.title}</h2>
                </Reveal>
                <Reveal>
                    <p className="ha-para">
                        {words.map((w, i) => (
                            <React.Fragment key={i}>
                                {i > 0 ? " " : null}
                                {hi.has(clean(w)) ? <b>{w}</b> : w}
                            </React.Fragment>
                        ))}
                    </p>
                </Reveal>
                <Reveal className="mr-btns">
                    <Button href={props.link} variant="dark">
                        {props.linkLabel}
                    </Button>
                    <Button href="/team" variant="outline">
                        Meet the team
                    </Button>
                </Reveal>
            </div>

            <Reveal className="ha-collage">
                <Photo src={props.photoA} alt="The Marinor NTNU team" className="ha-a" sizes="(max-width: 860px) 92vw, 44vw" />
                <Photo src={props.photoB} alt="Building the hull in the workshop" className="ha-b" sizes="(max-width: 860px) 56vw, 26vw" />
                {badge ? <span className="ha-badge mr-tag mr-tag--glass">{badge}</span> : null}
                {props.chip ? (
                    <span className="ha-chip">
                        <i className="mr-dot mr-dot--live" />
                        {props.chip}
                    </span>
                ) : null}
            </Reveal>
        </section>
    )
}
