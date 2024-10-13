import { startVite } from "vite-hyper-config";
import { DevPlugin } from "./dev";

startVite(
  undefined,
  { plugins: [DevPlugin()] },
  { deps: { inline: ["@vitejs/plugin-vue"] } },
);
