<template>
  <div class="myInfoWrap">
    <div class="infoHeader">
      <div class="profile_pic">
        <div class="profile_img" :style="{backgroundImage:'url('+member.profileImgUrl+')', backgroundSize:'cover', backgroundPosition:'50%', backgroundRepeat:'no-repeat'}"></div>
        <router-link to="/modifyProfile" class="ico_edit"></router-link>
      </div>
      <div class="profile_text">
        <div class="profile_id">{{member.userId}}</div>
        <div class="profile_name">{{member.nickName}}</div>
      </div>
    </div>
    <div class="infoFooter">
        <router-link to="/Follower">팔로워 <span class="follower">{{formatFollwer(member.followerCnt)}}</span></router-link>
        <span class="dot">·</span>
        <router-link to="/Following">팔로잉 <span class="following">{{formatFollwer(member.followingCnt)}}</span></router-link>
        <span class="dot">·</span>
        <router-link to="/MyPoint">포인트 <span class="point">{{member.point}}</span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['member'],
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
