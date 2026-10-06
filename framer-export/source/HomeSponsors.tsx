import * as React from "react"
import { Button, Reveal, Contours, at, BP, DISPLAY } from "./SiteKit.tsx"
import { SponsorTiers } from "./SponsorTiers.tsx"
import type { Sponsor } from "./SponsorTiers.tsx"

/* ================================================================
 Home – sponsors on a dark panel, with a short call-out below them
 ================================================================ */

export const STAGE_CSS = `
.hs-outer{width:100%;max-width:1480px;margin:0 auto;padding:0 16px}
.hs{padding:112px 40px 96px;display:flex;flex-direction:column;align-items:center;gap:72px}
.hs-callout{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:14px 26px;padding:14px 14px 14px 30px;border-radius:18px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14)}
.hs-callout p{margin:0;font-family:${DISPLAY};font-weight:700;font-size:24px;letter-spacing:-.03em;color:#fff}
${at(BP.md, `.hs{padding:88px 28px 80px;gap:56px}`)}
${at(BP.sm, `.hs-outer{padding:0 8px}.hs{padding:72px 14px 64px;gap:48px}.hs-callout{flex-direction:column;text-align:center;padding:22px 18px}.hs-callout p{font-size:21px}`)}
`

export function SponsorStage(props: {
    eyebrow: string
    title: string
    text?: string
    sponsors: Sponsor[]
    calloutText: string
    calloutLabel: string
    calloutLink: string
}) {
    return (
        <div className="hs-outer">
            <section className="hs mr-panel mr-dark mr-on-dark">
                <Contours color="rgba(255,255,255,0.1)" />
                <SponsorTiers eyebrow={props.eyebrow} title={props.title} text={props.text} sponsors={props.sponsors} light />
                {props.calloutText || props.calloutLabel ? (
                    <Reveal className="hs-callout">
                        {props.calloutText ? <p>{props.calloutText}</p> : null}
                        {props.calloutLabel ? (
                            <Button href={props.calloutLink} variant="light">
                                {props.calloutLabel}
                            </Button>
                        ) : null}
                    </Reveal>
                ) : null}
            </section>
        </div>
    )
}
