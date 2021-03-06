// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vuex/store'
import { EventBus } from './helpers/event-bus.js'

// SN: Object.defineProperty(...)
Object.defineProperty(Vue.prototype, '$http', { value: axios })
Object.defineProperty(Vue.prototype, '$events', { value: EventBus })
Vue.config.productionTip = false

Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
