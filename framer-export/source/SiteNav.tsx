import * as React from "react"
import { addPropertyControls, ControlType, RenderTarget } from "framer"
import {
    DISPLAY,
    BODY,
    DARK,
    GRAY,
    ACCENT,
    LOGO_ICON,
    LOGO_WORD,
    THUMB,
    PATHS,
    CONTACT,
    LOGO_CSS,
    SiteLogo,
    cx,
    imgSrc,
    atName,
    useWidth,
    usePath,
    useSiteRouter,
    pathOf,
    hashOf,
    onSamePageHash,
    ArrowIcon,
    InstagramIcon,
    LinkedInIcon,
    MailIcon,
} from "./SiteKit.tsx"
import type { Img } from "./SiteKit.tsx"

/* ================================================================
 Site navigation – Marinor NTNU
 · Sits on the soft purple band at the top of every page. After you scroll it
   turns into a slim white bar, hides on the way down and comes back on the way up.
 · Projects / Team / Competitions open a small menu with their sub-pages.
 · Below 1080 px: a menu button with a full-screen menu.
 · Desktop links and the menu button are both in the HTML and CSS picks one,
   so a phone gets the phone layout from the very first paint.
 · Clicks on our own pages go through Framer's router (works in Preview too).
 ================================================================ */

type Thumb = { img?: string; fit?: "cover" | "contain"; text?: string; tone?: "dark" | "soft"; boat?: boolean }
type Sub = { label: string; note: string; href: string; thumb: Thumb }
type Item = { key: string; label: string; href: string; children?: Sub[]; allLabel?: string }

interface Props {
    accent: string
    logoIcon?: Img
    logoWord?: Img
    joinLabel: string
    homeLink: string
    aboutLink: string
    projectsLink: string
    argusLink: string
    proteusLink: string
    teamLink: string
    team2026Link: string
    team2025Link: string
    competitionsLink: string
    njordLink: string
    roboLink: string
    sponsorLink: string
    joinLink: string
    style?: React.CSSProperties
}

const EASE_CSS = "cubic-bezier(.22,1,.36,1)"
const DESKTOP = 1080

/* Rules for the phone/tablet layout. The bar is its own container ("nav"),
 so the Framer Tablet/Phone frames switch too, not only real devices. */
const COMPACT = `.nv-in{height:76px;padding:0 32px}.nv-bar.is-solid .nv-in{height:64px}.nv .mr-logo,.nv-bar.is-solid .mr-logo{--logo-icon:40px;--logo-word:116px}.nv-links,.nv-join-full{display:none}.nv-join-short{display:inline-flex}.nv-burger{display:block}`

