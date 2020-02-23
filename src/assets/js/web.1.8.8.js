/* eslint-disable eqeqeq */
/* web.1.8.8.js (2020-01-21) */

var isAnd = (navigator.userAgent.toLocaleLowerCase().indexOf('android') >= 0)
var isIos = (navigator.userAgent.toLocaleLowerCase().indexOf('iphone') >= 0)
var isIpad = (navigator.userAgent.toLocaleLowerCase().indexOf('ipad') >= 0)
var isIe = (function () {
  var agent = navigator.userAgent.toLowerCase()
  if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf('msie') != -1)) {
    return true
  } else {
    return false
  }
})()

var _MAKERS_ = {
  DEVICE: {
    isAnd: isAnd,
    isIos: isIos,
    isIpad: isIpad,
    isIe: isIe,
    isIphoneX: (function () { return isIphoneX() })()

  },
  STATE: {
    OVERRIDE_FOOTER_EVENT: false
  },
  CONFIG: {
    OVERRIDE_FOOTER_EVENT: function (bOverride) {
      var override = bOverride || !_MAKERS_.STATE.OVERRIDE_FOOTER_EVENT    
      _MAKERS_.STATE.OVERRIDE_FOOTER_EVENT = override
    },
    FORCE_WK_ON_RESUME: function () {
      if (_MAKERS_.DEVICE.isAnd === true) return
      if (_MAKERS_.DEVICE.isMakersApp === true) return

      var lastTime = Date.now()
      var watchKey = 'user_action'

      LocalStorageManager.setItem(watchKey, lastTime)
      LocalStorageManager.Watcher.watch(watchKey, function (sTimestamp) {
        var currTime = Number(sTimestamp)
        if (currTime > lastTime) {
          lastTime = currTime
          _MAKERS_.LIFE_CYCLE.ON_RESUME()
        }
      })
    }
  },
  LIFE_CYCLE: {
    ON_PAUSE: function () {},
    ON_RESUME: function () {},
    ON_REACTIVE: function () {},
    ON_REFRESH: function () {
      _MAKERS_.NATIVE.refreshOff()
      location.hash = ''
      location.reload()
    }
  }
}

_MAKERS_.NATIVE = (function () {
  function invokeSafely (func) {
    return function () {
      var args = Array.prototype.slice.call(arguments)
      try {
        func.apply(null, args)
      } catch (e) {}
    }
  }

  function makeInvokerSafe (oInvoker, onInvokeSafeSuccess) {
    for (var invoker in oInvoker) {
      if (!oInvoker.hasOwnProperty(invoker)) continue
      oInvoker[invoker] = invokeSafely(oInvoker[invoker])
    }

    if (onInvokeSafeSuccess) {
      onInvokeSafeSuccess(oInvoker)
    }

    return oInvoker
  }

  function assignWithNoop (obj, source) {
    for (var key in source) {
      if (!source.hasOwnProperty(key)) continue
      obj[key] = function () {}
    }
    return obj
  }

  var _UNDEFINED_INVOKER = (function () {
    var undefinedInvoker = {}
    undefinedInvoker = assignWithNoop(undefinedInvoker, _ANDROID_INVOKER_)
    undefinedInvoker = assignWithNoop(undefinedInvoker, _IOS_INVOKER_)
    return undefinedInvoker
  })()

  var _INVOKER_ = (function setInvoker () {
    if (_MAKERS_.DEVICE.isMakersAppAnd === true) return _ANDROID_INVOKER_
    if (_MAKERS_.DEVICE.isMakersAppIos === true) return _IOS_INVOKER_
    return _UNDEFINED_INVOKER
  })()

  return makeInvokerSafe(_INVOKER_, function onInvokeSafeSuccess (invoker) {
    if (_MAKERS_.DEVICE.isMakersAppIos === true) {
      invoker.hideTitle()
    }
  })
})()

function getStringLength (str) {
  var korea_str_length = 0
  korea_str_length = (escape(str) + '%u').match(/%u/g).length - 1
  return (str.length + korea_str_length)
}

String.prototype.cut = function (len) {
  var str = this
  var l = 0
  for (var i = 0; i < str.length; i++) {
    l += (str.charCodeAt(i) > 128) ? 2 : 1
    if (l > len) {
      return str.substring(0, i)
    }
  }
  return str
}

function replaceUrl (url) {
  window.location.replace(url)
}

var confirmClose = false
function closeWebView () {
  if (confirmClose) {
    openConfirmLayer('메이커스를 종료하시겠습니까?', "tiaraPush('cancel', 'confirm_close_webview'); if (isAnd) {kakaoTalk.close();} else {location.href = 'app://closeWebView';}", '종료', '취소')
  } else {
    if (isAnd) {
      kakaoTalk.close()
    } else {
      location.href = 'app://closeWebView'
    }
  }
}

function webviewClose () {
  if (isAnd) {
    kakaoTalk.close()
  } else {
    location.href = 'app://closeWebView'
  }
}

