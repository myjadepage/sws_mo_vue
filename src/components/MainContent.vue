<template>
<div id="swsContent" class="cont_sws">
<Gnb></Gnb>
<Item></Item>
</div>

</template>

<script>
import Gnb from './Gnb'
import Item from './Item'

export default {
  name: 'MainContent',
  components: {
    Gnb,
    Item
  }
}
</script>

<style>
#swsContent.cont_sws{padding-top:95px}
</style>
