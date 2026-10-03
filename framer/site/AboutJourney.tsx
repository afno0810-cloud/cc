import * as React from "react"
import { createPortal } from "react-dom"
import { motion, useScroll, useSpring } from "framer-motion"
import { SectionHead, Reveal, Photo, Button, useUI, imgSrc, cx, at, BP, fluid, DISPLAY, MONO, DARK } from "./AboutKit.tsx"
import type { Img } from "./AboutKit.tsx"

/* ================================================================
 JOURNEY – 2025, 2026, 2027, 2028
 visual: "photo" (a photo), "logo" (a logo on a soft panel) or "build" (drawing of Argus next to the big boat)
 The progress bar (2025 ──── 2028) follows you down while you read the chapters
 (request: "denne her kan bli med nedover når man skroller"): a copy of it is fixed
 under the menu bar from the first chapter to the last. Sticky positioning does not
 work inside the Framer page, so the copy is put straight on the page body.
 It takes over the moment the bar itself reaches the menu bar, in the same place and
 at the same width, so the bar never falls behind before it comes along
 (request: "den her kan henge litt igjen før den blir med deg nedover fiks det").
 ================================================================ */

export type Chapter = {
    year: string
    status: "done" | "next" | "future"
    statusLabel: string
    title: string
    text: string
    visual: "photo" | "logo" | "build"
    image?: Img
    links: { label: string; href: string }[]
}

// where the floating copy sits: just under the menu bar (lower on the smaller menu bar)
const FLOAT_TOP = 98
const FLOAT_TOP_SMALL = 84
const SMALL_NAV = "(max-width: 1079px)"

