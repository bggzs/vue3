import axios from 'axios'




const service = axios.create({
    baseURL: 'http://pm-test-api.chingshen.cn/',
    timeout: 180000 // 超时时间3分钟
})


service.interceptors.response.use(function (response) {
    return response.data
}, function (error) {
    return Promise.reject(error)
})

export default service