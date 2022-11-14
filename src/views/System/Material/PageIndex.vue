<script setup>
import BigSmallCard from "@/layouts/BigSmallCard.vue"
import MainTable from "./components/MainTable.vue"
</script>
<template>
    <BigSmallCard>
        <template #big-card>
            <MainTable></MainTable>
        </template>
        <template #small-card>
            <div>asdasd</div>
        </template>
    </BigSmallCard>
</template>
