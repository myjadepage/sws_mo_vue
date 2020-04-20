<template>
  <div class="modalWrap">
      <div class="modalHeader">
        배송비 조건 안내
        </div>
        <div class="modalBody">
          해당 상품은 판매자가 설정한 <br>
          배송비 조건에 따라<br>
          배송비가 달라집니다.
          <br><br>
         <span class="highlight">50,000원 이상 구매시 무료배송</span>
        </div>
        <div @click="modalClose" class="modalFooter">
          닫기
        </div>
  </div>
</template>

<script>
export default {
  methods: {
    modalClose () {
      this.$emit('deliveryClose')
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
