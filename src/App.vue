<template>
  <div id="app">
    <noscript>
      이 사이트를 이용하기 위해서는 자바스크립트를 활성화 시킬 필요가 있습니다.<br/>
      <a href="http://www.enable-javascript.com/ko/" target="_blank"> 브라우저에서 자바스크립트를 활성화하는 방법</a>을 참고 하세요.
    </noscript>
    <div class="a2hs">
      <p><span class="c_them">SWS - 쉐리샵</span>을 홈 화면에 설치 하시겠습니까?</p>
      <button class="add-button">설치</button>
      <button class="close-button">닫기</button>
    </div>
    <div class="iosA2hs">
      <button class="close"><img src="/static/images/close_gray.png" alt="닫기" /></button>
      <p>
        <img src="/static/images/menuUp_ios.png" alt="사파리 메뉴버튼" class="img_btn" />
        <span>을 탭하여</span>
        <img src="/static/images/shallwe_heart.png" alt="쉘위샵 하트 이미지" class="img_heart" />
        <span><span class="c_them">쉘위샵</span>을 홈화면에 추가해 주세요</span>
      </p>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['isLogin'])
  },
  mounted: function () {
    window.onpopstate = event => {
      if (sessionStorage.getItem('accessToken') === null && this.$route.path === '/MyPage') {
        this.$router.push('/')
      }
    }
    // flowplayer 스크립트 넣기
    const flowplayer = document.createElement('script')
    flowplayer.setAttribute('src', '/static/js/flowplayer.min.js')
    document.head.appendChild(flowplayer)
    const hls = document.createElement('script')
    hls.setAttribute('src', '/static/js/hls.min.js')
    document.head.appendChild(hls)
    const scroll = document.createElement('script')
    scroll.setAttribute('src', '/static/js/float-on-scroll.min.js')
    document.head.appendChild(scroll)
    const share = document.createElement('script')
    share.setAttribute('src', '/static/js/share.min.js')
    document.head.appendChild(share)

    // 쿠키를 불러와 a2hs를 닫기를 눌렀는지 체크
    let decodedCookie = decodeURIComponent(document.cookie)
    let name = 'a2hs='
    let ca = decodedCookie.split(';')
    let a2hsFlag = true
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        if (c.substring(name.length, c.length) === 'false') {
          a2hsFlag = false
        }
      }
    }

    // 쿠키설정하고 팝업 닫아주는 함수
    let setClose = (btn, el) => {
      // 닫기를 누르면 1일 셋 쿠키
      btn.addEventListener('click', (e) => {
        // hide our user interface that shows our A2HS button
        el.classList.remove('show')
        setTimeout(() => {
          el.style.display = 'none'

          var d = new Date()
          d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000))
          var expires = 'expires=' + d.toUTCString()
          document.cookie = 'a2hs=false;' + expires + ';path=/'
        }, 400)
      })
    }

    // IOS 대응
    var varUA = navigator.userAgent.toLowerCase()
    const iosA2hs = document.querySelector('.iosA2hs')
    const iosA2hsBtn = document.querySelector('.iosA2hs .close')
    if (varUA.indexOf('iphone') > -1) {
      if (varUA.indexOf('chrome') === -1 && varUA.indexOf('firefox') === -1 && varUA.indexOf('crios') === -1) {
        iosA2hs.classList.add('mobile')
        if (a2hsFlag) {
          iosA2hs.style.display = 'block'
          setTimeout(() => {
            iosA2hs.classList.add('show')
          }, 50)
        }
        setClose(iosA2hsBtn, iosA2hs)
      }
    } else if (varUA.indexOf('ipad') > -1 || varUA.indexOf('ipod') > -1 || varUA.indexOf('macintosh') > -1) {
      if (varUA.indexOf('chrome') === -1 && varUA.indexOf('firefox') === -1 && varUA.indexOf('crios') === -1) {
        iosA2hs.classList.add('pad')
        if (a2hsFlag) {
          iosA2hs.style.display = 'block'
          setTimeout(() => {
            iosA2hs.classList.add('show')
          }, 50)
        }
        setClose(iosA2hsBtn, iosA2hs)
      }
    }

    // A2HS - 안드로이드일때.
    let deferredPrompt
    const addWrap = document.querySelector('.a2hs')
    const addBtn = document.querySelector('.add-button')
    const clBtn = document.querySelector('.close-button')

    // 이미 설치되어 있을경우는 나타나지 않음. 앱을 삭제 했을 때 다시 나타남
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault()
      // Stash the event so it can be triggered later.
      deferredPrompt = e
      // Update UI to notify the user they can add to home screen
      addWrap.style.display = 'block'

      // 닫기를 누르고, 1일이 지났거나 닫기를 누른 적이 없는 경우만 나타남
      if (a2hsFlag) {
        setTimeout(() => {
          addWrap.classList.add('show')
        }, 50)
      }

      addBtn.addEventListener('click', (e) => {
        // hide our user interface that shows our A2HS button
        addWrap.classList.remove('show')
        setTimeout(() => {
          addWrap.style.display = 'none'

          // Show the prompt
          deferredPrompt.prompt()
          // Wait for the user to respond to the prompt
          deferredPrompt.userChoice.then((choiceResult) => {
            deferredPrompt = null
          })
        }, 400)
      })

      setClose(clBtn, addWrap)
    })
  }
}
</script>
<style lang="css" src="@/assets/css/flowplayer.css"></style>
<style lang="css" src="@/assets/css/common.css"></style>
<style lang="css" src="@/assets/css/swsmo.css"></style>
