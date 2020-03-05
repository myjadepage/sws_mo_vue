import axios from 'axios'

const config = {
  baseUrl: 'http://192.168.1.40:3000/api/v1/',
  baseUrl2: 'http://192.168.1.20:3000/api/v1/'
}

function getProductList () {
  return axios.get(`${config.baseUrl}products/lists`)
}
function getCategoryList () {
  return axios.get(`${config.baseUrl}categories`, {
    params: {'categoryLevel': '1'}
  })
}

// 회원가입
function createtUser () {
  const jsonData = {
    'jsonData': {'userId': 'test', 'password': 'jgdHd8gDyABz9Mxm/vMsN7exDu/pxpOlWqQqRn6L7R4=', 'mobile': '01011112222', 'email': 'test@mail.com'}
  }
  console.log(JSON.stringify(jsonData))
  return axios.post(`${config.baseUrl2}auth/join`)
}

function checkId2 () {
  const jsonData = {
    'jsonData': {'userId': 'test'}
  }
  return axios.post(`${config.baseUrl2}users/chkdupid`, {
    data: jsonData
  })
}

function sendSms () {
  let jsonData = {
    'mobile': '01011112222'
  }
  var fordata = new FormData()
  fordata.set('jsonData', JSON.stringify(jsonData))
  // fordata.append(jsonData, JSON.stringify(jsonData))
  // jsonData = JSON.stringify(jsonData)
  console.log(fordata.get('jsonData'))
  return axios.post(`${config.baseUrl2}auth/smssend`, fordata)
}

export {
  getProductList,
  getCategoryList,
  createtUser,
  sendSms,
  checkId2
}
