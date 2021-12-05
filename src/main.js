import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import axios from "axios";
Vue.config.productionTip = false;

axios.defaults.baseURL = process.env.VUE_API_BASE_URL;
Vue.prototype.$axios = axios;
new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
