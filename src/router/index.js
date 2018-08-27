import Vue from 'vue'
import Router from 'vue-router'
import GNGHome from '@/components/GNGHome/template'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GNGHome',
      component: GNGHome
    }
  ]
})
