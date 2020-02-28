<template>
<div class="sws_register">
    <h5>
        <span class="circle_dot"></span>
        <span class="circle_dot"></span>
        <span class="circle_dot disable"></span>
        <span class="circle_dot disable"></span>
    </h5>
    <div class="member_con">
        <!-- 일반로그인 -->
        <h2 class="title">기본정보 입력</h2>
        <form action="">
            <h4 class="small_title">아이디 입력</h4>
            <div class="wrap-input100 validate-input" data-validate="아이디를 입력해 주세요">
                <input class="input100" type="text" name="id" placeholder="아이디(6-12자)">
                <span class="focus-input100"></span>
            </div>

            <h4 class="small_title">비밀번호 입력</h4>
            <div class="wrap-input100 validate-input" data-validate="패스워드를 입력해 주세요">
                <input class="input100" type="password" name="password" placeholder="영문, 숫자, 특수문자 혼합 6-12자">
                <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100 validate-input" data-validate="패스워드를 입력해 주세요">
                <input class="input100" type="password" name="password" placeholder="비밀번호 다시 입력">
                <span class="focus-input100"></span>
            </div>

            <h4 class="small_title">이메일 입력</h4>
            <div class="wrap-input100 validate-input" data-validate="이메일 형식에 맞게 입력해 주세요">
                <input class="input100" type="password" name="password" placeholder="이메일 형식에 맞게 입력해 주세요">
                <span class="focus-input100"></span>
            </div>
        </form>
    </div>
     <div class="member_foot">
        <a type="button" herf="" class="btn btn-block btn-dark">다음</a>
      </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
