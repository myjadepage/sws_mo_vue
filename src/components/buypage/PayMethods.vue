<template>
  <div class="PayMethodsWrap">
    <div class="payHeader">
      결제방법
    </div>
    <div class="methods">
      <button class="methodBtn" @click="methodBtnClick(idx)" v-for="(m,idx) in payMethod" :key="idx">{{m}}</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      payMethod: ['신용카드', '실시간 계좌이체', '가상계좌', '휴대폰 소액결제', '삼성페이'],
      currentMethod: null
    }
  },
  methods: {
    methodBtnClick (idx) {
      if (this.currentMethod !== null) {
        this.$el.getElementsByClassName('methodBtn')[this.currentMethod].classList.remove('selected')
      }
      this.currentMethod = idx
      this.$el.getElementsByClassName('methodBtn')[idx].classList.add('selected')
    }
  }
}
</script>

<style>
.PayMethodsWrap{
  background-color: #fff;
  margin-top: 5px;
 padding: 15px 12px;
}

.PayMethodsWrap .payHeader{
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
}

.PayMethodsWrap .methods button{
  width: 150px;
  height: 40px;
  margin: 0 10px 10px 0;
  border: 1px solid #eeeeee;
}

.PayMethodsWrap .methods button.selected{
  color: #e61754;
  border:1px solid #e61754;
}

</style>