export const ABOUT_JOURNEY_CSS = `
.ajy{display:flex;flex-direction:column;gap:64px}
.ajy-bar{align-self:center;display:flex;align-items:center;gap:12px;width:min(420px,86%);padding:10px 16px;border-radius:14px;background:rgba(255,255,255,.95);border:1px solid rgba(124,70,156,.14);box-shadow:0 16px 30px -24px rgba(16,16,17,.4);font-family:${MONO};font-size:12px;color:${DARK};box-sizing:border-box}
.ajy-bar.is-docked{visibility:hidden}
.ajy-track{position:relative;flex:1;height:3px;border-radius:3px;background:rgba(124,70,156,.15);overflow:hidden}
.ajy-track div{position:absolute;inset:0;transform-origin:left;background:var(--mr-accent)}
.ajy-float{position:fixed;z-index:900;top:${FLOAT_TOP}px;left:50%;width:min(420px,calc(100vw - 40px));transform:translateX(-50%);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);background:rgba(255,255,255,.9);box-shadow:0 18px 36px -22px rgba(60,30,100,.45);opacity:0;visibility:hidden;pointer-events:none;transition:opacity .3s ease,visibility 0s linear .3s}
.ajy-float.is-on{opacity:1;visibility:visible;transition:none}
.ajy-float.is-above{transition:none}
@media ${SMALL_NAV}{.ajy-float{top:${FLOAT_TOP_SMALL}px}}
@media (prefers-reduced-motion:reduce){.ajy-float{transition:none}}
.ajy-list{display:flex;flex-direction:column;gap:120px}
.ajy-row{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:64px;align-items:center}
.ajy-row.is-flip .ajy-visual{order:2}
.ajy-visual{position:relative}
.ajy-media{height:440px;border-radius:24px}
.ajy-copy{display:flex;flex-direction:column;align-items:flex-start;gap:16px}
.ajy-year{font-family:${DISPLAY};font-weight:700;font-size:${fluid(76, 10, 150)};line-height:.85;letter-spacing:-.06em;color:${DARK};font-variant-numeric:tabular-nums}
.ajy-row.is-next .ajy-year{color:var(--mr-accent)}
.ajy-row.is-future .ajy-year{color:transparent;-webkit-text-stroke:1.5px rgb(82,53,239)}
.ajy-status{display:inline-flex;align-items:center;gap:8px;height:30px;padding:0 12px;border-radius:8px;font-family:${MONO};font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;background:rgba(124,70,156,.1);color:var(--mr-accent)}
.ajy-status.is-next{background:${DARK};color:#fff}
.ajy-status.is-future{background:transparent;border:1px dashed rgba(82,53,239,.5);color:rgb(82,53,239)}
.ajy-copy h3{margin:0;font-family:${DISPLAY};font-weight:700;font-size:${fluid(26, 2.8, 40)};line-height:1.06;letter-spacing:-.04em;color:${DARK}}
.ajy-copy .mr-lead{max-width:520px}
.ajy-links{display:flex;flex-wrap:wrap;gap:10px}
.ajy-logo{position:relative;display:flex;align-items:center;justify-content:center;height:440px;border-radius:24px;overflow:hidden;background:radial-gradient(120% 90% at 50% 40%,#fff 0%,rgb(245,239,251) 55%,rgb(229,215,243) 100%);border:1px solid rgba(124,70,156,.16)}
.ajy-logo img{position:relative;width:58%;max-width:360px;max-height:56%;object-fit:contain;display:block;border-radius:14px}
.ajy-logo svg{position:absolute;inset:0;width:100%;height:100%}
.ajy-bp{position:relative;height:440px;border-radius:24px;overflow:hidden;background:linear-gradient(160deg,rgb(30,22,50),rgb(16,16,17))}
.ajy-bp-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(214,186,236,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(214,186,236,.07) 1px,transparent 1px);background-size:28px 28px}
.ajy-bp svg{position:absolute;left:4%;top:8%;width:92%;height:84%;overflow:visible}
.ajy-bp text{font-family:${MONO};font-size:10.5px;letter-spacing:.12em;text-transform:uppercase}
.ajy-bp-draw{stroke-dasharray:1;stroke-dashoffset:0;transition:stroke-dashoffset 1.4s cubic-bezier(.5,0,.3,1) .15s}
.ajy-bp-big{transition:opacity 1s ease .9s}
.mr-reveal.is-hidden .ajy-bp-draw{stroke-dashoffset:1;transition:none}
.mr-reveal.is-hidden .ajy-bp-big{opacity:0;transition:none}
${at(BP.md, `.ajy-list{gap:80px}.ajy-row{grid-template-columns:minmax(0,1fr);gap:28px}.ajy-row.is-flip .ajy-visual{order:0}.ajy-media,.ajy-logo,.ajy-bp{height:340px}`)}
${at(BP.sm, `.ajy{gap:48px}.ajy-list{gap:64px}.ajy-media,.ajy-logo,.ajy-bp{height:280px;border-radius:18px}.ajy-bp svg{left:2%;width:96%}.ajy-bp text{font-size:14px;letter-spacing:.06em}`)}
`

/* 2028: a technical drawing – Argus next to the much bigger boat we want to build.
 The big boat is dashed because it is not built yet. No loops, it draws in once. */

