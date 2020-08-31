import { extend } from 'vee-validate'
import { confirmed } from 'vee-validate/dist/rules'

extend('confirmed', confirmed)

extend('ruleUser', {
  validate (value) {
    const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (!value) {
      return '请输入用户名'
    } else if (!reg.test(value)) {
      return '请输入正确的邮箱格式'
    }
    return true
  },
  computesRequired: true
})

extend('rulePassword', {
  validate (value) {
    const reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
    if (!value) {
      return '请输入密码'
    } else if (!reg.test(value)) {
      return '请输入正确的密码格式'
    }
    return true
  },
  computesRequired: true
})

extend('ruleCode', {
  validate (value) {
    if (!value) {
      return '请输入验证码'
    }
    return true
  },
  computesRequired: true
})

extend('ruleEmail', {
  validate (value) {
    const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (!value) {
      return '请输入邮箱'
    } else if (!reg.test(value)) {
      return '请输入正确的邮箱格式'
    }
    return true
  },
  computesRequired: true
})

extend('ruleCode', {
  validate (value) {
    if (!value) {
      return '请输入验证码'
    }
    return true
  },
  computesRequired: true
})

extend('ruleNickName', {
  validate (value) {
    if (!value) {
      return '请输入昵称'
    }
    return true
  },
  computesRequired: true
})

extend('ruleConfirmPassword', {
  validate (value) {
    if (!value) {
      return '请输入确认密码'
    }
    return true
  },
  computesRequired: true
})

extend('ruleCode', {
  validate (value) {
    if (!value) {
      return '请输入验证码'
    }
    return true
  },
  computesRequired: true
})
