// 从node_modules中引入Vue
import Vue from 'vue'
import App from './App.vue'

// ElementUI安装
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

import router from './router'
import store from './store/'

import http from '@/utils/api'
Vue.prototype.$http = http

import img from '@/utils/img'
Vue.prototype.$img = img


// 根容器创建,Vue环境
new Vue({
  router,
  store,
  render: h => h(App),
  el: '#app'
})

// app.$mount('#app')
