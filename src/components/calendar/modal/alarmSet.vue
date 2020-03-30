<template>
  <div class="liveAlarmSet" :class="{'ani':alarmAni, 'on':alarmState }">
    <img src="../../../assets/img/ico/bell_w.png" alt="알람 이미지" />
    <p>{{alarmMessage}}</p>
  </div>
</template>

<script>
export default {
  props: ['alarmState', 'alarmMessage', 'alarmAni']
}
</script>
