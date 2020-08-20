import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 全局函数及变量
import Global from './Global'

import Axios from 'axios'
Vue.use(ElementUI)
Vue.use(Global)
Vue.prototype.$axios = Axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
