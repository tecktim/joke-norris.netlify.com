import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Favourites from './views/Favourites.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: Favourites
    }
  ]
})

/**Die Routerfunktionen kommen aus diesem Tutorial:
	https://github.com/bradtraversy/vue_crash_todolist */