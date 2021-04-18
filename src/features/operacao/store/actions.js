/*eslint-disable */
import services from '@/http'
import * as types from './mutation-types'

export const ActionDepositarSacar = ({ commit }, payload) => {
  return services.operacao.createTransaction(payload).then(response => {
    commit(types.SET_OPERACAO, response.data)
  });
};