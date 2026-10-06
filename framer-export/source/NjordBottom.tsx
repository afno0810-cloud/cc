import * as React from "react"
import { SectionHead, Reveal, Button, CtaPanel, at, BP, MONO } from "./NjordKit.tsx"
import type { Item } from "./NjordKit.tsx"

/* ================================================================
 Njord / RoboBoat – the course, how teams are judged, closing call-out
 ================================================================ */

export const NJORD_BOTTOM_CSS = `
.nc-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0 28px}
.nc-item{display:flex;flex-direction:column;gap:10px;padding:22px 0 4px;border-top:1px solid rgba(16,16,17,.16)}
.nc-item b{font-family:${MONO};font-size:12px;font-weight:500;letter-spacing:.06em;color:var(--mr-accent)}
.nc-item h3{font-size:20px}
.nj-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.nj-item{display:flex;gap:16px;padding:22px 22px 24px;border-radius:18px;background:#fff;border:1px solid rgba(16,16,17,.07)}
.nj-item b{flex:0 0 auto;padding-top:3px;font-family:${MONO};font-size:12px;font-weight:500;letter-spacing:.04em;color:var(--mr-accent)}
.nj-item h3{font-size:19px;margin-bottom:8px}
${at(BP.lg, `.nc-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px 28px}.nj-grid{grid-template-columns:repeat(2,minmax(0,1fr))}`)}
${at(BP.sm, `.nc-grid{grid-template-columns:minmax(0,1fr);gap:0}.nj-grid{grid-template-columns:minmax(0,1fr);gap:10px}.nj-item{padding:18px 18px 20px}`)}
`

export function Course({ title, text, items }: { title: string; text: string; items: Item[] }) {
    return (
        <section className="mr-sec">
            <SectionHead title={title} text={text} />
            <Reveal className="nc-grid">
                {items.map((c, i) => (
                    <div key={i} className="nc-item">
                        <b>{String(i + 1).padStart(2, "0")}</b>
                        <h3 className="mr-h3">{c.title}</h3>
                        <p className="mr-text">{c.text}</p>
                    </div>
                ))}
            </Reveal>
        </section>
    )
}

export function Judging({ title, text, items }: { title: string; text: string; items: Item[] }) {
    return (
        <section className="mr-sec">
            <SectionHead title={title} text={text} />
            <Reveal className="nj-grid">
                {items.map((j, i) => (
                    <div key={i} className="nj-item">
                        <b>{String(i + 1).padStart(2, "0")}</b>
                        <div>
                            <h3 className="mr-h3">{j.title}</h3>
                            <p className="mr-text">{j.text}</p>
                        </div>
                    </div>
                ))}
            </Reveal>
        </section>
    )
}

export function CTA(props: { eyebrow?: string; title: string; text: string; primary: string; primaryLink: string; secondary: string; secondaryLink: string }) {
    return (
        <CtaPanel eyebrow={props.eyebrow || "Njord Challenge"} title={props.title} text={props.text} left>
            {props.primary ? (
                <Button href={props.primaryLink} variant="light">
                    {props.primary}
                </Button>
            ) : null}
            {props.secondary ? (
                <Button href={props.secondaryLink} variant="ghost">
                    {props.secondary}
                </Button>
            ) : null}
        </CtaPanel>
    )
}
