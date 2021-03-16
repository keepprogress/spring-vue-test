import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/pages/Hello'
import Bootstrap from '@/components/Bootstrap'
import store from '@/store/index'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history', // uris without hashes #, see https://router.vuejs.org/guide/essentials/history-mode.html#html5-history-mode
  routes: [
    { path: '/', component: Hello },
    { path: '/login', component: () => import(/**/ '../components/pages/Login.vue') },
    {
      path: '/admin',
      component: () => import('../components/Dashboard.vue'),
      children: [
        {
          path: 'products',
          name: 'Products',
          component: () => import('../components/pages/Products.vue')
        },
        { path: 'bootstrap', component: Bootstrap },
        { path: 'about', component: () => import(/**/ '../views/About.vue') },
        {
          path: 'protected',
          component: () => import('../components/pages/Protected.vue'),
          meta: {
            requiresAuth: true
          }
        }
      ]
    },
    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    console.log('Needs Authorization Here!')
    if (!store.getters.isLoggedIn) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})
export default router
