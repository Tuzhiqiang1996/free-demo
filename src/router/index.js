import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
// import Total from '../page/total/index'
// import Home from '@/components/home/index'
// import Asset from '@/components/asset/index'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: 'index'
    // },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: 'home',
          name: 'home',
          // component: resolve => require(['@/components/home/index'], resolve)
          component: () => import('@/components/home/index.vue')
        },
        {
          path: 'asset',
          name: 'asset',
          // component: resolve => require(['@/components/asset'], resolve)
          component: () => import('@/components/asset/index.vue')
        }
      ]
    },
    {
      path: '/total',
      name: 'Total',
      // component: Total
      component: () => import('@/page/total/index.vue')
    }
  ]
})
