<template>
  <div :class="[products.length > 0 ? 'bgGray' : 'exchange' ]">
  <Bar :val="title" />
  <EmptyBlock :param="emptyMeasse" v-if="products.length === 0"  />
  <viewList v-bind:pageType="pageType" :products="products" v-if="products.length > 0"  />

  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import viewList from '@/components/mypage/ViewLog/ViewList'
import EmptyBlock from '@/components/shared/EmptyBlock'
import BasketDeleteModal from '@/components/mypage/Exchange/Modal/BasketDeleteModal'
import RemovedModal from '@/components/mypage/Exchange/Modal/BasketDeleted'
import { getRecentViewList, getAccessToken } from '@/api/index.js'

export default {
  metaInfo: {
    title: 'Shall We Shop - 최근 본 상품'
  },
  data () {
    return {
      title: '최근 본 상품',
      pageType: 'basket',
      emptyMeasse: '최근 본 상품이 없습니다.',
      products: [],
      modalVisiblity: false,
      basketDeleteModal: false,
      removedModal: false,
      viewStartIndex: 0
    }
  },
  components: {
    Bar, viewList, EmptyBlock, BasketDeleteModal, RemovedModal
  },
  created () {
    window.scrollTo(0, 0)

    if (sessionStorage.getItem('accessToken')) {
      getRecentViewList(sessionStorage.getItem('accessToken'), this.viewStartIndex, 10)
        .then(res => {
          console.log(res)
          this.viewStartIndex = res.data.jsonData.viewStartIndex
          this.products.push(...res.data.jsonData.views)
        })
        .catch(err => {
          console.log(err)
          if (err.response.status === 401) {
            getAccessToken(sessionStorage.getItem('refreshToken'))
              .then(res => {
                sessionStorage.setItem('accessToken', res.data.jsonData.accessToken)
                getRecentViewList(sessionStorage.getItem('accessToken'), this.viewStartIndex, 10)
                  .then(res => {
                    console.log(res)
                    this.viewStartIndex = res.data.jsonData.viewStartIndex
                    this.products.push(...res.data.jsonData.views)
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
