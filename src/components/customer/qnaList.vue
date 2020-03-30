<template>
  <ul class="qnaList compBlock compBorderBlock">
    <li class="item">
      <h3 @click="toggle"><span>1.</span>빠른 환불 서비스란 무엇인가요?</h3>
      <div class="answer">
        <h4 class="c_them">답변</h4>
        <p>주문서 페이지에서 [쿠폰적용] 버튼을 클릭 한 후 팝업창에서 이용 원하시는 쿠폰을 선택하고 [쿠폰적용]버튼을 누르면 쿠폰 적용이 안료됩니다.</p>
      </div>
    </li>
    <li class="item">
      <h3 @click="toggle"><span>2.</span>환불 되었다고 하는데 통장으로 입금된 돈이 없어요.</h3>
      <div class="answer">
        <h4 class="c_them">답변</h4>
        <p>주문서 페이지에서 [쿠폰적용] 버튼을 클릭 한 후 팝업창에서 이용 원하시는 쿠폰을 선택하고 [쿠폰적용]버튼을 누르면 쿠폰 적용이 안료됩니다.</p>
      </div>
    </li>
    <li class="item">
      <h3 @click="toggle"><span>3.</span>빠른 환불 서비스란 무엇인가요?</h3>
      <div class="answer">
        <h4 class="c_them">답변</h4>
        <p>주문서 페이지에서 [쿠폰적용] 버튼을 클릭 한 후 팝업창에서 이용 원하시는 쿠폰을 선택하고 [쿠폰적용]버튼을 누르면 쿠폰 적용이 안료됩니다.</p>
      </div>
    </li>
    <li class="item">
      <h3 @click="toggle"><span>4.</span>환불 되었다고 하는데 통장으로 입금된 돈이 없어요.환불 되었다고 하는데 통장으로 입금된 돈이 없어요.</h3>
      <div class="answer">
        <h4 class="c_them">답변</h4>
        <p>주문서 페이지에서 [쿠폰적용] 버튼을 클릭 한 후 팝업창에서 이용 원하시는 쿠폰을 선택하고 [쿠폰적용]버튼을 누르면 쿠폰 적용이 안료됩니다.</p>
      </div>
    </li>
    <li class="item">
      <h3 @click="toggle"><span>5.</span>환불 되었다고 하는데 통장으로 입금된 돈이 없어요.환불 되었다고 하는데 통장으로 입금된 돈이 없어요.</h3>
      <div class="answer">
        <h4 class="c_them">답변</h4>
        <p>주문서 페이지에서 [쿠폰적용] 버튼을 클릭 한 후 팝업창에서 이용 원하시는 쿠폰을 선택하고 [쿠폰적용]버튼을 누르면 쿠폰 적용이 안료됩니다.</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
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
