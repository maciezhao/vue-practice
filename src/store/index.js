import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  leftNavState: '/content'
}
export default new Vuex.Store({
  state
})
