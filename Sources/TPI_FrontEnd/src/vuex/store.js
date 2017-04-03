import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations: {
    SET_CURRENT_SHOOT (state, shoot) {
      axios.get('/api/shoots/' + shoot).then((response) => {
        state.currentShoot = response.data
      })
      // state.currentShoot = shoot
    }
  },

  actions: {
    setShoot ({ commit }, shoot) {
      commit('SET_CURRENT_SHOOT', shoot)
    }
  },

  getters: {
    currentShoot: state => state.currentShoot
  },

  state: {
    currentShoot: {}
  }
})
