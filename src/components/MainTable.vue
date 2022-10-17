// <template>
//     <div>
//         <el-button type="success">新增商品</el-button>
//         <el-table :data="tableData" stripe max-height="75vh" size="large">
//             <el-table-column prop="name" label="名稱" width="180" />
//             <el-table-column prop="type" label="種類" width="180">
//                 <template #default="scope">
//                     {{ scope.row.type }}
//                 </template>
//             </el-table-column>
//             <el-table-column prop="price" label="價格" />
//             <el-table-column prop="amount" label="存貨量" />
//         </el-table>
//     </div>
// </template>

// <script setup>
// const tableAttributes = [
//     {
//         prop: "name",
//         label: "名稱",
//     }, 
//     {
//         prop: "type",
//         label: "種類",
//     }, 
//     {
//         prop: "price",
//         label: "價格",
//     }, 
//     {
//         prop: "amount",
//         label: "存貨量",
//     },
// ]

// const tableData = [
//     {
//         name: "asdads",
//         type: "asdasd",
//         price: 100,
//         amount: 10,
//     },{
//         name: "asdads",
//         type: "asdasd",
//         price: 100,
//         amount: 10,
//     },{
//         name: "asdads",
//         type: "asdasd",
//         price: 100,
//         amount: 10,
//     },{
//         name: "asdads",
//         type: "asdasd",
//         price: 100,
//         amount: 10,
//     },{
//         name: "asdads",
//         type: "asdasd",
//         price: 100,
//         amount: 10,
//     },{
//         name: "asdads",
//         type: "asdasd",
//         price: 100,
//         amount: 10,
//     },{
//         name: "asdads",
//         type: "asdasd",
//         price: 100,
//         amount: 10,
//     },{
//         name: "asdads",
//         type: "asdasd",
//         price: 100,
//         amount: 10,
//     },{
//         name: "asdads",
//         type: "asdasd",
//         price: 100,
//         amount: 10,
//     },{
//         name: "asdads",
//         type: "asdasd",
//         price: 100,
//         amount: 10,
//     },{
//         name: "asdads",
//         type: "asdasd",
//         price: 100,
//         amount: 10,
//     },{
//         name: "asdads",
//         type: "asdasd",
//         price: 100,
//         amount: 10,
//     },{
//         name: "asdads",
//         type: "asdasd",
//         price: 100,
//         amount: 10,
//     },{
//         name: "asdads",
//         type: "asdasd",
//         price: 100,
//         amount: 10,
//     },{
//         name: "asdads",
//         type: "asdasd",
//         price: 100,
//         amount: 10,
//     },{
//         name: "asdads",
//         type: "asdasd",
//         price: 100,
//         amount: 10,
//     },{
//         name: "asdads",
//         type: "asdasd",
//         price: 100,
//         amount: 10,
//     },{
//         name: "asdads",
//         type: "asdasd",
//         price: 100,
//         amount: 10,
//     },{
//         name: "asdads",
//         type: "asdasd",
//         price: 100,
//         amount: 10,
//     },{
//         name: "asdads",
//         type: "asdasd",
//         price: 100,
//         amount: 10,
//     },
// ]
// </script>
