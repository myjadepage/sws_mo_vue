<template>
  <div class="qnaList compBlock compBorderBlock">
    <h3 v-if="pageType==='search'" class="searchResult"><span class="c_them">환불</span>에 대한 <span class="c_them">15</span>개의 검색 결과</h3>
    <ul>
      <li class="item">
        <h3 @click="toggle"><span class="num">1.</span>빠른 <span :class="{'c_them': keyword!=null}">환불</span> 서비스란 무엇인가요?</h3>
        <div class="answer">
          <h4 class="c_them">답변</h4>
          <p>주문서 페이지에서 [쿠폰적용] 버튼을 클릭 한 후 팝업창에서 이용 원하시는 쿠폰을 선택하고 [쿠폰적용]버튼을 누르면 쿠폰 적용이 안료됩니다.</p>
        </div>
      </li>
      <li class="item">
        <h3 @click="toggle"><span class="num">2.</span><span :class="{'c_them': keyword!=null}">환불</span> 되었다고 하는데 통장으로 입금된 돈이 없어요.</h3>
        <div class="answer">
          <h4 class="c_them">답변</h4>
          <p>주문서 페이지에서 [쿠폰적용] 버튼을 클릭 한 후 팝업창에서 이용 원하시는 쿠폰을 선택하고 [쿠폰적용]버튼을 누르면 쿠폰 적용이 안료됩니다.</p>
        </div>
      </li>
      <li class="item">
        <h3 @click="toggle"><span class="num">3.</span>빠른 <span :class="{'c_them': keyword!=null}">환불</span> 서비스란 무엇인가요?</h3>
        <div class="answer">
          <h4 class="c_them">답변</h4>
          <p>주문서 페이지에서 [쿠폰적용] 버튼을 클릭 한 후 팝업창에서 이용 원하시는 쿠폰을 선택하고 [쿠폰적용]버튼을 누르면 쿠폰 적용이 안료됩니다.</p>
        </div>
      </li>
      <li class="item">
        <h3 @click="toggle"><span class="num">4.</span><span :class="{'c_them': keyword!=null}">환불</span> 되었다고 하는데 통장으로 입금된 돈이 없어요.<span :class="{'c_them': keyword!=null}">환불</span> 되었다고 하는데 통장으로 입금된 돈이 없어요.</h3>
        <div class="answer">
          <h4 class="c_them">답변</h4>
          <p>주문서 페이지에서 [쿠폰적용] 버튼을 클릭 한 후 팝업창에서 이용 원하시는 쿠폰을 선택하고 [쿠폰적용]버튼을 누르면 쿠폰 적용이 안료됩니다.</p>
        </div>
      </li>
      <li class="item">
        <h3 @click="toggle"><span class="num">5.</span><span :class="{'c_them': keyword!=null}">환불</span> 되었다고 하는데 통장으로 입금된 돈이 없어요.<span :class="{'c_them': keyword!=null}">환불</span> 되었다고 하는데 통장으로 입금된 돈이 없어요.</h3>
        <div class="answer">
          <h4 class="c_them">답변</h4>
          <p>주문서 페이지에서 [쿠폰적용] 버튼을 클릭 한 후 팝업창에서 이용 원하시는 쿠폰을 선택하고 [쿠폰적용]버튼을 누르면 쿠폰 적용이 안료됩니다.</p>
        </div>
      </li>
    </ul>
    <button class="btn_more" v-if="list.length > 10 && pageType==='search'">더보기</button>
  </div>
</template>

<script>
export default {
  props: ['list', 'pageType', 'keyword'],
  data () {
    return {
    }
  },
  methods: {
    toggle (event) {
      if ($(event.target).next().is(':visible')) {
        $(event.target).parent().css('background', '#fff')
      } else {
        $(event.target).parent().css('background', '#f3f3f3')
      }
      $(event.target).next().slideToggle('fast')
    }
  }
}
</script>

<style>

</style>
