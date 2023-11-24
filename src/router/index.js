import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard.login",
      component: () => import("../views/auth/Login.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/Dashboard.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("auth_token");
  if (to.matched.some((record) => record.meta.authRequired)) {
    if (isLoggedIn == null) {
      next("/login");
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.guestRequired)) {
    if (isLoggedIn == null) {
      next();
    } else {
      next("/beranda");
    }
  } else {
    next();
  }
});

export default router;
