import * as React from "react"
import { Page, SectionHead, Reveal, Photo, Button, at, BP, MONO, DISPLAY, BODY, LAVENDER } from "./SiteKit.tsx"
import type { Img } from "./SiteKit.tsx"

/* ================================================================
 Home – "How we built it": the Argus build as a simple photo log.
 Not placed on any page right now – kept so it can be added again.
 ================================================================ */

export type BuildStep = { date: string; title: string; text: string; image?: Img }

const CSS = `
.hb{display:flex;flex-direction:column;gap:48px;padding:clamp(40px,6vw,96px);padding:clamp(40px,6cqi,96px)}
.hb-list{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.hb-step{display:flex;flex-direction:column;gap:12px}
.hb-photo{aspect-ratio:4 / 3;border-radius:18px;margin-bottom:6px}
.hb-date{font-family:${MONO};font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:${LAVENDER}}
.hb-step h3{margin:0;font-family:${DISPLAY};font-weight:700;font-size:24px;line-height:1.1;letter-spacing:-.035em;color:#fff}
.hb-step p{margin:0;font-family:${BODY};font-weight:500;font-size:15.5px;line-height:1.5;color:rgba(255,255,255,.72)}
${at(BP.md, `.hb-list{grid-template-columns:minmax(0,1fr);gap:36px}`)}
`

export function BuildStory(props: { eyebrow: string; title: string; text: string; tags?: string; steps: BuildStep[]; linkLabel: string; link: string; style?: React.CSSProperties }) {
    const steps = props.steps || []
    return (
        <Page css={CSS} style={props.style}>
            <section id="argus-build" className="hb mr-panel mr-dark mr-on-dark">
                <SectionHead eyebrow={props.eyebrow} title={props.title} text={props.text} light />
                <Reveal className="hb-list">
                    {steps.map((s, i) => (
                        <article key={i} className="hb-step">
                            <Photo image={s.image} className="hb-photo" sizes="(max-width: 860px) 100vw, 33vw" />
                            <span className="hb-date">{s.date}</span>
                            <h3>{s.title}</h3>
                            <p>{s.text}</p>
                        </article>
                    ))}
                </Reveal>
                {props.link && props.linkLabel ? (
                    <div className="mr-btns">
                        <Button href={props.link} variant="light">
                            {props.linkLabel}
                        </Button>
                    </div>
                ) : null}
            </section>
        </Page>
    )
}
