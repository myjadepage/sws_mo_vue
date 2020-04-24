<template>
  <div class="subMediaWrap">
    <MediaEntity v-for="(sm,idx) in subMedias" :key="idx" :media="sm" @play="play" :idx="idx" />
  </div>
</template>

<script>
import MediaEntity from './MediaEntity'

export default {
  props: ['subMedias'],
  components: {
    MediaEntity
  },
  methods: {
    play (idx) {
      // this.$emit('play', idx)
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
