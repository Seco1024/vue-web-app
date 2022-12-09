<template>
    <!-- {{ modelValue }} -->
    <el-drawer :modelValue="modelValue" @close="modelValue === false" modal :close-on-click-modal="false" :title="title" direction="rtl">
        <slot></slot>
        <template #footer>
            <slot name="footer"></slot>
        </template>
    </el-drawer>
</template>
<script setup>
import { computed } from "vue"

defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        default: "",
    },
})

// const emit = defineEmits(["confirmClick", "cancelClick"])
// const cancelClick = () => emit("cancelClick")
// const confirmClick = () => emit("confirmClick")
</script>
<style lang="scss">
.el-drawer {
    max-width: 350px !important;
}
</style>
