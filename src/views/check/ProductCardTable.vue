<script setup>
import ProductCard from "./ProductCard.vue"
import { useCheckState } from "@/composables/useCheckState"

const { products, addProductToOrderForm } = useCheckState()
</script>
<template>
    <el-row :gutter="10">
<<<<<<< HEAD
        <el-col v-for="product in products" :xl="6" :md="6" :sm="8" :xs="12">
=======
        <el-col v-for="product in products" :key="product.pid" :xl="6" :md="6" :sm="8" :xs="12">
>>>>>>> cd77f4f319a5886f57fc62fa01d9be999b361907
            <ProductCard :detail="product" @click="addProductToOrderForm(product)" />
        </el-col>
    </el-row>
</template>
<style lang="scss" scoped>
.el-row {
    padding: 0 10px;
}
.el-col {
    margin-bottom: 10px;
}
</style>
