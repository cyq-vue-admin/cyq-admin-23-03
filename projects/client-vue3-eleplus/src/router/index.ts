import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/components/Home.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    redirect: "/helloWorld",
    component: Home,
    children: [
      {
        path: "/helloWorld",
        name: "HelloWorld",
        component: () => import("@/components/HelloWorld.vue"),
      },
      {
        path: "/helloWorld2",
        name: "HelloWorld2",
        component: () => import("@/components/HelloWorld2.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//导出router
export default router;
