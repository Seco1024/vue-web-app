<script setup="props">
import { defineProps, defineEmits, computed } from "vue"

const props = defineProps(["title"])

// pass v-model to child modelValue
const modelValue = computed({
    get() {
        return this.modelValue
    },
    set() {},
})

const emit = defineEmits(["confirmClick", "cancelClick"])
const cancelClick = () => emit("cancelClick")
const confirmClick = () => emit("confirmClick")
</script>
<template>
    <el-drawer v-model="modelValue" modal :title="props.title" direction="rtl">
        <slot></slot>
        <template #footer>
            <div style="flex: auto">
                <el-button @click.prevent="cancelClick">cancel</el-button>
                <el-button type="primary" @click.prevent="confirmClick"
                    >confirm</el-button
                >
            </div>
        </template>
    </el-drawer>
</template>
