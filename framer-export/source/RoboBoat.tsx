import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import NjordChallenge from "./NjordChallenge.tsx"

/* ================================================================
 RoboBoat – competition explainer (same layout as the Njord page)
 Photos and links for RoboBoat are set below.
 A photo set in the right panel replaces the one here.
 ================================================================ */

const IMG = "https://framerusercontent.com/images/"
const RB_PHOTOS = {
  logo: IMG + "LrBmF25Tu6AkREtPrSt4ZFu3PhI.webp", // RoboBoat logo
  hero: IMG + "aFSAiq4VrhmVHpI2PQY4CqkQ2g.png",
  about: IMG + "TQPxBN7JTlcvM55CKZspxhPPM.png", // "Roboat bilde"
  aboutTwo: IMG + "AWh67USU8Gbpps2zpfmK4qVcec.png",
  marinor: IMG + "iD5n7P5PmXPXewIrUMJsfhii2rQ.jpeg", // Argus in the water (DSCF6216)
}

const RB_LINKS = [
  {
    title: "RoboBoat 2026",
    text: "The official page for this year's competition, with dates, rules, resources and all the teams.",
    url: "https://roboboat.org/programs/2026/",
  },
  {
    title: "Results 2026",
    text: "The final standings and awards from RoboBoat 2026.",
    url: "https://roboboat.org/2026/results",
  },
  {
    title: "Team handbook",
    text: "The rules and guides every team works from during the year.",
    url: "https://robonation.gitbook.io/roboboat-resources",
  },
  {
    title: "roboboat.org",
    text: "RoboBoat's main website, run by RoboNation.",
    url: "https://roboboat.org/",
  },
]

const TASKS = [
  { icon: "dock", title: "Build a boat", text: "Teams read the rules and then design, build and test their own small autonomous boat during the year." },
  { icon: "route", title: "Sail the course", text: "In Florida the boat has to run a set course on its own. The team is not allowed to steer it." },
  { icon: "map", title: "Show the work", text: "Every team hands in a technical report and a video, and presents the boat to the judges." },
  { icon: "warning", title: "Collect points", text: "Points come from the course, the design and the documents. The team with the most points wins." },
]

const FACTS = [
  { title: "Where", text: "Nathan Benderson Park in Sarasota, Florida." },
  { title: "When", text: "Every February. In 2026 it ran from the 19th to the 24th." },
  { title: "Who can join", text: "High school and college teams, with at least three members." },
  { title: "Who runs it", text: "RoboNation, who also run RoboSub and RobotX." },
]

const JUDGING = [
  { title: "Course runs", text: "How well the boat solves the tasks on the water, all on its own." },
  { title: "Technical design report", text: "A written report about the boat and the choices behind it." },
  { title: "Team video", text: "A short film where the team introduces itself and the boat." },
  { title: "Presentation", text: "The team presents the design to a panel of judges." },
  { title: "Systems assessment", text: "The boat is checked against the rules before it may sail." },
  { title: "Community work", text: "Teams can also hand in what they do for their local community." },
]

const STATS = [
  { value: 19, suffix: "th", label: "RoboBoat competition was held in 2026" },
  { value: 6, suffix: " days", label: "in February at Nathan Benderson Park in Florida" },
  { value: 25, suffix: "+", label: "student teams from many countries took part in 2026" },
  { value: 3, suffix: "", label: "members is the smallest team allowed to sign up" },
]

type Img = { src?: string; srcSet?: string; alt?: string } | undefined
const pick = (a: Img, src: string, alt: string): Img => (a && a.src ? a : { src, alt })

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 * @framerIntrinsicWidth 1240
 */
export default function RoboBoat(props: any) {
  return (
    <NjordChallenge
      {...props}
      heroLogo={pick(props.heroLogo, RB_PHOTOS.logo, "RoboBoat logo")}
      heroImage={pick(props.heroImage, RB_PHOTOS.hero, "RoboBoat")}
      aboutImage={pick(props.aboutImage, RB_PHOTOS.about, "RoboBoat")}
      aboutImageTwo={pick(props.aboutImageTwo, RB_PHOTOS.aboutTwo, "RoboBoat")}
      marinorImage={pick(props.marinorImage, RB_PHOTOS.marinor, "Argus in the water")}
      links={RB_LINKS}
    />
  )
}

