<template>
    <div class="background">
        <NewUserFormCard />
        <el-button @click="handleClick"> 登出 </el-button>
    </div>
</template>

<script setup>
import { signOut } from "@/utils/user"
import { ElLoading } from "element-plus"

const handleClick = async () => {
    const loading = ElLoading.service({
        fullscreen: true,
    })
    signOut()
    loading.close()
}
</script>

<style scoped>
.background {
    height: 100vh;
    width: 100vw;
    background-image: url("@/assets/img/hexagon-bg2.png");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 20px;
}
</style>
