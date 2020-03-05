<template>
  <div class="contact_content">
      <h3>1:1문의</h3>
      <div class="text-center">
      <textarea v-model="content" @change="formInputed" name="contact" rows="10" placeholder="문의하실 내용을 입력해 주세요."></textarea>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: ''
    }
  },
  methods: {
    formInputed () {
      if (this.content !== '') {
        this.$emit('formInputed', this.content)
      }
    }
  }
}
</script>

<style>

</style>
