<template>
  <div class="container ">
    <form @submit.prevent="handleSubmit">
      <div class="text-muted d-flex justify-content-center heading mb-5">
        Because our service is free and we have a limited amount of specialists
        on hand at all times,
        <br />
        please make an enquiry. We will get back to you within 1-2 working days.
      </div>

      <!-- Subject  -->
      <div class="mb-3 d-flex justify-content-center">
        <label>Subject</label>
      </div>
      <div class="mb-3 d-flex justify-content-center">
        <input
          type="text"
          class="form-control"
          placeholder="What is the nature of your enquiry?"
          required
          v-model="subject"
          ref="subjectFocus"
        />
      </div>

      <!-- description -->
      <div class="mb-3 d-flex justify-content-center">
        <label>Description</label>
      </div>
      <div class="mb-3 d-flex justify-content-center">
        <textarea
          class="form-control"
          rows="5"
          placeholder="Please go into detail about what your dog requires from our specialists and what services you would like."
          required
          v-model="description"
        ></textarea>
      </div>

      <!--upload playlist image -->
      <div class="mb-3">
        <div class="d-flex justify-content-center">
          <label for="formFile" class="form-label"
            >Upload a picture of your dog</label
          >
        </div>
        <div class="d-flex justify-content-center">
          <input class="form-control" type="file" @change="handleChange" />
        </div>
        <div class="error m-1 text-center">{{ fileError }}</div>
      </div>

      <div class="error mb-2 text-center"></div>
      <div class="d-flex justify-content-center">
        <button v-if="!isPending" class="btn m-5">Create Enquiry</button>
        <button v-if="isPending" class="btn m-5">Saving...</button>
      </div>
    </form>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import useStorage from "@/composables/useStorage";
import useCollection from "@/composables/useCollection";
import getUser from "@/composables/getUser";
import { timestamp } from "@/firebase/config";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { url, filePath, uploadImage } = useStorage();
    const { error, addDoc } = useCollection("enquiries");
    const { user } = getUser();

    const subject = ref("");
    const description = ref("");
    const file = ref(null);
    const fileError = ref(null);
    const isPending = ref(false);
    const router = useRouter();
    const subjectFocus = ref(null);

    onMounted(() => {
      subjectFocus.value.focus();
    });

    const handleSubmit = async () => {
      if (file.value) {
        isPending.value = true;

        await uploadImage(file.value);
        const res = await addDoc({
          subject: subject.value,
          description: description.value,
          userId: user.value.uid,
          userName: user.value.displayName,
          coverUrl: url.value,
          filePath: filePath.value,
          enquireAmount: [],
          createdAt: timestamp(),
        });
        // end
        isPending.value = false;
        if (!error.value) {
          console.log("enquiry added");
          router.push({ name: "EnquiryDetails", params: { id: res.id } });
        }
      }
    };

    // allowed file types
    const types = ["image/png", "image/jpeg"];

    const handleChange = (e) => {
      const selected = e.target.files[0];
      console.log(selected);

      if (selected && types.includes(selected.type)) {
        file.value = selected;
        fileError.value = null;
      } else {
        file.value = null;
        fileError.value = "Please select and image file (png or jpg)";
      }
    };

    return {
      subject,
      description,
      handleSubmit,
      handleChange,
      fileError,
      isPending,
      subjectFocus,
    };
  },
};
</script>

<style scoped>
.form-control {
  width: 50%;
}
</style>
