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
    component: () => import('./register/index')
  },
  {
    path: '/features',
    name: 'features',
    component: () => import('./features/FeaturesPage.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('./products/ProductsPage.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('./blog/BlogPage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./about/AboutPage.vue')
  }
]
