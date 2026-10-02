import * as React from "react"
import { SectionHead, Reveal, Photo, Arrow, cx, imgSrc, at, BP, MONO, DISPLAY, BODY, DARK, GRAY, LAVENDER } from "./SiteKit.tsx"
import type { Img } from "./SiteKit.tsx"

/* ================================================================
 Home – our projects (Argus, Proteus) and competitions (Njord, RoboBoat)
 Door cards: on desktop and tablet the text sits on the photo.
 On phones the photo sits on top in 4:3 and the text below it, so a wide
 photo is not cut down to a narrow upright strip.
 ================================================================ */

const DOOR_PHONE = `
.mr-page a.hw-door.hw-door{height:auto;min-height:0;justify-content:flex-start}
.mr-page .hw-door .hw-bg{position:relative;inset:auto;flex:0 0 auto;width:100%;aspect-ratio:4 / 3}
.mr-page .hw-door .hw-shade{bottom:auto;height:auto;aspect-ratio:4 / 3;background:linear-gradient(180deg,rgba(10,12,16,.38) 0%,rgba(10,12,16,0) 32%,rgba(10,12,16,0) 70%,rgb(16,16,17) 100%)}
.mr-page .hw-door .hw-top{position:absolute;top:0;left:0;right:0}
.mr-page .hw-door .hw-body{padding-top:16px}
`

export const DOOR_CSS = `
.hw-doors{display:flex;gap:18px}
.hw-door{position:relative;flex:1 1 0;min-width:0;height:600px;border-radius:24px;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;color:#fff;text-decoration:none;background:${DARK};isolation:isolate;transition:flex-grow .6s cubic-bezier(.2,.7,.2,1)}
.hw-doors>.hw-door:first-child{flex-grow:1.2}
@media (hover:hover){.hw-doors:hover>.hw-door{flex-grow:.85}.hw-doors>.hw-door:hover{flex-grow:1.35}}
.hw-bg{position:absolute;inset:0;z-index:-2}
.hw-bg .mr-photo{position:absolute;inset:0;background:rgb(40,44,56)}
.hw-shade{position:absolute;inset:0;z-index:-1;pointer-events:none;background:linear-gradient(180deg,rgba(10,12,16,.42) 0%,rgba(10,12,16,.04) 34%,rgba(10,12,16,.88) 100%)}
.hw-top{display:flex;justify-content:space-between;align-items:flex-start;gap:10px;padding:24px 26px 0}
.hw-go{display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:12px;border:1px solid rgba(255,255,255,.35);color:#fff;transition:background-color .3s ease,color .3s ease}
.hw-logo{display:block;width:96px;padding:8px;border-radius:12px;background:#fff}
.hw-logo img{display:block;width:100%;height:auto}
.hw-body{display:flex;flex-direction:column;align-items:flex-start;gap:14px;padding:0 28px 28px}
.hw-title{margin:0;font-family:${DISPLAY};font-weight:700;font-size:clamp(56px,6.4vw,96px);font-size:clamp(56px,6.4cqi,96px);line-height:.9;letter-spacing:-.055em}
.hw-door.is-small .hw-title{font-size:44px}
.hw-body p{margin:0;max-width:460px;font-family:${BODY};font-weight:500;font-size:16.5px;line-height:1.5;color:rgba(255,255,255,.84)}
.hw-door.is-small .hw-body p{font-size:15px}
.hw-tags{display:flex;flex-wrap:wrap;gap:6px}
.hw-cta{display:inline-flex;align-items:center;gap:10px;margin-top:4px;font-family:${BODY};font-weight:600;font-size:15px}
.hw-cta svg{transition:transform .3s cubic-bezier(.2,.7,.2,1)}
@media (hover:hover){.hw-door:hover .hw-go{background:#fff;color:${DARK}}.hw-door:hover .hw-cta svg{transform:translateX(4px)}}
.hw-door:focus-visible{outline:2px solid var(--mr-accent);outline-offset:3px}

.hw-bp{position:absolute;inset:0;overflow:hidden;background:linear-gradient(160deg,rgb(30,22,50),rgb(16,16,17))}
.hw-bp-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(214,186,236,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(214,186,236,.08) 1px,transparent 1px);background-size:30px 30px}
.hw-bp svg{position:absolute;left:10%;top:11%;width:80%;height:42%;overflow:visible}
.hw-bp path{stroke-dasharray:1;stroke-dashoffset:0;transition:stroke-dashoffset 1.8s ease-in-out}
.mr-reveal.is-hidden .hw-bp path{stroke-dashoffset:1;transition:none}
.hw-door.is-tall{height:640px}
.hw-door.is-tall .hw-title{font-size:clamp(64px,7.4vw,112px);font-size:clamp(64px,7.4cqi,112px)}
${at(BP.lg, `.hw-door{height:540px}.hw-door.is-tall{height:580px}`)}
${at(BP.md, `.hw-doors{flex-direction:column;gap:14px}.hw-doors>.hw-door,.hw-doors>.hw-door:first-child{flex:none;height:480px}.hw-doors>.hw-door.is-tall{height:520px}`)}
${at(BP.sm, `.hw-doors>.hw-door,.hw-doors>.hw-door:first-child{height:440px}.hw-doors>.hw-door.is-tall{height:460px}.hw-door{border-radius:20px}.hw-top{padding:18px 18px 0}.hw-body{padding:0 20px 22px;gap:12px}.hw-title,.hw-door.is-tall .hw-title{font-size:52px}.hw-door.is-small .hw-title{font-size:40px}.hw-body p{font-size:15px}.hw-bp svg{top:14%;height:56%}.hw-logo{width:80px}`)}
${at(BP.sm, DOOR_PHONE)}
`

