<template>
    <el-form :model="form">
        <el-form-item label="姓名" placeholder="請輸入員工姓名">
            <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="電話" placeholder="請輸入員工電話號碼">
            <el-input v-model="form.phoneNumber" />
        </el-form-item>
        <el-form-item label="電子郵件" placeholder="請輸入員工電子郵件">
            <el-input v-model="form.email" />
        </el-form-item>
    </el-form>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps(["form"])
const form = computed(() => props.form)
</script>
