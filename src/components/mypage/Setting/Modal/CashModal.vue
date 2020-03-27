<template>
  <div class="modalWrap">
    <h1 class="modalHeader">캐시 삭제</h1>
    <p class="modalBody">
      캐시를 삭제하시겠습니까?
    </p>
    <div class="btnsWrap col2">
      <button @click="modalClose" class="btn_cancle btn_them border gray">취소</button>
      <button @click="submit" class="btn_submit btn_them">확인</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    modalClose () {
      this.$emit('close')
    },
    submit () {
      this.$emit('submit')
    }
  }
}
</script>
