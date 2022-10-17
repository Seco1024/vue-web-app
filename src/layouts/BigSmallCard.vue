<template>
    <el-row class="wrapper">
        <el-col :md="16" :xs="24">
            <el-card class="card-wrapper big-card">
                <slot name="big-card"></slot>
            </el-card>
        </el-col>
        <el-col :md="8" :xs="24">
            <el-card class="card-wrapper small-card">
                <slot name="small-card"></slot>
            </el-card>
        </el-col>
    </el-row>
</template>

<style scoped lang="less">
.wrapper {
    // margin: 1% 2vw;
    height: 95%;
}
.card-wrapper {
    margin: 10px 10px 10px;
    border-radius: 20px;
}
.big-card {
    margin-left: 0px !important;
}
.small-card {
    margin-right: 0px !important;
}
</style>
