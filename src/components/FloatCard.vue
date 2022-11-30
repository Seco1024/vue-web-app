<script setup>
const props = defineProps({
    margin: {
        type: String,
        default: "mr-0",
    },
})
console.log(props.margin)
</script>

<template>
    <el-card :class="['card-wrapper', props.margin]">
        <slot></slot>
    </el-card>
</template>

<style scoped lang="less">
.wrapper {
    // margin: 1% 2vw;
    height: 95%;
}
.card-wrapper {
    margin: 10px 10px 10px;
    border-radius: 20px;
}
.ml-0 {
    margin-left: 0px !important;
}
.mr-0 {
    margin-right: 0px !important;
}
:deep .el-card__body > * {
    margin-bottom: 1vh;
}
</style>
