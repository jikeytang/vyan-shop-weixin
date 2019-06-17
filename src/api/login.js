import request from '@/utils/request'

export function loginSystemData (userName, password) {
  const data = {
    userName,
    password
  }
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function logoutData () {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfoData (token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
