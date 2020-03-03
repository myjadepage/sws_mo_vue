import axios from 'axios'

const config = {
  baseUrl: 'http://192.168.1.40:3000/api/v1/'
}

function getProductList () {
  return axios.get(`${config.baseUrl}products/lists`)
}
function getCategoryList () {
  return axios.get(`${config.baseUrl}categories`, {
    params: {'categoryLevel': '1'}
  })
}

export {
  getProductList,
  getCategoryList
}
