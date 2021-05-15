<template>
  <div class="sticky-nav" id="nav">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <img src="@/assets/images/Fuzzies.png" alt="Home" />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
          <span></span>
          <span></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
          ref="collapse"
          @click="handleCollapse"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
            <li class="nav-item">
              <router-link
                :to="{
                  name: 'Home',
                }"
                class="nav-link"
              >
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="{
                  name: 'Services',
                }"
                class="nav-link"
              >
                Services
              </router-link>
            </li>

            <li class="nav-item">
              <div v-if="user">
                <router-link
                  :to="{
                    name: 'CreateEnquiry',
                  }"
                  class="nav-link"
                >
                  Make an Enquiry
                </router-link>
              </div>
            </li>
            <li class="nav-item">
              <div v-if="user">
                <router-link
                  :to="{
                    name: 'Account',
                  }"
                  class="nav-link"
                >
                  My Account
                </router-link>
              </div>
            </li>
            <li class="nav-item">
              <router-link
                :to="{
                  name: 'Contact',
                }"
                class="nav-link"
              >
                Contact us
              </router-link>
            </li>
          </ul>

          <form class="">
            <div v-if="user">
              <button @click.prevent="handleClick" class="btn">
                Log out
              </button>
            </div>
            <div v-else>
              <router-link
                :to="{
                  name: 'Signup',
                }"
                class="no-border"
              >
                <button
                  class="btn d-md-block d-lg-none d-xl-none m-1"
                  type="submit"
                >
                  Sign up
                </button>
              </router-link>
              <router-link
                :to="{
                  name: 'Login',
                }"
                class="no-border"
              >
                <button class="btn m-1">
                  Log in
                </button>
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from "../composables/useLogout";
import { useRouter } from "vue-router";
import getUser from "@/composables/getUser";
import { onMounted, ref } from "vue";

export default {
  setup() {
    const { error, logout } = useLogout();
    const router = useRouter();
    const { user } = getUser();
    const collapse = ref(null);

    const handleClick = async () => {
      await logout();
      if (!error.value) {
        console.log("User logged out");
        router.push({ name: "Home" });
      }
    };

    const handleCollapse = onMounted(() => {
      if (collapse.value.classList.contains("show")) {
        collapse.value.classList.remove("show");
      }
    });

    return { error, handleClick, user, handleCollapse, collapse };
  },
};
</script>

<style></style>
