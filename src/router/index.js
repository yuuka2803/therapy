import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from '../views/signup.vue'
import SignIn from '../views/signIn.vue'
import Form from '../views/form.vue'
import History from '../views/history.vue'
import Scores from '../views/score.vue'
import { auth } from '../firebase'
import HomeUser from '../views/HomeUser.vue'
const user = auth.currentUser

function requiredAuth(to, from, next) {
  if (user) {
    next()
  } else {
    next({ name: "signin"})
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/form',
      name: 'form',
      component: Form,
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/history',
      name: 'history',
      component: History,
    },
    {
      path: '/score',
      name: 'score',
      component: Scores,
    },
    {
      path: '/homeuser',
      name: 'homeuser',
      component: HomeUser,
    },
  ]
})

export default router
