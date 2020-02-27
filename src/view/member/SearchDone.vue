<template>
  <div class="memberWrap">
    <Bar :val="title"></Bar>
      <div class="member_con">
          <p class="done_text">고객님의 아이디는 <strong>shallweshop</strong> 입니다.</p>
          <div class="btn_center">
            <a type="button" class="btn btn-dark" href="/Searchpw">비밀번호 찾기</a>
            <a type="button" class="btn btn-main" href="/Login" >로그인</a>
          </div>
      </div>
</div>
</template>

<script>
import Bar from '@/components/member/Bar'
export default {
  components: {
    Bar
  },
  data () {
    return {
      title: '아이디 찾기'
    }
  }
}
</script>

<style>

</style>
