<template>
  <div>
    <Bar :val="title" />
    <Follow :users="users" :phase="phase" :searchName="searchName" @follow="stateSwitch" @name="getList" @empty="empty" />
    <section v-if="removeConfirm" class="modalBg" >
      <RemoveModal  @close="removedClose" @remove="removeFollowing" />
    </section>
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import Follow from '@/components/mypage/Follow/Follow'
import RemoveModal from '@/components/mypage/Follow/Modal/RemoveModal'
import { getFollowing } from '@/api/index.js'

export default {
  metaInfo: {
    title: 'Shall We Shop - 팔로잉'
  },
  data () {
    return {
      title: '팔로잉',
      phase: 'following',
      selected: 0,
      removeConfirm: false,
      startIndex: 0,
      searchName: '',
      oldName: '',
      users: []
    }
  },
  components: {
    Bar, Follow, RemoveModal
  },
  created () {
    this.getList()
  },
  methods: {
    stateSwitch (idx) {
      this.selected = idx
      this.removeConfirm = true
    },
    removedClose () {
      this.removeConfirm = false
    },
    removeFollowing () {
      this.users.splice(this.selected, 1)
      this.removedClose()
    },
    empty () {
      this.startIndex = 0
      this.oldName = ''
      this.getList()
    },
    getList (name) {
      let getInfo = {}
      if (name) {
        if (this.oldName !== name) {
          this.startIndex = 0
        }
        getInfo.name = name
        this.oldName = name
      }
      getInfo.startIndex = this.startIndex
      // console.log(getInfo)
      getFollowing(sessionStorage.getItem('accessToken'), getInfo)
        .then(res => {
          if (res.data.jsonData.resultCode === '0001') {
            this.users = res.data.jsonData.follows
            this.startIndex = res.data.jsonData.startIndex
          } else if (res.data.jsonData.resultCode === '0004') {
            this.users = []
            this.startIndex = 0
          }
          // console.log(res)
        })
    }
  }
}
</script>
