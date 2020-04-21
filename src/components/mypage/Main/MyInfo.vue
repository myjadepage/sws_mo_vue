<template>
  <div class="myInfoWrap">
    <div class="infoHeader">
      <div class="profile_pic">
        <div class="profile_img" :style="{backgroundImage:'url('+member.profileImgUrl+')', backgroundSize:'cover', backgroundPosition:'50%', backgroundRepeat:'no-repeat'}"></div>
      </div>
      <div class="profile_text">
        <div class="profile_name">{{member.nickName}}</div>
      </div>
      <div class="profile_btn">
        <router-link to="/AlertList" class="alarm_button">7</router-link>
        <router-link to="" class="like_button">{{picks.length}}</router-link>
      </div>
    </div>
    <div class="infoFooter">
        <!-- <router-link to="/Follower">팔로워 <span class="follower">{{formatFollwer(member.followerCnt)}}</span></router-link>
        <span class="dot">·</span>
        <router-link to="/Following">팔로잉 <span class="following">{{formatFollwer(member.followingCnt)}}</span></router-link>
        <span class="dot">·</span> -->
        <router-link to="/Coupon">쿠폰 <span class="coupon">3</span></router-link>
        <router-link to="/MyPoint">포인트 <span class="point">{{member.point}}</span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['member', 'picks'],
  data () {
    return {
    }
  },
  methods: {
    formatFollwer (num) {
      let value = num
      if (value >= 1000) {
        value = Math.floor(value / 100) * 0.1
        return value + 'k'
      }

      return value.toString().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  computed: {
    formatPoint () {
      return this.point.toString().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }
}
</script>

<style>

</style>
