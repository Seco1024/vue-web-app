<script setup>
import BigSmallCard from "@/layouts/BigSmallCard.vue"
import ProductTable from "./components/ProductTable.vue"
import ProductTag from "./components/ProductTag.vue"
</script>

<template>
    <BigSmallCard>
        <template #big-card>
            <ProductTable></ProductTable>
        </template>
        <template #small-card>
            <ProductTag></ProductTag>
        </template>
    </BigSmallCard>
</template>
