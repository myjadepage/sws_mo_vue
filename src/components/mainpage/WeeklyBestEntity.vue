<template>
    <li class="item">
      <!-- like에 on 클래스가 붙으면 좋아요 상태가 됩니다. -->
      <button @click="likeBtnClick" :class="like?'like on':'like'"><span class="ir">좋아요 버튼</span></button>
      <router-link :to="'/product/'+product.prdtSysId"  class="link_goods">
        <div class="img_box" :style="{backgroundImage:'url('+product.bigImageUrl+')', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></div>
        <div class="txtBox">
          <div class="btn_movie">
            <img src="../../assets/img/ico/btn_play_them.png" alt="재생버튼 이미지" />
          </div>
          <h5>{{product.briefComment}}</h5>
          <p>{{product.briefDescription}}</p>
          <dl>
            <dt>[{{product.brandName}}] {{product.name}}</dt>
            <dd>{{product.price|makeComma}}원<span v-if="product.discountRate" class="c_them">{{product.discountRate * 100}}%</span></dd>
          </dl>
        </div>
      </router-link>
    </li>
</template>

<script>
import {setPicksList, delPicksList} from '@/api/index.js'

export default {
  props: ['product', 'pickLists'],
  methods: {
    likeBtnClick () {
      // this.like = !this.like
      if (sessionStorage.getItem('accessToken')) {
        if (this.like) {
          delPicksList(sessionStorage.getItem('accessToken'), this.prdtPickSysIds)
            .then(res => {
              // console.log(res)
              if (res.data.jsonData.resultCode === '0001') {
                this.like = false
              }
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          setPicksList(sessionStorage.getItem('accessToken'), {prdtSysId: this.prdtSysId})
            .then(res => {
              // console.log(res)
              if (res.data.jsonData.resultCode === '0001') {
                this.like = true
                this.prdtPickSysIds = res.data.jsonData.res.prdtPickSysId
              }
            })
            .catch(err => {
              console.log(err)
            })
        }
      } else {
        alert('상품 찜 기능은 로그인이 필요합니다.')
      }
    },
    setLike () {
      this.pickLists.map(i => {
        if (i.prdtSysId === this.prdtSysId) {
          this.like = true
          this.prdtPickSysIds = i.prdtPickSysId
        }
      })
    }
  },
  data () {
    return {
      like: false,
      prdtSysId: this.product.prdtSysId,
      prdtPickSysIds: null
    }
  },
  mounted () {
    this.setLike()
  },
  watch: {
    pickLists: {
      handler () {
        this.setLike()
      }
    }
  }
}
</script>

<style>

</style>
