<template>
  <div class="cartCountWrap">
      <input :checked="cntInfo[2]" ref="checkAll" @click="checkAll" id="checkAll" type="checkbox"> <label for="checkAll">전체선택 (<span class="selectCnt">{{selectedCnt}}</span>/{{cntInfo[1]}}개)</label>
    <button @click="clickDeleteBtn" class="deleteBtn">선택삭제</button>
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
    },
    clickDeleteBtn () {
      if (!this.cntInfo[0].includes(true)) {
        return
      }
      this.$emit('selectedDelete')
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
        padding: 0px 12px;
        line-height: 53px;
        height: 53px;
    }

    .cartCountWrap .selectCnt{
        color: #e61754;
    }

    .cartCountWrap .deleteBtn{
      position: relative;
      top: 10.5px;
      float: right;
      width: 20%;
      height: 32px;
      color: #111111;
      border-radius: 2px;
      font-size: 13px;
    }

    .cartCountWrap #checkAll{
      all: unset;
      display: inline-block;
      position: relative;
      top: 8px;
      margin-right: 10px;
      width: 26px;
      height: 26px;
      border: 1px solid #eeeeee;
    }
    .cartCountWrap #checkAll::before{
      content: '';
      display: inline-block;
      background: url('../../assets/img/ico/ico_checkbox_label_un.png');
      background-size: 100%;
      width:14px;
      height: 11px;
      position: absolute;
      top: 8px;
      left: 6px;
    }
    .cartCountWrap #checkAll:checked{
      background-color: #e61754;
    }

    .cartCountWrap #checkAll:checked::before{
      content: '';
      display: inline-block;
      background: url('../../assets/img/ico/ico_checkbox_label.png');
      background-size: 100%;
      width:14px;
      height: 11px;
      position: absolute;
      top: 8px;
      left: 6px;
    }

</style>
