import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Beauty from '@/view/menu/Beauty'
import About from '@/view/menu/About'
import Login from '@/view/member/Login'
import Searchid from '@/view/member/Searchid'
import Searchpw from '@/view/member/Searchpw'
import SearchpwSet from '@/view/member/SearchpwSet'
import SearchDone from '@/view/member/SearchDone'
import RegStep00 from '@/view/member/RegStep00'
import RegStep01 from '@/view/member/RegStep01'
import RegStep02 from '@/view/member/RegStep02'
import RegStep03 from '@/view/member/RegStep03'
import RegStep04 from '@/view/member/RegStep04'

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
      path: '/SearchpwSet',
      name: 'SearchpwSet',
      component: SearchpwSet
    },
    {
      path: '/SearchDone',
      name: 'SearchDone',
      component: SearchDone
    },
    {
      path: '/RegStep00',
      name: 'RegStep00',
      component: RegStep00
    },
    {
      path: '/RegStep01',
      name: 'RegStep01',
      component: RegStep01
    },
    {
      path: '/RegStep02',
      name: 'RegStep02',
      component: RegStep02
    },
    {
      path: '/RegStep03',
      name: 'RegStep03',
      component: RegStep03
    },
    {
      path: '/RegStep04',
      name: 'RegStep04',
      component: RegStep04
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
