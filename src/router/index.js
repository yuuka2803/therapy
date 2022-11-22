import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/signIn.vue'
import SignUp from '../views/signup.vue'
import SignIn from '../views/signin.vue'
import Data from '../views/data.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/data',
      name: 'data',
      component: Data
    },
    {
      path: '/signin',
      name: 'home',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: SignUp
    }
  ]
})

export default router
