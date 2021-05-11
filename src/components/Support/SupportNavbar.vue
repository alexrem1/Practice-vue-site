<template>
  <div class="sticky-nav" id="nav">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <router-link
          :to="{
            name: 'Home',
          }"
          ><img src="@/assets/images/Fuzzies.png" alt="Home"
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
                  name: 'ChatSupport',
                }"
                class="nav-link"
              >
                Chat Support
              </router-link>
            </li>
          </ul>

          <form>
            <div v-if="user.displayName == `Support`">
              <span>You're logged in as: {{ user.displayName }}</span>
              <button @click.prevent="handleClick" class="btn m-3">
                Log out
              </button>
            </div>
            <div v-else-if="!user.displayName">
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
import useLogout from "../../composables/useLogout";
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
