<template>
    <div>
        <el-table :data="tableData" stripe max-height="75vh" size="large">
            <el-table-column prop="name" label="名稱" />
            <el-table-column prop="amount" label="存貨量" />
        </el-table>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { getUserMaterialList } from "@/apis/material"

const tableData = ref([])

onMounted(async () => {
    tableData.value = await getUserMaterialList()
})
</script>
