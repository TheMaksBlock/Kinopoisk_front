import {createRouter, createWebHistory, createWebHashHistory} from "vue-router";

const routerHistory = createWebHistory();

const routes = createRouter({
    history: routerHistory,
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import('@/pages/homePage.vue')
        },
        {
            path: "/trends",
            name: "trends",
            component: () => import('@/pages/homePage.vue')
        },
        {
            path: "/favorites",
            name: "favorites",
            component: () => import('@/pages/homePage.vue')
        },
        {
            path: "/settings",
            name: "settings",
            component: () => import('@/pages/homePage.vue')
        },
    ]
})

export default routes;