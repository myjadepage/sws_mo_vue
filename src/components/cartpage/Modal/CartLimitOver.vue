<template>
  <div class="modalWrap">
      <div class="modalHeader">
        장바구니
        </div>
        <div class="modalBody">
         장바구니 최대 수량을<br>
        <span class="highlight">초과</span>하였습니다.<br>
        <span class="highlight">최대 100개</span>까지 담기 가능합니다.
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
      this.$emit('CartLimitClose')
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
  z-index: 102;
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
