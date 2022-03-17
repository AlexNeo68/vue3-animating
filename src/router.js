import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('./views/List.vue')
    },
    {
      path: '/drawer',
      name: 'drawer',
      component: () => import('./views/Drawer.vue')
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import('./views/Cards.vue')
    },
    {
      path: '/simple',
      name: 'simple',
      component: () => import('./views/Simple.vue')
    },
    {
      path: '/stager',
      name: 'stager',
      component: () => import('./views/Stager.vue')
    },
    {
      path: '/state',
      name: 'state',
      component: () => import('./views/State.vue')
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: () => import('./views/Timeline.vue')
    },
    {
      path: '/master',
      name: 'master',
      component: () => import('./views/Master.vue')
    },
    {
      path: '/cards-css',
      name: 'cards-css',
      component: () => import('./views/CardsCSS.vue')
    }
  ]
})
