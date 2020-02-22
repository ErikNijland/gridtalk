import Vue from "vue";
import App from "./App.vue";

import { DateFilter } from "./filters/Date";

Vue.config.productionTip = false;

Vue.mixin({
  filters: {
    Date: DateFilter
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