/* The road: three cards joined into one timeline – a dot on each, a line from card to card,
   the step number on the right and a line of text under the title. The last card is the goal. */
const ROAD_CSS = `
.hc-road{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.hc-step{position:relative;display:flex;flex-direction:column;gap:10px;min-width:0;padding:20px 22px 22px;border-radius:20px;background:#fff;border:1px solid rgba(16,16,17,.07);box-shadow:0 1px 2px rgba(16,16,17,.04);transition:transform .4s cubic-bezier(.2,.7,.2,1),box-shadow .4s ease,border-color .4s ease}
@media (hover:hover){.hc-step:hover{transform:translateY(-3px);border-color:rgba(124,70,156,.28);box-shadow:0 18px 40px -18px rgba(40,20,70,.32)}}
.hc-step:not(:last-child)::after{content:"";position:absolute;z-index:1;top:30px;right:-15px;width:16px;height:2px;border-radius:2px;background:var(--mr-accent);pointer-events:none}
.hc-step-top{display:flex;align-items:center;gap:10px}
.hc-step-dot{flex:none;width:12px;height:12px;border-radius:50%;border:2px solid var(--mr-accent);background:#fff;box-sizing:border-box}
.hc-step:first-child .hc-step-dot{background:var(--mr-accent);box-shadow:0 0 0 4px rgba(124,70,156,.15)}
.hc-step b{font-family:${MONO};font-size:12px;font-weight:500;letter-spacing:.08em;color:var(--mr-accent)}
.hc-step-n{margin-left:auto;font-family:${MONO};font-size:11px;letter-spacing:.08em;color:rgba(16,16,17,.32)}
.hc-step-title{font-family:${DISPLAY};font-weight:700;font-size:22px;line-height:1.1;letter-spacing:-.035em;color:${DARK}}
.hc-step p{margin:0;font-family:${BODY};font-weight:500;font-size:14px;line-height:1.45;letter-spacing:-.01em;color:${GRAY}}
.hc-step.is-last{overflow:hidden;isolation:isolate;background:${DARK};border-color:${DARK}}
.hc-step.is-last::before{content:"";position:absolute;z-index:-1;inset:0;pointer-events:none;background:radial-gradient(120% 150% at 100% 0%,rgba(124,70,156,.55) 0%,rgba(124,70,156,.12) 45%,rgba(124,70,156,0) 75%)}
.hc-step.is-last b{color:${LAVENDER}}
.hc-step.is-last .hc-step-dot{border-color:${LAVENDER};background:transparent}
.hc-step.is-last .hc-step-n{color:rgba(214,186,236,.55)}
.hc-step.is-last .hc-step-title{color:#fff}
.hc-step.is-last p{color:rgba(255,255,255,.7)}
@media (hover:hover){.hc-step.is-last:hover{border-color:${DARK};box-shadow:0 18px 40px -16px rgba(60,30,100,.55)}}
${at(BP.md, `.hc-step{padding:18px 18px 20px}.hc-step-title{font-size:20px}`)}
${at(BP.sm, `.hc-road{grid-template-columns:minmax(0,1fr);gap:12px}.hc-step{padding:16px 18px 18px;border-radius:16px;gap:8px}.hc-step:not(:last-child)::after{top:auto;right:auto;bottom:-13px;left:23px;width:2px;height:14px}.hc-step-title{font-size:19px}.hc-step p{font-size:13.5px}`)}
`

