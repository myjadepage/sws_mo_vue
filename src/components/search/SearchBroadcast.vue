<template>
  <div class="searchBroadcastWrap">
      <div class="thumbnailSection">
        <span class="playTime">{{playTime}}</span>
        <img class="brThumbnail" :src="broadcast.thumnailUrl" alt="방송 썸네일">
      </div>
      <div class="infoSection">
          <img class="brandImg" :src="broadcast.brandImageUrl" alt="브랜드 이미지"><span class="brandName">{{broadcast.brandName}}</span><span class="ico_3dot"></span>
          <div class="moreMenu">
              <ul>
                  <li>링크복사</li>
                  <li>신고</li>
              </ul>
          </div>
            <div>{{broadcast.title}}</div>
            <div class="viewAndLike">
                <span class="ico_views"></span>{{broadcast.viewCnt}}
            </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['broadcast'],
  data () {
    return {
      moreMenu: true
    }
  },
  computed: {
    playTime () {
      if (this.broadcast.playTime.substr(0, 2) === '00') {
        return this.broadcast.playTime.substr(3)
      } else {
        return this.broadcast.playTime
      }
    }
  }
}
</script>

<style>
.searchBroadcastWrap{
    border-top: 1px solid #eeeeee;
    background-color: #fff;
    padding: 15px 12px;
    display: inline-block;
    width: 100%;
    /* height: 160px; */
}
.searchBroadcastWrap .infoSection{
position: relative;
margin-left: 170px;
}

.searchBroadcastWrap .brThumbnail{
    width: 160px;
    height: 90px;
    float: left;
}

.searchBroadcastWrap .brandImg{
    width: 34px;
    height: 34px;
    border-radius: 100px;
    margin-right: 5px;
}

.searchBroadcastWrap .brandName{
    font-weight: 500;
    position: relative;
    bottom: 12px;
}

.searchBroadcastWrap .thumbnailSection{
    position: relative;
}

.searchBroadcastWrap .playTime{
    text-align: center;
    position: absolute;
    top:70px;
    left: 116px;
    display: inline-block;
    width: 44px;
    height: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-family: Roboto;
    font-size: 11px;
    font-weight: 500;
    line-height: 20px;
}

.searchBroadcastWrap .viewAndLike{
    margin-top: 10px;
    font-size: 12px;
    color: #999999;
}

.ico_3dot{
    /* float: right; */
    display: inline-block;
    background: url('../../assets/img/ico/ico_3dot.png');
    background-size: 100%;
    width: 3px;
    height: 15px;
    background-repeat: no-repeat;
}
.searchBroadcastWrap .ico_3dot{
    position: absolute;
    top: 0;
    right: 20px;
    cursor: pointer;
}

.ico_views{
    display: inline-block;
    background: url('../../assets/img/ico/ico_views.png');
    background-size: 100%;
    width: 20px;
    height: 13px;
    background-repeat: no-repeat;
    margin-right: 2px;
    position: relative;
    top: 2px;
}

.searchBroadcastWrap .moreMenu{
    z-index: 10;
    background-color: #fff;
    position: absolute;
    top: 0;
    right: 20px;
    width: 150px;
    height: 85px;
    border: 1px solid black;
}

.searchBroadcastWrap .moreMenu li{
    padding-left: 15px;
    height: 42.5px;
    line-height: 42px;
}
</style>
