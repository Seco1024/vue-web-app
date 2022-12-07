import axios from "axios"
import { getIdTokenPromise } from "../firebase"
import { ElMessage } from "element-plus"

export const getStaffList = async () => {
    try {
        const idToken = await getIdTokenPromise()
        if (!idToken) {
            return null
        }

        const url = `${import.meta.env.VITE_API_URL}/api/staff`
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${idToken}`,
            },
        })
        console.log("[getStaffList]response:", response)

        if (!response.data.success) {
            ElMessage({
                type: "error",
                message: "取得人員列表失敗",
                showClose: true,
            })

            return null
        }

        return response.data.staffList
    } catch (error) {
        // ElMessage({
        //     type: "error",
        //     message: "未知錯誤",
        //     showClose: true,
        // })
        console.log("error:", error)
    }
}

export const addStaff = async ({ name, phoneNumber, email }) => {
    const staff = {
        name,
        phoneNumber,
        email,
    }

    try {
        const idToken = await getIdTokenPromise()
        if (!idToken) {
            return null
        }

        const url = `${import.meta.env.VITE_API_URL}/api/staff`
        const response = await axios.post(url, staff, {
            headers: {
                Authorization: `Bearer ${idToken}`,
            },
        })
        console.log("[addStaff]response:", response)

        if (!response.data.success) {
            console.log("error:", response.data.message)

            ElMessage({
                type: "error",
                message: "新增人員失敗",
                showClose: true,
            })

            return null
        }

        ElMessage({
            type: "success",
            message: "新增人員成功",
            showClose: true,
        })

        return response.data.staff
    } catch (error) {
        ElMessage({
            type: "error",
            message: "未知錯誤",
            showClose: true,
        })
    }
}

export const updateStaff = async ({ sid, name, email, password }) => {
    const staff = {
        sid,
        name,
        email,
        password,
    }

    try {
        const idToken = await getIdTokenPromise()
        if (!idToken) {
            return null
        }

        const url = `${import.meta.env.VITE_API_URL}/api/staff`
        const response = await axios.put(url, staff, {
            headers: {
                Authorization: `Bearer ${idToken}`,
            },
        })
        console.log("[updateStaff]response:", response)

        if (!response.data.success) {
            ElMessage({
                type: "error",
                message: "更新人員失敗",
                showClose: true,
            })
            return null
        }

        ElMessage({
            type: "success",
            message: "更新人員成功",
            showClose: true,
        })

        return response.data.staff
    } catch (error) {
        ElMessage({
            type: "error",
            message: "未知錯誤",
            showClose: true,
        })
    }
}

export const deleteStaff = async (sid) => {
    try {
        const idToken = await getIdTokenPromise()
        if (!idToken) {
            return null
        }

        // const url = `${import.meta.env.VITE_API_URL}/api/staff/${sid}`
        const url = `${import.meta.env.VITE_API_URL}/api/staff?sid=${sid}`
        const response = await axios.delete(url, {
            headers: {
                Authorization: `Bearer ${idToken}`,
            },
        })
        console.log("[deleteStaff]response:", response)

        if (!response.data.success) {
            ElMessage({
                type: "error",
                message: "刪除人員失敗",
                showClose: true,
            })
            return null
        }

        ElMessage({
            type: "success",
            message: "刪除人員成功",
            showClose: true,
        })

        return response.data
    } catch (error) {
        ElMessage({
            type: "error",
            message: "未知錯誤",
            showClose: true,
        })
    }
}