function onCloseWebViewClick () {
  tiaraPush('close', 'global_module')

  if (typeof onCloseWebView !== 'undefined') {
    onCloseWebView()
  } else {
    openConfirmLayer('메이커스를 종료하시겠습니까?', "tiaraPush('close', 'confirm_close_webview'); webviewClose();", '종료', '취소')
  }
}

function isIphoneX () {
  if (isIos === false) return false
  if (isIpad === false) return false

  try {
    var ratio = window.devicePixelRatio || 1

    var screen = {
      width: window.screen.width * ratio,
      height: window.screen.height * ratio
    }

    var iPhoneX = (screen.width === 1125 && screen.height === 2436)
    var iPhoneXs = (screen.width === 1125 && screen.height === 2436)
    var iPhoneXr = (screen.width === 828 && screen.height === 1792)
    var iPhoneXsMax = (screen.width === 1242 && screen.height === 2688)

    return (iPhoneX || iPhoneXs || iPhoneXr || iPhoneXsMax)
  } catch (e) {
    console.error(e)
    return false
  }
}

function openPlusFriendPopup (title, body, tiaraEvent, valueId) {
  if (tiaraEvent != null) {
    $('#plusfriendLayer').addClass(tiaraEvent)
    tiaraEvent = (valueId != null) ? "'" + tiaraEvent + "','" + valueId + "'" : "'" + tiaraEvent + "'"
    $('#plusfriendLayer').find('.inner_plusfriend_layer .layer_body .link_plusfriend').attr('href', 'javascript:joinPlusFriend(' + tiaraEvent + ');')
  }
  if (title != '' || body != '') {
    $('#plusfriendLayer').find('.inner_plusfriend_layer .layer_body .tit_plusfriend').html(title)
    $('#plusfriendLayer').find('.inner_plusfriend_layer .layer_body .desc_plusfriend').html(body)
  }
  $('#plusfriendLayer').show()
  $('#plusfriendLayer').on('touchmove', function (e) {
    var event = e.originalEvent
    event.preventDefault()
  })
  dimmedScreen(true)
}

function closePlusFriendLayer () {
  $('#plusfriendLayer').hide().attr('class', 'new_contact_layer')
  dimmedScreen(false)
}

function joinPlusFriend (tiaraEvents, valueId) {
  $.ajax({
    url: '/api/v1/user/join_makers_friend.json',
    type: 'POST',
    dataType: 'json',
    cache: false,
    success: function (json) {
      closePlusFriendLayer()
      if (json.msgCode == 1) {
        if (tiaraEvents != null) {
          tiaraPush('addPlusFriend', tiaraEvents, valueId)
        } else {
          tiaraPush('addPlusFriend')
        }

        function onEncoreItem () {
          encoreItem(valueId)
        }

        function onPreorderItem () {
          preorderItem(valueId)
        }

        function onDefaultJoinMakersFriend () {
          toast('카카오메이커스를 카카오톡에 친구 추가하였습니다. (동의일시:' + json.data.joinAt + ')')

          if (tiaraEvents === 'encore_item' && valueId !== null) {
            onEncoreItem(valueId)
          }

          if (tiaraEvents === 'preorder_item' && valueId !== null) {
            onPreorderItem(valueId)
          }
        }

        function onEmoticonTubeJoinMakersFriend () {
          toastWithHtml('카카오메이커스 플러스친구를 맺었습니다.<br>' + json.data.joinAt)

          if (tiaraEvents === 'encore_item' && valueId !== null) {
            onEncoreItem(valueId)
          }

          if (tiaraEvents === 'preorder_item' && valueId !== null) {
            onPreorderItem(valueId)
          }

          try {
            if (json.data.isEventPeriod === undefined) {
              return
            }

            if (json.data.isEventPeriod === false) {
              setTimeout(function () {
                toastWithHtml('이모티콘 지급 이벤트가 종료되었습니다.')
              }, 1400)
              return
            }

            if (json.data.isEmoticonAvailable === false) {
              setTimeout(function () {
                toastWithHtml('이모티콘 지급 이벤트가 종료되었습니다.')
              }, 1400)
              return
            }

            if (json.data.isAlreadyEmoticonSend === true) {
              setTimeout(function () {
                toastWithHtml('카카오톡으로 이모티콘이 지급되었습니다.')
              }, 1400)
              return
            }

            if (json.data.emoticonSendResult === true) {
              setTimeout(function () {
                toastWithHtml('카카오톡으로 이모티콘이 지급되었습니다.')
              }, 1400)
              return
            }

            if (json.data.emoticonSendResult === false) {
              setTimeout(function () {
                toastWithHtml('일시적인 사유로 이모티콘 지급에 실패하였습니다.<br>반복되면 고객센터로 문의해 주세요.')
              }, 1400)
            }
          } catch (e) {}
        }

        var selectedJoinMakersFriend = onEmoticonTubeJoinMakersFriend
        selectedJoinMakersFriend()
        joinPlusFriend.__success = true
      } else if (json.msgCode == 101) {
        openAlertLayer('이미 친구로 등록되어있습니다.')
      } else if (json.msgCode == -101) {
        openAlertLayerJsFunc('로그인 후에 이용해주세요.', 'location.href="/app"')
      } else if (json.msgCode == -510) {
        openAlertLayerJsFunc('로그인 후에 이용해주세요.', 'location.href="/app"')
      } else if (json.msgCode == -523) {
        openAlertLayer('더 이상 플러스친구를 추가할 수 없습니다.<br/>플러스친구는 2,000명까지 추가 가능합니다.')
      } else {
        joinPlusFriend.__success = false
        openAlertLayer('요청에 실패했습니다. 잠시 후 다시 시도해주세요.')
      }
    },
    error: function () {
      joinPlusFriend.__success = false

      openAlertLayer('요청에 실패했습니다. 잠시 후 다시 시도해주세요.')
    }
  })
}

