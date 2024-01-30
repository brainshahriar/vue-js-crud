import { createRouter,createWebHistory } from "vue-router";
import Home from '../src/components/Home.vue'
import SignUp from '../src/components/SignUp.vue'
import Login from '../src/components/Login.vue'
import Add from '../src/components/Add.vue'

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
    {
        name:'AddPage',
        component:Add,
        path:'/add'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;