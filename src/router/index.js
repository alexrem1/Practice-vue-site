import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/auth/Login.vue";
import Signup from "../views/auth/Signup.vue";
import CreateEnquiry from "../views/Enquiries/CreateEnquiry.vue";
import Account from "../views/Account/Account.vue";
import Activity from "../views/Account/Activity.vue";
import Details from "../views/Account/Details.vue";
import EnquiryDetails from "../views/Enquiries/EnquiryDetails.vue";
import ChatSupport from "../views/Support/ChatSupport.vue";
import Services from "../views/Services.vue";
import Contact from "../views/Contact.vue";

// route guard
import { projectAuth } from "../firebase/config";

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: "Login" });
  } else {
    next();
  }
};

const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (user) {
    next("/");
  } else {
    next();
  }
};

const support = (to, from, next) => {
  let user = projectAuth.currentUser;

  if (user.displayName == `Support`) {
    next();
  } else {
    next({ name: "Home" });
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      let user = projectAuth.currentUser;

      if (user && user.displayName == `Support`) {
        next({ name: "ChatSupport" });
      } else {
        next();
      }
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: requireNoAuth,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    beforeEnter: requireNoAuth,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/contact-us",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/enquiry/create",
    name: "CreateEnquiry",
    component: CreateEnquiry,
    beforeEnter: requireAuth,
  },
  {
    path: "/enquiry/:id",
    name: "EnquiryDetails",
    component: EnquiryDetails,
    beforeEnter: requireAuth,
    props: true,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
    children: [
      {
        path: "activity",
        name: "Activity",
        component: Activity,
      },
      {
        path: "details/:id",
        name: "Details",
        component: Details,
        props: true,
      },
    ],
    beforeEnter: requireAuth,
  },
  {
    path: "/chat-support",
    name: "ChatSupport",
    component: ChatSupport,
    beforeEnter: support,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
