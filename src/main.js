import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

import routes from '@/routes'
import store from '@/store'

import EventBus from '@/plugins/event-bus'
import MsToMinute from '@/plugins/ms-to-minute'

import MsToMm from '@/filters/ms-to-mm'

import blur from '@/directives/blur'

Vue.use(VueRouter)

Vue.use(EventBus)
Vue.use(MsToMinute)

Vue.use(MsToMm)

Vue.use(blur)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
