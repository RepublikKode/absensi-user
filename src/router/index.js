import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard.login",
      component: () => import("../views/auth/Login.vue"),
      meta: {
        guestRequired: true,
      },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/Dashboard.vue"),
      meta: {
        authRequired: true,
      },
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: () => import("../views/Detail.vue"),
      meta: {
        authRequired: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("auth_token");
  if (to.matched.some((record) => record.meta.authRequired)) {
    if (isLoggedIn == null) {
      next("/");
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.guestRequired)) {
    if (isLoggedIn == null) {
      next();
    } else {
      next("/dashboard");
    }
  } else {
    next();
  }
});

export default router;
