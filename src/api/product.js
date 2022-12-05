import axios from "axios"
import { ElMessage } from "element-plus"

import { getIdTokenPromise } from "../firebase"

export const getProductList = async () => {
    try {
        const idToken = await getIdTokenPromise()
        if (!idToken) {
            return null
        }

        const url = `${import.meta.env.VITE_API_URL}/api/product`
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${idToken}`,
            },
        })
        console.log("[getProductList]response:", response)

        if (!response.data.success) {
            ElMessage({
                type: "error",
                message: "取得產品列表失敗",
                showClose: true,
            })

            return null
        }

        return response.data.productList
    } catch (error) {
        // ElMessage({
        //     type: "error",
        //     message: "未知錯誤",
        //     showClose: true,
        // })
        console.log("error:", error)
    }
}

export const addProduct = async ({ name, amount, price }) => {
    const product = {
        name,
        amount,
        price,
    }

    try {
        const idToken = await getIdTokenPromise()
        if (!idToken) {
            return null
        }

        const url = `${import.meta.env.VITE_API_URL}/api/product`
        const response = await axios.post(url, product, {
            headers: {
                Authorization: `Bearer ${idToken}`,
            },
        })
        console.log("[addProduct]response:", response)

        if (!response.data.success) {
            ElMessage({
                type: "error",
                message: "新增產品失敗",
                showClose: true,
            })

            return null
        }

        return response.data.product
    } catch (error) {
        ElMessage({
            type: "error",
            message: "未知錯誤",
            showClose: true,
        })
        console.log("error:", error)
    }
}

export const updateProduct = async ({ pid, name, type, price }) => {
    const product = {
        name,
        type,
        price,
    }

    try {
        const idToken = await getIdTokenPromise()
        if (!idToken) {
            return null
        }

        const url = `${import.meta.env.VITE_API_URL}/api/product/${pid}`
        const response = await axios.put(url, product, {
            headers: {
                Authorization: `Bearer ${idToken}`,
            },
        })
        console.log("[updateProduct]response:", response)

        if (!response.data.success) {
            ElMessage({
                type: "error",
                message: "更新產品失敗",
                showClose: true,
            })

            return null
        }

        return response.data.product
    } catch (error) {
        ElMessage({
            type: "error",
            message: "未知錯誤",
            showClose: true,
        })
        console.log("error:", error)
    }
}

export const deleteProduct = async (pid) => {
    try {
        const idToken = await getIdTokenPromise()
        if (!idToken) {
            return null
        }

        const url = `${import.meta.env.VITE_API_URL}/api/product/${pid}`
        const response = await axios.delete(url, {
            headers: {
                Authorization: `Bearer ${idToken}`,
            },
        })
        console.log("[deleteProduct]response:", response)
        
        if (!response.data.success) {
            ElMessage({
                type: "error",
                message: "刪除產品失敗",
                showClose: true,
            })

            return null
        }
        
        return response.data.product
    } catch (error) {
        ElMessage({
            type: "error",
            message: "未知錯誤",
            showClose: true,
        })
        console.log("error:", error)
    }
}