export const MAP_CSS = `
.hc-grid{display:grid;grid-template-columns:minmax(0,1.12fr) minmax(0,.88fr);gap:18px}
.hc-left{display:flex;flex-direction:column;gap:14px}
.hc-map{position:relative;aspect-ratio:3/2;border-radius:24px;overflow:hidden;background:radial-gradient(120% 100% at 80% 0%,rgb(56,30,100) 0%,rgb(22,17,34) 55%,rgb(16,16,17) 100%);isolation:isolate}
.hc-map>svg{position:absolute;inset:0;width:100%;height:100%}
.hc-map-title{position:absolute;left:22px;top:20px;color:rgba(255,255,255,.62)}
.hc-pin{position:absolute;display:flex;flex-direction:column;gap:2px;padding:10px 14px;border-radius:14px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);white-space:nowrap}
.hc-pin b{font-family:${DISPLAY};font-weight:700;font-size:17px;letter-spacing:-.02em;color:#fff}
.hc-pin span{font-family:${MONO};font-size:11px;letter-spacing:.04em;color:${LAVENDER}}
.hc-pin.is-a{right:24%;top:35%}
.hc-pin.is-b{left:17%;top:81%}
${ROAD_CSS}
.hc-right{display:grid;grid-template-rows:1fr 1fr;gap:18px}
.hc-right .hw-door{flex:none;height:auto;min-height:250px}
${at(BP.md, `.hc-grid{grid-template-columns:minmax(0,1fr)}.hc-right{grid-template-rows:none}.hc-right .hw-door{height:330px}`)}
${at(BP.sm, `.hc-map{border-radius:20px}.hc-map-title{left:14px;top:12px;font-size:10.5px}.hc-pin{padding:6px 9px;border-radius:10px}.hc-pin b{font-size:12.5px}.hc-pin span{font-size:9.5px}.hc-pin.is-a{right:23%;top:36%}.hc-pin.is-b{left:12%;top:79%}.hc-right .hw-door{height:320px}`)}
`

/* Next to the map the left column is narrow: the road there keeps to the year and the title */
const ROAD_NARROW_CSS = `
.hc-grid:not(.is-stack) .hc-step p{display:none}
.hc-grid:not(.is-stack) .hc-step-title{font-size:17px}
${at(BP.md, `.hc-grid:not(.is-stack) .hc-step p{display:block}.hc-grid:not(.is-stack) .hc-step-title{font-size:20px}`)}
${at(BP.sm, `.hc-grid:not(.is-stack) .hc-step-title{font-size:19px}`)}
`

/* Competitions without the map: the road as a strip, the two cards side by side under it */
const STACK_CSS = `
.hc-grid.is-stack{display:flex;flex-direction:column;gap:18px}
.hc-grid.is-stack .hc-right{grid-template-rows:none;grid-template-columns:repeat(2,minmax(0,1fr))}
.hc-grid.is-stack .hc-right .hw-door{height:460px}
${at(BP.lg, `.hc-grid.is-stack .hc-right .hw-door{height:420px}`)}
${at(BP.md, `.hc-grid.is-stack .hc-right{grid-template-columns:minmax(0,1fr)}.hc-grid.is-stack .hc-right .hw-door{height:330px}`)}
${at(BP.sm, `.hc-grid.is-stack .hc-right .hw-door{height:320px}`)}
`

export const WORLD_CSS = DOOR_CSS + MAP_CSS + ROAD_NARROW_CSS + STACK_CSS

