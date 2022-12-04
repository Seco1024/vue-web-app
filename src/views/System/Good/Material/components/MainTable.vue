<template>
    <div>
        <el-table :data="tableData" stripe max-height="75vh" size="large">
            <el-table-column prop="name" label="名稱" />
            <el-table-column prop="amount" label="存貨量" />
            <el-table-column label="動作" width="140">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">編輯</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">刪除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { getUserMaterialList } from "@/api/material"

const tableData = ref([])

onMounted(async () => {
    tableData.value = await getUserMaterialList()
})
</script>