const CSS =
    LOGO_CSS +
    `
.nv{position:relative;width:100%;height:104px;font-family:${BODY};color:${DARK};-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background:linear-gradient(180deg,rgba(124,70,156,.22) 0%,rgba(124,70,156,.08) 55%,rgba(124,70,156,0) 100%)}
.nv *,.nv *::before,.nv *::after{box-sizing:border-box}
.nv a{-webkit-tap-highlight-color:transparent}
.nv-bar{position:fixed;top:0;left:0;right:0;z-index:1000;container-type:inline-size;container-name:nav;background-color:rgba(255,255,255,0);border-bottom:1px solid rgba(124,70,156,0);transition:transform .38s ${EASE_CSS},background-color .35s ease,border-color .35s ease,box-shadow .35s ease}
.nv.is-canvas .nv-bar{position:absolute}
.nv-bar.is-solid{background-color:rgba(255,255,255,.97);border-bottom-color:rgba(124,70,156,.13);box-shadow:0 12px 30px -24px rgba(16,16,17,.4)}
.nv-bar.is-hidden{transform:translateY(-105%)}
.nv-in{height:104px;max-width:1320px;margin:0 auto;padding:0 40px;display:flex;align-items:center;justify-content:space-between;gap:24px;transition:height .35s ${EASE_CSS}}
.nv-bar.is-solid .nv-in{height:72px}
.nv .mr-logo{--logo-icon:56px;--logo-word:150px}
.nv-bar.is-solid .mr-logo{--logo-icon:42px;--logo-word:128px}
.nv-right{display:flex;align-items:center;gap:18px}

.nv-links{display:flex;align-items:center;gap:2px;list-style:none;margin:0;padding:0}
.nv-item{position:relative}
.nv-link{position:relative;display:inline-flex;align-items:center;gap:6px;padding:10px 14px;border-radius:10px;font-weight:500;font-size:15px;letter-spacing:-.01em;color:rgba(16,16,17,.72);text-decoration:none;white-space:nowrap;transition:color .2s ease,background-color .2s ease,scale .25s ease}
.nv-link:hover,.nv-item.is-open>.nv-link,.nv-link:focus-visible{color:var(--nv-accent);background:rgba(124,70,156,.08);outline:none}
.nv-link.is-active{color:var(--nv-accent)}
.nv-link.is-active::after{content:"";position:absolute;left:50%;bottom:3px;width:5px;height:5px;margin-left:-2.5px;border-radius:99px;background:var(--nv-accent)}
.nv-link.has-kids.is-active::after{margin-left:-10.5px}
.nv-chev{display:flex;opacity:.7;transition:transform .25s ease}
.nv-item.is-open .nv-chev{transform:rotate(180deg)}

.nv-drop{position:absolute;top:100%;left:50%;width:320px;margin-left:-160px;padding-top:10px;z-index:3;animation:nv-drop .22s ${EASE_CSS} both}
@keyframes nv-drop{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.nv-drop-box{position:relative;background:#fff;border-radius:18px;border:1px solid rgba(16,16,17,.07);box-shadow:0 30px 60px -30px rgba(40,20,70,.38),0 4px 14px -8px rgba(16,16,17,.12);padding:8px}
.nv-drop-box::before{content:"";position:absolute;top:-6px;left:50%;margin-left:-6px;width:12px;height:12px;background:#fff;border-left:1px solid rgba(16,16,17,.07);border-top:1px solid rgba(16,16,17,.07);border-top-left-radius:3px;transform:rotate(45deg)}
.nv-row{display:flex;align-items:center;gap:14px;padding:9px;border-radius:12px;text-decoration:none;transition:background-color .2s ease}
.nv-row:hover,.nv-row:focus-visible,.nv-row.is-active{background:rgba(124,70,156,.07);outline:none}
.nv-row-text{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0}
.nv-row-title{display:flex;align-items:center;gap:8px;font-family:${DISPLAY};font-weight:600;font-size:16px;letter-spacing:-.02em;color:${DARK}}
.nv-row-title i{width:6px;height:6px;border-radius:99px;background:var(--nv-accent)}
.nv-row-note{font-weight:500;font-size:13px;color:${GRAY};white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.nv-row-go{display:flex;opacity:0;transform:translateX(-6px);transition:opacity .25s ease,transform .25s ease}
.nv-row:hover .nv-row-go,.nv-row:focus-visible .nv-row-go{opacity:1;transform:none}
.nv-all{display:flex;align-items:center;justify-content:space-between;margin:6px 2px 0;padding:12px 11px 6px;border-top:1px solid rgba(16,16,17,.07);font-weight:600;font-size:14px;color:var(--nv-accent);text-decoration:none}
.nv-all svg{transition:transform .25s ease}
.nv-all:hover svg{transform:translateX(3px)}

.nv-thumb{position:relative;width:46px;height:46px;border-radius:12px;overflow:hidden;flex:0 0 auto;display:flex;align-items:center;justify-content:center;background:rgb(236,230,243);border:1px solid rgba(16,16,17,.06)}
.nv-thumb img{width:100%;height:100%;object-fit:cover;display:block}
.nv-thumb.is-contain{background:#fff}
.nv-thumb.is-contain img{object-fit:contain;padding:5px}
.nv-thumb.is-text{border:0;background:rgba(124,70,156,.12);color:var(--nv-accent);font-family:${DISPLAY};font-weight:700;font-size:17px;letter-spacing:-.04em}
.nv-thumb.is-dark{background:${DARK};color:#fff}
.nv-thumb.is-boat{background:rgba(124,70,156,.1);border:1px dashed rgba(124,70,156,.35)}
.nv-thumb.is-sm{width:28px;height:28px;border-radius:8px;font-size:11px}
.nv-thumb.is-sm.is-contain img{padding:3px}

.nv-join{display:inline-flex;align-items:center;gap:8px;height:44px;padding:0 18px;border-radius:12px;background:var(--nv-accent);color:#fff;font-weight:600;font-size:15px;letter-spacing:-.01em;text-decoration:none;white-space:nowrap;flex:0 0 auto;transition:background-color .25s ease,scale .3s cubic-bezier(.2,.7,.2,1),box-shadow .3s ease}
.nv-join svg{transition:transform .25s ease}
@media (hover:hover){.nv-link:hover{scale:1.05}.nv-join:hover{background:${DARK};scale:1.05;box-shadow:0 12px 24px -14px rgba(16,16,17,.6)}.nv-burger:hover{background:#fff;border-color:var(--nv-accent)}.nv-m-link:hover{color:var(--nv-accent)}.nv-m-join:hover{background:${DARK}}.nv-join:hover svg{transform:translateX(3px)}}
.nv-join:focus-visible,.nv-burger:focus-visible{outline:2px solid var(--nv-accent);outline-offset:3px}
.nv-join-short{display:none;height:40px;padding:0 14px;font-size:14px}
.nv.is-open .nv-join-short{display:none}

.nv-burger{position:relative;display:none;width:46px;height:46px;padding:0;border-radius:12px;border:1px solid rgba(124,70,156,.25);background:rgba(255,255,255,.75);cursor:pointer;flex:0 0 auto;transition:background-color .3s ease,border-color .3s ease}
.nv-burger i{position:absolute;left:14px;right:14px;top:50%;height:1.8px;margin-top:-.9px;border-radius:2px;background:${DARK};transition:transform .3s ${EASE_CSS},background-color .3s ease}
.nv-burger i:first-child{transform:translateY(-4px)}
.nv-burger i:last-child{transform:translateY(4px)}
.nv.is-open .nv-burger{background:${DARK};border-color:${DARK}}
.nv.is-open .nv-burger i{background:#fff}
.nv.is-open .nv-burger i:first-child{transform:rotate(45deg)}
.nv.is-open .nv-burger i:last-child{transform:rotate(-45deg)}

.nv-menu{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;background:linear-gradient(180deg,#fff 0%,rgb(248,244,251) 50%,rgb(230,216,240) 100%);animation:nv-fade .3s ease both}
.nv.is-canvas .nv-menu{position:absolute;bottom:auto;height:760px}
@keyframes nv-fade{from{opacity:0}to{opacity:1}}
@keyframes nv-up{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
.nv-menu-in{min-height:100%;padding:86px 32px 30px;display:flex;flex-direction:column;gap:30px;max-width:720px;margin:0 auto}
.nv-m-list{list-style:none;margin:0;padding:0}
.nv-m-item{border-bottom:1px solid rgba(124,70,156,.14);padding:14px 0;animation:nv-up .45s ${EASE_CSS} both}
.nv-m-item.has-kids{padding-bottom:16px}
.nv-m-link{display:flex;align-items:center;justify-content:space-between;gap:12px;font-family:${DISPLAY};font-weight:600;font-size:31px;line-height:1.1;letter-spacing:-.04em;color:${DARK};text-decoration:none}
.nv-m-link.is-active{color:var(--nv-accent)}
.nv-m-link b{width:8px;height:8px;border-radius:99px;background:var(--nv-accent);flex:0 0 auto}
.nv-m-link span{display:flex;opacity:.35}
.nv-m-subs{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}
.nv-m-sub{display:inline-flex;align-items:center;gap:8px;padding:5px 14px 5px 5px;border-radius:12px;background:#fff;border:1px solid rgba(124,70,156,.18);color:${DARK};font-weight:600;font-size:14px;text-decoration:none}
.nv-m-sub.is-active{background:var(--nv-accent);border-color:var(--nv-accent);color:#fff}
.nv-m-foot{margin-top:auto;display:flex;flex-direction:column;gap:18px;animation:nv-up .45s ${EASE_CSS} .35s both}
.nv-m-join{display:flex;align-items:center;justify-content:space-between;padding:18px 22px;border-radius:14px;background:var(--nv-accent);color:#fff;font-family:${DISPLAY};font-weight:600;font-size:19px;letter-spacing:-.02em;text-decoration:none}
.nv-m-contact{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
.nv-m-mail{display:inline-flex;align-items:center;gap:8px;font-weight:600;font-size:14px;color:${DARK};text-decoration:none}
.nv-m-socials{display:flex;gap:8px}
.nv-m-soc{width:40px;height:40px;border-radius:10px;background:#fff;border:1px solid rgba(124,70,156,.18);display:flex;align-items:center;justify-content:center}
@media (max-width:759px){.nv-menu-in{padding:86px 22px 30px}}
@media (max-width:479px){.nv-menu-in{padding:86px 18px 30px}}
@media (max-width:399px){.nv-m-link{font-size:27px}}

@media (max-width:${DESKTOP - 1}px){.nv{height:76px}}
${atName("nav", DESKTOP - 1, COMPACT, 0)}
${atName("nav", 759, `.nv-in{padding:0 22px}`, 0)}
${atName("nav", 479, `.nv-in{padding:0 18px}.nv-join-short{display:none}`, 0)}

.nv.is-still .nv-bar,.nv.is-still .nv-in,.nv.is-still .mr-logo-icon,.nv.is-still .mr-logo-word{transition:none}
.nv.is-still .nv-drop,.nv.is-still .nv-menu,.nv.is-still .nv-m-item,.nv.is-still .nv-m-foot{animation:none}
@media (prefers-reduced-motion:reduce){.nv-bar,.nv-in{transition:none}.nv-drop,.nv-menu,.nv-m-item,.nv-m-foot{animation:none}}
`

