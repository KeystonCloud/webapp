import { defineStore } from "pinia";
import { graphQLRequest, gql } from "@/api/graphql.js";

export const useNodeStore = defineStore("node", {
  state: () => {
    return {
      nodes: null,
    };
  },
  actions: {
    async load() {
      this.loadNodesForTeamData();
    },
    async loadNodesForTeamData() {
      try {
        const teamId = localStorage.getItem("team");
        const datas = await graphQLRequest(gql`
          {
            team(id: "${teamId}") {
              nodes {
                id,
                name,
                ip,
                port,
                createdAt,
                updatedAt,
              },
            }
          }
        `);

        this.nodes = datas.team.nodes;
      } catch (error) {
        console.error("[NodeStore] Load nodes for team datas:", error);
      }
    },
  },
});
