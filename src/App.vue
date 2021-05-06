<template>
  <div v-if="!user"><Navbar /></div>
  <div v-else-if="user.displayName == `Support`">
    <SupportNavbar />
  </div>
  <div v-else-if="user">
    <Navbar />
  </div>
  <router-view />
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
</style>
