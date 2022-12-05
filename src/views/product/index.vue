<script setup>
import FloatCard from "@/components/ui/FloatCard.vue"
import MainTable from "./MainTable.vue"
import ProductForm from "./ProductForm.vue"
// import TypeTags from "@/components/product/TypeTags.vue"
</script>

<template>
    <el-row class="wrapper">
        <el-col :xs="24">
            <FloatCard margin="ml-0">
                <MainTable></MainTable>
            </FloatCard>
        </el-col>
    </el-row>
</template>
<style lang="scss" scoped>
.wrapper {
    max-width: 600px;
}
</style>
