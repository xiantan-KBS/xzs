import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes';
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style



Vue.use(Router)


const router = new Router({
    routes,   //路由配置
})

export default router;




NProgress.configure({ showSpinner: false }) // NProgress Configuration
//路由前置守卫
router.beforeEach(async (to, from, next) => {
    // start progress bar
    NProgress.start()
    if (to.meta.title !== undefined) {
      document.title = to.meta.title
    } else {
      document.title = '学之思'
    }
  
    if (to.meta.bodyBackground !== undefined) {
      document.querySelector('body').setAttribute('style', 'background: ' + to.meta.bodyBackground)
    } else {
      document.querySelector('body').removeAttribute('style')
    }
  
    if (to.path) {
      // eslint-disable-next-line no-undef
      //浏览器按需加载
      _hmt.push(['_trackPageview', '/#' + to.fullPath])
    }
    next()
  })
  
  router.afterEach((to, from, next) => {
    // finish progress bar
    NProgress.done()
  })