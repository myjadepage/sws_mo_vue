<template>
  <div class="subBarWrap">
      <router-link to="/mypage"><span class="ico_menu"></span> </router-link>
      <div class="barLogo"><router-link to="/"><span class="ico_logo"></span></router-link><router-link to="/cart"><span class="ico_cart"></span></router-link>
      <router-link to="/search"><span class="ico_search"></span></router-link></div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.subBarWrap{
    padding: 10.5px 24px;
}

.subBarWrap .barLogo{
    text-align: center;
}

.subBarWrap .ico_menu{
    float: left;
    width: 20px;
    height: 20px;
    background: url('../../../assets/img/ico_sws.png');
    background-repeat: no-repeat;
    background-size: 140px 200px;
    background-position: -100px -20px
}

.subBarWrap .ico_logo{
    display: inline-block;
    width: 50px;
    height: 19px;
    background: url('../../../assets/img/sws-bi-black@3x.png');
    background-repeat: no-repeat;
    background-size: 100%;
}
.subBarWrap .ico_search{
    float: right;
    width: 18px;
    height: 19px;
    background: url('../../../assets/img/ico_sws.png');
    background-repeat: no-repeat;
    background-size: 140px 200px;
    background-position: -120px -20px;
    position: relative;
    right: 30px;
}
.subBarWrap .ico_cart{
    float: right;
    width: 17px;
    height: 20px;
    background: url('../../../assets/img/ico/uncart.png');
    background-repeat: no-repeat;
    background-size: 100%;
    position: relative;
    bottom: 1px;
}

</style>
