import Vue from 'vue'
import Router from 'vue-router'
// import { store } from '../store/index'

Vue.use(Router)

const isAuthUser = (to, from, next) => {
  this.$store.dispatch('getUserInfo').then(() => {
    if (this.$store.state.isLogin === false) {
      alert('로그인이 필요한 메뉴입니다.')
      next('/Login')
    } else {
      next()
    }
  })
}

// const isAuthUserGoogle = (to, from, next) => {
//   console.log('store.state.isLogin', store.state.isLogin)
//   store.dispatch('getUserInfoGoogle').then(() => {
//     if (store.state.isLogin === false) {
//       alert('로그인이 필요한 화면입니다.')
//       next('/Login')
//     } else {
//       next()
//     }
//   })
// }

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
      path: '/category/패션잡화',
      name: 'FashionEtc',
      component: () => import('@/view/subpage/Fashion/FashionMain')
    },
    {
      path: '/category/뷰티',
      name: 'Beauty',
      component: () => import('@/view/subpage/Fashion/FashionMain')
    },
    {
      path: '/category/유아',
      name: 'Baby',
      component: () => import('@/view/subpage/Fashion/FashionMain')
    },
    {
      path: '/category/식품',
      name: 'Food',
      component: () => import('@/view/subpage/Fashion/FashionMain')
    },
    {
      path: '/category/리빙',
      name: 'Living',
      component: () => import('@/view/subpage/Fashion/FashionMain')
    },
    {
      path: '/Product/:prdtSysId',
      name: 'ProductDetail',
      component: () => import('@/view/productDetail/ProductDetailMain')
    },
    {
      path: '/Product/:prdtSysId/Live/:broadcastSysId',
      name: 'ProductDetailLive',
      component: () => import('@/view/productDetail/ProductDetailMainLive')
    },
    {
      path: '/Product/:prdtSysId/detail/:broadcastSysId',
      name: 'ProductDetailLiveInfo',
      component: () => import('@/view/productDetail/ProductDetailMainLiveInfo')
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
        isAuthUser
        // isAuthUserGoogle
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
    },
    {
      path: '/nonMemberOrder',
      name: 'NonMemberOrder',
      component: () => import('@/view/nonMemberOrderSearch/NonMemberOrder')
    },
    {
      path: '/modifyProfile',
      name: 'ModifyProfile',
      component: () => import('@/view/mypage/ModifyProfile')
    },
    {
      path: '/AlertSet',
      name: 'AlertSet',
      component: () => import('@/view/mypage/AlertSet')
    },
    {
      path: '/VersionChk',
      name: 'VersionChk',
      component: () => import('@/view/mypage/VersionChk')
    },
    {
      path: '/ChangePw',
      name: 'ChangePw',
      component: () => import('@/view/mypage/ChangePw')
    },
    {
      path: '/Exchange',
      name: 'Exchange',
      component: () => import('@/view/mypage/Exchange')
    },
    {
      path: '/ExchangeDetail',
      name: 'ExchangeDetail',
      component: () => import('@/view/mypage/ExchangeDetail')
    },
    {
      path: '/BuyHistory',
      name: 'BuyHistory',
      component: () => import('@/view/mypage/BuyHistory')
    },
    {
      path: '/Basket',
      name: 'Basket',
      component: () => import('@/view/mypage/Basket')
    },
    {
      path: '/ViewLog',
      name: 'ViewLog',
      component: () => import('@/view/mypage/ViewLog')
    },
    {
      path: '/MyReview',
      name: 'MyReview',
      component: () => import('@/view/mypage/MyReview')
    },
    {
      path: '/Following',
      name: 'Following',
      component: () => import('@/view/mypage/Following')
    },
    {
      path: '/Follower',
      name: 'Follower',
      component: () => import('@/view/mypage/Follower')
    },
    {
      path: '/ExchangeReq',
      name: 'ExchangeReq',
      component: () => import('@/view/mypage/ExchangeReq')
    },
    {
      path: '/ReviewWrite/:prdtSysId',
      name: 'ReviewWrite',
      component: () => import('@/view/mypage/ReviewWrite')
    },
    {
      path: '/MypageSetting',
      name: 'MypageSetting',
      component: () => import('@/view/mypage/MypageSetting')
    },
    {
      path: '/BlackList',
      name: 'BlackList',
      component: () => import('@/view/mypage/BlackList')
    },
    {
      path: '/ReportLog',
      name: 'ReportLog',
      component: () => import('@/view/mypage/ReportLog')
    },
    {
      path: '/SanctionLog',
      name: 'SanctionLog',
      component: () => import('@/view/mypage/SanctionLog')
    },
    {
      path: '/MovieSetting',
      name: 'MovieSetting',
      component: () => import('@/view/mypage/MovieSetting')
    },
    {
      path: '/Privacy',
      name: 'Privacy',
      component: () => import('@/view/menu/Privacy')
    },
    {
      path: '/TermsService',
      name: 'TermsService',
      component: () => import('@/view/menu/TermsService')
    },
    {
      path: '/Withdraw',
      name: 'Withdraw',
      component: () => import('@/view/member/Withdraw')
    },
    {
      path: '/detailExam',
      name: 'DetailExam',
      component: () => import('@/view/ProductDetail/DetailExample')
    },
    {
      path: '/Calendar',
      name: 'Calendar',
      component: () => import('@/view/calendar/Calendar')
    },
    {
      path: '/CalendarReserved',
      name: 'CalendarReserved',
      component: () => import('@/view/calendar/CalendarReserved')
    },
    {
      path: '/MyPoint',
      name: 'MyPoint',
      component: () => import('@/view/mypage/MyPoint')
    },
    {
      path: '/CustomerMain',
      name: 'CustomerMain',
      component: () => import('@/view/customer/CustomerMain')
    },
    {
      path: '/myQna',
      name: 'myQna',
      component: () => import('@/view/customer/myQna')
    },
    {
      path: '/WriteQna',
      name: 'WriteQna',
      component: () => import('@/view/customer/WriteQna')
    },
    {
      path: '/BrandProfile',
      name: 'BrandProfile',
      component: () => import('@/view/mypage/BrandProfile')
    },
    {
      path: '/CustomerSearch',
      name: 'CustomerSearch',
      component: () => import('@/view/customer/CustomerSearch')
    }
  ]
})
