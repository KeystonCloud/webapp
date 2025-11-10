import { createWebHistory, createRouter } from "vue-router";
import { routes } from "./routes.js";
import { useUserStore } from "@/stores/userStore.js";

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from) => {
  const userStore = useUserStore();

  if (to.meta.requiresAuth && !(await userStore.isLoggedIn)) {
    return {
      name: "login",
      query: { redirect: to.fullPath },
    };
  }
});
