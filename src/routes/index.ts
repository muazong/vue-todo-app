import { createWebHistory, createRouter, type RouteRecordRaw } from 'vue-router';

import HomeView from '@/views/HomeView.vue';

export enum RoutePath {
  HOME = '/',
  MORE = '/more/',
}

const routes: RouteRecordRaw[] = [
  {
    path: RoutePath.HOME,
    name: 'home',
    component: HomeView,
  },
  {
    path: `${RoutePath.MORE}:id`,
    name: 'more',
    component: () => import('@/views/MoreView.vue'),
    props: (route) => ({
      id: route.params.id,
      text: route.query.text,
      descipiton: route.query.descipiton,
      isCompleted: route.query.isCompleted === 'true',
    }),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
