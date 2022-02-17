import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () =>
      import(/* webpackChunkName: "orders" */ '../views/Orders.vue'),
    meta: {
      title: 'Orders',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
