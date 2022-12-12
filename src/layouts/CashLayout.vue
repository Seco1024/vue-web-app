<template>
    <el-row>
<<<<<<< HEAD
        <el-col :md="14">
            <slot name="main"></slot>
        </el-col>
        <el-col :md="10">
=======
        <el-col :md="14" :lg="16">
            <slot name="main"></slot>
        </el-col>
        <el-col :md="10" :lg="8">
>>>>>>> cd77f4f319a5886f57fc62fa01d9be999b361907
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
