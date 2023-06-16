import routes from '@/router/routes.js'

let state = {
  routes: routes
}

const mutations = {
  initRoutes: (state) => {
    state.routes = routes
  }
}

const actions = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
