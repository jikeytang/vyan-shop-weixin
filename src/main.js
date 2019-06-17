import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/components/'
import 'normalize.css'
import '@/styles/common.scss'
import 'static/fontawesome/css/font-awesome.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
