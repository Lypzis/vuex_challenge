export default {
  login(state, payload) {
    state.isLoggedIn = payload.login;
  },
};
