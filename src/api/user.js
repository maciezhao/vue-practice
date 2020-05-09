import request from '@/utils/request'

export function login(data) {
  console.log("login:",data)
  return request({
    url: '/cgi-bin/umlogin.cgi',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/cgi-bin/umlogout.cgi',
    method: 'post'
  })
}
