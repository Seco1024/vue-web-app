<template>
    <div class="nav-menu">
        <el-menu :default-active="router.currentRoute.value.path" :collapse="isCollapse" router>
            <div class="logo">
                <cerana-logo class="img"></cerana-logo>
                <span v-if="!isCollapse" class="title">CeranaPOS</span>
            </div>
            <el-menu-item index="/system">
                <el-icon><i-ep-shop /></el-icon>
                <template #title>結帳介面</template>
            </el-menu-item>
            <el-sub-menu index="good">
                <template #title>
                    <el-icon><i-ep-box /></el-icon>
                    <span>存貨</span>
                </template>
                <el-menu-item index="/system/good/product">商品存貨</el-menu-item>
                <el-menu-item index="/system/good/material">材料存貨</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="record">
                <template #title>
                    <el-icon><i-ep-list /></el-icon>
                    <span>記錄</span>
                </template>
                <el-menu-item index="/system/record/product">銷售記錄</el-menu-item>
                <el-menu-item index="/system/record/material">材料記錄</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="employee">
                <template #title
                    ><el-icon><i-ep-postcard /></el-icon>
                    <span>員工</span>
                </template>
                <el-menu-item index="/system/employee" disabled>員工表</el-menu-item>
                <el-menu-item index="/system/employee/schedule" disabled>排班表</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="customer">
                <template #title
                    ><el-icon><i-ep-postcard /></el-icon>
                    <span>客戶</span>
                </template>
                <el-menu-item index="/system/customer" disabled>客戶表</el-menu-item>
                <el-menu-item index="/system/customer/discount" disabled>折扣類型</el-menu-item>
            </el-sub-menu>
            <el-menu-item disabled>
                <el-icon><i-ep-dataAnalysis /></el-icon>
                <template #title>統計資料</template>
            </el-menu-item>
            <el-menu-item disabled>
                <el-icon><i-ep-firstAidKit /></el-icon>
                <template #title><span>擴充功能</span></template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup>
import { computed } from "vue"
import { useRouter } from "vue-router"

import CeranaLogo from "@/components/icons/CeranaLogo.vue"
import { useSystemStore } from "@/stores/system"

const store = useSystemStore()
const router = useRouter()
console.log(router.currentRoute)

const isCollapse = computed(() => store.isCollapse)
</script>

<style scoped lang="less">
@media (max-width: 512px) {
    :deep .el-menu--collapse {
        display: none;
    }
}
.nav-menu {
    height: 100%;
    // background-color: #001529;
    padding: 20px 20px 0px 20px;
    overflow: scroll;
    .el-menu {
        border-right: none;
        border-radius: 10px;
        box-shadow: var(--el-box-shadow-light);
        .logo {
            display: flex;
            height: 48px;
            padding: 12px 10px 8px 10px;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;

            // border-bottom: var(--el-bg-color-overlay) 1px solid;
            margin-bottom: 20px;
        }
        .img {
            height: 100%;
            margin: 0 6.875px;
        }

        .title {
            margin-left: 10px;
            font-family: monospace, sans-serif;
            font-size: 24px;
            font-weight: 700;
            color: var(--el-text-color-primary);
        }
    }

    // 目录
    .el-submenu {
        background-color: #001529 !important;
        // 二级菜单 ( 默认背景 )
        .el-menu-item {
            padding-left: 50px !important;
            background-color: #0c2135 !important;
        }
    }

    :deep .el-submenu__title {
        background-color: #001529 !important;
    }

    .el-menu-item.is-active {
        color: #fff !important;
        background-color: var(--el-color-primary) !important;
        border-radius: 6px;
    }
}
.el-menu-vertical:not(.el-menu--collapse) {
    width: 250px;
    // height: calc(100% - 48px);
}
</style>
