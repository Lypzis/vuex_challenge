import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const authModule = {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations,
  actions,
  getters,
};

export default authModule;
