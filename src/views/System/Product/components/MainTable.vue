<template>
    <div>
        <el-button type="primary">新增商品</el-button>
        <el-table :data="tableData" stripe max-height="75vh" size="large" @row-click="openEdit">
            <el-table-column prop="name" label="名稱" />
            <el-table-column prop="type" label="種類">
                <template #default="scope">
                    {{ scope.row.type }}
                </template>
            </el-table-column>
            <el-table-column prop="price" label="價格" />
            <el-table-column prop="amount" label="存貨量" />
        </el-table>
    </div>
    <RightDrawer title="更新商品" v-model="open" @confirmClick="confirmEdit" @cancelClick="cancelEdit">
        <AddForm :form="form" />
    </RightDrawer>
</template>

<script setup>
import AddForm from "./AddForm.vue"
import { ref, reactive } from "vue"
const open = ref(false)
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
