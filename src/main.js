import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import axios from "axios";

Vue.config.productionTip = false;

// axios.defaults.baseURL = "https://santaserver-dev.herokuapp.com/";
axios.defaults.baseURL = "http://localhost:3000/";
Vue.prototype.$axios = axios;
new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
