import { reactive } from "vue";

export const store = reactive({
    api: 'http://127.0.0.1:8000/api',
    apiUrls: {
        projects: '/projects',
    },
    projects: [],
})