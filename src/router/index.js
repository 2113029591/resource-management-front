import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login";
import ManagementPage from "@/views/ManagementPage";

Vue.use(VueRouter)

const routes=[
    {
        path:"/",
        component:Login
    },
    {
        path:"ManagementPage",
        component: ManagementPage
    }
]

const router=new VueRouter({
    routes,
})
export default router