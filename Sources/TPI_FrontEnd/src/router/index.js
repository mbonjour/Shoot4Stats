import axios from 'axios'
import Vue from 'vue'
import Router from 'vue-router'
// import store
import routes from './routes'

Vue.use(Router)

let router = new Router(routes)

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    loggedIn((user) => {
      if (!user.logged) {
        window.location.replace('/api/login/facebook?url=' + to.fullPath)
      } else {
        if (to.matched.some(record => record.meta.requiresAdmin)) {
          if (!user.user.is_admin) {
            window.location.replace('/#/')
          } else {
            next()
          }
        } else {
          next()
        }
      }
    })
  } else {
    next()
  }
})

let loggedIn = (next) => {
  axios.get('/api/login/me').then((response) => {
    next(response.data)
  })
}

export default router
