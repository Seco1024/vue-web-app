<template>
    <el-card @click="$emit('click')">
        <h1>{{ detail.name.slice(0, 6) }}</h1>
        <h5>{{ detail.type }}</h5>
        <h1>${{ detail.price }}</h1>
    </el-card>
</template>
<script setup>
defineEmits(["click"])
defineProps({
    detail: {
        type: Object,
        default: {},
    },
})
</script>
<style lang="scss" scoped>
.el-card {
    height: 15vh;
    cursor: pointer;
    &:active {
        background-color: #04aa6d;
        transform: translateY(4px);
    }
}
</style>
