import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue'),
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: () => import('@/views/QuizPage.vue'),
    },
    {
      path: '/result',
      name: 'result',
      component: () => import('@/views/ResultPage.vue'),
    },
  ],
})

export default router
