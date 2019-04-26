import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseIcon from "@/components/BaseIcon.vue";

//import BaseButton from '@/componenets/BaseButton.vue';
//import BaseInput from '@/componenets/BaseInput.vue';

Vue.component("BaseIcon", BaseIcon);

Vue.config.productionTip = false;

new Vue({
  router, //router: router,
  store,
  render: h => h(App)
}).$mount("#app");
