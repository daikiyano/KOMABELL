import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Show from '../views/Show.vue'
import ProfessorEdit from '../views/professors/Edit.vue'
import Signup from '@/components/Signup.vue'
import Signin from '@/components/Signin.vue'
import firebase from 'firebase'


Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: 'signin'
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // {
  //   path: '/professor/:id',
  //   name: 'show',
  //   component: Show
  // },
  {
    path: '/professor/:id',
    name: 'ProfessorEdit',
    component: ProfessorEdit
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  let currentUser = firebase.auth().currentUser
  if (requiresAuth) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    if (!currentUser) {
      next({
        path: '/signin',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // next() を常に呼び出すようにしてください!
  }
})

export default router
