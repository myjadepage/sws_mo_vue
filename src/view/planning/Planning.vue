<template>
  <div>
    <Bar :val="'테마 기획전'"/>
    <PicArea></PicArea>
    <!-- <All :categorySysId1="categorySysId1"/> -->
    <div class="section_ITEM weekly_best_main">
      <h4>테마 기획전</h4>
      <ul class="box_best_item">
        <ItemTemplate v-for="(item, index) in products" :key="index" :product="item" :pickLists="pickLists"/>
      </ul>
    </div>
    <Footer />
    <ScrollTopBtn />
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import All from '@/components/subpage/shared/All'
import PicArea from '@/components/planning/PicArea'
import ItemTemplate from '@/components/subpage/shared/SaleEntity'
import ScrollTopBtn from '@/components/subpage/shared/ScrollTopBtn'
import Footer from '@/components/shared/Footer'
import {getProductLists, getPicksList} from '@/api/index.js'

export default {
  metaInfo: {
    title: 'Shall We Shop - 테마 기획전'
  },
  components: {
    Bar, ScrollTopBtn, Footer, All, PicArea, ItemTemplate
  },
  created () {
    window.scrollTo(0, 0)

    this.getList()
    this.getPicks()
  },
  data () {
    return {
      type: this.$route.params.type,
      startIndex: 0,
      products: [],
      pickLists: []
    }
  },
  methods: {
    getList () {
      let getInfo = 'startIndex=' + this.startIndex + '&rowCount=20'
      // console.log(getInfo)
      getProductLists(getInfo)
        .then(res => {
          // console.log(res)
          if (res.data.jsonData.resultCode === '0001') {
            this.products = res.data.jsonData.products
            this.startIndex = res.data.jsonData.startIndex
          } else if (res.data.jsonData.resultCode === '0004') {
            this.products = []
            this.startIndex = 0
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    getPicks () {
      if (sessionStorage.getItem('accessToken')) {
        getPicksList(sessionStorage.getItem('accessToken'), '?startIndex=0&rowCount=50')
          .then(res => {
            // console.log(res)
            if (res.data.jsonData.resultCode === '0001') {
              this.pickLists = res.data.jsonData.prdtPicks
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
}
</script>

<style>

</style>
