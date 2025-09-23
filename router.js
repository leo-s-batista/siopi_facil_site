import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '/src/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:section',
    name: 'home_with_section',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router