/* ================================================================
   Builds a one-file preview of the whole site, for places that can only
   show a single page (like a private Claude Artifact):

   - every page becomes a <template>, and a small router shows the one in
     the address (#page-about, #page-projects-argus, …),
   - all paths are relative,
   - the Argus models are saved without meshopt compression, so no
     WebAssembly is needed to show them.

   Usage: node scripts/build-preview.mjs <out-dir>
   The real site is still built with `npm run build`.
   ================================================================ */
import { execSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"
import { NodeIO } from "@gltf-transform/core"
import { ALL_EXTENSIONS } from "@gltf-transform/extensions"
import { MeshoptDecoder } from "meshoptimizer"

const out = path.resolve(process.argv[2] || "preview")
const tmp = out + "-build"

execSync(`npx vite build --base ./ --outDir "${tmp}" --emptyOutDir`, { stdio: "inherit" })

const ROUTES = {
    "/": "home",
    "/about/": "about",
    "/projects/": "projects",
    "/projects/argus/": "projects-argus",
    "/projects/proteus/": "projects-proteus",
    "/team/": "team",
    "/team/team-2025/": "team-2025",
    "/team/team-2026/": "team-2026",
    "/competitions/": "competitions",
    "/competitions/njord-challenge/": "njord",
    "/competitions/roboboat/": "roboboat",
    "/sponsor/": "sponsor",
    "/join/": "join",
}

const escAttr = (s) => s.replace(/&/g, "&amp;").replace(/'/g, "&#39;")

// relative paths from the one page at the root
function fixPaths(html) {
    html = html.replace(/(["'\s,(])(?:\.\/|(?:\.\.\/)+|\/)(media|assets)\//g, "$1$2/")
    // links between pages become router links
    html = html.replace(/href="(\/[^"#]*)(#[^"]*)?"/g, (m, p, hash) => {
        const key = ROUTES[p.endsWith("/") ? p : p + "/"]
        if (!key) return m
        const anchor = hash ? "~" + hash.slice(1) : ""
        return `href="#page-${key}${anchor}"`
    })
    return html
}

let head = ""
const templates = []
for (const [route, key] of Object.entries(ROUTES)) {
    const file = path.join(tmp, route === "/" ? "index.html" : route.slice(1) + "index.html")
    const html = fs.readFileSync(file, "utf8")
    if (key === "home") {
        // styles and scripts are the same on every page: take them from the home page
        const css = [...html.matchAll(/<link rel="stylesheet"[^>]*>/g)].map((m) => m[0])
        const js = [...html.matchAll(/<script type="module"[^>]*><\/script>/g)].map((m) => m[0])
        const pre = [...html.matchAll(/<link rel="modulepreload"[^>]*>/g)].map((m) => m[0])
        head = fixPaths([...css, ...pre].join("\n")) + "\n@@MODULES@@" + JSON.stringify(js.map(fixPaths))
    }
    const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "Marinor NTNU"
    const m = html.match(/<body([^>]*)>([\s\S]*)<\/body>/)
    const attrs = {}
    for (const a of m[1].matchAll(/([a-z-]+)(?:="([^"]*)")?/g)) attrs[a[1]] = a[2] || ""
    templates.push(`<template id="route-${key}" data-title='${escAttr(title)}' data-body='${escAttr(JSON.stringify(attrs))}'>${fixPaths(m[2])}</template>`)
}
const [links, modulesJson] = head.split("@@MODULES@@")
const modules = JSON.parse(modulesJson).join("\n")

const boot = `<script>
/* the 3D models come from JS modules here (see media/models/*.js) */
window.__glbSource = function (name) {
    return import("./media/models/" + name + ".js").then(function (m) {
        var s = atob(m.default)
        var b = new Uint8Array(s.length)
        for (var i = 0; i < s.length; i++) b[i] = s.charCodeAt(i)
        return b.buffer
    })
};
window.__modelSource = function (lite) {
    return window.__glbSource(lite ? "argus-lite" : "argus")
};
/* the router: show the page in the address, and reload for a new one */
(function () {
    var m = /^#page-([a-z0-9-]+)(?:~([A-Za-z0-9_.-]+))?$/.exec(location.hash || "")
    var key = m ? m[1] : "home"
    var after = m && m[2]
    var t = document.getElementById("route-" + key) || document.getElementById("route-home")
    var attrs = JSON.parse(t.getAttribute("data-body") || "{}")
    for (var k in attrs) document.body.setAttribute(k, attrs[k])
    var root = document.documentElement
    root.classList.add("js")
    if ("data-loader" in attrs && !matchMedia("(prefers-reduced-motion: reduce)").matches) root.classList.add("is-loading")
    document.title = t.getAttribute("data-title") || document.title
    document.getElementById("app").replaceWith(t.content.cloneNode(true))
    document.querySelectorAll("template[id^='route-']").forEach(function (x) { x.remove() })
    if ("scrollRestoration" in history) history.scrollRestoration = "manual"
    window.scrollTo(0, 0)
    document.addEventListener("click", function (e) {
        var a = e.target.closest && e.target.closest('a[href^="#page-"]')
        if (!a) return
        e.preventDefault()
        e.stopPropagation()
        location.hash = a.getAttribute("href").slice(1)
        location.reload()
    }, true)
    window.addEventListener("hashchange", function () {
        if (/^#page-/.test(location.hash)) location.reload()
    })
    if (after) window.addEventListener("load", function () {
        setTimeout(function () { var el = document.getElementById(after); if (el) el.scrollIntoView() }, 700)
    })
})()
</script>`

const page = `<title>Marinor NTNU</title>
${links}
${templates.join("\n")}
<div id="app"></div>
${boot}
${modules}
`

fs.rmSync(out, { recursive: true, force: true })
fs.mkdirSync(out, { recursive: true })
fs.writeFileSync(path.join(out, "index.html"), page)

// assets: scripts, styles, fonts, the world map chunk
fs.cpSync(path.join(tmp, "assets"), path.join(out, "assets"), { recursive: true })
for (const f of fs.readdirSync(path.join(out, "assets"))) {
    if (!/\.(js|css)$/.test(f)) continue
    const p = path.join(out, "assets", f)
    fs.writeFileSync(p, fixPaths(fs.readFileSync(p, "utf8")).replace(/"\/media\//g, '"media/'))
}
// photos (only the ones the pages use) and the models
fs.mkdirSync(path.join(out, "media", "img"), { recursive: true })
const used = new Set([...page.matchAll(/media\/img\/([^"\s,)]+)/g)].map((m) => m[1]))
for (const f of fs.readdirSync(path.join(tmp, "media", "img"))) {
    if (used.has(f)) fs.copyFileSync(path.join(tmp, "media", "img", f), path.join(out, "media", "img", f))
}
fs.mkdirSync(path.join(out, "media", "models"), { recursive: true })
await MeshoptDecoder.ready
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ "meshopt.decoder": MeshoptDecoder })
fs.mkdirSync(path.join(out, "media", "models", "world"), { recursive: true })
const models = ["argus.glb", "argus-lite.glb", ...fs.readdirSync(path.join(tmp, "media", "models", "world")).map((f) => "world/" + f)]
for (const f of models) {
    const doc = await io.read(path.join(tmp, "media", "models", f))
    for (const ext of doc.getRoot().listExtensionsUsed()) if (ext.extensionName === "EXT_meshopt_compression") ext.dispose()
    // artifacts do not serve .glb files: ship the bytes as a JS module instead
    const bytes = await io.writeBinary(doc)
    fs.writeFileSync(path.join(out, "media", "models", f.replace(/\.glb$/, ".js")), `export default "${Buffer.from(bytes).toString("base64")}"\n`)
}
fs.rmSync(tmp, { recursive: true, force: true })

const count = (d) => fs.readdirSync(d, { withFileTypes: true }).reduce((n, e) => n + (e.isDirectory() ? count(path.join(d, e.name)) : 1), 0)
console.log(`preview: ${out} (${count(out)} files)`)
