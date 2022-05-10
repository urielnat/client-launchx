import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/add",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  },
  {
    path: "/MC",
    alias: "/MC",
    name: "mission-commanders",
    component: () => import("./components/MCList")
  },
  {
    path: "/MC/:id",
    name: "MC-details",
    component: () => import("./components/MC")
  },
  {
    path: "/MC/add",
    name: "add-MC",
    component: () => import("./components/AddMC")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
