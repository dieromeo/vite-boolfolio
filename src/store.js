import { reactive } from "vue";

const store = reactive({
    api: {
        baseUrl: 'http://127.0.0.1:8000/api/project',
        currentPage: 1,
        lastPage: 0
    },

    searchKey: null
})

export default store;