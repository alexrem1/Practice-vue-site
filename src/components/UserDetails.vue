<template>
  <div class="container">
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
          </div>
        </div>
      </form>
      <button v-if="!showUpdate" @click="showUpdate = true" class="btn mt-3">
        Update your details
      </button>

      <div class="display-4">
        You have been a Fuzzies member from {{ doc.createdAt }}
      </div>

      <!-- update user details -->
      <div v-if="showUpdate">
        <div class="container">
          <form @submit.prevent="handleUpdate">
            <div class="row mt-5">
              <h1>Update your details</h1>
              <div class="col-md-8">
                <br />
                <input class="m-1" type="text" v-model="firstName" />
                <input class="m-1" type="text" v-model="lastName" />
                <br />
                <input class="m-1" type="text" v-model="firstLine" />
                <input class="m-1" type="text" v-model="street" />
                <input class="m-1" type="text" v-model="postcode" />
              </div>
              <div class="col-6 col-md-4">
                <div v-if="!isPending">
                  <button class="btn">Submit</button>
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
  component: { UpdateUserDetails },
  props: ["userDetailData", "id"],
  setup(props) {
    const { user } = getUser();
    const { documents } = getCollection("userDetails", [
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
    const { updateDoc } = useDocument("userDetails", props.id);

    const handleUpdate = async () => {
      await updateDoc({
        firstName: firstName.value,
        lastName: lastName.value,
        firstLine: firstLine.value,
        street: street.value,
        postcode: postcode.value,
      });
      //   $refs.updateSuccessful.classList.add("active");
    };

    return {
      documents,
      user,
      showUpdate,
      firstName,
      lastName,
      firstLine,
      street,
      postcode,
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
