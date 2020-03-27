<template>
  <div class="modalWrap">
    <h1 class="modalHeader">화질 설정</h1>
    <div class="modalBody radioWrap">
      <div v-for="item in quality" :key="item.val">
        <input type="radio" name="qual" :value="item.val" :id="'rs'+item.val" v-model="select" />
        <label :for="'rs'+item.val">{{item.text}}</label>
      </div>
    </div>
    <div class="btnsWrap col2">
      <button @click="modalClose" class="btn_cancle btn_them border gray">취소</button>
      <button @click="submit" class="btn_submit btn_them">확인</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['quality', 'selected', 'qual'],
  data () {
    return {
      select: this.qual
    }
  },
  methods: {
    modalClose () {
      this.$emit('close')
    },
    submit () {
      this.$emit('submit', this.select)
    }
  }
}
</script>
