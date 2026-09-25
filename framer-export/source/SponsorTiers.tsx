import * as React from "react"
import { SectionHead, Reveal, cx, imgSrc, at, BP, MONO, DARK, GRAY, DISPLAY } from "./SiteKit.tsx"
import type { Img } from "./SiteKit.tsx"

/* ================================================================
 Our sponsors – grouped as gold / silver / bronze.
 Every logo opens the sponsor's own website in a new tab.
 ================================================================ */

export type Tier = "gold" | "silver" | "bronze"
export type Sponsor = { name: string; logo?: Img; url?: string; tier: Tier }

const LOGO = "https://framerusercontent.com/images/"
export const DEFAULT_SPONSORS: Sponsor[] = [
    { name: "Kongsberg Discovery", tier: "gold", url: "https://www.kongsberg.com/discovery/", logo: { src: LOGO + "7QrKtTqKzIYR85VrJ0iAfBNSkrI.png", alt: "Kongsberg Discovery" } },
    { name: "DNV", tier: "silver", url: "https://www.dnv.com", logo: { src: LOGO + "1pSSbaZETmTQr2YM0tgWpR50Ozw.png", alt: "DNV" } },
    { name: "Telenor", tier: "silver", url: "https://www.telenor.no", logo: { src: LOGO + "QqyKUM2vSwDQ7mI6cp0FjiulL4.png", alt: "Telenor" } },
    { name: "NTNU", tier: "bronze", url: "https://www.ntnu.no", logo: { src: LOGO + "MUp34G7Qt4MbMcEutaJFB5fLIU.png", alt: "NTNU" } },
    { name: "Frifond", tier: "bronze", url: "https://frifond.no", logo: { src: LOGO + "s8vuqdph74nH2cOIezUgXyD9Sc.png", alt: "Frifond" } },
]

/* "www.dnv.com" → "https://www.dnv.com", so a website typed without https:// still opens the right site */
export function fullUrl(url?: string) {
    const u = (url || "").trim()
    if (!u) return undefined
    if (/^[a-z][a-z0-9+.-]*:/i.test(u)) return u
    return "https://" + u.replace(/^\/+/, "")
}

/* A sponsor from the list in the right panel gets its website (and logo) from the
 built-in list above if it is left empty there – matched on the name */
export function withDefaults(s: Sponsor): Sponsor {
    const def = DEFAULT_SPONSORS.find((d) => d.name.toLowerCase() === (s.name || "").trim().toLowerCase())
    return {
        ...s,
        tier: s.tier || (def ? def.tier : "bronze"),
        url: fullUrl(s.url) || (def ? def.url : undefined),
        logo: s.logo && s.logo.src ? s.logo : def ? def.logo : undefined,
    }
}

const TIERS: { key: Tier; label: string; color: string }[] = [
    { key: "gold", label: "Gold partner", color: "rgb(212, 168, 58)" },
    { key: "silver", label: "Silver partners", color: "rgb(170, 177, 186)" },
    { key: "bronze", label: "Bronze partners", color: "rgb(184, 120, 74)" },
]

