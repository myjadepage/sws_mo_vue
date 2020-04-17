<template>
  <div class="mainPageWrap emptyHeight" >
  <Bar :val="title" />
  <!-- <OptionBar :baskets="baskets" /> -->
  <!-- <MyInfo :member="member" /> -->
  <LookUp @sendDate="setDate" />
  <PointList :lists="lists" />

  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import OptionBar from '@/components/mypage/Main/MyOptionIconBar'
import MyInfo from '@/components/mypage/Main/MyInfo'
import LookUp from '@/components/mypage/Point/PointLookUp'
import PointList from '@/components/mypage/Point/PointList'
import { getMypageInfo, getCartItem, getPointInfo, getAccessToken } from '@/api/index.js'

export default {
  metaInfo: {
    title: 'Shall We Shop - 마이포인트'
  },
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
      todayStr: '',
      startDateStr: '',
      baskets: [],
      lists: []
    }
  },
  components: {
    Bar, MyInfo, OptionBar, LookUp, PointList
  },
  methods: {
    setDate (today, startDate) {
      this.todayStr = today.replace(/\./gi, '')
      this.startDateStr = startDate.replace(/\./gi, '')

      getPointInfo(sessionStorage.getItem('accessToken'), this.todayStr, this.startDateStr, 0)
        .then(res => {
          console.log(res)
          if (res.data.jsonData.resultCode === '0001') {
            this.lists = res.data.jsonData.pointHists
          }
        })
        .catch(err => {
          console.log(err)
        })
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
          getCartItem(sessionStorage.getItem('accessToken'))
            .then(res => {
              if (res.data.jsonData.baskets) {
                this.baskets = [...res.data.jsonData.baskets]
              }
            })
            .catch(err => {
              console.log(err)
            })
        })
        .catch(err => {
          console.log(err)
          if (err.response.status === 401) {
            getAccessToken(sessionStorage.getItem('refreshToken'))
              .then(res => {
                sessionStorage.setItem('accessToken', res.data.jsonData.accessToken)
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
                    getCartItem(sessionStorage.getItem('accessToken'))
                      .then(res => {
                        if (res.data.jsonData.baskets) {
                          this.baskets = [...res.data.jsonData.baskets]
                        }
                      })
                      .catch(err => {
                        console.log(err)
                      })
                  })
                  .catch(err => {
                    console.log(err)
                    if (err.response.status === 401) {
                      this.$store.dispatch('logOut')
                      this.$router.push('/Login')
                    }
                  })
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
