import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../view/home')
    },
    {
      path: '/editBook',
      name: 'editBook',
      component: () => import('../view/book/edit')
    },
    {
      path: '/editCategory',
      name: 'editCategory',
      component: () => import('../view/category/edit')
    }
  ]
})
