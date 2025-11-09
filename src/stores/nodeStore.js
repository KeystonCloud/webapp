import { defineStore } from "pinia";
import { mande } from "mande";

const nodeApi = mande("/api/node");

export const useNodeStore = defineStore("node", {
  state: () => {
    return {
      modes: null,
    };
  },
  actions: {
    async load() {
      try {
        // Get nodes list
        this.nodes = (await nodeApi.get("/mine")).data;
      } catch (error) {
        console.error("Node list failed:", error);
      }
    },
  },
});
