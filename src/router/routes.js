import DefaultLayout from "@/layouts/DefaultLayout.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";

import HomeView from "@/views/HomeView.vue";
import PricingView from "@/views/PricingView.vue";
import DocumentationView from "@/views/DocumentationView.vue";
import LoginView from "@/views/LoginView.vue";
import SignupView from "@/views/SignupView.vue";

import DashboardHomeView from "@/views/dashboard/HomeView.vue";
import DashboardAppsView from "@/views/dashboard/AppsView.vue";
import DashboardAppDetailView from "@/views/dashboard/AppDetailView.vue";
import DashboardNodesView from "@/views/dashboard/NodesView.vue";
import DashboardBillingView from "@/views/dashboard/BillingView.vue";
import DashboardSettingsView from "@/views/dashboard/SettingsView.vue";
import DashboardHelpView from "@/views/dashboard/HelpView.vue";
import DashboardProfilView from "@/views/dashboard/ProfilView.vue";

export const routes = [
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
    meta: { requiresAuth: true },
    children: [
      {
        name: "dashboard",
        path: "",
        component: DashboardHomeView,
      },
      {
        name: "dashboard.apps",
        path: "/dashboard/apps",
        component: DashboardAppsView,
      },
      {
        name: "dashboard.app.detail",
        path: "/dashboard/app/:uuid",
        component: DashboardAppDetailView,
      },
      {
        name: "dashboard.nodes",
        path: "/dashboard/nodes",
        component: DashboardNodesView,
      },
      {
        name: "dashboard.billing",
        path: "/dashboard/billing",
        component: DashboardBillingView,
      },
      {
        name: "dashboard.settings",
        path: "/dashboard/settings",
        component: DashboardSettingsView,
      },
      {
        name: "dashboard.help",
        path: "/dashboard/help",
        component: DashboardHelpView,
      },
      {
        name: "dashboard.profil",
        path: "/dashboard/profil",
        component: DashboardProfilView,
      },
    ],
  },
];
