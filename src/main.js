import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

/**Die Routerfunktionen kommen aus diesem Tutorial:
	https://github.com/bradtraversy/vue_crash_todolist */