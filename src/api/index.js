import axios from 'axios'

const config = {
  baseUrl4: 'http://192.168.1.40:3000/api/v1/',
  baseUrl2: 'http://192.168.1.20:3000/api/v1/',
  baseUrl3: 'http:///api.shallwe.shop/api/v1/',
  baseUrl: 'http://shallwe.shop:3000/api/v1/' // 개발
  // baseUrl: 'http://shallwe.shop/api/v1/' // 배포
}

/**
 * 메인
 */
// 상품리스트
function getProductList (param = '') {
  return axios.get(`${config.baseUrl}products/lists${'?' + param}`)
}

// 카테고리
function getCategoryList () {
  return axios.get(`${config.baseUrl}categories`, {
    params: {'categoryLevel': '1'}
  })
}

// 상품세일
function getSaleProduct () {
  return axios.get(`${config.baseUrl}products/salelists`)
}

// 주간베스트상품(Weekly)
function getWeeklyProduct () {
  return axios.get(`${config.baseUrl}products/weeklylists`)
}

// 베스트브랜드
function getBrandList () {
  return axios.get(`${config.baseUrl}brands`)
}

// 라이브방송정보 리스트
function getLiveProductList () {
  return axios.get(`${config.baseUrl}broadcasts/mainlists`)
}

/**
 * 라이브 방송정보
 */
function getLiveProduct (broadcastSysId) {
  return axios.get(`${config.baseUrl2}broadcasts/${broadcastSysId}/medialists`)
}

/*
주문
*/

// 주문정보등록
function postOrders (jsonData) {
  var formdata = new FormData()
  formdata.set('jsonData', JSON.stringify(jsonData))

  return axios.post(`${config.baseUrl}orders`, formdata)
}
// 주문결제정보 등록
function payOrders (jsonData, orderSysId) {
  var formdata = new FormData()
  formdata.set('jsonData', JSON.stringify(jsonData))
  formdata.set('orderSysId', orderSysId)

  return axios.post(`${config.baseUrl}${orderSysId}/pays`, formdata)
}

// 회원 정보 가져오기
function getUserInfo (accessToken) {
  let userSysId = parseJwt(accessToken).authSysId
  return axios.get(`${config.baseUrl}users/${userSysId}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${accessToken}`
    }
  })
}

// 회원 주소 목록 가져오기
function getMemberAddrList (accessToken) {
  let userSysId = parseJwt(accessToken).authSysId
  return axios.get(`${config.baseUrl}users/${userSysId}/listaddress`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${accessToken}`
    }
  })
}

// 회원 주소 등록
function addMemberAddress (accessToken, addrInfo) {
  let userSysId = parseJwt(accessToken).authSysId
  let formdata = new FormData()
  formdata.set('jsonData', JSON.stringify(addrInfo))
  return axios({
    method: 'post',
    url: `${config.baseUrl}users/${userSysId}/address`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${accessToken}`
    },
    data: formdata
  })
}

// 추가 배송비 조회
function getAddingCosts (postNumber) {
  return axios.get(`${config.baseUrl}operations/deliveries/addingCosts/${postNumber}`)
}

/**
 *
 * 상품 상세
 */
// 단일 상품
function getProduct (id) {
  return axios.get(`${config.baseUrl}products/${id}`)
}

function getBroadCast (id) {
  return axios.get(`${config.baseUrl}broadcasts/${id}`)
}

// 회원 장바구니 등록
function postCartItem (accessToken, cartItem) {
  let userSysId = parseJwt(accessToken).authSysId
  let formdata = new FormData()
  formdata.set('jsonData', JSON.stringify(cartItem))
  return axios({
    method: 'post',
    url: `${config.baseUrl2}users/${userSysId}/baskets`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${accessToken}`
    },
    data: formdata
  })
}

// 회원 장바구니 가져오기
function getCartItem (accessToken) {
  let userSysId = parseJwt(accessToken).authSysId
  return axios({
    method: 'get',
    url: `${config.baseUrl2}users/${userSysId}/baskets/list`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${accessToken}`
    }
  })
}

// 회원 장바구니 삭제
function removeCartItem (accessToken, basketSysId) {
  let userSysId = parseJwt(accessToken).authSysId

  return axios({
    method: 'delete',
    url: `${config.baseUrl2}users/${userSysId}/baskets/${basketSysId}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${accessToken}`
    }
  })
}

// 장바구니 수정
function putCartItem (accessToken, basketSysId, cartItem) {
  let userSysId = parseJwt(accessToken).authSysId
  let formdata = new FormData()
  formdata.set('jsonData', JSON.stringify(cartItem))
  return axios({
    method: 'put',
    url: `${config.baseUrl2}users/${userSysId}/baskets/${basketSysId}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${accessToken}`
    },
    data: formdata
  })
}

/**
 *
 * 회원가입
 */

