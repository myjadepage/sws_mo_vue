<template>
  <div :class="[products.length > 0 ? 'bgGray' : 'exchange' ]">
  <Bar :val="title" />
  <EmptyBlock :param="emptyMessage" v-if="products.length === 0"  />
  <BasketList v-bind:pageType="pageType" v-if="products.length > 0" :products="products" @lists="setLists"  />

  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import BasketList from '@/components/mypage/Basket/BasketList'
import EmptyBlock from '@/components/shared/EmptyBlock'
import BasketDeleteModal from '@/components/mypage/Exchange/Modal/BasketDeleteModal'
import RemovedModal from '@/components/mypage/Exchange/Modal/BasketDeleted'
import { getPicksList, getAccessToken } from '@/api/index.js'

export default {
  metaInfo: {
    title: 'Shall We Shop - 찜한 상품'
  },
  data () {
    return {
      title: '찜한 상품',
      pageType: 'basket',
      emptyMessage: '찜한 상품이 없습니다.',
      products: [],
      modalVisiblity: false,
      basketDeleteModal: false,
      removedModal: false,
      startIndex: 0
    }
  },
  created () {
    window.scrollTo(0, 0)
    let str = `?startIndex=${this.startIndex}&rowCount=20`
    getPicksList(sessionStorage.getItem('accessToken'), str)
      .then(res => {
        if (res.data.jsonData.resultCode === '0001') {
          this.products = res.data.jsonData.prdtPicks
        }
      })
      .catch(err => {
        console.log(err)
        if (err.response.status === 401) {
          getAccessToken(sessionStorage.getItem('refreshToken'))
            .then(res => {
              sessionStorage.setItem('accessToken', res.data.jsonData.accessToken)
              getPicksList(sessionStorage.getItem('accessToken'), str)
                .then(res => {
                  if (res.data.jsonData.resultCode === '0001') {
                    this.products = res.data.jsonData.prdtPicks
                  }
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
  },
  components: {
    Bar, BasketList, EmptyBlock, BasketDeleteModal, RemovedModal
  },
  methods: {
    setLists (lists) {
      this.products = lists
    }
  }
}
</script>
<style>

</style>
