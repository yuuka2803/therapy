import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from '../views/signup.vue'
import SignIn from '../views/signIn.vue'
import Form from '../views/form.vue'
import History from '../views/history.vue'
import Scores from '../views/score.vue'
import { auth } from '../firebase'
import HomeUser from '../views/HomeUser.vue'
import pose1 from '../views/pose1.vue'
import pose2 from '../views/pose2.vue'
import pose3 from '../views/pose3.vue'
import pose4 from '../views/pose4.vue'

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
    {
      path: '/pose1',
      name: 'pose1',
      component: pose1,
    },
    {
      path: '/pose2',
      name: 'pose2',
      component: pose2,
    },
    {
      path: '/pose3',
      name: 'pose3',
      component: pose3,
    },
    {
      path: '/pose4',
      name: 'pose4',
      component: pose4,
    },
  ]
})

export default router
