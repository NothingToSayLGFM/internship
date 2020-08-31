import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import cocktails from "./cocktails";
import cart from "./cart";
import modals from "./modals";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ["cart", "modals"],
    }),
  ],
  state: {},
  mutations: {},
  actions: {},
  modules: { cocktails, cart, modals },
});
