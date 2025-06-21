export const endpoints = {
  auth: {
    login: "/auth/login",
    megicLinkLogin: "/auth/magic-link",
    megicLinkLoginVerify: "/auth/magic-login/verify",
    register: "/auth/register",
    refresh: "/auth/refresh",
    google: "/auth/google",
  },
  products: {
    listProducts: "/",
  },
  supplier: {
    dashboardProducts: "/dashboard/",
    dashboardWidgets: "/dashboard/details/",
  },
};
