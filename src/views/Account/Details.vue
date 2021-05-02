<template>
  <div class="container">
    <div class="error" v-if="error">{{ error }}</div>

    <div v-for="doc in documents" :key="doc.id">
      <form>
        <div class="row mt-5">
          <h1>Your details</h1>
          <div class="col-md-8">
            <br />
            <input class="m-1" type="text" :value="user.displayName" disabled />
            <input class="m-1" type="text" :value="user.email" disabled />
            <input class="m-1" type="text" :value="doc.firstName" disabled />
            <input class="m-1" type="text" :value="doc.lastName" disabled />
            <br />
            <input class="m-1" type="text" :value="doc.firstLine" disabled />
            <input class="m-1" type="text" :value="doc.street" disabled />
            <input class="m-1" type="text" :value="doc.postcode" disabled />
            <input class="m-1" type="text" :value="doc.phoneNumber" disabled />
          </div>
        </div>
      </form>
      <button v-if="!showUpdate" @click="showUpdate = true" class="btn mt-3">
        Update your details
      </button>

      <div class="display-3">
        You have been a Fuzzies member since: {{ doc.createdAt }}
      </div>

      <!-- update user details -->
      <div v-if="showUpdate">
        <div class="container">
          <form @submit.prevent="handleUpdate">
            <div class="row mt-5">
              <h1>Update your details</h1>
              <div class="col-md-8">
                <br />
                <input
                  class="m-1"
                  type="text"
                  v-model="firstName"
                  required
                  placeholder="First Name"
                />
                <input
                  class="m-1"
                  type="text"
                  v-model="lastName"
                  required
                  placeholder="Last Name"
                />
                <br />
                <input
                  class="m-1"
                  type="text"
                  v-model="firstLine"
                  required
                  placeholder="House no."
                />
                <input
                  class="m-1"
                  type="text"
                  v-model="street"
                  required
                  placeholder="Street Name"
                />
                <input
                  class="m-1"
                  type="text"
                  v-model="postcode"
                  required
                  placeholder="Postcode"
                />
                <input
                  class="m-1"
                  type="number"
                  v-model="phoneNumber"
                  required
                  placeholder="Phone Number"
                />
              </div>
              <div class="col-6 col-md-4">
                <div v-if="!isPending">
                  <button class="btn">
                    Update your details
                  </button>
                </div>
                <div v-if="isPending">
                  <button class="btn">Updating...</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getUser from "@/composables/getUser";
import getCollection from "@/composables/getCollection";
import useDocument from "@/composables/useDocument";
import { ref } from "vue";

export default {
  props: ["id"],
  setup(props) {
    const { user } = getUser();
    const { error, documents } = getCollection("userDetails", [
      "userId",
      "==",
      user.value.uid,
    ]);

    const isPending = ref(false);
    const showUpdate = ref(false);
    const firstName = ref("");
    const lastName = ref("");
    const firstLine = ref("");
    const street = ref("");
    const postcode = ref("");
    const phoneNumber = ref("");
    const { updateDoc } = useDocument("userDetails", props.id);

    const handleUpdate = async () => {
      await updateDoc({
        firstName: firstName.value,
        lastName: lastName.value,
        firstLine: firstLine.value,
        street: street.value,
        postcode: postcode.value,
        phoneNumber: phoneNumber.value,
      });
      showUpdate.value = false;
    };

    return {
      error,
      documents,
      user,
      showUpdate,
      firstName,
      lastName,
      firstLine,
      street,
      postcode,
      phoneNumber,
      handleUpdate,
      isPending,
    };
  },
};
</script>

<style scoped>
.container {
  min-height: 75vh;
}
</style>
