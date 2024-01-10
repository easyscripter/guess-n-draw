import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      public: `${path.resolve(__dirname, "./public/")}`,
      pages: path.resolve(__dirname, "./src/pages"),
      types: `${path.resolve(__dirname, "./src/@types")}`,
      translate: `${path.resolve(__dirname, "./src/translate")}`,
      config: `${path.resolve(__dirname, "./src/config")}`,
      enums: `${path.resolve(__dirname, "./src/enums")}`,
      hooks: `${path.resolve(__dirname, "./src/hooks")}`,
    },
  },
});
