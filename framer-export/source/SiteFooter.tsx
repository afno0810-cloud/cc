import * as React from "react"
import { addPropertyControls, ControlType, RenderTarget } from "framer"
import {
    BODY,
    MONO,
    DARK,
    GRAY,
    ACCENT,
    LOGO_ICON,
    LOGO_WORD,
    PATHS,
    CONTACT,
    LOGO_CSS,
    SiteLogo,
    atName,
    useSiteRouter,
    onSamePageHash,
    copyText,
    ArrowIcon,
    InstagramIcon,
    LinkedInIcon,
    MailIcon,
    PinIcon,
} from "./SiteKit.tsx"
import type { Img } from "./SiteKit.tsx"
import { freshCopy } from "./CopyUpdates.tsx"

/* ================================================================
 Site footer – Marinor NTNU
 White at the top that bleeds into the Marinor purple at the bottom.
 The footer is its own container, so the layout follows its width
 (also in the Tablet and Phone frames in Framer).
 Clicks on our own pages go through Framer's router (works in Preview too).
 ================================================================ */

type FLinkData = { label: string; href: string; external?: boolean }

interface Props {
    accent: string
    logoIcon?: Img
    logoWord?: Img
    tagline: string
    email: string
    street: string
    city: string
    mapsLink: string
    instagram: string
    linkedin: string
    orgNr: string
    showOrgNr: boolean
    homeLink: string
    aboutLink: string
    competitionsLink: string
    teamLink: string
    argusLink: string
    proteusLink: string
    njordLink: string
    roboLink: string
    joinLink: string
    sponsorLink: string
    style?: React.CSSProperties
}

