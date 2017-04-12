import axios from 'axios'
import { EventBus } from '../../helpers/event-bus.js'

export default {
  state: {
    shoots: [],
    addedShoot: {}
  },
  mutations: {
    LOAD_SHOOTS (state) {
      axios.get('/api/shoots/')
      .then((response) => {
        state.shoots = response.data
      })
    },
    ADD_SHOOT (state, shootObj) {
      axios.post('/api/shoots', shootObj)
        .then((response) => {
          state.addedShoot = response.data
        })
        .catch((err) => {
          EventBus.$emit('toastError', err + ' Veuillez contacter l\'admin si cela se reproduit')
          console.log(err)
        })
    }
  },
  actions: {
    loadShoots ({commit}) {
      commit('LOAD_SHOOTS')
    },
    addShoot ({commit}, shootObj) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('ADD_SHOOT', shootObj)
          resolve()
        }, 500)
      })
    }
  },
  getters: {
    shoots: state => state.shoots
  }
}
