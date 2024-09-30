import Proof from '@/views/Proof.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Proof",
      component: Proof
    }
  ]
})
export default router
