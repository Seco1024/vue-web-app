<script setup>
import SystemLayout from "@/layouts/SystemLayout.vue"
import SystemAside from "@/components/system/SystemAside.vue"
import SystemHeader from "@/components/system/SystemHeader.vue"

import { ref } from "vue"
</script>

<template>
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
</template>

<style scoped></style>
