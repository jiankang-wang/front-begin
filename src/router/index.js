import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
const Reg = () => import(/* webpackChunkName: "about" */ '../views/Reg.vue')
const Forget = () => import(/* webpackChunkName: "about" */ '../views/Forget.vue')

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/reg',
    name: 'reg',
    component: Reg

  }, {
    path: '/forget',
    name: 'forget',
    component: Forget
  }
]

const router = new VueRouter({
  routes
})

export default router
