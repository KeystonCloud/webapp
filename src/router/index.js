import { createWebHistory, createRouter } from "vue-router";
import { routes } from "./routes.js";
import auth from "@/utils/auth.js";

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from) => {
  const logged = await auth.isLoggedIn();

  if (to.meta.requiresAuth && !logged) {
    return {
      name: "login",
      query: { redirect: to.fullPath },
    };
  }
});
