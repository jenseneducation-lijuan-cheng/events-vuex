import Vue from 'vue'
import VueRouter from 'vue-router'
import Events from '../views/Events.vue'
import Buy from'../views/Buy.vue'
import Tickets from'../views/Tickets.vue'

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

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
