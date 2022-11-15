import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/pages/home'
  },
  {
    path: '/pages/home',
    component: () => import ('../views/HomePage.vue')
  },
  {
    path: '/pages/tentang',
    component: () => import ('../views/TentangPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
