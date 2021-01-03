import { createRouter, createWebHistory } from 'vue-router'
import Home from '@views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@views/Contact.vue')
  },
  {
    path: '/join',
    name: 'Join',
    component: () => import('@views/Join.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    console.log(`${to.name}, ${from.name}, ${savedPosition}`)
  }
})

export default router
