<template>
    <el-form :model="form">
        <el-form-item label="名稱">
            <el-input v-model="form.name" placeholder="請輸入名稱"></el-input>
        </el-form-item>
        <el-form-item label="種類">
            <!-- <el-autocomplete></el-autocomplete> -->
            <el-input v-model="form.type" placeholder="請輸入種類"></el-input>
        </el-form-item>
        <el-form-item label="價格">
            <el-input v-model="form.price" type="number" placeholder="請輸入價格"></el-input>
        </el-form-item>
    </el-form>
    <slot name="footer"></slot>
</template>
<script setup>
defineProps({
    form: {
        type: Object,
        default: () => ({
            name: "",
            type: "",
            price: 0,
        }),
    }
})
</script>
<style lang="scss" scoped>
.el-form {
    margin: 0 3vw;
}
</style>