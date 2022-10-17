<template>
    <div class="common-layout" v-loading.fullscreen.lock="fullscreenLoading">
        <el-container>
            <el-header><LandingMenu /></el-header>
            <el-main>
                <HomeLayout />
                <AboutLayout />
            </el-main>
            <el-footer height="25px">
                <Footer />
            </el-footer>
        </el-container>
        <el-backtop :right="5" :bottom="5" />
    </div>
</template>

<script setup></script>

<style scoped>
.common-layout {
    width: 100vw;
}
.el-header {
    padding: 0;
    height: 48px;
    background-color: #fff;
}
.el-main {
    overflow-x: hidden;
}
</style>
