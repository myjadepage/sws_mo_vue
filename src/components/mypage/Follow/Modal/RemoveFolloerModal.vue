<template>
  <div class="modalWrap">
    <h1 class="modalHeader">팔로워 삭제</h1>
    <p class="modalBody">팔로워를 삭제하시겠습니까?</p>
    <div class="btnsWrap col2">
      <button @click="modalClose" class="btn_cancle btn_them border gray">취소</button>
      <button @click="remove" class="btn_submit btn_them">확인</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    modalClose () {
      this.$emit('close')
    },
    remove () {
      this.$emit('remove')
    }
  }
}
</script>
