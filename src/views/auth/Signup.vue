<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <form @submit.prevent="handleSubmit" class="padding-signup">
        <div class="mb-3 mt-5 ">
          <label class="form-label">Username</label>
          <input
            type="text"
            class="form-control"
            required
            v-model="displayName"
          />

          <label class="form-label mt-3">Email address</label>
          <input type="email" class="form-control" required v-model="email" />
          <div class="form-text">
            We'll never share your email with anyone else.
          </div>
          <label class="form-label mt-3">Password</label>
          <input
            type="password"
            class="form-control"
            required
            v-model="password"
          />
          <div class="form-text">
            Your password must be 8-20 characters long.
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-8">
            <br />
            <input
              class="m-1"
              type="text"
              placeholder="First name"
              v-model="firstName"
              required
            />
            <input
              class="m-1"
              type="text"
              placeholder="Last name"
              v-model="lastName"
              required
            />
            <input
              class="m-1"
              type="text"
              placeholder="House no. and name"
              v-model="firstLine"
              required
            />
            <input
              class="m-1"
              type="text"
              placeholder="Street name"
              v-model="street"
              required
            />
            <br />
            <input
              class="m-1"
              type="text"
              placeholder="Postcode"
              v-model="postcode"
              required
            />
            <input
              class="m-1"
              type="number"
              maxlength="11"
              placeholder="Phone Number"
              v-model="phoneNumber"
              required
            />
          </div>
        </div>
        <div class="error" v-if="error">{{ error }}</div>
        <div class="d-flex justify-content-center">
          <button v-if="!isPending" class="btn mt-5 align-center">
            Sign up
          </button>
        </div>
        <div class="d-flex justify-content-center">
          <button v-if="isPending" class="btn mt-5" disabled>
            Loading
          </button>
          <div class="form-text mb-5">
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
import { ref } from "vue";
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
    };
  },
};
</script>

<style scoped>
.container {
  min-height: 85vh;
}
</style>
