const modals = {
  state: {
    showPaymentModal: false,
    token: null,
  },
  mutations: {
    showPaymentModal(state, data) {
      if (data === "pay") {
        state.showPaymentModal = true;
      } else {
        state.showPaymentModal = false;
      }
    },
    setToken(state, data) {
      state.token = data;
    },
  },
  actions: {
    showPaymentModal({ commit }, data) {
      commit("showPaymentModal", data);
    },
    setToken({ commit }, data) {
      commit("setToken", data);
    },
  },
  getters: {
    token: (state) => state.token,
  },
};

export default modals;
