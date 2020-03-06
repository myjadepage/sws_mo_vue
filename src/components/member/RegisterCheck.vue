<template>
<div class="sws_register">
    <h5>
        <span class="circle_dot"></span>
        <span class="circle_dot disable"></span>
        <span class="circle_dot disable"></span>
        <span class="circle_dot disable"></span>
    </h5>
    <div class="member_con">
        <h2 class="title">이용동의</h2>
            <ul class="form_item_wrap_ver">
                <li>
                    <div class="toggle-button toggle-button-save">
                        <input id="toggleButtonAll" type="checkbox" v-model="isCheckAll">
                        <label for="toggleButtonAll"></label>
                        <div class="toggle-button__icon"></div>
                    </div>
                    <span>모두 동의합니다.</span>
                </li>
                <li v-for ="term in terms" :key="term.id">
                    <div class="toggle-button toggle-button-save">
                        <input :id="'toggleButton' + term.id" type="checkbox" v-model="checked" :value="term.id">
                        <label :for="'toggleButton' + term.id"></label>
                        <div class="toggle-button__icon"></div>
                    </div>
                    <span>{{ term.text }}</span>
                    <a :href="term.url"> > </a>
                </li>
            </ul>

        <ul class="form_item_wrap_ver">
            <li>전체동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며, 개별적으로 동의 선택 가능합니다.</li>
            <li>선택항목에 대한 동의를 거부하는 경우에도 서비스 이용이 가능합니다.</li>
        </ul>
    </div>
     <div class="member_foot">
        <button type="button" class="btn btn-block btn-dark" @click="checkForm">다음</button>
      </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      terms: [
        {'id': '01', 'text': '[필수] 서비스 이용약관 동의', 'url': '/RegStep01'},
        {'id': '02', 'text': '[필수] 개인정보 수집 및 이용 동의', 'url': '/RegStep01'},
        {'id': '03', 'text': '[선택] 개인정보 제3자 제공 동의', 'url': '/RegStep01'},
        {'id': '04', 'text': '[선택] 이벤트 알림 수신 동의', 'url': '/RegStep01'}
      ],
      checked: []
    }
  },
  computed: {
    isCheckAll: {
      get: function () {
        if ((this.checked.length !== this.terms.length) || this.terms.length === 0) return false
        else return true
      },
      set: function (e) {
        if (e) {
          for (var i = 0; i < this.terms.length; i++) {
            this.checked.push(this.terms[i].id)
          }
        } else {
          this.checked = []
        }
      }
    }
  },
  methods: {
    checkForm (e) {
      if (this.checked[0] !== '01') {
        alert('필수항목을 체크해 주세요')
      } else if (this.checked[1] !== '02') {
        alert('필수항목을 체크해 주세요')
      } else {
        this.$router.push('/RegStep02')
      }
    }
  }
}
</script>

<style>

</style>
