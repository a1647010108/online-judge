import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            isShow: false,
            title: "首页"
        },
        children: []
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        meta: {
            isShow: false,
            title: "框架"
        },
        children: [
            {
                path: '/teacher',
                name: 'teacher',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                meta: {
                    isShow: true,
                    title: "老师列表"
                },
                component: () => import(/* webpackChunkName: "login" */ '../views/TeacherView')
            },
            {
                path: '/personal',
                name: 'personal',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                meta: {
                    isShow: true,
                    title: "个人中心"
                },
                component: () => import(/* webpackChunkName: "login" */ '../views/PersonalView')
            },
        ],
        component: () => import(/* webpackChunkName: "about" */ '../views/ContainerView')
    },
    {
        path: '/login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        meta: {
            isShow: false,
            title: "登录"
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/LoginView')
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
