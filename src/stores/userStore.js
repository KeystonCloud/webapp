import { defineStore } from "pinia";
import { mande, defaults } from "mande";

const userApi = mande("/api/user");

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      token: null,
      user: null,
    };
  },
  actions: {
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
        // Get user logged token
        this.token = (
          await userApi.post("/login", {
            email,
            password,
          })
        ).data;

        // Prepare authorization header for future requests
        const authorization = "Bearer " + this.token;
        userApi.options.headers.Authorization = authorization;
        defaults.headers.Authorization = authorization;

        // Get user info
        this.user = (await userApi.get("/me")).data;

        // Redirect to dashboard
        this.$router.push({ name: "dashboard" });
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
    async logout() {
      this.token = null;
      this.user = null;
      delete userApi.options.headers.Authorization;
      delete defaults.headers.Authorization;
      this.$router.push({ name: "home" });
    },
  },
});
