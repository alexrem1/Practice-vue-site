<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="enquiry">
    <!-- playlist information -->
    <div class="container">
      <img :src="enquiry.coverUrl" />

      <h2>{{ enquiry.subject }}</h2>
      <p>Created by: {{ enquiry.userName }}</p>
      <p>{{ enquiry.description }}</p>
      <p>Created at {{ enquiry.createdAt }}</p>
      more to come
    </div>
  </div>
</template>

<script>
import getDocument from "../composables/getDocument";

export default {
  props: ["id"],
  setup(props) {
    const { error, document: enquiry } = getDocument("enquiries", props.id);

    return { error, enquiry };
  },
};
</script>

<style scoped>
.container {
  min-height: 85vh;
}
</style>
