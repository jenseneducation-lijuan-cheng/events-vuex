import Vue from 'vue'
import VueRouter from 'vue-router'
import Events from '../views/Events.vue'
import Buy from'../views/Buy.vue'
import Tickets from'../views/Tickets.vue'
import Staff from'../views/Staff.vue'
import Admin from '../views/Admin.vue'

Vue.use(VueRouter)

  const routes = [

  {
    path:'/events',
    name:'Events',
    component: Events
  },
  {
    path:'/buy',
    name:'Buy',
    component:Buy

  },
  {
    path:'/tickets',
    name:'Tickets',
    component:Tickets

  },
  {
    path:'/staff',
    name:'Staff',
    component:Staff
  },
  {
    path:'/admin',
    name:'Admin',
    component:Admin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
