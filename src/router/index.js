import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login";
import MainPage from "@/views/MainPage";
import MainBox from "@/components/mianPage/MainBox";
import UserMassageBox from "@/components/mianPage/UserMassageBox";

Vue.use(VueRouter)

const routes=[
    {path:"/",redirect:"/Login"},
    {path:"/Login", component:Login},
    {
        path:"/MainPage",component:MainPage,
        children:[
            {path:"MainBox",component:MainBox},
            {path:"UserMassageBox",component: UserMassageBox}
        ]
    },
]

const router=new VueRouter({
    routes,
})
export default router