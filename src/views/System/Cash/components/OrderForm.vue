<script setup>
import OrderProductTable from "./OrderProductTable.vue"
</script>
<template>
    <div>
        <span>清單</span>
        <OrderProductTable></OrderProductTable>
        <el-input
            v-model="note"
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
            placeholder="附註"
        />
    </div>
</template>
