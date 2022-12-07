<script setup>
import SystemLayout from "@/layouts/SystemLayout.vue"
import SystemAside from "@/components/system/SystemAside.vue"
import SystemHeader from "@/components/system/SystemHeader.vue"

import { ref } from "vue"
import { ElConfigProvider } from "element-plus"

import zhTw from "element-plus/dist/locale/zh-tw.mjs"

const locale = ref(zhTw)
</script>

<template>
    <el-config-provider :locale="locale">
        <SystemLayout>
            <template #aside>
                <SystemAside />
            </template>
            <template #header>
                <SystemHeader />
            </template>
            <template #main>
                <router-view />
            </template>
        </SystemLayout>
    </el-config-provider>
</template>

<style scoped></style>
