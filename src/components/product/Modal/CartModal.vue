<template>
   <div class="modalWrap">
      <div class="modalHeader">
        장바구니에 상품이 담겼습니다.
        </div>
        <div class="modalBody">
          장바구니를 확인 하시겠습니까?
          <br><br>
        </div>
        <div  class="modalFooter">
            <button class="goCart" @click="goCartClick">확인</button><button @click="modalClose" >닫기</button>
        </div>
  </div>
</template>

<script>
export default {
  methods: {
    modalClose () {
      this.$emit('cartModalClose')
    },
    goCartClick () {
      this.$router.push('/cart')
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
  transition: ease-in-out 1s;
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

.modalWrap .modalFooter button{
  height: 100%;
    width: 50%;
}

.modalWrap .modalFooter button.goCart{
  color: #e61754;
  border-right: 1px solid #eeeeee;
}

.modalWrap .modalBody .highlight{
  color: #e61754;
}
</style>
