<template>
<div id="swsHead" class="head_sws common-header">
    <div class="wrap_tit common-header-logo">
        <a href="/" id="swsLogo" class="tit_main tit_main_logo" role="button">
            <span class="screen_out">shallweshop</span>
        </a>
    </div>
    <div class="wrap_tit common-header-title">
        <h2 class="tit_svc">
            <span class="txt_svc" id="textHeaderTitle"></span>
        </h2>
    </div>
    <div class="wrap_util">
        <div class="box_menu_left">
            <a href="javascript:moveBack()" id="btnBackTop" role="button" class="btn_back common-header-back">
                <span class="ico_sws ico_back">뒤로가기</span>
            </a>
            <a href="/" id="btnHomeTop" role="button" class="btn_home common-header-home">
                <span class="ico_sws ico_home">홈으로</span>
            </a>
            <!-- <a href="javascript:toggleSideMenuVue()" id="btnSideMenu" class="btn_menu common-header-menu" role="button">
                <span class="ico_sws ico_menu">메뉴</span>
            </a> -->
            <div ref="sideNav" class="bm-menu">
                <span class="bm-cross-button cross-style" @click="closeMenu" :class="{ hidden: !crossIcon }">
                    <span v-for="(x, index) in 2"
                        :key="x" class="bm-cross"
                        :style="{ position: 'absolute', width: '3px', height: '14px',transform: index === 1 ? 'rotate(45deg)' : 'rotate(-45deg)'}"
                    >
                    </span>
                </span>
                <nav class="bm-item-list">
                    <a href="#"><span>구매내역</span></a>
                    <a href="#"><span>선물함</span></a>
                    <a href="#"><span>취소/환불/교환 내역</span></a>
                    <a href="#"><span>찜한상품</span></a>
                    <a href="#"><span>최근본상품</span></a>
                    <a href="#"><span>상품문의/답변(0)</span></a>
                </nav>
            </div>
            <div ref="bmBurgerButton" class="bm-burger-button" @click="openMenu" :class="{ hidden: !burgerIcon }">
                <a id="btnSideMenu" class="btn_menu common-header-menu" role="button">
                <span class="ico_sws ico_menu">메뉴</span>
            </a>
            </div>
        </div>
        <div class="box_menu_right">
            <div class="wrap_btn_search common-header-search">
                <a href="/search" id="btnSearchTop" class="link_search" role="button">
                    <span class="ico_sws ico_search">검색</span>
                </a>
            </div>
            <div class="wrap_btn_search common-header-search">
                 <a href="/" id="btnSearchTop" class="link_search" role="button">
                    <span class="ico_sws ico_basket">장바구니</span>
                </a>
            </div>

            <div class="wrap_btn_close common-header-close">
                <a href="javascript:onCloseWebViewClick();" id="btnCloseTop" class="btn_close" role="button">
                    <span class="ico_sws ico_close">닫기</span>
                </a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      isSideBarOpen: false
    }
  },
  props: {
    isOpen: {
      type: Boolean,
      required: false
    },
    width: {
      type: [String],
      required: false,
      default: '100'
    },
    disableEsc: {
      type: Boolean,
      required: false
    },
    onStateChange: {
      type: Function,
      required: false
    },
    burgerIcon: {
      type: Boolean,
      required: false,
      default: true
    },
    crossIcon: {
      type: Boolean,
      required: false,
      default: true
    },
    disableOutsideClick: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    openMenu () {
      this.$emit('openMenu')
      this.isSideBarOpen = true

      this.$nextTick(function () {
        this.$refs.sideNav.style.width = this.width
          ? this.width + '%'
          : '100%'
      })
    },

    closeMenu () {
      this.$emit('closeMenu')
      this.isSideBarOpen = false
      this.$refs.sideNav.style.width = '0px'
    },

    closeMenuOnEsc (e) {
      e = e || window.event
      if (e.key === 'Escape' || e.keyCode === 27) {
        this.closeMenu()
      }
    },
    documentClick (e) {
      let element = this.$refs.bmBurgerButton
      let target = null
      if (e && e.target) {
        target = e.target
      }

      if (
        element &&
            element !== target &&
            !element.contains(target) &&
            e.target.className !== 'bm-menu' &&
            this.isSideBarOpen &&
            !this.disableOutsideClick
      ) {
        this.closeMenu()
      }
    }
  },

  mounted () {
    if (!this.disableEsc) {
      document.addEventListener('keyup', this.closeMenuOnEsc)
    }
  },
  created: function () {
    document.addEventListener('click', this.documentClick)
  },
  destroyed: function () {
    document.removeEventListener('keyup', this.closeMenuOnEsc)
    document.removeEventListener('click', this.documentClick)
  },
  watch: {
    isOpen: {
      deep: true,
      immediate: true,
      handler (newValue, oldValue) {
        this.$nextTick(() => {
          if (!oldValue && newValue) {
            this.openMenu()
          }
          if (oldValue && !newValue) {
            this.closeMenu()
          }
        })
      }
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
.cross-style {
  position: absolute;
  top: 12px;
  left: 20px;
  cursor: pointer;
}
.bm-cross {
  background: #000;
}
.bm-cross-button {
  height: 24px;
  width: 24px;
}
.bm-cross-button.hidden {
  display: none;
}
.bm-menu {
      height: 100vh; /* 100% Full-height */
      width:0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background-color: rgb(255, 255, 255); /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
       -webkit-overflow-scrolling: touch;
       -webkit-transition: -webkit-transform 0.15s ease-in-out;
      transition: 0.15s ease-in-out; /*0.5 second transition effect to slide in the sidenav*/
    }
.bm-item-list {
  color: #000;
  margin-left: 10%;
  font-size: 14px;
}
.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 0.7em;
}
.bm-item-list > * > span {
  margin-left: 10px;
  color: #000;
}
</style>
