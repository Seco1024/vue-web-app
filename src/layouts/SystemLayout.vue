<template>
    <el-container class="background">
        <el-aside>
            <slot name="aside"></slot>
        </el-aside>
        <el-container class="r-side">
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
.el-aside {
    overflow: visible;
    z-index: 50;
}
.r-side {
    padding-right: 20px;
}
.el-header {
    padding: 0;
    height: 0;
}
.el-main {
    padding: 0;
    padding-top: 70px;
}
@media (max-width: 512px) {
    .el-aside {
        position: absolute;
        display: block;
        top: 6vh;
    }
}
.background {
    background-color: var(--el-bg-color-overlay);
}
</style>
