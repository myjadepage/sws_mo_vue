<template>
  <div class="myreview" :class="[products.length > 0 ? 'bgGray' : 'exchange' ]">
  <Bar :val="title" />
  <ReviewTab :reviews="reviews" :tabState="tabState" @tabSwitch="tabSwitch" />
  <ExchangeEmpty :param="'리뷰를 작성하지 않은 상품 내역'" v-if="products.length === 0"  />
  <ExchangeList v-bind:pageType="pageType" :tabState="tabState" v-if="products.length > 0 && !tabState" />
  <ExchangeList v-bind:pageType="pageType" :tabState="tabState" v-if="products.length > 0 && tabState" />

  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import ExchangeList from '@/components/mypage/Exchange/ExchangeDetailList'
import ExchangeEmpty from '@/components/mypage/Exchange/ExchangeEmpty'
import ReviewTab from '@/components/mypage/MyReview/ReviewTab'

export default {
  data () {
    return {
      title: '마이리뷰',
      pageType: 'review',
      products: [
        'a', 'b'
      ],
      reviews: {
        pre: {
          length: 4
        },
        writed: {
          length: 24
        }
      },
      tabState: false
    }
  },
  components: {
    Bar, ExchangeList, ExchangeEmpty, ReviewTab
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
