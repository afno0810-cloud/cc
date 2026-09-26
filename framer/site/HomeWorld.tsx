import * as React from "react"
import { SectionHead, Reveal, Photo, Arrow, cx, imgSrc, at, BP, MONO, DISPLAY, BODY, DARK, GRAY, LAVENDER, useUI } from "./SiteKit.tsx"
import type { Img } from "./SiteKit.tsx"
import MarinorHarbour from "./MarinorHarbour.tsx"

/* ================================================================
 Home – our projects (Argus, Proteus) and competitions (Njord, RoboBoat)
 ================================================================ */

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
${at(BP.sm, `.hw-doors>.hw-door,.hw-doors>.hw-door:first-child{height:440px}.hw-doors>.hw-door.is-tall{height:460px}.hw-door{border-radius:20px}.hw-top{padding:18px 18px 0}.hw-body{padding:0 20px 22px;gap:12px}.hw-title,.hw-door.is-tall .hw-title{font-size:52px}.hw-door.is-small .hw-title{font-size:40px}.hw-body p{font-size:15px}.hw-bp svg{top:12%;height:34%}.hw-logo{width:80px}`)}

/* Argus as one big card with the live 3D harbour behind the text (the photo shows until the 3D has loaded) */
.hw-doors.is-stacked{flex-direction:column}
.hw-doors.is-stacked>.hw-door,.hw-doors.is-stacked>.hw-door:first-child{flex:none;height:360px}
.hw-doors.is-stacked>.hw-door.is-3d{height:680px}
.hw-3d{position:absolute;inset:0}
.hw-door.is-3d .hw-shade{background:linear-gradient(180deg,rgba(10,12,16,.36) 0%,rgba(10,12,16,0) 24%,rgba(10,12,16,0) 50%,rgba(10,12,16,.74) 100%)}
.hw-door.is-3d .hw-title{font-size:clamp(64px,7.4vw,112px);font-size:clamp(64px,7.4cqi,112px)}
.hw-door.is-3d .hw-body p{max-width:500px}
${at(BP.lg, `.hw-doors.is-stacked>.hw-door.is-3d{height:600px}`)}
${at(BP.md, `.hw-doors.is-stacked>.hw-door,.hw-doors.is-stacked>.hw-door:first-child{height:380px}.hw-doors.is-stacked>.hw-door.is-3d{height:560px}`)}
${at(BP.sm, `.hw-doors.is-stacked>.hw-door,.hw-doors.is-stacked>.hw-door:first-child{height:420px}.hw-doors.is-stacked>.hw-door.is-3d{height:540px}.hw-door.is-3d .hw-title{font-size:52px}`)}
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
.hc-road{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
.hc-step{display:flex;flex-direction:column;gap:6px;padding:16px 18px;border-radius:16px;background:#fff;border:1px solid rgba(16,16,17,.06)}
.hc-step b{font-family:${MONO};font-size:12px;font-weight:500;letter-spacing:.06em;color:var(--mr-accent)}
.hc-step span{font-family:${BODY};font-weight:600;font-size:15px;line-height:1.3;color:${DARK}}
.hc-step.is-last{background:${DARK};border-color:${DARK}}
.hc-step.is-last b{color:${LAVENDER}}
.hc-step.is-last span{color:#fff}
.hc-right{display:grid;grid-template-rows:1fr 1fr;gap:18px}
.hc-right .hw-door{flex:none;height:auto;min-height:250px}
${at(BP.md, `.hc-grid{grid-template-columns:minmax(0,1fr)}.hc-right{grid-template-rows:none}.hc-right .hw-door{height:330px}`)}
${at(BP.sm, `.hc-map{border-radius:20px}.hc-map-title{left:14px;top:12px;font-size:10.5px}.hc-pin{padding:6px 9px;border-radius:10px}.hc-pin b{font-size:12.5px}.hc-pin span{font-size:9.5px}.hc-pin.is-a{right:23%;top:36%}.hc-pin.is-b{left:12%;top:79%}.hc-road{gap:8px}.hc-step{padding:12px 12px;border-radius:14px}.hc-step span{font-size:13px}.hc-right .hw-door{height:320px}`)}
`

export const WORLD_CSS = DOOR_CSS + MAP_CSS

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

export function DoorCard({
    c,
    small = false,
    tall = false,
    live,
    sizes = "(max-width: 860px) 100vw, 55vw",
}: {
    c: Door
    small?: boolean
    tall?: boolean
    live?: React.ReactNode
    sizes?: string
}) {
    const tags = (c.tags || "").split("·").map((t) => t.trim()).filter(Boolean)
    const hasPhoto = !!(c.image && c.image.src)
    return (
        <a className={cx("hw-door", "mr-zoom", small && "is-small", tall && "is-tall", !!live && "is-3d")} href={c.link}>
            <div className="hw-bg">
                {hasPhoto ? <Photo image={c.image} alt={c.name} sizes={sizes} /> : <Blueprint />}
                {live ? (
                    <div className="hw-3d" aria-hidden>
                        {live}
                    </div>
                ) : null}
            </div>
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
    argus3D?: boolean
}) {
    const { w } = useUI()
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
            {props.argus3D !== false ? (
                <Reveal className="hw-doors is-stacked">
                    <DoorCard
                        c={doors[0]}
                        sizes="100vw"
                        live={
                            <MarinorHarbour
                                view="argus"
                                sun={16}
                                offset={w >= 600 ? 0.16 : 0}
                                offsetY={w < 600 ? 0.2 : 0}
                                scan={true}
                                mouse={true}
                                turn={1}
                                scroll={true}
                                zoom={w >= 1000 ? 1.35 : 1.15}
                                poster={false}
                                radius={0}
                                style={{ width: "100%", height: "100%" }}
                            />
                        }
                    />
                    <DoorCard c={doors[1]} sizes="100vw" />
                </Reveal>
            ) : (
                <Reveal className="hw-doors">
                    {doors.map((c) => (
                        <DoorCard key={c.name} c={c} />
                    ))}
                </Reveal>
            )}
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
}) {
    const road = [
        { y: "2026", t: "First time at Njord" },
        { y: "2027", t: "Win Njord" },
        { y: "Then", t: "RoboBoat" },
    ]
    return (
        <section className="mr-sec">
            <SectionHead eyebrow={props.eyebrow} title={props.title} text={props.text} />
            <div className="hc-grid">
                <Reveal className="hc-left">
                    <RouteMap />
                    <div className="hc-road">
                        {road.map((r, i) => (
                            <div key={i} className={cx("hc-step", i === road.length - 1 && "is-last")}>
                                <b>{r.y}</b>
                                <span>{r.t}</span>
                            </div>
                        ))}
                    </div>
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