/* Wireframe boat for Proteus – it has no photos yet. The lines draw once when scrolled into view. */
function Blueprint() {
    return (
        <div className="hw-bp" aria-hidden>
            <div className="hw-bp-grid" />
            <svg viewBox="0 0 400 240">
                <g fill="none" stroke={LAVENDER} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path pathLength={1} d="M30 150 L370 150 L340 185 L70 185 Z" />
                    <path pathLength={1} d="M50 150 L50 120 L350 120 L350 150" style={{ transitionDelay: ".3s" }} />
                    <path pathLength={1} d="M150 120 L150 80 L260 80 L260 120" style={{ transitionDelay: ".6s" }} />
                    <path pathLength={1} d="M205 80 L205 40 M190 40 L220 40" style={{ transitionDelay: ".9s" }} />
                    <path pathLength={1} d="M170 95 L185 95 M200 95 L215 95 M230 95 L245 95" style={{ transitionDelay: "1.1s" }} />
                    <path pathLength={1} d="M20 205 Q 70 195 120 205 T 220 205 T 320 205 T 400 205" strokeOpacity="0.5" style={{ transitionDelay: "1.2s" }} />
                </g>
                <circle cx="205" cy="40" r="4" fill={LAVENDER} />
                <g fontFamily={MONO} fontSize="9" fill="rgba(214,186,236,0.7)" letterSpacing="1.5">
                    <text x="30" y="226">PROTEUS · DRAFT</text>
                    <text x="300" y="226">REV 0.1</text>
                </g>
            </svg>
        </div>
    )
}

export type Door = {
    name: string
    status: string
    live: boolean
    text: string
    tags: string
    link: string
    cta: string
    image?: Img
    logo?: string
}

export function DoorCard({ c, small = false, tall = false, sizes = "(max-width: 860px) 100vw, 55vw" }: { c: Door; small?: boolean; tall?: boolean; sizes?: string }) {
    const tags = (c.tags || "").split("·").map((t) => t.trim()).filter(Boolean)
    const hasPhoto = !!(c.image && c.image.src)
    return (
        <a className={cx("hw-door", "mr-zoom", small && "is-small", tall && "is-tall")} href={c.link}>
            <div className="hw-bg">{hasPhoto ? <Photo image={c.image} alt={c.name} sizes={sizes} /> : <Blueprint />}</div>
            <div className="hw-shade" aria-hidden />
            <div className="hw-top">
                <span className="mr-tag mr-tag--glass">
                    <i className={cx("mr-dot", c.live ? "mr-dot--live" : undefined)} style={c.live ? undefined : { background: LAVENDER }} />
                    {c.status}
                </span>
                {c.logo ? (
                    <span className="hw-logo">
                        <img src={imgSrc(c.logo, 512)} alt={`${c.name} logo`} loading="lazy" decoding="async" draggable={false} />
                    </span>
                ) : (
                    <span className="hw-go" aria-hidden>
                        <Arrow />
                    </span>
                )}
            </div>
            <div className="hw-body">
                <h3 className="hw-title">{c.name}</h3>
                {c.text ? <p>{c.text}</p> : null}
                {tags.length ? (
                    <div className="hw-tags">
                        {tags.map((t) => (
                            <span key={t} className="mr-tag mr-tag--glass">
                                {t}
                            </span>
                        ))}
                    </div>
                ) : null}
                <span className="hw-cta">
                    {c.cta}
                    <Arrow />
                </span>
            </div>
        </a>
    )
}

/* ---------- Projects ---------- */
export function Projects(props: {
    eyebrow: string
    title: string
    text: string
    argusText: string
    argusTags: string
    argusImage?: Img
    proteusText: string
}) {
    const doors: Door[] = [
        {
            name: "Argus",
            status: "On the water",
            live: true,
            text: props.argusText,
            tags: props.argusTags,
            link: "/projects/argus",
            cta: "Explore Argus",
            image: props.argusImage,
        },
        {
            name: "Proteus",
            status: "In development",
            live: false,
            text: props.proteusText,
            tags: "Coming soon",
            link: "/projects/proteus",
            cta: "Follow Proteus",
        },
    ]
    return (
        <section className="mr-sec">
            <SectionHead eyebrow={props.eyebrow} title={props.title} text={props.text} />
            <Reveal className="hw-doors">
                {doors.map((c) => (
                    <DoorCard key={c.name} c={c} />
                ))}
            </Reveal>
        </section>
    )
}

/* ---------- Route map: Trondheim → Sarasota ---------- */
const ROUTE = "M140 300 C 200 110, 380 40, 470 118"

