
<template>
  <div ref="compSideMenuContainer" class="comp-side-menu-container" >
    <div ref="compSideMenu" class="comp-side-menu">
      <div ref="wrapSideMenu" class="wrap-side-menu">
        <div class="row-profile">
          <div class="wrap-profile-avatar"></div>
          <div class="wrap-profile-info">
            <p class="profile-needs-login">
              <span class="emphasize">로그인</span>해주세요<span class="hide-on-sm"> &gt;</span>
            </p>
            <p class="profile-info-nickname">
             jjjj
            </p>
            <a class="kakao-point go-to-kakao-point">
              카카오쇼핑 포인트 &gt;
            </a>
            <p class="kakao-point">
              카카오쇼핑 포인트 : 80
            </p>
          </div>
          <div class="div wrap-btn-profile-setting">
            <a href="/my/setting" class="btn-profile-setting">
              프로필 설정
            </a>
          </div>
        </div>
        <div class="row-menu">
          <SideMenuSection>
            <SideMenuItem
              title="주문<span class='delimeter'>&#8226;</span>배송 내역"
              href="/order">
            </SideMenuItem>
            <SideMenuItem
              title="후기 내역"
              href="/my/review">
            </SideMenuItem>
            <SideMenuItem
              title="1:1 문의 내역"
              href="/customer/personal">
            </SideMenuItem>
            <SideMenuItem
              title="제품 문의 내역"
              href="/customer/question_item">
            </SideMenuItem>
          </SideMenuSection>

          <SideMenuSection>
            <p slot="title">고객센터</p>
            <SideMenuItem
              title="공지사항"
              href="/notice">
            </SideMenuItem>
            <SideMenuItem
              title="도움말 / 문의"
              href="/customer/help">
            </SideMenuItem>
          </SideMenuSection>

          <SideMenuSection>
            <SideMenuItem
              title="카카오메이커스 소개"
              href="/aboutus">
            </SideMenuItem>
            <SideMenuItem
              title="브랜드 스토리"
              href="/partner_story/list">
            </SideMenuItem>
            <SideMenuItem
              title="브랜드 전체보기"
              href="/brand/view">
            </SideMenuItem>
            <SideMenuItem
              title="입점 문의하기"
              href="/partner">
            </SideMenuItem>
          </SideMenuSection>
        </div>
        <div class="row-menu row-menu-download">
          <a href="/bridge/install" class="btn-menu btn-menu-download">
            <p class="title">메이커스앱 다운로드</p>
          </a>
        </div>
        <div class="row-menu row-menu-logout">
          <a href="/logout" class="btn-menu btn-menu-logout">로그아웃</a>
        </div>
      </div>
    </div>
    <div ref="sideMenuDimmed" class="comp-side-menu-dimmed"></div>
  </div>
</template>

<script>
import SideMenuSection from './SideMenuSection'
import SideMenuItem from './SideMenuItem'

export default {
  name: 'SideMenu',
  components: {
    SideMenuItem,
    SideMenuSection
  }
}
</script>

