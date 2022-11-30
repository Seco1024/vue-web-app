<script setup="props">
import { computed } from "vue"

const props = defineProps(["title"])

// pass v-model to child modelValue
const modelValue = computed({
    get() {
        return this.modelValue
    },
    set() {},
})

// const emit = defineEmits(["confirmClick", "cancelClick"])
// const cancelClick = () => emit("cancelClick")
// const confirmClick = () => emit("confirmClick")
</script>
<template>
    <el-drawer v-model="modelValue" modal :title="props.title" direction="rtl">
        <slot></slot>
        <template #footer>
            <slot name="footer"></slot>
        </template>
    </el-drawer>
</template>
