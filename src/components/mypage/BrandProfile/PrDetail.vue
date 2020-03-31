<template>
  <section class="prDetail">

    <div class="util">
      <button class="back ico_back_arr" @click="goBack"><span class="ir_pm">뒤로가기</span></button>
      <div class="tools">
        <button class="btn_follow"><span class="ir_pm"></span></button>
        <button class="btn_like"><span class="ir_pm"></span></button>
        <button class="btn_etc" @click="openEtcMenu"><span class="ir_pm">기타 메뉴 열기</span></button>
        <ul class="etc_menu" v-if="etcMenu">
          <li>
            <router-link to="">신고하기</router-link>
          </li>
          <li>
            <button>라이브 알림 설정</button>
          </li>
        </ul>
      </div>
    </div>

    <div class="pic">
      <div class="imgBox" :style="{backgroundImage:'url(/static/images/temp_profile3.jpg)', backgroundSize:'cover', backgroundPosition:'50%',backgroundRepeat:'no-repeat'}"></div>
      <h2>SOOYEON_JUNG</h2>
    </div>

    <div class="followInfo">
      <router-link to="/Follower" class="btn_follower">팔로워 1.5K</router-link>
      <router-link to="/FOllowing" class="btn_following">팔로잉 1.5K</router-link>
      <router-link to="" class="btn_like">좋아요 1.5K</router-link>
    </div>

    <div class="profileInfo">
      <h3>최고의 상품을 위해 최선을 다하는 쉘위샵 라이브 크루 써니입니다.</h3>
      <ul class="hashTags">
        <li>메이크업신동</li>
        <li>코랄핑크덕후</li>
        <li>태그영역</li>
      </ul>
      <p><a href="https://www.shallwe.shop/sooyeon_jung">https://www.shallwe.shop/sooyeon_jung</a><br/>에서 영상을 확인하실 수 있습니다.</p>
    </div>

  </section>
</template>

<script>
export default {
  data () {
    return {
      etcMenu: false
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    openEtcMenu () {
      this.etcMenu = !this.etcMenu
    }
  }
}
</script>

<style>

</style>
