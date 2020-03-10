import axios from 'axios'

const config = {
  baseUrl: 'http://192.168.1.40:3000/api/v1/',
  baseUrl2: 'http://192.168.1.20:3000/api/v1/',
  baseUrl3: 'http:///api.shallwe.shop/api/v1/'
}

/**
 * 메인
 */
// 상품리스트
function getProductList () {
  return axios.get(`${config.baseUrl}products/lists`)
}

// 카테고리
function getCategoryList () {
  return axios.get(`${config.baseUrl}categories`, {
    params: {'categoryLevel': '1'}
  })
}
function getProduct (prdtSysid) {
  return axios.get(`${config.baseUrl}products/${prdtSysid}`)
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
  return axios.get(`${config.baseUrl2}users/chkdupid`, {
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
  return axios.post(`${config.baseUrl2}auth/retauthmine`, formdata)
}

// 이메일로 아이디찾기

export {
  getProductList,
  getCategoryList,
  createtUser,
  sendSms,
  checkJoinId,
  chkSmsAuth,
  userLogin,
  retauthMine,
  getProduct
}
