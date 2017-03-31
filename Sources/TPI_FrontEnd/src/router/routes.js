import Hello from '@/components/Hello'

export default {
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      meta: {requiresAuth: true}
    }
  ]
}
