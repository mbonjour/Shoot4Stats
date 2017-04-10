import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import { EventBus } from '../helpers/event-bus.js'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations: {
    SET_CURRENT_DETAILS_SHOOT (state, shootID) {
      axios.get('/api/shoots/' + shootID).then((response) => {
        state.currentDetailsShoot = response.data
      })
      .catch((err) => {
        // Toast de l'err
        console.log(err)
      })
    },
    SET_CURRENT_EDITING_SHOOT (state, shootID) {
      axios.get('/api/shoots/' + shootID).then((response) => {
        state.currentEditingShoot = response.data
      })
      .catch((err) => {
        // Toast de l'err
        console.log(err)
      })
    },
    ADD_END_CURRENT_EDITING_SHOOT (state, end) {
      let temp = state.currentEditingShoot
      state.currentEditingShoot.ends.push(end)
      state.currentEditingShoot.nb_ends += 1
      if (state.currentEditingShoot.nb_ends === state.currentEditingShoot.nb_total_ends) {
        state.currentEditingShoot.finished = true
      }
      axios.post('/api/ends', end)
      .then((response) => {
        EventBus.$emit('toast', 'end added')
        console.log(response)
      })
      .catch((err) => {
        // Toast de l'err ?
        EventBus.$emit('toast', err)
        state.currentEditingShoot = temp
        console.log(err)
      })
    }
  },

  actions: {
    setDetailsShoot ({ commit }, shootID) {
      commit('SET_CURRENT_DETAILS_SHOOT', shootID)
    },
    setEditingShoot ({ commit }, shootID) {
      commit('SET_CURRENT_EDITING_SHOOT', shootID)
    },
    addEnd ({ commit }, end) {
      commit('ADD_END_CURRENT_EDITING_SHOOT', end)
    }
  },

  getters: {
    currentDetailsShoot: state => state.currentDetailsShoot,
    currentEditingShoot: state => state.currentEditingShoot
  },

  state: {
    currentDetailsShoot: {},
    currentEditingShoot: {}
  }
})
