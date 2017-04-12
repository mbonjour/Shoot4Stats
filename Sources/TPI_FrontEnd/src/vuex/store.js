import Vue from 'vue'
import Vuex from 'vuex'
import currentEditingShootModule from './modules/currentEditingShoot'
import currentDetailsShootModule from './modules/currentDetailsShoot'
import shootsModule from './modules/shoots'
import userModule from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    currentEditingShoot: currentEditingShootModule,
    currentDetailsShoot: currentDetailsShootModule,
    shoots: shootsModule,
    user: userModule
  }
})
