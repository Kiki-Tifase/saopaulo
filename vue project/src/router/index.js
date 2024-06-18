import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CityView from '../views/CityView.vue'
import FoodView from '@/views/FoodView.vue'
import HotelView from '@/views/HotelView.vue'
import ArtView from '@/views/ArtView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/city',
      name: 'city',
      component: CityView
    },
    {
      path: '/food',
      name: 'food',
      component: FoodView
    },
    {
      path: '/hotel',
      name: 'hotel',
      component: HotelView
    },
    {
      path: '/art',
      name: 'art',
      component: ArtView
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/CityView.vue')
    // }
  ]
})

export default router
