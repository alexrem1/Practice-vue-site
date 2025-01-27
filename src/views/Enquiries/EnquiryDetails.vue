<template>
  <div v-if="enquiry">
    <div class="container">
      <p class="p-3 text-center">
        This enquiry belongs to: {{ enquiry.userName }}
      </p>
      <div v-if="error" class="error">{{ error }}</div>
      <div class="card mb-5 mt-5">
        <div class="card-header text-center p-3">
          {{ enquiry.subject }}
        </div>
        <div class="card-body text-center">
          <h5 class="card-title">
            <img
              class="img-fluid"
              width="750"
              height="750"
              :src="enquiry.coverUrl"
            />
          </h5>
          <p class="card-text p-3">
            {{ enquiry.description }}
          </p>
        </div>
        <div class="card-footer text-muted text-center">
          <button v-if="ownershipSupport" @click="handleDelete" class="btn">
            Delete Enquiry
          </button>
        </div>
      </div>
      <div class="heading pt-5">
        <mark>Enter the support chat below for help with your enquiry.</mark>
      </div>
      <ChatWindow :chatEnquiry="enquiry" />
    </div>
  </div>
  <div v-else>
    <Spinner />
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
import Spinner from "@/components/Spinner.vue";

export default {
  components: { ChatWindow, Spinner },
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
      alert(
        "We hope we solved your enquiry and if you have any other questions, please don't hesitate to contact us or make another enquiry"
      );
    };

    const ownershipSupport = computed(() => {
      return (
        enquiry.value && user.value && user.value.uid == enquiry.value.userId
      );
    });

    return {
      error,
      enquiry,
      ownershipSupport,
      handleDelete,
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
  font-weight: 900;
  background-color: rgb(232, 235, 229);
}
</style>
