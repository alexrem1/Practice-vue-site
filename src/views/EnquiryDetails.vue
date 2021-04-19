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
      <button v-if="ownership" @click="handleDelete">Delete Enquiry</button>
    </div>
  </div>
</template>

<script>
import useStorage from "@/composables/useStorage";
import useDocument from "@/composables/useDocument";
import getDocument from "../composables/getDocument";
import getUser from "@/composables/getUser";
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  props: ["id"],
  setup(props) {
    const { error, document: enquiry } = getDocument("enquiries", props.id);
    const { user } = getUser();
    const { deleteDoc } = useDocument("enquiries", props.id);
    const { deleteImage } = useStorage();
    const router = useRouter();

    const handleDelete = async () => {
      await deleteImage(enquiry.value.filePath);
      await deleteDoc();
      router.push({ name: "Activity" });
    };

    const ownership = computed(() => {
      return (
        enquiry.value && user.value && user.value.uid == enquiry.value.userId
      );
    });

    return { error, enquiry, ownership, handleDelete };
  },
};
</script>

<style scoped>
.container {
  min-height: 85vh;
}
</style>
