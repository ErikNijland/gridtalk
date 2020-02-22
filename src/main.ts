import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import { DateFilter } from "./filters/Date";
import { router } from "./router";

Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.mixin({
  filters: {
    Date: DateFilter
  }
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
