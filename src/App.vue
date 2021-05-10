<template>
  <div v-if="!user"><Navbar /></div>
  <div v-else-if="user.displayName == `Support`">
    <SupportNavbar />
  </div>
  <div v-else-if="user">
    <Navbar />
  </div>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import getUser from "@/composables/getUser";
import SupportNavbar from "@/components/Support/SupportNavbar.vue";

export default {
  components: { Navbar, Footer, SupportNavbar },
  setup() {
    const { user } = getUser();

    return { user };
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
