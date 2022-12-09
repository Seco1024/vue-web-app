<script setup>
import ProductCard from "./ProductCard.vue"
import { useCheckState } from "@/composables/useCheckState"

const { products, addProductToOrderForm } = useCheckState()
</script>
<template>
    <el-row :gutter="10">
        <el-col v-for="product in products" :xl="6" :md="6" :sm="8" :xs="12">
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
