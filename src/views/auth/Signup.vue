<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <form @submit.prevent="handleSubmit" class="padding-signup">
        <div class="mb-3">
          <label class="form-label">Username</label>
          <input
            type="username"
            class="form-control"
            required
            v-model="username"
          />
          <label class="form-label pt-3">Email address</label>
          <input type="email" class="form-control" required v-model="email" />
          <div class="form-text">
            We'll never share your email with anyone else.
          </div>
          <label class="form-label pt-3">Password</label>
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
        <div class="error" v-if="error">{{ error }}</div>
        <div class="d-flex justify-content-center">
          <button v-if="!isPending" class="btn mt-5 align-center">
            Sign up
          </button>
        </div>
        <div class="d-flex justify-content-center">
          <button v-if="isPending" class="btn mt-5" disabled>Loading</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import useSignup from "@/composables/useSignup";
import { ref } from "vue";
export default {
  setup() {
    const { error, signup, isPending } = useSignup();

    const email = ref("");
    const password = ref("");
    const username = ref("");

    const handleSubmit = async () => {
      const res = await signup(email.value, password.value);
      if (!error.value) {
        console.log("User logged in");
      }
    };

    return { email, password, handleSubmit, error, isPending };
  },
};
</script>

<style scoped>
.container {
  min-height: 85vh;
}

.padding-signup {
  padding-top: 12%;
}
</style>
