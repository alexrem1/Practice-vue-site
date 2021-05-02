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
      <button v-if="ownership" @click="handleDelete">Delete Enquiry</button>
    </div>
  </div>
  <div class="container">
    <ChatWindow />
    <form>
      <textarea
        placeholder="Type a message and hit enter to send"
        v-model="message"
        @keypress.enter.prevent="handleSubmit"
      ></textarea>
    </form>
  </div>
</template>

<script>
import useStorage from "@/composables/useStorage";
import useDocument from "@/composables/useDocument";
import getDocument from "@/composables/getDocument";
import getUser from "@/composables/getUser";
import useCollection from "@/composables/useCollection";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { timestamp } from "../../firebase/config";
import ChatWindow from "../../components/ChatWindow.vue";

export default {
  components: { ChatWindow },
  props: ["id"],
  setup(props) {
    const { error, document: enquiry } = getDocument("enquiries", props.id);
    const { user } = getUser();
    const { deleteDoc } = useDocument("enquiries", props.id);
    const { deleteImage } = useStorage();
    const { addDoc } = useCollection("support-chat");
    const router = useRouter();
    const message = ref("");

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

    const handleSubmit = async () => {
      const chat = {
        message: message.value,
        user: user.value.displayName,
        createdAt: timestamp(),
        userId: user.value.uid,
      };
      await addDoc(chat);
      if (!error.value) {
        message.value = "";
      } else {
        error.value = "You do not own this enquiry.";
      }
    };

    return {
      error,
      enquiry,
      ownership,
      handleDelete,
      handleSubmit,
      message,
    };
  },
};
</script>

<style scoped>
.container {
  min-height: 85vh;
}
form {
  margin: 10px;
}
textarea {
  width: 50%;
  max-width: 50%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>
