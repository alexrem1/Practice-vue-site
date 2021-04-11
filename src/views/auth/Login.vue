<template>
  <div class="container">
    <div class="d-flex justify-content-center h-100">
      <form @submit.prevent="handleSubmit" class="padding-login">
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input type="email" class="form-control" required v-model="email" />
          <div class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            required
            v-model="password"
          />
        </div>
        <div class="error" v-if="error">{{ error }}</div>
        <button v-if="!isPending" class="btn mt-2">Log in</button>
        <button v-if="isPending" class="btn mt-2" disabled>Loading</button>
      </form>
    </div>
  </div>
</template>

<script>
import useLogin from "@/composables/useLogin";
import { ref } from "vue";
export default {
  setup() {
    const { error, login, isPending } = useLogin();

    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      const res = await login(email.value, password.value);
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

.padding-login {
  padding-top: 12%;
}
</style>
