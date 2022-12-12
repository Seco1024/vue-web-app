export const routes = [
    {
        path: "/",
        name: "landing",
        component: () => import("@/views/landing"),
        meta: {
            requiresGuest: true,
        },
    },
    {
        path: "/new-user-registration",
        name: "new-user-registration",
        component: () => import("@/views/new-user"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/system",
        name: "系統",
        component: () => import("@/views/system"),
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: "",
                name: "結帳介面",
                icon: "Money",
                component: () => import("@/views/check"),
            },
            {
                path: "product",
                name: "商品管理",
                icon: "ShoppingBag",
                component: () => import("@/views/product"),
            },
            {
                path: "order",
                name: "交易紀錄",
                icon: "List",
                component: () => import("@/views/order"),
            },
            {
                path: "staff",
                name: "人員",
                icon: "Postcard",
                component: () => import("@/views/staff"),
            },
            // {
            //     path: "report",
            //     name: "統計資料",
            //     icon: 'DataAnalysis',
            //     component: () => import("@/views/dashboard")
            // },
        ],
    },
]
