<template>
   <div class="mypage_headbar">
     <span class="ico_back_arr"></span>
          {{val}}
  </div>
</template>

<script>
export default {
  props: ['val']
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
