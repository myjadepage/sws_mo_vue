<template>
  <div class="followBlock">
    <div class="searchBox">
      <div class="inputBox">
        <input type="text" placeholder="팔로잉 검색" v-model="keyword" v-on:input="keyword= $event.target.value" />
        <button class="btn_remove" v-if="keyword != ''" @click="keyword =''"><img src="../../../assets/img/ico/delete.png" alt="입력 삭제" /></button>
      </div>
      <button class="search"><img src="../../../assets/img/ico/search@3x.png" alt="검색하기" /></button>
    </div>
    <ul class="userList">

      <li class="item" v-for="user in userBook" :key="user.id" v-if="user.id.includes(keyword)" >
        <div class="proPic" :style="{ backgroundImage: `url('${user.profile}')`, backgroundSize: 'cover' }" ></div>
        <div class="center">
          <p class="userId">{{user.id}}</p>
          <p class="userNick">{{user.nick}}</p>
        </div>
        <button class="btn_follow border btn_them" :class="{'gray':user.state}" @click="follow(user.idx)" >{{user.state ? '팔로잉' : '팔로우' }}</button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: ['users'],
  data () {
    return {
      keyword: '',
      userBook: [...this.users]
    }
  },
  methods: {
    follow (idx) {
      this.$emit('follow', idx)
    }
  }
}
</script>

<style>

</style>
