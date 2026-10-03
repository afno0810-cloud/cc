import * as React from "react"
import { SectionHead, Reveal, Contours, Arrow, at, BP, MONO, DISPLAY, LAVENDER } from "./ArgusKit.tsx"
import type { NavStep } from "./ArgusKit.tsx"
import { DEFAULT_NAV } from "./ArgusKit.tsx"

/* ================================================================
 Project Argus – how Argus finds its way.
 The chain from sensors to motors, in the order the data flows:
 see → locate → map → decide → plan → drive, and a 5G link to shore.
 A small light runs through the steps to show the data moving.
 ================================================================ */

export const ARGUS_NAV_CSS = `
.an{display:flex;flex-direction:column;gap:48px;padding:clamp(40px,6vw,88px);padding:clamp(40px,6cqi,88px)}
.an-steps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin:0;padding:0;list-style:none}
.an-step{position:relative;display:flex;flex-direction:column;gap:10px;padding:26px 24px 28px;border-radius:18px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);overflow:hidden}
.an-step::before{content:"";position:absolute;left:0;right:0;top:0;height:2px;background:rgba(214,186,236,.14)}
.an-step::after{content:"";position:absolute;top:0;left:-40%;width:40%;height:2px;background:linear-gradient(90deg,rgba(214,186,236,0),${LAVENDER});animation:an-flow 4.2s linear infinite;animation-delay:calc(var(--i) * .7s)}
@keyframes an-flow{0%{left:-40%}24%,100%{left:100%}}
.an-top{display:flex;align-items:baseline;justify-content:space-between;gap:12px}
.an-no{font-family:${MONO};font-size:12px;letter-spacing:.06em;color:${LAVENDER}}
.an-kind{font-family:${MONO};font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.55)}
.an-step h3{margin:0;font-family:${DISPLAY};font-weight:700;font-size:22px;line-height:1.15;letter-spacing:-.03em;color:#fff}
.an-step p{margin:0;font-weight:500;font-size:15.5px;line-height:1.5;color:rgba(255,255,255,.72)}
.an-more{display:inline-flex;align-items:center;gap:6px;margin-top:4px;font-weight:600;font-size:14px;color:${LAVENDER};text-decoration:none;transition:gap .3s ease}
@media (hover:hover){.an-more:hover{gap:10px}}
.an-link{display:flex;align-items:center;gap:18px;padding:20px 24px;border-radius:18px;border:1px dashed rgba(214,186,236,.35)}
.an-signal{display:flex;align-items:flex-end;gap:3px;height:22px;flex:0 0 auto}
.an-signal i{width:4px;border-radius:2px;background:${LAVENDER};animation:an-bar 1.8s ease-in-out infinite}
.an-signal i:nth-child(1){height:30%}.an-signal i:nth-child(2){height:55%;animation-delay:.15s}.an-signal i:nth-child(3){height:80%;animation-delay:.3s}.an-signal i:nth-child(4){height:100%;animation-delay:.45s}
@keyframes an-bar{0%,100%{opacity:1}50%{opacity:.3}}
.an-link b{font-family:${DISPLAY};font-weight:700;font-size:20px;letter-spacing:-.02em;color:#fff;white-space:nowrap}
.an-link p{margin:0;font-weight:500;font-size:15.5px;line-height:1.5;color:rgba(255,255,255,.72)}
.mr-still .an-step::after,.mr-still .an-signal i{animation:none}
.mr-still .an-step::after{display:none}
@media (prefers-reduced-motion:reduce){.an-step::after{display:none}.an-signal i{animation:none}}
${at(BP.lg, `.an-steps{grid-template-columns:repeat(2,minmax(0,1fr))}`)}
${at(BP.sm, `.an{padding:44px 20px 40px;gap:36px}.an-steps{grid-template-columns:minmax(0,1fr);gap:10px}.an-step{padding:20px 18px 22px}.an-link{flex-direction:column;align-items:flex-start;gap:10px;padding:18px}`)}
`

export function Navigation({ eyebrow, title, text, steps, link }: { eyebrow: string; title: string; text: string; steps?: NavStep[]; link: { title: string; text: string } }) {
    const list = steps && steps.length ? steps : DEFAULT_NAV
    return (
        <section id="argus-autonomy" className="an mr-panel mr-dark mr-on-dark" style={{ scrollMarginTop: 100 }}>
            <Contours />
            <SectionHead eyebrow={eyebrow} title={title} text={text} light />
            <Reveal>
                <ol className="an-steps">
                    {list.map((s, i) => (
                        <li key={s.title} className="an-step" style={{ ["--i" as any]: i } as React.CSSProperties}>
                            <div className="an-top">
                                <span className="an-no">{String(i + 1).padStart(2, "0")}</span>
                                <span className="an-kind">{s.kind}</span>
                            </div>
                            <h3>{s.title}</h3>
                            <p>{s.text}</p>
                            {s.link ? (
                                <a className="an-more" href={s.link.href} target="_blank" rel="noopener noreferrer">
                                    {s.link.label}
                                    <Arrow size={13} dir="out" />
                                </a>
                            ) : null}
                        </li>
                    ))}
                </ol>
            </Reveal>
            <Reveal>
                <div className="an-link">
                    <span className="an-signal" aria-hidden>
                        <i />
                        <i />
                        <i />
                        <i />
                    </span>
                    <b>{link.title}</b>
                    <p>{link.text}</p>
                </div>
            </Reveal>
        </section>
    )
}
