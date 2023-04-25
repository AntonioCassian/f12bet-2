import Vue from 'vue'
import Router from  'vue-router'
import HomeView from '../views/HomeView.vue'
import Aovivo from '../views/AovivoView.vue'
import Cassino from '../views/CassinoView.vue'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    scrollBehavior () {
      return {top: 0}
    },
 routes:  [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aovivo',
    name: 'aovivo',
    component: Aovivo
  },
  {
    path: '/cassino',
    name: 'cassino',
    component: Cassino
  },
  {
    path: '/casinoaovivo',
    name: 'casinoaovivo',
    component: () => import('../views/CasinoAovivo.vue')
  },
  {
    path: '/originais',
    name: 'originais',
    component: () => import('../views/OriginaisF12.vue')
  },
  {
    path: '/crashGames',
    name: 'crashGames',
    component: () => import('../views/CrashGames.vue')
  },
  {
    path: '/classicos',
    name: 'classicos',
    component: () => import('../views/Classicos.vue')
  },
  {
    path: '/raspadinhas',
    name: 'raspadinhas',
    component: () => import('../views/Raspadinhas.vue')
  },
  {
    path: '/virtuais',
    name: 'virtuais',
    component: () => import('../views/Virtuais.vue')
  },
  {
    path: '/e-sports',
    name: 'e-sports',
    component: () => import('../views/E-sports.vue')
  },
  {
    path: '/promocao',
    name: 'promocao',
    component: () => import('../views/Promocao.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  }]
})





/* webpackChunkName: "about" */ 