<template>
    <el-row class="wrapper">
      <el-col :xs="24">
        <FloatCard margin="ml-0">
            <MainTable>
            </MainTable>
        </FloatCard>
      </el-col>
    </el-row>
</template>
<script setup>
import FloatCard from "@/components/ui/FloatCard.vue"
import MainTable from "./MainTable.vue"
</script>
<style lang="scss" scoped>
.wrapper {
    max-width: 600px;
}
</style>