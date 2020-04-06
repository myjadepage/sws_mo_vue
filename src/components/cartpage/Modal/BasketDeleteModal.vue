<template>
  <div class="modalWrap">
    <h1 class="modalHeader">{{title}}</h1>
    <p class="modalBody">상품을 삭제하시겠습니까?</p>
    <div class="modalFooter">
      <button @click="modalClose" class="cancel">취소</button><button @click="deleteConfirm" class="confirm">확인</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    modalClose () {
      this.$emit('deleteClose')
    },
    deleteConfirm () {
      this.$emit('deleteConfirm')
    }
  }
}
</script>

<style>
.cartMainWrap .modalWrap{
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

.cartMainWrap .modalWrap .modalHeader{
  font-size: 16px;
  padding: 15px 0 12px;
  font-weight: 500;
}

.cartMainWrap .modalWrap .modalBody+.modalFooter{
  user-select: none;
  cursor: pointer;
  margin-top: 30px;
  font-size: 15px;
  line-height: 43px;
  height: 43px;
  border-top: 1px solid #eeeeee;
}

.cartMainWrap .modalWrap .modalFooter button{
  height: 100%;
    width: 50%;
}

.cartMainWrap .modalWrap .modalFooter button.confirm{
  color: #e61754;
  border-left: 1px solid #eeeeee;
}

.cartMainWrap .modalWrap .modalBody .highlight{
  color: #e61754;
}
</style>
