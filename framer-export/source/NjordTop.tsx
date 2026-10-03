import * as React from "react"
import { Label, Button, Photo, Reveal, Stats as StatRow, imgSrc, at, BP, fluid, DISPLAY, MONO } from "./NjordKit.tsx"
import type { Img, Stat, Task } from "./NjordKit.tsx"

/* ================================================================
 Njord / RoboBoat – hero, numbers and the four tasks.
 The tasks sit on a dashed route like waypoints on a course; the route
 is drawn from one waypoint to the next when it scrolls into view.
 ================================================================ */

export const NJORD_TOP_CSS = `
.nh{position:relative;display:flex;flex-direction:column;justify-content:flex-end;min-height:700px;border-radius:28px;overflow:hidden;background:rgb(30,32,40);isolation:isolate}
.nh .nh-photo{position:absolute;inset:0;z-index:-2;background:rgb(40,44,54)}
.nh-shade{position:absolute;inset:0;z-index:-1;pointer-events:none;background:linear-gradient(180deg,rgba(12,12,16,.36) 0%,rgba(12,12,16,.12) 36%,rgba(12,12,16,.9) 100%)}
.nh-logo{position:absolute;top:36px;right:40px;width:280px;padding:20px;border-radius:20px;background:#fff;box-shadow:0 30px 60px -30px rgba(0,0,0,.6)}
.nh-logo img{display:block;width:100%;height:auto}
.nh-body{display:flex;flex-direction:column;align-items:flex-start;gap:22px;max-width:980px;padding:96px 56px 52px}
.nh-title{margin:0;font-family:${DISPLAY};font-weight:700;font-size:${fluid(46, 8.6, 128)};line-height:.92;letter-spacing:-.05em;color:#fff;text-wrap:balance}
.nh-body .mr-lead{color:rgba(255,255,255,.84);max-width:620px}
.nh-chips{display:flex;flex-wrap:wrap;gap:8px}
.nt-stops{--nt-hide:scaleX(0);position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:32px;list-style:none;margin:0;padding:0}
.nt-stop{--d:calc(.15s + var(--i,0) * .42s);position:relative;display:flex;flex-direction:column;gap:10px;padding-top:46px}
.nt-stop::before{content:"";position:absolute;left:10px;top:9.25px;width:calc(100% + 32px);border-top:1.5px dashed rgba(124,70,156,.45);transform-origin:left center;transition:transform .42s linear calc(var(--d) + .1s)}
.nt-stop:last-child::before{content:none}
.nt-mark{position:absolute;left:0;top:0;width:20px;height:20px;border-radius:99px;background:#fff;border:2px solid var(--mr-accent);transition:transform .45s cubic-bezier(.34,1.56,.64,1) var(--d)}
.nt-stop:last-child .nt-mark{background:var(--mr-accent)}
.nt-label{font-family:${MONO};font-size:11.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--mr-accent)}
.nt-stop .mr-h3{font-size:22px}
.nt-route.is-hidden .nt-stop::before{transform:var(--nt-hide);transition:none}
.nt-route.is-hidden .nt-mark{transform:scale(0);transition:none}
@media (prefers-reduced-motion:reduce){.nt-stop::before,.nt-mark{transition:none}.nt-route.is-hidden .nt-stop::before,.nt-route.is-hidden .nt-mark{transform:none}}
${at(BP.lg, `.nh-logo{width:220px;padding:16px}`)}
${at(BP.md, `.nh{min-height:600px;border-radius:24px}.nh-body{padding:180px 28px 34px}.nh-logo{top:24px;right:24px;width:180px;padding:14px;border-radius:16px}.nt-stops{--nt-hide:scaleY(0);grid-template-columns:minmax(0,1fr);gap:30px;padding-left:44px}.nt-stop{padding-top:0}.nt-stop::before{left:-34.75px;top:10px;width:0;height:calc(100% + 30px);border-top:0;border-left:1.5px dashed rgba(124,70,156,.45);transform-origin:center top}.nt-mark{left:-44px;top:0}`)}
${at(BP.sm, `.nh{min-height:540px;border-radius:20px}.nh-body{padding:150px 20px 26px;gap:18px}.nh-title{font-size:clamp(40px,12.4cqi,54px)}.nh-logo{top:18px;right:18px;width:130px;padding:10px;border-radius:12px}.nt-stops{gap:26px;padding-left:38px}.nt-stop::before{left:-28.75px;height:calc(100% + 26px)}.nt-mark{left:-38px}.nt-stop .mr-h3{font-size:21px}`)}
`

export function Hero(props: {
    image?: Img
    logo?: Img
    eyebrow: string
    title: string
    subtitle: string
    chips: string
    primaryLabel: string
    primaryLink: string
    secondaryLabel: string
    secondaryLink: string
}) {
    const chips = (props.chips || "").split("·").map((c) => c.trim()).filter(Boolean)
    const hasLogo = !!(props.logo && props.logo.src)
    return (
        <section className="nh mr-on-dark">
            <Photo image={props.image} alt={props.title} className="nh-photo" sizes="100vw" priority />
            <div className="nh-shade" aria-hidden />
            {hasLogo ? (
                <div className="nh-logo mr-fade">
                    <img src={imgSrc(props.logo!.src, 1024)} alt={props.logo!.alt || "Logo"} draggable={false} />
                </div>
            ) : null}
            <div className="nh-body">
                <div className="mr-rise">
                    <Label light>{props.eyebrow}</Label>
                </div>
                <h1 className="nh-title mr-rise" style={{ animationDelay: "0.08s" }}>
                    {props.title}
                </h1>
                {props.subtitle ? (
                    <p className="mr-lead mr-rise" style={{ animationDelay: "0.16s" }}>
                        {props.subtitle}
                    </p>
                ) : null}
                {chips.length ? (
                    <div className="nh-chips mr-rise" style={{ animationDelay: "0.22s" }}>
                        {chips.map((c, i) => (
                            <span key={i} className="mr-tag mr-tag--glass">
                                {c}
                            </span>
                        ))}
                    </div>
                ) : null}
                <div className="mr-btns mr-rise" style={{ animationDelay: "0.28s" }}>
                    {props.primaryLabel ? (
                        <Button href={props.primaryLink} variant="light">
                            {props.primaryLabel}
                        </Button>
                    ) : null}
                    {props.secondaryLabel ? (
                        <Button href={props.secondaryLink} variant="ghost">
                            {props.secondaryLabel}
                        </Button>
                    ) : null}
                </div>
            </div>
        </section>
    )
}

export function Stats({ stats }: { stats: Stat[] }) {
    return <StatRow items={stats} />
}

export function TaskGrid({ tasks }: { tasks: Task[] }) {
    return (
        <Reveal className="nt-route">
            <ol className="nt-stops">
                {tasks.map((t, i) => (
                    <li key={t.title + i} className="nt-stop" style={{ ["--i" as any]: i } as React.CSSProperties}>
                        <span className="nt-mark" aria-hidden />
                        <span className="nt-label">Task {String(i + 1).padStart(2, "0")}</span>
                        <h3 className="mr-h3">{t.title}</h3>
                        <p className="mr-text">{t.text}</p>
                    </li>
                ))}
            </ol>
        </Reveal>
    )
}
