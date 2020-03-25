<template>
  <div class="modalWrap">
    <h1 class="modalHeader">{{title}}</h1>
    <p class="modalBody">상품을 삭제하시겠습니까?</p>
    <div class="btnsWrap col2">
      <button @click="modalClose" class="btn_cancle">취소</button>
      <button @click="removedShow" class="btn_submit">확인</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    modalClose () {
      this.$emit('basketDelete')
    },
    removedShow () {
      this.$emit('removedShow')
    }
  }
}
</script>
