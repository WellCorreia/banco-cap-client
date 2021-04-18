export default {
  getSaldo: {
    method: 'get',
    url: 'contas/numero/{numero}',
  },
  createConta: {
    method: 'post',
    url: 'contas',
  },
  createTransaction: {
    method: 'post',
    url: 'transacoes',
  },
};
