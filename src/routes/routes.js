import { routes as register } from '../views/register'

export default [
    ...register,
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: '/aovivo',
        name: 'aovivo',
        component: () => import('../views/AovivoView.vue')
      },
      {
        path: '/cassino',
        name: 'cassino',
        component: () => import('../views/CassinoView.vue')
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
        path: '/TableJogo/:id',
        name: 'jogoID',
        component: () => import('../views/TableJogo.vue')
        //aqui recebe um id
      },
]