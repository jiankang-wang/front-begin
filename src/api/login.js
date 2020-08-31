import axios from '../utils/request'

const getCaptcha = async (sid) => {
  return await axios.get('/getCaptcha', {
    params: {
      sid: sid
    }
  })
}

const forget = async (options) => {
  return await axios.post('/forget', { ...options })
}

const login = async (loginInfo) => {
  return await axios.post('/login', { ...loginInfo })
}

const register = async (registertInfo) => {
  return await axios.post('/register', { ...registertInfo })
}

export {
  getCaptcha,
  forget,
  login,
  register
}
