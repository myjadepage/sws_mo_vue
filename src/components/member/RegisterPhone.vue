<template>
<div class="sws_register">
    <h5>
        <span class="circle_dot"></span>
        <span class="circle_dot"></span>
        <span class="circle_dot"></span>
        <span class="circle_dot disable"></span>
    </h5>
    <div class="member_con">
        <!-- 일반로그인 -->
        <h2 class="title">휴대폰 인증절차</h2>
        <form action="">
            <h4 class="small_title">휴대폰 번호 인증</h4>
            <div class="wrap-input100 validate-input" data-validate="인증번호를 입력해 주세요">
              <input class="input100" type="text" v-model="phone" name="phone" placeholder=" -없이 번호를 입력해 주세요">
              <span class="focus-input100"></span>
              <button type="button" class="btn_send">전송</button>
            </div>
            <div class="wrap-input100 validate-input mb0" data-validate="인증번호를 입력해 주세요">
              <input class="input100" type="text" name="id" placeholder="인증번호 입력(10분 이내)">
              <span class="focus-input100"></span>
              <button type="button" class="btn_send color_main" @click="checkPhone">확인</button>
            </div>

            <ul class="info_text">
              <li><strong  class="color_main">제한시간 09:58</strong></li>
              <li><span>* 인증번호는 1일 최대 5회 발송으로 제한됩니다.</span></li>
            </ul>
            <ul>
         <li>* 본인 확인용 절차이며, 다른 용도로 사용되지 않습니다.</li>
         <li>* 인증번호는 1일 최대 5회 발송으로 제한됩니다.</li>
       </ul>
        </form>
    </div>
     <div class="member_foot">
        <button type="button" class="btn btn-block btn-dark" @click="checkCertifyDone">다음</button>
      </div>
</div>
</template>

<script>
export default {
  methods: {
    checkCertifyDone: function () {
      this.$router.push('/RegStep04')
    }
  }
}
</script>

<style>

</style>
