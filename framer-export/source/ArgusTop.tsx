import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Label, Button, Photo, Reveal, SectionHead, Stats as StatRow, useUI, at, BP, fluid, DARK } from "./ArgusKit.tsx"
import type { Img } from "./ArgusKit.tsx"
import { DEFAULT_STATS } from "./ArgusKit.tsx"
import type { Stat } from "./ArgusKit.tsx"

/* ================================================================
 Project Argus – hero, numbers and the story
 ================================================================ */

export const ARGUS_TOP_CSS = `
.ah{position:relative;display:flex;flex-direction:column;justify-content:space-between;gap:48px;min-height:740px;border-radius:28px;overflow:hidden;background:rgb(30,34,42);isolation:isolate}
.ah-img{position:absolute;inset:-6% 0;z-index:-2}
.ah-img .mr-photo{position:absolute;inset:0;background:rgb(40,46,56)}
.ah-shade{position:absolute;inset:0;z-index:-1;pointer-events:none;background:linear-gradient(180deg,rgba(12,14,18,.38) 0%,rgba(12,14,18,.08) 36%,rgba(12,14,18,.86) 100%)}
.ah-top{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;padding:32px 40px 0}
.ah-body{display:flex;flex-direction:column;align-items:flex-start;gap:24px;max-width:900px;padding:0 56px 56px}
.ah-title{margin:0;font-family:"Inter Display","Inter",sans-serif;font-weight:700;font-size:${fluid(60, 11.6, 172)};line-height:.88;letter-spacing:-.055em;color:#fff}
.ah-body .mr-lead{color:rgba(255,255,255,.84);max-width:600px}
.as{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.05fr);gap:64px;align-items:center}
.as-copy{display:flex;flex-direction:column;gap:22px}
.as-copy p{margin:0}
.as-collage{position:relative;height:600px}
.as-a{position:absolute;top:0;right:0;width:80%;height:78%;border-radius:24px}
.as-b{position:absolute;left:0;bottom:0;width:50%;height:48%;border-radius:18px;box-shadow:0 0 0 7px rgb(238,235,253)}
.as-badge{position:absolute;right:16px;bottom:calc(22% + 16px);display:inline-flex;align-items:center;gap:10px;padding:11px 15px;border-radius:12px;background:#fff;color:${DARK};font-weight:600;font-size:14px;box-shadow:0 18px 36px -24px rgba(16,16,17,.5)}
.as-badge i{width:8px;height:8px;border-radius:99px;background:var(--mr-accent)}
${at(BP.md, `.ah{min-height:620px;border-radius:24px}.ah-top{padding:24px 26px 0}.ah-body{padding:0 28px 36px}.as{grid-template-columns:minmax(0,1fr);gap:40px}.as-collage{height:480px}`)}
${at(BP.sm, `.ah{min-height:560px;border-radius:20px}.ah-top{padding:20px 20px 0}.ah-top .mr-tag{display:none}.ah-body{padding:0 20px 26px;gap:18px}.ah-title{font-size:clamp(56px,17cqi,72px)}.as-collage{height:400px}.as-a{border-radius:18px}.as-b{border-radius:14px;box-shadow:0 0 0 5px rgb(238,235,253)}.as-badge{right:10px;font-size:13px;padding:9px 12px}`)}
`

export function Hero({
    image,
    eyebrow,
    badge,
    title,
    subtitle,
    primaryLabel,
    primaryLink,
    secondaryLabel,
}: {
    image?: Img
    eyebrow: string
    badge: string
    title: string
    subtitle: string
    primaryLabel: string
    primaryLink: string
    secondaryLabel: string
}) {
    const { still, fine, w } = useUI()
    const ref = React.useRef<HTMLElement>(null)
    const parallax = !still && fine && w >= 1000
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
    return (
        <section ref={ref} className="ah mr-on-dark">
            <motion.div className="ah-img" style={parallax ? { y } : undefined}>
                <Photo image={image} alt="Argus on the water in Trondheim harbour" sizes="100vw" priority />
            </motion.div>
            <div className="ah-shade" aria-hidden />
            <div className="ah-top mr-rise">
                <Label light>{eyebrow}</Label>
                {badge ? <span className="mr-tag mr-tag--glass">{badge}</span> : null}
            </div>
            <div className="ah-body">
                <h1 className="ah-title mr-rise" style={{ animationDelay: "0.08s" }}>
                    {title}
                </h1>
                {subtitle ? (
                    <p className="mr-lead mr-rise" style={{ animationDelay: "0.18s" }}>
                        {subtitle}
                    </p>
                ) : null}
                <div className="mr-btns mr-rise" style={{ animationDelay: "0.26s" }}>
                    {primaryLabel ? (
                        <Button href={primaryLink} variant="light" newTab>
                            {primaryLabel}
                        </Button>
                    ) : null}
                    {secondaryLabel ? (
                        <Button href="#argus-journey" variant="ghost" down>
                            {secondaryLabel}
                        </Button>
                    ) : null}
                </div>
            </div>
        </section>
    )
}

export function Stats({ stats }: { stats: Stat[] }) {
    const list = stats && stats.length ? stats : DEFAULT_STATS
    return <StatRow items={list} />
}

export function Story({
    eyebrow,
    title,
    text,
    imageA,
    imageB,
    badge,
}: {
    eyebrow: string
    title: string
    text: string
    imageA?: Img
    imageB?: Img
    badge: string
}) {
    const paragraphs = (text || "").split("\n").map((t) => t.trim()).filter(Boolean)
    return (
        <section className="as">
            <div className="as-copy">
                <SectionHead eyebrow={eyebrow} title={title} />
                <Reveal className="as-copy">
                    {paragraphs.map((t, i) => (
                        <p key={i} className="mr-lead">
                            {t}
                        </p>
                    ))}
                </Reveal>
            </div>
            <Reveal className="as-collage">
                <Photo image={imageA} alt="Argus in the water" className="as-a" sizes="(max-width: 860px) 90vw, 44vw" />
                <Photo image={imageB} alt="Working on the boat on the dock" className="as-b" sizes="(max-width: 860px) 50vw, 26vw" />
                {badge ? (
                    <span className="as-badge">
                        <i />
                        {badge}
                    </span>
                ) : null}
            </Reveal>
        </section>
    )
}
