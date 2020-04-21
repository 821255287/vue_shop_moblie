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



import { Button, Swipe, SwipeItem, Header } from 'mint-ui'

Vue.component('mybtn', Button)
Vue.component("myheader", Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

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
    render: h => h(App)
}).$mount('#app')