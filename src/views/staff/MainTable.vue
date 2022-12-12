<template>
    <div>
        <el-button type="primary" size="large" @click="handleAdd" :icon="Plus" style="margin-bottom: 20px">新增員工</el-button>
        <el-table :data="staffs" v-loading="loading" max-height="75vh" size="large" empty-text="無資料">
            <el-table-column label="姓名" prop="name" width="80" />
            <el-table-column label="電話號碼" prop="phoneNumber" width="120" />
            <el-table-column label="電子郵件" prop="email" />
            <el-table-column label="動作" width="125">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)"><i-ep-edit /></el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row.sid)"><i-ep-delete /></el-button>
                </template>
            </el-table-column>
        </el-table>
        <RightDrawer title="編輯員工" v-model="openEdit">
            <EmployeeForm :form="form" />
            <template #footer>
                <el-button size="large" @click.prevent="cancelEdit">取消</el-button>
                <el-button size="large" type="primary" @click.prevent="confirmEdit">確認編輯</el-button>
            </template>
        </RightDrawer>
        <RightDrawer title="新增員工" v-model="openAdd">
            <EmployeeForm :form="form" />
            <template #footer>
                <el-button size="large" @click.prevent="cancelAdd">取消</el-button>
                <el-button size="large" type="primary" @click.prevent="confirmAdd">確認新增</el-button>
            </template>
        </RightDrawer>
    </div>
</template>

<script setup>
import EmployeeForm from "./StaffForm.vue"
// import { getStaffList, addStaff, updateStaff, deleteStaff } from "@/api/staff"
import { useFetchStaff } from "@/composables/useFetchStaff"

import { ref, reactive } from "vue"
import { Plus } from "@element-plus/icons-vue"
import { ElMessage } from "element-plus"

const { staffs, loading, fetchStaff, addStaff, updateStaff, deleteStaff, responseMessage } = useFetchStaff()

const openEdit = ref(false)
const openAdd = ref(false)
const form = reactive({
    sid: "",
    name: "",
    phoneNumber: "",
    email: "",
})

const handleAdd = () => {
    openAdd.value = true
}

const handleEdit = (index, row) => {
    const { sid, name, phoneNumber, email } = row
    console.log(index, row)

    form.sid = sid
    form.name = name
    form.email = email
    form.phoneNumber = phoneNumber
    openEdit.value = true
}

const handleDelete = async (index, sid) => {
    try {
        const resp = await deleteStaff(sid)
        console.log(resp)

        await fetchStaff()

        ElMessage({
            message: responseMessage.value,
            type: "success",
        })
    } catch (error) {
        ElMessage({
            message: responseMessage.message,
            type: "error",
        })
    }
}

const confirmEdit = async () => {
    try {
        openEdit.value = false

        const resp = await updateStaff(form)
        console.log(resp)

        await fetchStaff()

        ElMessage({
            message: responseMessage.value,
            type: "success",
        })
    } catch (error) {
        ElMessage({
            message: responseMessage.message,
            type: "error",
        })
    }
}

const confirmAdd = async () => {
    try {
        openAdd.value = false

        const resp = await addStaff(form)
        console.log(resp)

        await fetchStaff()

        ElMessage({
            message: responseMessage.value,
            type: "success",
        })
    } catch (error) {
        ElMessage({
            message: responseMessage.message,
            type: "error",
        })
    }
}

const cancelEdit = () => {
    openEdit.value = false
}

const cancelAdd = () => {
    openAdd.value = false
}
</script>
