import axios from 'axios'

const config = {
  baseUrl: 'http://192.168.1.40:3000/api/v1/',
  baseUrl2: 'http://192.168.1.20:3000/api/v1/',
  baseUrl3: 'http:///api.shallwe.shop/api/v1/',
  iamport: 'https://api.iamport.kr/'
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

function postOrders (jsonData) { // 주문정보등록
  var formdata = new FormData()
  formdata.set('jsonData', JSON.stringify(jsonData))

  return axios.post('http://192.168.1.40:3800/api/v1/orders', formdata)
}

function payOrders (jsonData, orderSysId) { // 주문결제정보 등록
  var formdata = new FormData()
  formdata.set('jsonData', JSON.stringify(jsonData))
  formdata.set('orderSysId', orderSysId)

  return axios.post(`http://192.168.1.40:3800/api/v1/orders/${orderSysId}/pays`, formdata)
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
  return axios.post(`${config.baseUrl2}auth/sendauthmine`, formdata)
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
  return axios.post(`${config.baseUrl2}auth/chkauthmine`, formdata)
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
  return axios.post(`${config.baseUrl2}auth/join`, formdata)
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
function snsLogin (snsType, snsToken) {
  let jsonData = {
    'snsType': snsType,
    'snsToken': snsToken
  }
  var formdata = new FormData()
  formdata.set('jsonData', JSON.stringify(jsonData))
  return axios.post(`${config.baseUrl}auth/snslogin`, formdata)
}

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
  payOrders
}
