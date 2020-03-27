<template>

  <p v-html="transText" class="longTextBox"></p>

</template>

<script>
export default {
  props: ['text'],
  data () {
    return {
      transText: this.text.replace(/(?:\r\n|\r|\n)/g, '<br />')
    }
  }
}
</script>

<style>

</style>
