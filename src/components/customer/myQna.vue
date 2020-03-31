<template>
  <ul class="questionList">
    <li class="item" :class="{'on':list[0].viewAble}">
      <button @click="toggle(0)">
        <p class="date">2020.02.11 <span>배송</span></p>
        <div class="row">
          <p class="state yet" :class="{'open':list[0].viewAble}"></p>
          <h3 class="title">발송 되었나요? 언제 배송되나요?</h3>
        </div>
      </button>
    </li>
    <li class="item" :class="{'on':list[1].viewAble}">
      <button @click="toggle(1)">
        <p class="date">2020.02.11 <span>취소/반품/교환</span></p>
        <div class="row">
          <p class="state fin" :class="{'open':list[1].viewAble}"></p>
          <h3 class="title">할인 기간은 언제까지에요? 할인 기간은 언제까지에요?할인 기간은 언제까지에요?</h3>
        </div>
      </button>
      <div class="answerBox" v-if="list[1].viewAble">
        <div class="orderInfo">
          <div class="imgBox" :style="{backgroundImage:'url(/static/images/temp_weekly_02.png)', backgroundPosition: '50% 50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }"></div>
          <div class="txtBox">
            <p class="orderNumb">2020.01.01 주문번호: 12345678</p>
            <p class="orderName">[헤라] 센슈얼 립 세럼 글로우 1호 + 클렌징 오일 정품 50ml 추가증정</p>
          </div>
        </div>
        <h4 class="c_them">답변</h4>
        <p>안녕하세요 고객님<br/>불편을 드려 대단히 죄송합니다.<br/>대한통운 착불로 상품 보내주시면 확인 후 그레이컬러로 교환 진행 도와드리겠습니다. 감사합니다.</p>
      </div>
    </li>
    <li class="item" :class="{'on':list[2].viewAble}">
      <button @click="toggle(2)">
        <p class="date">2020.02.11 <span>서비스/기타</span></p>
        <div class="row">
          <p class="state yet" :class="{'open':list[2].viewAble}"></p>
          <h3 class="title">발송 되었나요? 언제 배송되나요?</h3>
        </div>
      </button>
    </li>
    <li class="item" :class="{'on':list[3].viewAble}">
      <button @click="toggle(3)">
        <p class="date">2020.02.11 <span>서비스/기타</span></p>
        <div class="row">
          <p class="state fin" :class="{'open':list[3].viewAble}"></p>
          <h3 class="title">발송 되었나요? 언제 배송되나요?</h3>
        </div>
      </button>
      <div class="answerBox" v-if="list[3].viewAble">
        <div class="orderInfo">
          <div class="imgBox" :style="{backgroundImage:'url(/static/images/temp_weekly_02.png)', backgroundPosition: '50% 50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }"></div>
          <div class="txtBox">
            <p class="orderNumb">2020.01.01 주문번호: 12345678</p>
            <p class="orderName">[헤라] 센슈얼 립 세럼 글로우 1호 + 클렌징 오일 정품 50ml 추가증정</p>
          </div>
        </div>
        <h4 class="c_them">답변</h4>
        <p>안녕하세요 고객님<br/>불편을 드려 대단히 죄송합니다.<br/>대한통운 착불로 상품 보내주시면 확인 후 그레이컬러로 교환 진행 도와드리겠습니다. 감사합니다.</p>
      </div>
    </li>
    <li class="item" :class="{'on':list[4].viewAble}">
      <button @click="toggle(4)">
        <p class="date">2020.02.11 <span>배송</span></p>
        <div class="row">
          <p class="state yet" :class="{'open':list[4].viewAble}"></p>
          <h3 class="title">발송 되었나요? 언제 배송되나요? 발송 되었나요? 언제 배송되나요?</h3>
        </div>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['list'],
  data () {
    return {
    }
  },
  methods: {
    toggle (idx) {
      this.list[idx].viewAble = !this.list[idx].viewAble
    }
  }
}
</script>

<style>

</style>
