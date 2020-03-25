<template>
  <div class="modalWrap">
    <h1 class="modalHeader">교환 상품 정보</h1>
    <div class="modalBody exchangeModal">
      <form>
        <dl class="exchangeInfo">
          <dt>상품명</dt>
          <dd>완벽 커버 블리블리 수분광 쿠션</dd>
          <dt>구매옵션</dt>
          <dd>21호</dd>
          <dt>수량선택</dt>
          <dd>
            <select name="amount">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </dd>
        </dl>
      </form>
      <p class="modalNotice">
        <span class="c_them">재고가 품절인 경우 환불될 수 있습니다.</span><br/>
        계속 진행을 원하실 경우<br/>
        [선택완료] 버튼을 클릭해주세요.
      </p>
    </div>
    <div class="btnsWrap col2">
      <button @click="modalClose" class="btn_cancle">취소</button>
      <button @click.stop.prevent="submit()" class="btn_submit">선택완료</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    modalClose () {
      this.$emit('closeRequest')
    },
    submit () {
      this.$router.push('/ExchangeReq')
    }
  }
}
</script>
