import * as React from "react"
import { SectionHead, Reveal, Photo, Label, Arrow, at, BP, fluid, DISPLAY, BODY, DARK } from "./SiteKit.tsx"
import type { Img } from "./SiteKit.tsx"

/* ================================================================
 Home – the two ways to get involved (students / companies)
 ================================================================ */

export const LIFE_CSS = `
.hl-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}
.hl-card{position:relative;display:flex;flex-direction:column;justify-content:space-between;height:540px;border-radius:24px;overflow:hidden;color:#fff;text-decoration:none;background:${DARK};isolation:isolate}
.hl-card .mr-photo{position:absolute;inset:0;z-index:-2;background:rgb(40,44,56)}
.hl-shade{position:absolute;inset:0;z-index:-1;pointer-events:none;background:linear-gradient(180deg,rgba(10,12,16,.36) 0%,rgba(10,12,16,.04) 28%,rgba(10,12,16,.12) 48%,rgba(10,12,16,.62) 72%,rgba(10,12,16,.88) 100%)}
.hl-top{display:flex;justify-content:space-between;align-items:center;padding:26px 28px 0}
.hl-go{display:flex;align-items:center;justify-content:center;width:52px;height:52px;border-radius:14px;background:#fff;color:${DARK};transition:transform .35s cubic-bezier(.2,.7,.2,1)}
.hl-body{display:flex;flex-direction:column;align-items:flex-start;gap:14px;padding:0 30px 32px}
.hl-body h3{margin:0;font-family:${DISPLAY};font-weight:700;font-size:${fluid(38, 4.2, 60)};line-height:1;letter-spacing:-.045em;color:#fff}
.hl-body p{margin:0;max-width:440px;font-family:${BODY};font-weight:500;font-size:16.5px;line-height:1.5;color:rgba(255,255,255,.86)}
.hl-body .mr-btn{margin-top:6px;pointer-events:none}
@media (hover:hover){.hl-card:hover .hl-go{transform:rotate(-45deg)}}
.hl-card:focus-visible{outline:2px solid var(--mr-accent);outline-offset:3px}
${at(BP.md, `.hl-grid{grid-template-columns:minmax(0,1fr);gap:14px}.hl-card{height:500px}`)}
${at(BP.sm, `.hl-card{height:460px;border-radius:20px}.hl-top{padding:20px 20px 0}.hl-go{width:46px;height:46px}.hl-body{padding:0 20px 24px;gap:12px}.hl-body h3{font-size:38px}.hl-body p{font-size:15px}`)}
`

type JoinCard = { eyebrow: string; title: string; text: string; label: string; link: string; image?: Img }

export function WaysIn(props: { eyebrow: string; title: string; cards: JoinCard[] }) {
    return (
        <section className="mr-sec">
            <SectionHead eyebrow={props.eyebrow} title={props.title} center />
            <Reveal className="hl-grid">
                {props.cards.map((c, i) => (
                    <a key={i} className="hl-card mr-zoom" href={c.link}>
                        <Photo image={c.image} alt={c.title} sizes="(max-width: 860px) 100vw, 50vw" />
                        <div className="hl-shade" aria-hidden />
                        <div className="hl-top">
                            <Label light>{c.eyebrow}</Label>
                            <span className="hl-go" aria-hidden>
                                <Arrow size={20} />
                            </span>
                        </div>
                        <div className="hl-body">
                            <h3>{c.title}</h3>
                            {c.text ? <p>{c.text}</p> : null}
                            <span className="mr-btn mr-btn--light">
                                <span>{c.label}</span>
                                <Arrow />
                            </span>
                        </div>
                    </a>
                ))}
            </Reveal>
        </section>
    )
}
