<script setup>
import ProductCard from "./ProductCard.vue"
import { useCheckState } from "@/composables/useCheckState"

const { products, addProductToOrderForm } = useCheckState()
</script>
<template>
    <el-space wrap>
        <ProductCard v-for="product in products" :detail="product" @click="addProductToOrderForm(product)" />
    </el-space>
</template>
