import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/',
      name: 'Home',
      component: ()=> import ('@/views/Home.vue')
    },
    {
      path:'/contact',
      name:'ContactUs',
      component: ()=> import ('@/views/Contact.vue'),
    },
    {
      path:'/services',
      name:'Services',
      component: ()=> import ('@/views/Services.vue'),
    },
    {
      path:'/team',
      name:'Team',
      component: ()=> import ('@/views/Team.vue'),
    }
  ],
})

export default router
