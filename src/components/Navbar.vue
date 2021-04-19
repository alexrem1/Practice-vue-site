<template>
  <div class="sticky-nav" id="nav">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <router-link
          :to="{
            name: 'Home',
          }"
          ><img src="../assets/images/Fuzzies.png" alt="Home"
        /></router-link>
        <!-- <span class="navbar-brand">Fuzzies</span> -->
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
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
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

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link
                    :to="{
                      name: 'Home',
                    }"
                    class="dropdown-item"
                    >Pet Sitting</router-link
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <router-link
                    :to="{
                      name: 'Home',
                    }"
                    class="dropdown-item"
                    >Pet walking</router-link
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <router-link
                    :to="{
                      name: 'Home',
                    }"
                    class="dropdown-item"
                    >Pet Grooming</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link
                :to="{
                  name: 'CreateEnquiry',
                }"
                class="nav-link"
              >
                Make an Enquiry
              </router-link>
            </li>
            <!-- make a dropdown: their details eg another form inside and activity for listview -->
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
                  name: 'Home',
                }"
                class="nav-link"
              >
                Testimonials</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{
                  name: 'Home',
                }"
                class="nav-link"
              >
                Contact us
              </router-link>
            </li>
          </ul>

          <form class="d-flex justify-content-start">
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
import getUser from "../composables/getUser";

export default {
  setup() {
    const { error, logout } = useLogout();
    const router = useRouter();
    const { user } = getUser();

    const handleClick = async () => {
      await logout();
      if (!error.value) {
        console.log("User logged out");
        router.push({ name: "Home" });
      }
    };

    return { error, handleClick, user };
  },
};
</script>

<style></style>
