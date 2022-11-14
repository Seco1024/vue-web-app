<script setup>
import { Moon, Sunny } from "@element-plus/icons-vue"
import { useDark, useToggle } from "@vueuse/core"

const isDark = useDark()
const toggleDark = useToggle(isDark)

if (isDark.value === false) {
    toggleDark()
}
</script>

<template>
    <el-switch
        style="dark-mode-toggle"
        size="large"
        v-model="isDark"
        @change="toggleDark"
        inline-prompt
        :active-icon="Moon"
        :inactive-icon="Sunny"
    ></el-switch>
</template>

<style scoped lang="less">
.el-switch {
    --el-switch-on-color: var(--el-bg-color-overlay);
    border: 1px solid var(--el-border-color);
    border-radius: 20px;
    height: 26px;
    margin-top: auto;
    margin-bottom: auto;
}
</style>
