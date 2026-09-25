import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Page, SectionHead, Reveal, Photo, pick, at, BP } from "./NjordKit.tsx"
import type { Img, Stat, Task, Item } from "./NjordKit.tsx"
import { NJORD_PHOTOS } from "./NjordKit.tsx"
import { Hero, Stats, TaskGrid, NJORD_TOP_CSS } from "./NjordTop.tsx"
import { Course, Judging, CTA, NJORD_BOTTOM_CSS } from "./NjordBottom.tsx"
import { NjordLinks, NJORD_LINKS_CSS } from "./NjordLinks.tsx"
import type { NjordLink } from "./NjordLinks.tsx"
import { freshCopy } from "./CopyUpdates.tsx"

/* ================================================================
 Njord Challenge – explainer page for Marinor NTNU
 (RoboBoat.tsx uses this same layout with its own content)
 Photos: NjordKit.tsx (NJORD_PHOTOS) – a photo set in the right panel wins.
 Links to njordchallenge.com: NjordLinks.tsx (NJORD_LINKS)
 ================================================================ */

const PAGE_CSS = `
.nb-two{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:60px;align-items:center}
.nb-copy{display:flex;flex-direction:column;gap:20px}
.nb-copy .mr-lead{max-width:none}
.nb-collage{position:relative;height:520px}
.nb-a{position:absolute;top:0;right:0;width:78%;height:76%;border-radius:22px}
.nb-b{position:absolute;left:0;bottom:0;width:52%;height:50%;border-radius:18px;box-shadow:0 0 0 7px rgb(238,235,253)}
.nb-marinor{height:460px;border-radius:22px}
${at(BP.md, `.nb-two{grid-template-columns:minmax(0,1fr);gap:36px}.nb-collage{height:440px}.nb-marinor{height:360px}`)}
${at(BP.sm, `.nb-collage{height:360px}.nb-a,.nb-marinor{border-radius:18px}.nb-b{border-radius:14px;box-shadow:0 0 0 5px rgb(238,235,253)}.nb-marinor{height:280px}`)}
`

const CSS = NJORD_TOP_CSS + NJORD_BOTTOM_CSS + NJORD_LINKS_CSS + PAGE_CSS

const TASK_DEFAULTS: Task[] = [
    { icon: "route", title: "Manoeuvring", text: "The boat has to steer through a marked course on the water and show that it can control its own movement." },
    { icon: "map", title: "Path finding", text: "The boat has to read the sea markers and find its own way through the course, without help from the team." },
    { icon: "warning", title: "Collision avoidance", text: "Another vessel crosses the path. The boat has to see it in time and go around it safely." },
    { icon: "dock", title: "Docking", text: "The last task is to find the right spot at the dock and park the boat there on its own." },
]

const COURSE_DEFAULTS: Item[] = [
    { title: "Buoys", text: "Floating markers that show where the course goes and where the boat must not sail." },
    { title: "Cardinal marks", text: "Sea marks that show which side is safe to pass." },
    { title: "AR tags", text: "Printed markers the boat reads with its camera to find the right dock or gate." },
    { title: "The Otter", text: "A small vessel from the organisers that moves across the course in the collision task." },
]

const JUDGING_DEFAULTS: Item[] = [
    { title: "The four tasks", text: "Most points come from what the boat does on the water during the week." },
    { title: "Technical report", text: "The team writes about the design and the choices behind the boat." },
    { title: "Team presentation", text: "Every team presents their work for the jury and the other teams." },
    { title: "Technical inspection", text: "The boat is checked against the rules for size, safety and power before it may sail." },
    { title: "Data and interface", text: "Teams show the data and the interface they use to follow the boat." },
    { title: "Special awards", text: "There are also prizes for team spirit, sportsmanship and best presentation." },
]

const STAT_DEFAULTS: Stat[] = [
    { value: 4, suffix: "", label: "tasks on the water: manoeuvring, path finding, collision avoidance and docking" },
    { value: 5, suffix: " days", label: "of competition in Nyhavna, Trondheim" },
    { value: 2019, suffix: "", label: "the year Njord was started by students at NTNU" },
    { value: 23, suffix: "", label: "teams signed up for the 2026 challenge, Marinor among them" },
]

