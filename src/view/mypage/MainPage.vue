<template>
<div class="mainPageWrap">
<Bar :val="title" />
<OptionBar :baskets="baskets"/>
<Info :member="member"/>
<OrderStatus :member="member"/>
<Util/>
<Settings/>
<Footer/>

</div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import OptionBar from '@/components/mypage/Main/MyOptionIconBar'
import Info from '@/components/mypage/Main/MyInfo'
import OrderStatus from '@/components/mypage/Main/MyOrderStatus'
import Util from '@/components/mypage/Main/MyUtility'
import Settings from '@/components/mypage/Main/MySettings'
import Footer from '@/components/mypage/Main/MyFooter'
import { getMypageInfo, getCartItem, getAccessToken } from '@/api/index.js'

export default {
  metaInfo: {
    title: 'Shall We Shop - 마이페이지'
  },
  data () {
    return {
      title: '마이페이지',
      member: {
        userId: '',
        nickName: '',
        profileImgUrl: '/static/images/ico_member.png',
        point: 0,
        followerCnt: 0,
        followingCnt: 0,
        orderCnt: 0,
        payCnt: 0,
        deliveryReadyCnt: 0,
        deliveringCnt: 0,
        deliveryCompleteCnt: 0
      },
      baskets: []
    }
  },
  components: {
    Bar, OptionBar, Info, OrderStatus, Util, Settings, Footer
  },
  created () {
    if (sessionStorage.getItem('accessToken')) {
      getMypageInfo(sessionStorage.getItem('accessToken'))
        .then(res => {
          if (res.data.jsonData.resultCode === '0001') {
            if (res.data.jsonData.userId) {
              this.member.userId = res.data.jsonData.userId
            }
            if (res.data.jsonData.nickName) {
              this.member.nickName = res.data.jsonData.nickName
            }
            if (res.data.jsonData.profileImgUrl) {
              this.member.profileImgUrl = res.data.jsonData.profileImgUrl
            }
            if (res.data.jsonData.point) {
              this.member.point = res.data.jsonData.point
            }
            if (res.data.jsonData.followerCnt) {
              this.member.followerCnt = res.data.jsonData.followerCnt
            }
            if (res.data.jsonData.followingCnt) {
              this.member.followingCnt = res.data.jsonData.followingCnt
            }
            if (res.data.jsonData.orderCnt) {
              this.member.orderCnt = res.data.jsonData.orderCnt
            }
            if (res.data.jsonData.payCnt) {
              this.member.payCnt = res.data.jsonData.payCnt
            }
            if (res.data.jsonData.deliveryReadyCnt) {
              this.member.deliveryReadyCnt = res.data.jsonData.deliveryReadyCnt
            }
            if (res.data.jsonData.deliveringCnt) {
              this.member.deliveringCnt = res.data.jsonData.deliveringCnt
            }
            if (res.data.jsonData.deliveryCompleteCnt) {
              this.member.deliveryCompleteCnt = res.data.jsonData.deliveryCompleteCnt
            }
          }
        })
        .catch(err => {
          console.log(err)
          if (err.response.status === 401) {
            getAccessToken(sessionStorage.getItem('refreshToken'))
              .then(res => {
                sessionStorage.setItem('accessToken', res.data.jsonData.accessToken)
              })
              .catch(err => {
                if (err.response.status === 401) {
                  this.$store.dispatch('logOut')
                  this.$router.push('/Login')
                }
              })
          }
        })

      getCartItem(sessionStorage.getItem('accessToken'))
        .then(res => {
          if (res.data.jsonData.baskets) {
            this.baskets = [...res.data.jsonData.baskets]
          }
        })
        .catch(err => {
          console.log(err)
          if (err.response.status === 401) {
            getAccessToken(sessionStorage.getItem('refreshToken'))
              .then(res => {
                sessionStorage.setItem('accessToken', res.data.jsonData.accessToken)
              })
              .catch(err => {
                if (err.response.status === 401) {
                  this.$store.dispatch('logOut')
                  this.$router.push('/Login')
                }
              })
          }
        })
    }
  }
}
</script>
<style>

</style>
