<template>
  <div class="fullHeight">
  <Bar :val="title" />
  <LongText :text="text" />
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import LongText from '@/components/shared/LongText'

export default {
  name: 'TermsService',
  data () {
    return {
      title: '서비스 이용약관',
      text: "주식회사 카카오(이하 ‘회사’)가 제공하는 서비스를 이용해 주셔서 감사합니다. 회사는 여러분이 다양한 인터넷과 모바일 서비스를 좀 더 편리하게 이용할 수 있도록 회사 또는 관계사의 개별 서비스에 모두 접속 가능한 통합로그인계정 체계를 만들고 그에 적용되는 '카카오계정 약관(이하 '본 약관')을 마련하였습니다. 본 약관은 여러분이 카카오계정 서비스를 이용하는 데 필요한 권리, 의무 및 책임사항, 이용조건 및 절차 등 기본적인 사항을 규정하고 있으므로 조금만 시간을 내서 주의 깊게 읽어주시기 바랍니다.\n\n제 2 조 (약관의 효력 및 변경)\n\n① 본 약관의 내용은 카카오계정 웹사이트(https://accounts.kakao.com/weblogin/account) 또는 개별 서비스의 화면에 게시하거나 기타의 방법으로 공지하고, 본 약관에 동의한 여러분 모두에게 그 효력이 발생합니다.\n\n② 회사는 필요한 경우 관련법령을 위배하지 않는 범위 내에서 본 약관을 변경할 수 있습니다. 본 약관이 변경되는 경우 회사는 변경사항을 시행일자 15일 전부터 여러분에게 서비스 공지사항에서 공지 또는 통지하는 것을 원칙으로 하며, 피치 못하게 여러분에게 불리한 내용으② 회사는 필요한 경우 관련법령을 위배하지 않는 범위 내에서 본 약관을 변경할 수 있습니다."
    }
  },
  components: {
    Bar, LongText
  }
}
</script>
<style>

</style>
