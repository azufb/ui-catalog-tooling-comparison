import { createRouter, createWebHistory } from "vue-router";
import UiCatalog from "@/pages/UiCatalog.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/ui-catalog",
      component: UiCatalog,
    },
  ],
});
