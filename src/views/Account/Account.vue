<template>
  <div class="container">
    <h1>My account</h1>
    <div v-if="error" class="error">Could not fetch your enquiries</div>
    <div v-if="documents">
      <ListView :enquiries="documents" />
    </div>
  </div>
</template>

<script>
import getCollection from "@/composables/getCollection";
import ListView from "@/components/ListView.vue";

export default {
  components: { ListView },
  setup() {
    const { error, documents } = getCollection("enquiries");

    return { error, documents };
  },
};
</script>

<style scoped>
.container {
  min-height: 85vh;
}
</style>
