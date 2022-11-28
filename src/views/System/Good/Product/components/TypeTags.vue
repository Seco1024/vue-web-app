<template>
    <span>產品類型</span>
    <el-tag class="ml-2" v-for="item in dynamicTags" :key="item" effect="light" @close="handleClose(tag)">
        {{ item }}
    </el-tag>
    <el-input
        v-if="inputVisible"
        ref="InputRef"
        v-model="inputValue"
        class="ml-2 button-new-tag"
        size="small"
        @keyup.enter="handleInputConfirm"
        @blur="handleInputConfirm"
    />
    <el-button v-else class="ml-2 button-new-tag" effect="light" @click="showInput">＋ 新增產品類型</el-button>
    <el-button type="primary" class="ml-2 button-new-tag">新增商品</el-button>
</template>

<script setup>
import { nextTick, ref } from "vue"
import { ElInput } from "element-plus"

const inputValue = ref("")
const dynamicTags = ref(["Tag 1", "Tag 2", "Tag 3"])
const inputVisible = ref(false)
const InputRef = ref()

const handleClose = (tag) => {
    dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
}

const showInput = () => {
    inputVisible.value = true
    nextTick(() => {
        InputRef.value.valuefocus()
    })
}

const handleInputConfirm = () => {
    if (inputValue.value) {
        dynamicTags.value.push(inputValue.value)
    }
    inputVisible.value = false
    inputValue.value = ""
}
</script>

<style scoped>
.button-new-tag {
    width: 30px;
    margin-top: 10px;
}
</style>
