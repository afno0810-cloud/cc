import * as React from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { SectionHead, Reveal, Photo, useUI, cx, at, BP, MONO, DISPLAY, DARK } from "./ArgusKit.tsx"
import type { Milestone } from "./ArgusKit.tsx"
import { DEFAULT_TIMELINE, TIMELINE_FALLBACK, hasSrc } from "./ArgusKit.tsx"

/* ================================================================
 Project Argus – the build, from the first hull to launch day.
 A line down the middle fills up while you scroll.
 ================================================================ */

export const ARGUS_JOURNEY_CSS = `
.aj{position:relative;display:flex;flex-direction:column;gap:72px}
.aj-line{position:absolute;top:0;bottom:0;left:calc(50% - 1px);width:2px;border-radius:2px;background:rgba(124,70,156,.16);overflow:hidden}
.aj-line div{position:absolute;inset:0;transform-origin:top;background:var(--mr-accent)}
.aj-row{display:grid;grid-template-columns:minmax(0,1fr) 72px minmax(0,1fr);align-items:center}
.aj-dot{justify-self:center;width:16px;height:16px;border-radius:99px;background:#fff;border:3px solid var(--mr-accent);box-shadow:0 0 0 6px rgba(124,70,156,.12)}
.aj-card{display:flex;flex-direction:column;gap:12px;padding:26px;border-radius:20px;background:#fff;border:1px solid rgba(16,16,17,.07)}
.aj-card.is-right{align-items:flex-end;text-align:right}
.aj-date{font-family:${MONO};font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--mr-accent)}
.aj-card h3{margin:0;font-family:${DISPLAY};font-weight:700;font-size:clamp(22px,2.3vw,30px);font-size:clamp(22px,2.3cqi,30px);line-height:1.1;letter-spacing:-.035em;color:${DARK}}
.aj-photo{width:100%;aspect-ratio:4/3;border-radius:20px}
${at(BP.md, `.aj{gap:44px}.aj-line{left:7px}.aj-row{grid-template-columns:16px minmax(0,1fr);gap:0 22px;align-items:start}.aj-row>.aj-dot{grid-column:1;grid-row:1 / span 2;margin-top:26px}.aj-row>.aj-photo,.aj-row>.aj-cardwrap{grid-column:2}.aj-row>.aj-photo{grid-row:1}.aj-row>.aj-cardwrap{grid-row:2;margin-top:12px}.aj-card.is-right{align-items:flex-start;text-align:left}`)}
${at(BP.sm, `.aj-card{padding:20px 18px}.aj-photo{border-radius:16px}`)}
`

function Card({ m, right }: { m: Milestone; right: boolean }) {
    return (
        <div className="aj-cardwrap">
            <div className={cx("aj-card", right && "is-right")}>
                <span className="aj-date">{m.date}</span>
                <h3>{m.title}</h3>
                <p className="mr-text">{m.text}</p>
            </div>
        </div>
    )
}

export function Journey({ eyebrow, title, text, items }: { eyebrow: string; title: string; text: string; items: Milestone[] }) {
    const { still } = useUI()
    const list = items && items.length ? items : DEFAULT_TIMELINE
    const ref = React.useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] })
    const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

    return (
        <section id="argus-journey" className="mr-sec" style={{ scrollMarginTop: 100 }}>
            <SectionHead eyebrow={eyebrow} title={title} text={text} center />
            <div ref={ref} className="aj">
                <div className="aj-line" aria-hidden>
                    <motion.div style={{ scaleY: still ? 1 : fill }} />
                </div>
                {list.map((m, i) => {
                    const img = hasSrc(m.image) ? m.image : TIMELINE_FALLBACK[i % TIMELINE_FALLBACK.length]
                    const flip = i % 2 === 1
                    const photo = <Photo key="p" image={img} alt={m.title} className="aj-photo" sizes="(max-width: 860px) 90vw, 44vw" />
                    const card = <Card key="c" m={m} right={!flip} />
                    return (
                        <Reveal key={i} className="aj-row">
                            {flip ? photo : card}
                            <span className="aj-dot" aria-hidden />
                            {flip ? card : photo}
                        </Reveal>
                    )
                })}
            </div>
        </section>
    )
}
