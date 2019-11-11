import Home from '../pages/Home.vue';
import Order from '../pages/Order.vue';
import Recover from '../pages/Recover.vue';
import Mine from '../pages/Mine.vue';
import Detail from '../pages/Detail.vue';
import Main from '../pages/Main.vue';
import Movie from '../pages/Movie.vue';
import Login from '../pages/Login.vue';
import More from '../pages/More.vue';
import Food from '../pages/Food.vue';
import Submit from '../pages/Submit.vue';
import Finish from '../pages/Finish.vue';
import Vue from 'vue'
import VueRouter from 'vue-router';
// import axios from 'axios';
Vue.use(VueRouter)
//main.vue为 大的路由（详情页与首页的跳转，因为详情页没有tabbar） 然后tabbar在再放路由(home，recover，mine，order的跳转))
const routes = [{
    path: '/main',
    name: 'main',
    component: Main, //外层的路由 整体变（有无tabbar）
    children: [ //里面的路由（tabbar不变）
        {
            //当页面为http://localhost:8080/recover 在<router-view>加载Recover组件
            path: 'home',
            name: 'home',
            component: Home,

        },
        {
            //当页面为http://localhost:8080/recover 在<router-view>加载Recover组件
            path: 'recover',
            name: 'recover',
            component: Recover
        },
        {
            path: 'order',
            name: 'order',
            component: Order
        },
        {
            path: 'mine',
            name: 'mine',
            component: Mine,
        },

    ]
},
// 详情页（无tabbar）
{
    path: '/detail',
    name: 'detail',
    component: Detail,
  
},
// movie页（无tabbar）
{
    path: '/movie',
    name: 'movie',
    component: Movie
},
// food页（无tabbar）
{
    path: '/food',
    name: 'food',
    component: Food
},
//登录页
{
    path: '/login',
    name: 'login',
    component: Login,

},
//点击查看更多
{
    path: '/more',
    name: 'more',
    component: More
},
//提交订单页
{
    path: '/submit',
    name: 'submit',
    component: Submit
},
//完成订单
{
    path: '/finish',
    name: 'finish',
    component: Finish
},
//重定向
{ path: '/', redirect: '/main/home' },

]
// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    //histroy模式 把哈希去掉#
    mode: 'history',
    routes, // (缩写) 相当于 routes: routes
})

//4.导出路由
export default router


