<template>
    <el-container>
        <el-aside>
            <SystemAside />
            <el-button @click="signOut"> 登出 </el-button>
        </el-aside>
        <el-container>
            <el-header>
                <SystemHeader />
            </el-header>
            <el-main> </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import { useRouter } from "vue-router"

import { signOut } from "@/utils/user"
import SystemHeader from "../components/SystemHeader.vue";

const router = useRouter()
console.log(router)
</script>

<style scoped>
.el-container {
    height: 100vh;
    width: 100vw;
}
.el-header {
    padding: 0;
    height: 48px;
}
.el-main {
    width: ;
}
</style>
