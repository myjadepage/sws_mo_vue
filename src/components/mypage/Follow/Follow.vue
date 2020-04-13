<template>
  <div class="followBlock">
    <div class="searchBox">
      <div class="inputBox">
        <input type="text" placeholder="팔로잉 검색" v-model="keyword" v-on:input="keyword= $event.target.value" v-if="phase==='following'" />
        <input type="text" placeholder="팔로워 검색" v-model="keyword" v-on:input="keyword= $event.target.value" v-if="phase==='follower'" />
        <button class="btn_remove" v-if="keyword != ''" @click="emptyKeyword"><img src="../../../assets/img/ico/delete.png" alt="입력 삭제" /></button>
      </div>
      <button class="search"><img src="../../../assets/img/ico/search@3x.png" alt="검색하기" @click="search" /></button>
    </div>
    <ul class="userList">

      <li class="item" v-for="(user, index) in users" :key="user.followSysId" >
        <router-link to="/BrandProfile">
          <div class="proPic" :style="{ backgroundImage: `url('${user.imageUrl}')`, backgroundSize: 'cover' }" ></div>
          <div class="center">
            <p class="userId">{{user.followId}}</p>
            <p class="userNick">{{user.name}}</p>
          </div>
        </router-link>
        <button class="btn_follow border btn_them gray" @click="follow(index)" v-if="phase==='following'" >팔로잉</button>
        <button class="btn_follow border btn_them gray" @click="select(index)" v-if="phase==='follower'" >삭제</button>
      </li>
      <li class="noneUser" v-if="users.length === 0">팔로잉이 없습니다.</li>
    </ul>
  </div>
</template>

<script>

export default {
  props: ['users', 'phase'],
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    follow (idx) {
      this.$emit('follow', idx)
    },
    select (idx) {
      this.$emit('select', idx)
    },
    emptyKeyword () {
      this.keyword = ''
      this.$emit('empty')
    },
    search () {
      if (this.keyword.trim() !== '') {
        this.$emit('name', this.keyword)
      }
    }
  }
}
</script>

<style>

</style>
