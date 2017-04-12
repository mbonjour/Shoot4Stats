import axios from 'axios'

export default {
  state: {
    shoots: []
  },
  mutations: {
    LOAD_SHOOTS (state) {
      axios.get('/api/shoots/')
      .then((response) => {
        state.shoots = response.data
      })
    }
  },
  actions: {
    loadShoots ({commit}) {
      commit('LOAD_SHOOTS')
    }
  },
  getters: {
    shoots: state => state.shoots
  }
}