function tiaraPush (tiaraAction, tiaraPath, tiaraValue) {
  try {
    var eventArr = [ '__trackEvent', tiaraAction ]

    if (tiaraPath != null) {
      if ($.isNumeric(tiaraPath)) {
        eventArr.push('_')
        eventArr.push(tiaraPath)
      } else {
        eventArr.push(tiaraPath)
        if (tiaraValue != null) { eventArr.push(tiaraValue) } else if ($.isNumeric(tiaraPath)) { eventArr.push(tiaraPath) }
      }
    } else {
      if ($.isNumeric(tiaraPath)) {
        eventArr.push('_')
        eventArr.push(tiaraPath)
      }
    }

    _tiq.push(eventArr)
  } catch (e) {
    console.error(e)
  }
}

function fbqTrack (evtCode, evtParam) {
  if (isIos) { return }
  if (isIpad) { return }
  try {
    fbq('track', evtCode, evtParam)
  } catch (e) {
    console.error(e)
  }
}

function cleanReport (bbsId, articleId, commentId, contentType) {
  tiaraPush('cleanReport', bbsId)
  var cleanReportUrl = '/clean_report?bbs_id=' + bbsId + '&article_id=' + articleId + '&comment_id=' + commentId + '&content_type=' + contentType
  $('#clean_report_layer').load(cleanReportUrl)
}

function openShareKakaoStoryByDevice (oStoryConfig) {
  var selectedKakaoStoryFn = isPc() === true ? Kakao.Story.share : Kakao.Story.open
  selectedKakaoStoryFn(oStoryConfig)
}

/**
 * 레거시 코드
 * poll.vm, earlybird.vm 에서 사용 중
 */
function shareStory (url, text) {
  if (url.indexOf(';') > 0) {
    url = url.substring(0, url.indexOf(';'))
  }

  openShareKakaoStoryByDevice({ url: url, text: text })
}

function getMetaTag (metaName, attribute) {
  var metaTag = 'meta[property=' + metaName + ']'
  var element = document.querySelector('meta[property="og:title"]')
  var content = element && element.getAttribute(attribute)
  return (content == null) ? '' : content
}

function shareStoryMeta (url) {
  if (url.indexOf(';') > 0) { url = url.substring(0, url.indexOf(';')) }
  var text = '카카오메이커스에서\n' + getMetaTag('og:title', 'content')
  if (url != null) {
    if (url.indexOf('/item') != -1) {
      text += '\n같이 구경해요~'
    } else if (url.indexOf('/brand') != -1) {
      text += ' 브랜드\n같이 구경해요~'
    }
  }

  openShareKakaoStoryByDevice({ url: url, text: text })
}

function toggleSideMenuVue () {
  if (!__sidemenu__) return
  __sidemenu__.toggle()
}

function scrollFreeze (b) {
  var hiddenOrScroll = (b) ? 'hidden' : ''
  var overflowStyle = {
    'overflow-x': hiddenOrScroll,
    'overflow-y': hiddenOrScroll
  }

  $('html').css(overflowStyle)
  $('body').css(overflowStyle)
}

/**
 * moveBack의 레퍼러 관련 사항 모두 한 곳으로 모음
 * moveBack 위치 찾은 뒤 테스트 진행
 */
function moveBack (sBackHref) {
  function checkBackableReferrer () {
    var currentReferrer = document.referrer
    if (currentReferrer.indexOf(window.location.hostname) == -1) {
      return true
    }

    return (currentReferrer.indexOf('com/r') != -1 && currentReferrer.indexOf('com/review') == -1)
  }

  function hasBackableReferrer () {
    var asBackableReferrer = (function () {
      var referrer = document.referrer
      if (checkBackableReferrer() === true) return ''
      return referrer
    })()

    return asBackableReferrer !== ''
  }

  try {
    tiaraPush('mov_prev', 'global_module')
  } catch (e) {}

  try {
    if (sBackHref) {
      location.href = sBackHref
      return
    }

    if (hasBackableReferrer() === true) {
      history.back()
      return
    }

    location.href = '/'
  } catch (e) {
    location.href = '/'
  }
}

function moveTop () {
  try {
    tiaraPush('mov_top', 'global_module')
  } catch (e) {}

  $('html, body').animate({ scrollTop: 0 })
}

/**
 * 특정 레이어를 화면 vertical 정렬하는데 사용된다.
 */
