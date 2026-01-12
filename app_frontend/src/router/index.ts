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
      path:'/login',
      name:'Login',
      component: ()=> import ('@/views/Login.vue'),
    },
    {
      path:'/loginWorkers',
      name:'LoginWorkers',
      component: ()=> import ('@/views/LoginWorkers.vue'),
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
    },
     {
      path:'/clients',
      name:'Clients',
      component: ()=> import ('@/views/Clients.vue'),
    },
     {
      path:'/workers',
      name:'Workers',
      component: ()=> import ('@/views/Workers.vue'),
    },
  ],
})

export default router
