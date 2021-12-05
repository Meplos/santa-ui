import Vue from "vue";
import VueRouter from "vue-router";
import JoinParty from "../components/JoinParty";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Join",
    component: JoinParty,
  },
  {
    path: "/create",
    name: "Create",
    component: () => import("../components/CreateParty"),
  },
  {
    path: "/create/id/:id",
    name: "id",
    component: () => import("../components/Id"),
  },
  {
    path: "/party/:id",
    name: "Party",
    component: () => import("../components/ParticipantList"),
  },
  {
    path: "/party/:id/:name",
    name: "Santa",
    component: () => import("../components/Santa"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