// 공개키 조회
function getPublicKey () {
  return axios.get(`${config.baseUrl}auth/publickey`)
}

// RSA암호화 확인
function checkRSA (rsaEncStr) {
  const jsonData = {
    'rsaEncStr': rsaEncStr
  }
  var formdata = new FormData()
  formdata.set('jsonData', JSON.stringify(jsonData))
  return axios.post(`${config.baseUrl}auth/chkrsa`, formdata)
}

// 아이디 중복확인
function checkJoinId (id) {
  const jsonData = {
    'userId': id
  }
  console.log(JSON.stringify(jsonData))
  return axios.get(`${config.baseUrl}users/chkdupid`, {
    params: jsonData
  })
}

// 본인인증전송
function sendSms (authType, authWay, authWayValue) {
  let jsonData = {
    'authType': authType,
    'authWay': authWay,
    'authWayValue': authWayValue
  }
  var formdata = new FormData()
  formdata.set('jsonData', JSON.stringify(jsonData))
  return axios.post(`${config.baseUrl}auth/sendauthmine`, formdata)
}

// 본인인증확인
function chkSmsAuth (authType, authWay, authWayValue, authNo) {
  let jsonData = {
    'authType': authType,
    'authWay': authWay,
    'authWayValue': authWayValue,
    'authNo': authNo
  }
  var formdata = new FormData()
  formdata.set('jsonData', JSON.stringify(jsonData))
  return axios.post(`${config.baseUrl}auth/chkauthmine`, formdata)
}

// 회원가입
function createtUser (user) {
  let jsonData = {
    'userId': user.userId,
    'password': user.password,
    'mobile': user.phone,
    'email': user.email,
    'agreeSellection1': user.agreeSellection1,
    'agreeSellection2': user.agreeSellection2
  }
  var formdata = new FormData()
  formdata.set('jsonData', JSON.stringify(jsonData))
  return axios.post(`${config.baseUrl}auth/join`, formdata)
}

// 일반로그인
function userLogin (userId, password) {
  let jsonData = {
    'userId': userId,
    'password': password
  }
  var formdata = new FormData()
  formdata.set('jsonData', JSON.stringify(jsonData))
  return axios.post(`${config.baseUrl2}auth/login`, formdata)
}

// 본인인증결과
function retauthMine (authType, authWay, authWayValue) {
  let jsonData = {
    'authType': authType,
    'authWay': authWay,
    'authWayValue': authWayValue
  }
  var formdata = new FormData()
  formdata.set('jsonData', JSON.stringify(jsonData))
  return axios.post(`${config.baseUrl}auth/retauthmine`, formdata)
}

// 간편로그인
function snsLogin (snsType, snsToken, mobile) {
  let jsonData = {
    'snsType': snsType,
    'snsToken': snsToken,
    'mobile': mobile
  }
  var formdata = new FormData()
  formdata.set('jsonData', JSON.stringify(jsonData))
  return axios.post(`${config.baseUrl}auth/snslogin`, formdata)
}

// JWT 토큰 파싱 함수
function parseJwt (token) {
  var base64Url = token.split('.')[1]
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  }).join(''))

  return JSON.parse(jsonPayload)
}

// access토큰 발급
function getAccessToken (refreshToken) {
  return axios({
    method: 'post',
    url: `${config.baseUrl}auth/accesstoken`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${refreshToken}`
    }
  })
}

// refresh토큰 갱신
function getRefressToken (refreshToken) {
  let header = {
    'Authorization': `Bearer ${refreshToken}`
  }
  return axios.post(`${config.baseUrl}auth/refresh`, header)
}

// function getAccessToken (refreshToken) {
//   let header = {
//     'Authorization': `Bearer ${refreshToken}`
//   }
//   return axios.post(`${config.baseUrl}auth/accesstoken`, '', header)
// }

// 토큰 만료 여부 확인 (true:만료 false:기한남음)
// function isTokenExpired (token) {
//   let tokenExp = parseJwt(token).exp * 1000
//   let now = new Date().getTime()
//   let timeDiff = tokenExp - now

//   if (timeDiff < 0) {
//     return true
//   } else {
//     return false
//   }
// }

// let dayDiff = Math.ceil(Math.abs(timeDiff) / (1000 * 60 * 60 * 24))
export {
  getAccessToken,
  getRefressToken,
  getPublicKey,
  checkRSA,
  snsLogin,
  sendSms,
  checkJoinId,
  chkSmsAuth,
  userLogin,
  createtUser,
  getProductList,
  getCategoryList,
  getSaleProduct,
  getWeeklyProduct,
  getLiveProductList,
  getLiveProduct,
  retauthMine,
  getProduct,
  getBrandList,
  getBroadCast,
  postOrders,
  payOrders,
  getUserInfo,
  getMemberAddrList,
  addMemberAddress,
  postCartItem,
  getCartItem,
  getAddingCosts,
  removeCartItem,
  putCartItem
}
