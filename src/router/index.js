import Vue from 'vue'
import VueRouter from 'vue-router'
import JoinParty from "../components/JoinParty";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Join',
    component: JoinParty
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('../components/CreateParty')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
