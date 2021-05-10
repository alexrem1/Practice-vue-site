<template>
  <div v-if="error" class="error">{{ error }}</div>
  <div v-if="enquiry">
    <div class="container">
      <div class="card mb-5 mt-5">
        <div class="card-header text-center p-3">
          {{ enquiry.subject }}
        </div>
        <div class="card-body text-center">
          <h5 class="card-title">
            <img class="img-fluid" :src="enquiry.coverUrl" />
          </h5>
          <p class="card-text p-3">
            {{ enquiry.description }}
          </p>
          <p class="card-text p-3">Created by: {{ enquiry.userName }}</p>
        </div>
        <div class="card-footer text-muted text-center">
          <button v-if="ownershipSupport" @click="handleDelete" class="btn">
            Delete Enquiry
          </button>
        </div>
        <ChatWindow />
      </div>
    </div>
  </div>
</template>

<script>
import useStorage from "@/composables/useStorage";
import useDocument from "@/composables/useDocument";
import getDocument from "@/composables/getDocument";
import getUser from "@/composables/getUser";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import ChatWindow from "@/components/Support/ChatWindow.vue";

export default {
  components: { ChatWindow },
  props: ["id"],
  setup(props) {
    const { error, document: enquiry } = getDocument("enquiries", props.id);
    const { user } = getUser();
    const { deleteDoc } = useDocument("enquiries", props.id);
    const { deleteImage } = useStorage();
    const router = useRouter();

    const toggleCompleted = () => {
      completed.value = !completed.value;
      const delay = setTimeout(() => {
        router.push({ name: "ChatSupport" });
      }, 3000);
    };

    const handleDelete = async () => {
      await deleteImage(enquiry.value.filePath);
      await deleteDoc();
      router.push({ name: "Activity" });
    };

    const ownershipSupport = computed(() => {
      return (
        (enquiry.value &&
          user.value &&
          user.value.uid == enquiry.value.userId) ||
        user.value.displayName == "Support"
      );
    });

    return {
      error,
      enquiry,
      ownershipSupport,
      handleDelete,
      toggleCompleted,
    };
  },
};
</script>

<style scoped>
.container {
  min-height: 80vh;
}
.card {
  color: rgb(53 205 151 / 61%);
  font-weight: bolder;
}
</style>
