<template>
  <ul class="listCont">
    <li class="rArrow"><router-link to="/BlackList">차단목록<span class="arrow"></span></router-link></li>
    <li class="rArrow"><router-link to="/ReportLog">신고 내역<span class="arrow"></span></router-link></li>
    <li class="rArrow"><router-link to="/SanctionLog">제재 내역<span class="arrow"></span></router-link></li>
    <li class="rArrow"><router-link to="/AlertSet">알림 설정<span class="arrow"></span></router-link></li>
    <li class="rArrow"><router-link to="/MovieSetting">비디오 설정<span class="arrow"></span></router-link></li>
    <li class="rArrow"><button @click="$emit('clean')">캐시 삭제<span class="arrow"></span></button></li>
  </ul>
</template>

<script>
export default {
  name: 'SettingList',
  methods: {
  }
}
</script>

<style>

</style>
