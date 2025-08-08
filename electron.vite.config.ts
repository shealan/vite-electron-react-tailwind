import { resolve } from "path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        "@resources": resolve("resources"),
        "@renderer": resolve("src/renderer/src"),
        "@main": resolve("src/main/src"),
        "@preload": resolve("src/preload/src")
      }
    },
    plugins: [react(), tailwindcss()],
    build: {
      rollupOptions: {
        external: ["@resources/*"]
      }
    }
  }
});
