<template>
  <div class="myInfoWrap">
    <div class="infoHeader">
      <div class="profile_pic">
      <div class="profile_img"></div>
      </div>
      <div class="profile_text">
        <br>
      <div class="profile_id">{{member.id}}</div>
      <div class="profile_name">{{member.name}}</div>
      </div>
      <router-link to="/modifyProfile" class="ico_edit"></router-link>
    </div>
    <div class="infoFooter">
        <router-link to="/Follower">팔로워 <span class="follower">{{formatFollwer(member.follower)}}</span></router-link>
        <span class="dot">·</span>
        <router-link to="/Following">팔로잉 <span class="following">{{formatFollwer(member.following)}}</span></router-link>
        <span class="dot">·</span>
        포인트 <span class="point">{{formatPoint}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      member: {
        id: 'SOOYEON_JUNG',
        name: '뷰티크루_수연',
        follower: 800,
        following: 1500,
        point: 1
      }
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
      return this.member.point.toString().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }
}
</script>

<style>

</style>
