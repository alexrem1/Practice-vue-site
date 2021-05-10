<template>
  <div class="container">
    <div class="d-flex justify-content-evenly">
      <form @submit.prevent="handleSubmit">
        <div class="my-5 ">
          <input
            type="text"
            class="form-control"
            required
            v-model="displayName"
            ref="usernameFocus"
            placeholder="Username"
          />
          <input
            type="email"
            class="form-control mt-2"
            required
            v-model="email"
            placeholder="Email Address"
          />
          <div class="form-text">
            We'll never share your email with anyone else.
          </div>
          <input
            type="password"
            class="form-control mt-2"
            required
            v-model="password"
            placeholder="Password"
          />
          <div class="form-text">
            Your password must be 8-20 characters long.
          </div>
        </div>
        <div class="mb-3 mt-5 ">
          <input
            type="text"
            class="form-control"
            placeholder="First name"
            v-model="firstName"
            required
          />
          <input
            type="text"
            class="mt-2 form-control"
            placeholder="Last name"
            v-model="lastName"
            required
          />
          <input
            type="text"
            class="mt-2 form-control"
            placeholder="House no. and name"
            v-model="firstLine"
            required
          />
          <input
            type="text"
            class="mt-2 form-control"
            placeholder="Street name"
            v-model="street"
            required
          />
          <input
            type="text"
            class="mt-2 form-control"
            placeholder="Postcode"
            v-model="postcode"
            required
          />
          <input
            type="text"
            class="mt-2 form-control"
            placeholder="Phone no."
            v-model="phoneNumber"
            required
          />
        </div>

        <div class="error mt-2 " v-if="error">{{ error }}</div>
        <div class="d-flex justify-content-center">
          <button v-if="!isPending" class="btn mt-3 align-center">
            Sign up
          </button>
        </div>
        <div class="d-flex justify-content-center">
          <button v-if="isPending" class="btn mb-3 mt-3" disabled>
            Loading
          </button>
          <div class="form-text my-3">
            Already have an account?
            <router-link :to="{ name: 'Login' }"> Log in</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import useSignup from "@/composables/useSignup";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import useCollection from "@/composables/useCollection";
import getUser from "@/composables/getUser";
import { timestamp } from "@/firebase/config";

export default {
  setup() {
    const { error, signup, isPending } = useSignup();
    const { addDoc } = useCollection("userDetails");
    const { user } = getUser();

    const email = ref("");
    const password = ref("");
    const displayName = ref("");
    const router = useRouter();
    const firstName = ref("");
    const lastName = ref("");
    const firstLine = ref("");
    const street = ref("");
    const postcode = ref("");
    const phoneNumber = ref("");
    const usernameFocus = ref(null);

    onMounted(() => {
      usernameFocus.value.focus();
    });

    const handleSubmit = async () => {
      const res = await signup(email.value, password.value, displayName.value);
      await addDoc({
        firstName: firstName.value,
        lastName: lastName.value,
        firstLine: firstLine.value,
        street: street.value,
        postcode: postcode.value,
        createdAt: timestamp(),
        userId: user.value.uid,
        phoneNumber: phoneNumber.value,
      });
      if (!error.value) {
        console.log("User logged in");
        router.push({ name: "Home" });
      }
    };

    return {
      email,
      password,
      displayName,
      handleSubmit,
      error,
      isPending,
      firstName,
      lastName,
      firstLine,
      street,
      postcode,
      phoneNumber,
      usernameFocus,
    };
  },
};
</script>

<style scoped>
.container {
  min-height: 85vh;
}
</style>
