import "@/assets/css/main.css"

import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
import routes from "@/routes";

const app = createApp(App)
app.use(routes);
app.config.globalProperties.axios = axios;
app.mount('#app')
