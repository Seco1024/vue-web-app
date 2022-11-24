<template>
    <el-table :data="tableData" style="width: 100%" max-height="75vh">
        <el-table-column type="expand">
            <template #default="scope">
              <div class="note">
                <p m="t-0 b-2">備註：{{ scope.row.note }} </p>
              </div>
              <div class="expand">
                <el-table :data="scope.row.productList" stripe show-summary > 
                  <el-table-column prop="productName" label="名稱" width="180" />
                  <el-table-column prop="amount" label="數量" width="80"/>
                  <el-table-column prop="price" label="價錢" width="80"/>
                </el-table>
              </div>
            </template>
        </el-table-column>
        <el-table-column prop="uid" label="訂單編號" show-overflow-tooltip />
        <el-table-column prop="timestamp" label="建立時間" show-overflow-tooltip />
        <el-table-column prop="totalPrice" label="總價" width="80" />
        <el-table-column label="標籤" width="200">
          <template #default="scope">
            <el-tag v-for="item in scope.row.tagList" class="tag" effect="plain" closable>{{item}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="" width="70">
          <template #default="scope">
            <el-button type="danger" :icon="Delete" circle @click="deleteOrder(scope.row.uid)" />
          </template>
        </el-table-column>
    </el-table>
</template>

<script lang="ts" setup>
import { ref, reactive} from 'vue'
import { Delete } from '@element-plus/icons-vue'
import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults'

const tag = ref('')
const form = reactive({
    uid: "",
    timestamp: "",
    totalPrice: "",
    note: "",
    productList: [
        {
            productName:"",
            productId: "",
            amount: "",
            price: ""
        },
    ],
    tagList: [
        {
            label: "",
            value: ""
        }
    ]
})

const deleteOrder = (uid) => {
    console.log(uid)
}

// const filterTag = (value: string, row: User) => {
//   return row.tag === value
// }

const tableData = [
    {
        uid: "CHpImey2IsMHIzZTJRBUHKopSWU2",
        timestamp: "2022年10月29日 凌晨 12:19:42 [UTC+8]",
        totalPrice: 1000,
        tagList: ["製作中"],
        note: "這是備註",
        productList: [
          {
            productName: "可可牛奶",
            productId: "MPYIaoHT8Iz704piU30S",
            amount: 2,
            price: 60
          }
        ],
    },
    {
        uid: "CHpImey2IsMHIzZTJRBUHKopSWU2",
        timestamp: "2022年10月29日 凌晨 12:19:42 [UTC+8]",
        totalPrice: 1000,
        tagList: ["瑕疵品", "製作中","外送"],
        note: "這是備註",
        productList: [
          {
            productName: "可可牛奶",
            productId: "MPYIaoHT8Iz704piU30S",
            amount: 2,
            price: 500
          },
          {
            productName: "蘋果牛奶",
            productId: "MPYIaoHT8Iz704piU30S",
            amount: 4,
            price: 500
          }
        ],
    },
    {
        uid: "CHpImey2IsMHIzZTJRBUHKopSWU2",
        timestamp: "2022年10月29日 凌晨 12:19:42 [UTC+8]",
        totalPrice: 1000,
        tagList: ["瑕疵品"],
        note: "這是備註",
        productList: [
          {
            productName: "可可牛奶",
            productId: "MPYIaoHT8Iz704piU30S",
            amount: 2,
            price: 60
          }
        ],
    },
    {
        uid: "CHpImey2IsMHIzZTJRBUHKopSWU2",
        timestamp: "2022年10月29日 凌晨 12:19:42 [UTC+8]",
        totalPrice: 1000,
        tagList: ["瑕疵品", "外送"],
        note: "這是備註",
        productList: [
          {
            productName: "可可牛奶",
            productId: "MPYIaoHT8Iz704piU30S",
            amount: 2,
            price: 60
          }
        ],
    },
    {
        uid: "CHpImey2IsMHIzZTJRBUHKopSWU2",
        timestamp: "2022年10月29日 凌晨 12:19:42 [UTC+8]",
        totalPrice: 1000,
        tagList: [],
        note: "這是備註",
        productList: [
          {
            productName: "可可牛奶",
            productId: "MPYIaoHT8Iz704piU30S",
            amount: 2,
            price: 60
          }
        ],
    },
    {
        uid: "CHpImey2IsMHIzZTJRBUHKopSWU2",
        timestamp: "2022年10月29日 凌晨 12:19:42 [UTC+8]",
        totalPrice: 1000,
        tagList: ["外送", "製作中"],
        note: "這是備註",
        productList: [
          {
            productName: "可可牛奶",
            productId: "MPYIaoHT8Iz704piU30S",
            amount: 2,
            price: 60
          }
        ],
    }
]

</script>

<style>
.note {
    margin:15px
    
}
.expand{
    margin-left:15px
}
.tag{
    margin-top: 3px;
}
</style>
