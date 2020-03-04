<template>
   <div class="mypage_headbar">
     <div @click="goBack" class="barClick">
      <span class="ico_back_arr"></span>
          {{val}}
      </div>
  </div>
</template>

<script>
export default {
  props: ['val'],
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
.mypage_headbar{
  font-family: "Noto Sans KR";
  font-size: 16px;
  width: 100%;
  height: 45px;
  line-height: 45px;
  background-color: white;
}

.mypage_headbar .ico_back_arr{
  background: url('../../../assets/img/back_arr@3x.png');
  background-size: 100%;
  float: left;
  margin: 17px 10px 16px 16px;
  width: 17px;
  height: 13px;
}

</style>