function moveMiddleLayer (obj) {
  var fTop = $(window).scrollTop() + (($(window).height() - obj.height()) * 2 / 5)
  obj.css('top', fTop + 'px')
  var tLayerMiddle = setTimeout(function () {
    clearTimeout(tLayerMiddle)
    var mTop = $(window).scrollTop() + (($(window).height() - obj.height()) * 2 / 5)
    if (mTop != fTop) { obj.css('top', mTop + 'px') }
  }, 200)
}

function openAlertLayer (contents) {
  openAlertLayerJsFunc(contents, '')
}

function openAlertLayerJsFunc (contents, js_func) {
  $('#alertLayerContents').html(contents.replace(/\n/g, '<br/>'))
  $('#alertLayer').fadeIn()
  // moveMiddleLayer($("#alertLayer"));
  $('#alertLayer').on('touchmove', function (e) {
    var event = e.originalEvent
    event.preventDefault()
  })
  dimmedScreen(true)
  $('#alertLayerBtnConfirm').attr('onclick', ((js_func == '') ? 'closeAlertLayer()' : js_func))
}

function closeAlertLayer () {
  $('#alertLayer').fadeOut()
  $('#alertLayer').off('touchmove')
  dimmedScreen(false)
}

function openConfirmLayer (contents, js_func, btnOkTxt, btnCancelTxt) {
  $('#confirmLayerContents').html(contents.replace(/\n/g, '<br/>'))
  $('#confirmLayerBtnAgree').attr('onclick', js_func)
  $('#confirmLayerBtnAgree').html((btnOkTxt == '') ? '확인' : btnOkTxt)
  $('#confirmLayerBtnCancel').html((btnCancelTxt == '') ? '취소' : btnCancelTxt)
  $('#confirmLayer').fadeIn()
  // moveMiddleLayer($("#confirmLayer"));
  $('#confirmLayer').on('touchmove', function (e) {
    var event = e.originalEvent
    event.preventDefault()
  })
  dimmedScreen(true)
}
function closeConfirmLayer () {
  $('#confirmLayer').fadeOut()
  $('#confirmLayer').off('touchmove')
  if (confirmClose && $('#confirmLayerBtnAgree').html() == '종료') {
    tiaraPush('close', 'confirm_close_webview')
  }
  dimmedScreen(false)
}

function closeFriendLayer () {
  $('#friendLayer').fadeOut()
  $('#friendLayer').off('touchmove')
  dimmedScreen(false)
}

/**
 * 공유 주소 복사하기 레이어의 URL을 설정한다
 */
function copyShareUrlLayer (obj) {
  if (isIos || isIpad) {
    var editable = obj.contentEditable
    var readOnly = obj.readOnly

    obj.contentEditable = true
    obj.readOnly = false

    var range = document.createRange()
    range.selectNodeContents(obj)

    var selection = window.getSelection()
    selection.removeAllRanges()
    selection.addRange(range)

    obj.setSelectionRange(0, 999999)
    obj.contentEditable = editable
    obj.readOnly = readOnly
  } else {
    obj.select()
  }
  try {
    document.execCommand('copy')
    toast('URL이 복사되었습니다.')
  } catch (err) {}
}

function openShareLayer (oMutateShareUrl) {
  tiaraPush('share')

  setShareDatasAll(oMutateShareUrl)

  var shareLayer = $('#shareLayer')

  moveMiddleLayer(shareLayer)

  shareLayer.fadeIn()
  shareLayer.on('touchmove', function (e) {
    var event = e.originalEvent
    event.preventDefault()
  })

  dimmedScreen(true)
}

function closeShareLayer () {
  var shareLayer = $('#shareLayer')

  shareLayer.fadeOut()
  shareLayer.off('touchmove')

  dimmedScreen(false)
}

function openPollImageLayer (url) {
  var pollItemImage = $('#pollItemImage')
  var pollImageLayer = $('#poll_image_layer')

  pollItemImage.attr('src', url)
  pollImageLayer.fadeIn()
  pollImageLayer.css('top', ($(window).scrollTop() + (($(window).height() - pollImageLayer.height()) * 2 / 5)) + 'px')

  pollImageLayer.on('touchmove', function (e) {
    var event = e.originalEvent
    event.preventDefault()
  })

  dimmedScreen(true)
}

function closePolImageLayer () {
  var pollItemImage = $('#pollItemImage')
  var pollImageLayer = $('#poll_image_layer')

  pollImageLayer.fadeOut()
  pollImageLayer.off('touchmove')

  pollItemImage.attr('src', '//t1.daumcdn.net/makers/images/blank.png')

  dimmedScreen(false)
}

function getShareUrl () {
  function getCleanUrl () {
    var loc = window.location
    var sep = '//'
    var cleanUrl = loc.protocol + sep + loc.host + loc.pathname

    return cleanUrl
  }

  return getCleanUrl()
}

