<script setup>
import HomeLayout from "./components/HomeLayout.vue"
import AboutLayout from "./components/AboutLayout.vue"
import LandingMenu from "./components/LandingMenu.vue"

import { useDark } from "@vueuse/core"

// 如果不是 Dark mdoe 了話 css 會炸掉
const isDark = useDark()
const forceDark = setInterval(() => {
    isDark.value = false
    if (isDark.value === false) {
        clearInterval(forceDark)
    }
}, 1000)
</script>

<template>
    <div class="common-layout">
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
