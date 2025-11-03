import { createWebHistory, createRouter } from "vue-router";

import DefaultLayout from "./layouts/DefaultLayout.vue";
import DashboardLayout from "./layouts/DashboardLayout.vue";

import HomeView from "./views/HomeView.vue";
import PricingView from "./views/PricingView.vue";
import DocumentationView from "./views/DocumentationView.vue";
import LoginView from "./views/LoginView.vue";
import SignupView from "./views/SignupView.vue";

import DashboardHomeView from "./views/dashboard/HomeView.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { name: "home", path: "", component: HomeView },
      { name: "pricing", path: "/pricing", component: PricingView },
      { name: "documentation", path: "/doc", component: DocumentationView },
      { name: "login", path: "/login", component: LoginView },
      { name: "signup", path: "/signup", component: SignupView },
    ],
  },
  {
    path: "/dashboard",
    component: DashboardLayout,
    children: [{ name: "dashboard", path: "", component: DashboardHomeView }],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
