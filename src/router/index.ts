import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/main/main.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('@/views/not-found/NotFound.vue')
    }
  ],
})

router.beforeEach((to, from, next) => {
  debugger
  if (to.path === '/main') {
    // 获取token
    const token = localStorage.getItem('token')
    // 如果没有token，则跳转到登录页
    if (!token) {
      next('/login')
    } else {
      next()
    }
  }else{
    next()
  }

})
export default router
