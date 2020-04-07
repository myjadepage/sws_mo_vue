<template>
  <div class="myreview" :class="[products.length > 0 ? 'bgGray' : 'exchange' ]">
  <Bar :val="title" />
  <ReviewTab :reviews="reviews" :tabState="tabState" @tabSwitch="tabSwitch" />
  <EmptyBlock :param="emptyMessage" v-if="products.length === 0 && !tabState"  />
  <EmptyBlock :param="emptyMessage2" v-if="products.length === 0 && tabState"  />
  <ExchangeList v-bind:pageType="pageType" :tabState="tabState" v-if="products.length > 0 && !tabState" />
  <ExchangeList v-bind:pageType="pageType" :tabState="tabState" v-if="products.length > 0 && tabState" />

  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import ExchangeList from '@/components/mypage/Exchange/ExchangeDetailList'
import EmptyBlock from '@/components/shared/EmptyBlock'
import ReviewTab from '@/components/mypage/MyReview/ReviewTab'

export default {
  data () {
    return {
      title: '마이리뷰',
      pageType: 'review',
      emptyMessage: '리뷰를 작성하지 않은 상품 내역이 없습니다.',
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
      tabState: false
    }
  },
  components: {
    Bar, ExchangeList, EmptyBlock, ReviewTab
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
