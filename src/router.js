import { createRouter, createWebHistory } from "vue-router";

// Import all pages
import HomePage from './pages/HomePage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import AboutPage from './pages/AboutPage.vue';
import ContactsPage from './pages/ContactsPage.vue';
import PortfolioPage from './pages/PortfolioPage.vue';
import ProjectPage from './pages/ProjectPage.vue';
import TechnologyPage from './pages/TechnologyPage.vue';
import TypePage from './pages/TypePage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/:pathMatch(.*)*',
            name: '404',
            component: NotFoundPage
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
        },
        {
            path: '/portfolio/technologies/:slug',
            name: 'technology',
            component: TechnologyPage
        },
        {
            path: '/portfolio/types/:slug',
            name: 'type',
            component: TypePage
        }
    ]
});

export { router };