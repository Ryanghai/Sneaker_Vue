import Vue from 'vue'
import Router from 'vue-router'
import sneaker from '@/components/sneaker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sneaker',
      component: sneaker
    }
  ]
})
