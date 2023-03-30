import Home from "@/components/Home.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    redirect: "/welcome",
    component: Home,
    children: [
      {
        path: "/welcome",
        name: "Welcome",
        component: () => import("@/components/Welcome.vue"),
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
