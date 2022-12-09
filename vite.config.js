import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { VitePWA } from "vite-plugin-pwa"

import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"

import viteCompression from "vite-plugin-compression"

export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
            registerType: "autoUpdate",
            injectRegister: "auto",
            workbox: {
                globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
            },
            includeAssets: ["favicon.ico", "apple-touch-icon.png"],
            manifest: {
                name: "Cerana Ledger",
                short_name: "CLedger",
                description: "CeranaLedger是一個簡潔、方便、快速的線上服務。在小市集擺攤或做一些短期買賣，卻發現市面上的進銷存系統卻很貴也沒必要客製化嗎？進貨、銷售、利潤管理、員工管理，只需要一台筆電或平板就可以輕鬆滿足您的需求！",
                theme_color: "#00bd7e",
                icons: [
                    {
                        src: "pwa-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        }),
        viteCompression(), // compress all files
        AutoImport({
            imports: ["vue"],
            resolvers: [
                ElementPlusResolver({
                    importStyle: "sass",
                }),
                IconsResolver({
                    prefix: "Icon",
                }),
            ],
        }),
        Components({
            resolvers: [
                ElementPlusResolver({
                    importStyle: "sass",
                }),
                IconsResolver({
                    enabledCollections: ["ep"],
                }),
            ],
        }),
        Icons({
            autoInstall: true,
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                // 自動主題
                additionalData: `@use "@/styles/element/index.scss" as *;`,
            },
        },
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
        extensions: ["*", ".js", ".vue", ".json"],
    },
})
