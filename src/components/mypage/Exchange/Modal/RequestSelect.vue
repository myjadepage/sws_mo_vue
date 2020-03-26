<template>
  <div class="modalWrap">
    <h1 class="modalHeader">취소 사유 선택</h1>
    <div class="modalBody exchangeModal radioWrap">
      <input type="radio" name="reason" value="단순 변심" id="rs1" v-model="selected" />
      <label for="rs1">단순 변심</label>
      <input type="radio" name="reason" value="타사 이용" id="rs2" v-model="selected" />
      <label for="rs2">타사 이용</label>
      <input type="radio" name="reason" value="배송 지연" id="rs3" v-model="selected" />
      <label for="rs3">배송 지연</label>
      <input type="radio" name="reason" value="옵션 선택 잘못" id="rs4" v-model="selected" />
      <label for="rs4">옵션 선택 잘못</label>
      <input type="radio" name="reason" value="상품정보 부족" id="rs5" v-model="selected" />
      <label for="rs5">상품정보 부족</label>
      <input type="radio" name="reason" value="가격 불만" id="rs6" v-model="selected" />
      <label for="rs6">가격 불만</label>
      <input type="radio" name="reason" value="기타" id="rs7" v-model="selected" />
      <label for="rs7">기타</label>
    </div>
    <div class="btnsWrap col2">
      <button @click="modalClose" class="btn_cancle">취소</button>
      <button @click="submit" class="btn_submit">확인</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['selectedReason'],
  data () {
    return {
      selected: this.selectedReason
    }
  },
  methods: {
    modalClose () {
      this.$emit('close')
    },
    submit () {
      this.$emit('select', this.selected)
    }
  }
}
</script>
