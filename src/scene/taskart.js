/* ================================================================
   Pictures for the Njord tasks at the helm: a small icon for each
   task in the list, and a moving sketch of the course for each
   briefing (your boat goes round it, the gates, marks, the Otter and
   the dock are where they are on the water). In the sketches you
   travel up the page, so port is left and starboard right; the path
   finding sketch is a map with north up, as the marks go by the compass.
   ================================================================ */

export const YELLOW = "#f2c230"
export const BLACK = "#16171a"
export const CARDINALS = {
    // bands from the top; cones [upper, lower], 1 = point up; dir = the safe side in the world (x, z):
    // north on the compass is +z and east is -x
    N: { name: "North", bands: [BLACK, YELLOW], cones: [1, 1], dir: [0, 1] },
    S: { name: "South", bands: [YELLOW, BLACK], cones: [-1, -1], dir: [0, -1] },
    E: { name: "East", bands: [BLACK, YELLOW, BLACK], cones: [1, -1], dir: [-1, 0] },
    W: { name: "West", bands: [YELLOW, BLACK, YELLOW], cones: [-1, 1], dir: [1, 0] },
}

// a cardinal mark, drawn in a 50 × 64 box
function markShapes(kind) {
    const c = CARDINALS[kind]
    const tri = (cy, up) => (up > 0 ? `18,${cy + 4} 32,${cy + 4} 25,${cy - 4}` : `18,${cy - 4} 32,${cy - 4} 25,${cy + 4}`)
    const n = c.bands.length
    const h = 30 / n
    const bands = c.bands.map((col, i) => `<rect x="19" y="${(24 + i * h).toFixed(2)}" width="12" height="${(h + 0.3).toFixed(2)}" fill="${col}"/>`).join("")
    const edge = `stroke="rgba(232,238,248,.55)" stroke-width="1"`
    return `<path d="M25 3V24" stroke="#c9d1db" stroke-width="1.5"/><polygon points="${tri(8, c.cones[0])}" fill="${BLACK}" ${edge}/><polygon points="${tri(18, c.cones[1])}" fill="${BLACK}" ${edge}/>${bands}<rect x="19" y="24" width="12" height="30" fill="none" ${edge}/><path d="M13 54h24l-3 6H16z" fill="${c.bands[n - 1]}" ${edge}/>`
}
export function markSvg(kind) {
    return `<svg class="cm-svg" viewBox="0 0 50 64" aria-hidden="true">${markShapes(kind)}<path d="M3 60q5.5-3 11 0t11 0 11 0 11 0" stroke="#7cc4ff" fill="none" stroke-width="1.5"/></svg>`
}

const RED = "#ff5a4a"
const GREEN = "#45d07f"
const SKY = "#7cc4ff"
const VIOLET = "#c39cf0"

// ---- icons for the list (40 × 40) ----
export function taskIcon(id) {
    const wrap = (inner) => `<svg class="ti-svg" viewBox="0 0 40 40" aria-hidden="true">${inner}</svg>`
    if (id === "manoeuvring")
        return wrap(`<path d="M20 37c-9-5 9-9 0-15s9-10 0-19" fill="none" stroke="${SKY}" stroke-width="2" stroke-dasharray="3 3"/>
            <circle cx="10" cy="29" r="2.6" fill="${RED}"/><circle cx="27" cy="29" r="2.6" fill="${GREEN}"/>
            <circle cx="13" cy="9" r="2.6" fill="${RED}"/><circle cx="30" cy="9" r="2.6" fill="${GREEN}"/>
            <path d="M28.5 19.5a5 5 0 1 1-2-4" fill="none" stroke="${VIOLET}" stroke-width="2" stroke-linecap="round"/><path d="m27.6 12.6.6 3.6-3.5.6" fill="none" stroke="${VIOLET}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`)
    if (id === "pathfinding") return wrap(`<g transform="translate(8 1) scale(.5)">${markShapes("N")}</g><path d="M30 32V12m-4 4 4-4 4 4" fill="none" stroke="${VIOLET}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`)
    if (id === "collision")
        return wrap(`<path d="M14 37V6m-4 5 4-5 4 5" fill="none" stroke="#e8eef8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M38 20H20m5-4-5 4 5 4" fill="none" stroke="#ffb030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="29" y="15" width="8" height="2.4" rx="1.2" fill="#ffb030"/><rect x="29" y="22.6" width="8" height="2.4" rx="1.2" fill="#ffb030"/>`)
    if (id === "docking")
        return wrap(`<path d="M3 6h34M5 6v16M15 6v16M25 6v16M35 6v16" fill="none" stroke="#c9a77c" stroke-width="2.4" stroke-linecap="round"/>
            <rect x="17" y="8.5" width="6" height="6" fill="#f4f4f2"/><rect x="18.5" y="10" width="3" height="3" fill="#0b0b0c"/>
            <path d="M20 37V20m-4 5 4-5 4 5" fill="none" stroke="${SKY}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`)
    return wrap(`<path d="M20 4l4.4 9 9.9 1.4-7.2 7 1.7 9.8L20 26.6l-8.8 4.6 1.7-9.8-7.2-7 9.9-1.4z" fill="${YELLOW}" stroke="#a87a0e" stroke-width="1.2" stroke-linejoin="round"/>`)
}

