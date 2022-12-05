<template>
    <el-form :model="form">
        <el-form-item label="名稱" required>
            <el-input v-model="form.name" placeholder="請輸入名稱"></el-input>
        </el-form-item>
        <el-form-item label="種類" required>
            <el-autocomplete></el-autocomplete>
        </el-form-item>
        <el-form-item label="價格" required>
            <el-input v-model="form.price" placeholder="請輸入價格"></el-input>
        </el-form-item>
    </el-form>
    <slot name="footer"></slot>
</template>
<script setup>
defineProps({
    form: {
        type: Object,
        default: () => ({}),
    }
})
</script>
<style lang="scss" scoped>
.el-form {
    margin: 0 3vw;
}
</style>