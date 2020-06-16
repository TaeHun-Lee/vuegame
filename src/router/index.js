import Vue from "vue";
import VueRouter from "vue-router";
import gameLink from "@/router/game/gameLink";

Vue.use(VueRouter);

const routes = [gameLink];

routes.forEach(route => {
  route.component = () => import("@/components/layouts/BaseLayout");
});

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
