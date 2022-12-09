import { ref } from "vue"
import { getIdTokenPromise } from "@/firebase"

export const useFetchType = () => {
    const REQUEST_IN_PROGRESS = "REQUEST_IN_PROGRESS"
    const REQUEST_ERROR = "REQUEST_ERROR"
    const REQUEST_SUCCESS = "REQUEST_SUCCESS"
    const requestState = ref(null)
    const responseMessage = ref(null)
    const loading = computed(() => requestState.value === REQUEST_IN_PROGRESS)
    const error = computed(() => requestState.value === REQUEST_ERROR)

    const types = ref([])

    const fetchType = async () => {
        const idToken = await getIdTokenPromise()
        requestState.value = REQUEST_IN_PROGRESS
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/type`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${idToken}`,
                },
            })
            const data = await res.json()
            console.log("data:", data)
            types.value = await data.data
            responseMessage.value = data.message
            requestState.value = REQUEST_SUCCESS
        } catch (error) {
            requestState.value = REQUEST_ERROR
            console.log("[fetchType]error:", error)
        }
    }

    onMounted(() => {
        fetchType()
    })

    return { types, loading, error, responseMessage }
}
