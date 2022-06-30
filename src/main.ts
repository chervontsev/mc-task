import { createApp } from "vue";
import Vue3Autocounter from "vue3-autocounter";
import App from "./App.vue";
import "@/assets/css/reset.css";
import "@/assets/css/global.css";
import "@/assets/css/utils.css";

createApp(App).component("vue3-autocounter", Vue3Autocounter).mount("#app");
