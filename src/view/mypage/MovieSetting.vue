<template>
  <div>
  <Bar :val="title" />
  <MovieSetList :quality="quality" :lteQual="lteQual" :wifiQual="wifiQual" @open="openModal" />
  <section v-if="modalVisiblity" class="modalBg">
    <QualityModal v-if="modal && selected==='lte'" :quality="quality" :qual="lteQual" @close="close" @submit="change" />
    <QualityModal v-if="modal && selected==='wifi'" :quality="quality" :qual="wifiQual" @close="close" @submit="change" />
  </section>
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import MovieSetList from '@/components/mypage/Setting/MovieSetList'
import QualityModal from '@/components/mypage/Setting/Modal/QualityModal'

export default {
  metaInfo: {
    title: 'Shall We Shop - 비디오 설정'
  },
  name: 'MovieSetting',
  data () {
    return {
      title: '비디오 설정',
      quality: [
        {
          val: 0,
          text: '최고화질(1080P)'
        },
        {
          val: 1,
          text: '고화질(720P)'
        },
        {
          val: 2,
          text: '중화질(480P)'
        },
        {
          val: 3,
          text: '저화질(240P)'
        }
      ],
      lteQual: 1,
      wifiQual: 0,
      modalVisiblity: false,
      modal: false,
      selected: ''
    }
  },
  components: {
    Bar, MovieSetList, QualityModal
  },
  methods: {
    openModal (type) {
      this.selected = type
      this.modalVisiblity = true
      this.modal = true
    },
    close () {
      this.modalVisiblity = false
      this.modal = false
    },
    change (num) {
      if (this.selected === 'lte') {
        this.lteQual = num
      } else if (this.selected === 'wifi') {
        this.wifiQual = num
      }
      this.modalVisiblity = false
      this.modal = false
    }
  }
}
</script>
<style>

</style>
