<script setup>
import CeranaLogo from "@/components/icons/CeranaLogo.vue"
import { signIn } from "@/api/user"
</script>

<template>
    <div class="nav-menu">
        <div class="logo-wrapper">
            <CeranaLogo />
            <span class="logo-text">CeranaPOS</span>
            <div class="flex-grow"></div>
            <div class="nav-grp">
                <el-button class="nav-button" @click="signIn" text>
                    <img style="margin-right: 10px; width: 18px" src="@/assets/img/google.png" />Google 登入
                </el-button>
            </div>
        </div>
    </div>
</template>

<style>
.nav-menu {
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    padding: 0 24px 0 24px;
}
.logo-wrapper {
    height: 100%;
    padding: 5px;
    display: flex;
}
.logo-text {
    margin-left: 10px;
    font-family: monospace, sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: var(--el-text-color-primary);
}
.flex-grow {
    flex-grow: 1;
}
.nav-grp {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
}
.nav-button {
    height: 100%;
    padding: 8px 40px !important;
    border-radius: 10px;
}
.nav-button > span {
    font-size: normal;
    font-weight: bold;
}
</style>
