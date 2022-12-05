import axios from "axios"
import router from "@/router"
import { _signIn, getIdTokenPromise, _signOut } from "@/firebase"
import { ElLoading } from "element-plus"

export const getUserProfile = async () => {
    const main = async () => {
        const idToken = await getIdTokenPromise()
        if (!idToken) {
            return null
        }

        const url = `${import.meta.env.VITE_API_URL}/api/user/profile`
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${idToken}`,
            },
        })
        console.log("response:", response)

        if (!response.data.success) {
            console.log("error:", response.data.message)
            return null
        }

        return response.data.userProfile
    }

    const loading = ElLoading.service({
        target: document.body,
        text: "取得使用者資料...",
    })
    const result = await main()
    loading.close()
    return result
}

export const signIn = async () => {
    const loading = ElLoading.service({
        target: document.body,
        text: "登入中...",
    })

    await _signIn()
    router.push("/system")

    loading.close()
}

export const signOut = async () => {
    const loading = ElLoading.service({
        target: document.body,
        text: "正在登出...",
    })

    await _signOut()
    router.push("/")

    loading.close()
}

export const signUp = async ({ firstName, lastName, phoneNumber, howToKnowUs }) => {
    const main = async () => {
        const idToken = await getIdTokenPromise()
        if (!idToken) {
            return null
        }

        const url = `${import.meta.env.VITE_API_URL}/api/user/signup`

        const response = await axios.post(
            url,
            {
                firstName,
                lastName,
                phoneNumber,
                howToKnowUs,
            },
            {
                headers: {
                    Authorization: `Bearer ${idToken}`,
                },
            }
        )
        console.log("response:", response)

        if (response.data.success) router.push("/new-user-registration")
        else return response.data.message
    }

    const loading = ElLoading.service({
        target: document.body,
        text: "新建使用者...",
    })
    const result = await main()
    loading.close()
    return result
}
