<template>
    <el-row class="wrapper">
      <el-col :md="16" :xs="24">
        <FloatCard margin="ml-0">
            <MainTable>
            </MainTable>
        </FloatCard>
      </el-col>
    </el-row>
</template>

<script setup>
import FloatCard from "@/components/FloatCard.vue"
import MainTable from "./MainTable.vue"
</script>