RoboBoat.defaultProps = {
  accent: "rgb(124, 70, 156)",
  heroEyebrow: "Competitions · RoboBoat",
  heroTitle: "RoboBoat",
  heroSubtitle:
    "An international student competition in Florida. Teams build small autonomous boats and let them solve a course on the water, with no one steering.",
  heroChips: "Sarasota, Florida · Every February · Run by RoboNation",
  heroPrimary: "RoboBoat 2026",
  heroPrimaryLink: "https://roboboat.org/programs/2026/",
  heroSecondary: "Meet Argus",
  heroSecondaryLink: "/projects/argus",
  stats: STATS,
  aboutEyebrow: "What it is",
  aboutTitle: "What RoboBoat is.",
  aboutText:
    "RoboBoat is run by RoboNation in the USA. Student teams from all over the world design, build and test their own autonomous surface vessel, and then bring it to Florida.\nThe tasks are based on work boats do at sea, like watching a coastline or keeping a port safe. The boats are judged on how they move, how they are built and what they carry on board.\nRoboBoat 2026 was the 19th competition. It was held from 19 to 24 February at Nathan Benderson Park in Sarasota, Florida.",
  tasksEyebrow: "How it works",
  tasksTitle: "How we built it.",
  tasksText: "Teams work on their boats for most of the year before the competition week.",
  tasks: TASKS,
  courseTitle: "Good to know.",
  courseText: "The short version of where, when and who can take part.",
  course: FACTS,
  judgingTitle: "What the judges look at.",
  judgingText: "The judges also give points for the report, the video and the presentation.",
  judging: JUDGING,
  marinorEyebrow: "Marinor and RoboBoat",
  marinorTitle: "Why RoboBoat.",
  marinorText:
    "RoboBoat is one of the biggest competitions for autonomous boats in the world. Teams we meet at Njord sail here too, for example Navier USN from Norway and AGH Solar Boat from Poland. The skills are the same ones we build with Argus: find the way, see what is around the boat, and dock on your own.",
  linksEyebrow: "Links",
  linksTitle: "Follow RoboBoat online.",
  linksText: "Dates, rules, teams and results are on RoboBoat's own website.",
  ctaEyebrow: "RoboBoat",
  ctaTitle: "Want to know more about RoboBoat?",
  ctaText: "The rules, dates and team lists are on RoboBoat's website. You can also read about Njord, the competition we sail in.",
  ctaPrimary: "Go to RoboBoat 2026",
  ctaPrimaryLink: "https://roboboat.org/programs/2026/",
  ctaSecondary: "Read about Njord",
  ctaSecondaryLink: "/competitions/njord-challange",
}

addPropertyControls(RoboBoat, {
  accent: { type: ControlType.Color, title: "Accent" },
  heroLogo: { type: ControlType.ResponsiveImage, title: "Hero Logo" },
  heroImage: { type: ControlType.ResponsiveImage, title: "Hero Photo" },
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
    defaultValue: STATS,
  },
  aboutImage: { type: ControlType.ResponsiveImage, title: "About Photo 1" },
  aboutImageTwo: { type: ControlType.ResponsiveImage, title: "About Photo 2" },
  aboutEyebrow: { type: ControlType.String, title: "About Eyebrow" },
  aboutTitle: { type: ControlType.String, title: "About Title" },
  aboutText: { type: ControlType.String, title: "About Text", displayTextArea: true, description: "New line = new paragraph" },
  tasksEyebrow: { type: ControlType.String, title: "Steps Eyebrow" },
  tasksTitle: { type: ControlType.String, title: "Steps Title" },
  tasksText: { type: ControlType.String, title: "Steps Text", displayTextArea: true },
  tasks: {
    type: ControlType.Array,
    title: "Steps",
    control: {
      type: ControlType.Object,
      controls: {
        title: { type: ControlType.String, title: "Title" },
        text: { type: ControlType.String, title: "Text", displayTextArea: true },
      },
    },
    defaultValue: TASKS,
  },
  courseTitle: { type: ControlType.String, title: "Facts Title" },
  courseText: { type: ControlType.String, title: "Facts Text", displayTextArea: true },
  course: {
    type: ControlType.Array,
    title: "Facts",
    control: { type: ControlType.Object, controls: { title: { type: ControlType.String, title: "Title" }, text: { type: ControlType.String, title: "Text", displayTextArea: true } } },
    defaultValue: FACTS,
  },
  judgingTitle: { type: ControlType.String, title: "Judging Title" },
  judgingText: { type: ControlType.String, title: "Judging Text", displayTextArea: true },
  judging: {
    type: ControlType.Array,
    title: "Judging Items",
    control: { type: ControlType.Object, controls: { title: { type: ControlType.String, title: "Title" }, text: { type: ControlType.String, title: "Text", displayTextArea: true } } },
    defaultValue: JUDGING,
  },
  marinorImage: { type: ControlType.ResponsiveImage, title: "Marinor Photo" },
  marinorEyebrow: { type: ControlType.String, title: "Marinor Eyebrow" },
  marinorTitle: { type: ControlType.String, title: "Marinor Title" },
  marinorText: { type: ControlType.String, title: "Marinor Text", displayTextArea: true },
  linksEyebrow: { type: ControlType.String, title: "Links Eyebrow" },
  linksTitle: { type: ControlType.String, title: "Links Title" },
  linksText: { type: ControlType.String, title: "Links Text", displayTextArea: true, description: "The links are in RoboBoat.tsx" },
  ctaEyebrow: { type: ControlType.String, title: "CTA Eyebrow" },
  ctaTitle: { type: ControlType.String, title: "CTA Title" },
  ctaText: { type: ControlType.String, title: "CTA Text", displayTextArea: true },
  ctaPrimary: { type: ControlType.String, title: "CTA Button 1" },
  ctaPrimaryLink: { type: ControlType.String, title: "CTA Link 1" },
  ctaSecondary: { type: ControlType.String, title: "CTA Button 2" },
  ctaSecondaryLink: { type: ControlType.String, title: "CTA Link 2" },
})
