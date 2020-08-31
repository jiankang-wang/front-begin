import axios from 'axios'
import errHandler from './errHandler'

class HttpRequest {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
  }

  getInstanceConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      timeout: 10000
    }
    return config
  }

  interceptors (instance) {
    instance.interceptors.request.use(config => {
      return config
    }, err => {
      errHandler(err)
      return Promise.reject(err)
    })

    instance.interceptors.response.use(res => {
      if (res.status === 200) {
        return Promise.resolve(res.data)
      } else {
        return Promise.reject(res)
      }
    }, err => {
      errHandler(err)
      return Promise.reject(err)
    })
  }

  request (options) {
    const instance = axios.create()
    const newInstance = Object.assign(this.getInstanceConfig(), options)
    this.interceptors(instance)
    return instance(newInstance)
  }

  get (url, config) {
    const options = Object.assign({
      method: 'get',
      url: url
    }, config)
    return this.request(options)
  }

  post (url, data) {
    return this.request({
      method: 'post',
      url: url,
      data: data
    })
  }
}

export default HttpRequest
