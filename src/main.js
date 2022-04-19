import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 引入插件
import ggtext from "./lib/ggtext";
// 使用插件
Vue.use(ggtext);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
