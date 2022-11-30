<template>
    <el-row style="margin-top: 20px">
        <el-col :md="14" :xs="24">
            <slot name="main"></slot>
        </el-col>
        <el-col :md="10" :xs="24">
            <el-card>
                <slot name="list"></slot>
            </el-card>
        </el-col>
    </el-row>
</template>
