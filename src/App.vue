<script setup>
import { ref } from "vue"
import zhTw from "element-plus/dist/locale/zh-tw.mjs"

const locale = ref(zhTw)
</script>

<template>
    <el-config-provider :locale="locale">
        <router-view v-slot="{ Component }" v-loading.fullscreen.lock>
            <component :is="Component" />
        </router-view>

        <AppFooter><a href="https://github.com/CeranaPOS" target="_blank">Cerana Team</a> from NCCU</AppFooter>
    </el-config-provider>
</template>

<style>
.ml-2 {
    margin-left: 0.5rem !important;
}

@media screen and (max-width: 480px) {
    .el-card__body {
        --el-card-padding: 3vw;
    }
}

.el-message {
    position: absolute;
}
</style>
