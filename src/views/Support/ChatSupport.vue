<template>
  <div class="container">
    <div v-if="enquiry">
      <SupportView :enquiries="enquiry" />
    </div>
  </div>
</template>

<script>
import getCollection from "@/composables/getCollection";
import SupportView from "@/components/Support/SupportView.vue";

export default {
  components: { SupportView },
  setup() {
    const { error, documents: enquiry } = getCollection("enquiries");

    return { error, enquiry };
  },
};
</script>

<style scoped>
.container {
  min-height: 85vh;
}
</style>
