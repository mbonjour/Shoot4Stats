import axios from 'axios'

export default {
  state: {
    user: {}
  },
  mutations: {
    UPDATE_USER (state, user) {
      state.user = user
    }
  },
  actions: {
    updateUser ({commit}) {
      return new Promise((resolve, reject) => {
        axios.get('/api/login/me')
        .then((response) => {
          commit('UPDATE_USER', response.data)
          resolve(response.data)
        })
        .catch((err) => {
          reject(err)
        })
      })
    }
  },
  getters: {
    user: state => state.user
  }
}
