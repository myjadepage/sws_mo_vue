<template>
  <div>
    <Bar :val="title" />
    <Follow :users="users" :phase="phase" @follow="stateSwitch" />
    <section v-if="removeConfirm" class="modalBg" >
      <RemoveModal  @close="removedClose" @remove="removeFollowing" />
    </section>
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import Follow from '@/components/mypage/Follow/Follow'
import RemoveModal from '@/components/mypage/Follow/Modal/RemoveModal'
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
          state: false,
          idx: 0
        },
        {
          id: '알레그리',
          nick: '요마요마',
          profile: profile2,
          state: true,
          idx: 1
        },
        {
          id: 'abcd',
          nick: '미요미요',
          profile: profile3,
          state: true,
          idx: 2
        },
        {
          id: 'lodd',
          nick: 'SKY',
          profile: profile4,
          state: true,
          idx: 3
        }
      ],
      phase: 'following',
      selected: 0,
      removeConfirm: false
    }
  },
  components: {
    Bar, Follow, RemoveModal
  },
  methods: {
    stateSwitch (idx) {
      if (this.users[idx].state === true) {
        this.selected = idx
        this.removeConfirm = true
        return
      }
      this.users[idx].state = !this.users[idx].state
    },
    removedClose () {
      this.removeConfirm = false
    },
    removeFollowing () {
      this.removedClose()
      this.users[this.selected].state = !this.users[this.selected].state
    }
  }
}
</script>
