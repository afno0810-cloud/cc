import * as React from "react"
import { SectionHead, Reveal, Photo, Button, CtaPanel, useUI, at, BP, DISPLAY, BODY, MONO, DARK, LAVENDER } from "./AboutKit.tsx"
import type { Img } from "./AboutKit.tsx"

/* ================================================================
 About – the long run (coast map), what we do, gallery and the last call
 ================================================================ */

export const ABOUT_BOTTOM_CSS = `
.abv{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,.86fr);gap:48px;align-items:center;padding:clamp(40px,6vw,84px);padding:clamp(40px,6cqi,84px)}
.abv-bg{position:absolute;inset:0;z-index:-3;opacity:.16}
.abv-bg .mr-photo{position:absolute;inset:0;background:transparent}
.abv-shade{position:absolute;inset:0;z-index:-2;background:linear-gradient(115deg,rgba(16,16,17,.97) 25%,rgba(16,16,17,.8) 100%)}
.abv-copy{display:flex;flex-direction:column;gap:30px}
.abv-facts{margin:0;padding:0;list-style:none;display:flex;flex-direction:column}
.abv-facts li{display:grid;grid-template-columns:44px minmax(0,1fr);gap:12px;align-items:baseline;padding:16px 0;border-top:1px solid rgba(255,255,255,.14)}
.abv-facts li:last-child{border-bottom:1px solid rgba(255,255,255,.14)}
.abv-facts span{font-family:${MONO};font-size:12px;letter-spacing:.08em;color:${LAVENDER}}
.abv-facts b{display:block;font-family:${DISPLAY};font-weight:700;font-size:20px;line-height:1.2;letter-spacing:-.025em;color:#fff}
.abv-facts em{display:block;margin-top:3px;font-style:normal;font-family:${BODY};font-weight:500;font-size:15px;line-height:1.45;color:rgba(255,255,255,.62)}
.abv-map{position:relative;width:100%;max-width:420px;margin:0 auto;aspect-ratio:420 / 560;background-image:radial-gradient(rgba(214,186,236,.16) 1.2px,transparent 1.2px);background-size:24px 24px}
.abv-map svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.abv-route{stroke-dasharray:1;stroke-dashoffset:0;transition:stroke-dashoffset 2.6s cubic-bezier(.5,0,.3,1) .2s}
.abv-city{transition:opacity .5s ease}
.mr-reveal.is-hidden .abv-route{stroke-dashoffset:1;transition:none}
.mr-reveal.is-hidden .abv-city{opacity:0;transition:none}

.abp{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:40px 24px}
.abp-item{display:flex;flex-direction:column;gap:22px}
.abp-photo{aspect-ratio:4 / 3;border-radius:20px}
.abp-body{display:flex;flex-direction:column;gap:10px;padding-right:12px}
.abp-num{font-family:${MONO};font-size:12px;letter-spacing:.08em;color:var(--mr-accent)}
.abp-body .mr-text{max-width:40ch}

.abg{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-auto-rows:230px;grid-auto-flow:dense;gap:14px}
.abg-tile{position:relative;border-radius:20px;overflow:hidden}
.abg-tile .mr-photo{position:absolute;inset:0}
.abg-tile:nth-child(6n+1){grid-column:span 2;grid-row:span 2}
.abg-tile:nth-child(6n+3){grid-row:span 2}
.abg-tile:nth-child(6n+5),.abg-tile:nth-child(6n+6){grid-column:span 2}
.abg-cap{position:absolute;left:12px;bottom:12px;max-width:calc(100% - 24px);padding:7px 11px;border-radius:9px;background:rgba(16,16,17,.62);color:#fff;font-family:${BODY};font-weight:600;font-size:13.5px;line-height:1.25;letter-spacing:-.005em}

${at(BP.lg, `.abv{gap:32px}.abp{gap:36px 18px}`)}
${at(BP.md, `.abv{grid-template-columns:minmax(0,1fr);gap:40px}.abv-map{max-width:360px}
.abp{grid-template-columns:minmax(0,1fr);gap:28px}.abp-item{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1fr);gap:28px;align-items:center}
.abg{grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:190px;gap:12px}.abg-tile:nth-child(n){grid-column:span 1;grid-row:span 1}.abg-tile:nth-child(6n+1){grid-column:span 2;grid-row:span 2}.abg-tile:nth-child(6n+6){grid-column:span 2}`)}
${at(BP.sm, `.abv{padding:44px 20px 36px}.abv-facts b{font-size:18px}.abv-facts em{font-size:14px}.abv-map{max-width:300px}
.abp-item{display:flex;align-items:stretch;gap:18px}.abp-photo{border-radius:16px}
.abg{grid-auto-rows:150px;gap:10px}.abg-tile{border-radius:14px}.abg-cap{left:8px;bottom:8px;max-width:calc(100% - 16px);padding:6px 9px;font-size:12px}`)}
`

