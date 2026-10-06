import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { motion, useScroll, useTransform } from "framer-motion"
import { Page, useUI, imgSrc, imgSet, at } from "./SiteKit.tsx"

/* ================================================================
 ResponsivePhoto – a photo that keeps its shape on desktop, tablet and phone.
 The shape switches below 560 px component width (Phone Shape).
 Parallax only runs on computers with a mouse – on phones it only costs battery.
 ================================================================ */

const TEAM_PHOTO = "https://framerusercontent.com/images/fUF3HR5F9cbPVuyf7I6Qd6Ndug.jpeg"

type Img = { src?: string; srcSet?: string; alt?: string } | undefined

interface Props {
    image?: Img
    ratio: number
    phoneRatio: number
    radius: number
    parallax: boolean
    style?: React.CSSProperties
}

const CSS = `
.rp{position:relative;width:100%;aspect-ratio:var(--rp-r);border-radius:var(--rp-rad);overflow:hidden;background:rgb(222,216,236);transform:translateZ(0)}
.rp img{position:absolute;left:0;top:-6%;width:100%;height:112%;object-fit:cover;display:block}
.rp.is-flat img{top:0;height:100%}
${at(559, `.rp{aspect-ratio:var(--rp-pr);border-radius:min(var(--rp-rad),20px)}`)}
`

function Picture({ image, parallax }: { image?: Img; parallax: boolean }) {
    const { still, fine, w } = useUI()
    const ref = React.useRef<HTMLDivElement>(null)
    const move = parallax && !still && fine && w >= 900
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
    const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"])
    const src = (image && image.src) || TEAM_PHOTO
    return (
        <div ref={ref} className={move ? "rp" : "rp is-flat"}>
            <motion.img
                src={imgSrc(src, 2048)}
                srcSet={imgSet(src, image && image.srcSet)}
                sizes="(max-width: 1300px) 100vw, 1240px"
                alt={(image && image.alt) || "Marinor NTNU team photo"}
                loading="lazy"
                decoding="async"
                draggable={false}
                style={move ? { y } : undefined}
            />
        </div>
    )
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 * @framerIntrinsicWidth 1200
 */
export default function ResponsivePhoto(props: Props) {
    const ratio = props.ratio > 0 ? props.ratio : 1.5
    const phoneRatio = props.phoneRatio > 0 ? props.phoneRatio : 1.25
    const radius = Math.max(0, props.radius ?? 28)
    return (
        <Page
            css={CSS}
            className="mr-fade"
            style={{ ...props.style, ["--rp-r" as any]: String(ratio), ["--rp-pr" as any]: String(phoneRatio), ["--rp-rad" as any]: `${radius}px` } as React.CSSProperties}
        >
            <Picture image={props.image} parallax={props.parallax} />
        </Page>
    )
}

ResponsivePhoto.defaultProps = {
    ratio: 1.5,
    phoneRatio: 1.25,
    radius: 28,
    parallax: true,
}

addPropertyControls(ResponsivePhoto, {
    image: { type: ControlType.ResponsiveImage, title: "Image" },
    ratio: { type: ControlType.Number, title: "Shape", min: 0.5, max: 3, step: 0.05, description: "Width ÷ height. 1.5 = 3:2" },
    phoneRatio: { type: ControlType.Number, title: "Phone Shape", min: 0.5, max: 3, step: 0.05 },
    radius: { type: ControlType.Number, title: "Radius", min: 0, max: 60, step: 1 },
    parallax: { type: ControlType.Boolean, title: "Parallax", description: "Only on computers with a mouse" },
})
