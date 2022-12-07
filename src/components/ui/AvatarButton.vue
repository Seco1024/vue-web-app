<template>
    <el-dropdown ref="dropdown" trigger="click" style="margin-right: 2vw; margin-top: auto; margin-bottom: auto">
        <el-avatar :size="35" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />

        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item disable><i-ep-avatar></i-ep-avatar>個人</el-dropdown-item>
                <el-dropdown-item divided @click="signOut"><i-ep-caret-right />登出</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup>
import { signOut } from "@/api/user"
</script>
