<template>
    <el-table :data="tableData" stripe max-height="75vh" size="large" @row-click="openEdit">
        <el-table-column prop="name" label="名稱" />
        <el-table-column prop="type" label="種類">
            <template #default="scope">
                {{ scope.row.type }}
            </template>
        </el-table-column>
        <!-- <el-table-column label="存貨/價錢">
            <template #default="scope"> {{ scope.row.amount }}(${{ scope.row.price }})</template>
        </el-table-column> -->
        <el-table-column label="價錢">
            <template #default="scope"> ${{ scope.row.price }} </template>
        </el-table-column>
        <el-table-column label="動作" width="140">
            <template #default="scope">
                <el-button size="small" @click="openEdit(scope.$index, scope.row)">編輯</el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">刪除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <RightDrawer title="更新商品" v-model="open">
        <ProductForm :form="form" />
        <template #footer>
            <el-button @click.prevent="cancelEdit">取消</el-button>
            <el-button type="primary" @click.prevent="confirmEdit">確認編輯</el-button>
        </template>
    </RightDrawer>
</template>

<script setup>
import ProductForm from "./ProductForm.vue"
import { ref, reactive } from "vue"
const open = ref(false)
const drawerType = ref("")
const form = reactive({
    name: "",
    type: "",
    price: "",
    amount: "",
    materialList: [
        {
            mid: "",
            name: "",
            amount: "",
        },
    ],
})

const openEdit = (row, event, column) => {
    console.log(row, event, column)
    const { name, type, price, amount, materialList } = row

    form.name = name
    form.type = type
    form.price = price
    form.amount = amount
    form.materialList = materialList

    open.value = true
}

const openAdd = () => {
    form.name = ""
    form.type = ""
    form.price = ""
    form.amount = ""
    form.materialList = []

    open.value = true
}

const cancelEdit = () => {
    console.log("cancel click: " + open.value)

    open.value = false
}

const confirmEdit = () => {
    const { name, type, price, amount, materialList } = form

    console.log(name, type, price, amount, materialList)

    open.value = false
}

const tableData = [
    {
        name: "asdads",
        type: "asdasd",
        price: 100,
        amount: 10,
        materialList: [],
    },
    {
        name: "asdads",
        type: "asdasd",
        price: 100,
        amount: 10,
        materialList: [],
    },
    {
        name: "asdads",
        type: "asdasd",
        price: 100,
        amount: 10,
        materialList: [],
    },
    {
        name: "asdads",
        type: "asdasd",
        price: 100,
        amount: 10,
        materialList: [],
    },
    {
        name: "asdads",
        type: "asdasd",
        price: 100,
        amount: 10,
        materialList: [],
    },
    {
        name: "asdads",
        type: "asdasd",
        price: 100,
        amount: 10,
        materialList: [],
    },
    {
        name: "asdads",
        type: "asdasd",
        price: 100,
        amount: 10,
        materialList: [],
    },
    {
        name: "asdads",
        type: "asdasd",
        price: 100,
        amount: 10,
        materialList: [],
    },
    {
        name: "asdads",
        type: "asdasd",
        price: 100,
        amount: 10,
        materialList: [],
    },
    {
        name: "asdads",
        type: "asdasd",
        price: 100,
        amount: 10,
        materialList: [],
    },
    {
        name: "asdads",
        type: "asdasd",
        price: 100,
        amount: 10,
        materialList: [],
    },
    {
        name: "asdads",
        type: "asdasd",
        price: 100,
        amount: 10,
        materialList: [],
    },
    {
        name: "asdads",
        type: "asdasd",
        price: 100,
        amount: 10,
        materialList: [],
    },
    {
        name: "asdads",
        type: "asdasd",
        price: 100,
        amount: 10,
        materialList: [],
    },
    {
        name: "asdads",
        type: "asdasd",
        price: 100,
        amount: 10,
        materialList: [],
    },
    {
        name: "asdads",
        type: "asdasd",
        price: 100,
        amount: 10,
        materialList: [],
    },
    {
        name: "asdads",
        type: "asdasd",
        price: 100,
        amount: 10,
        materialList: [],
    },
    {
        name: "asdads",
        type: "asdasd",
        price: 100,
        amount: 10,
        materialList: [],
    },
    {
        name: "asdads",
        type: "asdasd",
        price: 100,
        amount: 10,
        materialList: [],
    },
    {
        name: "asdads",
        type: "asdasd",
        price: 100,
        amount: 10,
        materialList: [],
    },
]
</script>
