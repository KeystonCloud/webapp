import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import { router } from "./router.js";
import App from "./App.vue";

import "./style.css";

const pinia = createPinia();
const app = createApp(App);

pinia.use(({ store }) => {
  store.$router = markRaw(router);
});

app.use(pinia);
app.use(router);

app.mount("#app");
