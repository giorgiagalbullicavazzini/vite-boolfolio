import { createRouter, createWebHistory } from "vue-router";

// Import all pages

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: PortfolioPage
        },
        {
            path: '/portfolio/:slug',
            name: 'project',
            component: ProjectPage
        }
    ]
});

export { router };