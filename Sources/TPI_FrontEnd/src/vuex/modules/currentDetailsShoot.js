import { EventBus } from '../../helpers/event-bus.js'
import axios from 'axios'

export default {
  state: {
    currentDetailsShoot: []
  },
  mutations: {
    SET_CURRENT_DETAILS_SHOOT (state, shootID) {
      axios.get('/api/shoots/' + shootID).then((response) => {
        state.currentDetailsShoot = response.data
      })
      .catch((err) => {
        EventBus.$emit('toastError', 'si l\'erreur réapparaît veuillez contacter le webmaster ' + err)
        console.log(err)
      })
    }
  },
  actions: {
    setDetailsShoot ({ commit }, shootID) {
      commit('SET_CURRENT_DETAILS_SHOOT', shootID)
    }
  },
  getters: {
    currentDetailsShoot: state => state.currentDetailsShoot
  }
}
