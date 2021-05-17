<template>
  <div class="container">
    <div v-if="error" class="error">You have no activity...</div>
    <div v-if="enquiry">
      <ListView :enquiries="enquiry" />
    </div>
  </div>
</template>

<script>
import getCollection from "@/composables/getCollection";
import getUser from "@/composables/getUser";
import ListView from "@/components/ListView.vue";

export default {
  components: { ListView },
  setup() {
    const { user } = getUser();
    const { error, documents: enquiry } = getCollection("enquiries", [
      "userId",
      "==",
      user.value.uid,
    ]);

    return { error, enquiry };
  },
};
</script>

<style scoped></style>
