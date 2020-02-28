<template>
  <div class="member_con">
      <div class="content">
            <h4>새 비밀번호 설정</h4>
            <div class="wrap-input100 validate-input" data-validate="비밀번호를 입력해 주세요">
              <input class="input100" type="text" name="id" placeholder="새 비밀번호 8-20자이내로 입력해 주세요">
              <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100 validate-input mb0" data-validate="인증번호를 입력해 주세요">
              <input class="input100" type="text" name="id" placeholder="새 비밀번호를 다시 입력해 주세요">
              <span class="focus-input100"></span>
            </div>

            <ul class="form_item_wrap info_tex">
              <li><span>영문, 숫자, 특수문자 혼합하여 입력해 주세요.</span></li>
            </ul>
             <button type="button" class="btn btn-block btn-dark">확인</button>
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
