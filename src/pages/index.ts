import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('./main/ui/MainPage.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('./register/ui/RegisterPage.vue')
  }
]
