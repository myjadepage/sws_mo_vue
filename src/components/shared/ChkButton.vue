<template>

  <div class="chkButton">
    <input type="checkbox" id="agree" v-model="chk" />
    <label for="agree"><span class="chk_icon"></span>위 내용을 모두 확인하였습니다.</label>
    <div class="btnsWrap">
      <button class="btn_them col1" :disabled="!chk" >탈퇴하기</button>
    </div>
  </div>

</template>

<script>
export default {
  props: ['agreeChk'],
  data () {
    return {
      chk: this.agreeChk
    }
  }
}
</script>

<style>

</style>
