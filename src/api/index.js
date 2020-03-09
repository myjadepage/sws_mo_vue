import axios from 'axios'

const config = {
  baseUrl: 'http://192.168.1.40:3000/api/v1/',
  baseUrl2: 'http://192.168.1.20:3000/api/v1/'
}

function getProductList () {
  return axios.get(`${config.baseUrl2}products/lists`)
}
function getCategoryList () {
  return axios.get(`${config.baseUrl}categories`, {
    params: {'categoryLevel': '1'}
  })
}
function getProduct (prdtSysid) {
  return axios.get(`${config.baseUrl2}products/${prdtSysid}`)
}

// 회원가입
function createtUser (user) {
  // const jsonData = {
  //   'jsonData': {'userId': 'test', 'password': 'jgdHd8gDyABz9Mxm/vMsN7exDu/pxpOlWqQqRn6L7R4=', 'mobile': '01011112222', 'email': 'test@mail.com'}
  // }
  const userInfo = {}
  userInfo.userId = user.id
  userInfo.password = user.password
  userInfo.email = user.email
  userInfo.mobile = user.mobile
  console.log(JSON.stringify(userInfo))
  return axios.post(`${config.baseUrl2}auth/join`, {
    params: JSON.stringify(userInfo)
  })
}

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
  var fordata = new FormData()
  fordata.set('jsonData', JSON.stringify(jsonData))
  console.log(JSON.stringify(jsonData))
  return axios.post(`${config.baseUrl2}auth/sendauthmine`, fordata)
}

function chkSmsAuth (authNo, mobile) {
  let jsonData = {
    'mobile': mobile,
    'authNo': authNo
  }
  var formdata = new FormData()
  formdata.set('jsonData', JSON.stringify(jsonData))
  return axios.post(`${config.baseUrl2}auth/chkSmsAuth`, formdata)
}

export {
  getProductList,
  getCategoryList,
  createtUser,
  sendSms,
  checkJoinId,
  chkSmsAuth,
  getProduct
}
