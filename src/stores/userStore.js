import { defineStore } from "pinia";
import { graphQLRequest, gql } from "@/api/graphql.js";
import { getRestApi } from "@/api/rest.js";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      token: null,
      user: null,
      teams: null,
      team: null,
    };
  },
  getters: {
    async isLoggedIn(state) {
      if (!state.token) {
        this.load();
      }

      return !!state.token;
    },
  },
  actions: {
    async load() {
      try {
        const existingToken = localStorage.getItem("token");
        if (existingToken) {
          this.token = existingToken;
          await this.login();
        }
      } catch (error) {
        console.error("Load user failed:", error);
        localStorage.removeItem("token");
      }
    },
    async register(name, email, password) {
      try {
        // Register user
        await getRestApi("user").post({
          name,
          email,
          password,
        });

        // Auto login after registration
        await this.login(email, password);
      } catch (error) {
        console.error("Registration failed:", error);
      }
    },
    async login(email, password) {
      try {
        if (!this.token) {
          // Get user logged token
          this.token = (
            await getRestApi("user").post("/login", {
              email,
              password,
            })
          ).data;

          localStorage.setItem("token", this.token);
        }

        // Get user info
        await this.loadUserData();

        // Get all user teams
        await this.loadTeamsData();

        if (localStorage.getItem("team")) {
          this.teams.forEach((team, index) => {
            if (team.id === localStorage.getItem("team")) {
              this.selectTeam(index);
            }
          });
        } else {
          this.selectTeam(0);
          localStorage.setItem("team", this.team.id);
        }

        // Redirect to dashboard
        if (this.$router) {
          this.$router.push({ name: "dashboard" });
        }
      } catch (error) {
        console.error("Login failed:", error);
        this.$router.push({ name: "login" });
      }
    },
    async loadUserData() {
      try {
        const datas = await graphQLRequest(gql`
          {
            me {
              id,
              name,
              email,
              role,
              createdAt,
              updatedAt
            }
          }
        `);

        this.user = datas.me;
      } catch (error) {
        console.error("Load user datas:", error);
      }
    },
    async loadTeamsData() {
      try {
        const datas = await graphQLRequest(gql`
          {
            me {
              teams {
                id,
                name,
                users {
                  id,
                  name,
                  email
                },
              }
            }
          }
        `);
        this.teams = datas.me.teams;
      } catch (error) {
        console.error("Load teams data:", error);
      }
    },
    async loadCurrentDetailledTeamData() {
      try {
        const datas = await graphQLRequest(gql`
          {
            team(id: "${this.team.id}") {
              id,
              name,
              users {
                id,
                name,
                email
              },
            }
          }
        `);
        this.team = datas.team;
      } catch (error) {
        console.error("Load current team data:", error);
      }
    },
    async logout() {
      localStorage.removeItem("token");
      this.token = null;
      this.user = null;
      this.teams = null;
      this.$router.push({ name: "login" });
    },
    async update(datas) {
      try {
        const result = await getRestApi("user").put("/me", datas);
        this.user = result.data;
        return result;
      } catch (error) {
        console.error("Update user failed:", error);
        return error;
      }
    },
    selectTeam(index) {
      if (this.teams && this.teams.length > index) {
        this.team = this.teams[index];
        this.team.label = this.team.name
          .substring(0, this.team.name.length - "'s Team".length)
          .split(" ")
          .map((word) => word.charAt(0))
          .join("")
          .toUpperCase();
      }
    },
    async updateTeam(datas) {
      try {
        const result = await getRestApi("team").put(`/${this.team.id}`, datas);
        this.team = result.data;
        return result;
      } catch (error) {
        console.error("Update team failed:", error);
        throw error;
      }
    },
  },
});
