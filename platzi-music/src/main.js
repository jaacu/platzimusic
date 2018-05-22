import Vue from 'vue'
import App from '@/App.vue'

import EventBus from '@/plugins/event-bus'
import MsToMinute from '@/plugins/ms-to-minute'

Vue.use(EventBus)
Vue.use(MsToMinute)

new Vue({
  el: '#app',
  render: h => h(App)
})
