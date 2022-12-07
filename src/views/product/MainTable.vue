<template>
    <el-table v-loading="loading" :data="tableData" stripe max-height="75vh" size="large" @row-click="openEdit" empty-text="無資料">
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
            <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)">編輯</el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">刪除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <RightDrawer title="更新商品" v-model="openEdit">
        <ProductForm :form="form" />
        <template #footer>
            <el-button size="large" @click.prevent="cancel">取消</el-button>
            <el-button size="large" type="primary" @click.prevent="confirmEdit">確認編輯</el-button>
        </template>
    </RightDrawer>
    <RightDrawer title="新增商品" v-model="openAdd">
        <ProductForm :form="form" />
        <template #footer>
            <el-button @click.prevent="cancel">取消</el-button>
            <el-button type="primary" @click.prevent="confirmAdd">確認新增</el-button>
        </template>
    </RightDrawer>
</template>

<script setup>
import ProductForm from "./ProductForm.vue"
import { getProductList } from "@/api/product"
import { ref, reactive, onMounted } from "vue"

const form = reactive({
    name: "",
    type: "",
    price: "",
})

const openEdit = ref(false)

const handleEdit = (index, row) => {
    const { name, type, price, amount, materialList } = row

    form.name = name
    form.type = type
    form.price = price

    openEdit.value = true
}

const confirmEdit = () => {
    const { name, type, price, amount, materialList } = form

    console.log(name, type, price, amount, materialList)

    openEdit.value = false
}

const openAdd = ref(false)

const handleAdd = () => {
    openAdd.value = true

    form.name = ""
    form.type = ""
    form.price = ""

    openAdd.value = true
}

const confirmAdd = () => {
    const { name, type, price } = form

    console.log(name, type, price)

    openAdd.value = false
}

const cancel = () => {
    openEdit.value = false
    openAdd.value = false
}

const tableData = ref([])
const loading = ref(false)
onMounted(async () => {
    loading.value = true
    tableData.value = await getProductList()
    loading.value = false
})
</script>
