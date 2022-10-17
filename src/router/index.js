import { createRouter, createWebHistory } from "vue-router"
import { getIdTokenPromise } from "@/firebase"
import { getUserProfile } from "@/utils/user"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "landing",
            component: () => import("@/views/LandingView.vue"),
            meta: {
                requiresGuest: true,
            },
        },
        {
            path: "/new-user-registration",
            name: "new-user-registration",
            component: () => import("@/views/NewUserRegistrationView.vue"),
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: "/system",
            name: "system",
            component: () => import("@/views/SystemView.vue"),
            meta: {
                requiresAuth: true,
            },
        },
    ],
})

router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
    const requiresGuest = to.matched.some((record) => record.meta.requiresGuest)
    const idToken = await getIdTokenPromise()
    const userProfile = await getUserProfile()

    console.log("to:", to)
    console.log(requiresAuth, requiresGuest, idToken, userProfile)

    if (requiresAuth && !idToken) {
        next("/")
    } else if (requiresGuest && idToken) {
        next("/system")
    } else if (
        to.path === "/new-user-registration" &&
        requiresAuth &&
        idToken &&
        userProfile
    ) {
        next("/system")
    } else if (
        to.path !== "/new-user-registration" &&
        requiresAuth &&
        idToken &&
        !userProfile
    ) {
        next("/new-user-registration")
    } else {
        next()
    }
})

router.beforeResolve((to, from, next) => {
    next()
})

export default router
