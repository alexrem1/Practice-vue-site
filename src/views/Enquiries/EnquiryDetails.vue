<template>
  <div v-if="error" class="error">{{ error }}</div>
  <div v-if="enquiry">
    <div class="container">
      <img :src="enquiry.coverUrl" />

      <h2>{{ enquiry.subject }}</h2>
      <p>Created by: {{ enquiry.userName }}</p>
      <p>{{ enquiry.description }}</p>
      <p>Created at {{ enquiry.createdAt }}</p>
      more to come
      <br />
      <button v-if="ownership" @click="handleDelete" class="btn">
        Delete Enquiry
      </button>

      <div v-if="support" class="my-5">
        <button class="btn" @click="toggleCompleted">
          {{ completed ? "Enquiry complete" : "Enquiry incomplete" }}
        </button>
      </div>
      <ChatWindow />
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
    const completed = ref(false);

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

    const ownership = computed(() => {
      return (
        (enquiry.value &&
          user.value &&
          user.value.uid == enquiry.value.userId) ||
        user.value.displayName == "Support"
      );
    });
    const support = computed(() => {
      return user.value.displayName == "Support";
    });

    return {
      error,
      enquiry,
      ownership,
      handleDelete,
      support,
      toggleCompleted,
      completed,
    };
  },
};
</script>

<style scoped>
.container {
  min-height: 85vh;
}
</style>