// ---- the moving sketches for the briefings (220 × 170) ----
const water = `<defs><pattern id="tw" width="22" height="12" patternUnits="userSpaceOnUse"><path d="M0 8q5.5-4 11 0t11 0" fill="none" stroke="rgba(124,196,255,.12)" stroke-width="1"/></pattern></defs><rect width="220" height="170" rx="12" fill="rgba(124,196,255,.06)"/><rect width="220" height="170" rx="12" fill="url(#tw)"/>`
const boat = (path, dur, extra = "") =>
    `<path d="${path}" fill="none" stroke="${SKY}" stroke-width="2" stroke-dasharray="5 5" opacity=".75"/><g><path d="M7 0-5-5v10z" fill="#ffffff"/><circle r="9" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="1.2"/><animateMotion dur="${dur}s" repeatCount="indefinite" rotate="auto" path="${path}" ${extra}/></g>`
const gatePair = (x, y, w = 14) => `<circle cx="${x - w}" cy="${y}" r="4" fill="${RED}"/><circle cx="${x + w}" cy="${y}" r="4" fill="${GREEN}"/>`
const otter = (path, dur, times, points) =>
    `<g><rect x="-7" y="-5" width="14" height="3" rx="1.5" fill="#e4e6e8"/><rect x="-7" y="2" width="14" height="3" rx="1.5" fill="#e4e6e8"/><rect x="-3" y="-2" width="5" height="4" fill="#ffb030"/><animateMotion dur="${dur}s" repeatCount="indefinite" rotate="auto" path="${path}" calcMode="linear" keyTimes="${times}" keyPoints="${points}"/></g>`
const label = (x, y, text, anchor = "middle", col = "rgba(232,238,248,.75)") => `<text x="${x}" y="${y}" text-anchor="${anchor}" fill="${col}" font-size="9" font-family="JetBrains Mono, monospace" letter-spacing=".06em">${text}</text>`