/* ---------- Small square picture in the menus ---------- */
function ThumbBox({ t, small = false }: { t: Thumb; small?: boolean }) {
    if (t.img) {
        return (
            <span className={cx("nv-thumb", t.fit === "contain" && "is-contain", small && "is-sm")}>
                <img src={imgSrc(t.img, 512)} alt="" loading="lazy" decoding="async" draggable={false} />
            </span>
        )
    }
    if (t.text) {
        return <span className={cx("nv-thumb", "is-text", t.tone === "dark" && "is-dark", small && "is-sm")}>’{t.text}</span>
    }
    return (
        <span className={cx("nv-thumb", "is-boat", small && "is-sm")}>
            <svg width={small ? 15 : 24} height={small ? 15 : 24} viewBox="0 0 24 24" fill="none" stroke="var(--nv-accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M3 15h18l-2.5 4h-13z" strokeDasharray="2.4 2.2" />
                <path d="M8 15V9.5h5.5L16 15" />
                <path d="M10.5 9.5V5.5" />
            </svg>
        </span>
    )
}

function Dropdown({ item, path }: { item: Item; path: string }) {
    return (
        <div className="nv-drop">
            <div className="nv-drop-box" role="menu" aria-label={item.label}>
                {(item.children || []).map((c) => {
                    const active = !!path && pathOf(c.href) === path
                    return (
                        <a key={c.label} href={c.href} role="menuitem" className={cx("nv-row", active && "is-active")} onClick={(e: React.MouseEvent) => onSamePageHash(e, c.href)}>
                            <ThumbBox t={c.thumb} />
                            <span className="nv-row-text">
                                <span className="nv-row-title">
                                    {c.label}
                                    {active ? <i /> : null}
                                </span>
                                <span className="nv-row-note">{c.note}</span>
                            </span>
                            <span className="nv-row-go">
                                <ArrowIcon color="var(--nv-accent)" />
                            </span>
                        </a>
                    )
                })}
                <a href={item.href} className="nv-all">
                    {item.allLabel}
                    <ArrowIcon color="var(--nv-accent)" />
                </a>
            </div>
        </div>
    )
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 * @framerIntrinsicWidth 1200
 */
export default function SiteNav(props: Props) {
    const isCanvas = RenderTarget.current() === RenderTarget.canvas
    const [reduce, setReduce] = React.useState(false)
    React.useEffect(() => {
        if (typeof window !== "undefined" && window.matchMedia) setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    }, [])
    const still = isCanvas || reduce
    const accent = props.accent || ACCENT
    const rootRef = React.useRef<HTMLDivElement>(null)
    const w = useWidth(rootRef)
    const desktop = w >= DESKTOP
    const router = useSiteRouter()
    const locPath = usePath()
    const path = router.currentPath || locPath

    const L = (v: string | undefined, d: string) => (v && v.length ? v : d)
    const links = {
        home: L(props.homeLink, PATHS.home),
        about: L(props.aboutLink, PATHS.about),
        projects: L(props.projectsLink, PATHS.projects),
        argus: L(props.argusLink, PATHS.argus),
        proteus: L(props.proteusLink, PATHS.proteus),
        team: L(props.teamLink, PATHS.team),
        team2026: L(props.team2026Link, PATHS.team2026),
        team2025: L(props.team2025Link, PATHS.team2025),
        competitions: L(props.competitionsLink, PATHS.competitions),
        njord: L(props.njordLink, PATHS.njord),
        robo: L(props.roboLink, PATHS.robo),
        sponsor: L(props.sponsorLink, PATHS.sponsor),
        join: L(props.joinLink, PATHS.join),
    }
    const icon = props.logoIcon && props.logoIcon.src ? props.logoIcon.src : LOGO_ICON
    const word = props.logoWord && props.logoWord.src ? props.logoWord.src : LOGO_WORD
    const joinLabel = props.joinLabel || "Join Marinor"

    const items: Item[] = [
        { key: "about", label: "About us", href: links.about },
        {
            key: "projects",
            label: "Projects",
            href: links.projects,
            allLabel: "All projects",
            children: [
                { label: "Argus", note: "Our first autonomous boat", href: links.argus, thumb: { img: THUMB.argus, fit: "cover" } },
                { label: "Proteus", note: "Our next boat, in the works", href: links.proteus, thumb: { boat: true } },
            ],
        },
        {
            key: "team",
            label: "Team",
            href: links.team,
            allLabel: "All teams",
            children: [
                { label: "Team 2026", note: "This season's crew", href: links.team2026, thumb: { text: "26", tone: "dark" } },
                { label: "Team 2025", note: "The founding crew", href: links.team2025, thumb: { text: "25", tone: "soft" } },
            ],
        },
        {
            key: "competitions",
            label: "Competitions",
            href: links.competitions,
            allLabel: "All competitions",
            children: [
                { label: "Njord Challenge", note: "Trondheim, Norway", href: links.njord, thumb: { img: THUMB.njord, fit: "cover" } },
                { label: "RoboBoat", note: "Florida, USA", href: links.robo, thumb: { img: THUMB.robo, fit: "contain" } },
            ],
        },
        { key: "sponsor", label: "Sponsor us", href: links.sponsor },
    ]

    const isActive = (it: Item) => {
        if (!path || hashOf(it.href)) return false
        const p = pathOf(it.href)
        if (it.children) return path === p || path.startsWith(p + "/") || it.children.some((c) => pathOf(c.href) === path)
        return path === p
    }

    /* ----- scroll: slim white bar after the top, hide on the way down ----- */
    const [atTop, setAtTop] = React.useState(true)
    const [hidden, setHidden] = React.useState(false)
    React.useEffect(() => {
        if (isCanvas || typeof window === "undefined") return
        let last = window.scrollY
        let ticking = false
        const update = () => {
            ticking = false
            const y = window.scrollY
            setAtTop(y < 12)
            const dy = y - last
            if (y < 200) {
                setHidden(false)
                last = y
                return
            }
            if (Math.abs(dy) < 5) return
            setHidden(dy > 0)
            last = y
        }
        const onScroll = () => {
            if (!ticking) {
                ticking = true
                window.requestAnimationFrame(update)
            }
        }
        update()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [isCanvas])

    /* ----- drop-downs (desktop) ----- */
    const [openKey, setOpenKey] = React.useState<string | null>(null)
    const closeTimer = React.useRef<number | undefined>(undefined)
    const openNow = (k: string | null) => {
        if (typeof window !== "undefined") window.clearTimeout(closeTimer.current)
        setOpenKey(k)
    }
    const closeSoon = () => {
        if (typeof window === "undefined") return
        window.clearTimeout(closeTimer.current)
        closeTimer.current = window.setTimeout(() => setOpenKey(null), 160)
    }

    /* ----- full-screen menu (phone / tablet) ----- */
    const [menuOpen, setMenuOpen] = React.useState(false)
    React.useEffect(() => {
        setMenuOpen(false)
        setOpenKey(null)
    }, [path])
    React.useEffect(() => {
        if (desktop) setMenuOpen(false)
        else setOpenKey(null)
    }, [desktop])
    React.useEffect(() => {
        if (isCanvas || typeof document === "undefined" || !menuOpen) return
        const html = document.documentElement
        const prev = html.style.overflow
        html.style.overflow = "hidden"
        return () => {
            html.style.overflow = prev
        }
    }, [menuOpen, isCanvas])
    React.useEffect(() => {
        if (typeof window === "undefined") return
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setMenuOpen(false)
                setOpenKey(null)
            }
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [])

    const solid = !atTop && !menuOpen
    const barHidden = hidden && !openKey && !menuOpen && !isCanvas

    /* tap on a link in the full-screen menu */
    const onMenuLink = (e: React.MouseEvent, href: string) => {
        onSamePageHash(e, href, () => setMenuOpen(false))
        if (!hashOf(href) && path && pathOf(href) === path) {
            e.preventDefault()
            setMenuOpen(false)
        }
    }

    const mobileItems: Item[] = [{ key: "home", label: "Home", href: links.home }, ...items]

    /* The height comes from the CSS (104 px, 76 px below 1080 px) so it is right before
     JavaScript runs – a height passed in from Framer is ignored, except on the canvas. */
    const { height: _ignored, ...rest } = (props.style || {}) as React.CSSProperties

    return (
        <div
            ref={rootRef}
            onClickCapture={router.go}
            className={cx("nv", isCanvas && "is-canvas", still && "is-still", menuOpen && "is-open")}
            style={{ ...rest, ["--nv-accent" as any]: accent, ...(isCanvas ? { height: desktop ? 104 : 76 } : null) } as React.CSSProperties}
        >
            {/* raw CSS – React would escape it inside a normal <style> on the server */}
            <style dangerouslySetInnerHTML={{ __html: CSS }} />
            <header className={cx("nv-bar", solid && "is-solid", barHidden && "is-hidden")}>
                <nav aria-label="Main" className="nv-in">
                    <SiteLogo href={links.home} icon={icon} word={word} />
                    <div className="nv-right">
                        <ul className="nv-links">
                            {items.map((it) => {
                                const active = isActive(it)
                                const open = openKey === it.key
                                return (
                                    <li
                                        key={it.key}
                                        className={cx("nv-item", open && "is-open")}
                                        onMouseEnter={() => openNow(it.children ? it.key : null)}
                                        onMouseLeave={() => {
                                            if (it.children) closeSoon()
                                        }}
                                        onFocus={() => openNow(it.children ? it.key : null)}
                                        onBlur={(e: React.FocusEvent<HTMLLIElement>) => {
                                            if (!e.currentTarget.contains(e.relatedTarget as Node)) closeSoon()
                                        }}
                                    >
                                        <a
                                            href={it.href}
                                            className={cx("nv-link", !!it.children && "has-kids", active && "is-active")}
                                            aria-haspopup={it.children ? "menu" : undefined}
                                            aria-expanded={it.children ? open : undefined}
                                            aria-current={active ? "page" : undefined}
                                            onClick={(e: React.MouseEvent) => onSamePageHash(e, it.href)}
                                        >
                                            {it.label}
                                            {it.children ? (
                                                <span className="nv-chev" aria-hidden>
                                                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                                                        <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            ) : null}
                                        </a>
                                        {open && it.children && desktop ? <Dropdown item={it} path={path} /> : null}
                                    </li>
                                )
                            })}
                        </ul>
                        <a href={links.join} className="nv-join nv-join-full">
                            {joinLabel}
                            <ArrowIcon color="#fff" size={13} />
                        </a>
                        <a href={links.join} className="nv-join nv-join-short">
                            Join
                            <ArrowIcon color="#fff" size={13} />
                        </a>
                        <button type="button" className="nv-burger" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
                            <i />
                            <i />
                        </button>
                    </div>
                </nav>
            </header>

            {/* Full-screen menu for phone and tablet */}
            {menuOpen && !desktop ? (
                <div className="nv-menu" data-lenis-prevent>
                    <div className="nv-menu-in">
                        <nav aria-label="Menu">
                            <ul className="nv-m-list">
                                {mobileItems.map((it, i) => {
                                    const active = isActive(it)
                                    return (
                                        <li key={it.key} className={cx("nv-m-item", !!it.children && "has-kids")} style={{ animationDelay: `${0.04 + i * 0.045}s` }}>
                                            <a href={it.href} className={cx("nv-m-link", active && "is-active")} aria-current={active ? "page" : undefined} onClick={(e: React.MouseEvent) => onMenuLink(e, it.href)}>
                                                {it.label}
                                                {active ? (
                                                    <b />
                                                ) : (
                                                    <span>
                                                        <ArrowIcon color={DARK} size={16} />
                                                    </span>
                                                )}
                                            </a>
                                            {it.children ? (
                                                <div className="nv-m-subs">
                                                    {it.children.map((c) => {
                                                        const on = !!path && pathOf(c.href) === path
                                                        return (
                                                            <a key={c.label} href={c.href} className={cx("nv-m-sub", on && "is-active")} onClick={(e: React.MouseEvent) => onMenuLink(e, c.href)}>
                                                                <ThumbBox t={c.thumb} small />
                                                                {c.label}
                                                            </a>
                                                        )
                                                    })}
                                                </div>
                                            ) : null}
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>

                        <div className="nv-m-foot">
                            <a href={links.join} className="nv-m-join" onClick={(e: React.MouseEvent) => onMenuLink(e, links.join)}>
                                {joinLabel}
                                <ArrowIcon color="#fff" size={16} />
                            </a>
                            <div className="nv-m-contact">
                                <a href={`mailto:${CONTACT.email}`} className="nv-m-mail">
                                    <MailIcon color={accent} />
                                    {CONTACT.email}
                                </a>
                                <div className="nv-m-socials">
                                    <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Marinor NTNU on Instagram" className="nv-m-soc">
                                        <InstagramIcon size={17} color={DARK} />
                                    </a>
                                    <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Marinor NTNU on LinkedIn" className="nv-m-soc">
                                        <LinkedInIcon size={16} color={DARK} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

SiteNav.defaultProps = {
    accent: ACCENT,
    joinLabel: "Join Marinor",
    homeLink: PATHS.home,
    aboutLink: PATHS.about,
    projectsLink: PATHS.projects,
    argusLink: PATHS.argus,
    proteusLink: PATHS.proteus,
    teamLink: PATHS.team,
    team2026Link: PATHS.team2026,
    team2025Link: PATHS.team2025,
    competitionsLink: PATHS.competitions,
    njordLink: PATHS.njord,
    roboLink: PATHS.robo,
    sponsorLink: PATHS.sponsor,
    joinLink: PATHS.join,
}

addPropertyControls(SiteNav, {
    accent: { type: ControlType.Color, title: "Accent", defaultValue: ACCENT },
    logoIcon: { type: ControlType.ResponsiveImage, title: "Logo Mark" },
    logoWord: { type: ControlType.ResponsiveImage, title: "Logo Text" },
    joinLabel: { type: ControlType.String, title: "Join Button", defaultValue: "Join Marinor" },
    homeLink: { type: ControlType.Link, title: "Home", defaultValue: PATHS.home },
    aboutLink: { type: ControlType.Link, title: "About us", defaultValue: PATHS.about },
    projectsLink: { type: ControlType.Link, title: "Projects", defaultValue: PATHS.projects },
    argusLink: { type: ControlType.Link, title: "Argus", defaultValue: PATHS.argus },
    proteusLink: { type: ControlType.Link, title: "Proteus", defaultValue: PATHS.proteus },
    teamLink: { type: ControlType.Link, title: "Team", defaultValue: PATHS.team },
    team2026Link: { type: ControlType.Link, title: "Team 2026", defaultValue: PATHS.team2026 },
    team2025Link: { type: ControlType.Link, title: "Team 2025", defaultValue: PATHS.team2025 },
    competitionsLink: { type: ControlType.Link, title: "Competitions", defaultValue: PATHS.competitions },
    njordLink: { type: ControlType.Link, title: "Njord", defaultValue: PATHS.njord },
    roboLink: { type: ControlType.Link, title: "RoboBoat", defaultValue: PATHS.robo },
    sponsorLink: { type: ControlType.Link, title: "Sponsor us", defaultValue: PATHS.sponsor },
    joinLink: { type: ControlType.Link, title: "Join", defaultValue: PATHS.join },
})
