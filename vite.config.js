import { defineConfig } from "vite"
import { viteSingleFile } from "vite-plugin-singlefile"

// Everything (JS, CSS, fonts) is inlined into one index.html,
// so the site can be hosted anywhere as a single file.
export default defineConfig({
    plugins: [viteSingleFile()],
    build: {
        target: "es2019",
        assetsInlineLimit: 100000000,
        cssCodeSplit: false,
        chunkSizeWarningLimit: 2000,
    },
})
