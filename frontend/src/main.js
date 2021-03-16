import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/all.scss'
import store from './store/index'
import CurrencyFilter from './filters/currency.js'
import DateFilter from './filters/date.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.filter('currency', CurrencyFilter)
Vue.filter('datetransform_from_timestamp', DateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
