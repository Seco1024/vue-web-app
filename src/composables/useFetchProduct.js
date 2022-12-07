import { ref, onMounted } from "vue"
import { getIdTokenPromise } from "@/firebase"

const products = ref([])

export const useFetchProduct = () => {
    const REQUEST_IN_PROGRESS = "REQUEST_IN_PROGRESS"
    const REQUEST_ERROR = "REQUEST_ERROR"
    const REQUEST_SUCCESS = "REQUEST_SUCCESS"
    const requestState = ref(null)
    const responseMessage = ref(null)
    const loading = computed(() => requestState.value === REQUEST_IN_PROGRESS)
    const error = computed(() => requestState.value === REQUEST_ERROR)

    const fetchProduct = async () => {
        const idToken = await getIdTokenPromise()
        products.value = []
        requestState.value = REQUEST_IN_PROGRESS
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/product`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${idToken}`,
                },
            })
            const data = await res.json()
            products.value = await data.productList
            responseMessage.value = await data.message
            requestState.value = REQUEST_SUCCESS
        } catch (error) {
            requestState.value = REQUEST_ERROR
            console.log("[fetchProduct]error:", error)
        }
    }

    const addProduct = async ({ name, type, price }) => {
        const idToken = await getIdTokenPromise()
        requestState.value = REQUEST_IN_PROGRESS
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/product`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${idToken}`,
                },
                body: JSON.stringify({ 
                    name: name, 
                    type: type, 
                    price: Number(price)
                }),
            })
            const data = await res.json()
            responseMessage.value = await data.message
            requestState.value = REQUEST_SUCCESS
        } catch (error) {
            requestState.value = REQUEST_ERROR
            console.log("[addProduct]error:", error)
        }
    }

    const updateProduct = async ({ pid, name, type, price }) => {
        const idToken = await getIdTokenPromise()
        requestState.value = REQUEST_IN_PROGRESS
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/product/${pid}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${idToken}`,
                },
                body: JSON.stringify({
                    name: name, 
                    type: type,
                    price: Number(price)
                }),
            })
            const data = await res.json()
            responseMessage.value = await data.message
            requestState.value = REQUEST_SUCCESS
        } catch (error) {
            requestState.value = REQUEST_ERROR
            console.log("[updateProduct]error:", error)
        }
    }

    const deleteProduct = async (pid) => {
        const idToken = await getIdTokenPromise()
        requestState.value = REQUEST_IN_PROGRESS
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/product/${pid}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${idToken}`,
                },
            })
            const data = await res.json()
            responseMessage.value = data.message
            requestState.value = REQUEST_SUCCESS
        } catch (error) {
            requestState.value = REQUEST_ERROR
            console.log("[deleteProduct]error:", error)
        }
    }

    onMounted(() => {
        fetchProduct()
    })

    return { products, fetchProduct, addProduct, updateProduct, deleteProduct, loading, error, responseMessage }
}
