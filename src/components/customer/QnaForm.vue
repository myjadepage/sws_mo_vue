<template>
  <section class="qnaForm">
    <h2>문의하기</h2>
    <form action="">
      <select name="qnaType">
        <option value="">문의 유형을 선택해 주세요(필수)</option>
        <option value="0">배송</option>
        <option value="1">교환/취소/환불</option>
        <option value="2">서비스</option>
        <option value="3">기타</option>
      </select>
      <select name="qnaDetailType">
        <option value="">세부 유형을 선택해 주세요(필수)</option>
        <option value="0">물품파손</option>
        <option value="1">옵션 잘못 선택</option>
        <option value="2">개인 변심</option>
      </select>
      <div class="row">
        <input type="text" name="orderNum" id="orderNum" placeholder="주문번호" v-model="num"/>
        <button class="btn_them border btn_search" @click.stop.prevent="lookup" >상품조회</button>
      </div>
      <textarea name="qnaDesc" placeholder="문의 내용을 입력해 주세요."></textarea>
      <div class="btnsWrap">
        <button class="btn_them gray border btn_cancle col2" @click.stop.prevent="cancle">취소</button>
        <button class="btn_them btn_submit col2">문의하기</button>
      </div>
    </form>

  </section>
</template>

<script>
export default {
  props: ['lookupNum'],
  data () {
    return {
      num: ''
    }
  },
  methods: {
    cancle () {

    },
    lookup () {
      this.$emit('lookup', this.num)
    }
  }
}
</script>

<style>

</style>
