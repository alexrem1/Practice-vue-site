<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <form @submit.prevent="handleSubmit">
        <div class="mb-3 mt-5">
          <label class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            required
            v-model="email"
            ref="emailFocus"
          />
        </div>
        <div>
          <label class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            required
            v-model="password"
          />
        </div>

        <div class="error mt-2" v-if="error">{{ error }}</div>
        <div class="d-flex justify-content-center">
          <button v-if="!isPending" class="btn mt-5">Log in</button>
        </div>
        <div class="d-flex justify-content-center">
          <button v-if="isPending" class="btn mb-3 mt-3" disabled>
            Loading
          </button>
          <div class="row text-center">
            <div class="col-12 form-text mt-3">
              Don't have an account?
              <router-link :to="{ name: 'Signup' }"> Sign up</router-link>
            </div>
            <div class="col-12 mt-3" @click.prevent="toggleForgot">
              <a> Forgot your password?</a>
            </div>
          </div>
        </div>
        <div v-if="showForgot" class="my-5">
          <ForgotPassword />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import useLogin from "@/composables/useLogin";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import ForgotPassword from "@/components/ForgotPassword";

export default {
  components: { ForgotPassword },
  setup() {
    const { error, login, isPending } = useLogin();
    const router = useRouter();

    const email = ref("");
    const password = ref("");
    const emailFocus = ref(null);
    const showForgot = ref(false);

    const toggleForgot = () => {
      showForgot.value = !showForgot.value;
    };

    onMounted(() => {
      emailFocus.value.focus();
    });

    const handleSubmit = async () => {
      const res = await login(email.value, password.value);
      if (!error.value) {
        console.log("User logged in");
        router.push({ name: "Home" });
      }
    };

    return {
      email,
      password,
      handleSubmit,
      error,
      isPending,
      emailFocus,
      showForgot,
      toggleForgot,
    };
  },
};
</script>

<style scoped>
.container {
  min-height: 85vh;
}
</style>
