<template>
  <div class="mediaEntityWrap">
        <div class="thumbnailSection" @click="play(idx)">
            <img :src="media.thumbNailUrl" alt="" >
            <span class="time">{{media.mediaLength}}</span>
        </div>
        <div class="titleSection">
            <p class="title" v-html="media.title"></p>
        </div>
        <button class="playBtn"></button>
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
        position:relative;
        overflow:hidden;
        width:100%;
        height: 112px;
        margin-top: 21px;
        background-color: #fff;
    }
    .subMediaWrap .mediaEntityWrap:first-child{
        margin-top:0;
    }

    .titleSection{
        float:left;
        width:calc(100% - 200px);
        padding: 15px  0 0 15px;
        background-color: #fff;
        box-sizing: border-box;
    }

    .titleSection .title{
        position: relative;
        display: inline-block;
        padding-left:10px;
        padding-right:35px;
        word-break:keep-all;
    }
    .titleSection .title:before{
        content:'#';
        display:block;
        position:absolute;
        top:0;
        left:0;
    }

    .mediaEntityWrap .thumbnailSection{
        position:relative;
        float:left;
        width: 200px;
        height: 112px;
        background-color: skyblue;
    }

    .mediaEntityWrap .thumbnailSection img{
        width:100%;
    }

    .mediaEntityWrap .playBtn{
        position: absolute;
        bottom:20px;
        right: 20px;
        width: 13px;
        height: 16px;
        background: url('../../assets/img/ico/btn_play.png');
        background-size: 100%;
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
