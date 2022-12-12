<template>
<<<<<<< HEAD
    <el-button size="large" type="primary" @click="handleAdd">+ 新增產品</el-button>
    <el-table
        v-loading="loading"
        :data="products"
        stripe
        max-height="75vh"
        size="large"
        @row-click="openEdit"
        empty-text="無資料"
        style="width: 100%"
    >
        <el-table-column prop="name" label="名稱" />
        <el-table-column prop="type" label="種類">
            <template #default="scope">
                {{ scope.row.type }}
            </template>
        </el-table-column>
        <el-table-column label="價錢" width="65">
            <template #default="scope"> ${{ scope.row.price }} </template>
        </el-table-column>
        <el-table-column label="動作" width="125">
            <template #default="{ $index, row }">
                <el-button size="small" @click="handleEdit($index, row)"><i-ep-edit /></el-button>
                <el-button size="small" type="danger" @click="confirmDelete(row.pid)"><i-ep-delete /></el-button>
=======
    <div>
        <el-button size="large" type="primary" @click="handleAdd">+ 新增產品</el-button>
        <el-table
            v-loading="loading"
            :data="products"
            stripe
            max-height="75vh"
            size="large"
            @row-click="openEdit"
            empty-text="無資料"
            style="width: 100%"
        >
            <el-table-column prop="name" label="名稱" />
            <el-table-column prop="type" label="種類">
                <template #default="scope">
                    {{ scope.row.type }}
                </template>
            </el-table-column>
            <el-table-column label="價錢" width="65">
                <template #default="scope"> ${{ scope.row.price }} </template>
            </el-table-column>
            <el-table-column label="動作" width="125">
                <template #default="{ $index, row }">
                    <el-button size="small" @click="handleEdit($index, row)"><i-ep-edit /></el-button>
                    <el-button size="small" type="danger" @click="confirmDelete(row.pid)"><i-ep-delete /></el-button>
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
>>>>>>> cd77f4f319a5886f57fc62fa01d9be999b361907
            </template>
            <!-- {{ form }} -->
        </RightDrawer>
    </div>
</template>

<script setup>
import ProductForm from "./ProductForm.vue"
import { useFetchProduct } from "@/composables/useFetchProduct"

import { ref, reactive, onMounted } from "vue"

import { ElMessage } from "element-plus"

const { products, loading, fetchProduct, addProduct, deleteProduct, updateProduct, responseMessage } = useFetchProduct()

const form = reactive({
    pid: "",
    name: "",
    type: "",
    price: 0,
})

const openEdit = ref(false)

const handleEdit = (index, row) => {
    const { pid, name, type, price } = row

    form.pid = pid
    form.name = name
    form.type = type
    form.price = price

    openEdit.value = true
}

const confirmEdit = async () => {
    openEdit.value = false
<<<<<<< HEAD

    await updateProduct(form)
    ElMessage.success(responseMessage.value)
    await fetchProduct()
=======
    try {
        await updateProduct(form)
        ElMessage.success(responseMessage.value)
        await fetchProduct()
    } catch (error) {
        ElMessage.error(error)
    }
>>>>>>> cd77f4f319a5886f57fc62fa01d9be999b361907
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
<<<<<<< HEAD

    await addProduct(form)
    ElMessage.success(responseMessage.value)
    await fetchProduct()
=======
    try {
        await addProduct(form)
        ElMessage.success(responseMessage.value)
        await fetchProduct()
    } catch (error) {
        ElMessage.error(error)
    }
>>>>>>> cd77f4f319a5886f57fc62fa01d9be999b361907
}

const cancel = () => {
    openEdit.value = false
    openAdd.value = false
}

const confirmDelete = async (pid) => {
<<<<<<< HEAD
    await deleteProduct(pid)
    ElMessage.success(responseMessage.value)
    await fetchProduct()
=======
    try {
        await deleteProduct(pid)
        ElMessage.success(responseMessage.value)
        await fetchProduct()
    } catch (error) {
        ElMessage.error(error)
    }
>>>>>>> cd77f4f319a5886f57fc62fa01d9be999b361907
}

onMounted(async () => {
    await fetchProduct()
    ElMessage.success(responseMessage.value)
})
</script>
<style lang="scss" scoped>
@media only screen and (max-width: 768px) {
    .el-table--large {
        :deep(.cell) {
            padding: 0 8px;
        }
    }
}
</style>