const CSS =
    LOGO_CSS +
    `
.ft{position:relative;width:100%;overflow:hidden;container-type:inline-size;container-name:ft;font-family:${BODY};color:${DARK};-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background:linear-gradient(180deg,rgba(124,70,156,0) 0%,rgba(124,70,156,.06) 30%,rgba(124,70,156,.17) 70%,rgba(124,70,156,.3) 100%)}
.ft *,.ft *::before,.ft *::after{box-sizing:border-box}
.ft a{-webkit-tap-highlight-color:transparent}
.ft-wave{position:absolute;left:0;right:0;top:0;width:100%;height:24px;pointer-events:none}
.ft-in{max-width:1320px;margin:0 auto;padding:96px 40px 34px}
.ft-grid{display:grid;grid-template-columns:minmax(0,1.5fr) repeat(3,minmax(0,.72fr));gap:40px;align-items:start}
.ft-brand{display:flex;flex-direction:column;gap:24px;max-width:440px}
.ft .mr-logo{--logo-icon:62px;--logo-word:170px}
.ft-tag{margin:0;font-weight:500;font-size:16px;line-height:1.55;letter-spacing:-.01em;color:${GRAY};max-width:380px}
.ft-contact{display:flex;flex-direction:column;gap:14px}
.ft-mail{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.ft-mail a{font-weight:600;font-size:15px;color:${DARK};text-decoration:none}
.ft-mail a:hover{color:var(--ft-accent)}
.ft-copy{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 10px;border-radius:8px;border:1px solid rgba(124,70,156,.22);background:rgba(255,255,255,.7);color:var(--ft-accent);font-family:${BODY};font-weight:600;font-size:12px;cursor:pointer;white-space:nowrap;transition:background-color .25s ease,color .25s ease,border-color .25s ease,scale .25s ease}
.ft-copy.is-done{background:var(--ft-accent);border-color:var(--ft-accent);color:#fff}
.ft-addr{display:flex;align-items:flex-start;gap:12px;text-decoration:none;font-weight:500;font-size:15px;line-height:1.45;color:rgba(16,16,17,.75)}
.ft-addr svg{margin-top:2px}
.ft-addr:hover{color:${DARK}}
.ft-socials{display:flex;gap:8px;flex-wrap:wrap}
.ft-soc{display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 15px 0 11px;border-radius:10px;background:rgba(255,255,255,.75);border:1px solid rgba(124,70,156,.2);color:${DARK};font-weight:600;font-size:14px;text-decoration:none;transition:background-color .25s ease,color .25s ease,border-color .25s ease,scale .25s ease}
.ft-soc svg{color:var(--ft-accent);transition:color .25s ease}
@media (hover:hover){.ft-soc:hover{background:var(--ft-accent);border-color:var(--ft-accent);color:#fff;scale:1.05}.ft-soc:hover svg{color:#fff}.ft-copy:hover{background:var(--ft-accent);border-color:var(--ft-accent);color:#fff;scale:1.06}.ft-link:hover{translate:3px 0}.ft-addr:hover{color:var(--ft-accent)}}
.ft-col{display:flex;flex-direction:column;gap:18px;padding-top:14px}
.ft-col-title{font-family:${MONO};font-size:12px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;color:var(--ft-accent)}
.ft-links{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:13px}
.ft-link{display:inline-flex;align-items:center;gap:6px;font-weight:500;font-size:16px;letter-spacing:-.01em;color:rgba(16,16,17,.7);text-decoration:none;transition:color .2s ease,translate .25s ease}
.ft-link span{position:relative}
.ft-link span::after{content:"";position:absolute;left:0;right:0;bottom:-3px;height:1.5px;border-radius:2px;background:var(--ft-accent);transform:scaleX(0);transform-origin:0 50%;transition:transform .3s cubic-bezier(.22,1,.36,1)}
.ft-link:hover,.ft-link:focus-visible{color:${DARK};outline:none}
.ft-link:hover span::after,.ft-link:focus-visible span::after{transform:scaleX(1)}
.ft-bottom{margin-top:76px;padding-top:22px;border-top:1px solid rgba(124,70,156,.25);display:flex;align-items:center;justify-content:space-between;gap:14px}
.ft-legal{display:flex;flex-wrap:wrap;gap:6px 22px;font-weight:500;font-size:13px;color:rgba(16,16,17,.62)}
.ft-top{display:inline-flex;align-items:center;gap:10px;padding:0;border:0;background:transparent;cursor:pointer;font-family:${BODY};font-weight:600;font-size:13px;color:${DARK}}
.ft-top i{width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.7);border:1px solid rgba(124,70,156,.28);color:var(--ft-accent);transition:transform .25s ease,background-color .25s ease,border-color .25s ease,color .25s ease}
@media (hover:hover){.ft-top:hover i{transform:translateY(-3px);background:var(--ft-accent);border-color:var(--ft-accent);color:#fff}}
.ft-top:focus-visible,.ft-copy:focus-visible,.ft-soc:focus-visible{outline:2px solid var(--ft-accent);outline-offset:3px}
${atName("ft", 979, `.ft-in{padding:72px 32px 28px}.ft-grid{grid-template-columns:repeat(3,minmax(0,1fr));gap:44px 24px}.ft-brand{grid-column:1 / -1}.ft .mr-logo{--logo-icon:54px;--logo-word:150px}.ft-col{padding-top:0}.ft-bottom{margin-top:56px}`, 0)}
${atName("ft", 759, `.ft-in{padding:72px 22px 28px}`, 0)}
${atName("ft", 639, `.ft-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.ft-bottom{flex-direction:column;align-items:flex-start}`, 0)}
${atName("ft", 479, `.ft-in{padding:64px 18px 26px}`, 0)}
@media (prefers-reduced-motion:reduce){.ft-link span::after,.ft-top i{transition:none}}
`

