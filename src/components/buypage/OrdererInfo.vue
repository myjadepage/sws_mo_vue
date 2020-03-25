<template>
  <div class="ordererInfoWrap">
      <div class="ordererHeader">
          주문자 정보<span v-if="isLogin===false" class="loginBtn">회원구매</span>
      </div>
        <div class="ordererBody">
          <div class="form-group">
          <input v-model="name" type="text" placeholder="주문자 성함을 입력 해주세요"><button @click="deleteBtnClick(0)" class="deleteBtn">&times;</button>
          </div>
          <div class="form-group">
          <input v-model="phone" type="text" placeholder="주문자 연락처를 입력 해주세요"><button @click="deleteBtnClick(1)" class="deleteBtn">&times;</button>
          </div>
          <div class="form-group">
          <input v-model="email" type="text" placeholder="주문자 이메일을 입력 해주세요"><button @click="deleteBtnClick(2)" class="deleteBtn">&times;</button>
          </div>
          <input @change="orderIsDestCheck" ref="orderIsDest" type="checkbox" id="orderIsDest"><label for="orderIsDest">주문자와 배송지 정보가 동일</label>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    if (localStorage.getItem('accessToken')) {
      this.isLogin = true
    }
  },
  data () {
    return {
      name: '',
      phone: '',
      email: '',
      isLogin: false
    }
  },
  props: ['member'],
  methods: {
    orderIsDestCheck () {
      if (this.$refs.orderIsDest.checked) { this.$emit('orderIsDestCheck', {name: this.name, phone: this.phone, email: this.email}) }
    },
    deleteBtnClick (idx) {
      switch (idx) {
        case 0:
          this.name = ''
          break
        case 1:
          this.phone = ''
          break
        case 2:
          this.email = ''
          break
        default:
          break
      }
    }
  }
}
</script>

<style>
.ordererInfoWrap{
   margin-top: 5px;
  background-color: #fff;
  padding: 17px 12px 15px;
}

.ordererInfoWrap .ordererBody input[type='text']{
  all: unset;
  padding: 0 12px;
  width: 90%;
}

.ordererInfoWrap .ordererBody .form-group{
  border-bottom: 1px solid black;
  margin-bottom: 5px;
}

.ordererInfoWrap .ordererBody .deleteBtn{
  user-select: none;
  float: right;
}

.ordererInfoWrap .ordererHeader{
 font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
}
</style>
