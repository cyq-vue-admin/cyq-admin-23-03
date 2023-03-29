import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/components/HelloWorld.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/components/HelloWorld2.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//导出router
export default router;
