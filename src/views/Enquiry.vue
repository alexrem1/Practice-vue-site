<template>
  <div class="container ">
    <form @submit.prevent="handleSubmit">
      <div class="text-muted d-flex justify-content-center heading mb-5">
        Because our service is free and we have a limited amount of specialists
        on hand at all times,
        <br />
        please make an enquiry. We will get back to you within 1-2 working days.
      </div>

      <!-- phone number -->
      <div class="mb-3 d-flex justify-content-center">
        <label>Phone number</label>
      </div>
      <div class="mb-3 d-flex justify-content-center">
        <input type="number" class="form-control" required v-model="number" />
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
        <button class="btn m-5">Contact us</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const number = ref("");
    const description = ref("");
    const file = ref(null);
    const fileError = ref(null);

    const handleSubmit = () => {
      if (file.value) {
        console.log(number.value, description.value, file.value);
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

    return { number, description, handleSubmit, handleChange, fileError };
  },
};
</script>

<style>
.form-control {
  width: 50%;
}
</style>
