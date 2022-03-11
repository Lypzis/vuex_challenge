import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const cartModule = {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    };
  },
  mutations,
  actions,
  getters,
};

export default cartModule;
