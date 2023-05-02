import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from "../views/SignUp.vue"
import LogIn from "../views/LogIn.vue"
import Dashboard from "../views/Dashboard.vue"
import Terms from "../views/Terms.vue"
 
 const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components:{
        default:HomeView
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/terms',
      name: 'terms-conditions',
      component: Terms
    } 
  ]
})
 
export default router
