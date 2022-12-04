<template>
    <el-table :data="tableData" style="width: 100%" max-height="75vh">
        <el-table-column type="expand">
            <template #default="scope">
                <el-row class="note">
                    <el-col :sm="10" :xs="24">
                        <p>建立時間：{{ scope.row.timestamp }}</p>
                        <p>總價：{{ scope.row.totalPrice }}</p>
                        <p>備註：{{ scope.row.note }}</p>
                    </el-col>
                    <el-col :md="14" :xs="24">
                        <el-table :data="scope.row.productList" stripe show-summary>
                            <el-table-column prop="productName" label="名稱" />
                            <el-table-column prop="amount" label="數量" />
                            <el-table-column prop="price" label="價錢" />
                        </el-table>
                    </el-col>
                </el-row>
            </template>
        </el-table-column>
        <!-- <el-table-column prop="uid" label="訂單編號" show-overflow-tooltip /> -->
        <el-table-column prop="timestamp" label="建立時間" show-overflow-tooltip />
        <el-table-column prop="totalPrice" label="總價" width="60"/>
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
            <template #default="scope">
                <el-tag
                    v-for="item in scope.row.tagList"
                    class="tag"
                    effect="plain"
                    :key="item"
                >
                    {{ item }}
                </el-tag>
            </template>
        </el-table-column>
        <el-table-column label="操作" width="60">
            <template #default="scope">
                <el-button type="danger" :icon="Delete" circle @click="handleDelete(scope.row.uid)" />
            </template>
        </el-table-column>
    </el-table>
</template>

<script setup>
import { Delete } from "@element-plus/icons-vue"

const filterTag = (value, row) => {
    console.log(row.tagList)
    console.log(row.tagList.some((tag) => tag.valueOf() === value))
    return row.tagList.some((tag) => tag.valueOf() === value)
}

// const convertTime = (timestamp) => {
//     const date = new Date(timestamp)
//     const year = date.getFullYear()
//     const month = date.getMonth() + 1
//     const day = date.getDate()
//     const hour = date.getHours()
//     const minute = date.getMinutes()
//     const second = date.getSeconds()
//     return `${year}/${month}/${day} ${hour}:${minute}:${second}`
// }

const tableData = [
    {
        uid: "CHpImey2IsMHIzZTJRBUHKopSWU1",
        timestamp: "2022年10月29日 凌晨 12:19:42 [UTC+8]",
        totalPrice: 1000,
        tagList: ["製作中"],
        note: "這是備註",
        productList: [
            {
                productName: "可可牛奶",
                productId: "MPYIaoHT8Iz704piU30S",
                amount: 2,
                price: 60,
            },
        ],
    },
    {
        uid: "CHpImey2IsMHIzZTJRBUHKopSWU2",
        timestamp: "2022年10月29日 凌晨 12:19:42 [UTC+8]",
        totalPrice: 1000,
        tagList: ["瑕疵品", "製作中", "外送"],
        note: "這是備註",
        productList: [
            {
                productName: "可可牛奶",
                productId: "MPYIaoHT8Iz704piU30S",
                amount: 2,
                price: 500,
            },
            {
                productName: "蘋果牛奶",
                productId: "MPYIaoHT8Iz704piU30S",
                amount: 4,
                price: 500,
            },
            {
                productName: "可可牛奶",
                productId: "MPYIaoHT8Iz704piU30S",
                amount: 2,
                price: 500,
            },
            {
                productName: "蘋果牛奶",
                productId: "MPYIaoHT8Iz704piU30S",
                amount: 4,
                price: 500,
            },
            {
                productName: "可可牛奶",
                productId: "MPYIaoHT8Iz704piU30S",
                amount: 2,
                price: 500,
            },
            {
                productName: "蘋果牛奶",
                productId: "MPYIaoHT8Iz704piU30S",
                amount: 4,
                price: 500,
            },
        ],
    },
    {
        uid: "CHpImey2IsMHIzZTJRBUHKopSWU3",
        timestamp: "2022年10月29日 凌晨 12:19:42 [UTC+8]",
        totalPrice: 1000,
        tagList: ["瑕疵品"],
        note: "這是備註",
        productList: [
            {
                productName: "可可牛奶",
                productId: "MPYIaoHT8Iz704piU30S",
                amount: 2,
                price: 60,
            },
        ],
    },
    {
        uid: "CHpImey2IsMHIzZTJRBUHKopSWU4",
        timestamp: "2022年10月29日 凌晨 12:19:42 [UTC+8]",
        totalPrice: 1000,
        tagList: ["瑕疵品", "外送"],
        note: "這是備註",
        productList: [
            {
                productName: "可可牛奶",
                productId: "MPYIaoHT8Iz704piU30S",
                amount: 2,
                price: 60,
            },
        ],
    },
    {
        uid: "CHpImey2IsMHIzZTJRBUHKopSWU5",
        timestamp: "2022年10月29日 凌晨 12:19:42 [UTC+8]",
        totalPrice: 1000,
        tagList: [],
        note: "這是備註",
        productList: [
            {
                productName: "可可牛奶",
                productId: "MPYIaoHT8Iz704piU30S",
                amount: 2,
                price: 60,
            },
        ],
    },
    {
        uid: "CHpImey2IsMHIzZTJRBUHKopSWU6",
        timestamp: "2022年10月29日 凌晨 12:19:42 [UTC+8]",
        totalPrice: 1000,
        tagList: ["外送", "製作中"],
        note: "這是備註",
        productList: [
            {
                productName: "可可牛奶",
                productId: "MPYIaoHT8Iz704piU30S",
                amount: 2,
                price: 60,
            },
        ],
    },
]

const handleDelete = (uid) => {
    console.log(uid)
}
</script>

<style lang="scss" scoped>
.note {
    width: 100%;
    padding-left: 3vw;

    :deep(>*) {
        padding: 5px;
    }
}
.tag {
    margin-top: 3px;
    margin-right: 3px;
}
</style>
