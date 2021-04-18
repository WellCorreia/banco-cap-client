import store from '../store';

export default async (to, from, next) => {
  if (to.path === '/') {
    next({ name: 'saldo' });
  } else {
    next({ path: to.path });
  }
};
