/*eslint-disable */
import services from '@/http'
import * as types from './mutation-types'

export const ActionGetSaldo = ({ commit }, payload) => {
  return services.conta.getSaldo(payload).then(response => {
    commit(types.SET_SALDO, response.data)
  });
}

export const ActionCriarConta = ({ commit }, payload) => {
  return services.conta.createConta(payload).then(response => {
    commit(types.SET_CONTA, response.data)
  });
}