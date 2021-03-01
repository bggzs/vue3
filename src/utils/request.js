import axios from 'axios'

const token=""


const service = axios.create({
    baseURL: 'http://pm-test-api.chingshen.cn/',
    timeout: 180000 // 超时时间3分钟
})

service.interceptors.request.use(config => {
    // 在 request 发送之前
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  }, error => {
    console.log(error)
  })

service.interceptors.response.use(function (response) {
    return response.data
}, function (error) {
    return Promise.reject(error)
})

export default service