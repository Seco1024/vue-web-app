import { ref } from "vue";

const isCollapse = ref(false);

export const useCollapse = () => {
    
    const toggle = () => {
        isCollapse.value = !isCollapse.value;
    };
    
    return {
        isCollapse,
        toggle,
    };
}