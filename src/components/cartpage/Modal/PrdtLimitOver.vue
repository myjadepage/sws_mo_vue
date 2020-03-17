<template>
  <div class="modalWrap">
      <div class="modalHeader">
        구매수량 초과
        </div>
        <div class="modalBody">
          최대 구매수량을 <span class="highlight">초과</span>하였습니다.
        </div>
        <div @click="modalClose" class="modalFooter">
          확인
        </div>
  </div>
</template>

<script>
export default {
  methods: {
    modalClose () {
      this.$emit('prdtLimitClose')
    }
  }
}
</script>

<style>
.modalWrap{
  position: fixed;
  width: 80%;
  top: 30%;
  left: 10%;
  z-index: 100;
  border-radius: 8px;
  text-align: center;
  background-color: #fff;
}

.modalWrap .modalHeader{
  font-size: 16px;
  padding: 15px 0 12px;
  font-weight: 500;
}

.modalWrap .modalBody+.modalFooter{
  user-select: none;
  cursor: pointer;
  margin-top: 30px;
  font-size: 15px;
  line-height: 43px;
  height: 43px;
  border-top: 1px solid #eeeeee;
}

.modalWrap .modalBody .highlight{
  color: #e61754;
}
</style>