function BuildPanel() {
    const line = "rgba(214,186,236,0.9)"
    return (
        <div className="ajy-bp">
            <div className="ajy-bp-grid" aria-hidden />
            <svg viewBox="0 38 480 250" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Drawing of Argus next to the much bigger boat planned for 2028">
                {/* water */}
                <path d="M16 222 H464" stroke="rgba(214,186,236,0.4)" strokeWidth="1.2" />
                <path d="M16 232 Q 40 227 64 232 T 112 232 T 160 232 T 208 232 T 256 232 T 304 232 T 352 232 T 400 232 T 448 232" fill="none" stroke="rgba(214,186,236,0.16)" strokeWidth="1" />

                {/* Argus – small, solid, built */}
                <g fill="none" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
                    <path className="ajy-bp-draw" pathLength={1} d="M34 208 H100 L106 200 V208 Q103 226 90 228 H46 Q36 226 34 208 Z" />
                    <path className="ajy-bp-draw" pathLength={1} d="M52 208 V199 H80 V208 M64 199 V184 M58 178 H70 V184 H58 Z" />
                </g>
                <text x="70" y="256" textAnchor="middle" fill="#fff">
                    Argus
                </text>
                <text x="70" y="271" textAnchor="middle" fill="rgba(255,255,255,0.5)">
                    2025 · built
                </text>

                {/* the big boat – dashed, planned */}
                <g className="ajy-bp-big">
                    <g fill="none" stroke={line} strokeWidth="1.6" strokeDasharray="6 5" strokeLinejoin="round">
                        <path d="M150 176 H420 Q438 176 452 158 L448 186 Q442 224 414 228 H176 Q154 226 150 200 Z" />
                        <path d="M206 176 V138 Q206 132 212 132 H320 Q330 132 336 140 L364 176" />
                        <path d="M252 132 V96 M242 96 A10 10 0 0 1 262 96 Z M294 132 V110" />
                    </g>
                    <g fill="none" stroke={line} strokeWidth="1.2">
                        <rect x="218" y="144" width="20" height="13" rx="2" />
                        <rect x="246" y="144" width="20" height="13" rx="2" />
                        <rect x="274" y="144" width="20" height="13" rx="2" />
                        <path d="M304 144 H322 L331 157 H304 Z" />
                    </g>
                    {/* crew in the wheelhouse */}
                    <g fill={line}>
                        <circle cx="228" cy="149" r="2.6" />
                        <circle cx="284" cy="149" r="2.6" />
                    </g>
                    {/* callouts */}
                    <g stroke="rgba(214,186,236,0.55)" strokeWidth="1" fill="none">
                        <path d="M262 92 L300 62 H318" />
                        <path d="M332 150 L376 118 H392" />
                    </g>
                    <text x="322" y="66" fill={line}>
                        Sensors
                    </text>
                    <text x="396" y="122" fill={line}>
                        Crew
                    </text>
                    <text x="301" y="256" textAnchor="middle" fill={line}>
                        The big boat
                    </text>
                    <text x="301" y="271" textAnchor="middle" fill="rgba(214,186,236,0.5)">
                        2028 · planned
                    </text>
                </g>
            </svg>
        </div>
    )
}

function LogoPanel({ logo }: { logo?: Img }) {
    return (
        <div className="ajy-logo">
            <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden>
                <g fill="none" stroke="rgba(124,70,156,0.16)" strokeWidth="1">
                    <circle cx="200" cy="150" r="120" strokeDasharray="2 6" />
                    <circle cx="200" cy="150" r="96" />
                </g>
                <g fill="none" stroke="rgba(124,70,156,0.18)" strokeWidth="1.4">
                    <path d="M0 250 Q 50 238 100 250 T 200 250 T 300 250 T 400 250" />
                    <path d="M0 266 Q 50 254 100 266 T 200 266 T 300 266 T 400 266" />
                </g>
            </svg>
            {logo && logo.src ? <img src={imgSrc(logo.src, 1024)} alt={logo.alt || "Logo"} loading="lazy" decoding="async" draggable={false} /> : null}
        </div>
    )
}

function ChapterRow({ c, index }: { c: Chapter; index: number }) {
    return (
        <Reveal className={cx("ajy-row", index % 2 === 1 && "is-flip", c.status === "next" && "is-next", c.status === "future" && "is-future")}>
            <div className="ajy-visual">
                {c.visual === "logo" ? <LogoPanel logo={c.image} /> : c.visual === "build" ? <BuildPanel /> : <Photo image={c.image} className="ajy-media" sizes="(max-width: 860px) 100vw, 50vw" />}
            </div>
            <div className="ajy-copy">
                <span className="ajy-year" aria-hidden>
                    {c.year}
                </span>
                <span className={cx("ajy-status", c.status === "next" && "is-next", c.status === "future" && "is-future")}>{c.statusLabel}</span>
                <h3>{c.title}</h3>
                <p className="mr-lead">{c.text}</p>
                {c.links.length ? (
                    <div className="ajy-links">
                        {c.links.map((l) => (
                            <Button key={l.href + l.label} href={l.href} variant="outline" down={l.href.startsWith("#")}>
                                {l.label}
                            </Button>
                        ))}
                    </div>
                ) : null}
            </div>
        </Reveal>
    )
}

