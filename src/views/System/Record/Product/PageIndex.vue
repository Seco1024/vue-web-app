<script setup>
import FloatPanel from "@/components/FloatPanel.vue"
import MainTable from "./components/MainTable.vue"
</script>

<template>
    <el-row class="wrapper">
        <el-col :md="20" :xs="24">
            <FloatPanel margin="ml-0">
                <MainTable></MainTable>
            </FloatPanel>
        </el-col>
    </el-row>
</template>
