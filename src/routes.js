import { createRouter,createWebHistory } from "vue-router";
import Home from '../src/components/Home.vue'
import SignUp from '../src/components/SignUp.vue'
import Login from '../src/components/Login.vue'

const routes=[
    {
        name:'HomePage',
        component:Home,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'LoginPage',
        component:Login,
        path:'/login'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;