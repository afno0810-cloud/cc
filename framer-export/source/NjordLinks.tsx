import * as React from "react"
import { SectionHead, Reveal, Arrow, Contours, cx, at, BP, MONO, DISPLAY, BODY, DARK, GRAY, LAVENDER } from "./NjordKit.tsx"

/* ================================================================
 Links to the competition's own website.
 The first link is shown as a big dark card over the full width.
 ================================================================ */

export type NjordLink = { title: string; text: string; url: string }

export const NJORD_LINKS: NjordLink[] = [
    {
        title: "njordchallenge.com",
        text: "The official website of Njord: The Autonomous Ship Challenge.",
        url: "https://www.njordchallenge.com/",
    },
    {
        title: "The 2026 challenge",
        text: "Read more about this year's competition on Njord's own page.",
        url: "https://www.njordchallenge.com/2026-challenge/2026-challenge",
    },
    {
        title: "Teams 2026",
        text: "All the teams that signed up for 2026, Marinor included.",
        url: "https://www.njordchallenge.com/teams/2026",
    },
    {
        title: "Scores 2026",
        text: "The score list from the 2026 challenge, published by Njord (PDF).",
        url: "https://cdn.prod.website-files.com/5d2cc41999a6902b5b3973b6/6a86e963cd66c0b8f2a5a59b_Njordchallnge2026score.pdf",
    },
]

export const NJORD_LINKS_CSS = `
.nl-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.nl-card{position:relative;display:flex;flex-direction:column;justify-content:space-between;gap:26px;min-height:210px;padding:24px 24px 22px;border-radius:20px;background:#fff;border:1px solid rgba(16,16,17,.07);color:${DARK};text-decoration:none;overflow:hidden;isolation:isolate;transition:border-color .3s ease}
.nl-card.is-big{grid-column:1 / -1;min-height:250px;padding:32px 32px 30px;background:${DARK};border-color:${DARK};color:#fff}
.nl-top{display:flex;justify-content:space-between;align-items:flex-start;gap:12px}
.nl-host{min-width:0;overflow-wrap:anywhere;font-family:${MONO};font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--mr-accent)}
.nl-card.is-big .nl-host{color:${LAVENDER}}
.nl-go{display:flex;flex:0 0 auto;align-items:center;justify-content:center;width:42px;height:42px;border-radius:12px;border:1px solid rgba(16,16,17,.14);transition:background-color .3s ease,color .3s ease,border-color .3s ease}
.nl-card.is-big .nl-go{border-color:rgba(255,255,255,.35)}
.nl-title{font-family:${DISPLAY};font-weight:700;font-size:24px;line-height:1.05;letter-spacing:-.035em}
.nl-card.is-big .nl-title{font-size:clamp(32px,4.2vw,58px);font-size:clamp(32px,4.2cqi,58px);letter-spacing:-.045em}
.nl-text{margin:8px 0 0;font-family:${BODY};font-weight:500;font-size:15.5px;line-height:1.45;color:${GRAY};max-width:520px}
.nl-card.is-big .nl-text{color:rgba(255,255,255,.72)}
@media (hover:hover){.nl-card:hover{border-color:rgba(124,70,156,.45)}.nl-card:hover .nl-go{background:var(--mr-accent);border-color:var(--mr-accent);color:#fff}.nl-card.is-big:hover .nl-go{background:#fff;border-color:#fff;color:${DARK}}}
.nl-card:focus-visible{outline:2px solid var(--mr-accent);outline-offset:3px}
${at(BP.lg, `.nl-grid{grid-template-columns:repeat(2,minmax(0,1fr))}`)}
${at(BP.sm, `.nl-grid{grid-template-columns:minmax(0,1fr);gap:10px}.nl-card{min-height:0;padding:20px 20px 20px}.nl-card.is-big{min-height:220px;padding:24px 20px 22px}`)}
`

/* File hosts (CDNs) say nothing to a visitor – show "PDF · Download" instead of the host */
const FILE_HOST = /^cdn\.|(^|\.)(website-files\.com|framerusercontent\.com|amazonaws\.com|cloudfront\.net|googleusercontent\.com)$/i

export function NjordLinks({ eyebrow, title, text, links }: { eyebrow: string; title: string; text: string; links?: NjordLink[] }) {
    const list = links && links.length ? links : NJORD_LINKS
    return (
        <section className="mr-sec">
            <SectionHead eyebrow={eyebrow} title={title} text={text} />
            <Reveal className="nl-grid">
                {list.map((l, i) => {
                    let host = ""
                    try {
                        host = new URL(l.url).hostname.replace("www.", "")
                    } catch (e) {
                        host = l.url
                    }
                    const isPdf = /\.pdf($|\?)/i.test(l.url)
                    const big = i === 0
                    return (
                        <a key={l.url + i} className={cx("nl-card", big && "is-big")} href={l.url} target="_blank" rel="noopener noreferrer">
                            {big ? <Contours /> : null}
                            <div className="nl-top">
                                <span className="nl-host">{isPdf ? (FILE_HOST.test(host) ? "PDF · Download" : "PDF · " + host) : host}</span>
                                <span className="nl-go" aria-hidden>
                                    <Arrow dir="out" />
                                </span>
                            </div>
                            <div>
                                <div className="nl-title">{l.title}</div>
                                <p className="nl-text">{l.text}</p>
                            </div>
                        </a>
                    )
                })}
            </Reveal>
        </section>
    )
}
