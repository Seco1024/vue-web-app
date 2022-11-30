<script setup></script>

<template>
    <router-view v-slot="{ Component }" v-loading.fullscreen.lock>
        <component :is="Component" />
    </router-view>
    <footer>Copyright © <a href="https://github.com/CeranaPOS" target="_blank">Cerana Team</a> from NCCU</footer>
</template>

<style>
.ml-2 {
    margin-left: 0.5rem !important;
}
footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    color: var(--el-text-color-secondary);
    text-align: center;

    backdrop-filter: blur(10px);
}
@media screen and (max-width: 480px) {
    .el-card__body {
        --el-card-padding: 3vw;
    }
}
</style>
