import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Fashion from '@/view/menu/Fashion'
import About from '@/view/menu/About'
import Login from '@/view/member/Login'
import Searchid from '@/view/member/Searchid'
import Searchpw from '@/view/member/Searchpw'
import SearchpwSet from '@/view/member/SearchpwSet'
import SearchDone from '@/view/member/SearchDone'
import RegStep00 from '@/view/member/RegStep00'
import RegStep00Naver from '@/view/member/RegStep00Naver'
import RegStep01 from '@/view/member/RegStep01'
import RegStep02 from '@/view/member/RegStep02'
import RegStep03 from '@/view/member/RegStep03'
import RegStep04 from '@/view/member/RegStep04'
import MyPage from '@/view/mypage/MainPage'
import Notice from '@/view/mypage/Notice'
import Contact from '@/view/mypage/Contact'
import Tracking from '@/view/mypage/Tracking'
import TrackingDetail from '@/view/mypage/TrackingDetail'
import ProductDetail from '@/view/ProductDetail/ProductDetailMain'

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
      path: '/RegStep00Naver',
      name: 'RegStep00Naver',
      component: RegStep00Naver
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
      path: '/category/패션',
      name: 'Fashion',
      component: Fashion
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/MyPage',
      name: 'MyPage',
      component: MyPage
    },
    {
      path: '/Notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Tracking',
      name: 'Tracking',
      component: Tracking
    },
    {
      path: '/Tracking/Detail',
      name: 'TrackingDetail',
      component: TrackingDetail
    },
    {
      path: '/Product/:prdtSysId',
      name: 'ProductDetail',
      component: ProductDetail
    }
  ]
})
