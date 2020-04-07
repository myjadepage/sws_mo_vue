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
import { getPicksList } from '@/api/index.js'

export default {
  data () {
    return {
      title: '찜한 상품',
      pageType: 'basket',
      emptyMessage: '찜한 상품이 없습니다.',
      products: [],
      modalVisiblity: false,
      basketDeleteModal: false,
      removedModal: false
    }
  },
  created () {
    window.scrollTo(0, 0)

    getPicksList(sessionStorage.getItem('accessToken'), 0, 10)
      .then(res => {
        if (res.data.jsonData.resultCode === '0001') {
          this.products = res.data.jsonData.prdtPicks
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
