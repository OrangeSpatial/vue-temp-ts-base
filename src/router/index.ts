import * as VueRouter from 'vue-router';

const routes = [
  { path: '/', component: () => import('@/views/HomePage.vue') },
  { path: '/test', component: () => import('@/views/TestPage.vue') },
];
const router = VueRouter.createRouter({
  //   history: VueRouter.createWebHashHistory(),
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;
