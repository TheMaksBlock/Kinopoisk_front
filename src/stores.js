import { defineStore } from "pinia";
import { ref } from "vue";

export const useSearchStore = defineStore("search", () => {
    const searchString = ref('affsa');

    return {
        searchString
    };
});
