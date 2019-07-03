import Vue from 'vue'
import Router from 'vue-router'
import OrderMain from '@/page/OrderMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OrderMain',
      component: OrderMain,
      meta: {title: '订单主页'}
    }
  ]
})
