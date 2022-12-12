<template>
    <el-row>
        <el-col :md="14" :lg="16">
            <slot name="main"></slot>
        </el-col>
        <el-col :md="10" :lg="8">
            <el-card>
                <slot name="list"></slot>
            </el-card>
        </el-col>
    </el-row>
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
