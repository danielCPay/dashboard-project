import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("../layouts/MainLayout.vue"),
        children: [
            {
                path: "",
                name: "Dashboard",
                component: () => import("../pages/Home.vue"),
            }           
        ],
    }

];

const router = createRouter({
    history: createWebHistory('/dashboard-project/'),
    routes,
});

export default router;