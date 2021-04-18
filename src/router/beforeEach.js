export default async (to, from, next) => {
  if (to.path === '/' || to.name === null) {
    next({ name: 'saldo' });
  } else {
    next();
  }
};
