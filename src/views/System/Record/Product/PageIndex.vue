<script setup>
import FloatCard from "@/components/FloatCard.vue"
import MainTable from "./components/MainTable.vue"
</script>

<template>
    <div class="wrap">
        <FloatCard margin="ml-0">
            <MainTable></MainTable>
        </FloatCard>
    </div>
</template>

<style lang="scss" scoped>
.wrap {
    width: 100%;
    max-width: 700px;
}
</style>
