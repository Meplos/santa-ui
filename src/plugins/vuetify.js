import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#FC8181', // #E53935
        secondary: '#FEB2B2', // #FFCDD2
        accent: '#E53E3E', // #3F51B5
      },
    },
  },
})