import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';
import AppAbout from './pages/AppAbout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList
        },
        {
            path: '/project/:slug',
            name: 'single-project',
            component: SingleProject
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
    ]
});
export { router };