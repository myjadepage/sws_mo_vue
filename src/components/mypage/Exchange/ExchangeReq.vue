<template>
  <form class="exchangeForm">

    <div class="compBlock">
      <h2>교환 상품 정보</h2>
      <dl class="infoBox">
        <dt>상품명</dt>
        <dd>완벽커버 블리블리 수분광 쿠션</dd>
        <dt>구매옵션</dt>
        <dd>21호</dd>
      </dl>
    </div>

    <div class="compBlock">
      <h2>교환 상세 정보</h2>
      <dl class="infoBox">
        <dt class="vt">교환사유</dt>
        <dd>
          <select name="exchangeReason">
            <option value="0">선택해주세요.</option>
            <option value="1">제품상태 불량</option>
            <option value="2">주문 상품과 상이</option>
            <option value="3">단순변심</option>
          </select>
          <textarea name="detailReason" v-model="detailText" class="mt" placeholder="교환 사유를 상세히 입력해 주세요."></textarea>
          <p class="textlength"><span :class="{'c_them': detailText.length>50}">{{detailText.length}}</span>/50</p>
        </dd>
        <dt>배송비</dt>
        <dd><span class="c_them">단순변심</span>일 경우, 왕복 배송비 5,000원</dd>
        <dt>결제방법</dt>
        <dd><span class="c_them">판매자 책임</span>일 경우, 왕복 배송비 판매자 부담</dd>
      </dl>
    </div>

    <div class="compBlock">
      <h2>교환시 주의사항</h2>
      <ul class="noticeBox">
        <li>판매자 귀책사유(상품 하자, 온 배송, 기타)로 요청하셨더라도 상품 확인 결과에 따라 배송비 입금을 요청드릴 수 있습니다.</li>
        <li>상품 재고가 없어 교환이 어려운 경우, 고객님께 안내 후 환불 처리가 될 수 있습니다.</li>
        <li>상품이 사용 혹은 훼손되었거나, 주문 제작 상품일 경우에는 교환이 불가할 수 있습니다.</li>
        <li>추가 문의사항은 푸딩 고객센터(0000-0000) 또는 1:1 문의를 이용해주세요.</li>
      </ul>
    </div>

    <div class="btnsWrap col2 noGutter">
      <button class="btn_cancle btn_them normal" @click.stop.prevent="goBack">취소</button>
      <button class="btn_submit btn_them" @click.stop.prevent="submit">교환요청하기</button>
    </div>

  </form>
</template>

<script>
export default {
  data () {
    return {
      detailText: ''
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    submit () {
      // 유효성검사 후 send

      this.$emit('sent')
    }
  }
}
</script>
