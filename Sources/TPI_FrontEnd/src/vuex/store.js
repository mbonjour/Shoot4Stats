import Vue from 'vue'
import Vuex from 'vuex'
import currentEditingShoot from './modules/currentEditingShoot'
import currentDetailsShoot from './modules/currentDetailsShoot'
import shoots from './modules/shoots'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    currentEditingShoot,
    currentDetailsShoot,
    shoots,
    user
  }
})
