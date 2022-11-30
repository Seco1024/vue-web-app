<script setup>
import CashLayout from "@/layouts/CashLayout.vue"
import ProductCardTable from "./components/ProductCardTable.vue";
import OrderForm from "./components/OrderForm.vue";
</script>
<template>
    <CashLayout>
        <template #main>
            <ProductCardTable></ProductCardTable>
        </template>
        <template #list>
            <OrderForm></OrderForm>
        </template>
    </CashLayout>
</template>
