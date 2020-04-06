<template>
  <div class="mainPageWrap" :class="listCount === 0? 'emptyHeight': ''">
  <Bar :val="title" />
  <OptionBar :baskets="baskets" />
  <MyInfo :member="member" />
  <LookUp />
  <PointList @type="typeSwitch" :list="list" :listCount="listCount" />

  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import OptionBar from '@/components/mypage/Main/MyOptionIconBar'
import MyInfo from '@/components/mypage/Main/MyInfo'
import LookUp from '@/components/mypage/Point/PointLookUp'
import PointList from '@/components/mypage/Point/PointList'
import { getMypageInfo, getCartItem } from '@/api/index.js'

export default {
  data () {
    return {
      title: '마이 포인트',
      member: {
        userId: '',
        nickName: '',
        profileImgUrl: '/static/images/ico_member.png',
        point: 0,
        followerCnt: 0,
        followingCnt: 0
      },
      baskets: [],
      listCount: 3,
      list: {
        all: {
          count: 3,
          item: []
        },
        save: {
          count: 2,
          item: []
        },
        use: {
          count: 0,
          item: []
        }
      }
    }
  },
  components: {
    Bar, MyInfo, OptionBar, LookUp, PointList
  },
  methods: {
    typeSwitch (typeStr) {
      if (typeStr === 'all') {
        this.listCount = this.listCount
      } else if (typeStr === 'save') {
        this.listCount = this.list.save.count
      } else if (typeStr === 'use') {
        this.listCount = this.list.use.count
      }
    }
  },
  created () {
    if (sessionStorage.getItem('accessToken')) {
      getMypageInfo(sessionStorage.getItem('accessToken'))
        .then(res => {
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
        })
        .catch(err => {
          console.log(err)
        })

      getCartItem(sessionStorage.getItem('accessToken'))
        .then(res => {
          if (res.data.jsonData.baskets) {
            this.baskets = [...res.data.jsonData.baskets]
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
