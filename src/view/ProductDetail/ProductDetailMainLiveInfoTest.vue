<template>
  <div class="productDetailWrap" v-if="product.prdtSysId">
    <div  v-if="buyMode" class="darkFilter"></div>
      <Bar :val="title" />
      <MediaLiveTest :product="product" :mode="mode" :playedIndex="playedIndex"/>
      <Info :product="product" />
      <!-- <SubMedia @play="play" /> -->
      <Info2 :product="product" />
      <Description />
      <ProductFooter @addedCartItem="addedCartItem" :options="options" @hideClick="buyMode = false" @buyModeClick="buyMode = true" :buyMode="buyMode" />
      <transition name="fade">
      <CartModal @cartModalClose="showCartModal = false" v-if="showCartModal" />
      </transition>
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import MediaLiveTest from '@/components/product/ProductMediaLiveTest'
import Info from '@/components/product/ProductInfo'
import SubMedia from '@/components/product/SubMedia'
import Info2 from '@/components/product/ProductInfo2'
import Description from '@/components/product/ProductDescription'
import ProductFooter from '@/components/product/ProductFooter'
import CartModal from '@/components/product/Modal/CartModal'
import {getProduct, setRecentViewList, getRecentViewList, getAccessToken} from '@/api/index'

export default {
  metaInfo: {
    title: 'Shall We Shop - 상품 상세정보'
  },
  created () {
    window.scrollTo(0, 0)
    let id = this.$route.params.prdtSysId

    getProduct(id).then((res) => {
      this.$store.state.product = res.data.jsonData.product
      this.product = res.data.jsonData.product
      this.options = res.data.jsonData.normalOptions

      if (this.$store.state.isLogin) { // 회원인 경우
        // eslint-disable-next-line
        let viewInfo = {
          prdtSysId: this.product.prdtSysId,
          viewTypeCode: 0
        }
        // 회원인 경우, 최근 본 상품 조회.
        getRecentViewList(sessionStorage.getItem('accessToken'), 0, 10)
          .then(res => {
            console.log(res)
            if (res.data.jsonData.resultCode === '0001') {
              let f = res.data.jsonData.views.find(obj => obj.prdtSysId === this.product.prdtSysId)

              // 같은 상품이 있을 경우, false.
              if (f) {
                console.log('이미 있음')
                return false

              // 없으면 insert
              } else {
                setRecentViewList(sessionStorage.getItem('accessToken'), viewInfo)
                  .then(res => {
                    if (res.data.jsonData.resultCode === '0001') {
                      console.log('추가 성공')
                    }
                  })
                  .catch(err => {
                    console.log(err)
                  })
              }
            } else if (res.data.jsonData.resultCode === '0004') {
              setRecentViewList(sessionStorage.getItem('accessToken'), viewInfo)
                .then(res => {
                  if (res.data.jsonData.resultCode === '0001') {
                    console.log('추가 성공')
                  }
                })
                .catch(err => {
                  console.log(err)
                })
            }
          })
          .catch(err => {
            console.log(err)
            if (err.response.status === 401) {
              getAccessToken(sessionStorage.getItem('refreshToken'))
                .then(res => {
                  sessionStorage.setItem('accessToken', res.data.jsonData.accessToken)
                  getRecentViewList(sessionStorage.getItem('accessToken'), 0, 10)
                    .then(res => {
                      // console.log(res)
                      let f = res.data.jsonData.views.find(obj => obj.prdtSysId === this.product.prdtSysId)

                      // 같은 상품이 있을 경우, false.
                      if (f) {
                        console.log('이미 있음')
                        return false

                      // 없으면 insert
                      } else {
                        setRecentViewList(sessionStorage.getItem('accessToken'), viewInfo)
                          .then(res => {
                            if (res.data.jsonData.resultCode === '0001') {
                              console.log('추가 성공')
                            }
                          })
                          .catch(err => {
                            console.log(err)
                          })
                      }
                    })
                })
                .catch(err => {
                  if (err.response.status === 401) {
                    this.$store.dispatch('logOut')
                    this.$router.push('/Login')
                  }
                })
            }
          })
      } else { // 비회원인 경우
        if (localStorage.getItem('nonMemberRecentItem')) { // 최근 본 상품이 있다면,
          let recentItem = JSON.parse(localStorage.getItem('nonMemberRecentItem'))
          let nowIndex = null

          for (let i = 0; i < recentItem.length; i++) {
            const item = recentItem[i]

            if ((new Date().getTime() - new Date(item.expire).getTime()) > 0) {
              recentItem.splice(i, 1)
            }

            if (item.prdtSysId === res.data.jsonData.product.prdtSysId) {
              nowIndex = i
            }
          }

          let date = new Date()
          date.setDate(date.getDate() + 7)

          if (nowIndex !== null) { // 최근 본 상품중 중복 있을 경우
            recentItem.splice(nowIndex, 1)
            recentItem.push({
              prdtSysId: res.data.jsonData.product.prdtSysId,
              expire: date
            })

            localStorage.setItem('nonMemberRecentItem', JSON.stringify(recentItem))
          } else { // 최근 본 상품 중 중복이 없을 경우
            recentItem.push({
              prdtSysId: res.data.jsonData.product.prdtSysId,
              expire: date
            })

            localStorage.setItem('nonMemberRecentItem', JSON.stringify(recentItem))
          }
        } else { // 최근 본 상품이 없다면
          let date = new Date()
          date.setDate(date.getDate() + 7)

          let recentItem = [{
            prdtSysId: res.data.jsonData.product.prdtSysId,
            expire: date
          }]

          localStorage.setItem('nonMemberRecentItem', JSON.stringify(recentItem))
        }
      }
    }
    ).catch((e) => console.log(e)
    )
  },
  data () {
    return {
      mode: 'info',
      title: '상품상세',
      product: {},
      buyMode: false,
      showCartModal: false,
      options: [],
      playedIndex: 0
    }
  },
  components: {
    Bar, MediaLiveTest, SubMedia, Info, Info2, Description, ProductFooter, CartModal
  },
  methods: {
    addedCartItem () {
      this.showCartModal = true
      setTimeout(() => {
        this.showCartModal = false
      }, 3000)
    },
    play (idx) {
      this.playedIndex = idx
    }
  },
  beforeDestroy () {
    this.$store.commit('deleteAllOption')
  }
}
</script>

<style>
.productDetailWrap{
  min-width: 360px;
}
.productDetailWrap .darkFilter{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
