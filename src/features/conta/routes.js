export default [
  {
    path: '/saldo',
    name: 'saldo',
    component: () => import(/* webpackChunkName: "Home" */ './Saldo'),
  },
  {
    path: '/conta',
    name: 'conta',
    component: () => import(/* webpackChunkName: "Home" */ './Conta'),
  },
];
