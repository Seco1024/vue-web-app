<template>
    <!-- <el-date-picker
        v-model="timeRange"
        type="datetimerange"
        :shortcuts="shortcuts"
        range-separator="到"
        start-placeholder="開始時間"
        end-placeholder="結束時間"
        :default-time="defaultTimeRange"
    />
    <el-button size="small" type="primary" @click="search">搜尋</el-button> -->
    <el-table v-loading="loading" :data="orders" style="width: 100%" max-height="75vh" empty-text="無資料">
        <el-table-column type="expand">
            <template #default="{ row }">
                <el-row class="note">
                    <el-col :sm="10" :xs="24">
                        <p>負責人：{{ row.staffName }}</p>
<<<<<<< HEAD
                        <p>建立時間：{{ row.timestamp }}</p>
                        <p>總價：{{ row.totalPrice }}</p>
=======
                        <p>建立時間：{{ convertTimestamp(row.timestamp) }}</p>
                        <p>折扣：{{ row.discount }} 元</p>
                        <p>總價：{{ row.totalPrice }} 元</p>
>>>>>>> cd77f4f319a5886f57fc62fa01d9be999b361907
                        <p>備註：{{ row.note }}</p>
                    </el-col>
                    <el-col :md="14" :xs="24">
                        <el-table :data="row.productList" stripe>
                            <el-table-column prop="productName" label="名稱" />
                            <el-table-column prop="amount" label="數量" />
<<<<<<< HEAD
                            <el-table-column prop="price" label="價錢" />
=======
                            <el-table-column prop="price" label="價錢">
                                <template #default="{ row }"> ${{ row.price * row.amount }} </template>
                            </el-table-column>
>>>>>>> cd77f4f319a5886f57fc62fa01d9be999b361907
                        </el-table>
                        <div style="text-align: right">總金額：${{ Number(row.totalPrice) + Number(row.discount) }}</div>
                    </el-col>
                </el-row>
            </template>
        </el-table-column>
        <!-- <el-table-column prop="uid" label="訂單編號" show-overflow-tooltip /> -->
        <el-table-column prop="timestamp" label="建立時間" show-overflow-tooltip>
            <template #default="{ row }">
                {{ convertTimestamp(row.timestamp) }}
            </template>
        </el-table-column>
        <el-table-column
            label="標籤"
            :filters="[
                { text: '製作中', value: '製作中' },
                { text: '瑕疵品', value: '瑕疵品' },
                { text: '外送', value: '外送' },
            ]"
            :filter-method="filterTag"
            filter-placement="bottom-end"
        >
            <template #default="{ row }">
                <el-tag v-for="item in row.tagList" class="tag" effect="plain" :key="item">
                    {{ item }}
                </el-tag>
            </template>
        </el-table-column>
        <el-table-column prop="totalPrice" label="總價" width="70">
            <template #default="{ row }"> ${{ row.totalPrice }} </template>
        </el-table-column>
        <el-table-column label="操作" width="60">
            <template #default="scope">
                <el-button type="danger" circle @click="handleDelete(scope.row.orderId)"><i-ep-delete /></el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script setup>
import { onMounted } from "vue"
<<<<<<< HEAD
import { useFetchOrder } from "@/composables/useFetchOrder"

import { ElMessage } from "element-plus";

const { orders, fetchOrder, deleteOrder, loading } = useFetchOrder()
=======

import { useFetchOrder } from "@/composables/useFetchOrder"

import { ElMessage } from "element-plus"

const { orders, fetchOrder, deleteOrder, loading } = useFetchOrder()

>>>>>>> cd77f4f319a5886f57fc62fa01d9be999b361907
const filterTag = (value, row) => {
    console.log(row.tagList)
    console.log(row.tagList.some((tag) => tag.valueOf() === value))
    return row.tagList.some((tag) => tag.valueOf() === value)
}
const convertTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
<<<<<<< HEAD
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
=======
    const hour = String(date.getHours()).padStart(2, "0")
    const minute = String(date.getMinutes()).padStart(2, "0")
    const second = String(date.getSeconds()).padStart(2, "0")

>>>>>>> cd77f4f319a5886f57fc62fa01d9be999b361907
    return `${year}/${month}/${day} ${hour}:${minute}:${second}`
}
onMounted(() => {
    fetchOrder(new Date().getTime(), 20)
    console.log(orders.value)
})

const handleDelete = async (orderId) => {
    await deleteOrder(orderId)
    ElMessage.success("刪除成功")
    fetchOrder(new Date().getTime(), 20)
}
<<<<<<< HEAD
const timeRange = ref([])
const defaultTimeRange = ref([new Date() - 3600 * 1000 * 24 * 7, new Date()])
const search = () => {
    console.log(timeRange.value)
    // fetchOrder(timeRange.value[0].getTime(), timeRange.value[1].getTime())
}
const shortcuts = [
    {
        text: "上週",
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
        },
    },
    {
        text: "上個月",
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
        },
    },
    {
        text: "前三個月",
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            return [start, end]
        },
    },
]
=======

// const timeRange = ref([])
// const defaultTimeRange = ref([new Date() - 3600 * 1000 * 24 * 7, new Date()])

// const search = () => {
//     console.log(timeRange.value)
//     // fetchOrder(timeRange.value[0].getTime(), timeRange.value[1].getTime())
// }

// const shortcuts = [
//     {
//         text: "上週",
//         value: () => {
//             const end = new Date()
//             const start = new Date()
//             start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
//             return [start, end]
//         },
//     },
//     {
//         text: "上個月",
//         value: () => {
//             const end = new Date()
//             const start = new Date()
//             start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
//             return [start, end]
//         },
//     },
//     {
//         text: "前三個月",
//         value: () => {
//             const end = new Date()
//             const start = new Date()
//             start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
//             return [start, end]
//         },
//     },
// ]
>>>>>>> cd77f4f319a5886f57fc62fa01d9be999b361907
</script>

<style lang="scss" scoped>
.note {
    width: 100%;
    padding-left: 3vw;
    :deep(> *) {
        padding: 5px;
    }
}
.tag {
    margin-top: 3px;
    margin-right: 3px;
}
</style>