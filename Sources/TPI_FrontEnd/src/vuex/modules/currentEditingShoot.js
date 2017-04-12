import { EventBus } from '../../helpers/event-bus.js'
import axios from 'axios'

export default {
  state: {
    currentEditingShoot: {}
  },
  mutations: {
    SET_CURRENT_EDITING_SHOOT (state, shootID) {
      // si shoot déja load pas besoin de req API
      // eslint-disable-next-line
      if (state.currentEditingShoot.id != shootID) {
        state.currentEditingShoot = {}
        axios.get('/api/shoots/' + shootID).then((response) => {
          state.currentEditingShoot = response.data
        })
        .catch((err) => {
          EventBus.$emit('toastError', 'si l\'erreur réapparaît veuillez contacter le webmaster ' + err)
          console.log(err)
        })
      }
    },
    ADD_END_CURRENT_EDITING_SHOOT (state, end) {
      // TODO : TROUVER SOLUCE PLUS PROPRE
      let clone = JSON.parse(JSON.stringify(state.currentEditingShoot))
      state.currentEditingShoot.ends.push(end)
      state.currentEditingShoot.nb_ends += 1
      if (state.currentEditingShoot.nb_ends === state.currentEditingShoot.nb_total_ends) {
        state.currentEditingShoot.finished = true
      }
      axios.post('/api/ends', end)
      .then((response) => {
        state.currentEditingShoot = response.data
        EventBus.$emit('toastSuccess', 'You\'re at : ' + state.currentEditingShoot.nb_ends + '/' + state.currentEditingShoot.nb_total_ends + ' ends')
      })
      .catch((err) => {
        EventBus.$emit('toastError', 'si l\'erreur réapparaît veuillez contacter le webmaster ' + err)
        state.currentEditingShoot = clone
      })
    },
    FINISH_EDITING_SHOOT (state) {
      axios.get('/api/shoots/' + state.currentEditingShoot.id + '/finish')
      .then((response) => {
        state.currentEditingShoot.finished = true
      })
    },
    CREATE_SHOOT (state, shootObj) {
      state.currentEditingShoot = shootObj
    }
  },
  actions: {
    setEditingShoot ({ commit }, shootID) {
      commit('SET_CURRENT_EDITING_SHOOT', shootID)
    },
    finishCurrentEditingShoot ({commit}) {
      commit('FINISH_EDITING_SHOOT')
    },
    addEnd ({ commit }, end) {
      commit('ADD_END_CURRENT_EDITING_SHOOT', end)
    },
    createShoot ({commit}, shootObj) {
      return new Promise((resolve, reject) => {
        axios.post('/api/shoots', shootObj)
        .then((response) => {
          commit('CREATE_SHOOT', response.data)
          resolve(response.data.id)
        })
        .catch((err) => {
          EventBus.$emit('toastError', 'Create Error : ' + err)
          reject(err)
        })
      })
    }
  },
  getters: {
    currentEditingShoot: state => state.currentEditingShoot
  }
}
