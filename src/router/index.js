import { createRouter, createWebHistory } from "vue-router"
import { getIdTokenPromise } from "@/firebase"
import { getUserProfile } from "@/api/user"
import { routes } from "./route"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
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
