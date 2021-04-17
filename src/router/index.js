import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/auth/Login.vue";
import Signup from "../views/auth/Signup.vue";
import CreateEnquiry from "../views/CreateEnquiry.vue";
import Account from "../views/Account/Account.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/enquiry/create",
    name: "CreateEnquiry",
    component: CreateEnquiry,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
