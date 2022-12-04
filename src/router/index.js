import { createRouter, createWebHistory } from "vue-router"
import { getIdTokenPromise } from "@/firebase"
import { getUserProfile } from "@/apis/user"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "landing",
            component: () => import("@/views/Landing/LandingView.vue"),
            meta: {
                requiresGuest: true,
            },
        },
        {
            path: "/new-user-registration",
            name: "new-user-registration",
            component: () => import("@/views/System/NewUser/PageIndex.vue"),
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: "/system",
            name: "system",
            component: () => import("@/views/System/PageIndex.vue"),
            meta: {
                requiresAuth: true,
            },
            children: [
                {
                    path: "",
                    name: "結帳介面",
                    component: () => import("@/views/System/Cash/PageIndex.vue"),
                },
                {
                    path: "product",
                    name: "商品管理",
                    component: () => import("@/views/System/Product/PageIndex.vue"),
                },
                {
                    path: "good",
                    name: "存貨管理",
                    component: () => import("@/views/System/Good/PageIndex.vue"),
                    children: [
                        {
                            path: "product",
                            name: "商品清單",
                            component: () => import("@/views/System/Good/Product/PageIndex.vue"),
                        },
                        {
                            path: "material",
                            name: "材料清單",
                            component: () => import("@/views/System/Good/Material/PageIndex.vue"),
                        },
                    ],
                },
                {
                    path: "record",
                    name: "紀錄",
                    component: () => import("@/views/System/Record/PageIndex.vue"),
                    children: [
                        {
                            path: "product",
                            name: "產品紀錄",
                            component: () => import("@/views/System/Record/Product/PageIndex.vue"),
                        },
                        {
                            path: "material",
                            name: "材料紀錄",
                            component: () => import("@/views/System/Record/Material/PageIndex.vue"),
                        },
                    ],
                },
                {
                    path: "employee",
                    name: "員工",
                    component: () => import("@/views/System/Employee/IndexFrame.vue"),
                    children: [
                        {
                            path: "",
                            name: "員工列表",
                            component: () => import("@/views/System/Employee/EmployeePage.vue"),
                        },
                        {
                            path: "schedule",
                            name: "排班列表",
                            component: () => import("@/views/System/Employee/SchedulePage.vue"),
                        },
                    ],
                },
                {
                    path: "customer",
                    name: "客戶",
                    component: () => import("@/views/System/Customer/IndexFrame.vue"),
                    children: [
                        {
                            path: "",
                            name: "客戶列表",
                            component: () => import("@/views/System/Customer/CustomerPage.vue"),
                        },
                        {
                            path: "discount",
                            name: "折扣列表",
                            component: () => import("@/views/System/Customer/DiscountPage.vue"),
                        },
                    ],
                },
            ],
        },
    ],
})

router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
    const requiresGuest = to.matched.some((record) => record.meta.requiresGuest)
    const idToken = await getIdTokenPromise()

    console.log("to:", to)
    // console.log(requiresAuth, requiresGuest, idToken, userProfile)

    if (requiresAuth && !idToken) {
        next("/")
    } else if (requiresGuest && idToken) {
        next("/system")
    } else if (to.fullPath !== "/new-user-registration") {
        next()
    } else {
        // 有經過主功能在冊是否為有 UserProfile，避免每次換頁都發一次 Request
        const userProfile = await getUserProfile()
        if (to.fullPath === "/new-user-registration" && requiresAuth && idToken && userProfile) {
            next("/system")
        } else if (to.fullPath === "/system" && requiresAuth && idToken && !userProfile) {
            next("/new-user-registration")
        } else {
            next()
        }
    }
})

router.beforeResolve((to, from, next) => {
    next()
})

export default router
