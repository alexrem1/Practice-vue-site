<template>
  <div class="container">
    <h1>My account</h1>
    <div v-if="error" class="error">Could not fetch your enquiries</div>
    <div v-if="documents">
      <div v-for="doc in documents" :key="doc.id">
        <div class="d-flex flex-row justify-content-evenly p-5 ">
          {{ doc.subject }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "@/composables/getCollection";

export default {
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
