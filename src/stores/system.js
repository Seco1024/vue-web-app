import { defineStore } from "pinia"

export const useSystemStore = defineStore({
    id: "system",
    state: () => ({
        isCollapse: true,
    }),
    getters: {
        // doubleCount: (state) => state.counter * 2,
    },
    actions: {
        expand() {
            this.isCollapse = false
        },
        collapse() {
            this.isCollapse = true
        },
    },
})
