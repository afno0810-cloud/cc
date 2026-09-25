import * as React from "react"
import { Label, Button, Photo, Reveal, SectionHead, Stats as StatRow, at, BP, fluid, DISPLAY, BODY, MONO, DARK, PAGE_BG } from "./AboutKit.tsx"
import type { Img, Stat } from "./AboutKit.tsx"
import { STAT_DEFAULTS, FOUNDERS } from "./AboutKit.tsx"

/* ================================================================
 About – hero, one big sentence, who we are and the numbers
 ================================================================ */

export const ABOUT_TOP_CSS = `
.abh{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,1fr);gap:56px;align-items:center}
.abh-copy{display:flex;flex-direction:column;align-items:flex-start;gap:24px}
.abh-copy .mr-h1{font-size:${fluid(44, 6.4, 90)}}
.abh-copy .mr-h1 em{font-style:normal;color:var(--mr-accent)}
.abh-collage{position:relative;height:620px}
.abh-a{position:absolute;top:0;right:0;width:76%;height:66%;border-radius:22px}
.abh-b{position:absolute;left:0;bottom:0;width:56%;height:48%;border-radius:18px;box-shadow:0 0 0 7px ${PAGE_BG}}
.abh-c{position:absolute;right:4%;bottom:4%;width:32%;height:28%;border-radius:16px;box-shadow:0 0 0 6px ${PAGE_BG}}
.abh-badge{position:absolute;left:4%;top:9%}
.abs{margin:0 auto;max-width:1060px;text-align:center;font-family:${DISPLAY};font-weight:700;font-size:${fluid(28, 4.4, 62)};line-height:1.08;letter-spacing:-.045em;color:rgba(16,16,17,.34);text-wrap:balance}
.abs b{font-weight:700;color:${DARK}}
.abw{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:64px;align-items:center}
.abw-photos{position:relative;height:620px}
.abw-a{position:absolute;left:0;top:0;width:78%;height:80%;border-radius:22px}
.abw-b{position:absolute;right:0;bottom:0;width:48%;height:44%;border-radius:18px;box-shadow:0 0 0 7px ${PAGE_BG}}
.abw-copy{display:flex;flex-direction:column;gap:20px}
.abw-copy .mr-lead{max-width:none}
.abw-founders{display:flex;flex-direction:column;gap:12px;margin-top:6px}
.abw-founders>span{font-family:${MONO};font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--mr-accent)}
.abw-names{display:flex;flex-wrap:wrap;gap:8px}
.abw-name{display:inline-flex;align-items:center;gap:10px;padding:6px 14px 6px 6px;border-radius:12px;background:#fff;border:1px solid rgba(16,16,17,.07);font-family:${BODY};font-weight:600;font-size:14px;color:${DARK}}
.abw-name i{display:flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:8px;background:var(--mr-accent);color:#fff;font-style:normal;font-size:11.5px;letter-spacing:.02em}
${at(BP.lg, `.abh{gap:40px}.abh-collage{height:540px}.abw{gap:44px}.abw-photos{height:540px}`)}
${at(BP.md, `.abh,.abw{grid-template-columns:minmax(0,1fr);gap:40px}.abh-collage{height:480px}.abw-photos{height:460px;order:2}`)}
${at(BP.sm, `.abh-collage{height:380px}.abh-a{border-radius:18px}.abh-b{border-radius:14px;box-shadow:0 0 0 5px ${PAGE_BG}}.abh-c{border-radius:12px;box-shadow:0 0 0 4px ${PAGE_BG}}.abw-photos{height:380px}.abw-a{border-radius:18px}.abw-b{border-radius:14px;box-shadow:0 0 0 5px ${PAGE_BG}}.abw-name{font-size:13px}`)}
`

export function Hero(props: { eyebrow: string; title: string; highlight: number; text: string; imageA?: Img; imageB?: Img; imageC?: Img; badge: string; joinLink: string }) {
    const words = (props.title || "").split(/\s+/).filter(Boolean)
    const hl = Math.max(0, words.length - (props.highlight || 0))
    const plain = words.slice(0, hl).join(" ")
    const colored = words.slice(hl).join(" ")
    return (
        <section className="abh">
            <div className="abh-copy">
                <div className="mr-rise">
                    <Label>{props.eyebrow}</Label>
                </div>
                <h1 className="mr-h1 mr-rise" style={{ animationDelay: "0.08s" }}>
                    {plain}
                    {plain && colored ? " " : null}
                    {colored ? <em>{colored}</em> : null}
                </h1>
                {props.text ? (
                    <p className="mr-lead mr-rise" style={{ animationDelay: "0.16s" }}>
                        {props.text}
                    </p>
                ) : null}
                <div className="mr-btns mr-rise" style={{ animationDelay: "0.24s" }}>
                    <Button href={props.joinLink} variant="dark">
                        Join Marinor
                    </Button>
                    <Button href="#about-journey" variant="outline" down>
                        Timeline
                    </Button>
                </div>
            </div>
            <div className="abh-collage mr-fade" style={{ animationDelay: "0.2s" }}>
                <Photo image={props.imageA} className="abh-a" sizes="(max-width: 860px) 80vw, 38vw" priority />
                <Photo image={props.imageB} className="abh-b" sizes="(max-width: 860px) 56vw, 28vw" />
                <Photo image={props.imageC} className="abh-c" sizes="(max-width: 860px) 34vw, 16vw" />
                {props.badge ? <span className="abh-badge mr-tag mr-tag--light">{props.badge}</span> : null}
            </div>
        </section>
    )
}

/* The first sentence is set lighter, the rest in full black */
export function Statement({ text }: { text: string }) {
    const t = (text || "").trim()
    const m = t.match(/^(.*?[.!?])\s+(.+)$/)
    return (
        <Reveal>
            <p className="abs">
                {m ? (
                    <>
                        {m[1]} <b>{m[2]}</b>
                    </>
                ) : (
                    <b>{t}</b>
                )}
            </p>
        </Reveal>
    )
}

export function WhoWeAre(props: { eyebrow: string; title: string; text: string; imageA?: Img; imageB?: Img }) {
    const paragraphs = (props.text || "").split("\n").map((t) => t.trim()).filter(Boolean)
    return (
        <section className="abw">
            <Reveal className="abw-photos">
                <Photo image={props.imageA} className="abw-a" sizes="(max-width: 860px) 80vw, 40vw" />
                <Photo image={props.imageB} className="abw-b" sizes="(max-width: 860px) 48vw, 24vw" />
            </Reveal>
            <div className="abw-copy">
                <SectionHead eyebrow={props.eyebrow} title={props.title} />
                <Reveal className="abw-copy">
                    {paragraphs.map((t, i) => (
                        <p key={i} className="mr-lead">
                            {t}
                        </p>
                    ))}
                    <div className="abw-founders">
                        <span>Founded by</span>
                        <div className="abw-names">
                            {FOUNDERS.map((name) => {
                                const parts = name.split(" ").filter(Boolean)
                                const initials = parts[0][0] + parts[parts.length - 1][0]
                                return (
                                    <span key={name} className="abw-name">
                                        <i aria-hidden>{initials}</i>
                                        {name}
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export function Stats({ stats }: { stats: Stat[] }) {
    const list = stats && stats.length ? stats : STAT_DEFAULTS
    return <StatRow items={list.map((s) => ({ value: s.value, suffix: s.suffix, label: s.label }))} />
}
