<template>
    <div class="header-wrapper">
        <div class="bar">
            <el-button class="aside-toggle" @click="toggle" text>
                <el-icon :size="25" v-if="isCollapse"><i-ep-Expand /></el-icon>
                <el-icon :size="25" v-if="!isCollapse"><i-ep-Fold /></el-icon>
            </el-button>
            <span class="page-name">{{ route.name }}</span>
            <DarkSwitch />
            <AvatarButton />
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router"
import { useCollapse } from "@/composables/useCollapse";

const route = useRoute()

const { isCollapse, toggle } = useCollapse()
</script>

<style scoped>
.header-wrapper {
    position: absolute;
    top: 20px;
    width: 100%;
}
.bar {
    background-color: var(--el-bg-color-overlay);
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
    display: flex;
    border-radius: 10px;
    justify-content: space-between;
    box-shadow: var(--el-box-shadow-light);
    z-index: 100;
}
.aside-toggle {
    width: 40px;
    padding: 20px;
}
.page-name {
    margin-left: 10px;
    font-size: 24px;
    font-weight: bold;
    color: var(--el-text-color-regular);
}
.theme-toggler-content {
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: border-color var(--el-transition-duration), background-color var(--el-transition-duration-fast);

    display: flex;
    border-radius: 50%;
    height: 24px;
    padding: 0 12px;

    align-items: center;
}
</style>
