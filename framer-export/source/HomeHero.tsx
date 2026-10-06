import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Label, Button, Photo, useUI, at, BP, fluid, PAGE_BG, LAVENDER, DARK, GRAY, DISPLAY, BODY } from "./SiteKit.tsx"
import type { Img } from "./SiteKit.tsx"

/* ================================================================
 Home – hero: one big photo of Argus with the headline on the water.
 Desktop: all text sits on the photo.
 Tablet and phone: headline on the photo, text and buttons below it.
 (Same HTML for both – CSS moves the lower part, so nothing jumps on load.)
 ================================================================ */

export type Slide = { image?: Img; caption: string }

export const HERO_CSS = `
.hh{position:relative;display:grid;grid-template-columns:minmax(0,1fr);background:${PAGE_BG}}
.hh-media{grid-area:1/1;position:relative;height:clamp(680px,100vh,1000px);overflow:hidden;isolation:isolate}
.hh-img{position:absolute;inset:0;z-index:-3}
.hh-photo{position:absolute;inset:0;background:rgb(58,72,88)}
.hh-photo>img{object-position:50% 0%;transform:scale(1.08);transform-origin:25% 0%}
.hh-shade{position:absolute;inset:0;z-index:-2;pointer-events:none;background:linear-gradient(180deg,rgba(8,12,18,.5) 0%,rgba(8,12,18,.24) 30%,rgba(8,12,18,0) 56%),linear-gradient(90deg,rgba(8,12,18,.32) 0%,rgba(8,12,18,0) 52%)}
.hh-fade{position:absolute;left:0;right:0;bottom:0;height:30%;z-index:-1;pointer-events:none;background:linear-gradient(180deg,rgba(238,235,253,0) 0%,rgba(238,235,253,.55) 45%,${PAGE_BG} 100%)}
.hh-caption{position:absolute;right:0;left:0;top:clamp(64px,9vh,112px);z-index:1;display:flex;justify-content:flex-end;pointer-events:none}
.hh-caption span{color:rgba(255,255,255,.86);text-shadow:0 1px 8px rgba(0,0,0,.35)}
.hh-content{grid-area:1/1;position:relative;z-index:1;display:flex;flex-direction:column;gap:24px;padding-top:clamp(56px,9vh,110px)}
.hh-top{display:flex;flex-direction:column;align-items:flex-start;gap:22px}
.hh-title{margin:0;max-width:640px;font-family:${DISPLAY};font-weight:700;font-size:${fluid(40, 5.8, 88)};line-height:.98;letter-spacing:-.05em;color:#fff;text-shadow:0 2px 24px rgba(0,0,0,.18);text-wrap:balance}
.hh-hi{position:relative;display:inline-block;color:${LAVENDER}}
.hh-hi svg{position:absolute;left:-2%;width:104%;bottom:-.16em;height:.22em;overflow:visible}
.hh-hi path{stroke-dasharray:1;stroke-dashoffset:0;animation:hh-draw 1.1s .9s ease-in-out both}
@keyframes hh-draw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}
.mr-still .hh-hi path{animation:none}
.hh-lower{display:flex;flex-direction:column;align-items:flex-start;gap:26px}
.hh-text{margin:0;max-width:470px;font-family:${BODY};font-weight:500;font-size:${fluid(16, 1.3, 19)};line-height:1.55;letter-spacing:-.01em;color:rgba(255,255,255,.92);text-shadow:0 1px 12px rgba(0,0,0,.25)}
@media (prefers-reduced-motion:reduce){.hh-hi path{animation:none}}
${at(999, `
.hh-media{grid-area:auto;grid-row:1;grid-column:1;height:700px}
.hh-content{display:contents}
.hh-top{grid-row:1;grid-column:1;z-index:1;align-self:start;padding-top:64px}
.hh-lower{grid-row:2;grid-column:1;z-index:1;margin-top:-56px;gap:22px}
.hh-caption{display:none}
.hh-photo>img{object-position:58% 100%;transform:none}
.hh-shade{background:linear-gradient(180deg,rgba(8,12,18,.52) 0%,rgba(8,12,18,.22) 34%,rgba(8,12,18,0) 60%)}
.hh-fade{height:34%}
.hh-title{max-width:560px;font-size:clamp(44px,8cqi,66px)}
.hh-text{max-width:560px;color:${GRAY};text-shadow:none;font-size:18px}
.hh-lower .mr-btn--light{background:${DARK};color:#fff}
.hh-lower .mr-btn--ghost{background:transparent;color:${DARK};border-color:rgba(16,16,17,.2)}
`)}
${at(BP.sm, `
.hh-media{height:560px}
.hh-top{padding-top:34px;gap:16px}
.hh-lower{margin-top:-40px}
.hh-title{font-size:clamp(38px,11.4cqi,46px)}
.hh-text{font-size:16px}
`)}
`

export function Hero(props: {
    slides: Slide[]
    eyebrow: string
    title: string
    highlight: string
    text: string
    primary: string
    primaryLink: string
    secondary: string
    secondaryLink: string
    place: string
    coords: string
}) {
    const { still, fine, w } = useUI()
    const ref = React.useRef<HTMLElement>(null)
    const parallax = !still && fine && w >= 1000

    /* One big photo – the first one in the list */
    const slide = (props.slides || []).find((s) => s && s.image && s.image.src)

    /* Desktop with a mouse: the photo moves a little slower than the page */
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
    const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"])

    const hi = new Set(
        (props.highlight || "")
            .toLowerCase()
            .split(/\s+/)
            .map((x) => x.replace(/[^a-z0-9æøå-]/g, ""))
            .filter(Boolean)
    )
    const words = (props.title || "").split(/\s+/).filter(Boolean)

    return (
        <section ref={ref} className="hh">
            <div className="hh-media">
                <motion.div className="hh-img" style={parallax ? { y: imgY } : undefined}>
                    <Photo
                        image={slide ? slide.image : undefined}
                        alt={(slide && slide.caption) || "Argus by Marinor NTNU"}
                        className="hh-photo"
                        sizes="100vw"
                        priority
                    />
                </motion.div>
                <div className="hh-shade" aria-hidden />
                <div className="hh-fade" aria-hidden />
                {slide && slide.caption ? (
                    <div className="hh-caption mr-wrap mr-fade" style={{ animationDelay: "1s" }}>
                        <span className="mr-mono">
                            {slide.caption}
                            {props.coords ? <span style={{ opacity: 0.72 }}>{"  ·  " + props.coords}</span> : null}
                        </span>
                    </div>
                ) : null}
            </div>

            <div className="hh-content">
                <div className="hh-top mr-wrap">
                    <div className="mr-rise" style={{ animationDelay: "0.05s" }}>
                        <Label light>{props.eyebrow}</Label>
                    </div>
                    <h1 className="hh-title mr-rise" style={{ animationDelay: "0.12s" }}>
                        {words.map((word, i) => {
                            const isHi = hi.has(word.toLowerCase().replace(/[^a-z0-9æøå-]/g, ""))
                            return (
                                <React.Fragment key={i}>
                                    {i > 0 ? " " : null}
                                    {isHi ? (
                                        <span className="hh-hi">
                                            {word}
                                            <svg viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden>
                                                <path d="M2 12 Q 25 2 50 12 T 100 12 T 150 12 T 198 12" fill="none" stroke={LAVENDER} strokeWidth="5" strokeLinecap="round" pathLength={1} />
                                            </svg>
                                        </span>
                                    ) : (
                                        word
                                    )}
                                </React.Fragment>
                            )
                        })}
                    </h1>
                </div>
                <div className="hh-lower mr-wrap">
                    {props.text ? (
                        <p className="hh-text mr-rise" style={{ animationDelay: "0.24s" }}>
                            {props.text}
                        </p>
                    ) : null}
                    <div className="mr-btns mr-rise" style={{ animationDelay: "0.32s" }}>
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
                    </div>
                </div>
            </div>
        </section>
    )
}
