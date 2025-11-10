import { createApp, markRaw } from "vue";
import { pinia } from "@/stores";
import { router } from "@/router";
import App from "./App.vue";
import moment from "moment";

import "./style.css";

const app = createApp(App);

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
