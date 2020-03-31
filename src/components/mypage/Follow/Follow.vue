<template>
  <div class="followBlock">
    <div class="searchBox">
      <div class="inputBox">
        <input type="text" placeholder="팔로잉 검색" v-model="keyword" v-on:input="keyword= $event.target.value" v-if="phase==='following'" />
        <input type="text" placeholder="팔로워 검색" v-model="keyword" v-on:input="keyword= $event.target.value" v-if="phase==='follower'" />
        <button class="btn_remove" v-if="keyword != ''" @click="keyword =''"><img src="../../../assets/img/ico/delete.png" alt="입력 삭제" /></button>
      </div>
      <button class="search"><img src="../../../assets/img/ico/search@3x.png" alt="검색하기" /></button>
    </div>
    <ul class="userList">

      <li class="item" v-for="(user, index) in users" :key="user.id" v-if="user.id.includes(keyword)" >
        <router-link to="/BrandProfile">
          <div class="proPic" :style="{ backgroundImage: `url('${user.profile}')`, backgroundSize: 'cover' }" ></div>
          <div class="center">
            <p class="userId">{{user.id}}</p>
            <p class="userNick">{{user.nick}}</p>
          </div>
        </router-link>
        <button class="btn_follow border btn_them" :class="{'gray':user.state}" @click="follow(index)" v-if="phase==='following'" >{{user.state ? '팔로잉' : '팔로우' }}</button>
        <button class="btn_follow border btn_them gray" @click="select(index)" v-if="phase==='follower'" >삭제</button>
      </li>
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
    }
  }
}
</script>

<style>

</style>
