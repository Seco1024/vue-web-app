<template>
    <el-space wrap  alignment="flex-start">
        <div class="main">
            <slot name="main"></slot>
        </div>
        <el-card>
            <slot name="list"></slot>
        </el-card>
    </el-space>
</template>
<style lang="scss" scoped>
.main {
    width: calc(100vw - (var(--el-menu-icon-width) + var(--el-menu-base-level-padding) * 2) - 600px);
}
@media screen and (max-width: 768px) {
    .main {
        width: 100vw;
    }
}
</style>
