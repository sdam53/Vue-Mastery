import { createApp } from "vue";
import App from "./App.vue";
import AppDate from "@/components/AppDate.vue";

import "./assets/style.css";
import router from "./router/index";

const app = createApp(App);
//this allows us to glablly use an component without importing it
app.component("AppDate", AppDate);
//use our router we made
app.use(router);
app.mount("#app");
