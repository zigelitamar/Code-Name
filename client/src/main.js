import Vue from "vue";
import App from "./App.vue";
import VueSocketIO from "vue-socket.io";
import axios from "axios";
import VueAxios from "vue-axios";
import VueRouter from "vue-router";
import VueCookies from "vue-cookies";
import routes from "./routes";
Vue.use(VueCookies);
axios.defaults.withCredentials = true;
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import {
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
  IconsPlugin,
  ModalPlugin,
  InputGroupPlugin,
  ButtonGroupPlugin,
  PopoverPlugin,
  SpinnerPlugin,
  TabsPlugin,
  JumbotronPlugin,
} from "bootstrap-vue";
[
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
  IconsPlugin,
  ModalPlugin,
  InputGroupPlugin,
  ButtonGroupPlugin,
  PopoverPlugin,
  SpinnerPlugin,
  TabsPlugin,
  JumbotronPlugin,
].forEach((x) => Vue.use(x));
Vue.use(VueAxios, axios);

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "http://metinseylan.com:1992",
    options: { path: "/my-app/" }, //Optional options
  })
);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
