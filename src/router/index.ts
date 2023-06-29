import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      meta: { title: '登录' },
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      meta: { title: '毕设选导师系统-登录' },
      component: () => import('@/views/loginView.vue')
    }
  ]
})

export default router
