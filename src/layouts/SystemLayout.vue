<template>
    <el-container class="background">
        <el-aside>
            <slot name="aside"></slot>
        </el-aside>
        <el-container>
            <el-header>
                <slot name="header"></slot>
            </el-header>
            <el-main>
                <slot name="main"></slot>
            </el-main>
        </el-container>
    </el-container>
</template>

<style scoped>
.el-container {
    height: 100vh;
    width: 100vw;
}
.el-header {
    padding: 0;
    height: 48px;
}
.el-aside {
    width: auto;
}
.background {
    background-color: var(--el-bg-color-overlay);
}
</style>
