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
        <el-form-item label="種類">
            <el-select>
                <el-option>adsasd</el-option>
                <el-option>adsasd</el-option>
                <el-option>adsasd</el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="價格">
            <el-input v-model="form.price" placeholder="請輸入價格"></el-input>
        </el-form-item>
        <el-form-item label="存貨量">
            <el-input v-model="form.amount" placeholder="請輸入存貨量"></el-input>
        </el-form-item>
        <el-form-item label="材料">
            <el-table :data="form.materialList" border style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column prop="name" label="名稱" width="180"></el-table-column>
                <el-table-column prop="amount" label="數量" width="180"></el-table-column>
            </el-table>
        </el-form-item>
    </el-form>
</template>
