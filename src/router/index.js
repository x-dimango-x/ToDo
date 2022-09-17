import {createRouter, createWebHistory} from 'vue-router'
import CreateTodo from "../views/CreateTodo.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: CreateTodo
        },
        {
            path: '/list-todo',
            name: 'list',
            component: () => import('../views/CardTodo.vue')
        }
    ]
})

export default router
