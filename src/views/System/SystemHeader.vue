<template>
    <div class="header-wrapper">
        <el-button class="aside-toggle" @click="handleToggle" text>
            <el-icon :size="25" v-if="isCollapse"><i-ep-Expand /></el-icon>
            <el-icon :size="25" v-if="!isCollapse"><i-ep-Fold /></el-icon>
        </el-button>
        <span class="page-name">{{ route.name }}</span>
        <DarkSwitch />
        <el-button style="margin-top: auto; margin-bottom: auto" @click="signOut"> 登出 </el-button>
    </div>
</template>

<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import { useSystemStore } from "@/stores/system"
import { signOut } from "@/utils/user"

const route = useRoute()
const store = useSystemStore()

const isCollapse = computed(() => store.isCollapse)
const handleToggle = () => {
    if (isCollapse.value) {
        store.expand()
    } else {
        store.collapse()
    }
}
</script>

<style scoped>
.header-wrapper {
    background-color: var(--el-bg-color-overlay);
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
    display: flex;
    margin: 20px;
    border-radius: 10px;
    justify-content: space-between;
    box-shadow: var(--el-box-shadow-light);
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
