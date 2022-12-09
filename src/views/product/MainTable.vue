<template>
    <el-button size="large" type="primary" @click="handleAdd">+ 新增產品</el-button>
    <el-table v-loading="loading" :data="products" stripe max-height="75vh" size="large" @row-click="openEdit" empty-text="無資料">
        <el-table-column prop="name" label="名稱" />
        <el-table-column prop="type" label="種類">
            <template #default="scope">
                {{ scope.row.type }}
            </template>
        </el-table-column>
        <el-table-column label="價錢">
            <template #default="scope"> ${{ scope.row.price }} </template>
        </el-table-column>
        <el-table-column label="動作" width="140">
            <template #default="{ $index, row }">
                <el-button size="small" @click="handleEdit($index, row)">編輯</el-button>
                <el-button size="small" type="danger" @click="deleteProduct(row.pid)">刪除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <RightDrawer title="更新商品" v-model="openEdit">
        <ProductForm :form="form" />
        <template #footer>
            <el-button size="large" @click.prevent="cancel">取消</el-button>
            <el-button size="large" type="primary" @click.prevent="confirmEdit">確認編輯</el-button>
        </template>
        <!-- {{ form }} -->
    </RightDrawer>
    <RightDrawer title="新增商品" v-model="openAdd">
        <ProductForm :form="form" />
        <template #footer>
            <el-button size="large" @click.prevent="cancel">取消</el-button>
            <el-button size="large" type="primary" @click.prevent="confirmAdd">確認新增</el-button>
        </template>
        <!-- {{ form }} -->
    </RightDrawer>
</template>

<script setup>
import ProductForm from "./ProductForm.vue"
import { useFetchProduct } from "@/composables/useFetchProduct"

import { ref, reactive, onMounted } from "vue"

import { ElMessage } from "element-plus";

const { products, loading, fetchProduct, addProduct, deleteProduct, updateProduct, responseMessage } = useFetchProduct()

const form = reactive({
    pid: "",
    name: "",
    type: "",
    price: 0,
})

const openEdit = ref(false)

const handleEdit = (index, row) => {
    const { pid, name, type, price  } = row

    form.pid = pid
    form.name = name
    form.type = type
    form.price = price

    openEdit.value = true
}

const confirmEdit = async () => {
    openEdit.value = false

    await updateProduct(form)
    ElMessage.success(responseMessage.value)
}

const openAdd = ref(false)

const handleAdd = () => {
    openAdd.value = true

    form.pid = ""
    form.name = ""
    form.type = ""
    form.price = 0

    openAdd.value = true
}

const confirmAdd = async () => {
    openAdd.value = false

    await addProduct(form)
    ElMessage.success(responseMessage.value)
}

const cancel = () => {
    openEdit.value = false
    openAdd.value = false
}

onMounted(async () => {
    await fetchProduct()
    ElMessage.success(responseMessage.value)
})
</script>
