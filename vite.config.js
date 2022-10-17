import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"

import viteCompression from "vite-plugin-compression"

export default defineConfig({
    plugins: [
        vue(),
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
    },
})
