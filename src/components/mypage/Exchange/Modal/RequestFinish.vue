<template>
  <div class="modalWrap">
    <h1 class="modalHeader">교환 요청이 접수되었습니다.</h1>
    <div class="modalBody exchangeModal">
      <p class="c_them">판매자가 교환 가능 상태 여부를 확인하여 처리하므로 완료까지 다소 시간이 거릴 수 있는 점 양해부탁드립니다.</p>
      <p class="mb">배송 및 교환 진행 상태는 [마이]탭에서 확인해 주세요.</p>
    </div>
    <div class="btnsWrap col1">
      <button @click="modalClose" class="btn_submit">확인</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    modalClose () {
      this.$emit('close')
    }
  }
}
</script>
