import * as React from "react"
import { SectionHead, Reveal, Button, CtaPanel, at, BP, MONO, DISPLAY } from "./ArgusKit.tsx"
import type { Goal } from "./ArgusKit.tsx"
import { DEFAULT_GOALS } from "./ArgusKit.tsx"

/* ================================================================
 Project Argus – goals and the closing call-out
 ================================================================ */

export const ARGUS_END_CSS = `
.ae-goals{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
.ae-goal{display:flex;flex-direction:column;gap:14px;padding:28px 26px 30px;border-radius:20px;background:#fff;border:1px solid rgba(16,16,17,.07);border-top:3px solid var(--mr-accent)}
.ae-goal span{font-family:${MONO};font-size:12px;letter-spacing:.06em;color:var(--mr-accent)}
.ae-goal h3{font-family:${DISPLAY}}
${at(BP.md, `.ae-goals{grid-template-columns:minmax(0,1fr);gap:12px}`)}
${at(BP.sm, `.ae-goal{padding:22px 20px 24px}`)}
`

export function Goals({ eyebrow, title, items }: { eyebrow: string; title: string; items: Goal[] }) {
    const list = items && items.length ? items : DEFAULT_GOALS
    return (
        <section className="mr-sec">
            <SectionHead eyebrow={eyebrow} title={title} center />
            <Reveal className="ae-goals">
                {list.map((g, i) => (
                    <div key={i} className="ae-goal">
                        <span>Goal {String(i + 1).padStart(2, "0")}</span>
                        <h3 className="mr-h3">{g.title}</h3>
                        <p className="mr-text">{g.text}</p>
                    </div>
                ))}
            </Reveal>
        </section>
    )
}

export function CTA({
    title,
    text,
    primaryLabel,
    primaryLink,
    secondaryLabel,
    secondaryLink,
}: {
    title: string
    text: string
    primaryLabel: string
    primaryLink: string
    secondaryLabel: string
    secondaryLink: string
}) {
    return (
        <CtaPanel eyebrow="Project Argus" title={title} text={text} left>
            {primaryLabel ? (
                <Button href={primaryLink} variant="light" newTab>
                    {primaryLabel}
                </Button>
            ) : null}
            {secondaryLabel ? (
                <Button href={secondaryLink} variant="ghost">
                    {secondaryLabel}
                </Button>
            ) : null}
        </CtaPanel>
    )
}
