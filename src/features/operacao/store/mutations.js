import * as types from './mutation-types';

export default {
  [types.SET_OPERACAO](state, payload) {
    state.operacao = payload;
  },
};
