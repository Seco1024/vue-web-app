<script setup>
import CenteredCard from "@/layouts/CenteredCard.vue"
import { signOut } from "@/utils/user"
import NewUserForm from "./components/NewUserForm.vue"
</script>
<template>
    <div class="background">
        <CenteredCard>
            <NewUserForm />
        </CenteredCard>
        <el-button @click="signOut"> 登出 </el-button>
    </div>
</template>

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
