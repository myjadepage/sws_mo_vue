<template>
<div class="subMediaWrap">
          <MediaEntity v-for="(sm,idx) in subMedias" :key="idx" :media="sm" />
        </div>
</template>

<script>
import MediaEntity from './MediaEntity'

export default {
  components: {
    MediaEntity
  },
  data () {
    return {
      subMedias: [
        {thumbNailUrl: 'static\\images\\detailExamImg1.png',
          title: '컬러와 텍스쳐',
          mediaLength: '00:30'
        },
        {thumbNailUrl: 'static\\images\\detailExamImg2.png',
          title: '밀착력과 지속력',
          mediaLength: '01:20'
        },
        {thumbNailUrl: 'static\\images\\detailExamImg3.png',
          title: '원포인트 메이크업',
          mediaLength: '00:45'
        }
      ]
    }
  }
}
</script>

<style>
.subMediaWrap{
      background-color: #f3f3f3;
      padding: 15px 12px;
    }
</style>
