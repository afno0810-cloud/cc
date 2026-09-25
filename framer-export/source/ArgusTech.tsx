import * as React from "react"
import { SectionHead, Reveal, Photo, at, BP, MONO, DARK } from "./ArgusKit.tsx"
import type { Img, Tech as TechItem } from "./ArgusKit.tsx"
import { DEFAULT_TECH } from "./ArgusKit.tsx"

/* ================================================================
 Project Argus – what is on board. A spec list next to the photo;
 the photo stays in place while the list scrolls past on desktop.
 ================================================================ */

export const ARGUS_TECH_CSS = `
.at-grid{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.2fr);gap:56px;align-items:start}
.at-media{position:sticky;top:110px}
.at-photo{height:640px;border-radius:24px}
.at-caption{position:absolute;left:16px;right:16px;bottom:16px;display:flex;align-items:center;gap:10px;padding:13px 16px;border-radius:14px;background:rgba(255,255,255,.92);font-weight:600;font-size:14px;color:${DARK}}
.at-caption i{width:8px;height:8px;border-radius:99px;background:var(--mr-accent);flex:0 0 auto}
.at-tag{position:absolute;top:16px;right:16px}
.at-list{list-style:none;margin:0;padding:0;border-top:1px solid rgba(16,16,17,.16)}
.at-row{display:grid;grid-template-columns:40px minmax(0,12em) minmax(0,1fr);gap:6px 24px;align-items:baseline;padding:26px 0 28px;border-bottom:1px solid rgba(16,16,17,.16)}
.at-num{font-family:${MONO};font-size:12px;letter-spacing:.06em;color:var(--mr-accent)}
.at-row h3{font-size:20px;line-height:1.2}
${at(BP.lg, `.at-grid{grid-template-columns:minmax(0,1fr);gap:36px}.at-media{position:relative;top:0}.at-photo{height:460px}`)}
${at(BP.sm, `.at-photo{height:360px;border-radius:18px}.at-row{grid-template-columns:28px minmax(0,1fr);gap:4px 12px;padding:20px 0 22px}.at-row p{grid-column:2}.at-row h3{font-size:19px}`)}
`

export function Tech({ eyebrow, title, text, image, caption, items }: { eyebrow: string; title: string; text: string; image?: Img; caption: string; items: TechItem[] }) {
    const list = items && items.length ? items : DEFAULT_TECH
    return (
        <section className="mr-sec">
            <SectionHead eyebrow={eyebrow} title={title} text={text} />
            <div className="at-grid">
                <Reveal className="at-media">
                    <div style={{ position: "relative" }}>
                        <Photo image={image} alt="Sensors mounted on the electronics case" className="at-photo" sizes="(max-width: 1100px) 100vw, 44vw" />
                        <span className="at-tag mr-tag mr-tag--glass">
                            <i className="mr-dot mr-dot--live" />
                            Sensing
                        </span>
                        {caption ? (
                            <div className="at-caption">
                                <i />
                                {caption}
                            </div>
                        ) : null}
                    </div>
                </Reveal>
                <Reveal delay={0.06}>
                    <ol className="at-list">
                        {list.map((t, i) => (
                            <li key={t.title + i} className="at-row">
                                <span className="at-num">{String(i + 1).padStart(2, "0")}</span>
                                <h3 className="mr-h3">{t.title}</h3>
                                <p className="mr-text">{t.text}</p>
                            </li>
                        ))}
                    </ol>
                </Reveal>
            </div>
        </section>
    )
}
