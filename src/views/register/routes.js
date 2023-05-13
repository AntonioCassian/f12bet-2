export default [
 {
    path: '/register',
    name: 'registerA',
    component: () => import(/* webpackChunkName: "register" */ './Register')
  }
]