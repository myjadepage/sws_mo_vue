<template>
  <div class="myreview">
    <Bar :val="title" />
    <ReviewTab :reviews="reviews" :products="products" :tabState="tabState" @tabSwitch="tabSwitch" />
    <EmptyBlock :param="emptyMessage" v-if="!tabState&&products.length===0" />
    <EmptyBlock :param="emptyMessage2" v-if="tabState&&reviews.length===0"  />
    <ReviewEntity v-if="!tabState" :list="products" :tabState="tabState" />
    <ReviewEntity v-if="tabState" :list="reviews" :tabState="tabState" />
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import ExchangeList from '@/components/mypage/Exchange/ExchangeDetailList'
import EmptyBlock from '@/components/shared/EmptyBlock'
import ReviewTab from '@/components/mypage/MyReview/ReviewTab'
import ReviewEntity from '@/components/mypage/MyReview/MyReviewEntity'

import {getMyReviewList, getAccessToken} from '@/api/index.js'

export default {
  created () {
    window.scrollTo(0, 0)

    getMyReviewList(sessionStorage.getItem('accessToken'), 0, 10)
      .then(res => {
        console.log(res)
        if (res.data.jsonData.resultCode === '0001') {
          this.reviews = res.data.jsonData.reviews
        }
      })
      .catch(err => {
        if (err.response.status === 401) {
          getAccessToken(sessionStorage.getItem('refreshToken'))
            .then(res => {
              sessionStorage.setItem('accessToken', res.data.jsonData.accessToken)
              getMyReviewList(sessionStorage.getItem('accessToken'), 0, 10)
                .then(res => {
                  console.log(res)
                  if (res.data.jsonData.resultCode === '0001') {
                    this.reviews = res.data.jsonData.reviews
                  }
                })
                .catch(err => {
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
  },

  data () {
    return {
      title: '마이리뷰',
      pageType: 'review',
      emptyMessage: '리뷰를 작성하지 않은 상품 내역이 없습니다.',
      emptyMessage2: '리뷰를 작성한 상품 내역이 없습니다.',
      products: [],
      reviews: [],
      tabState: false
    }
  },
  components: {
    Bar, ExchangeList, EmptyBlock, ReviewTab, ReviewEntity
  },
  methods: {
    tabSwitch () {
      this.tabState = !this.tabState
    }
  }
}
</script>
<style>

</style>