export const TIERS_CSS = `
.st{display:flex;flex-direction:column;align-items:center;gap:64px;width:100%}
.st-tiers{display:flex;flex-direction:column;align-items:center;gap:56px;width:100%}
.st-tier{display:flex;flex-direction:column;align-items:center;gap:22px;width:100%}
.st-name{display:flex;align-items:center;gap:14px;width:100%;max-width:760px;font-family:${MONO};font-size:12px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;color:${GRAY}}
.st-name::before,.st-name::after{content:"";flex:1 1 0;height:1px;background:currentColor;opacity:.25}
.st-name i{width:9px;height:9px;border-radius:99px;flex:0 0 auto}
.mr-on-dark .st-name{color:rgba(255,255,255,.66)}
.st-row{display:flex;flex-wrap:wrap;justify-content:center;gap:16px;width:100%}
.st-card{position:relative;display:flex;align-items:center;justify-content:center;background:#fff;border:1px solid rgba(16,16,17,.08);border-radius:16px;text-decoration:none;transition:transform .35s cubic-bezier(.2,.7,.2,1),box-shadow .35s ease,border-color .35s ease}
.mr-on-dark .st-card{border-color:transparent}
.st-card img{display:block;width:auto;height:auto;object-fit:contain}
.st-card span{font-family:${DISPLAY};font-weight:700;letter-spacing:-.03em;color:${DARK};text-align:center}
.st-card em{position:absolute;right:12px;top:10px;opacity:0;font-style:normal;color:${GRAY};transition:opacity .25s ease}
@media (hover:hover){a.st-card:hover{transform:translateY(-4px);box-shadow:0 22px 44px -26px rgba(16,16,17,.5)}a.st-card:hover em{opacity:1}}
.st-card:focus-visible{outline:2px solid var(--mr-accent);outline-offset:3px}
.st-gold .st-card{width:560px;max-width:100%;height:300px;padding:44px}
.st-gold .st-card img{max-width:360px;max-height:200px}
.st-gold .st-card span{font-size:40px}
.st-silver .st-card{width:300px;height:160px;padding:28px}
.st-silver .st-card img{max-width:190px;max-height:84px}
.st-silver .st-card span{font-size:24px}
.st-bronze .st-card{width:180px;height:108px;padding:18px}
.st-bronze .st-card img{max-width:112px;max-height:58px}
.st-bronze .st-card span{font-size:15px}
${at(BP.md, `.st{gap:48px}.st-tiers{gap:44px}.st-gold .st-card{width:460px;height:250px;padding:36px}.st-gold .st-card img{max-width:300px;max-height:160px}.st-silver .st-card{width:260px;height:140px}`)}
${at(BP.sm, `.st-tiers{gap:36px}.st-tier{gap:16px}.st-row{gap:10px}.st-gold .st-card{width:100%;height:200px;padding:28px}.st-gold .st-card img{max-width:240px;max-height:120px}.st-silver .st-card{width:calc(50% - 5px);height:112px;padding:18px}.st-silver .st-card img{max-width:130px;max-height:60px}.st-bronze .st-card{width:calc(50% - 5px);height:92px;padding:16px}.st-bronze .st-card img{max-width:100px;max-height:48px}`)}
`

function SponsorCard({ s }: { s: Sponsor }) {
    const [broken, setBroken] = React.useState(false)
    const src = s.logo && s.logo.src ? s.logo.src : ""
    const inner =
        src && !broken ? (
            <img src={imgSrc(src, 1024)} alt={(s.logo && s.logo.alt) || s.name} loading="lazy" decoding="async" draggable={false} onError={() => setBroken(true)} />
        ) : (
            <span>{s.name}</span>
        )
    if (!s.url) return <div className="st-card">{inner}</div>
    return (
        <a className="st-card" href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`${s.name} – open their website`} title={`${s.name} – ${s.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}`}>
            {inner}
            <em aria-hidden>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" style={{ transform: "rotate(-45deg)" }}>
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </em>
        </a>
    )
}

/* light = white heading, for use on a dark background (home page) */
export function SponsorTiers(props: { eyebrow: string; title: string; text?: string; sponsors?: Sponsor[]; light?: boolean }) {
    const all = (props.sponsors && props.sponsors.length ? props.sponsors : DEFAULT_SPONSORS).map(withDefaults)
    return (
        <section id="our-sponsors" className={cx("st", props.light && "mr-on-dark")} style={{ scrollMarginTop: 90 }}>
            <SectionHead eyebrow={props.eyebrow} title={props.title} text={props.text} center light={!!props.light} />
            <div className="st-tiers">
                {TIERS.map((t) => {
                    const list = all.filter((s) => (s.tier || "bronze") === t.key)
                    if (!list.length) return null
                    return (
                        <Reveal key={t.key} className={cx("st-tier", `st-${t.key}`)}>
                            <div className="st-name">
                                <i style={{ background: t.color }} />
                                {t.label}
                            </div>
                            <div className="st-row">
                                {list.map((s, i) => (
                                    <SponsorCard key={s.name + i} s={s} />
                                ))}
                            </div>
                        </Reveal>
                    )
                })}
            </div>
        </section>
    )
}
