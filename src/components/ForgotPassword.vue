<template>
  <form @submit.prevent="forgetPassword">
    <div class="form-group">
      <input
        type="email"
        class="form-control form-control-lg"
        v-model="email"
        placeholder="Email"
      />
    </div>

    <button type="submit" class="btn my-3">
      Reset password
    </button>
  </form>
</template>

<script>
import getPassword from "@/composables/getPassword";

export default {
  setup() {
    const { forgetPassword, email } = getPassword();

    return { email, forgetPassword };
  },
};
</script>
