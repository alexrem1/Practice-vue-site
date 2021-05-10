<template>
  <div class="container">
    <div class="d-none d-md-block ">
      <div class="d-flex justify-content-evenly">
        <router-link :to="{ name: 'Activity' }">
          <h1>Activity</h1>
        </router-link>
        <div v-for="doc in documents" :key="doc.id">
          <router-link :to="{ name: 'Details', params: { id: doc.id } }">
            <h1>Details</h1>
          </router-link>
        </div>
      </div>
    </div>
    <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none">
      <div class="row text-center">
        <div class="col-12 pb-5">
          <router-link :to="{ name: 'Activity' }">
            <h1>Activity</h1>
          </router-link>
        </div>
        <div class="col-12 pt-5">
          <div v-for="doc in documents" :key="doc.id" cl>
            <router-link :to="{ name: 'Details', params: { id: doc.id } }">
              <h1>Details</h1>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "@/composables/getCollection";
import getUser from "../../composables/getUser";

export default {
  setup() {
    const { user } = getUser();
    const { error, documents } = getCollection("userDetails", [
      "userId",
      "==",
      user.value.uid,
    ]);

    return { error, user, documents };
  },
};
</script>

<style scoped>
.container {
  padding-top: 115px;
  min-height: 88vh;
}
</style>
