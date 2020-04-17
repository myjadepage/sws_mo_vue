<template>
  <div>
  <Bar :val="title" />
  <SettingList @clean="clean" />
  <section v-if="modalVisiblity" class="modalBg">
    <CashModal v-if="cashModal" @close="close" @submit="cashClean" />
  </section>
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import SettingList from '@/components/mypage/Setting/SettingList'
import CashModal from '@/components/mypage/Setting/Modal/CashModal'

export default {
  metaInfo: {
    title: 'Shall We Shop - 설정'
  },
  name: 'MypageSettingList',
  data () {
    return {
      title: '설정',
      modalVisiblity: false,
      cashModal: false
    }
  },
  components: {
    Bar, SettingList, CashModal
  },
  methods: {
    clean () {
      this.modalVisiblity = true
      this.cashModal = true
    },
    close () {
      this.modalVisiblity = false
      this.cashModal = false
    },
    cashClean () {
      this.modalVisiblity = false
      this.cashModal = false
    }
  }
}
</script>
<style>

</style>
