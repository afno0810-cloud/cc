import * as React from "react"
import { Label, Button, Photo, CopyButton, at, BP, fluid, DISPLAY, BODY, MONO, LAVENDER } from "./SiteKit.tsx"
import type { Img } from "./SiteKit.tsx"

/* ================================================================
 HERO – Want to sponsor us
 Photo of the team, the offer on the left, the contact card on the right.
 ================================================================ */

export const SPONSOR_HERO_CSS = `
.sh{position:relative;display:flex;flex-direction:column;justify-content:space-between;gap:56px;min-height:760px;border-radius:28px;overflow:hidden;background:rgb(22,22,26);isolation:isolate}
.sh-photo{position:absolute;inset:0;z-index:-2;background:rgb(40,42,50)}
.sh-shade{position:absolute;inset:0;z-index:-1;pointer-events:none;background:linear-gradient(180deg,rgba(12,12,16,.55) 0%,rgba(12,12,16,.2) 34%,rgba(12,12,16,.9) 100%)}
.sh-top{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;padding:32px 40px 0}
.sh-bottom{display:flex;align-items:flex-end;justify-content:space-between;gap:32px;padding:0 44px 48px}
.sh-copy{display:flex;flex-direction:column;align-items:flex-start;gap:24px;max-width:760px}
.sh-copy .mr-h1{font-size:${fluid(46, 8, 124)};color:#fff}
.sh-copy .mr-lead{color:rgba(255,255,255,.84);max-width:580px}
.sh-card{flex:0 0 auto;width:330px;display:flex;flex-direction:column;gap:12px;padding:22px 22px 20px;border-radius:18px;background:rgba(16,16,17,.55);border:1px solid rgba(255,255,255,.18);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:#fff}
.sh-card small{font-family:${MONO};font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:${LAVENDER}}
.sh-card b{font-family:${DISPLAY};font-weight:700;font-size:17px;line-height:1.25;letter-spacing:-.02em}
.sh-card a{font-family:${BODY};font-weight:600;font-size:15px;color:rgba(255,255,255,.92);text-decoration:none;word-break:break-all}
.sh-card .mr-btn{align-self:flex-start;height:40px;padding:0 14px}
${at(BP.lg, `.sh-bottom{flex-direction:column;align-items:stretch}.sh-card{width:100%;max-width:420px}`)}
${at(BP.md, `.sh{min-height:680px}.sh-top{padding:26px 28px 0}.sh-bottom{padding:0 28px 34px;gap:26px}`)}
${at(BP.sm, `.sh{min-height:0;gap:170px;border-radius:20px}.sh-top{padding:20px 20px 0}.sh-top .mr-tag{display:none}.sh-bottom{padding:0 20px 24px;gap:22px}.sh-copy{gap:18px}.sh-copy .mr-h1{font-size:clamp(40px,12.4cqi,54px)}.sh-card{max-width:none;padding:18px}`)}
`

export function Hero(props: {
    image?: Img
    eyebrow: string
    title: string
    text: string
    email: string
    role: string
    name: string
    primary: string
    secondary: string
}) {
    return (
        <section className="sh mr-on-dark">
            <Photo image={props.image} alt="The Marinor NTNU team" className="sh-photo" sizes="100vw" priority />
            <div className="sh-shade" aria-hidden />
            <div className="sh-top mr-rise">
                <Label light>{props.eyebrow}</Label>
                <span className="mr-tag mr-tag--glass">
                    <i className="mr-dot mr-dot--live" />
                    Open for partners
                </span>
            </div>
            <div className="sh-bottom">
                <div className="sh-copy">
                    <h1 className="mr-h1 mr-rise" style={{ animationDelay: "0.08s" }}>
                        {props.title}
                    </h1>
                    {props.text ? (
                        <p className="mr-lead mr-rise" style={{ animationDelay: "0.18s" }}>
                            {props.text}
                        </p>
                    ) : null}
                    <div className="mr-btns mr-rise" style={{ animationDelay: "0.26s" }}>
                        <Button href={`mailto:${props.email}`} variant="light" arrow={false}>
                            {props.primary}
                        </Button>
                        <Button href="#sponsor-benefits" variant="ghost" down>
                            {props.secondary}
                        </Button>
                    </div>
                </div>
                <div className="sh-card mr-rise" style={{ animationDelay: "0.34s" }}>
                    <small>{props.name ? props.name : "Get in touch"}</small>
                    <b>{props.role}</b>
                    <a href={`mailto:${props.email}`}>{props.email}</a>
                    <CopyButton text={props.email} light />
                </div>
            </div>
        </section>
    )
}
