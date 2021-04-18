import * as types from './mutation-types';

export default {
  [types.SET_SALDO](state, payload) {
    state.saldo = payload;
  },
  [types.SET_CONTA](state, payload) {
    state.conta = payload;
  },
};
