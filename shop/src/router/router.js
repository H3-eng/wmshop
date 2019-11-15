import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/**首页路由 */
import Msite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
export default new Router({
    routes:[
        {path:"/",redirect:'/msite'},
        {path:"/msite",name:"Msite",component:Msite},
        {path:"/order",name:"Order",component:Order},
        {path:"/profile",name:"Profile",component:Profile},
        {path:"/search",name:"Search",component:Search},
    ]
})