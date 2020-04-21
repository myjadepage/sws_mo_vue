<template>
<div id="swsHead" class="head_sws common-header">
    <div class="wrap_tit common-header-title">
        <h2 class="tit_svc">
            <span class="txt_svc" id="textHeaderTitle"></span>
        </h2>
    </div>
    <div class="wrap_util">
        <div class="box_menu_left">
            <router-link to="/MyPage" id="btnSideMenu" class="btn_menu common-header-menu" role="button"
               v-if="$store.state.isLogin === true">
                <span class="sws_icon ico_menu">메뉴</span>
            </router-link>
            <router-link to="/Login" id="btnSideMenu" class="btn_menu common-header-menu" role="button"
               v-else>
                <span class="sws_icon ico_menu">메뉴</span>
            </router-link>
            <router-link to="/" id="swsLogo" class="tit_main tit_main_logo" role="button">
                <span class="screen_out">shallweshop</span>
            </router-link>
        </div>
        <div class="box_menu_right">
            <div class="wrap_btn_search common-header-search">
                <router-link to="/search" id="btnSearchTop" class="link_search" role="button">
                    <span class="sws_icon ico_search">검색</span>
                </router-link>
            </div>
            <!-- <div class="wrap_btn_search common-header-search" v-if="$store.state.isLogin === true"> -->
            <div class="wrap_btn_search common-header-search" >
                 <router-link to="/cart" id="btnSearchTop" class="link_search cart" role="button">
                    <span v-if="baskets.length > 0" class="cartBadge">{{baskets.length}}</span>
                </router-link>
            </div>
            <!-- <div class="wrap_btn_search common-header-search" v-else>
                 <router-link to="/Login" id="btnSearchTop" class="link_search" role="button">
                    <span class="sws_icon ico_login">로그인</span>
                </router-link>
            </div> -->
        </div>
    </div>
</div>
</template>

<script>
import { getCartItem, getAccessToken } from '@/api/index.js'

export default {
  name: 'Header',
  data () {
    return {
      baskets: []
    }
  },
  beforeMount () {
    if (sessionStorage.getItem('accessToken')) {
      getCartItem(sessionStorage.getItem('accessToken'))
        .then(res => {
        //   console.log(res)
          if (res.data.jsonData.resultCode === '0001') {
            this.baskets = res.data.jsonData.baskets
          }
        })
        .catch(err => {
          console.log(err)
          if (err.response.status === 401) {
            getAccessToken(sessionStorage.getItem('refreshToken'))
              .then(res => {
                sessionStorage.setItem('accessToken', res.data.jsonData.accessToken)
                getCartItem(sessionStorage.getItem('accessToken'))
                  .then(res => {
                  //   console.log(res)
                    if (res.data.jsonData.resultCode === '0001') {
                      this.baskets = res.data.jsonData.baskets
                    }
                  })
                  .catch(err => {
                    console.log(err)
                  })
              })
              .catch(err => {
                if (err.response.status === 401) {
                  this.$store.dispatch('logOut')
                  this.$router.push('/Login')
                }
              })
          }
        })
    }
  }
}
</script>

<style scope>
.head_sws .common-header-logo{display:block}
.head_sws .common-header-title{display:none}
.head_sws .common-header-back{display:none}
.head_sws .common-header-home{display:none}
.head_sws .common-header-menu{display:block}
.head_sws .common-header-search{display:block}
.bm-burger-button {
  position: absolute;
  width: 30px;
  height: 30px;
  left: 10px;
  top: 0px;
  cursor: pointer;
}

</style>
