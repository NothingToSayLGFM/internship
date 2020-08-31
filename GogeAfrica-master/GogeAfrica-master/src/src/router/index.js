import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../pages/MainPage.vue";
import CoursePage from "../pages/CoursePage.vue";
import CartPage from "../pages/CartPage.vue";
import DeliveryPage from "../pages/DeliveryPage.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    exact: true,
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/course/",
    name: "CoursePage",
    component: CoursePage,
  },
  {
    path: "/cart/",
    name: "CartPage",
    component: CartPage,
  },
  {
    path: "/delivery/",
    name: "DeliveryPage",
    component: DeliveryPage,
  },

  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
