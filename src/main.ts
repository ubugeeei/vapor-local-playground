/// <reference types="vite/client" />

import { createApp } from "vue";
import { createVaporApp } from "vue/vapor";

const modules = import.meta.glob<any>("./**/*.(vue|js)");
const mod = (modules[`.${location.pathname}`] || modules["./App.vue"])();

mod.then(({ default: mod }) => {
  const app = (mod.vapor ? createVaporApp : createApp)(mod);
  app.mount("#app");

  (globalThis as any).unmount = () => {
    app.unmount();
  };
});
