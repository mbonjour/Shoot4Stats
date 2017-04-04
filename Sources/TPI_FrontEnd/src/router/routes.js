import Home from '@/views/Home/home'
import Dashboard from '@/views/Dashboard/dashboard'
import editShoot from '@/views/EditShoot/editShoot'
import createShoot from '@/views/CreateShoot/createShoot'

export default {
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {requiresAuth: false}
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {requiresAuth: true}
    },
    {
      path: '/editShoot',
      name: 'editShoot',
      component: editShoot,
      meta: {requiresAuth: false}
    },
    {
      path: '/createShoot/:type?',
      name: 'createShoot',
      component: createShoot,
      meta: {requiresAuth: true}
    }
  ]
}
