import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import firebase from "firebase/app";
import "firebase/database";

import firebaseConfig from "./utils/FireBase";
import "./utils/icons";
import "./style/style.scss";

Vue.config.productionTip = false;

firebase.initializeApp(firebaseConfig);

Vue.use(BootstrapVue);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
