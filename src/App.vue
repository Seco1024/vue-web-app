<script setup></script>

<template>
    <router-view v-slot="{ Component }" v-loading.fullscreen.lock>
        <component :is="Component" />
    </router-view>
</template>

<style>
.ml-2 {
    margin-left: 0.5rem !important;
}
</style>
