import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login";
import MainPage from "@/views/MainPage";
import MainBox from "@/components/mianPage/MainBox";
import UserMassageBox from "@/components/mianPage/UserMassageBox";

Vue.use(VueRouter)
Vue.filter(
    "dataFormat",function (value){
        let date=new Date(value);
        let year=date.getFullYear()+""
        let month=date.getMonth()+1+""
        let day=date.getDate()+""
        let hour=date.getHours()+""
        let minute=date.getMinutes()+""
        let second=date.getSeconds()+""
        return `${year}-${month.padStart(2,"0")}-${day.padStart(2,"0")}  ${hour.padStart(2,"0")}:${minute.padStart(2,"0")}:${second.padStart(2,"0")}`
    }
);
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