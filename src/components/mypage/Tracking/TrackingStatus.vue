<template>
  <div class="trackingStatusWrap">
        <router-link to=""><span class="trackingData"><span class="trackingCnt">{{trackingLists[0].cnt}}</span><div class="trackingSta">{{trackingLists[0].sta}}</div></span></router-link>
        <span class="ico_right_progress"></span>
        <router-link to=""><span class="trackingData"><span class="trackingCnt">{{trackingLists[1].cnt}}</span><div class="trackingSta">{{trackingLists[1].sta}}</div></span></router-link>
        <span class="ico_right_progress"></span>
        <router-link to=""><span class="trackingData"><span class="trackingCnt">{{trackingLists[2].cnt}}</span><div class="trackingSta">{{trackingLists[2].sta}}</div></span></router-link>
        <span class="ico_right_progress"></span>
        <router-link to=""><span class="trackingData"><span class="trackingCnt">{{trackingLists[3].cnt}}</span><div class="trackingSta">{{trackingLists[3].sta}}</div></span></router-link>
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

</style>