<style scope>
html.prevent-scroll {
  height: 100% !important;
}
html.prevent-scroll body {
  max-height: 100% !important;
  overflow: hidden !important;
}
.side-menu-item[data-meta-class*="show-on-pc"] {
  display: none;
}
.comp-side-menu-container.mounted .comp-side-menu {
  will-change: transform;
}
.comp-side-menu-container.active .comp-side-menu-dimmed {
  z-index: 1900;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 200%;
  background-color: rgba(0, 0, 0, 0.3);
}
.comp-side-menu-container.active .comp-side-menu {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
}
.comp-side-menu-container .comp-side-menu {
  z-index: 2000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 69%;
  max-width: 400px;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #ffffff;
  -webkit-overflow-scrolling: touch;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
  -webkit-transition: -webkit-transform 0.18s ease-in-out;
  transition: transform 0.18s ease-in-out;
}
.comp-side-menu-container .comp-side-menu::-webkit-scrollbar {
  display: none;
}
.comp-side-menu-container .comp-side-menu .wrap-side-menu {
  display: block;
  padding: 16px 0 60px 20px;
}
.comp-side-menu-container .comp-side-menu .side-menu {
  background-color: #ffffff;
}
.comp-side-menu-container .comp-side-menu .side-menu-section {
  border-top: 1px solid #f1f1f1;
}
.comp-side-menu-container .comp-side-menu .side-menu-section + .side-menu-section {
  margin-top: 17px;
}
.comp-side-menu-container .comp-side-menu .side-menu-section-title {
  display: block;
  margin-top: 19px;
  color: #b0b0b0;
  font-weight: normal;
}
.comp-side-menu-container .comp-side-menu .side-menu-item {
  margin-top: 17px;
}
.comp-side-menu-container .comp-side-menu .side-menu-item .link {
    display: block;
    color: #000000;
    font-size: 15px;
}
.comp-side-menu-container .comp-side-menu .side-menu-item .link .side-menu-item-title {
      position: relative;
}
.comp-side-menu-container .comp-side-menu .side-menu-item .link .delimeter {
      position: relative;
      top: -1px;
      display: inline-block;
      margin-left: 4px;
      margin-right: 4px;
}
.comp-side-menu-container .comp-side-menu .side-menu-item.active .link .side-menu-item-title:after {
    position: absolute;
    top: -2px;
    right: -10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #DB635D;
    content: ' ';
}
.comp-side-menu-container.degradation .comp-side-menu {
  will-change: left;
  left: -100%;
  -webkit-transform: none;
  transform: none;
  -webkit-transition: left 0.18s ease-in-out;
  transition: left 0.18s ease-in-out;
}
.comp-side-menu-container.degradation.active .comp-side-menu {
  left: 0;
}
.comp-side-menu .row-profile {
  position: relative;
  cursor: pointer;
}
.login .comp-side-menu .row-profile {
  cursor: default;
}
.comp-side-menu .row-profile .wrap-profile-avatar {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 60px;
  height: 60px;
}
.comp-side-menu .row-profile .wrap-btn-profile-setting {
  position: absolute;
  top: 8px;
  right: 18px;
  font-size: 0;
}
.comp-side-menu .row-profile .wrap-btn-profile-setting .btn-profile-setting {
    background-image: url("//t1.daumcdn.net/makers/static/web/shared/sprite-min.png");
    display: inline-block;
    width: 18px;
    height: 18px;
    background-size: 18px auto;
    background-position: 0 -26px;
    background-repeat: no-repeat;
}
.comp-side-menu .row-profile .wrap-profile-info {
  position: relative;
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 12px;
  padding-left: 68px;
  padding-right: 30px;
  font-size: 15px;
}
.comp-side-menu .row-profile .wrap-profile-info .profile-needs-login {
    position: relative;
    top: 50%;
    -webkit-transform: translateY(50%);
    transform: translateY(50%);
}
.comp-side-menu .row-profile .wrap-profile-info .profile-needs-login .emphasize {
      font-weight: bold;
}
.comp-side-menu .row-profile .wrap-profile-info .profile-info-nickname {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.comp-side-menu .row-profile .wrap-profile-info .kakao-point {
    display: inline-block;
    margin-top: 2px;
    font-size: 12px;
    color: #a8a8a8;
    text-decoration: underline;
}
.comp-side-menu .row-profile .wrap-profile-info .wrap-btn-profile-setting {
    position: absolute;
    top: 0;
    right: 0;
}
.row-profile + .row-menu {
  margin-top: 12px;
}
.row-menu .btn-menu {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 12px 0;
  text-align: center;
}
.row-menu.row-menu-download {
  margin-top: 20px;
  margin-right: 20px;
}
.row-menu.row-menu-download .btn-menu-download {
    display: inline-block;
    color: #ffffff;
    background-color: #000000;
}
.row-menu.row-menu-download .btn-menu-download .title {
      position: relative;
      left: 12px;
      display: inline;
}
.row-menu.row-menu-download .btn-menu-download .title:before {
        content: ' ';
        position: absolute;
        top: -2px;
        left: -30px;
        display: inline-block;
        width: 18px;
        height: 19px;
        background-image: url("//t1.daumcdn.net/makers/static/web/shared/makers_app_download.png");
        background-size: 18px 19px;
        background-position: 0 0;
        background-repeat: no-repeat;
}
.row-menu.row-menu-logout {
  margin-top: 10px;
  margin-right: 20px;
}
.row-menu.row-menu-logout .btn-menu-logout {
    box-sizing: border-box;
    border: 1px solid #000000;
    background-color: #ffffff;
    color: #000000;
}
</style>
