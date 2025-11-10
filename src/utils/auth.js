import pinia from "@/stores";
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore(pinia);

const auth = {
  async isLoggedIn() {
    await userStore.load();
    return !!localStorage.getItem("token");
  },
};

export default auth;
