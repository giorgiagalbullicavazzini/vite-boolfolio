import { createRouter, createWebHistory } from "vue-router";

// Import all pages
import AppHome from './pages/AppHome.vue';
import AboutPage from './pages/AboutPage.vue';
import ContactsPage from './pages/ContactsPage.vue';
import PortfolioPage from './pages/PortfolioPage.vue';
import ProjectPage from './pages/ProjectPage.vue';

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
            component: ContactsPage
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