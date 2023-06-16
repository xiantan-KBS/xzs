import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.less' // global css
import './icons' // icon

import "default-passive-events"  //防止警告



import './mock';


Vue.use(Element, {
  size: 'medium' // set element-ui default size
})

//生产提示
Vue.config.productionTip = false





Vue.prototype.$$router = router

new Vue({
  router: router,
  store: store,
  render: h => h(App)
}).$mount('#app')
