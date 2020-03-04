<template>
  <div class="memberWrap">
    <Bar :val="title"></Bar>
      <div class="sws_register">
          <h5></h5>
      <div class="member_con member_done">
          <h2 class="title_done">
              WELCOME
          </h2>
          <p>쉘위샵 회원가입을 축하드립니다.</p>
      </div>
      <div class="member_foot">
      <a type="button" class="btn btn-block btn-main" href="/" >시작하기</a>
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
      title: '회원가입'
    }
  }
}
</script>

<style scope>

</style>
