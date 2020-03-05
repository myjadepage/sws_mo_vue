<template>
<div class="orderStatusWrap">
<div class="staHeader">주문 배송 조회</div>
<div class="staBody">
  <ul>
        <router-link to=""><li class="trackingData"><span class="trackingCnt">{{trackingLists[0].cnt}}</span><div class="trackingSta">{{trackingLists[0].sta}}</div></li></router-link>
        <router-link to=""><li class="trackingData"><span class="trackingCnt">{{trackingLists[1].cnt}}</span><div class="trackingSta">{{trackingLists[1].sta}}</div></li></router-link>
        <router-link to=""><li class="trackingData"><span class="trackingCnt">{{trackingLists[2].cnt}}</span><div class="trackingSta">{{trackingLists[2].sta}}</div></li></router-link>
        <router-link to=""><li class="trackingData"><span class="trackingCnt">{{trackingLists[3].cnt}}</span><div class="trackingSta">{{trackingLists[3].sta}}</div></li></router-link>
        <router-link to=""><li class="trackingData"><span class="trackingCnt">{{trackingLists[4].cnt}}</span><div class="trackingSta">{{trackingLists[4].sta}}</div></li></router-link>
      </ul>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      trackingLists: [{cnt: 0, sta: '주문접수'}, {cnt: 2, sta: '결제완료'}, {cnt: 0, sta: '배송준비중'}, {cnt: 1, sta: '배송중'}, {cnt: 35, sta: '배송완료'}]
    }
  },

  mounted () {
    for (let i = 0; i < this.trackingLists.length; i++) {
      if (this.trackingLists[i].cnt) {
        if (i !== 3) {
          this.$el.getElementsByClassName('trackingCnt')[i].className += ' enabled'
        } else {
          this.$el.getElementsByClassName('trackingCnt')[i].className += ' shipping'
        }
      }
    }
  }

}
</script>

<style>

</style>
