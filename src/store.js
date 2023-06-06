import { reactive } from "vue";

export const store = reactive({
    api: import.meta.env.VITE_BACKEND_API_URL,
    apiUrls: {
        projects: '/projects',
    },
    projects: [],
    project: null
})