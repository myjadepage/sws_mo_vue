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
  return axios.post(`${config.baseUrl}auth/join`)
}

function sendSms () {
  // const data = {
  //   'jsonData': {'mobile': '01011112222'}
  // }
  // const data = {'mobile': '01011112222'}
  // console.log('data', JSON.stringify(data))

  const form = new FormData()
  console.log(form)
  form.append('mobile', '01011112222')
  console.log('form', form)
  // return axios.post(`${config.baseUrl2}auth/smssend`, form)
}

export {
  getProductList,
  getCategoryList,
  createtUser,
  sendSms
}
