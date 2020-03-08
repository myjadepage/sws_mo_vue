<template>
<div>
  <div id="tabs" class="member_con">
      <ul class="tabs">
          <li :class="[activetab === 1 ? 'active' : '']"><a v-on:click="activetab=1" >연락처로 찾기</a></li>
          <li :class="[activetab === 2 ? 'active' : '']"><a v-on:click="activetab=2" >이메일로 찾기</a></li>
      </ul>
      <div class="content">
          <!-- 1.등록된 휴대폰으로 아이디찾기 -->
          <div v-if="activetab === 1" class="tabcontent">
            <h4>아이디 입력</h4>
            <div class="wrap-input100 mb0">
              <input class="input100" type="text" name="id" placeholder="아이디를 입력해 주세요">
              <span class="focus-input100"></span>
            </div>

            <h4>휴대폰번호 본인인증</h4>
            <div class="wrap-input100">
              <input class="input100" type="text" name="id" placeholder=" -없이 번호를 입력해 주세요">
              <span class="focus-input100"></span>
              <button type="button" class="btn_send">전송</button>
            </div>
            <div class="wrap-input100 mb0">
              <input class="input100" type="text" name="id" placeholder="인증번호 입력(10분 이내)">
              <span class="focus-input100"></span>
              <button type="button" class="btn_send color_main">확인</button>
            </div>

            <ul class="form_item_wrap info_text">
              <li><strong  class="color_main">제한시간 09:58</strong></li>
              <li><span>* 인증번호는 1일 최대 5회 발송으로 제한됩니다.</span></li>
            </ul>
          </div>

          <!-- 2.등록된 이메일로 아이디 찾기 -->
          <div v-if="activetab === 2" class="tabcontent">
              <h4>아이디 입력</h4>
              <div class="wrap-input100 mb0">
              <input class="input100" type="text" name="id" placeholder="아이디를 입력해 주세요">
              <span class="focus-input100"></span>
            </div>

            <h4>이메일로 본인인증</h4>
            <div class="wrap-input100">
              <input class="input100" type="text" name="id" placeholder="">
              <span class="focus-input100"></span>
              <button type="button" class="btn_send">전송</button>
            </div>
            <div class="wrap-input100 mb0">
              <input class="input100" type="text" name="id" placeholder="인증번호 입력(10분 이내)">
              <span class="focus-input100"></span>
              <button type="button" class="btn_send color_main">확인</button>
            </div>

            <ul class="form_item_wrap info_text">
              <li><strong  class="color_main">제한시간 09:58</strong></li>
              <li><span>* 인증번호는 1일 최대 5회 발송으로 제한됩니다.</span></li>
            </ul>
          </div>
      </div>
  </div>

  <!-- 공통아래 -->
  <div class="member_foot">
       <ul>
         <li>* 본인 확인용 절차이며, 다른 용도로 사용되지 않습니다.</li>
         <li>* 인증번호는 1일 최대 5회 발송으로 제한됩니다.</li>
       </ul>
       <p>SNS 간편가입을 통해 가입하신 경우, 아이디/비밀번호 문의는 해당 SNS 서비스를 통해 이용 가능합니다.</p>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      activetab: 1
    }
  }
}
</script>

<style>
.tabs {
  width: 100%;
  overflow: hidden;
  text-align: center;
}
.tabs li{
  display: inline-block;
  width: 49.5%;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  background-color: #fff;
}
.tabs li a{
  display: block;
  padding: 12px 24px;
}
.tabs li.active{
  color: #e61754;
  border-bottom: 4px solid #e61754;
}
.content h4{
  padding: 40px 0 10px;
  text-align: left;
  font-weight: 400;
}
.btn_send{
    position: absolute;
    right: 0;
    top:10px;
}
</style>