export function taskDiagram(id, { want = 0 } = {}) {
    const wrap = (inner) => `<svg class="td-svg" viewBox="0 0 220 170" role="img" aria-label="A sketch of the course">${water}${inner}</svg>`
    if (id === "manoeuvring") {
        const path = "M110 168C96 158 84 150 88 140C92 128 128 126 130 114C132 102 110 101 110 84C110 70 92 64 90 52C88 40 108 32 110 18"
        return wrap(`${gatePair(88, 140)}${gatePair(130, 114)}${gatePair(90, 52)}
            <path d="M92 18h36" stroke="#e8eef8" stroke-width="2" stroke-dasharray="3 3"/>${gatePair(110, 18, 20)}
            <circle cx="110" cy="84" r="15" fill="rgba(195,156,240,.12)" stroke="${VIOLET}" stroke-width="2"/>
            <g transform="translate(110 84)"><path d="M0-10a10 10 0 1 1-9.4 6.6" fill="none" stroke="${VIOLET}" stroke-width="1.6" stroke-linecap="round"/><path d="m-12-8 2.4 4.6 4.4-2.4" fill="none" stroke="${VIOLET}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="2.4s" additive="sum" repeatCount="indefinite"/></g>
            ${label(146, 87, "360°", "start", VIOLET)}${label(204, 160, "start", "end")}${label(204, 22, "finish", "end")}
            ${boat(path, 7)}`)
    }
    if (id === "pathfinding") {
        // the course as a map, north up and east right (east is -x in the world)
        const marks = [
            ["N", 159, 46],
            ["S", 114, 46],
            ["N", 69, 46],
            ["W", 36, 69],
            ["E", 53, 108],
        ]
        const safe = marks
            .map(([k, x, y]) => {
                const [dx, dz] = CARDINALS[k].dir
                return `<path d="M${x} ${y}l${-dx * 20} ${-dz * 20}" stroke="rgba(159,227,181,.55)" stroke-width="5" stroke-linecap="round"/>`
            })
            .join("")
        const glyphs = marks.map(([k, x, y]) => `<g transform="translate(${x - 11.5} ${y - 22}) scale(.46)">${markShapes(k)}</g>`).join("")
        const path = "M210 46C186 46 172 33 159 31C142 29 130 61 114 61C98 61 84 31 69 31C48 31 18 52 20 72C22 92 56 92 66 110C72 122 71 132 71 150"
        return wrap(`${safe}${glyphs}<circle cx="59" cy="150" r="4" fill="${GREEN}"/><circle cx="83" cy="150" r="4" fill="${RED}"/>
            <g transform="translate(198 104)"><path d="M0 9V-7m-4 4 4-4 4 4" fill="none" stroke="#e8eef8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>${label(0, 20, "N")}</g>
            ${label(210, 164, "green: the safe side", "end", "rgba(159,227,181,.85)")}
            ${boat(path, 9)}`)
    }
    if (id === "collision") {
        const you = "M110 168C110 140 108 126 112 118C120 104 144 104 140 92C136 80 112 82 112 70C112 60 140 58 140 48C140 36 140 24 132 8"
        return wrap(`<path d="M205 92H15" stroke="#ffb030" stroke-width="1.4" stroke-dasharray="2 4" opacity=".7"/><path d="M98 0v170" stroke="#ffb030" stroke-width="1.4" stroke-dasharray="2 4" opacity=".7"/>
            ${otter("M205 92H15", 8, "0;0.08;0.4;1", "0;0;1;1")}
            ${otter("M98 -12V182", 8, "0;0.5;0.95;1", "0;0;1;1")}
            ${label(200, 84, "from starboard", "end", "#ffb030")}${label(92, 150, "head on", "end", "#ffb030")}
            ${label(150, 104, "behind it", "start")}${label(146, 46, "port to port", "start")}
            ${boat(you, 8)}`)
    }
    if (id === "docking") {
        const bx = 50 + 40 * want
        const tags = [0, 1, 2, 3]
            .map((k) => {
                const x = 50 + 40 * k
                const on = k === want
                return `<rect x="${x - 7}" y="27" width="14" height="14" rx="1.5" fill="#f4f4f2" ${on ? `stroke="${YELLOW}" stroke-width="2.4"` : ""}/><rect x="${x - 4}" y="${30 + (k % 2) * 2}" width="${4 + k}" height="4" fill="#0b0b0c"/><rect x="${x - 1}" y="${35 - (k % 3)}" width="5" height="${3 + (k % 2)}" fill="#0b0b0c"/>`
            })
            .join("")
        const path = `M110 168C110 130 ${bx} 128 ${bx} 96L${bx} 60`
        return wrap(`<path d="M24 20H196" stroke="#c9a77c" stroke-width="7" stroke-linecap="round"/>
            ${[30, 70, 110, 150, 190].map((x) => `<path d="M${x} 20V78" stroke="#c9a77c" stroke-width="5" stroke-linecap="round"/>`).join("")}
            ${tags}${label(bx, 96, "", "middle")}
            <g transform="translate(${bx} 60)"><circle r="12" fill="none" stroke="${YELLOW}" stroke-width="1.6" opacity=".9"><animate attributeName="r" values="9;15;9" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" values=".9;.2;.9" dur="1.6s" repeatCount="indefinite"/></circle></g>
            ${label(204, 160, "stop bow first", "end")}
            ${boat(path, 6, `calcMode="linear" keyTimes="0;0.75;1" keyPoints="0;1;1"`)}`)
    }
    return ""
}
