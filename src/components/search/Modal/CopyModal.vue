<template>
<div class="copyModalWrap">
    <div class="modalHeader">
        링크복사
    </div>
    <div class="modalBody">
        URL : {{url}}
    </div>
    <div class="modalFooter">
        <button @click="cancel">취소</button><button @click="copyConfirm" class="btnHighlight">복사</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['url'],
  methods: {
    copyConfirm () {
      let t = document.createElement('textarea')
      document.body.appendChild(t)
      t.value = this.url
      t.select()
      t.setSelectionRange(0, 99999)
      document.execCommand('copy')
      document.body.removeChild(t)

      this.$emit('btnClick')
    },
    cancel () {
      this.$emit('btnClick')
    }
  }
}
</script>
<style>
.copyModalWrap{
position: fixed;
width: 80%;
top: 25%;
left: 10%;
z-index: 100;
border-radius: 8px;
text-align: center;
background-color: #fff;
transition: ease-in-out 1s;
}

.copyModalWrap .modalHeader{
    height: 50px;
    line-height: 50px;
    color: #111111;
    font-size: 16px;
    font-weight: 500;
}

.copyModalWrap .modalBody{
  margin: 10px 0 30px;
  font-weight: 500;
}

.modalFooter{
    width: 100%;
    /* position: relative;
    bottom: 0; */
    border-top: 1px solid #eeeeee;
}

.copyModalWrap .modalFooter button{
    background-color: #fff;
    width: 50%;
    height: 44px;
    color: #666666;
    border-radius: 0 0 0 8px;
}

.copyModalWrap .modalFooter button.btnHighlight{
    color: #fff;
    background-color: #e61754;
    border-radius: 0 0 8px 0;
}

</style>
