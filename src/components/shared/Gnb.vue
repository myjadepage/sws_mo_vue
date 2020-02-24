<template>
<div class="common-header-gnb-main">
    <h2 class="screen_out">홈 탭</h2>
    <ul class="gnb_main">
        <li class="on">
             <span class="screen_out">선택됨</span>
             <a href="/" class="link_gnb link_gnb_home" onclick="tiaraPush('mov_home', 'home_top');">
                <span class="link_gnb_text link_gnb_text_home">홈</span>
            </a>
        </li>

        <li class="gnb_main_li_artist ">
            <a href="/artist" class="link_gnb link_gnb_artist" onclick="tiaraPush('mov_artist', 'home_top');">
            <span class="link_gnb_text link_gnb_text_artist">아티스트</span>
        </a>
        </li>

        <li>
            <a href="/newest" class="link_gnb link_gnb_newest" onclick="tiaraPush('mov_newest', 'home_top');">
            <span class="link_gnb_text link_gnb_text_newest">신규</span>
        </a>
        </li>

        <li class="gnb_main_li_preorder ">
                <a href="/preorder" class="link_gnb link_gnb_preorder link_active" onclick="tiaraPush('mov_preorder', 'home_top');">
            <span class="link_gnb_text link_gnb_text_preorder">오픈예정</span>
        </a>
        </li>

        <li>
                        <a href="/like" class="link_gnb link_gnb_my" onclick="tiaraPush('mov_like_or_order', 'home_top');">
                <span class="link_gnb_text link_gnb_text_my">마이</span>
            </a>
        </li>
    </ul>
</div>

</template>

<script>
export default {
  name: 'Gnb'
}
</script>

<style scope>
.gnb_main,.is-orientation-landscape .gnb_main{max-width:640px;margin:0 auto}
@media (orientation: landscape) {
    .gnb_main{max-width:640px;margin:0 auto}
}
.gnb_main{position:fixed;z-index:99;top:55px;left:0;right:0;font-size:16px;background-color:#fff;border-bottom:1px solid #d9d9d9}
.gnb_main li{float:left;width:20%;text-align:center}
.gnb_main .gnb_main_li_tmoticon{display:none}
.gnb_main .link_gnb{position:relative;display:inline-block;color:#000;width:100%}
.gnb_main .on .link_gnb{position:relative;font-weight:700}
.gnb_main .on .link_gnb:after{content:'';display:inline-block;position:absolute;bottom:-1px;left:10px;right:10px;height:4px;background-color:#1a1a1a}
.gnb_main .on .link_gnb.link_gnb_artist:after { left: -2px; right: -2px; }
.gnb_main .on .link_gnb.link_gnb_preorder:after { left: -2px; right: -2px; }
.gnb_main .link_gnb .link_gnb_text{position:relative;display:inline-block;padding:8px 0;letter-spacing:.6px}
.gnb_main .link_active .link_gnb_text:after{content:' ';position:absolute;top:8px;right:-10px;width:6px;height:6px;-webkit-border-radius:50%;border-radius:50%;background-color:#db635d}
.gnb_main .link_gnb_my.link_active:after{right:-11px}
</style>
