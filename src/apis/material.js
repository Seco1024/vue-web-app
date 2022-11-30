import axios from "axios"
import { getIdTokenPromise } from "../firebase"
import { ElLoading } from "element-plus"

const getMaterialList = async () => {
    const main = async () => {
        const idToken = await getIdTokenPromise()
        if (!idToken) {
            return null
        }

        const url = `${import.meta.env.VITE_API_URL}/api/material/predict`
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${idToken}`,
            },
        })
        console.log("[getMaterialList]response:", response)

        if (!response.data.success) {
            console.log("error:", response.data.message)
            return null
        }

        return response.data.materialList
    }

    const loading = ElLoading.service({
        target: document.body,
        text: "取得全域材料...",
    })
    const result = await main()
    loading.close()
    return result
}

const getUserMaterialList = async () => {
    const main = async () => {
        const idToken = await getIdTokenPromise()
        if (!idToken) {
            return null
        }

        const url = `${import.meta.env.VITE_API_URL}/api/material/user-material`
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${idToken}`,
            },
        })
        console.log("[getUserMaterialList]response:", response)

        if (!response.data.success) {
            console.log("error:", response.data.message)
            return null
        }

        const result = response.data.userMaterialList.map((item) => {
            return {
                id: item.materialId,
                name: item.materialName,
                amount: item.amount,
            }
        })

        console.log("[getUserMaterialList]result:", result)

        return result
    }

    const loading = ElLoading.service({
        target: document.body,
        text: "取得使用者材料...",
    })
    const result = await main()
    loading.close()
    return result
}

export { getMaterialList, getUserMaterialList }
