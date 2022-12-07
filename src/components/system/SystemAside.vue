<template>
    <div class="nav-menu">
        <el-menu class="el-menu-vertical" :default-active="router.currentRoute.value.path" :collapse="isCollapse" router>
            <div class="logo">
                <cerana-logo class="img"></cerana-logo>
                <span v-if="!isCollapse" class="title">CeranaPOS</span>
            </div>
            <el-menu-item v-for="route in sysRoutes[0].children" :key="('/system/' + route.path)" :index="('/system/' + route.path)">
                <el-icon v-if="route.path === ''"><Money /></el-icon>
                <el-icon v-if="route.path === 'product'"><ShoppingBag /></el-icon>
                <el-icon v-if="(route.path === 'order')"><List /></el-icon>
                <el-icon v-if="route.path === 'staff'"><Postcard /></el-icon>
                <el-icon v-if="route.path === 'report'"><DataAnalysis /></el-icon>
                <template #title>{{ route.name }}</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup>
import { Money, ShoppingBag, List, Postcard, DataAnalysis } from "@element-plus/icons-vue";

import { computed } from "vue"
import { useRouter } from "vue-router"

import CeranaLogo from "@/components/icons/CeranaLogo.vue"
import { useCollapse } from "@/composables/useCollapse";

const { isCollapse } = useCollapse()

const router = useRouter()
const sysRoutes = computed(() => {
    console.log(router.options.routes.filter((route) => route.path.startsWith("/system")))
    return router.options.routes.filter((route) => route.path.startsWith("/system"))
})
</script>

<style scoped lang="less">
@media (max-width: 512px) {
    :deep(.el-menu--collapse){
        display: none;
    }
    .nav-menu {
        padding: 0px 10px 0px 10px !important;
    }
}
.nav-menu {
    --el-menu-bg-color: var(--el-bg-color-overlay);
    height: 100%;
    // background-color: #001529;
    padding: 20px 20px 0px 20px;
    // overflow: scroll;
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

    :deep(.el-submenu__title) {
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
}
</style>
