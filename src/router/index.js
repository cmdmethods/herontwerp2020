import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Planner from '../views/Planner.vue'
import CmdMethods from '../views/CmdMethods.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/planner',
        name: 'Planner',
        component: Planner
    },
    {
        path: '/cmd-methods',
        name: 'What is CMD Methods?',
        component: CmdMethods
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
