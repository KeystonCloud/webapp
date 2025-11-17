import { defineStore } from "pinia";
import { mande, defaults } from "mande";

const userApi = mande("/api/user");
const teamApi = mande("/api/team");

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
        await userApi.post({
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
            await userApi.post("/login", {
              email,
              password,
            })
          ).data;
          localStorage.setItem("token", this.token);
        }

        // Prepare authorization header for future requests
        const authorization = "Bearer " + this.token;
        userApi.options.headers.Authorization = authorization;
        teamApi.options.headers.Authorization = authorization;
        defaults.headers.Authorization = authorization;

        // Get user info
        await this.loadUserData();

        // Get teams info
        await this.loadTeamsData();
        if (this.teams && this.teams.length > 0) {
          this.selectTeam(0);
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
        this.user = (await userApi.get("/me")).data;
        console.log("Me:", this.user);
      } catch (error) {
        console.error("Load user datas:", error);
      }
    },
    async loadTeamsData() {
      try {
        this.teams = (await teamApi.get("/mine")).data;
        console.log("Teams:", this.teams);
      } catch (error) {
        console.error("Load teams data:", error);
      }
    },
    async loadCurrentDetailledTeamData() {
      try {
        this.team = (await teamApi.get("/" + this.team.id)).data;
        console.log("Team:", this.team);
      } catch (error) {
        console.error("Load teams data:", error);
      }
    },
    async logout() {
      localStorage.removeItem("token");
      this.token = null;
      this.user = null;
      this.teams = null;
      delete userApi.options.headers.Authorization;
      delete teamApi.options.headers.Authorization;
      delete defaults.headers.Authorization;
      this.$router.push({ name: "login" });
    },
    async update(datas) {
      try {
        const result = await userApi.put("/me", datas);
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
        const result = await teamApi.put(`/${this.team.id}`, datas);
        this.team = result.data;
        return result;
      } catch (error) {
        console.error("Update team failed:", error);
        throw error;
      }
    },
  },
});
