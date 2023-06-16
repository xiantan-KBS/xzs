import Vue from 'vue'
import Router from 'vue-router';
import  routes from './routes';
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css';
import store from '@/store' // progress bar style



Vue.use(Router)



const router = new Router({
  routes: routes
})

export default router;


NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()
  if (to.meta.title !== undefined) {
    document.title = to.meta.title
  } else {
    document.title = '\u200E'
  }
  store.commit('router/initRoutes')

  if (to.path) {
    // eslint-disable-next-line no-undef
    _hmt.push(['_trackPageview', '/#' + to.fullPath])
  }

  next()
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})