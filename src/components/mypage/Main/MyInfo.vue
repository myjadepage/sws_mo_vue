<template>
  <div class="myInfoWrap">
    <div class="infoHeader">
      <div class="profile_img"></div>
      <div class="btnBox">
      <button class="profileEditBtn"><span class="ico_edit"></span></button>
      </div>
      <div class="profile_id">{{member.id}}</div>
      <div class="profile_name">{{member.name}}</div>
    </div>
    <div class="infoFooter">
        팔로워 <span class="follower">{{formatFollwer}}</span>
        <span class="dot">·</span>
        팔로잉 <span class="following">{{member.following}}</span>
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
        follower: 10000,
        following: 1500,
        point: 38654
      }
    }
  },
  computed: {
    formatPoint () {
      return this.member.point.toString().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    formatFollwer () {
      let value = this.member.follower
      if (value >= 10000) {
        value = Math.floor(value / 1000) * 0.1
        return value + 'k'
      }

      return value.toString().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }
}
</script>

<style>

</style>
