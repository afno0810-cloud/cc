import { defineConfig } from "vite"
import { resolve } from "node:path"
import { readFileSync, existsSync } from "node:fs"
import { site } from "./scripts/site-html.js"

/* ================================================================
   Marinor NTNU – a static multi-page site.
   Every page is a real HTML file (good for search engines and for
   visitors without JavaScript). Shared parts – <head>, navigation,
   footer and images – are written once and expanded at build time by
   the small `site` plugin in scripts/site-html.js.
   ================================================================ */

const PAGES = [
    "index.html",
    "about/index.html",
    "projects/index.html",
    "projects/argus/index.html",
    "projects/proteus/index.html",
    "team/index.html",
    "team/team-2025/index.html",
    "team/team-2026/index.html",
    "competitions/index.html",
    "competitions/njord-challenge/index.html",
    "competitions/roboboat/index.html",
    "sponsor/index.html",
    "join/index.html",
    "404.html",
]

export default defineConfig({
    plugins: [site({ imageManifest: JSON.parse(readFileSync(resolve(__dirname, "public/media/img/manifest.json"), "utf8")) })],
    build: {
        target: "es2019",
        chunkSizeWarningLimit: 900,
        rollupOptions: {
            input: Object.fromEntries(PAGES.filter((p) => existsSync(resolve(__dirname, p))).map((p) => [p.replace(/\/?index\.html$/, "") || "home", resolve(__dirname, p)])),
        },
    },
})
