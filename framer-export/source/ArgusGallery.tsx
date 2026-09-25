import * as React from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHead, Reveal, Photo, Arrow, imgSrc, at, BP, BODY, EASE } from "./ArgusKit.tsx"
import type { GalleryItem } from "./ArgusKit.tsx"
import { hasSrc } from "./ArgusKit.tsx"

/* ================================================================
 Project Argus – photos from the dock, opened large on click
 ================================================================ */

export const ARGUS_GALLERY_CSS = `
.ag{column-count:3;column-gap:16px}
.ag-item{break-inside:avoid;margin:0 0 16px}
.ag-tile{position:relative;display:block;width:100%;padding:0;border:0;border-radius:18px;overflow:hidden;cursor:zoom-in;background:none;text-align:left}
.ag-tile .mr-photo{width:100%}
.ag-cap{position:absolute;left:0;right:0;bottom:0;padding:36px 16px 14px;background:linear-gradient(180deg,rgba(12,12,16,0),rgba(12,12,16,.72));color:#fff;font-family:${BODY};font-weight:600;font-size:14.5px;opacity:0;transform:translateY(8px);transition:opacity .3s ease,transform .3s ease}
@media (hover:hover){.ag-tile:hover .ag-cap{opacity:1;transform:none}}
@media (hover:none){.ag-cap{opacity:1;transform:none}}
.ag-tile:focus-visible{outline:2px solid var(--mr-accent);outline-offset:3px}
${at(BP.lg, `.ag{column-count:2}`)}
${at(BP.sm, `.ag{column-count:1}.ag-item{margin-bottom:12px}.ag-tile{border-radius:16px}`)}
`

const RATIOS = ["4 / 5", "4 / 3", "1 / 1", "3 / 4", "4 / 3", "4 / 5", "16 / 10"]

export function Gallery({ eyebrow, title, items, onOpen }: { eyebrow: string; title: string; items: GalleryItem[]; onOpen: (i: number) => void }) {
    return (
        <section className="mr-sec">
            <SectionHead eyebrow={eyebrow} title={title} />
            <Reveal className="ag">
                {items.map((g, i) => (
                    <div key={i} className="ag-item">
                        <button type="button" className="ag-tile mr-zoom" onClick={() => onOpen(i)} aria-label={`Open photo: ${g.caption || "Argus"}`}>
                            <Photo image={g.image} alt={g.caption} sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 33vw" style={{ aspectRatio: RATIOS[i % RATIOS.length] }} />
                            {g.caption ? <span className="ag-cap">{g.caption}</span> : null}
                        </button>
                    </div>
                ))}
            </Reveal>
        </section>
    )
}

export function Lightbox({ items, index, onClose, onNav }: { items: GalleryItem[]; index: number | null; onClose: () => void; onNav: (dir: number) => void }) {
    React.useEffect(() => {
        if (index === null) return
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
            if (e.key === "ArrowRight") onNav(1)
            if (e.key === "ArrowLeft") onNav(-1)
        }
        window.addEventListener("keydown", onKey)
        const html = document.documentElement
        const prev = html.style.overflow
        html.style.overflow = "hidden"
        return () => {
            window.removeEventListener("keydown", onKey)
            html.style.overflow = prev
        }
    }, [index, onClose, onNav])

    if (typeof document === "undefined") return null
    const item = index !== null ? items[index] : null

    const navBtn = (side: "left" | "right"): React.CSSProperties => ({
        position: "absolute",
        top: "50%",
        [side]: 18,
        transform: "translateY(-50%)",
        width: 48,
        height: 48,
        borderRadius: 12,
        border: "1px solid rgba(255,255,255,0.3)",
        background: "rgba(255,255,255,0.08)",
        color: "#fff",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    })

    return createPortal(
        <AnimatePresence>
            {item && hasSrc(item.image) ? (
                <motion.div
                    key="lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label={item.caption || "Photo"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onClick={onClose}
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 99999,
                        background: "rgba(10, 8, 16, 0.92)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 16,
                        padding: 24,
                    }}
                >
                    <motion.img
                        key={item.image!.src}
                        src={imgSrc(item.image!.src, 2048)}
                        alt={item.caption}
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        style={{ maxWidth: "min(1200px, 88vw)", maxHeight: "80vh", objectFit: "contain", borderRadius: 14 }}
                    />
                    {item.caption ? <span style={{ color: "rgba(255,255,255,0.85)", fontFamily: BODY, fontWeight: 500, fontSize: 15 }}>{item.caption}</span> : null}
                    <button type="button" aria-label="Close" onClick={onClose} style={{ ...navBtn("right"), top: 18, transform: "none", width: 44, height: 44 }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
                            <path d="M1 1l12 12M13 1L1 13" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                    {items.length > 1 ? (
                        <>
                            <button
                                type="button"
                                aria-label="Previous photo"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    onNav(-1)
                                }}
                                style={navBtn("left")}
                            >
                                <Arrow dir="left" />
                            </button>
                            <button
                                type="button"
                                aria-label="Next photo"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    onNav(1)
                                }}
                                style={navBtn("right")}
                            >
                                <Arrow />
                            </button>
                        </>
                    ) : null}
                </motion.div>
            ) : null}
        </AnimatePresence>,
        document.body
    )
}
