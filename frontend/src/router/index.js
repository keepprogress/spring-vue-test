import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/Hello'
import Bootstrap from '@/components/Bootstrap'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/bootstrap',
    name: 'Bootstrap',
    component: Bootstrap
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../components/User.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
