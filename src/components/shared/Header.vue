<template>
<div id="swsHead" class="head_sws common-header #GNB">
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
            <a href="javascript:moveBack()" id="btnBackTop" onclick="tiaraPush('back', 'global_module');" role="button" class="btn_back #back common-header-back">
                <span class="ico_makers_v1 ico_back">뒤로가기</span>
            </a>
            <a href="/" id="btnHomeTop" onclick="tiaraPush('mov_home', 'global_module');" role="button" class="btn_home #home common-header-home">
                <span class="ico_makers_v1 ico_home">홈으로</span>
            </a>
            <a href="javascript:toggleSideMenuVue()" id="btnSideMenu" class="btn_menu #side common-header-menu" onclick="tiaraPush('drawer', 'global_module');" role="button">
                <span class="ico_makers_v1 ico_menu">메뉴</span>
            </a>
        </div>
        <div class="box_menu_right">
            <div class="wrap_btn_search common-header-search">
                <a href="/search" id="btnSearchTop" onclick="tiaraPush('mov_search', 'global_module');" class="link_search #search" role="button">
                    <span class="ico_makers_v1 ico_search">검색</span>
                </a>
            </div>

            <div class="wrap_btn_close common-header-close">
                <a href="javascript:onCloseWebViewClick();" id="btnCloseTop" class="btn_close #close" role="button">
                    <span class="ico_makers_v1 ico_close">닫기</span>
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
</style>
