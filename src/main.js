import Vue from 'vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/veeValidate'
import Alert from './components/modules/alert/index'
Vue.config.productionTip = false

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
Vue.use(Alert)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
