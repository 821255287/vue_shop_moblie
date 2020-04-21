import Vue from 'vue'
import VueRouter from 'vue-router'
// import demo from '../components/demo.vue'
import users from '../components/users.vue'
Vue.use(VueRouter)

import home from '../components/tabber/home.vue'
import search from '../components/tabber/search.vue'
import member from '../components/tabber/member.vue'
import shopcart from '../components/tabber/shopcart.vue'
import newslist from '../components/news/newslist.vue'


import newsinfo from '../components/news/newsinfo.vue'
// const routes = [{
//         path: '/',
//         name: 'demo',
//         component: demo
//     },
//     {
//         path: "/users",
//         component: users
//     }

// ]

// const router = new VueRouter({
//     routes
// })


var router = new VueRouter({
    routes: [
        { path: "/", redirect: '/home' },
        {
            path: '/user',
            component: users,
            children: [

                { path: "/users", component: users },
                { path: "/search", component: search },
                { path: "/member", component: member },
                { path: "/shopcart", component: shopcart },
                { path: '/home', component: home },
                { path: '/home/newlist', component: newslist },
                { path: '/home/newsinfo/:id', component: newsinfo }
            ]
        },

    ],
    linkActiveClass: "mui-active"
})

export default router