function CopyEmail({ email }: { email: string }) {
    const [done, setDone] = React.useState(false)
    React.useEffect(() => {
        if (!done) return
        const t = setTimeout(() => setDone(false), 1600)
        return () => clearTimeout(t)
    }, [done])
    return (
        <button
            type="button"
            aria-label="Copy email address"
            title="Copy email address"
            className={done ? "ft-copy is-done" : "ft-copy"}
            onClick={() => copyText(email).then(() => setDone(true), () => setDone(true))}
        >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden>
                {done ? (
                    <path d="M3 8.5l3.2 3L13 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                    <>
                        <rect x="5" y="5" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5" stroke="currentColor" strokeWidth="1.6" />
                    </>
                )}
            </svg>
            {done ? "Copied" : "Copy"}
        </button>
    )
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 * @framerIntrinsicWidth 1200
 */
export default function SiteFooter(rawProps: Props) {
    const props = freshCopy(rawProps)
    const isCanvas = RenderTarget.current() === RenderTarget.canvas
    const accent = props.accent || ACCENT
    const year = new Date().getFullYear()
    const router = useSiteRouter()

    const L = (v: string | undefined, d: string) => (v && v.length ? v : d)
    const email = props.email || CONTACT.email
    const icon = props.logoIcon && props.logoIcon.src ? props.logoIcon.src : LOGO_ICON
    const word = props.logoWord && props.logoWord.src ? props.logoWord.src : LOGO_WORD
    const home = L(props.homeLink, PATHS.home)

    const columns: { title: string; links: FLinkData[] }[] = [
        {
            title: "Marinor",
            links: [
                { label: "Home", href: home },
                { label: "About us", href: L(props.aboutLink, PATHS.about) },
                { label: "Team", href: L(props.teamLink, PATHS.team) },
                { label: "Competitions", href: L(props.competitionsLink, PATHS.competitions) },
            ],
        },
        {
            title: "Our work",
            links: [
                { label: "Argus", href: L(props.argusLink, PATHS.argus) },
                { label: "Proteus", href: L(props.proteusLink, PATHS.proteus) },
                { label: "Njord Challenge", href: L(props.njordLink, PATHS.njord) },
                { label: "RoboBoat", href: L(props.roboLink, PATHS.robo) },
            ],
        },
        {
            title: "Get involved",
            links: [
                { label: "Join the crew", href: L(props.joinLink, PATHS.join) },
                { label: "Sponsor us", href: L(props.sponsorLink, PATHS.sponsor) },
                { label: "Email us", href: `mailto:${email}` },
            ],
        },
    ]

    return (
        <footer onClickCapture={router.go} className="ft" style={{ ...props.style, ["--ft-accent" as any]: accent } as React.CSSProperties}>
            <style dangerouslySetInnerHTML={{ __html: CSS }} />
            {/* a thin wave along the top edge */}
            <svg className="ft-wave" viewBox="0 0 400 24" preserveAspectRatio="none" aria-hidden>
                <path d="M0 12 Q 25 4 50 12 T 100 12 T 150 12 T 200 12 T 250 12 T 300 12 T 350 12 T 400 12" fill="none" stroke={accent} strokeOpacity={0.3} strokeWidth={1.2} vectorEffect="non-scaling-stroke" />
            </svg>

            <div className="ft-in">
                <div className="ft-grid">
                    {/* Brand + contact */}
                    <div className="ft-brand">
                        <SiteLogo href={home} icon={icon} word={word} />
                        {props.tagline ? <p className="ft-tag">{props.tagline}</p> : null}
                        <div className="ft-contact">
                            <div className="ft-mail">
                                <MailIcon color={accent} />
                                <a href={`mailto:${email}`}>{email}</a>
                                <CopyEmail email={email} />
                            </div>
                            <a className="ft-addr" href={L(props.mapsLink, CONTACT.maps)} target="_blank" rel="noopener noreferrer">
                                <PinIcon color={accent} />
                                <span>
                                    {props.street || CONTACT.street}
                                    <br />
                                    {props.city || CONTACT.city}
                                </span>
                            </a>
                        </div>
                        <div className="ft-socials">
                            <a className="ft-soc" href={L(props.instagram, CONTACT.instagram)} target="_blank" rel="noopener noreferrer" aria-label="Marinor NTNU on Instagram">
                                <InstagramIcon size={16} />
                                Instagram
                            </a>
                            <a className="ft-soc" href={L(props.linkedin, CONTACT.linkedin)} target="_blank" rel="noopener noreferrer" aria-label="Marinor NTNU on LinkedIn">
                                <LinkedInIcon size={15} color="currentColor" />
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Link columns */}
                    {columns.map((col) => (
                        <div key={col.title} className="ft-col">
                            <span className="ft-col-title">{col.title}</span>
                            <ul className="ft-links">
                                {col.links.map((l) => (
                                    <li key={l.label}>
                                        <a
                                            className="ft-link"
                                            href={l.href}
                                            target={l.external ? "_blank" : undefined}
                                            rel={l.external ? "noopener noreferrer" : undefined}
                                            onClick={(e: React.MouseEvent) => onSamePageHash(e, l.href)}
                                        >
                                            <span>{l.label}</span>
                                            {l.external ? <ArrowIcon color={accent} dir="out" size={12} /> : null}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="ft-bottom">
                    <div className="ft-legal">
                        <span>© {year} Marinor NTNU</span>
                        {props.showOrgNr && (props.orgNr || CONTACT.orgNr) ? <span>Org.nr. {props.orgNr || CONTACT.orgNr}</span> : null}
                    </div>
                    <button
                        type="button"
                        className="ft-top"
                        onClick={() => {
                            if (typeof window === "undefined") return
                            const reduce = isCanvas || (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                            window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })
                        }}
                    >
                        Back to top
                        <i aria-hidden>
                            <ArrowIcon dir="up" size={13} />
                        </i>
                    </button>
                </div>
            </div>
        </footer>
    )
}

SiteFooter.defaultProps = {
    accent: ACCENT,
    tagline: "A student organisation at NTNU in Trondheim that builds autonomous boats.",
    email: CONTACT.email,
    street: CONTACT.street,
    city: CONTACT.city,
    mapsLink: CONTACT.maps,
    instagram: CONTACT.instagram,
    linkedin: CONTACT.linkedin,
    orgNr: CONTACT.orgNr,
    showOrgNr: true,
    homeLink: PATHS.home,
    aboutLink: PATHS.about,
    competitionsLink: PATHS.competitions,
    teamLink: PATHS.team,
    argusLink: PATHS.argus,
    proteusLink: PATHS.proteus,
    njordLink: PATHS.njord,
    roboLink: PATHS.robo,
    joinLink: PATHS.join,
    sponsorLink: PATHS.sponsor,
}

addPropertyControls(SiteFooter, {
    accent: { type: ControlType.Color, title: "Accent", defaultValue: ACCENT },
    logoIcon: { type: ControlType.ResponsiveImage, title: "Logo Mark" },
    logoWord: { type: ControlType.ResponsiveImage, title: "Logo Text" },
    tagline: { type: ControlType.String, title: "Tagline", displayTextArea: true, defaultValue: SiteFooter.defaultProps.tagline },
    email: { type: ControlType.String, title: "Email", defaultValue: CONTACT.email },
    street: { type: ControlType.String, title: "Street", defaultValue: CONTACT.street },
    city: { type: ControlType.String, title: "Post code / City", defaultValue: CONTACT.city },
    mapsLink: { type: ControlType.Link, title: "Map Link", defaultValue: CONTACT.maps },
    instagram: { type: ControlType.Link, title: "Instagram", defaultValue: CONTACT.instagram },
    linkedin: { type: ControlType.Link, title: "LinkedIn", defaultValue: CONTACT.linkedin },
    showOrgNr: { type: ControlType.Boolean, title: "Show Org.nr.", defaultValue: true },
    orgNr: { type: ControlType.String, title: "Org.nr.", defaultValue: CONTACT.orgNr },
    homeLink: { type: ControlType.Link, title: "Home", defaultValue: PATHS.home },
    aboutLink: { type: ControlType.Link, title: "About us", defaultValue: PATHS.about },
    competitionsLink: { type: ControlType.Link, title: "Competitions", defaultValue: PATHS.competitions },
    teamLink: { type: ControlType.Link, title: "Team", defaultValue: PATHS.team },
    argusLink: { type: ControlType.Link, title: "Argus", defaultValue: PATHS.argus },
    proteusLink: { type: ControlType.Link, title: "Proteus", defaultValue: PATHS.proteus },
    njordLink: { type: ControlType.Link, title: "Njord", defaultValue: PATHS.njord },
    roboLink: { type: ControlType.Link, title: "RoboBoat", defaultValue: PATHS.robo },
    joinLink: { type: ControlType.Link, title: "Join", defaultValue: PATHS.join },
    sponsorLink: { type: ControlType.Link, title: "Sponsor us", defaultValue: PATHS.sponsor },
})
