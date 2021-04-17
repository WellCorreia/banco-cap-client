import * as types from './mutation-types';

export default {
  [types.SET_SALDO](state, payload) {
    state.saldo = payload;
  },
};
