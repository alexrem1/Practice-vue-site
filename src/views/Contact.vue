<template>
  <div class="header-background ">
    <h1 class="text-center py-3">Contact form</h1>
    <div ref="success" class="d-flex justify-content-center"></div>

    <div class="d-flex justify-content-evenly">
      <form @submit.prevent="handleSubmit" class="my-3 body">
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
            type="email"
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
            type="number"
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
        </div>
      </form>
    </div>
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
    const success = ref(null);

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
        let html = `
         <h1 class="my-2 success text-center">Thank you for contacting us.<br/>
        We will get back to you as soon as possible.
        </h1>
    `;
        setTimeout(() => {
          success.value.innerHTML += html;
        });
        success.value = scrollTo(0, 0);
        name.value = "";
        email.value = "";
        phone.value = "";
        message.value = "";
      }
    };

    return {
      name,
      message,
      email,
      phone,
      handleSubmit,
      error,
      isPending,
      success,
    };
  },
};
</script>

<style scoped>
.body {
  opacity: 75%;
  min-width: 75%;
}
.input-group-text {
  font-size: 2rem;
}
.header-background {
  background-image: linear-gradient(
      180deg,
      rgba(50, 58, 69, 0.55),
      rgba(50, 58, 69, 0.74)
    ),
    url(../assets/images/contact.jpg);
}
.input-group-text {
  border-radius: 0;
}
</style>
