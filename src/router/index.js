import { createWebHistory, createRouter } from "vue-router";
import { routes } from "./routes.js";
import { useUserStore } from "@/stores/userStore.js";
import { useAppStore } from "@/stores/appStore.js";
import { useNodeStore } from "@/stores/nodeStore.js";

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from) => {
  const userStore = useUserStore();
  const appStore = useAppStore();
  const nodeStore = useNodeStore();

  if (to.meta.requiresAuth && !(await userStore.isLoggedIn)) {
    return {
      name: "login",
      query: { redirect: to.fullPath },
    };
  }

  if (to.meta.load) {
    await loadDatas({ userStore, appStore, nodeStore }, to.meta.load);
  }
});

async function loadDatas(stores, labels) {
  if (!Array.isArray(labels)) {
    labels = [labels];
  }
  console.log("Labels:", labels);
  for (const label of labels) {
    console.log("Loading data for label:", label);
    switch (label) {
      case "user":
        await stores.userStore.loadUserData();
        break;
      case "teams":
        await stores.userStore.loadTeamsData();
        break;
      case "currentTeam":
        await stores.userStore.loadCurrentDetailledTeamData();
        break;
      default:
        break;
    }
  }
}
