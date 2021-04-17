/*eslint-disable */
import services from '@/http'
import * as types from './mutation-types'

export const ActionGetSaldo = ({ commit }, payload) => {
  return services.saldo.saldo(payload).then(response => {
    commit(types.SET_SALDO, response.data.conta)
  });
}