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
        EventBus.$emit('toast', 'si l\'erreur réapparaît veuillez contacter le webmaster ' + err)
        console.log(err)
      })
    },
    SET_CURRENT_EDITING_SHOOT (state, shootID) {
      state.currentEditingShoot = null
      axios.get('/api/shoots/' + shootID).then((response) => {
        state.currentEditingShoot = response.data
      })
      .catch((err) => {
        EventBus.$emit('toast', 'si l\'erreur réapparaît veuillez contacter le webmaster ' + err)
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
        EventBus.$emit('toast', err)
        state.currentEditingShoot = temp
        console.log(err)
      })
    },
    FINISH_EDITING_SHOOT (state) {
      axios.get('/api/shoots/' + state.currentEditingShoot.id + '/finish')
      .then((response) => {
        state.currentEditingShoot.finished = true
      })
    },
    SET_SHOOTS (state) {
      axios.get('/api/shoots/')
      .then((response) => {
        state.shoots = response.data
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
    },
    finishCurrentEditingShoot ({commit}) {
      commit('FINISH_EDITING_SHOOT')
    },
    setShoots ({commit}) {
      commit('SET_SHOOTS')
    }
  },

  getters: {
    currentDetailsShoot: state => state.currentDetailsShoot,
    currentEditingShoot: state => state.currentEditingShoot,
    shoots: state => state.shoots
  },

  state: {
    currentDetailsShoot: {},
    currentEditingShoot: {},
    shoots: []
  }
})
