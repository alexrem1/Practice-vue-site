<template>
  <div class="container">
    <div v-for="doc in formattedDocuments" :key="doc.id">
      <div class="d-flex justify-content-center">
        <p class="mt-5 text-center mark">
          You have been a Fuzzies member for {{ doc.createdAt }}
        </p>
      </div>
      <form class="mt-5">
        <div class="row mt-3 text-center">
          <div class="col-12 col-lg-6">
            <input class="m-1" type="text" :value="doc.displayName" disabled />
          </div>
          <div class="col-12 col-lg-6">
            <input class="m-1" type="text" :value="doc.email" disabled />
          </div>
          <div class="col-12 col-lg-6">
            <input class="m-1" type="text" :value="doc.firstName" disabled />
          </div>
          <div class="col-12 col-lg-6">
            <input class="m-1" type="text" :value="doc.lastName" disabled />
          </div>
          <div class="col-12 col-lg-6">
            <input class="m-1" type="text" :value="doc.firstLine" disabled />
          </div>
          <div class="col-12 col-lg-6">
            <input class="m-1" type="text" :value="doc.street" disabled />
          </div>
          <div class="col-12 col-lg-6">
            <input class="m-1" type="text" :value="doc.postcode" disabled />
          </div>
          <div class="col-12 col-lg-6">
            <input class="m-1" type="text" :value="doc.phoneNumber" disabled />
          </div>
        </div>
      </form>
      <div class="text-center">
        <button
          v-if="!showUpdate"
          @click="showUpdate = true"
          class="btn mt-5 mb-5 "
        >
          Update your details
        </button>
      </div>
      <div ref="updateSuccessful" class="success"></div>

      <!-- update user details -->
      <div v-if="showUpdate">
        <div class="container">
          <form @submit.prevent="handleUpdate">
            <div class="row mt-5 text-center">
              <h5 class="mb-3">Update your details down below</h5>
              <div class="col-12 col-lg-6">
                <input
                  class="m-1"
                  type="text"
                  v-model="firstName"
                  required
                  placeholder="First Name"
                />
              </div>
              <div class="col-12 col-lg-6">
                <input
                  class="m-1"
                  type="text"
                  v-model="lastName"
                  required
                  placeholder="Last Name"
                />
              </div>
              <div class="col-12 col-lg-6">
                <input
                  class="m-1"
                  type="text"
                  v-model="firstLine"
                  required
                  placeholder="House no."
                />
              </div>
              <div class="col-12 col-lg-6">
                <input
                  class="m-1"
                  type="text"
                  v-model="street"
                  required
                  placeholder="Street Name"
                />
              </div>
              <div class="col-12 col-lg-6">
                <input
                  class="m-1"
                  type="text"
                  v-model="postcode"
                  required
                  placeholder="Postcode"
                />
              </div>
              <div class="col-12 col-lg-6">
                <input
                  class="m-1"
                  type="number"
                  v-model="phoneNumber"
                  required
                  placeholder="Phone no."
                />
              </div>
              <div class="col-md-12 mt-5 text-center">
                <div v-if="!isPending">
                  <button class="btn">
                    Update your details
                  </button>
                </div>
                <div v-if="isPending">
                  <button class="btn">Updating...</button>
                </div>
                <button class="btn mt-2" @click="showUpdate = false">
                  Close
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="error" v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import getUser from "@/composables/getUser";
import getCollection from "@/composables/getCollection";
import useDocument from "@/composables/useDocument";
import { ref, computed, onUpdated } from "vue";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

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
    const updateSuccessful = ref(null);

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
      let html = `
        <h1 class="mt-2">Your details have successfully been updated.</h1>
    `;
      setTimeout(() => {
        updateSuccessful.value.innerHTML += html;
      });
    };

    // computed documents to a more appealing structure
    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    });

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
      formattedDocuments,
      updateSuccessful,
    };
  },
};
</script>

<style scoped>
.container {
  min-height: 85vh;
}

.mark {
  background-color: #fcf8e3;
  color: black;
  width: 50%;
}
</style>
