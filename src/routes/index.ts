import { createWebHistory, createRouter, type RouteRecordRaw } from 'vue-router';

import HomeView from '@/views/HomeView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/more/:id',
    name: 'more',
    component: () => import('@/views/MoreView.vue'),
    props: (route) => ({
      id: route.params.id,
      text: route.query.text,
      isCompleted: route.query.isCompleted === 'true',
    }),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
