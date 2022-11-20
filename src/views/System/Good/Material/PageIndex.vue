<script setup>
import FloatPanel from "@/components/FloatPanel.vue"
import MainTable from "./components/MainTable.vue"
import GlobalMaterialTags from "./components/GlobalMaterialTags.vue"
</script>

<template>
    <el-row class="wrapper">
        <el-col :md="16" :xs="24">
            <FloatPanel margin="ml-0">
                <MainTable></MainTable>
            </FloatPanel>
        </el-col>
        <el-col :md="8" :xs="24">
            <FloatPanel margin="mr-0">
                <GlobalMaterialTags></GlobalMaterialTags>
            </FloatPanel>
        </el-col>
    </el-row>
</template>
