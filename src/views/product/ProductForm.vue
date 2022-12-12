<template>
<<<<<<< HEAD
    <el-form :model="form">
        <el-form-item label="名稱">
            <el-input v-model="form.name" placeholder="請輸入名稱"></el-input>
        </el-form-item>
        <el-form-item label="種類">
            <el-autocomplete v-model="form.type" :fetch-suggestions="querySearch" clearable placeholder="請輸入種類"></el-autocomplete>
        </el-form-item>
        <el-form-item label="價格">
            <el-input v-model="form.price" type="number" placeholder="請輸入價格"></el-input>
        </el-form-item>
    </el-form>
    <slot name="footer"></slot>
=======
    <div>
        <el-form :model="form">
            <el-form-item label="名稱">
                <el-input v-model="form.name" placeholder="請輸入名稱"></el-input>
            </el-form-item>
            <el-form-item label="種類">
                <el-autocomplete v-model="form.type" :fetch-suggestions="querySearch" clearable placeholder="請輸入種類"></el-autocomplete>
            </el-form-item>
            <el-form-item label="價格">
                <el-input v-model="form.price" type="number" placeholder="請輸入價格"></el-input>
            </el-form-item>
        </el-form>
        <slot name="footer"></slot>
    </div>
>>>>>>> cd77f4f319a5886f57fc62fa01d9be999b361907
</template>
<script setup>
import { useFetchType } from "@/composables/useFetchType"

const { types } = useFetchType()

const querySearch = (queryString, cb) => {
    const array = queryString ? types.value.filter(createFilter(queryString)) : types.value
    const results = array.map((item) => {
        return {
            value: item,
        }
    })
    cb(results)
}

const createFilter = (queryString) => {
<<<<<<< HEAD
  return (type) => {
    // console.log(type)
    return (
      type.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
=======
    return (type) => {
        // console.log(type)
        return type.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    }
>>>>>>> cd77f4f319a5886f57fc62fa01d9be999b361907
}

defineProps({
    form: {
        type: Object,
        default: () => ({
            name: "",
            type: "",
            price: 0,
        }),
    },
})
</script>
<style lang="scss" scoped>
.el-form {
    margin: 0 3vw;
}
</style>
