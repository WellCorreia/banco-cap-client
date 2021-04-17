export default [
  {
    path: '/saldo',
    name: 'saldo',
    component: () => import(/* webpackChunkName: "Home" */ './Saldo'),
  },
];
