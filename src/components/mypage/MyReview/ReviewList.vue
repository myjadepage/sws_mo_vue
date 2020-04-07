<template>
  <div class="itemList" :class="{'recent': type==='basket' || type==='brand', 'modifyMode':modifyMode}" >
    <div class="listHead" v-if="type!=='history'" >
      <div class="nor">
        <p>전체 (50개)</p>
      </div>
      <div class="modi">
        <input type="checkbox" class="btn_all" id="btn_all" v-model="allChecked" @click="allChk" />
        <label for="btn_all">전체선택 (<span>2</span>/50개)</label>
      </div>

      <!-- btnsWrap은 전체선택 체크상태에서만 보이도록 -->
      <div class="btnsWrap">
        <div class="nor">
          <button class="cancle" @click="modifyMode = true">편집</button>
        </div>
        <div class="modi">
          <button class="remove" >삭제</button>
          <!-- <button class="cancle" @click="modifyMode = false">취소</button> -->
        </div>
      </div>
    </div>

    <ul>

    </ul>

    <div class="fNotiBox" v-if="type==='review' && !tabState">
      <p>최근 6개월 이내 구매내역 중 리뷰가 작성되지 않은 상품내역을 확인하실 수 있습니다.<br/>판매종료/중지된 상품내역은 노출되지 않습니다.</p>
    </div>
  </div>

</template>

<script>
export default {
  props: ['pageType', 'tabState'],
  data () {
    return {
      type: this.pageType,
      modifyMode: true,
      allChecked: false,
      products: {
        'a': {
          checked: false,
          like: true,
          basket: false
        },
        'b': {
          checked: false,
          like: false,
          basket: true
        },
        'c': {
          checked: false,
          like: false,
          basket: true
        }
      }
    }
  },
  methods: {
    allChk () {
      for (let product in this.products) {
        this.products[product].checked = !this.allChecked
      }
    },
    exchangeReqOpen () {
      this.$emit('exchangeReqOpen')
    }
  }
}
</script>

<style>

</style>
