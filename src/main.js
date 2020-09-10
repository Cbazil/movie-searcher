import Vue from "vue";
import App from "./App.vue";
// import SuiVue from "semantic-ui-vue";
import router from "./router";
import VueResource from "vue-resource";
// import "semantic-ui-css/semantic.min.css";
// import "../semantic/dist/semantic.min.css";

// Vue.use(SuiVue);
Vue.use(VueResource);

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
