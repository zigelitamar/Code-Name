import Vue from "vue";
import App from "./App.vue";
import VueSocketIO from "vue-socket.io-extended";
import io from "socket.io-client";
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
  TablePlugin,
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
  TablePlugin,
  TabsPlugin,
  JumbotronPlugin,
].forEach((x) => Vue.use(x));

Vue.use(VueAxios, axios);
const socket = io("http://localhost:3000");
Vue.use(VueSocketIO, socket);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