interface Props {
    accent: string
    heroImage?: Img
    heroLogo?: Img
    heroEyebrow: string
    heroTitle: string
    heroSubtitle: string
    heroChips: string
    heroPrimary: string
    heroPrimaryLink: string
    heroSecondary: string
    heroSecondaryLink: string
    stats: Stat[]
    aboutEyebrow: string
    aboutTitle: string
    aboutText: string
    aboutImage?: Img
    aboutImageTwo?: Img
    tasksEyebrow: string
    tasksTitle: string
    tasksText: string
    tasks: Task[]
    courseTitle: string
    courseText: string
    course: Item[]
    judgingTitle: string
    judgingText: string
    judging: Item[]
    marinorEyebrow: string
    marinorTitle: string
    marinorText: string
    marinorImage?: Img
    linksEyebrow: string
    linksTitle: string
    linksText: string
    links?: NjordLink[]
    ctaEyebrow?: string
    ctaTitle: string
    ctaText: string
    ctaPrimary: string
    ctaPrimaryLink: string
    ctaSecondary: string
    ctaSecondaryLink: string
    style?: React.CSSProperties
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 * @framerIntrinsicWidth 1240
 */
export default function NjordChallenge(rawProps: Props) {
    const props = freshCopy(rawProps)
    const taskList = props.tasks && props.tasks.length ? props.tasks : TASK_DEFAULTS
    const courseList = props.course && props.course.length ? props.course : COURSE_DEFAULTS
    const judgeList = props.judging && props.judging.length ? props.judging : JUDGING_DEFAULTS
    const statList = props.stats && props.stats.length ? props.stats : STAT_DEFAULTS

    const heroImg = pick(props.heroImage, NJORD_PHOTOS.hero, "The Njord Challenge")
    const aboutImg = pick(props.aboutImage, NJORD_PHOTOS.about, "Argus being lowered into the water")
    const aboutImgTwo = pick(props.aboutImageTwo, NJORD_PHOTOS.aboutTwo, "Argus on the water")
    const marinorImg = pick(props.marinorImage, NJORD_PHOTOS.marinor, "Marinor NTNU on the dock")

    const paragraphs = (props.aboutText || "").split("\n").map((t) => t.trim()).filter(Boolean)

    return (
        <Page accent={props.accent} css={CSS} style={props.style}>
            <div className="mr-stack">
                <div className="mr-stack" style={{ gap: 48 }}>
                    <Hero
                        image={heroImg}
                        logo={props.heroLogo}
                        eyebrow={props.heroEyebrow}
                        title={props.heroTitle}
                        subtitle={props.heroSubtitle}
                        chips={props.heroChips}
                        primaryLabel={props.heroPrimary}
                        primaryLink={props.heroPrimaryLink}
                        secondaryLabel={props.heroSecondary}
                        secondaryLink={props.heroSecondaryLink}
                    />
                    <Stats stats={statList} />
                </div>

                {/* About */}
                <section className="nb-two">
                    <div className="nb-copy">
                        <SectionHead eyebrow={props.aboutEyebrow} title={props.aboutTitle} />
                        <Reveal className="nb-copy">
                            {paragraphs.map((t, i) => (
                                <p key={i} className="mr-lead">
                                    {t}
                                </p>
                            ))}
                        </Reveal>
                    </div>
                    <Reveal className="nb-collage">
                        <Photo image={aboutImg} className="nb-a" sizes="(max-width: 860px) 90vw, 44vw" />
                        <Photo image={aboutImgTwo} className="nb-b" sizes="(max-width: 860px) 50vw, 26vw" />
                    </Reveal>
                </section>

                {/* Tasks */}
                <section className="mr-sec">
                    <SectionHead eyebrow={props.tasksEyebrow} title={props.tasksTitle} text={props.tasksText} />
                    <TaskGrid tasks={taskList} />
                </section>

                <Course title={props.courseTitle} text={props.courseText} items={courseList} />
                <Judging title={props.judgingTitle} text={props.judgingText} items={judgeList} />

                {/* Marinor section */}
                <section className="nb-two">
                    <Reveal>
                        <Photo image={marinorImg} className="nb-marinor" sizes="(max-width: 860px) 100vw, 50vw" />
                    </Reveal>
                    <SectionHead eyebrow={props.marinorEyebrow} title={props.marinorTitle} text={props.marinorText} />
                </section>

                <NjordLinks eyebrow={props.linksEyebrow} title={props.linksTitle} text={props.linksText} links={props.links} />

                <CTA
                    eyebrow={props.ctaEyebrow}
                    title={props.ctaTitle}
                    text={props.ctaText}
                    primary={props.ctaPrimary}
                    primaryLink={props.ctaPrimaryLink}
                    secondary={props.ctaSecondary}
                    secondaryLink={props.ctaSecondaryLink}
                />
            </div>
        </Page>
    )
}

NjordChallenge.defaultProps = {
    accent: "rgb(124, 70, 156)",
    heroEyebrow: "Competitions · Njord",
    heroTitle: "The Njord Challenge",
    heroSubtitle:
        "A student competition for autonomous boats, held every August in Trondheim. Teams from several countries bring boats they have built and let them sail on their own.",
    heroChips: "Nyhavna, Trondheim · Five days in August · Student teams from many countries",
    heroPrimary: "Njord's website",
    heroPrimaryLink: "https://www.njordchallenge.com",
    heroSecondary: "Meet Argus",
    heroSecondaryLink: "/projects/argus",
    stats: STAT_DEFAULTS,
    aboutEyebrow: "What it is",
    aboutTitle: "What Njord is.",
    aboutText:
        "Njord: The Autonomous Ship Challenge is run by Njord NTNU, a student organisation started in Trondheim in 2019. Every August student teams come to Nyhavna in Trondheim.\nEach team builds and runs its own autonomous boat. During the week the boats solve tasks on the water with no one steering. In 2025 eleven teams from eight countries took part, and Navier USN from Norway won.",
    tasksEyebrow: "On the water",
    tasksTitle: "The four tasks.",
    tasksText: "The boats sail a course in the harbour and get one task at a time. The team is not allowed to steer.",
    tasks: TASK_DEFAULTS,
    courseTitle: "What is out on the course.",
    courseText: "The course has the same kind of marks a boat meets at sea, and the boat has to read them.",
    course: COURSE_DEFAULTS,
    judgingTitle: "How the teams are judged.",
    judgingText: "The jury also gives points for the report, the presentation and the inspection.",
    judging: JUDGING_DEFAULTS,
    marinorEyebrow: "Marinor and Njord",
    marinorTitle: "Marinor at Njord.",
    marinorText:
        "Marinor NTNU is on the team list for the Njord Challenge 2026. We built Argus for these four tasks: find the way, see what is around it, avoid other boats and dock.",
    linksEyebrow: "Links",
    linksTitle: "Follow Njord online.",
    linksText: "Rules, teams, results and news are on Njord's own website.",
    ctaEyebrow: "Njord Challenge",
    ctaTitle: "Want to know more about Njord?",
    ctaText: "The rules, the schedule and the team list are on Njord's website. You can also read how we built our boat.",
    ctaPrimary: "Go to njordchallenge.com",
    ctaPrimaryLink: "https://www.njordchallenge.com",
    ctaSecondary: "Read about Argus",
    ctaSecondaryLink: "/projects/argus",
}

addPropertyControls(NjordChallenge, {
    accent: { type: ControlType.Color, title: "Accent" },
    heroImage: { type: ControlType.ResponsiveImage, title: "Hero Photo" },
    heroLogo: { type: ControlType.ResponsiveImage, title: "Hero Logo", description: "Optional logo card in the hero" },
    heroEyebrow: { type: ControlType.String, title: "Hero Eyebrow" },
    heroTitle: { type: ControlType.String, title: "Hero Title" },
    heroSubtitle: { type: ControlType.String, title: "Hero Text", displayTextArea: true },
    heroChips: { type: ControlType.String, title: "Hero Chips", placeholder: "One · Two · Three" },
    heroPrimary: { type: ControlType.String, title: "Hero Button 1" },
    heroPrimaryLink: { type: ControlType.String, title: "Hero Link 1" },
    heroSecondary: { type: ControlType.String, title: "Hero Button 2" },
    heroSecondaryLink: { type: ControlType.String, title: "Hero Link 2" },
    stats: {
        type: ControlType.Array,
        title: "Stats",
        control: {
            type: ControlType.Object,
            controls: {
                value: { type: ControlType.Number, title: "Number", min: 0, max: 10000, step: 1 },
                suffix: { type: ControlType.String, title: "Suffix" },
                label: { type: ControlType.String, title: "Label", displayTextArea: true },
            },
        },
        defaultValue: STAT_DEFAULTS,
    },
    aboutImage: { type: ControlType.ResponsiveImage, title: "About Photo 1" },
    aboutImageTwo: { type: ControlType.ResponsiveImage, title: "About Photo 2" },
    aboutEyebrow: { type: ControlType.String, title: "About Eyebrow" },
    aboutTitle: { type: ControlType.String, title: "About Title" },
    aboutText: { type: ControlType.String, title: "About Text", displayTextArea: true, description: "New line = new paragraph" },
    tasksEyebrow: { type: ControlType.String, title: "Tasks Eyebrow" },
    tasksTitle: { type: ControlType.String, title: "Tasks Title" },
    tasksText: { type: ControlType.String, title: "Tasks Text", displayTextArea: true },
    tasks: {
        type: ControlType.Array,
        title: "Tasks",
        control: {
            type: ControlType.Object,
            controls: {
                title: { type: ControlType.String, title: "Title" },
                text: { type: ControlType.String, title: "Text", displayTextArea: true },
            },
        },
        defaultValue: TASK_DEFAULTS,
    },
    courseTitle: { type: ControlType.String, title: "Course Title" },
    courseText: { type: ControlType.String, title: "Course Text", displayTextArea: true },
    course: {
        type: ControlType.Array,
        title: "Course Items",
        control: { type: ControlType.Object, controls: { title: { type: ControlType.String, title: "Title" }, text: { type: ControlType.String, title: "Text", displayTextArea: true } } },
        defaultValue: COURSE_DEFAULTS,
    },
    judgingTitle: { type: ControlType.String, title: "Judging Title" },
    judgingText: { type: ControlType.String, title: "Judging Text", displayTextArea: true },
    judging: {
        type: ControlType.Array,
        title: "Judging Items",
        control: { type: ControlType.Object, controls: { title: { type: ControlType.String, title: "Title" }, text: { type: ControlType.String, title: "Text", displayTextArea: true } } },
        defaultValue: JUDGING_DEFAULTS,
    },
    marinorImage: { type: ControlType.ResponsiveImage, title: "Marinor Photo" },
    marinorEyebrow: { type: ControlType.String, title: "Marinor Eyebrow" },
    marinorTitle: { type: ControlType.String, title: "Marinor Title" },
    marinorText: { type: ControlType.String, title: "Marinor Text", displayTextArea: true },
    linksEyebrow: { type: ControlType.String, title: "Links Eyebrow" },
    linksTitle: { type: ControlType.String, title: "Links Title" },
    linksText: { type: ControlType.String, title: "Links Text", displayTextArea: true, description: "The links are in NjordLinks.tsx" },
    ctaEyebrow: { type: ControlType.String, title: "CTA Eyebrow" },
    ctaTitle: { type: ControlType.String, title: "CTA Title" },
    ctaText: { type: ControlType.String, title: "CTA Text", displayTextArea: true },
    ctaPrimary: { type: ControlType.String, title: "CTA Button 1" },
    ctaPrimaryLink: { type: ControlType.String, title: "CTA Link 1" },
    ctaSecondary: { type: ControlType.String, title: "CTA Button 2" },
    ctaSecondaryLink: { type: ControlType.String, title: "CTA Link 2" },
})
