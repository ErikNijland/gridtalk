import Vue from "vue";
import App from "./App.vue";

import { Date } from "./filters/Date";

Vue.config.productionTip = false;

Vue.mixin({
  filters: {
    Date
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
