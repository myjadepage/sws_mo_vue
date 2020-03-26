<template>
  <div class="cartCountWrap">
      <input :checked="cntInfo[2]" ref="checkAll" @click="checkAll" id="checkAll" type="checkbox"> <label for="checkAll">전체선택 (<span class="selectCnt">{{selectedCnt}}</span>/{{cntInfo[1]}}개)</label>
  </div>
</template>

<script>
export default {
  props: ['cntInfo'],
  methods: {
    checkAll (e) {
      if (e.target.checked) {
        this.$emit('cartSelectAll', true)
      } else {
        this.$emit('cartDeSelectAll', false)
      }
    }
  },
  computed: {
    selectedCnt () {
      let val = 0
      for (let i = 0; i < this.cntInfo[0].length; i++) {
        if (this.cntInfo[0][i] === true)val++
      }
      return val
    }
  }
}
</script>

<style>
    .cartCountWrap{
        font-size: 16px;
        font-weight: 500;
        background-color: #fff;
        margin-top: 5px;
        margin-bottom: 1px;
        padding: 23px 12px 10px;
    }

    .cartCountWrap .selectCnt{
        color: #e61754;
    }
</style>
