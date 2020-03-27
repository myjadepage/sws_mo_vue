<template>
  <div class="WeeklyBestEntityWrap">
      <li class="item">
        <!-- like에 on 클래스가 붙으면 좋아요 상태가 됩니다. -->
        <button @click="likeBtnClick" :class="like?'like on':'like'"><span class="ir">좋아요 버튼</span></button>
        <router-link :to="'/product/'+product.prdtSysId"  class="link_goods">
          <div class="img_box" :style="{backgroundImage:'url('+product.bigImageUrl+')', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}">
            <div class="txtBox">
              <div class="btn_movie">
                <img src="../../assets/img/ico/btn_play.png" alt="재생버튼 이미지" />
              </div>
              <h5>{{product.briefComment}}</h5>
              <p>{{product.briefDescription}}</p>
            </div>
          </div>
          <div class="txtBox">
            <dl>
              <dt>[{{product.brandName}}] {{product.productName}}</dt>
              <dd>{{productPrice|makeComma}}원<span class="c_them">{{product.discountRate * 100}}%</span></dd>
            </dl>
          </div>
        </router-link>
      </li>
  </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    likeBtnClick () {
      this.like = !this.like
    }
  },
  data () {
    return {
      like: false
    }
  },
  computed: {
    productPrice () {
      return this.product.price - (this.product.price * this.product.discountRate)
    }
  }
}
</script>

<style>

</style>
