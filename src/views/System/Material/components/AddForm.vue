<script setup>
import { defineProps, computed } from "vue"

const props = defineProps(["form"])
const form = computed(() => props.form)
</script>
<template>
    <el-form :model="form">
        <el-form-item label="名稱">
            <el-input v-model="form.name" placeholder="請輸入名稱"></el-input>
        </el-form-item>
        <el-form-item label="存貨量">
            <el-input v-model="form.amount" placeholder="請輸入存貨量"></el-input>
        </el-form-item>
    </el-form>
</template>
