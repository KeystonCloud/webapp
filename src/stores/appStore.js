import { defineStore } from "pinia";
import { mande } from "mande";

const appApi = mande("/api/app");

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      apps: null,
    };
  },
  actions: {
    async load() {
      try {
        // Get app list
        this.apps = (await appApi.get("/mine")).data;
      } catch (error) {
        console.error("App list failed:", error);
      }
    },
  },
});