function RouteMap() {
    const pin = (x: number, y: number) => (
        <g>
            <circle cx={x} cy={y} r="10" fill="rgba(214,186,236,0.18)" />
            <circle cx={x} cy={y} r="5.5" fill="#fff" />
        </g>
    )
    return (
        <div className="hc-map">
            <svg viewBox="0 0 600 400" aria-hidden>
                <defs>
                    <pattern id="mr-home-dots" width="14" height="14" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.1" fill="rgba(214,186,236,0.16)" />
                    </pattern>
                </defs>
                <rect width="600" height="400" fill="url(#mr-home-dots)" />
                <g fill="none" stroke="rgba(214,186,236,0.11)" strokeWidth="1">
                    {[80, 150, 220, 290].map((ry) => (
                        <ellipse key={ry} cx="300" cy="420" rx={ry * 1.9} ry={ry} />
                    ))}
                    {[-240, -120, 0, 120, 240].map((dx) => (
                        <path key={dx} d={`M${300 + dx} 420 Q ${300 + dx * 0.6} 120 ${300 + dx * 0.2} -20`} />
                    ))}
                </g>
                <path d={ROUTE} fill="none" stroke="rgba(214,186,236,0.3)" strokeWidth="2" strokeDasharray="4 8" />
                <path d={ROUTE} fill="none" stroke={LAVENDER} strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.9" />
                {pin(140, 300)}
                {pin(470, 118)}
                {/* A little boat sailing the route – a single slow SVG animation */}
                <g>
                    <path d="M-9 -3 L9 -3 L6 4 L-6 4 Z M0 -3 L0 -12 L6 -5 Z" fill="#fff" />
                    <animateMotion dur="14s" repeatCount="indefinite" path={ROUTE} keyPoints="1;0" keyTimes="0;1" calcMode="linear" />
                </g>
                <text x="300" y="112" textAnchor="middle" fontFamily={MONO} fontSize="11" letterSpacing="2" fill="rgba(214,186,236,0.8)">
                    ≈ 7 450 KM
                </text>
            </svg>
            <span className="hc-map-title mr-mono">Where we're headed</span>
            <div className="hc-pin is-a">
                <b>Trondheim, Norway</b>
                <span>Njord · every August</span>
            </div>
            <div className="hc-pin is-b">
                <b>Sarasota, Florida</b>
                <span>RoboBoat · every February</span>
            </div>
        </div>
    )
}

/* ---------- Competitions ---------- */
export function Competitions(props: {
    eyebrow: string
    title: string
    text: string
    njordText: string
    roboText: string
    njordImage?: Img
    roboImage?: Img
    roboLogo: string
    map?: boolean
}) {
    const showMap = props.map !== false
    const road = [
        { y: "2026", t: "First time at Njord", d: "Argus sails the Njord Challenge in Trondheim." },
        { y: "2027", t: "Win Njord", d: "Back in Nyhavna, this time to win." },
        { y: "Then", t: "RoboBoat", d: "Across the Atlantic to Sarasota, Florida." },
    ]
    return (
        <section className="mr-sec">
            <SectionHead eyebrow={props.eyebrow} title={props.title} text={props.text} />
            <div className={cx("hc-grid", !showMap && "is-stack")}>
                <Reveal className="hc-left">
                    {showMap ? <RouteMap /> : null}
                    <ol className="hc-road" aria-label="The road ahead">
                        {road.map((r, i) => (
                            <li key={i} className={cx("hc-step", i === road.length - 1 && "is-last")}>
                                <div className="hc-step-top">
                                    <i className="hc-step-dot" aria-hidden />
                                    <b>{r.y}</b>
                                    <span className="hc-step-n" aria-hidden>
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <span className="hc-step-title">{r.t}</span>
                                <p>{r.d}</p>
                            </li>
                        ))}
                    </ol>
                </Reveal>
                <Reveal className="hc-right" delay={0.08}>
                    <DoorCard
                        small
                        sizes="(max-width: 860px) 100vw, 40vw"
                        c={{ name: "Njord", status: "We compete here", live: true, text: props.njordText, tags: "", link: "/competitions/njord-challange", cta: "Explore Njord", image: props.njordImage }}
                    />
                    <DoorCard
                        small
                        sizes="(max-width: 860px) 100vw, 40vw"
                        c={{ name: "RoboBoat", status: "Next goal", live: false, text: props.roboText, tags: "", link: "/competitions/roboat", cta: "Explore RoboBoat", image: props.roboImage, logo: props.roboLogo }}
                    />
                </Reveal>
            </div>
        </section>
    )
}
