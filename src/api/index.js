import axios from 'axios'

const config = {
  baseUrl4: 'http://192.168.1.40:3000/api/v1/',
  baseUrl2: 'http://192.168.1.20:3000/api/v1/',
  baseUrl3: 'http:///api.shallwe.shop/api/v1/',
  baseUrl: 'http://shallwe.shop:3000/api/v1/'
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
function getLiveProduct () {
  return axios.get(`${config.baseUrl2}broadcasts/mainlists`)
}

/*
주문
*/

// 주문정보등록
function postOrders (jsonData) {
  var formdata = new FormData()
  formdata.set('jsonData', JSON.stringify(jsonData))

  return axios.post(`http://192.168.1.40:3000/api/v1/orders`, formdata)
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
  return axios.get(`${config.baseUrl2}users/${userSysId}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${accessToken}`
    }
  })
}

// 회원 주소 목록 가져오기
function getMemberAddrList (accessToken) {
  let userSysId = parseJwt(accessToken).authSysId
  return axios.get(`http://192.168.1.20:3000/api/v1/users/${userSysId}/listaddress`, {
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
    url: `http://192.168.1.20:3000/api/v1/users/${userSysId}/address`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${accessToken}`
    },
    data: formdata
  })
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

/**
 *
 * 회원가입
 */
// 아이디 중복확인
function checkJoinId (id) {
  const jsonData = {
    'userId': id
  }
  // var fordata = new FormData()
  // fordata.set('jsonData', JSON.stringify(jsonData))
  // console.log(fordata.get('jsonData'))
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
    'email': user.email
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
  return axios.post(`${config.baseUrl}auth/login`, formdata)
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
function snsLogin (snsType, snsToken) {
  let jsonData = {
    'snsType': snsType,
    'snsToken': snsToken
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

function getAccessToken (refreshToken) {
  return axios({
    method: 'post',
    url: `http://192.168.1.20:3000/api/v1/auth/accesstoken`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${refreshToken}`
    }
  })
}

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
  getProductList,
  getCategoryList,
  getSaleProduct,
  getWeeklyProduct,
  getLiveProduct,
  createtUser,
  sendSms,
  checkJoinId,
  chkSmsAuth,
  userLogin,
  retauthMine,
  getProduct,
  snsLogin,
  getBrandList,
  getBroadCast,
  postOrders,
  payOrders,
  getUserInfo,
  getMemberAddrList,
  addMemberAddress,
  getAccessToken
}
