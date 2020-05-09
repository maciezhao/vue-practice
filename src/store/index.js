import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)
const state = {
  topNavState: '/content'
}
export default new Vuex.Store({
  state,
  getters,
  modules: {
    user
  }
})
