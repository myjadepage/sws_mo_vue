<template>
  <div class="myreview bgGray">
    <Bar :val="title" />
    <ReviewTab :reviews="reviews" :products="products" :tabState="tabState" @tabSwitch="tabSwitch" />
    <EmptyBlock :param="emptyMessage" v-if="!tabState&&products.length===0"  />
    <div v-if="tabState">
    <ReviewEntity v-for="(r,idx) in reviews" :key="idx" :review="r" />
    </div>
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
    getMyReviewList(sessionStorage.getItem('accessToken'))
      .then(res => {
        if (res.data.jsonData.reviews) {
          for (const r of res.data.jsonData.reviews) {
            this.reviews.push({
              ...r
            })
          }
        } else {
          this.reviews.push({
            'brandName': '부광메디카',
            'smallImageUrl': 'http://cdn.shallwe.link/product/image/0/2/ed4bac70-7e3d-4532-b13e-4f541ea0d73c.png',
            'brandSysId': 3,
            'bigImageUrl': 'http://cdn.shallwe.link/product/image/0/2/d19a8795-2a92-4799-81e8-759445dc6e56.png',
            'oneLine': '한줄평',
            'middleImageUrl': 'http://cdn.shallwe.link/product/image/0/2/071f46fe-37ae-4d8e-9c53-944424790b11.png',
            'reviewType': 1,
            'recommendCnt': 0,
            'mediaCnt': 0,
            'content': '리뷰내용',
            'deprecatedCnt': 0,
            'prdtSysId': 43,
            'name': '부광메디카 아락소프트핏 30p',
            'starPoint': 5,
            'photoCnt': 1,
            'prdtReviewSysId': 43
          })
          this.reviews.push({
            'brandName': '헤라',
            'smallImageUrl': 'http://cdn.shallwe.link/product/image/0/2/ed4bac70-7e3d-4532-b13e-4f541ea0d73c.png',
            'brandSysId': 3,
            'bigImageUrl': 'http://cdn.shallwe.link/product/image/0/2/d19a8795-2a92-4799-81e8-759445dc6e56.png',
            'oneLine': '한줄평',
            'middleImageUrl': 'http://cdn.shallwe.link/product/image/0/2/071f46fe-37ae-4d8e-9c53-944424790b11.png',
            'reviewType': 2,
            'recommendCnt': 0,
            'mediaCnt': 3,
            'content': '좋습니다!! 웜톤이라 21호가 맞을까 고민했는데, 다행히 제 피부에 잘~ 맞네요~ 역시 믿고 쓰는 블리블리 역시 믿고 쓰는 블리블리웜톤이라 21호가 맞을까 고민했는데, 다행히 제 피부에 잘~ 맞네요~ 역시 믿고 쓰는 블리블리 역시 믿고 쓰는 블리블리',
            'deprecatedCnt': 0,
            'prdtSysId': 43,
            'name': '센슈얼 립 세럼 글로우1호 + 클렌징 오일 정품 50ml 추가증정',
            'starPoint': 10,
            'photoCnt': 0,
            'prdtReviewSysId': 43
          })
        }
        // 구매한 상품 api로 구매 상품 목록 가져와서 products에 넣어줘야 함
      })
      .catch(err => {
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
  },

  data () {
    return {
      title: '마이리뷰',
      pageType: 'review',
      emptyMessage: '리뷰를 작성하지 않은 상품 내역이 없습니다.',
<<<<<<< HEAD
      reviews: [],
      products: [],
=======
      emptyMessage2: '리뷰를 작성한 상품 내역이 없습니다.',
      products: [],
      reviews: {
        pre: {
          length: 4
        },
        writed: {
          length: 24
        }
      },
>>>>>>> a4d10c7fd287d51e7428f0ae46d06773574466e7
      tabState: false
    }
  },
  components: {
    Bar, ExchangeList, EmptyBlock, ReviewTab, ReviewEntity
  },
  created () {
    window.scrollTo(0, 0)
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
