<template>
    <el-button @click="handleExpand">expand</el-button>
    <el-button @click="handleCollapse">collapse</el-button>
</template>

<script setup>
import { useSystemStore } from "@/stores/system"
const store = useSystemStore()

const handleExpand = () => {
    store.expand()
}

const handleCollapse = () => {
    store.collapse()
}
</script>
