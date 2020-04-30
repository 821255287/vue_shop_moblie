import Vue from 'vue'
import App from './App.vue'
import router from './router'

//配置elekment-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false

// import Mint from 'mint-ui';
// import 'mint-ui/lib/style.css'
// Vue.use(Mint)

// 导入moment
// import moment from 'moment'

//导入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || '[]')

//还要记得挂载到router 那里，👇
var store = new Vuex.Store({
    state: {
        //       {id:"商品的ID",count:"数量",price:"价格",selected:false}
        car: car, //将购物车中的商品数据，用一个数组存储起来
    },
    mutations: {
        addToCar(state, goodsinfo) { //点击加入购物车，把商品保存到store的car上
            // 1如果购物车中，之前有这个对应商品，name只需更新数量
            //2如果没有，则直接把商品数据 push到car中就可以

            var flag = false //假设购物车中没有找到
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })
            if (!flag) {
                state.car.push(goodsinfo)
            }
            localStorage.setItem('car', JSON.stringify(state.car))

        },
        updateGoodsinfo(state, goodsinfo) { //修改购物车中商品的数量值
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })

            localStorage.setItem('car', JSON.stringify(state.car))
        },
        removeForCar(state, id) {
            // 根据id从store中的购物车中删除对应的那条数据
            state.car.some((item, i) => {
                if (item.id == id) {
                    state.car.splice(i, 1)
                    return true
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateGoodsSelected(state, info) {
            state.car.some(item => {
                if (item.id == info.id) {
                    item.selected = info.selected
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },

    },
    getters: { //相当于计算属性
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count
            })
            return c;
        },
        getGoodsCount(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.count;

            })
            return o;
        },
        getGoodsSelected(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.selected

            })
            return o
        },
        getGoodsCountAndAmount(state) {
            var o = {
                count: 0, //勾选的数量
                amount: 0, //勾选的总数
            }
            state.car.forEach(item => {
                if (item.selected) {
                    o.count += item.count
                    o.amount += item.price * item.count
                }
            })
            return o;


        }
    }

})



import { Button, Swipe, SwipeItem, Header } from 'mint-ui'

Vue.component('mybtn', Button)
Vue.component("myheader", Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import { Switch } from 'mint-ui';
Vue.component(Switch.name, Switch);

import axios from 'axios'
axios.defaults.baseURL = "http://www.liulongbin.top:3005/api"
Vue.prototype.$http = axios

//导入mui
import '../src/lib/mui/css/mui.min.css'
import '../src/lib/mui/css/icons-extra.css'
//导入字体图标
import '../src/assets/font-awesome-4.7.0/css/font-awesome.min.css'


// 引入全局过滤器
Vue.filter("dateFormat", function(dataStr, pattern = "") {

    var dt = new Date(dataStr);
    var y = dt.getFullYear()
    var m = (dt.getMonth() + 1).toString().padStart(2, "0")
    var d = dt.getDate()
    if (pattern.toLocaleLowerCase == "yyyy-mm-dd") {
        return `${y}-${m}-${d}`;

    } else {
        var hh = dt.getHours().toString().padStart(2, "0")
        var mm = dt.getMinutes().toString().padStart(2, "0")
        var ss = dt.getSeconds().toString().padStart(2, "0")

        return `${y}-${m}-${d} ${hh}:${mm}:${ss} `
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')