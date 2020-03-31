<template>
  <div class="modalWrap selectPop">
    <form action="">
      <h1 class="modalHeader">{{title}}</h1>
      <div class="modalBody">
        <div class="item">
          <input type="radio" name="selectPrd" id="prd0" value="0" v-model="lookSelect" />
          <label for="prd0">
            <div class="row">
              <p class="date">2020.01.01 주문번호:12345678</p>
              <p class="name">[헤라] 센슈얼 립 세럼 글로우 1호 + 클렌징 오일 정품 50ml 추가증정</p>
            </div>
            <span class="circle"></span>
          </label>
        </div>
        <div class="item">
          <input type="radio" name="selectPrd" id="prd1" value="1" v-model="lookSelect" />
          <label for="prd1">
            <div class="row">
              <p class="date">2020.01.01 주문번호:12345678</p>
              <p class="name">[헤라] 센슈얼 립 세럼 글로우 1호</p>
            </div>
            <span class="circle"></span>
          </label>
        </div>
        <div class="item">
          <input type="radio" name="selectPrd" id="prd2" value="2" v-model="lookSelect" />
          <label for="prd2">
            <div class="row">
              <p class="date">2020.01.01 주문번호:12345678</p>
              <p class="name">[헤라] 센슈얼 립 세럼 글로우 1호 + 클렌징 오일 정품 50ml 추가증정</p>
            </div>
            <span class="circle"></span>
          </label>
        </div>
        <div class="item">
          <input type="radio" name="selectPrd" id="prd3" value="3" v-model="lookSelect" />
          <label for="prd3">
            <div class="row">
              <p class="date">2020.01.01 주문번호:12345678</p>
              <p class="name">[헤라] 센슈얼 립 세럼 글로우 1호</p>
            </div>
            <span class="circle"></span>
          </label>
        </div>
      </div>
      <div class="btnsWrap col2">
        <button @click="close" class="btn_cancle">취소</button>
        <button @click.stop.prevent="submit" class="btn_submit">확인</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['title', 'item'],
  data () {
    return {
      lookSelect: 0
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    submit () {
      this.$emit('submit', this.lookSelect)
    }
  }
}
</script>
