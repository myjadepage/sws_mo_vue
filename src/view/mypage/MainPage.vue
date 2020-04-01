<template>
<div class="mainPageWrap">
<Bar :val="title" />
<OptionBar/>
<Info :member="member"/>
<OrderStatus/>
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
import { getUserInfo } from '@/api/index.js'

export default {
  data () {
    return {
      title: '마이페이지',
      member: {
        id: '',
        nickName: '',
        profileImgUrl: '/static/images/ico_member.png'
      }
    }
  },
  components: {
    Bar, OptionBar, Info, OrderStatus, Util, Settings, Footer
  },
  created () {
    if (sessionStorage.getItem('accessToken')) {
      getUserInfo(sessionStorage.getItem('accessToken'))
        .then(res => {
          if (res.data.jsonData.userId) {
            this.member.id = res.data.jsonData.userId
          }
          if (res.data.jsonData.nickName) {
            this.member.nickName = res.data.jsonData.nickName
          }
          if (res.data.jsonData.profileImgUrl) {
            this.member.profileImgUrl = res.data.jsonData.profileImgUrl
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style>

</style>
