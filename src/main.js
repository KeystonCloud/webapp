import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import moment from "moment";
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

moment.locale("fr", {
  relativeTime: {
    future: "dans %s",
    past: "il y a %s",
    s: "quelques secondes",
    m: "une minute",
    mm: "%d minutes",
    h: "une heure",
    hh: "%d heures",
    d: "un jour",
    dd: "%d jours",
    M: "un mois",
    MM: "%d mois",
    y: "un an",
    yy: "%d ans",
  },
});
app.provide("moment", moment);

app.mount("#app");
