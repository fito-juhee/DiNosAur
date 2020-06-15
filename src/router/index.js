import Vue from "vue";
import VueRouter from "vue-router";

// Routes
import Home from "../views/Home.vue";
import FlexBox from "../views/layout/FlexBox.vue";

import Cards from "../views/components/Cards.vue";
import Progress from "../views/components/Progress.vue";
import Button from "../views/components/Button.vue";
import Table from "../views/components/Table.vue";

import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/layout/flexBox",
    name: "flexBox",
    component: FlexBox
  },
  {
    path: "/components/button",
    name: "button",
    component: Button
  },
  {
    path: "/components/card",
    name: "card",
    component: Cards
  },
  {
    path: "/components/progress-linear",
    name: "progress",
    component: Progress
  },
  {
    path: "/components/table",
    name: "table",
    component: Table
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound
  }
];

// Create a new router
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
