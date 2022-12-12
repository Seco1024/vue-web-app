<template>
<<<<<<< HEAD
    <el-form v-loading="loading">
        <el-table :data="orderForm.productList" style="width: 100%">
            <el-table-column label="產品名稱" prop="productName" />
            <el-table-column label="價格" prop="price" width="60" />
            <el-table-column label="數量" prop="amount" width="60" />
            <el-table-column label="動作" width="60">
                <template #default="{ row }">
                    <el-button size="small" type="danger" circle @click="deleteProductFromOrderForm(row.productId)"><i-ep-delete /></el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-form-item label="標籤">
            <el-select v-model="orderForm.tagList" multiple>
                <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
            </el-select>
        </el-form-item>
        <!-- <el-form-item label="折扣類型">
=======
    <div>
        <el-form v-loading="loading">
            <el-table :data="orderForm.productList" style="width: 100%">
                <el-table-column label="產品名稱" prop="productName" />
                <el-table-column label="價格" prop="price" width="60" />
                <el-table-column label="數量" prop="amount" width="60" />
                <el-table-column label="動作" width="60">
                    <template #default="{ row }">
                        <el-button size="small" type="danger" circle @click="deleteProductFromOrderForm(row.productId)"><i-ep-delete /></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-form-item label="標籤">
                <el-select v-model="orderForm.tagList" multiple>
                    <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
                </el-select>
            </el-form-item>
            <!-- <el-form-item label="折扣類型">
>>>>>>> cd77f4f319a5886f57fc62fa01d9be999b361907
            <el-select> </el-select>
        </el-form-item> -->
            <el-input v-model="orderForm.note" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea" placeholder="附註" />
            <el-form-item>
                <el-row>
                    <el-col :span="12">
                        <div>總計：${{ orderForm.totalPrice }}</div>
                    </el-col>
                    <el-col :span="12">
                        <div><span>折扣：</span><el-input v-model="orderForm.discount" type="number" placeholder="折扣" style="width: 40%" /></div>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-button size="small" type="primary" @click="dialogVisible = true">確認</el-button>
            <el-button size="small" type="danger" @click="deleteAllProductFromOrderForm">清空</el-button>
            <!-- {{ orderForm}} -->
        </el-form>
        <el-dialog v-model="dialogVisible" title="選擇員工">
            <el-row :gutter="20">
                <el-col :xs="24" :md="8" v-for="staff in staffs" :key="staff.sid">
                    <el-card @click="handleClickStaff(staff.name)">
                        {{ staff.name }}
                    </el-card>
                </el-col>
            </el-row>
        </el-dialog>
    </div>
</template>
<script setup>
import { useCheckState } from "@/composables/useCheckState"
import { useFetchStaff } from "@/composables/useFetchStaff"
import { toRefs, ref } from "vue"

import { ElMessage } from "element-plus"

const { orderForm, addOrder, deleteProductFromOrderForm, deleteAllProductFromOrderForm, loading, responseMessage } = useCheckState()
toRefs(orderForm)

const dialogVisible = ref(false)

const { staffs } = useFetchStaff()
console.log(staffs.value)

const options = ["製作中", "製作完成", "已出貨"]

const handleClickStaff = async (staffName) => {
    orderForm.staffName = staffName
    dialogVisible.value = false
    await addOrder()
    ElMessage.success(responseMessage.value)
}
</script>
<style lang="scss" scoped>
.el-form {
    > * {
        margin-bottom: 20px;
    }
}
.el-card {
    height: 100px;
    cursor: pointer;
    &:hover {
        background-color: var(--vt-c-white-mute);
        color: var(--el-color-primary);
    }
}
</style>
