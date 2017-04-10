import Home from '@/views/Home/home'
import Dashboard from '@/views/Dashboard/dashboard'
import EditShoot from '@/views/EditShoot/editShoot'
import CreateShoot from '@/views/CreateShoot/createShoot'
import Administration from '@/views/Administration/administration'

export default {
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {requiresAuth: false}
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {requiresAuth: true}
    },
    {
      path: '/editShoot/:shootId?',
      name: 'editShoot',
      component: EditShoot,
      meta: {requiresAuth: true}
    },
    {
      path: '/createShoot/:type?',
      name: 'createShoot',
      component: CreateShoot,
      meta: {requiresAuth: true}
    },
    {
      path: '/administration',
      name: 'administration',
      component: Administration,
      meta: {requiresAuth: true, requiresAdmin: true}
    }
  ]
}
