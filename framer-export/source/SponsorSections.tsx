import * as React from "react"
import { SectionHead, Reveal, Photo, Stats as StatRow, cx, at, BP, fluid, DISPLAY, DARK, MONO } from "./SiteKit.tsx"
import type { Img } from "./SiteKit.tsx"
import { DEFAULT_BENEFITS, DEFAULT_STATS } from "./SponsorKit.tsx"
import type { Benefit, Stat } from "./SponsorKit.tsx"

/* ================================================================
 Want to sponsor us – statement, numbers and what a partner gets
 ================================================================ */

export const SPONSOR_SECTIONS_CSS = `
.ss-statement{margin:0 auto;max-width:1040px;text-align:center;font-family:${DISPLAY};font-weight:700;font-size:${fluid(28, 4.2, 58)};line-height:1.1;letter-spacing:-.04em;color:rgba(16,16,17,.34);text-wrap:balance}
.ss-statement b{font-weight:700;color:${DARK}}
.sb-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
.sb-card{position:relative;display:flex;flex-direction:column;justify-content:space-between;gap:28px;min-height:260px;padding:26px 26px 28px;border-radius:20px;background:#fff;border:1px solid rgba(16,16,17,.07);overflow:hidden;isolation:isolate}
.sb-card.is-photo{color:#fff;background:${DARK};border-color:${DARK};min-height:360px}
.sb-card.is-wide{grid-column:span 2}
.sb-card .mr-photo{position:absolute;inset:0;z-index:-2}
.sb-shade{position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,rgba(12,12,16,.1) 0%,rgba(12,12,16,.82) 100%)}
.sb-top{display:flex;align-items:center;gap:14px;font-family:${MONO};font-size:12px;letter-spacing:.06em;color:var(--mr-accent)}
.sb-top::after{content:"";flex:1 1 auto;height:1px;background:currentColor;opacity:.22}
.sb-card.is-photo .sb-top{color:rgba(255,255,255,.85)}
.sb-card h3{margin:0 0 10px}
.sb-card.is-photo h3{color:#fff}
.sb-card.is-wide h3{font-size:${fluid(26, 2.6, 36)}}
.sb-card p{margin:0}
.sb-card.is-photo p{color:rgba(255,255,255,.84);max-width:520px}
${at(BP.lg, `.sb-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.sb-card.is-wide{grid-column:span 2}`)}
${at(BP.sm, `.sb-grid{grid-template-columns:minmax(0,1fr);gap:12px}.sb-card,.sb-card.is-wide{grid-column:auto;min-height:0;padding:22px 20px 24px;gap:22px}.sb-card.is-photo{min-height:320px}`)}
`

const clean = (s: string) => s.toLowerCase().replace(/[^a-z0-9æøå]/g, "")

/* One big sentence – the chosen words are set in black, the rest lighter */
export function Statement({ text, highlight }: { text: string; highlight: string }) {
    const words = (text || "").split(/\s+/).filter(Boolean)
    const hl = new Set((highlight || "").split(/\s+/).map(clean).filter(Boolean))
    return (
        <Reveal>
            <p className="ss-statement">
                {words.map((w, i) => (
                    <React.Fragment key={i}>
                        {i > 0 ? " " : null}
                        {hl.has(clean(w)) ? <b>{w}</b> : w}
                    </React.Fragment>
                ))}
            </p>
        </Reveal>
    )
}

export function Stats({ stats }: { stats: Stat[] }) {
    const list = stats && stats.length ? stats : DEFAULT_STATS
    return <StatRow items={list.map((s) => ({ value: s.value, suffix: s.suffix, label: s.label }))} />
}

/* Five cards: card 1 is a wide photo card, card 5 a photo card – they fill two neat rows on desktop */
export function Benefits(props: { eyebrow: string; title: string; text: string; items: Benefit[]; image1?: Img; image2?: Img }) {
    const list = props.items && props.items.length ? props.items : DEFAULT_BENEFITS
    const photoFor = (i: number) => (i === 0 ? props.image1 : i === 4 ? props.image2 : undefined)
    return (
        <section id="sponsor-benefits" className="mr-sec" style={{ scrollMarginTop: 100 }}>
            <SectionHead eyebrow={props.eyebrow} title={props.title} text={props.text} />
            <Reveal className="sb-grid">
                {list.map((b, i) => {
                    const photo = photoFor(i)
                    const hasPhoto = !!(photo && photo.src)
                    return (
                        <div key={i} className={cx("sb-card", hasPhoto && "is-photo", hasPhoto && i === 0 && "is-wide")}>
                            {hasPhoto ? (
                                <>
                                    <Photo image={photo} alt="" sizes="(max-width: 600px) 100vw, 66vw" />
                                    <div className="sb-shade" aria-hidden />
                                </>
                            ) : null}
                            <div className="sb-top">{String(i + 1).padStart(2, "0")}</div>
                            <div>
                                <h3 className="mr-h3">{b.title}</h3>
                                <p className="mr-text">{b.text}</p>
                            </div>
                        </div>
                    )
                })}
            </Reveal>
        </section>
    )
}
