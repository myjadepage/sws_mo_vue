<template>
<div class="customerBlock" >
    <Bar :val="title" />
    <QnaForm :lookupNum="lookupNum" @lookup="openLookup" />
    <section v-if="modalVisiblity" class="modalBg">
      <PopSelectDoubleButton v-if="lookUp" :title="modalTitle" :item="lookUpItem"  @close="close" @submit="popSubmit" />
    </section>
</div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import QnaForm from '@/components/customer/QnaForm'
import PopSelectDoubleButton from '@/components/customer/Modal/PopSelectDoubleButton'

export default {
  data () {
    return {
      title: '1:1 문의하기',
      modalVisiblity: false,
      lookUp: false,
      lookUpItem: ['a'],
      modalTitle: '상품 조회',
      lookupNum: '',
      lookSelect: 0
    }
  },
  components: {
    Bar, QnaForm, PopSelectDoubleButton
  },
  methods: {
    close () {
      this.modalVisiblity = false
      this.lookUp = false
    },
    openLookup (num) {
      this.lookupNum = num
      this.modalVisiblity = true
      this.lookUp = true
    },
    popSubmit (num) {
      this.close()
      this.lookSelect = num
    }
  }
}
</script>
