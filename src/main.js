import Vue from 'vue'

import ElementUI from 'element-ui'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import '@/icons' // icon
import App from './App'
import router from './router'
import store from './store'

import VueResource from 'vue-resource'


import '@/permission' // permission control

Vue.use(ElementUI)

Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})

Vue.config.devtools = true;