import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cards',
      component: () => import('@/views/CardsPage.vue')
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('@/views/TablePage.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/ProfilePage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundPage.vue')
    },
    {
      path: '/car/:id',
      name: 'car',
      component: () => import('@/views/CarIdPage.vue')
    }
  ]
})

export default router