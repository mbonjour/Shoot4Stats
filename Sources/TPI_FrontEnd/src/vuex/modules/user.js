import axios from 'axios'

export default {
  state: {
    user: {}
  },
  mutations: {
    UPDATE_USER (state) {
      axios.get('/api/login/me').then((response) => {
        state.user = response.data
      })
    }
  },
  actions: {
    updateUser ({ commit }) {
      commit('UPDATE_USER')
    }
  },
  getters: {
    user: state => state.user
  }
}
