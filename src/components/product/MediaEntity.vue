<template>
  <div class="mediaEntityWrap">
      <div class="thumbnailSection" @click="play(idx)">
          <img :src="media.thumbNailUrl" alt="" >
          <span class="time">{{media.mediaLength}}</span>
      </div>
      <div class="titleSection">
          <div class="title">
              #{{media.title}}
          </div>
      </div>
          <span class="playBtn"></span>
  </div>
</template>

<script>
export default {
  props: ['media', 'idx'],
  methods: {
    play (idx) {
      this.$emit('play', idx)
    }
  }
}

</script>

<style>
    .mediaEntityWrap{
        background-color: #fff;
        height: 112px;
        margin-bottom: 21px;
    }

    .titleSection{
        padding: 15px  0 0 15px;
        background-color: #fff;
    }

    .titleSection .title{
        text-align: right;
        display: inline-block;
        width: 60px;
        height: 60px;
        margin-left: 15px;
    }

    .mediaEntityWrap .thumbnailSection{
        position: relative;
        float: left;
        width: 200px;
        height: 112px;
        background-color: skyblue;
    }

    .mediaEntityWrap .thumbnailSection img{
        width:100%;
    }

    .mediaEntityWrap .playBtn{
        float: right;
        position: relative;
        right: 20px;
        background: url('../../assets/img/ico/btn_play.png');
        background-size: 100%;
        width: 13px;
        height: 16px;
    }

    .mediaEntityWrap .time{
        position: absolute;
        right: 6px;
        bottom: 6px;
        display: inline-block;
        line-height: 20px;
        text-align: center;
        width: 40px;
        height: 20px;
        font-family: Roboto;
        font-size: 12px;
        background: rgba(0, 0, 0, 0.7);
        color: #fff;

    }
</style>
