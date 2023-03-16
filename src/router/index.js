// importo le funzioni di Vue Router
import { createRouter, createWebHistory } from 'vue-router';

// importo le pagine
import HomePage from '../pages/HomePage.vue';
import ContactPage from '../pages/ContactPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import ProjectDetailPage from '../pages/ProjectDetailPage.vue';

// creao il router e definisco le rotte
const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/contact', name: 'contact', component: ContactPage },
        // rotta show 
        { path: '/projects/:slug', name: 'project-detail', component: ProjectDetailPage },
        // rotta 404
        { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundPage },

    ]
})

export { router };