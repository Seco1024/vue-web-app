<script setup>
import FloatCard from "@/components/FloatCard.vue"
import MainTable from "./components/MainTable.vue"
import GlobalMaterialTags from "./components/GlobalMaterialTags.vue"
</script>

<template>
    <el-row class="wrapper">
        <el-col :md="16" :xs="24">
            <FloatCard margin="ml-0">
                <MainTable></MainTable>
            </FloatCard>
        </el-col>
        <el-col :md="8" :xs="24">
            <FloatCard>
                <GlobalMaterialTags></GlobalMaterialTags>
            </FloatCard>
        </el-col>
    </el-row>
</template>
