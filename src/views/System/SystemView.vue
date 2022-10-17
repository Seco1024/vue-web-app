<script setup>
import SystemLayout from "@/layouts/SystemLayout.vue"
import SystemAside from "./SystemAside.vue"
import SystemHeader from "./SystemHeader.vue"
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
