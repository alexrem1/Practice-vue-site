<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="enquiry">
    <div class="container">
      <img :src="enquiry.coverUrl" />

      <h2>{{ enquiry.subject }}</h2>
      <p>Created by: {{ enquiry.userName }}</p>
      <p>{{ enquiry.description }}</p>
      <p>Created at {{ enquiry.createdAt }}</p>
      more to come
      <button v-if="ownership">Delete Enquiry</button>
    </div>
  </div>
</template>

<script>
import getDocument from "../composables/getDocument";
import getUser from "@/composables/getUser";
import { computed } from "vue";

export default {
  props: ["id"],
  setup(props) {
    const { error, document: enquiry } = getDocument("enquiries", props.id);
    const { user } = getUser();

    const ownership = computed(() => {
      return (
        enquiry.value && user.value && user.value.uid == enquiry.value.userId
      );
    });

    return { error, enquiry, ownership };
  },
};
</script>

<style scoped>
.container {
  min-height: 85vh;
}
</style>
