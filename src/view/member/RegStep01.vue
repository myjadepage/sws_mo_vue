<template>
  <div class="memberWrap">
    <Bar :val="title"></Bar>
      <div class="terms_con">
          <h4>제1장 총칙</h4>
          <dl>
              <dt>제 1조(목적)</dt>
              <dd>주식회사 쉘위샵(이하'회사')가 제공하는 서비스를 이용해 주셔서
                  감사합니다. 회사는 여러분이 다양한한
              </dd>

              <dt>제 2조(약관의 효력 및 변경)</dt>
              <dd>주식회사 쉘위샵(이하'회사')가 제공하는 서비스를 이용해 주셔서
                  감사합니다. 회사는 여러분이 다양한한
              </dd>

              <dt>제 3조(목적)</dt>
              <dd>주식회사 쉘위샵(이하'회사')가 제공하는 서비스를 이용해 주셔서
                  감사합니다. 회사는 여러분이 다양한한
              </dd>

          </dl>
      </div>
</div>
</template>

<script>
import Bar from '@/components/member/Bar'
export default {
  components: {
    Bar
  },
  data () {
    return {
      title: 'SWS 이용약관'
    }
  }
}
</script>

<style>

</style>
