<template>
  <div class="modalWrap">
    <h1 class="modalHeader">{{title}}</h1>
    <p class="modalBody">{{select}}</p>
    <div class="btnsWrap col2">
      <button @click="close" class="btn_cancle">취소</button>
      <button @click="submit" class="btn_submit">확인</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'select'],
  methods: {
    close () {
      this.$emit('close')
    },
    submit () {
      this.$emit('submit')
    }
  }
}
</script>
