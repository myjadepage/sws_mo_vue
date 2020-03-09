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
            <a href="/" id="btnBackTop" role="button" class="btn_back common-header-back">
                <span class="ico_sws ico_back">뒤로가기</span>
            </a>
            <a href="/" id="btnHomeTop" role="button" class="btn_home common-header-home">
                <span class="ico_sws ico_home">홈으로</span>
            </a>
            <a href="/mypage" id="btnSideMenu" class="btn_menu common-header-menu" role="button">
                <span class="ico_sws ico_menu">메뉴</span>
            </a>
        </div>
        <div class="box_menu_right">
            <div class="wrap_btn_search common-header-search">
                <a href="/search" id="btnSearchTop" class="link_search" role="button">
                    <span class="ico_sws ico_search">검색</span>
                </a>
            </div>
            <div class="wrap_btn_search common-header-search">
                 <a href="/Login" id="btnSearchTop" class="link_search" role="button">
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
  name: 'Header'
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
