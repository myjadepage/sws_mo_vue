<template>
  <div class="trackingStatusWrap">
      <ul ref="trackingList">
        <router-link to=""><li class="trackingData"><span class="trackingCnt">{{trackingLists[0].cnt}}</span><div class="trackingSta">{{trackingLists[0].sta}}</div></li></router-link>
        <li><span class="ico_right_progress"></span></li>
        <router-link to=""><li class="trackingData"><span class="trackingCnt">{{trackingLists[1].cnt}}</span><div class="trackingSta">{{trackingLists[1].sta}}</div></li></router-link>
        <li><span class="ico_right_progress"></span></li>
        <router-link to=""><li class="trackingData"><span class="trackingCnt">{{trackingLists[2].cnt}}</span><div class="trackingSta">{{trackingLists[2].sta}}</div></li></router-link>
        <li><span class="ico_right_progress"></span></li>
        <router-link to=""><li class="trackingData"><span class="trackingCnt">{{trackingLists[3].cnt}}</span><div class="trackingSta">{{trackingLists[3].sta}}</div></li></router-link>
      </ul>

  </div>
</template>

<script>
export default {
  data () {
    return {
      trackingLists: [{sta: '결제완료', cnt: 0}, {sta: '상품준비중', cnt: 2}, {sta: '배송중', cnt: 2}, {sta: '배송완료', cnt: 35}]
    }
  },
  mounted () {
    let list = this.$el.getElementsByClassName('trackingData')
    list[this.mode].className += ' selectedMode'
  },
  props: ['mode']
}
</script>

<style>
    .trackingStatusWrap{
      margin-top: 12px;
      padding-top: 21px;
      width: 360px;
      height: 70px;
      background-color: white;
    }
    .trackingStatusWrap ul li {
        text-align: center;
        float: left;
        color: #cccccc;
    }

    .trackingStatusWrap .trackingCnt{
      font-family: Roboto;
      font-size: 22px;
      font-weight: bold;
    }

    .trackingStatusWrap .trackingSta{
        font-family: "Noto Sans KR";
      font-size: 13px;
    }

    .ico_right_progress{
      display: inline-block;
      background: url("../../../assets/img/right_arr@3x.png");
      background-size: 100%;
      width: 7px;
      height: 12px;

    }

    .trackingStatusWrap ul li:nth-child(odd){
      width: 84px;
    }
    .trackingStatusWrap ul li:nth-child(even){
      padding-top: 6px;
      width: 7px;
    }
    .trackingStatusWrap .selectedMode{
      color: #e61754;
    }

</style>
