<template>
    <el-button @click="handleAdd" :icon="Plus">新增員工</el-button>
    <el-table :data="tableData" max-height="75vh" size="large">
        <el-table-column label="姓名" prop="name" />
        <el-table-column label="電話號碼" prop="phoneNumber" />
        <el-table-column label="電子郵件" prop="email" />
        <el-table-column label="" width="140">
            <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)">編輯</el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row.name)">刪除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <RightDrawer title="編輯員工" v-model="openEdit">
        <EmployeeForm :form="form" />
        <template #footer>
            <el-button @click.prevent="cancelEdit">取消</el-button>
            <el-button type="primary" @click.prevent="confirmEdit">確認編輯</el-button>
        </template>
    </RightDrawer>
    <RightDrawer title="新增員工" v-model="openAdd">
        <EmployeeForm :form="form" />
        <template #footer>
            <el-button @click.prevent="cancelAdd">取消</el-button>
            <el-button type="primary" @click.prevent="confirmAdd">確認新增</el-button>
        </template>
    </RightDrawer>
</template>

<script setup>
import { ref, reactive } from "vue"
import EmployeeForm from "./EmployeeForm.vue"
import { Plus } from "@element-plus/icons-vue"

const openEdit = ref(false)
const openAdd = ref(false)
const form = reactive({
    name: "",
    phoneNumber: "",
    email: "",
})

const handleAdd = () => {
    openAdd.value = true
}

const handleEdit = (index, row) => {
    const { name, phoneNumber, email } = row
    console.log(index, row)

    form.name = name
    form.email = email
    form.phoneNumber = phoneNumber
    openEdit.value = true
}

const handleDelete = (index, name) => {
    console.log(index, name)
}

const confirmEdit = () => {
    console.log(form)
    openEdit.value = false
}

const confirmAdd = () => {
    console.log(form)
    openAdd.value = false
}

const cancelEdit = () => {
    openEdit.value = false
}

const cancelAdd = () => {
    openAdd.value = false
}

const tableData = ref([
    {
        name: "邱品硯",
        phoneNumber: "0912345678",
        email: "py@gmail.com",
    },
    {
        name: "邱品硯",
        phoneNumber: "0912345678",
        email: "py@gmail.com",
    },
    {
        name: "邱品硯",
        phoneNumber: "0912345678",
        email: "py@gmail.com",
    },
    {
        name: "邱品硯",
        phoneNumber: "0912345678",
        email: "py@gmail.com",
    },
    {
        name: "邱品硯",
        phoneNumber: "0912345678",
        email: "py@gmail.com",
    },
    {
        name: "邱品硯",
        phoneNumber: "0912345678",
        email: "py@gmail.com",
    },
])
</script>