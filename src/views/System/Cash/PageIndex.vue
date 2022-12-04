<script setup>
import CashLayout from "@/layouts/CashLayout.vue"
import ProductCardTable from "./components/ProductCardTable.vue"
import OrderForm from "./components/OrderForm.vue"
import OrderProductTable from "./components/OrderProductTable.vue"
</script>
<template>
    <CashLayout>
        <template #main>
            <ProductCardTable></ProductCardTable>
        </template>
        <template #list>
            <OrderForm>
                <OrderProductTable></OrderProductTable>
                <el-select>
                </el-select>
                <el-input v-model="note" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea" placeholder="附註" />
                <span>總計：$12345</span>
                <el-button type="primary" @click="confirm">確認</el-button>
            </OrderForm>
        </template>
    </CashLayout>
</template>
