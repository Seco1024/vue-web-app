<template>
    <ProductForm :form="form"></ProductForm>
    <el-button style="width: 100%" type="primary" @click.prevent="confirmAdd">確認新增</el-button>
</template>

<script setup>
import ProductForm from "./ProductForm.vue"
import { reactive } from "vue"

const form = reactive({
    name: "",
    type: "",
    price: "",
    amount: "",
    materialList: [
        {
            mid: "",
            name: "",
            amount: "",
        },
    ],
})

const confirmAdd = () => {
    const { name, type, price, amount, materialList } = form

    console.log(name, type, price, amount, materialList)

    open.value = false
}
</script>
