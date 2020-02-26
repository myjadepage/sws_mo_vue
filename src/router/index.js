import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Beauty from '@/view/menu/Beauty'
import About from '@/view/menu/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Beauty',
      name: 'Beauty',
      component: Beauty
    },
    {
      path: '/About',
      name: 'About',
      component: About
    }
  ]
})
