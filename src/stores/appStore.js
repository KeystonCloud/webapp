import { defineStore } from "pinia";
import { graphQLRequest, gql } from "@/api/graphql.js";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      apps: null,
    };
  },
  actions: {
    async load() {
      try {
        const teamId = localStorage.getItem("team");

        // Get app list
        const datas = await graphQLRequest(gql`
          {
            team(id: "${teamId}") {
              apps {
                id
                name
                keyName
                ipnsName
                createdAt
                updatedAt
                team {
                  id
                }
                deployments {
                  id
                  cid
                  status
                  createdAt
                }
              }
            }
          }
        `);

        this.apps = datas.team.apps;
      } catch (error) {
        console.error("App list failed:", error);
      }
    },
  },
});
