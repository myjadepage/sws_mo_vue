<template>
  <div class="modalWrap">
    <h1 class="modalHeader">{{title}}</h1>
    <p class="modalBody">상품이 삭제되었습니다.</p>
    <div class="modalFooter">
      <button @click="modalClose" class="btn_cancle">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    modalClose () {
      this.$emit('deletedClose')
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
    /* width: 100%; */
}

.modalWrap .modalBody .highlight{
  color: #e61754;
}
</style>