/* ================================================================
 VISION – along the Norwegian coast
 ================================================================ */
/* Drawn from real positions (latitude / longitude), so Tromsø and Kirkenes sit at the
 same height and the coast goes up past Nordkapp in between */
const COAST =
    "M70.8 518.7 C 65.0 513.8, 43.0 502.6, 36.2 489.2 C 29.4 475.8, 28.9 459.1, 30.0 438.1 C 31.1 417.1, 29.7 381.4, 42.6 363.2 C 55.5 344.9, 86.4 357.5, 107.3 328.6 C 128.2 299.7, 146.4 227.3, 168.1 190.0 C 189.8 152.7, 208.6 128.0, 237.5 104.7 C 266.4 81.4, 313.2 50.5, 341.3 50.0 C 369.4 49.5, 395.4 93.2, 406.2 101.8"

const CITIES: { name: string; x: number; y: number; side: "left" | "right" | "top"; home?: boolean }[] = [
    { name: "Kristiansand", x: 70.8, y: 518.7, side: "right" },
    { name: "Stavanger", x: 36.2, y: 489.2, side: "right" },
    { name: "Bergen", x: 30, y: 438.1, side: "right" },
    { name: "Ålesund", x: 42.6, y: 363.2, side: "right" },
    { name: "Trondheim", x: 107.3, y: 328.6, side: "right", home: true },
    { name: "Bodø", x: 168.1, y: 190, side: "right" },
    { name: "Tromsø", x: 237.5, y: 104.7, side: "left" },
    { name: "Nordkapp", x: 341.3, y: 50, side: "top" },
    { name: "Kirkenes", x: 406.2, y: 101.8, side: "left" },
]

const FACTS = [
    { k: "Crew on board", v: "People sail with the boat" },
    { k: "Fully autonomous", v: "No one at the wheel" },
    { k: "The whole coast", v: "From Kristiansand to Kirkenes" },
]

function CoastMap() {
    const { still } = useUI()
    return (
        <div className="abv-map">
            <svg viewBox="0 0 420 560" aria-hidden>
                <path d={COAST} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="44" strokeLinecap="round" transform="translate(18 10)" />
                <path d={COAST} fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="2" strokeDasharray="4 8" strokeLinecap="round" />
                <path className="abv-route" d={COAST} pathLength={1} fill="none" stroke={LAVENDER} strokeWidth="3" strokeLinecap="round" />
                {CITIES.map((c, i) => (
                    <g key={c.name} className="abv-city" style={{ transitionDelay: `${0.25 + i * 0.3}s` }}>
                        <circle cx={c.x} cy={c.y} r={c.home ? 8 : 5} fill={c.home ? LAVENDER : "#fff"} stroke={DARK} strokeWidth={2} />
                        {c.home ? <circle cx={c.x} cy={c.y} r={15} fill="none" stroke={LAVENDER} strokeOpacity={0.45} strokeWidth={1.5} /> : null}
                        <text
                            x={c.side === "right" ? c.x + (c.home ? 24 : 14) : c.side === "top" ? c.x : c.x - 14}
                            y={c.side === "top" ? c.y - 14 : c.y + 4.5}
                            textAnchor={c.side === "right" ? "start" : c.side === "top" ? "middle" : "end"}
                            style={{ fontFamily: c.home ? DISPLAY : BODY, fontWeight: c.home ? 700 : 500, fontSize: c.home ? 17 : 13, fill: c.home ? "#fff" : "rgba(255,255,255,0.62)", letterSpacing: c.home ? "-0.01em" : "0.01em" }}
                        >
                            {c.home ? "Trondheim · home port" : c.name}
                        </text>
                    </g>
                ))}
                {still ? (
                    <g transform="translate(168 190) rotate(-60)">
                        <path d="M-9 -5 L10 0 L-9 5 L-5 0 Z" fill="#fff" />
                    </g>
                ) : (
                    <g>
                        <path d="M-9 -5 L10 0 L-9 5 L-5 0 Z" fill="#fff" />
                        <animateMotion dur="18s" repeatCount="indefinite" rotate="auto" path={COAST} />
                    </g>
                )}
            </svg>
        </div>
    )
}

