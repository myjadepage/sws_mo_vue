<template>
  <div :class="[products.length > 0 ? 'bgGray' : 'exchange' ]">
  <Bar :val="title" />
  <EmptyBlock :param="emptyMeasse" v-if="products.length === 0"  />
  <viewList v-bind:pageType="pageType" :products="products" v-if="products.length > 0" @basketDeleteModalShow="basketDeleteModalShow"  />

  <section v-if="modalVisiblity" class="modalBg">
    <BasketDeleteModal v-if="basketDeleteModal" @basketDelete="basketDeleteModalClose" @removedShow="removedShow" :title="title" />
    <RemovedModal v-if="removedModal" @removed="removedClose" :title="title" />
  </section>
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import viewList from '@/components/mypage/ViewLog/ViewList'
import EmptyBlock from '@/components/shared/EmptyBlock'
import BasketDeleteModal from '@/components/mypage/Exchange/Modal/BasketDeleteModal'
import RemovedModal from '@/components/mypage/Exchange/Modal/BasketDeleted'
import { getRecentViewList } from '@/api/index.js'

export default {
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
    if (sessionStorage.getItem('accessToken')) {
      getRecentViewList(sessionStorage.getItem('accessToken'), this.viewStartIndex, 10)
        .then(res => {
          console.log(res)
          this.viewStartIndex = res.data.jsonData.viewStartIndex
          this.products.push(...res.data.jsonData.views)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  methods: {
    basketDeleteModalShow () {
      this.modalVisiblity = true
      this.basketDeleteModal = true
    },
    basketDeleteModalClose () {
      this.modalVisiblity = false
      this.basketDeleteModal = false
    },
    removedShow () {
      this.basketDeleteModal = false
      this.removedModal = true
    },
    removedClose () {
      this.modalVisiblity = false
      this.removedModal = false
    }
  }
}
</script>
<style>

</style>
