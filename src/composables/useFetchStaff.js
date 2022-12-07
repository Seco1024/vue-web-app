import { ref } from 'vue'
import { getIdTokenPromise } from '@/firebase'

const staffs = ref([])

export const useFetchStaff = () => {
    const REQUEST_IN_PROGRESS = 'REQUEST_IN_PROGRESS'
    const REQUEST_ERROR = 'REQUEST_ERROR'
    const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
    const requestState = ref(null)
    const responseMessage = ref(null)
    const loading = computed(() => requestState.value === REQUEST_IN_PROGRESS)
    const error = computed(() => requestState.value === REQUEST_ERROR)

    const fetchStaff = async () => {
        const idToken = await getIdTokenPromise()
        staffs.value = []
        requestState.value = REQUEST_IN_PROGRESS
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/staff`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${idToken}`,
                },
            })
            const data = await res.json()
            staffs.value = await data.staffList
            responseMessage.value = data.message
            requestState.value = REQUEST_SUCCESS
        } catch (error) {
            requestState.value = REQUEST_ERROR
            console.log('[fetchStaff]error:', error)
        }
    }

    onMounted(() => {
        fetchStaff()
    })

    return { staffs, fetchStaff, loading, error }
}