export function Vision(props: { eyebrow: string; title: string; text: string; image?: Img }) {
    return (
        <div id="about-vision" style={{ scrollMarginTop: 100 }}>
            <Reveal className="abv mr-panel mr-dark mr-on-dark">
                <div className="abv-bg" aria-hidden>
                    <Photo image={props.image} sizes="100vw" />
                </div>
                <div className="abv-shade" aria-hidden />
                <div className="abv-copy">
                    <div className="mr-head">
                        {props.eyebrow ? <span className="mr-label is-light">{props.eyebrow}</span> : null}
                        {props.title ? <h2 className="mr-h2">{props.title}</h2> : null}
                        {props.text ? <p className="mr-lead">{props.text}</p> : null}
                    </div>
                    <ol className="abv-facts">
                        {FACTS.map((f, i) => (
                            <li key={f.k}>
                                <span>{String(i + 1).padStart(2, "0")}</span>
                                <div>
                                    <b>{f.k}</b>
                                    <em>{f.v}</em>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
                <CoastMap />
            </Reveal>
        </div>
    )
}

/* ================================================================
 WHAT WE DO – three photos with a short text under each
 ================================================================ */
export function Pillars(props: { eyebrow: string; title: string; items: { title: string; text: string; image?: Img }[] }) {
    return (
        <section className="mr-sec">
            <SectionHead eyebrow={props.eyebrow} title={props.title} />
            <Reveal className="abp">
                {props.items.map((it, i) => (
                    <article key={it.title + i} className="abp-item mr-zoom">
                        <Photo image={it.image} className="abp-photo" sizes="(max-width: 600px) 100vw, (max-width: 860px) 46vw, 30vw" />
                        <div className="abp-body">
                            <span className="abp-num">{String(i + 1).padStart(2, "0")}</span>
                            <h3 className="mr-h3">{it.title}</h3>
                            <p className="mr-text">{it.text}</p>
                        </div>
                    </article>
                ))}
            </Reveal>
        </section>
    )
}

/* ================================================================
 GALLERY – photos in a grid with a short caption on each
 ================================================================ */
export function Bento(props: { eyebrow: string; title: string; photos: { image?: Img; caption: string }[] }) {
    return (
        <section className="mr-sec">
            <SectionHead eyebrow={props.eyebrow} title={props.title} center />
            <Reveal className="abg">
                {props.photos.map((p, i) => (
                    <figure key={i} className="abg-tile mr-zoom" style={{ margin: 0 }}>
                        <Photo image={p.image} sizes={i % 6 === 0 ? "(max-width: 860px) 100vw, 50vw" : "(max-width: 860px) 50vw, 25vw"} />
                        {p.caption ? <figcaption className="abg-cap">{p.caption}</figcaption> : null}
                    </figure>
                ))}
            </Reveal>
        </section>
    )
}

/* ================================================================
 CTA
 ================================================================ */
export function CTA(props: { title: string; text: string; joinLink: string; argusLink: string }) {
    return (
        <CtaPanel eyebrow="Join the crew" title={props.title} text={props.text}>
            <Button href={props.joinLink} variant="light">
                Join Marinor
            </Button>
            <Button href={props.argusLink} variant="ghost">
                Meet Argus
            </Button>
        </CtaPanel>
    )
}
