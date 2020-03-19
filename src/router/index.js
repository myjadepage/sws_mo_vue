import Vue from 'vue'
import Router from 'vue-router'
import { store } from '../store/index'

Vue.use(Router)

const isAuthUser = (to, from, next) => {
  console.log('store.state.isLogin', store.state.isLogin)
  store.dispatch('getUserInfo').then(() => {
    if (store.state.isLogin === false) {
      alert('로그인이 필요한 화면입니다.')
      next('/Login')
    } else {
      next()
    }
  })
}

const isAuthUserGoogle = (to, from, next) => {
  console.log('store.state.isLogin', store.state.isLogin)
  store.dispatch('getUserInfoGoogle').then(() => {
    if (store.state.isLogin === false) {
      alert('로그인이 필요한 화면입니다.')
      next('/Login')
    } else {
      next()
    }
  })
}

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/view/Home')
    },
    {
      path: '/category/패션',
      name: 'Fashion',
      component: () => import('@/view/subpage/Fashion/FashionMain')
    },
    {
      path: '/Product/:prdtSysId',
      name: 'ProductDetail',
      component: () => import('@/view/productDetail/ProductDetailMain')
    },
    {
      path: '/Login',
      name: 'Login',
      // beforeEnter: rejectAuthUser,
      component: () => import('@/view/member/Login')
    },
    {
      path: '/RegStep04',
      name: 'RegStep04',
      component: () => import('@/view/member/RegStep04')
    },
    {
      path: '/About',
      name: 'About',
      component: () => import('@/view/menu/About')
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('@/view/search/SearchPage')
    },
    {
      path: '/Searchid',
      name: 'Searchid',
      component: () => import('@/view/member/Searchid')
    },
    {
      path: '/Searchpw',
      name: 'Searchpw',
      component: () => import('@/view/member/Searchpw')
    },
    {
      path: '/SearchpwSet',
      name: 'SearchpwSet',
      component: () => import('@/view/member/SearchpwSet')
    },
    {
      path: '/SearchDone',
      name: 'SearchDone',
      component: () => import('@/view/member/SearchDone')
    },
    {
      path: '/RegStep00',
      name: 'RegStep00',
      component: () => import('@/view/member/RegStep00')
    },
    {
      path: '/Terms/:num',
      name: 'Terms',
      component: () => import('@/view/member/Terms')
    },
    {
      path: '/RegStep02',
      name: 'RegStep02',
      component: () => import('@/view/member/RegStep02')
    },
    {
      path: '/RegStep03',
      name: 'RegStep03',
      component: () => import('@/view/member/RegStep03')
    },
    {
      path: '/MyPage',
      name: 'MyPage',
      beforeEach: {
        isAuthUser,
        isAuthUserGoogle
      },
      component: () => import('@/view/mypage/MainPage')
    },
    {
      path: '/Notice',
      name: 'Notice',
      component: () => import('@/view/mypage/Notice')
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: () => import('@/view/mypage/Contact')
    },
    {
      path: '/Tracking',
      name: 'Tracking',
      component: () => import('@/view/mypage/Tracking')
    },
    {
      path: '/Tracking/Detail',
      name: 'TrackingDetail',
      component: () => import('@/view/mypage/TrackingDetail')
    },
    {
      path: '/BuyProduct',
      name: 'BuyProduct',
      component: () => import('@/view/buyProduct/BuyPageMain')
    },
    {
      path: '/BuyProduct/searchPost',
      name: 'searchPost',
      component: () => import('@/components/buypage/Modal/DaumPostModal')
    },
    {
      path: '/BuyComplete',
      name: 'BuyComplete',
      component: () => import('@/view/buyProduct/BuyComplete')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('@/view/cart/CartMain')
    }
  ]
})