// where the bar is: "above" (still in its place on the page), "on" (fixed under the menu bar), "past" (the chapters are read)
type Dock = "above" | "on" | "past"

export function Journey(props: { eyebrow: string; title: string; text: string; chapters: Chapter[] }) {
    const { still } = useUI()
    const ref = React.useRef<HTMLDivElement>(null)
    const barRef = React.useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 70%"] })
    const fill = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.4 })
    // the floating copy takes over when the bar itself reaches the menu bar, and goes when the last chapter has passed
    const [dock, setDock] = React.useState<Dock>("above")
    const [box, setBox] = React.useState<{ left: number; width: number } | null>(null)
    const [mounted, setMounted] = React.useState(false)
    React.useEffect(() => {
        setMounted(true)
        if (typeof window === "undefined") return
        let raf = 0
        const check = () => {
            raf = 0
            const bar = barRef.current
            const list = ref.current
            if (!bar || !list) return
            const top = window.matchMedia(SMALL_NAV).matches ? FLOAT_TOP_SMALL : FLOAT_TOP
            const b = bar.getBoundingClientRect()
            const end = list.getBoundingClientRect().bottom
            setDock(b.top > top ? "above" : end > 260 ? "on" : "past")
            setBox((old) => (old && Math.abs(old.left - b.left) < 0.5 && Math.abs(old.width - b.width) < 0.5 ? old : { left: b.left, width: b.width }))
        }
        const queue = () => {
            if (!raf) raf = requestAnimationFrame(check)
        }
        check()
        // capture: also when the page scrolls in a container and not in the window
        window.addEventListener("scroll", queue, { passive: true, capture: true })
        window.addEventListener("resize", queue)
        return () => {
            window.removeEventListener("scroll", queue, true)
            window.removeEventListener("resize", queue)
            if (raf) cancelAnimationFrame(raf)
        }
    }, [])
    const first = props.chapters.length ? props.chapters[0].year : ""
    const last = props.chapters.length ? props.chapters[props.chapters.length - 1].year : ""
    const bar = (extra?: string, style?: React.CSSProperties, barRefArg?: React.Ref<HTMLDivElement>) => (
        <div ref={barRefArg} className={cx("ajy-bar", extra)} style={style} aria-hidden>
            <span>{first}</span>
            <div className="ajy-track">
                <motion.div style={{ scaleX: still ? 1 : fill }} />
            </div>
            <span style={{ color: "var(--mr-accent)" }}>{last}</span>
        </div>
    )
    const floatOn = mounted && !still && dock === "on"
    const floatStyle = { ["--mr-accent" as any]: "rgb(124, 70, 156)", ...(box ? { left: box.left, width: box.width, transform: "none" } : null) } as React.CSSProperties
    return (
        <section id="about-journey" className="ajy" style={{ scrollMarginTop: 100 }}>
            <SectionHead eyebrow={props.eyebrow} title={props.title} text={props.text} center />
            {bar(floatOn ? "is-docked" : undefined, undefined, barRef)}
            {mounted && !still && typeof document !== "undefined"
                ? createPortal(bar(cx("ajy-float", floatOn && "is-on", dock === "above" && "is-above"), floatStyle), document.body)
                : null}
            <div ref={ref} className="ajy-list">
                {props.chapters.map((c, i) => (
                    <ChapterRow key={c.year} c={c} index={i} />
                ))}
            </div>
        </section>
    )
}