function dimmedScreen (b) {
  scrollFreeze(b)

  var dimmedLayer = $('#dimmedLayer')
  var kakaoContent = $('#kakaoContent')
  var kakaoHead = $('#kakaoHead')
  var kakaoFoot = $('#kakaoFoot')
  var sideMenu = $('#sideMenu')

  if (b) {
    dimmedLayer.css('top', $(window).scrollTop() + 'px')
    dimmedLayer.fadeIn()
    dimmedLayer.on('touchmove', function (e) {
      var event = e.originalEvent
      event.preventDefault()
    })
    kakaoContent.on('touchmove', function (e) {
      var event = e.originalEvent
      event.preventDefault()
    })
    kakaoHead.attr('aria-hidden', true)
    sideMenu.attr('aria-hidden', true)
    kakaoContent.attr('aria-hidden', true)
    kakaoFoot.attr('aria-hidden', true)
  } else {
    dimmedLayer.fadeOut()
    dimmedLayer.off('touchmove')
    kakaoContent.off('touchmove')
    kakaoHead.removeAttr('aria-hidden')
    sideMenu.removeAttr('aria-hidden')
    kakaoContent.removeAttr('aria-hidden')
    kakaoFoot.removeAttr('aria-hidden')
  }
}

function escapeContents (content) {
  if (content == null || content == '' || content == undefined) return ''

  content = content.replace(/</g, '&lt;').replace(/>/g, '&gt;')
  content = content.replace(/(?:\r\n|\r|\n|\\n)/g, '<br />')
  content = content.replace(/(javascript)/ig, 'javas cript')
  content = content.replace(/(\b(https?|ftp|file):\/\/[\-A-Z0-9+&@#\/%?=~_|!:,.;]*[\-A-Z09+&@#\/%=~_|]\.(jpg|jpeg|bmp|gif|png))/ig, '<img src="$1" style="max-width:300px;min-width:100px;height:auto;">')
  content = content.replace(/((?!.*(jpg|jpeg|bmp|gif|png))(?:https?|ftp|file):\/\/[\-A-Z0-9+&@#\/%?=~_|!:,.;]*[\-A-Z09+&@#\/%=~_|])/ig, '<a href="$1" target="_blank">$1</a>')
  content = content.replace(/\\/g, '')
  return content
}

function escapeContentsNoLink (content) {
  if (content == null || content == '' || content == undefined) return ''

  content = content.replace(/</g, '&lt;').replace(/>/g, '&gt;')
  content = content.replace(/(?:\r\n|\r|\n|\\n)/g, '<br />')
  content = content.replace(/(javascript)/ig, 'javas cript')
  content = content.replace(/\\/g, '')
  return content
}

function escapeContentsWithLazyImageLoading (content) {
  if (content == null || content == '' || content == undefined) return ''

  content = content.replace(/</g, '&lt;').replace(/>/g, '&gt;')
  content = content.replace(/(?:\r\n|\r|\n)/g, '<br />')
  content = content.replace(/(javascript)/ig, 'javas cript')
  content = content.replace(/(\b(https?|ftp|file):\/\/[\-A-Z0-9+&@#\/%?=~_|!:,.;]*[\-A-Z09+&@#\/%=~_|]\.(jpg|jpeg|bmp|gif|png))/ig, '<img data-original="$1" style="max-width:300px;min-width:100px;height:auto;">')
  content = content.replace(/((?!.*(jpg|jpeg|bmp|gif|png))(?:https?|ftp|file):\/\/[\-A-Z0-9+&@#\/%?=~_|!:,.;]*[\-A-Z09+&@#\/%=~_|])/ig, '<a href="$1" target="_blank">$1</a>')
  return content
}

function setLazyload () {
  $('img[data-original]').lazyload({
    placeholder: '//t1.daumcdn.net/makers/static/common/imgs/holder/400x400.png',
    event: 'scroll',
    threshold: 1000,
    skip_invisible: true
  })
}

function hideFooter () {
  if (_MAKERS_.STATE.OVERRIDE_FOOTER_EVENT) {
    return
  }

  if ($('#kakaoFoot').length <= 0) {
    return
  }

  $('#kakaoFoot').css('margin-top', '').hide()
}

function showFooter () {
  if (_MAKERS_.STATE.OVERRIDE_FOOTER_EVENT) {
    return
  }

  var kakaoFoot = $('#kakaoFoot')
  var joinPlusFriendBottom = $('#joinPlusFriendBottom')
  var win = $(window)

  if (kakaoFoot.length <= 0) {
    return
  }

  var tFooterShow = setTimeout(function () {
    clearTimeout(tFooterShow)
    kakaoFoot.fadeIn()
    if (kakaoFoot.offset().top < $(window).outerHeight() - kakaoFoot.outerHeight()) {
      if (joinPlusFriendBottom.length > 0) {
        joinPlusFriendBottom.css('margin-top', (win.height() - joinPlusFriendBottom.offset().top - joinPlusFriendBottom.outerHeight() - kakaoFoot.outerHeight()) + 'px')
      }
      kakaoFoot.css('margin-top', (win.height() - kakaoFoot.offset().top - kakaoFoot.outerHeight()) + 'px')
    }
  }, 500)
}

function numberWithCommas (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function hideLayers () {
  if ($('#shareLayer').css('display') != 'none') {
    closeShareLayer()
  }
}

function installShortcut () {
  try {
    kakaoTalk.openMakersShortcut()
  } catch (e) {
    toast('바로가기를 설치하는데 실패하였습니다.')
  }
}

function notiMobile () {
  alert('모바일 기기에서 이용 가능한 기능입니다.\n카카오톡이 설치된 스마트폰에서 이용해주세요.')
  location.href = '/pc'
}

function setMoveTopBtn (showHeight) {
  var btnMakerstop = $('.btn_makerstop')
  var win = $(window)
  win.on('scroll', UiUtil.throttle(function () {
    if (win.scrollTop() > showHeight) {
      btnMakerstop.fadeIn()
    } else {
      btnMakerstop.fadeOut()
    }
  }, 60))
}

var isToastLock = false
function toast (message) {
  var toastMessage = $('#toastMessage')
  toastMessage.text(message)
  if (!isToastLock) {
    isToastLock = true
    toastMessage.fadeIn('slow').css({ display: 'inline-block' })
    toastMessage.delay(2000).fadeOut('slow', function () {
      isToastLock = false
    })
  }
}

function toastWithHtml (message) {
  var toastMessage = $('#toastMessage')
  toastMessage.html(message)
  if (!isToastLock) {
    isToastLock = true
    toastMessage.fadeIn('slow').css({ display: 'inline-block' })
    toastMessage.delay(2000).fadeOut('slow', function () {
      isToastLock = false
    })
  }
}

function delay (millis) {
  var now = Date.now()
  while (Date.now() < now + millis) {}
}

function getCookie (key) {
  var value = ''
  if ($.cookie(key) != null && $.cookie(key) != '' && $.cookie(key) != 'undefined') {
    value = $.cookie(key)
  }
  return value
}

function setCookie (key, value) {
  $.cookie(key, value, {
    expires: 1,
    path: '/',
    domain: '.' + window.location.hostname
  })
}

function delCookie (key) {
  $.removeCookie(key, {
    path: '/',
    domain: '.' + window.location.hostname
  })
}

function toggleClassById (id, clazz) {
  var toggleElem = $('#' + id)
  if (toggleElem.hasClass(clazz)) {
    toggleElem.removeClass(clazz)
  } else {
    toggleElem.addClass(clazz)
  }
}

function isPc () {
  var filter = 'win16|win32|win64|mac|macintel'
  if (navigator.platform) {
    if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
      return false
    } else {
      return true
    }
  }
  return false
}

/**
 * sUrl이 http혹은 https로 시작할 경우 sUrl을 리턴
 * sUrl이 //로 시작할 경우 location.protocol을 덧붙임
 * @param {string} sUrl
 * @returns {string}
 */
function getUrlOfMakersApp (sUrl) {
  var url = sUrl || ''

  if (url.indexOf('http') === 0) return url
  if (url.indexOf('//') !== -1) return location.protocol + url
  return url
}

function goUrl (action, url) {
  function onNativeOpenUrl () {
    var goToUrl = getUrlOfMakersApp(url)
    _MAKERS_.NATIVE.openUrl(goToUrl)
  }

  function onGoLocationHref () {
    location.href = url
  }

  try {
    if (_MAKERS_.DEVICE.isMakersApp) {
      onNativeOpenUrl()
    } else {
      onGoLocationHref()
    }
  } catch (e) {
    console.error(e)
    onGoLocationHref()
  }
}

function goCategory (categoryId, categoryName) {
  var title = categoryName || '카테고리'
  tiaraPush('mov_category', 'footer', categoryId)
  goUrl('open', '/category/' + categoryId, title)
}

$('a[data-pc-href]').on('click', function (e) {
  var device = _MAKERS_.DEVICE
  if (device.isKakaoCommonApp === true || device.isKakaoMakersApp === true || device.isMakersApp === true) return
  e.preventDefault()
  var self = $(this)
  var pcHref = self.data('pc-href')
  location.href = pcHref
})

$('a[data-makers-href]').on('click', function (e) {
  if (_MAKERS_.DEVICE.isMakersApp === false) return
  e.preventDefault()

  var self = $(this)
  var rawMakersHref = self.data('makers-href') || ''
  var makersHref = getUrlOfMakersApp(rawMakersHref)
  var isMakersAppScheme = rawMakersHref.indexOf('makers://app') > -1

  function executeMakersAppScheme () {
    location.href = rawMakersHref
  }

  function executeMakersOpenUrl () {
    _MAKERS_.NATIVE.openUrl(makersHref)
  }

  var selectedExecutor = isMakersAppScheme === true
    ? executeMakersAppScheme
    : executeMakersOpenUrl

  selectedExecutor()
})

function nowSecond () {
  var now = new Date()
  return now.getSeconds()
}

var LocalStorageManager = (function (context) {
  function isAvailable () {
    if (context.localStorage !== null && context.localStorage !== undefined) return true
  }

  function getLocalStorage () {
    if (!isAvailable()) return null
    return context.localStorage
  }

  function setItem (key, value) {
    if (!isAvailable()) return false
    localStorage.setItem(key, value)

    return true
  }

  function getItem (key) {
    if (!isAvailable()) return null
    return localStorage.getItem(key)
  }

  var Watcher = (function () {
    var watchers = {}

    function isAvailable () {
      if (isAnd) return false
      if (getLocalStorage() !== null && getLocalStorage() !== undefined) return true
    }

    function addWatcher (key, watcherInterval) {
      watchers[key] = watcherInterval
    }

    function removeWatcher (key) {
      var watcherInterval = watchers[key]
      if (watcherInterval === null || watcherInterval === undefined) return
      context.clearInterval(watcherInterval)
      delete watchers[key]
    }

    function watch (key, callback, interval) {
      if (!isAvailable()) return
      if (key === undefined || typeof key !== 'string') throw 'LocalStroageWatch.watch needs key'
      if (callback === undefined || typeof callback !== 'function') throw 'LocalStroageWatch.watch needs callback'
      var interval = interval || 400

      var watcherInterval = context.setInterval(function () {
        var value = getLocalStorage().getItem(key)
        callback(value)
      }, interval)

      addWatcher(key, watcherInterval)
    }

    function stop (key) {
      if (!isAvailable()) return
      removeWatcher(key)
    }

    return {
      watch: watch,
      stop: stop
    }
  })()

  return {
    Watcher: Watcher,
    setItem: setItem,
    getItem: getItem
  }
})(this)

var UrlUtil = (function UrlUtil () {
  function addParameterToUrl (sUrl, sParam, sValue) {
    if (!sUrl) throw 'UrlUtil.addParameter needs url'
    if (!sParam) throw 'UrlUtil.addParameter needs param'
    if (!sValue) throw 'UrlUtil.addParameter needs param value'
    var url = sUrl
    url += (url.split('?')[1] ? '&' : '?') + sParam + '=' + sValue
    return url
  }

  function getParams (url) {
    var url = url || location.href
    var regex = /[?&]([^=#]+)=([^&#]*)/g
    var params = {}
    var match
    while (match = regex.exec(url)) {
      params[match[1]] = match[2]
    }
    return params
  }

  return {
    addParameterToUrl: addParameterToUrl,
    getParams: getParams
  }
})()

var NumberUtil = (function NumberUtil () {
  function withCommas (num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return {
    withCommas: withCommas
  }
})()

var StringUtil = (function StringUtil () {
  function trim (str) {
    if (!String.prototype.trim) {
      return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
    }

    return str.trim()
  }

  return {
    trim: trim
  }
})()

var UiUtil = (function UiUtil () {
  function clickTargetIs (selector, e) {
    return $(e.target).is(selector)
  }

  function clickTargetIsNot (selector, e) {
    return !clickTargetIs(selector, e.target)
  }

  function throttle (fn, wait) {
    var time = Date.now()
    return function () {
      if ((time + wait - Date.now()) < 0) {
        fn()
        time = Date.now()
      }
    }
  }

  function debounce (func, wait, immediate) {
    var timeout
    return function () {
      var context = this
      var args = arguments
      var later = function () {
        timeout = null
        if (!immediate) {
          func.apply(context, args)
        };
      }
      var callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) {
        func.apply(context, args)
      }
    }
  }

  function preventElementClickWhileMS (jElem, milliSecond) {
    if (!jElem) return
    var pointerEventsNone = 'pointer-events-none'
    var timeout = milliSecond || 300

    jElem.addClass(pointerEventsNone)
    setTimeout(function () {
      jElem.removeClass(pointerEventsNone)
    }, timeout)
  }

  function preventVerticalScrollingWhileSwipe (jElem) {
    if (!(jElem instanceof jQuery)) throw 'jElem must be instance of jQuery'
    var xStart = 0
    var yStart = 0
    var touchStart = 'touchstart.preventVerticalScrollWhileSwipe'
    var touchMove = 'touchmove.preventVerticalScrollWhileSwipe'

    jElem.off(touchStart + ' ' + touchMove)
      .on(touchStart, function (e) {
        xStart = e.originalEvent.touches[0].screenX
        yStart = e.originalEvent.touches[0].screenY
      })
      .on(touchMove, function (e) {
        var xMovement = Math.abs(e.originalEvent.touches[0].screenX - xStart)
        var yMovement = Math.abs(e.originalEvent.touches[0].screenY - yStart)

        if (xMovement > yMovement * 2) {
          e.preventDefault()
        }
      })
  };

  return {
    clickTargetIs: clickTargetIs,
    clickTargetIsNot: clickTargetIsNot,
    throttle: throttle,
    debounce: debounce,
    preventElementClickWhileMS: preventElementClickWhileMS,
    preventVerticalScrollingWhileSwipe: preventVerticalScrollingWhileSwipe
  }
})()

var ScreenUtil = (function ScreenUtil () {
  var LANDSCAPE = 'LANDSCAPE'
  var PORTRAIT = 'PORTRAIT'

  var CLS_LANDSCAPE = 'is-orientation-landscape'
  var CLS_PORTRAIT = 'is-orientation-portrait'

  function getWidth () {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  }

  function getHeight () {
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  }

  function getOrientation () {
    return getWidth() > getHeight() === true
      ? LANDSCAPE
      : PORTRAIT
  }

  function watchOrientation (fnOrientationChange, iTimeout) {
    var timeout = iTimeout || 300

    window.addEventListener('orientationchange', function onCustomOrientationChange () {
      setTimeout(function () {
        try {
          if (fnOrientationChange !== undefined) {
            fnOrientationChange(getOrientation())
          }
        } catch (e) {}
      }, timeout)
    })
  }

  (function bindDefaultOrientationChange () {
    var BODY = document.getElementsByTagName('body')[0]

    function onDefaultOrientationChange () {
      try {
        if (getOrientation() === LANDSCAPE) {
          BODY.classList.add(CLS_LANDSCAPE)
          BODY.classList.remove(CLS_PORTRAIT)
          return
        }

        if (getOrientation() === PORTRAIT) {
          BODY.classList.add(CLS_PORTRAIT)
          BODY.classList.remove(CLS_LANDSCAPE)
        }
      } catch (e) {}
    }

    onDefaultOrientationChange()

    window.addEventListener('orientationchange', function () {
      setTimeout(function () {
        onDefaultOrientationChange()
      }, 300)
    })
  })()

  return {
    getWidth: getWidth,
    getHeight: getHeight,
    getOrientation: getOrientation,
    watchOrientation: watchOrientation
  }
})()

var BrowserUtil = (function () {
  var CLS_IE = 'is-ie';

  (function bindIeClass () {
    var BODY = document.getElementsByTagName('body')[0]
    if (isIe === false) return

    BODY.classList.add(CLS_IE)
  })()
})()

function displayLayer (fInjectedLayer, fContents, fOnLifeCycle, fOnClick) {
  var fnOpenLayer = fInjectedLayer() || openAlertLayer

  var jElemLayers = (function () {
    if (fnOpenLayer === openConfirmLayer) {
      var layer = $('#confirmLayer')
      return {
        layer: layer,
        btnConfirm: layer.find('#confirmLayerBtnAgree'),
        btnCancel: layer.find('#confirmLayerBtnCancel')
      }
    }
    if (fnOpenLayer === openAlertLayer) {
      var layer = $('#alertLayer')
      return {
        layer: layer,
        btnConfirm: layer.find('#alertLayerBtnConfirm'),
        btnCancel: layer.find('#alertLayerBtnCancel') // there is no element like alertLayerBtnCancel, just for null chain
      }
    }
    throw 'displayLayer only supports openConfirmLayer or openAlertLayer'
  })()

  var contents = fContents()
  var layerCls = contents.clsLayer || ''
  var txtContent = contents.txtContent || ''
  var txtBtnConfirm = contents.txtBtnConfirm || '확인'
  var txtBtnCancel = contents.txtBtnCancel || '취소'

  var lifeCycle = fOnLifeCycle()
  var beforeMount = lifeCycle.beforeMount || function () {}
  var mounted = lifeCycle.mounted || function () {}
  var destroyed = lifeCycle.destroyed || function () {}

  var onClick = fOnClick()
  var onBtnConfirm = function (e) {
    var fnConfirm = onClick.onBtnConfirm || function () {}
    fnConfirm(jElemLayers, destroyed, resetLayer)
  }

  var onBtnCancel = function (e) {
    var fnCancel = onClick.onBtnCancel || function () {}
    fnCancel(jElemLayers)
    resetLayer()
    destroyed(jElemLayers)
  }

  function resetLayer () {
    setTimeout(function () {
      jElemLayers.layer.removeClass(layerCls)
      jElemLayers.btnConfirm.off('click.displayLayer')
      jElemLayers.btnCancel.off('click.displayLayer')
    }, 450)
  };

  jElemLayers.layer.addClass(layerCls)
  jElemLayers.btnConfirm.text(txtBtnConfirm).one('click.displayLayer', onBtnConfirm)
  jElemLayers.btnCancel.text(txtBtnCancel).one('click.displayLayer', onBtnCancel)

  beforeMount(jElemLayers)

  fnOpenLayer(txtContent)

  mounted(jElemLayers)
}

function generatePcLoginHref (fLoginHrefMutator) {
  var loginHref = '/login'
  var loginHrefMutator = fLoginHrefMutator || function (loginHref) { return loginHref }
  return loginHrefMutator(loginHref)
}

function moveToLogin (oOpts) {
  tiaraPush('login_web')

  var oOpts = oOpts || {}
  var defaultLoginHref = '/login'
  var defaultLoginWithNextHref = defaultLoginHref + '?next=' + location.href

  var loginHrefMutator = oOpts.onMutateLoginHref || function (nextHref, defaultHref) { return nextHref }
  var generatedLoginHref = loginHrefMutator(defaultLoginWithNextHref, defaultLoginHref)

  location.href = generatedLoginHref
}

(function onMakersApp () {
  try {
    if (_MAKERS_.DEVICE.isMakersAppIos === true) {
      var body = $('body')
      if (body.hasClass('is-makers-app-ios') === true) return
      body.addClass('is-makers-app is-makers-app-ios')
    }
  } catch (e) {}
})()
