<template>
  <div class="ordererInfoWrap">
      <div class="ordererHeader">
          주문인 정보
      </div>
        <div class="buyDeliveryBody">
      <table>
        <tr>
          <!-- <td>{{name}}</td> -->
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    let m = JSON.parse(sessionStorage.getItem('memberInfo'))
    console.log(m)
    this.member.name = m.name
    this.member.address1 = m.address1
    this.member.address2 = m.address2
    this.member.mobile = m.mobile
  },
  data () {
    return {
      member: {
        name: '',
        address1: '',
        address2: '',
        mobile: ''
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
.ordererInfoWrap .ordererHeader{
 font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
}
</style>
