<template>
  <div class="modalWrap">
      <div class="modalHeader">
        재고부족
        </div>
        <div class="modalBody">
          구매할 수 있는 <span class="highlight">재고</span>가 부족합니다.
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
      this.$emit('StockOutClose')
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
