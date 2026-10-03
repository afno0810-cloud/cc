import { defineConfig } from "vite"

// One self-contained ES module for embedding the 3D in other sites (Framer code components)
export default defineConfig({
    publicDir: false,
    build: {
        outDir: "framer",
        emptyOutDir: false,
        lib: { entry: "src/embed/index.js", formats: ["es"], fileName: () => "marinor-3d.js" },
        rollupOptions: { output: { inlineDynamicImports: true } },
        chunkSizeWarningLimit: 2000,
    },
})
