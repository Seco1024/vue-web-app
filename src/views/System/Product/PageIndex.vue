<script setup>
import BigSmallCard from "@/layouts/BigSmallCard.vue"
import MainTable from "./components/MainTable.vue"
import TypeTags from "./components/TypeTags.vue"
</script>

<template>
    <BigSmallCard>
        <template #big-card>
            <MainTable></MainTable>
        </template>
        <template #small-card>
            <TypeTags></TypeTags>
        </template>
    </BigSmallCard>
</template>
