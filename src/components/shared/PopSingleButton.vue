<template>
  <div class="modalWrap">
    <h1 class="modalHeader">{{title}}</h1>
    <p class="modalBody">{{message}}</p>
    <div class="btnsWrap col1">
      <button @click="close" class="btn_submit">확인</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'message'],
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
