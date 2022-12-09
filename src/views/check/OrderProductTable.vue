<template>
    <div>
        <el-table :data="productList">
            <el-table-column label="產品名稱" prop="productName"></el-table-column>
            <el-table-column label="價格" prop="price"></el-table-column>
            <el-table-column label="數量" prop="amount"></el-table-column>
        </el-table>
    </div>
</template>
<script setup>
defineProps({
    productList: {
        type: Array,
        default: []
    }
})
</script>