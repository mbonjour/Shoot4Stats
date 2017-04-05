import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations: {
    SET_CURRENT_SHOOT (state, shootID) {
      axios.get('/api/shoots/' + shootID).then((response) => {
        state.currentShoot = response.data
      })
    },
    ADD_END_CURRENT_SHOOT (state, end) {
      let temp = state.currentShoot
      state.currentShoot.ends.push(end)
      axios.post('/api/ends', end)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        // Toast de l'err ?
        state.currentShoot = temp
        console.log(err)
      })
    }
  },

  actions: {
    setShoot ({ commit }, shootID) {
      commit('SET_CURRENT_SHOOT', shootID)
    },
    addEnd ({ commit }, end) {
      commit('ADD_END_CURRENT_SHOOT', end)
    }
  },

  getters: {
    currentShoot: state => state.currentShoot
  },

  state: {
    currentShoot: {}
  }
})
