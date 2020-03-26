<template>
  <div @click="goTop" class="scrollTop">
    <span class="ico_top_arr"></span>
  </div>
</template>

<script>
export default {
  methods: {
    goTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style>
    .scrollTop{
        text-align: center;
        background-color: rgba(255,255,255,.9);
        display: inline-block;
        position: fixed;
        top: 90%;
        left: 80%;
        z-index:105;
        border:1px solid rgba(204, 204, 204,.9);
        border-radius: 30px;
        width: 45px;
        height: 45px;
    }

    .scrollTop .ico_top_arr{
      display: inline-block;
      background: url('../../../assets/img/ico/arrow_top.png');
      background-size: 100%;
      width: 17px;
      height: 21px;
      margin-top:12px;
    }
</style>
