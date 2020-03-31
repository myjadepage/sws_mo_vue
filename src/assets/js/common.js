import JSEncrypt from 'jsencrypt/bin/jsencrypt'
import VueJwtDecode from 'vue-jwt-decode'

/** RSA 암호화 */
export const makeRsa = function (value) {
  const publicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA27Bf/sFXPg8cXgLp/n3tqTfKIZ/lcxO3I4K0NfXTXNm49KDmUofzntTS8bPvgcX688ZJRYDwig6a5ZmFE8FFSCdqJuUQ1c9UjnlU4KA7ztHDdPgd+zxCn9+lfaYgDXvwjXQb0t53u001VX5s/eTxsFri9qvMmdDQT4McYN1nIAUsDBDxPAkBQy4+CEddqWCjPLptqdroEUIgQ6fxrVVVzhuIpiG9zcSr/1RLbw6YERBxbVk/Q/CrgC5fKXWYRI5T4+V9MX4BxVvpqR2B+KEfxYQsXvJ2nyV0tKtb+m2hu+HtE4onsoM/lbm0Hw6yMKp/P2MofIyFNTdWeBcyEI3aRwIDAQAB'
  let encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey)
  let rsaEncStr = encryptor.encrypt(value)
  return rsaEncStr
}

// 날짜 String -> Date 변환
export const parseDate = function (str) {
  var y = str.substr(0, 4)
  var m = str.substr(4, 2)
  var d = str.substr(6, 2)
  var h = str.substr(8, 2)
  var mm = str.substr(10, 2)
  var ss = str.substr(12, 2)
  return new Date(y, m - 1, d, h, mm, ss)
}

// jwt decode
export const jwtDecode = function (str) {
  return VueJwtDecode.decode(str)
}
// 토큰 만료 여부 확인 (true:만료 false:기한남음)
export const isTokenExpired = function (token) {
  let tokenExp = jwtDecode(token).exp * 1000
  let now = new Date().getTime()
  let timeDiff = tokenExp - now
  // 1209600 => 2주시간 : 30일이지만 2주로 다시 갱신해 주기
  if (timeDiff < 1209600) {
    return true
  } else {
    return false
  }
}

export const isEquals = function (x, y) { // 객체 값 동일 비교 함수
  if (x === y) return true
  if (!(x instanceof Object) || !(y instanceof Object)) return false
  if (x.constructor !== y.constructor) return false
  for (var p in x) {
    if (!x.hasOwnProperty(p)) continue
    if (!y.hasOwnProperty(p)) return false
    if (x[p] === y[p]) continue
    if (typeof (x[p]) !== 'object') return false
    if (!isEquals(x[p], y[p])) return false
  }
  for (p in y) {
    if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false
  }
  return true
}
