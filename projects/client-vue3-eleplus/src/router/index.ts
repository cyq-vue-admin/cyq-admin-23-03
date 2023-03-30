import Home from "@/components/Home.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
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
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//导出router
export default router;
