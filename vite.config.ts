import Vue from "@vitejs/plugin-vue";
import * as CompilerSFC from "@vue/compiler-sfc";
import { defineConfig } from "vite";
import { DevPlugin } from "./setup/dev";

export default defineConfig({
  build: {
    target: "esnext",
  },
  clearScreen: false,
  plugins: [
    Vue({ compiler: CompilerSFC }),
    DevPlugin(),
  ],
});
