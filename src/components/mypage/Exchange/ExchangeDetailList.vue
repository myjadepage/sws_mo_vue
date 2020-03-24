<template>
  <div class="itemList">
    <ul>
      <li class="item">
        <div class="itemHead">
          <p class="date">2019.03.15 18:43</p>
          <p class="state c_them" v-if="type==='history'">배송중</p>
          <p class="state c_them" v-if="type==='exchange'">취소완료</p>
        </div>
        <div class="itemBody">
          <div class="imgBox"></div>
          <a href="/ExchangeDetail" class="txtBox">
            <h2 class="itemTitle">[헤라] 센슈얼 립 세럼 글로우1호 + 클렌징 오일 정품 50ml 추가증정</h2>
            <p class="itemOption">[옵션명1] LRS200007G 작은원석 [원석컬러] 06일 라벤더</p>
          </a>
          <div class="row"  v-if="type==='history'">
            <p class="price">32,500원 / 1개</p>
          </div>
          <div class="row ibBtns"  v-if="type==='history'">
            <a href="" class="btn_them border col3 btn-first">배송조회</a>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="itemHead">
          <p class="date">2019.03.15 18:43</p>
          <p class="state" v-if="type==='history'">배송완료</p>
          <p class="state c_them" v-if="type==='exchange'">환불완료</p>
        </div>
        <div class="itemBody">
          <div class="imgBox"></div>
          <a href="/ExchangeDetail" class="txtBox">
            <h2 class="itemTitle">[헤라] 센슈얼 립 세럼 글로우1호</h2>
            <p class="itemOption">[옵션명1] LRS200007G 작은원석</p>
          </a>
          <div class="row" v-if="type==='history'">
            <p class="price">32,500원 / 1개</p>
          </div>
          <div class="row ibBtns"  v-if="type==='history'">
            <a href="" class="btn_them border col3 btn-first">배송조회</a>
            <a href="" class="btn_them border col3 gray">교환요청</a>
            <a href="" class="btn_them border col3 btn-last gray">반품요청</a>
            <a href="" class="btn_them border col2 btn-first gray">받았습니다</a>
            <a href="" class="btn_them border col2 btn-last gray">리뷰작성</a>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="itemHead">
          <p class="date">2019.03.15 18:43</p>
          <p class="state" v-if="type==='history'">환불완료</p>
          <p class="state c_them" v-if="type==='exchange'">교환완료</p>
        </div>
        <div class="itemBody">
          <div class="imgBox"></div>
          <a href="/ExchangeDetail" class="txtBox">
            <h2 class="itemTitle">[헤라] 센슈얼 립 세럼 글로우1호</h2>
            <p class="itemOption">[옵션명1] LRS200007G 작은원석</p>
          </a>
          <div class="row" v-if="type==='history'">
            <p class="price">32,500원 / 1개</p>
          </div>
        </div>
      </li>

      <!-- item group은 여러개 일때. on 클래스로 컨트롤 -->
      <!-- ex) .item.group.on -->
      <li class="item group" v-if="pageType==='history'" :class="{on:itemGroupFlag.group1}">
        <section class="item">
          <div class="itemHead">
            <p class="date">2019.03.15 18:43</p>
            <p class="state">구매완료</p>
          </div>
          <div class="itemBody">
            <div class="imgBox"></div>
            <a href="/ExchangeDetail" class="txtBox">
              <h2 class="itemTitle">[헤라] 센슈얼 립 세럼 글로우1호</h2>
              <p class="itemOption">[옵션명1] LRS200007G 작은원석</p>
            </a>
            <div class="row buyLog">
              <p class="price">32,500원 / 1개</p>
              <button class="btn_sDown" @click="itemGroupFlag.group1 = !itemGroupFlag.group1">외 2개</button>
            </div>
            <div class="row ibBtns" >
              <a href="" class="btn_them border col3 btn-first gray">구매취소</a>
            </div>
          </div>
        </section>
        <section class="item">
          <div class="itemBody">
            <div class="imgBox"></div>
            <a href="/ExchangeDetail" class="txtBox">
              <h2 class="itemTitle">[헤라] 센슈얼 립 세럼 글로우1호 + 클렌징 오일 정품 50ml 추가증정</h2>
              <p class="itemOption">[옵션명1] LRS200007G 작은원석 [원석컬러] 06일 라벤더</p>
            </a>
            <div class="row buyLog">
              <p class="price">32,500원 / 1개</p>
            </div>
            <div class="row ibBtns">
              <a href="" class="btn_them border col3 btn-first gray">구매취소</a>
            </div>
          </div>
        </section>
        <section class="item">
          <div class="itemBody">
            <div class="imgBox"></div>
            <a href="/ExchangeDetail" class="txtBox">
              <h2 class="itemTitle">[헤라] 센슈얼 립 세럼 글로우1호</h2>
              <p class="itemOption">[옵션명1] LRS200007G 작은원석</p>
            </a>
            <div class="row buyLog">
              <p class="price">32,500원 / 1개</p>
            </div>
            <div class="row ibBtns">
              <a href="" class="btn_them border col3 btn-first gray">구매취소</a>
            </div>
          </div>
        </section>
      </li>

      <li class="item group"  v-if="type==='history'" :class="{on:itemGroupFlag.group2}">
        <section class="item">
          <div class="itemHead">
            <p class="date">2019.03.15 18:43</p>
            <p class="state">구매완료</p>
          </div>
          <div class="itemBody">
            <div class="imgBox"></div>
            <a href="/ExchangeDetail" class="txtBox">
              <h2 class="itemTitle">[헤라] 센슈얼 립 세럼 글로우1호</h2>
              <p class="itemOption">[옵션명1] LRS200007G 작은원석</p>
            </a>
            <div class="row buyLog">
              <p class="price">32,500원 / 1개</p>
              <button class="btn_sDown"  @click="itemGroupFlag.group2 = !itemGroupFlag.group2">외 2개</button>
            </div>
            <div class="row ibBtns" v-if="type==='history'">
              <a href="" class="btn_them border col3 btn-first gray">구매취소</a>
            </div>
          </div>
        </section>
        <section class="item">
          <div class="itemBody">
            <div class="imgBox"></div>
            <a href="/ExchangeDetail" class="txtBox">
              <h2 class="itemTitle">[헤라] 센슈얼 립 세럼 글로우1호 + 클렌징 오일 정품 50ml 추가증정</h2>
              <p class="itemOption">[옵션명1] LRS200007G 작은원석 [원석컬러] 06일 라벤더</p>
            </a>
            <div class="row buyLog">
              <p class="price">32,500원 / 1개</p>
            </div>
            <div class="row ibBtns">
              <a href="" class="btn_them border col3 btn-first gray">구매취소</a>
            </div>
          </div>
        </section>
        <section class="item">
          <div class="itemBody">
            <div class="imgBox"></div>
            <a href="/ExchangeDetail" class="txtBox">
              <h2 class="itemTitle">[헤라] 센슈얼 립 세럼 글로우1호</h2>
              <p class="itemOption">[옵션명1] LRS200007G 작은원석</p>
            </a>
            <div class="row buyLog">
              <p class="price">32,500원 / 1개</p>
            </div>
            <div class="row ibBtns">
              <a href="" class="btn_them border col3 btn-first gray">구매취소</a>
            </div>
          </div>
        </section>
      </li>

      <li class="item"  v-if="type==='history'">
        <div class="itemHead">
          <p class="date">2019.03.15 18:43</p>
          <p class="state">배송 준비중</p>
        </div>
        <div class="itemBody">
          <div class="imgBox"></div>
          <a href="/ExchangeDetail" class="txtBox">
            <h2 class="itemTitle">[헤라] 센슈얼 립 세럼 글로우1호 + 클렌징 오일 정품 50ml 추가증정</h2>
            <p class="itemOption">[옵션명1] LRS200007G 작은원석 [원석컬러] 06일 라벤더</p>
          </a>
          <div class="row">
            <p class="price">32,500원 / 1개</p>
          </div>
          <div class="row ibBtns">
            <a href="" class="btn_them border col3 btn-first gray">구매취소</a>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  props: ['pageType'],
  data () {
    return {
      type: this.pageType,
      itemGroupFlag: {
        group1: false,
        group2: false
      }
    }
  }
}
</script>

<style>

</style>
