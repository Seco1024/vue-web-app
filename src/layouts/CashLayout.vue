<template>
    <el-row>
        <el-col :md="16" :xs="24">
            <slot name="main"></slot>
        </el-col>
        <el-col :md="8" :xs="24">
            <el-card>
                <slot name="list"></slot>
            </el-card>
        </el-col>
    </el-row>
</template>
