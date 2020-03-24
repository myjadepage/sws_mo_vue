<template>
  <div class="modalWrap">
    <h1 class="modalHeader">{{title}}</h1>
    <p class="modalBody">상품이 삭제되었습니다.</p>
    <div class="btnsWrap">
      <button @click="modalClose" class="btn_cancle">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    modalClose () {
      this.$emit('removed')
    }
  }
}
</script>
