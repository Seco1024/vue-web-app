import { defineStore } from "pinia"

export const useLoadingStore = defineStore({
    id: "loading",
    state: () => ({
        isLoading: false,
    }),
    getters: {
        // doubleCount: (state) => state.counter * 2,
    },
    actions: {
        startLoading() {
            this.isLoading = true
        },
        stopLoading() {
            this.isLoading = false
        },
    },
})
