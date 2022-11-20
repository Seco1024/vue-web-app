<template>
    <el-autocomplete v-model="state" :fetch-suggestions="querySearch" clearable placeholder="原料名稱" @select="handleSelect" style="width: 100%">
        <template #prefix>
            <i-ep-search />
        </template>
    </el-autocomplete>
    <el-button type="primary" style="width: 100%">新增原料</el-button>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { getMaterialList } from "@/apis/material"

const state = ref("")
const materials = ref([])

const querySearch = (queryString, cb) => {
    const results = queryString ? materials.value.filter(createFilter(queryString)) : materials.value
    cb(results)
}

const createFilter = (queryString) => {
    return (material) => {
        return material.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    }
}

const handleSelect = (item) => {
    console.log(item)
}

onMounted(async () => {
    const result = await getMaterialList()
    materials.value = result.map((item) => {
        return {
            value: item.name,
            id: item.id,
        }
    })
    console.log(materials)
})
</script>

<style scoped>
.button-new-tag {
    width: 30px;
    margin-top: 10px;
}
</style>
