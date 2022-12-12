import { ref, computed } from "vue"
import { getIdTokenPromise } from "@/firebase"

const orders = ref([])

export const useFetchOrder = () => {
    const REQUEST_IN_PROGRESS = "REQUEST_IN_PROGRESS"
    const REQUEST_ERROR = "REQUEST_ERROR"
    const REQUEST_SUCCESS = "REQUEST_SUCCESS"
    const requestState = ref(null)
    const responseMessage = ref(null)
    const loading = computed(() => requestState.value === REQUEST_IN_PROGRESS)
    const error = computed(() => requestState.value === REQUEST_ERROR)

    const fetchOrder = async (startAt, limit) => {
        const idToken = await getIdTokenPromise()
        orders.value = []
        requestState.value = REQUEST_IN_PROGRESS
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/product/sell-order?startAt=${startAt}&limit=${limit}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${idToken}`,
                },
            })
            const data = await res.json()
            orders.value = await data.orderList
            responseMessage.value = data.message
            requestState.value = REQUEST_SUCCESS
        } catch (error) {
            requestState.value = REQUEST_ERROR
            console.log("[fetchOrder]error:", error)
        }
    }

    // const fetchOrderByStaff = async (startAt, limit, sid) => {
    //   orders.value = [];
    //   requestState.value = REQUEST_IN_PROGRESS;
    //   try {
    //     const res = await fetch(`${import.meta.env.VITE_API_URL}/product/sell-order?startAt=${startAt}&limit=${limit}&sid=${sid}`);
    //     orders.value = await res.json();
    //     requestState.value = REQUEST_SUCCESS;
    //   } catch (error) {
    //     requestState.value = REQUEST_ERROR;
    //   }
    // };

    const addOrder = async ({ productList, tagList, staffName, discount, totalPrice, note }) => {
        const idToken = await getIdTokenPromise()
        requestState.value = REQUEST_IN_PROGRESS
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/product/sell-order`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${idToken}`,
                },
                body: JSON.stringify({
                    productList: productList,
                    tagList: tagList,
                    staffName: staffName,
                    discount: discount,
                    totalPrice: totalPrice,
                    note: note,
                    datetime: new Date().toISOString(),
                }),
            })
            const data = await res.json()
            responseMessage.value = data.message
            requestState.value = REQUEST_SUCCESS
        } catch (error) {
            requestState.value = REQUEST_ERROR
            console.log("[addOrder]error:", error)
        }
    }

    const deleteOrder = async (id) => {
        const idToken = await getIdTokenPromise()
        requestState.value = REQUEST_IN_PROGRESS
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/product/sell-order/?orderId=${id}`, {
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
            console.log("[deleteOrder]error:", error)
        }
    }

    return { orders, loading, error, fetchOrder, addOrder, deleteOrder }
}
