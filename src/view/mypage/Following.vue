<template>
  <div>
  <Bar :val="title" />
  <Follow :users="users" @follow="stateSwitch" />
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import Follow from '@/components/mypage/Follow/Follow'
import profile1 from '@/assets/img/temp_profile1.jpg'
import profile2 from '@/assets/img/temp_profile2.jpg'
import profile3 from '@/assets/img/temp_profile3.jpg'
import profile4 from '@/assets/img/temp_profile4.jpg'

export default {
  data () {
    return {
      title: '팔로잉',
      users: [
        {
          id: 'lovely123',
          nick: '요미요미',
          profile: profile1,
          state: 0,
          idx: 0
        },
        {
          id: '알레그리',
          nick: '요마요마',
          profile: profile2,
          state: 1,
          idx: 1
        },
        {
          id: 'abcd',
          nick: '미요미요',
          profile: profile3,
          state: 1,
          idx: 2
        },
        {
          id: 'lodd',
          nick: 'SKY',
          profile: profile4,
          state: 1,
          idx: 3
        }
      ]
    }
  },
  components: {
    Bar, Follow
  },
  methods: {
    stateSwitch (idx) {
      this.users[idx].state = !this.users[idx].state
    }
  }
}
</script>
