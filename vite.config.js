import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import "dotenv/config";

export default defineConfig(() => {
  return {
    plugins: [vue(), tailwindcss()],
    server: {
      cors: true,
      host: "0.0.0.0",
      proxy: {
        "/api": {
          target: process.env.VITE_SATELLITE_HOST,
          changeOrigin: true,
        },
      },
    },
    resolve: {
      alias: [
        {
          find: "@",
          replacement: fileURLToPath(new URL("./src", import.meta.url)),
        },
      ],
    },
  };
});
