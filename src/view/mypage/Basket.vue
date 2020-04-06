<template>
  <div :class="[products.length > 0 ? 'bgGray' : 'exchange' ]">
  <Bar :val="title" />
  <EmptyBlock :param="emptyMessage" v-if="products.length === 0"  />
  <BasketList v-bind:pageType="pageType" v-if="products.length > 0" @basketDeleteModalShow="basketDeleteModalShow"  />

  <section v-if="modalVisiblity" class="modalBg">
    <BasketDeleteModal v-if="basketDeleteModal" @basketDelete="basketDeleteModalClose" @removedShow="removedShow" :title="title" />
    <RemovedModal v-if="removedModal" @removed="removedClose" :title="title" />
  </section>
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import BasketList from '@/components/mypage/Basket/BasketList'
import EmptyBlock from '@/components/shared/EmptyBlock'
import BasketDeleteModal from '@/components/mypage/Exchange/Modal/BasketDeleteModal'
import RemovedModal from '@/components/mypage/Exchange/Modal/BasketDeleted'

export default {
  data () {
    return {
      title: '찜한 상품',
      pageType: 'basket',
      emptyMessage: '찜한 상품이 없습니다.',
      products: [
        'a', 'b'
      ],
      modalVisiblity: false,
      basketDeleteModal: false,
      removedModal: false
    }
  },
  components: {
    Bar, BasketList, EmptyBlock, BasketDeleteModal, RemovedModal
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
