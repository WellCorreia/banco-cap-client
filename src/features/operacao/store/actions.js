/*eslint-disable */
import services from '@/http'
import * as types from './mutation-types'

export const ActionDepositarSacar = ({ commit }, payload) => {
  return services.conta.createTransaction(payload).then(response => {
    commit(types.SET_OPERACAO, response.data)
  }).catch(error => {
    commit(types.SET_OPERACAO, error.data)
  });
}