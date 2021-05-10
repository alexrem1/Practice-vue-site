<template>
  <div v-for="enquiry in enquiries" :key="enquiry.id">
    <div v-show="showEnquiry">
      <router-link :to="{ name: 'EnquiryDetails', params: { id: enquiry.id } }">
        <div class="single">
          <div class="thumbnail">
            <img class="img-fluid" :src="enquiry.coverUrl" alt="" />
          </div>
          <div class="info">
            <h3>{{ enquiry.subject }}</h3>
            <p>Created by {{ enquiry.userName }}</p>
            <!-- replace created by -->
          </div>
        </div>
      </router-link>
    </div>
  </div>
  <div class="d-flex justify-content-center">
    <button @click="toggleShowEnquiry" class="m-5 btn">
      <span>
        {{
          showEnquiry
            ? "Click to hide your enquiries activity"
            : "Click to show your enquiries activity"
        }}
      </span>
    </button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["enquiries"],
  setup() {
    const showEnquiry = ref(false);

    const toggleShowEnquiry = () => {
      showEnquiry.value = !showEnquiry.value;
    };

    return { toggleShowEnquiry, showEnquiry };
  },
};
</script>

<style scoped>
.single {
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background: black;
  margin: 16px 0;
  transition: all ease 0.2s;
  margin: 25px;
}
.single:hover {
  box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.05);
  transform: scale(1.02);
  transition: all ease 0.2s;
}
.thumbnail {
  max-width: 100px;
  max-height: 100px;
  overflow: hidden;
  border-radius: 10px;
}
img {
  max-width: 100%;
  max-height: 150%;
  display: block;
}
.info {
  margin-left: 1rem;
}
.song-number {
  margin-left: auto;
}
</style>
