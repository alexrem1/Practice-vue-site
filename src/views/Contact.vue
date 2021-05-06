<template>
  <div class="container body d-flex justify-content-center">
    <form @submit.prevent="handleSubmit" class="w-50 my-5">
      <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <i class="far fa-user"></i>
          </div>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Name"
          v-model="name"
          required
        />
      </div>
      <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <i class="far fa-paper-plane"></i>
          </div>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Email"
          v-model="email"
          required
        />
      </div>
      <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <i class="fas fa-phone-alt"></i>
          </div>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Phone"
          v-model="phone"
          required
        />
      </div>
      <div class="form-group">
        <textarea
          class="form-control"
          rows="10"
          placeholder="Your message..."
          v-model="message"
          required
        ></textarea>
      </div>
      <div class="d-flex justify-content-center">
        <button v-if="!isPending" class="btn m-5">Contact us</button>
        <button v-if="isPending" class="btn m-5">Contacting...</button>
        <div id="success"></div>
      </div>
    </form>
  </div>
</template>

<script>
import useCollection from "@/composables/useCollection";
import { ref } from "vue";
import { timestamp } from "../firebase/config";
export default {
  setup() {
    const { error, addDoc } = useCollection("contact-us");

    const name = ref("");
    const email = ref("");
    const phone = ref("");
    const message = ref("");
    const isPending = ref(false);

    const handleSubmit = async () => {
      isPending.value = true;
      await addDoc({
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
        createdAt: timestamp(),
      });
      isPending.value = false;
      if (!error.value) {
        console.log(
          "Thanks for messaging us, show below the button eventually"
        );
        //alert logic here
      }
    };

    return { name, message, email, phone, handleSubmit, error, isPending };
  },
};
</script>

<style scoped>
.container {
  min-height: 100vh;
}
.body {
  background-color: grey;
  border-radius: 10%;
  margin: 5rem;
}
.input-group-text {
  font-size: 2rem;
}
.form {
  background-color: red;
}
</style>
