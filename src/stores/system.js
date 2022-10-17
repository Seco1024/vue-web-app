import { defineStore } from "pinia"

export const useSystemStore = defineStore({
    id: "system",
    state: () => ({
        isCollapse: false,
    }),
    getters: {
        // doubleCount: (state) => state.counter * 2,
    },
    actions: {
        expand() {
            this.isCollapse = true
        },
        collapse() {
            this.isCollapse = false
        }
    },
})
