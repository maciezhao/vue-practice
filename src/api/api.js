import request from '@/utils/request'

export function getHomeInfo(params) {
  return request({
    url: '/cgi-bin/home.cgi',
    method: 'get',
    params
  })
}
