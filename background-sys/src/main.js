import Vue from 'vue'
import App from './App.vue'
import router  from './router'
import store from './store'
import 'normalize.css/normalize.css'
import Element from 'element-ui'
import './styles/element-variables.less'

import '@/styles/index.less' // global css
import './icons' // icon


Vue.use(Element, {
  size: 'medium' // set element-ui default size
})

Vue.config.productionTip = false



Vue.prototype.$$router = router

new Vue({
  router: router,
  store: store,
  render: h => h(App)
}).$mount('#app')
