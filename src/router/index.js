import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Beauty from '@/view/menu/Beauty'
import About from '@/view/menu/About'
import Login from '@/view/member/Login'
import Searchid from '@/view/member/Searchid'
import Searchpw from '@/view/member/Searchpw'
import SearchDone from '@/view/member/SearchDone'

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
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Searchid',
      name: 'Searchid',
      component: Searchid
    },
    {
      path: '/Searchpw',
      name: 'Searchpw',
      component: Searchpw
    },
    {
      path: '/SearchDone',
      name: 'SearchDone',
      component: SearchDone
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
