import { ref, reactive, computed } from "vue"
import { useFetchProduct } from "@/composables/useFetchProduct"
import { getIdTokenPromise } from "@/firebase"

const orderForm = reactive({
    productList: [],
    tagList: [],
    discount: 0,
    staffName: "",
    totalPrice: computed(() => {
        let total = 0
        orderForm.productList.forEach((item) => {
            total += item.price * item.amount
        })
        total -= orderForm.discount
        return total
    }),
    note: "",
    timestamp: null,
})

export const useCheckState = () => {
    const REQUEST_IN_PROGRESS = "REQUEST_IN_PROGRESS"
    const REQUEST_ERROR = "REQUEST_ERROR"
    const REQUEST_SUCCESS = "REQUEST_SUCCESS"
    const requestState = ref(null)
    const responseMessage = ref(null)
    const loading = computed(() => requestState.value === REQUEST_IN_PROGRESS)
    const error = computed(() => requestState.value === REQUEST_ERROR)

    const { products } = useFetchProduct()

    const addProductToOrderForm = (product) => {
        const index = orderForm.productList.findIndex((item) => item.pid === product.pid)
        if (index === -1) {
            const newProduct = {
                pid: product.pid,
                productName: product.name,
                price: product.price,
                amount: 1,
            }
            orderForm.productList.push(newProduct)
        } else {
            orderForm.productList[index].amount += 1
        }
    }

    const deleteProductFromOrderForm = (index) => {
        orderForm.productList.splice(index, 1)
    }

    const deleteAllProductFromOrderForm = () => {
        orderForm.productList = []
    }

    const addOrder = async () => {
        const idToken = await getIdTokenPromise()
        requestState.value = REQUEST_IN_PROGRESS
        orderForm.timestamp = new Date().getTime()
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/product/sell-order`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${idToken}`,
                },
                body: JSON.stringify({
                    productList: orderForm.productList,
                    tagList: orderForm.tagList,
                    staffName: orderForm.staffName,
                    discount: orderForm.discount,
                    totalPrice: orderForm.totalPrice,
                    note: orderForm.note,
                    timestamp: orderForm.timestamp,
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

    return {
        products,
        orderForm,
        addProductToOrderForm,
        deleteProductFromOrderForm,
        deleteAllProductFromOrderForm,
        addOrder,
        loading,
        error,
        responseMessage
    }
}
