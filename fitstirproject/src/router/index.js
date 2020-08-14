import Vue from 'vue'
import VueRouter from 'vue-router'
import Playlistvideo from  './Playlistvideo';
import Videoexercise from  './Videoexercise';

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Login',
      component: () => import( '../views/Login')
    },
  {
    path: '/app',
    component: () => import( '../views/Home'),
    children : [
      {
        path : '',
        component : () => import('../views/Videoexercise/index')
      },
      Playlistvideo,
      Videoexercise,
    ]
  },


]

const router = new VueRouter({
  routes
})

export default router
