import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    base: "/smart-task-manager/",
    plugins: [
        VitePWA({
            registerType: "autoUpdate",
            includeAssets: [
                "fonts/**",
                "icons/**",
                "svgs/**"
            ],
            workbox: {
                globPatterns: [
                    "**/*.{js,css,html,ico,png,svg,woff,woff2}"
                ]
            },
            manifest: {
                name: "Smart Task Manager",
                short_name: "STM",
                start_url: "/smart-task-manager/",
                display: "standalone",
                background_color: "#111827",
                theme_color: "#111827",
                icons: [
                    {
                        src: "icons/pwa-192.png",
                        sizes: "192x192",
                        type: "image/png"
                    },
                    {
                        src: "icons/pwa-512.png",
                        sizes: "512x512",
                        type: "image/png"
                    }
                ]
            }
        })
    ]
});