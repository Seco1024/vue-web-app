<script setup>
import FloatCard from "@/components/FloatCard.vue"
import MainTable from "./components/MainTable.vue"
import AddProduct from "./components/AddProduct.vue";
import TypeTags from "./components/TypeTags.vue"
</script>

<template>
    <el-row class="wrapper">
        <el-col :md="14" :xs="24">
            <FloatCard margin="ml-0">
                <MainTable></MainTable>
            </FloatCard>
        </el-col>
        <el-col :md="10" :xs="24">
            <FloatCard>
                <!-- <TypeTags></TypeTags> -->
                <AddProduct></AddProduct>
            </FloatCard>
        </el-col>
    </el-row>
</template>
