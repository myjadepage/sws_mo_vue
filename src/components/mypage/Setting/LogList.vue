<template>
  <ul class="logList">
    <li class="item" v-for="(log, index) in logs" :key="index">
      <p class="date">{{log.date}}</p>
      <p class="desc">{{log.desc}}</p>
    </li>
  </ul>
</template>

<script>

export default {
  props: ['logs'],
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
